"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Download, MoreHorizontal, Plus, Search, Sparkles, TrendingDown, TrendingUp } from "lucide-react";
import { toast } from "sonner";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { ScreenConfig } from "./restaurant-dashboard-data";

type Props = { screen: ScreenConfig };

const statusVariant = (status: string): "default" | "secondary" | "outline" | "destructive" => {
  if (["Ready", "Completed", "Settled", "Paid", "Available", "In stock", "Healthy", "Active", "Active customer", "VIP customer", "On shift", "Performing", "Complete"].includes(status)) return "default";
  if (["In preparation", "In production", "Scheduled", "Partial", "Reorder soon", "Low stock", "Reserved", "On plan", "Frequent visitor", "New customer", "Ready"].includes(status)) return "secondary";
  if (["Awaiting payment", "Happy hour", "Monitor", "Draft", "Leave request", "At risk", "Out for delivery"].includes(status)) return "outline";
  return "destructive";
};

function MetricCard({ metric }: { metric: ScreenConfig["metrics"][number] }) {
  const Icon = metric.trend === "down" ? TrendingDown : metric.trend === "up" ? TrendingUp : ArrowUpRight;
  return (
    <Card size="sm">
      <CardContent className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground">{metric.label}</span>
          <span className="font-heading text-2xl font-semibold tracking-tight">{metric.value}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground"><Icon className="size-3.5" />{metric.change} vs last period</span>
        </div>
        <div className="rounded-lg bg-primary/10 p-2 text-primary"><ArrowUpRight className="size-4" /></div>
      </CardContent>
    </Card>
  );
}

function TrendPanel({ screen }: Props) {
  const bars = [48, 62, 56, 70, 64, 86, 78, 92, 76, 100, 88, 94];
  return (
    <Card className="min-w-0">
      <CardHeader className="border-b">
        <CardTitle>{screen.focus === "menu" ? "Menu performance" : screen.focus === "operations" ? "Service performance" : "Sales performance"}</CardTitle>
        <CardDescription>Live business activity across Mugenzi Restaurant</CardDescription>
        <CardAction><Button variant="outline" size="sm">Last 7 days <ChevronDown data-icon="inline-end" /></Button></CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 pt-5">
        <div className="flex items-end justify-between gap-3"><div><p className="text-3xl font-semibold tracking-tight">RWF 18.42M</p><p className="text-xs text-muted-foreground">+14.6% from previous period</p></div><Badge>Healthy pace</Badge></div>
        <div className="flex h-40 items-end gap-2" aria-label="Revenue trend chart">
          {bars.map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary" style={{ height: `${Math.round(height * 1.25)}px` }} /><span className="text-[10px] text-muted-foreground">{["M", "T", "W", "T", "F", "S"][index % 6]}</span></div>)}
        </div>
      </CardContent>
    </Card>
  );
}

function Highlights({ screen }: Props) {
  return <div className="grid gap-3 sm:grid-cols-3">{screen.highlights.map((highlight) => <Card key={highlight.label} size="sm"><CardContent className="flex flex-col gap-1"><span className="text-xs text-muted-foreground">{highlight.label}</span><span className="font-heading font-medium">{highlight.value}</span><span className="text-xs text-muted-foreground">{highlight.note}</span></CardContent></Card>)}</div>;
}

function FeaturePanel({ screen }: Props) {
  return (
    <Card>
      <CardHeader className="border-b"><CardTitle>RUNME capabilities</CardTitle><CardDescription>This workspace connects the modules described in your product plan.</CardDescription></CardHeader>
      <CardContent className="grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-4">
        {screen.features.map((feature) => <div key={feature} className="flex items-center gap-2 rounded-lg border bg-muted/30 p-3 text-sm"><Check className="size-4 text-primary" />{feature}</div>)}
      </CardContent>
    </Card>
  );
}

function DataTable({ screen }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const filteredRows = useMemo(() => screen.rows.filter((row) => `${row.primary} ${row.secondary} ${row.status}`.toLowerCase().includes(query.toLowerCase()) && (filter === "all" || row.status === filter)), [filter, query, screen.rows]);
  const statuses = [...new Set(screen.rows.map((row) => row.status))];
  return (
    <Card>
      <CardHeader className="border-b"><CardTitle>{screen.focus === "menu" ? "Menu items" : screen.focus === "crm" ? "Customer records" : screen.focus === "operations" ? "Live operations" : screen.focus === "inventory" ? "Inventory watchlist" : "Latest activity"}</CardTitle><CardDescription>Search, filter, and take action on this workspace&apos;s live records.</CardDescription><CardAction><Button variant="ghost" size="icon-sm" aria-label="More options"><MoreHorizontal /></Button></CardAction></CardHeader>
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center"><div className="relative flex-1"><Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${screen.title.toLowerCase()}`} className="pl-9" /></div><Select value={filter} onValueChange={setFilter}><SelectTrigger aria-label="Filter status"><SelectValue placeholder="All statuses" /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem>{statuses.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}</SelectContent></Select></div>
      <Table><TableHeader><TableRow><TableHead>Record</TableHead><TableHead>Status</TableHead><TableHead>Detail</TableHead><TableHead className="text-right">Value</TableHead></TableRow></TableHeader><TableBody>{filteredRows.map((row) => <TableRow key={row.primary}><TableCell><div className="flex flex-col gap-0.5"><span className="font-medium">{row.primary}</span><span className="text-xs text-muted-foreground">{row.secondary}</span></div></TableCell><TableCell><Badge variant={statusVariant(row.status)}>{row.status}</Badge></TableCell><TableCell className="text-muted-foreground">{row.detail}</TableCell><TableCell className="text-right font-medium">{row.amount}</TableCell></TableRow>)}</TableBody></Table>
      {filteredRows.length === 0 && <div className="p-8 text-center text-sm text-muted-foreground">No records match your filters.</div>}
    </Card>
  );
}

function QuickAction({ screen }: Props) {
  const [open, setOpen] = useState(false);
  return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button onClick={() => setOpen(true)}><Plus data-icon="inline-start" />{screen.action}</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>{screen.action}</DialogTitle><DialogDescription>This local prototype demonstrates the RUNME workflow before connecting production data.</DialogDescription></DialogHeader><div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">Ready to configure a new {screen.title.toLowerCase()} record. The next step can connect this action to your backend, POS, payment provider, or messaging channel.</div><DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={() => { setOpen(false); toast.success(`${screen.action} is ready to configure`); }}><Check data-icon="inline-start" />Continue</Button></DialogFooter></DialogContent></Dialog>;
}

export function RestaurantDashboardScreen({ screen }: Props) {
  const [tab, setTab] = useState("overview");
  return <main className="flex flex-col gap-6"><div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div className="flex flex-col gap-2"><div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary"><Sparkles className="size-3.5" />{screen.eyebrow}</div><h1 className="text-balance font-heading text-3xl font-semibold tracking-tight">{screen.title}</h1><p className="max-w-3xl text-pretty text-muted-foreground">{screen.description}</p></div><div className="flex flex-wrap items-center gap-2"><Select defaultValue="all"><SelectTrigger aria-label="Select branch"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">Mugenzi Restaurant</SelectItem><SelectItem value="kigali">Kigali · Main branch</SelectItem><SelectItem value="future">Future branches</SelectItem></SelectContent></Select><Button variant="outline" onClick={() => toast.success("Report exported")}><Download data-icon="inline-start" />Export</Button><QuickAction screen={screen} /></div></div><Alert><Sparkles className="size-4" /><AlertTitle>RUNME recommendation</AlertTitle><AlertDescription>{screen.focus === "crm" ? "Target 86 customers who have not visited in 30 days but previously visited at least three times. Their estimated combined historical value is RWF 2.4M." : screen.focus === "operations" ? "Grill wait time is up 18% this week. Consider moving one cross-trained waiter to support the station during dinner peak." : screen.focus === "inventory" ? "Chicken breast is below par with six active burger orders. Reorder now or temporarily adjust availability." : "Mugenzi Restaurant is pacing toward its RWF 20M monthly target. Review the live workspaces below for the next best action."}</AlertDescription></Alert><Tabs value={tab} onValueChange={setTab}><TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="operations">Operations</TabsTrigger><TabsTrigger value="insights">Insights</TabsTrigger></TabsList></Tabs>{tab === "overview" && <><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{screen.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</div><div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]"><TrendPanel screen={screen} /><Card><CardHeader className="border-b"><CardTitle>Shift pulse</CardTitle><CardDescription>What the team should know</CardDescription></CardHeader><CardContent className="flex flex-col gap-4 pt-5">{screen.highlights.map((highlight) => <div key={highlight.label} className="flex items-start justify-between gap-3"><div><p className="text-sm font-medium">{highlight.label}</p><p className="text-xs text-muted-foreground">{highlight.note}</p></div><span className="text-sm font-medium">{highlight.value}</span></div>)}</CardContent></Card></div><Highlights screen={screen} /><DataTable screen={screen} /></>}{tab === "operations" && <><FeaturePanel screen={screen} /><DataTable screen={screen} /></>}{tab === "insights" && <><div className="grid gap-4 lg:grid-cols-2"><FeaturePanel screen={screen} /><Card><CardHeader><CardTitle>Plan alignment</CardTitle><CardDescription>Recommended next actions from the RUNME specification</CardDescription></CardHeader><CardContent className="flex flex-col gap-3 text-sm"><p>Connect {screen.title.toLowerCase()} with Menu, POS, Kitchen, Inventory, CRM, Payments, Loyalty, Feedback, and AI so actions update the whole customer journey.</p><Button variant="outline" onClick={() => toast.success("Insight saved to workspace")}>Save insight</Button></CardContent></Card></div><DataTable screen={screen} /></>}</main>;
}
