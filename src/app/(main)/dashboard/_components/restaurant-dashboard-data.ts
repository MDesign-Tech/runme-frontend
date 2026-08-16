export type ScreenTemplate = "overview" | "queue" | "catalog" | "people" | "finance" | "insights" | "settings";

export type ScreenConfig = {
  slug: string;
  title: string;
  description: string;
  template: ScreenTemplate;
  eyebrow: string;
  action: string;
  metrics: { label: string; value: string; change: string; trend: "up" | "down" | "neutral" }[];
  rows: { primary: string; secondary: string; detail: string; status: string; amount: string }[];
  highlights: { label: string; value: string; note: string }[];
};

const baseMetrics = [
  { label: "Today’s sales", value: "$18,420", change: "+12.8%", trend: "up" as const },
  { label: "Orders", value: "428", change: "+8.4%", trend: "up" as const },
  { label: "Avg. ticket", value: "$43.04", change: "+3.2%", trend: "up" as const },
  { label: "Table turns", value: "2.8x", change: "On target", trend: "neutral" as const },
];

const rows = [
  { primary: "#10482 · Table 12", secondary: "Dine-in · 4 items", detail: "Just now", status: "Preparing", amount: "$86.40" },
  { primary: "#10481 · Olivia Martin", secondary: "Pickup · 2 items", detail: "4 min ago", status: "Ready", amount: "$42.80" },
  { primary: "#10480 · DoorDash", secondary: "Delivery · 7 items", detail: "8 min ago", status: "Out for delivery", amount: "$118.20" },
  { primary: "#10479 · Table 4", secondary: "Dine-in · 5 items", detail: "12 min ago", status: "Paid", amount: "$64.50" },
  { primary: "#10478 · Noah Williams", secondary: "Pickup · 3 items", detail: "18 min ago", status: "Completed", amount: "$31.25" },
  { primary: "#10477 · Uber Eats", secondary: "Delivery · 4 items", detail: "24 min ago", status: "Preparing", amount: "$72.10" },
];

const definitions: Omit<ScreenConfig, "metrics" | "rows" | "highlights">[] = [
  { slug: "dashboard", title: "Good afternoon, Maya", description: "Here’s what’s happening across your restaurant today.", template: "overview", eyebrow: "Tuesday, August 18", action: "New order" },
  { slug: "pos", title: "Point of sale", description: "Keep the floor moving with a live view of every ticket.", template: "queue", eyebrow: "Live service", action: "Open register" },
  { slug: "orders", title: "Orders", description: "Track dine-in, pickup, and delivery orders in one place.", template: "queue", eyebrow: "Sales", action: "Create order" },
  { slug: "delivery", title: "Delivery", description: "Monitor drivers, handoff times, and marketplace orders.", template: "queue", eyebrow: "Dispatch", action: "Assign driver" },
  { slug: "payments", title: "Payments", description: "Review tenders, settlements, and payment exceptions.", template: "finance", eyebrow: "Sales", action: "Export report" },
  { slug: "menu", title: "Menu management", description: "Keep prices, modifiers, and availability synced across channels.", template: "catalog", eyebrow: "Catalog", action: "Add menu item" },
  { slug: "qr-menu", title: "QR menu", description: "Your digital menu is live at 12 tables and 3 pickup points.", template: "catalog", eyebrow: "Guest experience", action: "Preview menu" },
  { slug: "tables", title: "Tables", description: "See floor capacity, table status, and turn times at a glance.", template: "overview", eyebrow: "Front of house", action: "Open floor plan" },
  { slug: "reservations", title: "Reservations", description: "Plan the shift around upcoming guests and special requests.", template: "queue", eyebrow: "Bookings", action: "New reservation" },
  { slug: "kitchen", title: "Kitchen display", description: "Keep prep times predictable from ticket fire to pickup.", template: "queue", eyebrow: "Back of house", action: "View expo" },
  { slug: "inventory", title: "Inventory", description: "Know what’s in stock before the next service begins.", template: "catalog", eyebrow: "Stockroom", action: "Count inventory" },
  { slug: "recipes", title: "Recipes", description: "Standardize prep, portions, and ingredient costs for every dish.", template: "catalog", eyebrow: "Food cost", action: "Add recipe" },
  { slug: "suppliers", title: "Suppliers", description: "Manage partners, lead times, and negotiated pricing.", template: "people", eyebrow: "Purchasing", action: "Add supplier" },
  { slug: "procurement", title: "Procurement", description: "Turn low-stock alerts into organized purchase orders.", template: "queue", eyebrow: "Purchasing", action: "New purchase order" },
  { slug: "customers", title: "Customers", description: "Build better guest relationships with a shared customer profile.", template: "people", eyebrow: "Guest book", action: "Add customer" },
  { slug: "loyalty", title: "Loyalty", description: "Reward regulars and understand what brings them back.", template: "people", eyebrow: "Retention", action: "Create reward" },
  { slug: "marketing", title: "Marketing", description: "Plan campaigns that fill quiet shifts and celebrate regulars.", template: "insights", eyebrow: "Growth", action: "New campaign" },
  { slug: "feedback", title: "Feedback", description: "Turn guest sentiment into the next great service improvement.", template: "people", eyebrow: "Guest voice", action: "Review feedback" },
  { slug: "staff", title: "Staff", description: "Schedule, coach, and celebrate the people behind every service.", template: "people", eyebrow: "Team", action: "Add team member" },
  { slug: "accounting", title: "Accounting", description: "Keep daily close, labor, and cash flow in sync.", template: "finance", eyebrow: "Back office", action: "Run daily close" },
  { slug: "branches", title: "Branches", description: "Compare performance across every location in your group.", template: "insights", eyebrow: "Multi-location", action: "Add branch" },
  { slug: "analytics", title: "Analytics", description: "Find the patterns that make your next shift stronger.", template: "insights", eyebrow: "Performance", action: "Customize report" },
  { slug: "ai-assistant", title: "AI assistant", description: "Ask questions about your restaurant and get an actionable answer.", template: "insights", eyebrow: "Runme intelligence", action: "Ask Runme" },
  { slug: "automations", title: "Automations", description: "Let Runme handle routine follow-ups, alerts, and checklists.", template: "settings", eyebrow: "Workflow", action: "Create automation" },
  { slug: "notifications", title: "Notifications", description: "Stay ahead of low stock, late orders, and important guest moments.", template: "settings", eyebrow: "Inbox", action: "Mark all read" },
  { slug: "settings", title: "Settings", description: "Manage your restaurant preferences, channels, and permissions.", template: "settings", eyebrow: "Workspace", action: "Save changes" },
  { slug: "help", title: "Help & support", description: "Find answers or talk to a specialist who knows restaurant operations.", template: "settings", eyebrow: "Support", action: "Start a conversation" },
];

export const restaurantScreens: ScreenConfig[] = definitions.map((definition, index) => ({
  ...definition,
  metrics: baseMetrics.map((metric, metricIndex) => ({ ...metric, value: index === 0 ? metric.value : ["$2,840", "64", "$44.38", "94%"][metricIndex], change: index === 0 ? metric.change : ["+14.2%", "+6.1%", "+2.4%", "Healthy"][metricIndex] })),
  rows: rows.map((row, rowIndex) => ({ ...row, status: definition.template === "catalog" ? ["In stock", "Low stock", "In stock", "Draft", "Published", "In stock"][rowIndex] : row.status })),
  highlights: [
    { label: "Peak service", value: "12:00–1:30 PM", note: "78% of today’s covers" },
    { label: "Top performer", value: "Truffle rigatoni", note: "32 orders this shift" },
    { label: "Needs attention", value: "2 alerts", note: "Review before dinner" },
  ],
}));

export function getRestaurantScreen(slug: string) {
  return restaurantScreens.find((screen) => screen.slug === slug);
}

export const restaurantSlugs = restaurantScreens.map((screen) => screen.slug);
