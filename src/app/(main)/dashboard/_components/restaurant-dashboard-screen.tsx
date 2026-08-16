'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Download, MoreHorizontal, Plus, Search, Sparkles, TrendingDown, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import type { ScreenConfig } from './restaurant-dashboard-data';

type Props = { screen: ScreenConfig };

const statusVariant = (status: string): 'default' | 'secondary' | 'outline' | 'destructive' => {
  if (['Ready for pickup', 'Completed', 'Settled', 'Paid', 'Available', 'In stock', 'Healthy', 'Active account', 'Live', 'On plan'].includes(status)) return 'default';
  if (['In production', 'Scheduled', 'Partial', 'Reorder soon', 'Low stock', 'Reserved', 'Performing', 'New customer'].includes(status)) return 'secondary';
  if (['Proof review', 'Awaiting approval', 'Awaiting payment', 'Made to order', 'Draft', 'Prospect', 'Monitor'].includes(status)) return 'outline';
  return 'destructive';
};

function MetricCard({ metric }: { metric: ScreenConfig['metrics'][number] }) {
  const Icon = metric.trend === 'down' ? TrendingDown : metric.trend === 'up' ? TrendingUp : ArrowUpRight;
  return (
    <Card size="sm">
      <CardContent className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground">{metric.label}</span>
          <span className="font-heading text-2xl font-semibold tracking-tight">{metric.value}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground"><Icon className="size-3.5" />{metric.change} vs last week</span>
        </div>
        <div className="rounded-lg bg-primary/10 p-2 text-primary"><ArrowUpRight className="size-4" /></div>
      </CardContent>
    </Card>
  );
}

function TrendPanel({ screen }: Props) {
  return (
    <Card className="min-w-0">
      <CardHeader className="border-b">
        <CardTitle>Revenue performance</CardTitle>
        <CardDescription>Quoted and collected revenue across Kigali service channels</CardDescription>
        <CardAction><Button variant="outline" size="sm">Last 7 days <ChevronDown data-icon="inline-end" /></Button></CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 pt-5">
        <div className="flex items-end justify-between gap-3"><div><p className="text-3xl font-semibold tracking-tight">$126,840</p><p className="text-xs text-muted-foreground">+12.8% from previous period</p></div><Badge>Healthy pace</Badge></div>
        <div className="flex h-40 items-end gap-2" aria-label="Sales trend chart">
          {[48, 62, 56, 70, 64, 86, 78, 92, 76, 100, 88, 94].map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t-md bg-primary/80 transition-all hover:bg-primary" style={{ height: `${Math.round(height * 1.4)}px` }} /><span className="text-[10px] text-muted-foreground">{['M', 'T', 'W', 'T', 'F', 'S'][index % 6]}</span></div>)}
        </div>
      </CardContent>
    </Card>
  );
}

function Highlights({ screen }: Props) {
  return <div className="grid gap-3 sm:grid-cols-3">{screen.highlights.map((highlight) => <Card key={highlight.label} size="sm"><CardContent className="flex flex-col gap-1"><span className="text-xs text-muted-foreground">{highlight.label}</span><span className="font-heading font-medium">{highlight.value}</span><span className="text-xs text-muted-foreground">{highlight.note}</span></CardContent></Card>)}</div>;
}

function DataTable({ screen }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const filteredRows = useMemo(() => screen.rows.filter((row) => `${row.primary} ${row.secondary} ${row.status}`.toLowerCase().includes(query.toLowerCase()) && (filter === 'all' || row.status === filter)), [filter, query, screen.rows]);
  const statuses = [...new Set(screen.rows.map((row) => row.status))];
  return (
    <Card>
      <CardHeader className="border-b"><CardTitle>Latest print activity</CardTitle><CardDescription>Quotes, proofs, production jobs, and payments from the Nyarugenge studio</CardDescription><CardAction><Button variant="ghost" size="icon-sm" aria-label="More activity options"><MoreHorizontal /></Button></CardAction></CardHeader>
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center"><div className="relative flex-1"><Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search activity" className="pl-9" /></div><Select value={filter} onValueChange={setFilter}><SelectTrigger aria-label="Filter activity"><SelectValue placeholder="All statuses" /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem>{statuses.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}</SelectContent></Select></div>
      <Table><TableHeader><TableRow><TableHead>Activity</TableHead><TableHead>Status</TableHead><TableHead>Time</TableHead><TableHead className="text-right">Amount</TableHead></TableRow></TableHeader><TableBody>{filteredRows.map((row) => <TableRow key={row.primary}><TableCell><div className="flex flex-col gap-0.5"><span className="font-medium">{row.primary}</span><span className="text-xs text-muted-foreground">{row.secondary}</span></div></TableCell><TableCell><Badge variant={statusVariant(row.status)}>{row.status}</Badge></TableCell><TableCell className="text-muted-foreground">{row.detail}</TableCell><TableCell className="text-right font-medium">{row.amount}</TableCell></TableRow>)}</TableBody></Table>
      {filteredRows.length === 0 && <div className="p-8 text-center text-sm text-muted-foreground">No activity matches your filters.</div>}
    </Card>
  );
}

function QuickAction({ screen }: Props) {
  const [open, setOpen] = useState(false);
  return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button onClick={() => setOpen(true)}><Plus data-icon="inline-start" />{screen.action}</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>{screen.action}</DialogTitle><DialogDescription>This prototype keeps changes local to the current session. Use it to model your studio workflow before connecting production data.</DialogDescription></DialogHeader><div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">Ready to create a new {screen.title.toLowerCase()} item. Connect your data source when you&apos;re ready to make this permanent.</div><DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button onClick={() => { setOpen(false); toast.success(`${screen.action} is ready to configure`); }}><Check data-icon="inline-start" />Continue</Button></DialogFooter></DialogContent></Dialog>;
}

export function RestaurantDashboardScreen({ screen }: Props) {
  const [tab, setTab] = useState('overview');
  return <main className="flex flex-col gap-6"><div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div className="flex flex-col gap-2"><div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary"><Sparkles className="size-3.5" />{screen.eyebrow}</div><h1 className="text-balance font-heading text-3xl font-semibold tracking-tight">{screen.title}</h1><p className="max-w-2xl text-pretty text-muted-foreground">{screen.description}</p></div><div className="flex flex-wrap items-center gap-2"><Select defaultValue="all"><SelectTrigger aria-label="Select branch"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All locations</SelectItem><SelectItem value="downtown">Downtown</SelectItem><SelectItem value="riverfront">Riverfront</SelectItem></SelectContent></Select><Button variant="outline" onClick={() => toast.success('Report exported')}><Download data-icon="inline-start" />Export</Button><QuickAction screen={screen} /></div></div><Alert><Sparkles className="size-4" /><AlertTitle>Runme recommendation</AlertTitle><AlertDescription>Six proofs are waiting for approval. Follow up with BrightPath, Umutekano School, and the corporate gift accounts before reserving production capacity.</AlertDescription></Alert><Tabs value={tab} onValueChange={setTab}><TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="operations">Operations</TabsTrigger><TabsTrigger value="insights">Insights</TabsTrigger></TabsList></Tabs>{tab === 'overview' && <><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{screen.metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</div><div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]"><TrendPanel screen={screen} /><Card><CardHeader className="border-b"><CardTitle>Shift pulse</CardTitle><CardDescription>What your team should know</CardDescription></CardHeader><CardContent className="flex flex-col gap-4 pt-5">{screen.highlights.map((item) => <div key={item.label} className="flex items-center justify-between gap-4"><div className="flex flex-col gap-1"><span className="font-medium">{item.label}</span><span className="text-xs text-muted-foreground">{item.note}</span></div><span className="text-sm font-medium">{item.value}</span></div>)}</CardContent></Card></div><Highlights screen={screen} /><DataTable screen={screen} /></>}{tab === 'operations' && <><Highlights screen={screen} /><DataTable screen={screen} /></>}{tab === 'insights' && <div className="grid gap-4 md:grid-cols-2"><TrendPanel screen={screen} /><Card><CardHeader><CardTitle>Recommended next steps</CardTitle><CardDescription>Small actions with measurable impact.</CardDescription></CardHeader><CardContent className="flex flex-col gap-3">{['Review 2 low-stock ingredients', 'Follow up with 4 guests', 'Approve tomorrow’s prep list'].map((item) => <Button key={item} variant="outline" className="justify-between">{item}<ArrowUpRight data-icon="inline-end" /></Button>)}</CardContent></Card></div>}</main>;
}
