"use client";

import { useMemo, useState } from "react";

import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  ChefHat,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Coffee,
  LayoutGrid,
  Plus,
  Search,
  Settings2,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Users,
  Utensils,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const orders = [
  {
    id: "#1048",
    table: "Table 12",
    items: "Chicken burger, fries",
    total: "18,500 RWF",
    status: "Preparing",
    tone: "secondary" as const,
  },
  {
    id: "#1047",
    table: "Outdoor 04",
    items: "2× Cappuccino, cake",
    total: "12,000 RWF",
    status: "Ready",
    tone: "default" as const,
  },
  {
    id: "#1046",
    table: "Takeaway",
    items: "Beef pizza, juice",
    total: "16,500 RWF",
    status: "New",
    tone: "outline" as const,
  },
  {
    id: "#1045",
    table: "VIP 02",
    items: "Steak, red wine",
    total: "46,000 RWF",
    status: "Served",
    tone: "secondary" as const,
  },
];

const modules = [
  { label: "Point of sale", detail: "12 open tickets", icon: CircleDollarSign, href: "/dashboard/ecommerce" },
  { label: "Reservations", detail: "8 arriving today", icon: CalendarDays, href: "/dashboard/calendar" },
  { label: "Menu & QR", detail: "48 items live", icon: Utensils, href: "/dashboard/qr-menu" },
  { label: "Kitchen", detail: "3 stations active", icon: ChefHat, href: "/dashboard/kitchen" },
  { label: "Inventory", detail: "4 low-stock alerts", icon: Store, href: "/dashboard/inventory" },
  { label: "Customers", detail: "1,284 profiles", icon: Users, href: "/dashboard/crm" },
];

const customers = [
  { name: "Jean Mukamana", tag: "VIP", visits: "18 visits", value: "1,250,000 RWF", color: "bg-primary" },
  { name: "Sarah Uwase", tag: "Frequent", visits: "8 visits this month", value: "420,000 RWF", color: "bg-chart-2" },
  { name: "Eric Niyonzima", tag: "At risk", visits: "45 days inactive", value: "180,000 RWF", color: "bg-destructive" },
];

export function RunmeDashboard() {
  const [query, setQuery] = useState("");
  const [activeOrder, setActiveOrder] = useState<string | null>(null);
  const [requests, setRequests] = useState(["Table 12 needs assistance", "VIP 02 requested the bill"]);
  const [showSetup, setShowSetup] = useState(false);

  const filteredOrders = useMemo(
    () =>
      orders.filter((order) => `${order.id} ${order.table} ${order.items}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <main className="mx-auto flex w-full max-w-[1600px] flex-col gap-6">
      <section className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Coffee className="size-4" /> Tuesday, 18 June 2024 <span>·</span> Kigali branch
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">Good morning, Marie.</h1>
          <p className="max-w-2xl text-muted-foreground">
            Your RUNME command center for every service, shift, and customer moment.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setShowSetup((value) => !value)}>
            <Settings2 data-icon="inline-start" /> Configure business
          </Button>
          <Button>
            <Plus data-icon="inline-start" /> New order
          </Button>
        </div>
      </section>

      {showSetup && (
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="font-medium">Finish your business setup</p>
                <p className="text-sm text-muted-foreground">
                  Add opening hours, tax rates, kitchen stations, and printers.
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline" onClick={() => setShowSetup(false)}>
              Review checklist <ChevronRight data-icon="inline-end" />
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Today's sales", "486,500 RWF", "+12.8% vs yesterday", CircleDollarSign],
          ["Open orders", "12", "4 need attention", ShoppingBag],
          ["Table occupancy", "68%", "24 of 35 tables", LayoutGrid],
          ["Guest satisfaction", "4.8 / 5", "+0.3 this month", Star],
        ].map(([label, value, note, Icon]) => (
          <Card key={String(label)}>
            <CardContent className="flex items-start justify-between p-5">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="text-2xl font-semibold tracking-tight">{value}</p>
                <p className="text-xs text-muted-foreground">{note}</p>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <Icon className="size-4 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="flex flex-col gap-5">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="operations">Live operations</TabsTrigger>
          <TabsTrigger value="customers">Customers & AI</TabsTrigger>
          <TabsTrigger value="setup">Business setup</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="flex flex-col gap-5">
          <div className="grid gap-5 xl:grid-cols-[1.45fr_1fr]">
            <Card>
              <CardHeader className="flex-row items-start justify-between">
                <div>
                  <CardTitle>Today at a glance</CardTitle>
                  <CardDescription>Revenue and service flow across the Kigali branch.</CardDescription>
                </div>
                <Badge variant="secondary">
                  <span className="mr-1.5 size-1.5 rounded-full bg-chart-2" /> Live
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <div className="flex h-40 items-end gap-2 rounded-lg bg-muted/50 p-4">
                  {[38, 54, 42, 68, 56, 78, 64, 88, 72, 94, 82, 100].map((height, index) => (
                    <div key={index} className="flex flex-1 flex-col justify-end gap-2">
                      <div className="rounded-t-sm bg-primary/80" style={{ height: `${height}%` }} />
                      <span className="text-center text-[10px] text-muted-foreground">{index + 8}h</span>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Dine-in</p>
                    <p className="font-medium">274,500 RWF</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Takeaway</p>
                    <p className="font-medium">126,000 RWF</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Delivery</p>
                    <p className="font-medium">86,000 RWF</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Service pulse</CardTitle>
                <CardDescription>What needs your attention now.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {requests.map((request) => (
                  <div key={request} className="flex items-center gap-3 rounded-lg border p-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-accent">
                      <Bell className="size-4 text-accent-foreground" />
                    </div>
                    <p className="flex-1 text-sm">{request}</p>
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Complete ${request}`}
                      onClick={() => setRequests((items) => items.filter((item) => item !== request))}
                    >
                      <Check />
                    </Button>
                  </div>
                ))}
                {requests.length === 0 && (
                  <p className="py-6 text-center text-sm text-muted-foreground">All guest requests are handled.</p>
                )}
                <Separator />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Kitchen tickets</span>
                  <span className="font-medium">3 in progress</span>
                </div>
                <Progress value={62} aria-label="Kitchen tickets progress" />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <div>
                <CardTitle>Order queue</CardTitle>
                <CardDescription>Orders flow from POS to kitchen to payment.</CardDescription>
              </div>
              <div className="relative w-48">
                <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search orders"
                  className="pl-8"
                />
              </div>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <div className="min-w-[680px]">
                <div className="grid grid-cols-[0.7fr_1fr_1.4fr_1fr_0.8fr_auto] gap-4 border-b px-3 pb-3 text-xs font-medium text-muted-foreground">
                  <span>Order</span>
                  <span>Location</span>
                  <span>Items</span>
                  <span>Total</span>
                  <span>Status</span>
                  <span />
                </div>
                {filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="grid grid-cols-[0.7fr_1fr_1.4fr_1fr_0.8fr_auto] items-center gap-4 border-b px-3 py-3 last:border-0"
                  >
                    <span className="font-medium">{order.id}</span>
                    <span className="text-sm text-muted-foreground">{order.table}</span>
                    <span className="text-sm">{order.items}</span>
                    <span className="text-sm">{order.total}</span>
                    <Badge variant={order.tone}>{order.status}</Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setActiveOrder(activeOrder === order.id ? null : order.id)}
                    >
                      {activeOrder === order.id ? <X /> : <ArrowUpRight />}
                    </Button>
                    {activeOrder === order.id && (
                      <div className="col-span-full rounded-md bg-muted p-3 text-sm text-muted-foreground">
                        Order timeline: received 10:42 · kitchen 10:44 · guest notified 10:51
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operations" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map(({ label, detail, icon: Icon, href }) => (
            <a href={href} key={label} className="group">
              <Card className="h-full transition-colors group-hover:border-primary/50">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </a>
          ))}
        </TabsContent>

        <TabsContent value="customers" className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>Customer intelligence</CardTitle>
              <CardDescription>AI segments built from visits, spending, loyalty, and feedback.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {customers.map((customer) => (
                <div key={customer.name} className="flex items-center gap-3 rounded-lg border p-3">
                  <div
                    className={`flex size-9 items-center justify-center rounded-full text-xs font-semibold text-primary-foreground ${customer.color}`}
                  >
                    {customer.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{customer.name}</p>
                      <Badge variant={customer.tag === "At risk" ? "destructive" : "secondary"}>{customer.tag}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {customer.visits} · {customer.value}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View profile
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-4" /> AI recommendation
              </CardTitle>
              <CardDescription className="text-primary-foreground/70">
                A focused action from your customer data.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="text-lg leading-relaxed">
                Target 86 customers who have not visited in 30 days but visited at least 3 times before.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary-foreground/70">Estimated historical value</span>
                <span className="font-semibold">2.4M RWF</span>
              </div>
              <Button variant="secondary">
                Create campaign <ArrowUpRight data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="setup" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            "Restaurant profile",
            "Branches & hours",
            "Tax & service charge",
            "Table layout",
            "Kitchen stations",
            "Printers & devices",
            "Staff & permissions",
            "Subscription",
          ].map((item, index) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle className="text-base">{item}</CardTitle>
                <CardDescription>{index < 3 ? "Configured and active" : "Ready to configure"}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant={index < 3 ? "outline" : "default"} size="sm">
                  {index < 3 ? "Manage" : "Set up"}
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </main>
  );
}
