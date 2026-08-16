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

type Metric = ScreenConfig["metrics"][number];
type Row = ScreenConfig["rows"][number];

const businessMetrics: Metric[] = [
  { label: "Revenue this month", value: "RWF 4.94M", change: "+12.8%", trend: "up" },
  { label: "Active print jobs", value: "28", change: "+6 jobs", trend: "up" },
  { label: "Average order value", value: "RWF 176K", change: "+8.4%", trend: "up" },
  { label: "On-time delivery", value: "94%", change: "On target", trend: "neutral" },
];

const productionRows: Row[] = [
  { primary: "#RW-1048 · Kigali Innovation Hub", secondary: "240 branded mugs · sublimation", detail: "Proof approved 18 min ago", status: "In production", amount: "RWF 1,080,000" },
  { primary: "#RW-1047 · Umutekano School", secondary: "80 hoodies + 60 caps · school wear", detail: "Due tomorrow · Nyarugenge", status: "Proof review", amount: "RWF 2,340,000" },
  { primary: "#RW-1046 · Green Hills NGO", secondary: "2 roll-up banners + 500 flyers", detail: "Collected 42 min ago", status: "Ready for pickup", amount: "RWF 685,000" },
  { primary: "#RW-1045 · BrightPath Ltd", secondary: "Vehicle branding · full wrap", detail: "Design sent today", status: "Awaiting approval", amount: "RWF 1,850,000" },
  { primary: "#RW-1044 · Aline Mukamana", secondary: "Personalized gift box · 12 items", detail: "Delivered yesterday", status: "Completed", amount: "RWF 320,000" },
  { primary: "#RW-1043 · Kigali Wedding Planners", secondary: "150 invitations + welcome sign", detail: "Deposit received", status: "Scheduled", amount: "RWF 925,000" },
];

const catalogRows: Row[] = [
  { primary: "Corporate branding package", secondary: "Logo, stationery, signage & apparel", detail: "8 active quotes", status: "Available", amount: "From RWF 850K" },
  { primary: "Sublimation mugs", secondary: "11oz ceramic · full-color print", detail: "Epson + mug press", status: "In stock", amount: "RWF 4,500 each" },
  { primary: "Branded hoodies", secondary: "Cotton fleece · heat-transfer", detail: "6 size variants", status: "In stock", amount: "RWF 28,000 each" },
  { primary: "Outdoor signage", secondary: "PVC, acrylic, lightbox & 3D letters", detail: "Vendor lead time: 4 days", status: "Made to order", amount: "From RWF 180K" },
  { primary: "Personalized gift boxes", secondary: "Mugs, bottles, pens, notebooks & cards", detail: "12 curated combinations", status: "Available", amount: "From RWF 35K" },
  { primary: "Business cards", secondary: "300gsm matte or gloss finish", detail: "Same-day design available", status: "Available", amount: "From RWF 25K" },
];

const peopleRows: Row[] = [
  { primary: "Kigali Innovation Hub", secondary: "Corporate · 6 orders this quarter", detail: "Last order 18 min ago", status: "Active account", amount: "RWF 4.8M lifetime" },
  { primary: "Umutekano School", secondary: "Education · 3 open projects", detail: "Decision maker: M. Jean", status: "Needs follow-up", amount: "RWF 2.34M open" },
  { primary: "Green Hills NGO", secondary: "NGO · recurring campaign materials", detail: "Last order 2 days ago", status: "Active account", amount: "RWF 1.9M lifetime" },
  { primary: "Aline Mukamana", secondary: "Individual · personalized gifts", detail: "Referred by Instagram", status: "New customer", amount: "RWF 320K lifetime" },
  { primary: "Kigali Wedding Planners", secondary: "Event organizer · partner lead", detail: "Meeting scheduled Friday", status: "Prospect", amount: "RWF 925K quote" },
  { primary: "BrightPath Ltd", secondary: "SME · vehicle branding", detail: "Proof awaiting approval", status: "At risk", amount: "RWF 1.85M quote" },
];

const financeRows: Row[] = [
  { primary: "#RW-1048 · Kigali Innovation Hub", secondary: "Deposit + balance", detail: "Today · Mobile Money", status: "Settled", amount: "RWF 1,080,000" },
  { primary: "#RW-1047 · Umutekano School", secondary: "50% deposit", detail: "Today · Bank transfer", status: "Partial", amount: "RWF 1,170,000" },
  { primary: "#RW-1045 · BrightPath Ltd", secondary: "Quote pending deposit", detail: "Due in 2 days", status: "Awaiting payment", amount: "RWF 1,850,000" },
  { primary: "Supplier · Kigali Paper Co.", secondary: "Sublimation paper + vinyl", detail: "Monthly expense", status: "Paid", amount: "RWF 285,000" },
  { primary: "Monthly operating costs", secondary: "Rent, wages, utilities & marketing", detail: "Budget target", status: "On plan", amount: "RWF 1,950,000" },
  { primary: "Projected gross profit", secondary: "Revenue less direct production costs", detail: "Business plan target", status: "Healthy", amount: "RWF 2,990,000" },
];

const supplyRows: Row[] = [
  { primary: "Sublimation paper A4", secondary: "Consumable · 200 sheets remaining", detail: "Reorder at 100 sheets", status: "Healthy", amount: "RWF 48,000" },
  { primary: "Heat-transfer vinyl", secondary: "White, black, red & blue rolls", detail: "Black roll below par", status: "Reorder soon", amount: "RWF 135,000" },
  { primary: "Blank ceramic mugs", secondary: "11oz white · 86 units", detail: "12 orders in pipeline", status: "Low stock", amount: "RWF 387,000" },
  { primary: "Cotton hoodies", secondary: "Mixed sizes · 42 units", detail: "School order reserved", status: "Reserved", amount: "RWF 840,000" },
  { primary: "PVC signage sheets", secondary: "3mm white · 18 sheets", detail: "Supplier: Kigali Plastics", status: "Healthy", amount: "RWF 540,000" },
  { primary: "Epson sublimation ink", secondary: "Cyan, magenta, yellow & black", detail: "Estimated 9 days left", status: "Monitor", amount: "RWF 220,000" },
];

const marketingRows: Row[] = [
  { primary: "Back-to-school uniforms", secondary: "Instagram + WhatsApp Business", detail: "Runs through 30 Aug", status: "Live", amount: "RWF 1.2M pipeline" },
  { primary: "Corporate gifting season", secondary: "LinkedIn + direct corporate visits", detail: "12 leads reached", status: "Live", amount: "RWF 3.6M pipeline" },
  { primary: "Wedding planner partner offer", secondary: "Referral partnership", detail: "3 planners contacted", status: "Draft", amount: "RWF 925K pipeline" },
  { primary: "Google Business Profile", secondary: "Reviews and local search", detail: "4.8 average rating", status: "Healthy", amount: "126 views this week" },
  { primary: "Roadside signage refresh", secondary: "Nyarugenge location", detail: "Artwork ready for print", status: "Scheduled", amount: "RWF 180K budget" },
  { primary: "TikTok gift box showcase", secondary: "Short-form product video", detail: "2,400 views this week", status: "Performing", amount: "18 inquiries" },
];

const definitions: Omit<ScreenConfig, "metrics" | "rows" | "highlights">[] = [
  { slug: "dashboard", title: "Good afternoon, Maya", description: "Your Nyarugenge production studio is on track. Here is what needs attention across quotes, print jobs, customers, and delivery.", template: "overview", eyebrow: "Tuesday, August 18 · Kigali", action: "New quote" },
  { slug: "pos", title: "Sales desk", description: "Create quotes, capture deposits, and move every client from brief to approved production job.", template: "queue", eyebrow: "Live sales pipeline", action: "Create quote" },
  { slug: "orders", title: "Print orders", description: "Track corporate branding, apparel, signage, and personalized gift orders from quote to collection.", template: "queue", eyebrow: "Production pipeline", action: "New print order" },
  { slug: "delivery", title: "Delivery & pickup", description: "Coordinate Kigali deliveries, customer collections, and proof handoffs without losing the promised date.", template: "queue", eyebrow: "Dispatch", action: "Schedule delivery" },
  { slug: "payments", title: "Payments", description: "Review deposits, mobile-money receipts, bank transfers, balances, and payment exceptions.", template: "finance", eyebrow: "Cash collection", action: "Record payment" },
  { slug: "menu", title: "Product catalog", description: "Manage every service and product your studio sells, from business cards to corporate branding packages.", template: "catalog", eyebrow: "Services & products", action: "Add product" },
  { slug: "qr-menu", title: "Digital catalog", description: "Share a mobile-friendly gallery of services, samples, price ranges, and WhatsApp inquiry links.", template: "catalog", eyebrow: "Customer experience", action: "Preview catalog" },
  { slug: "tables", title: "Studio capacity", description: "See plotter, heat press, mug press, design desk, and installation capacity across the working week.", template: "overview", eyebrow: "Production planning", action: "Open capacity plan" },
  { slug: "reservations", title: "Bookings & consultations", description: "Plan design consultations, corporate visits, proof reviews, and installation appointments.", template: "queue", eyebrow: "Appointments", action: "New consultation" },
  { slug: "kitchen", title: "Production board", description: "Keep designs, printing, finishing, quality checks, and packaging moving in the right sequence.", template: "queue", eyebrow: "Workshop floor", action: "Open production board" },
  { slug: "inventory", title: "Materials inventory", description: "Track blank products, vinyl, paper, inks, packaging, and signage materials before they delay a job.", template: "catalog", eyebrow: "Stockroom", action: "Count materials" },
  { slug: "recipes", title: "Production templates", description: "Standardize job specifications, material usage, finishing steps, and cost estimates for repeat work.", template: "catalog", eyebrow: "Job costing", action: "Add template" },
  { slug: "suppliers", title: "Suppliers", description: "Manage paper, apparel, blank gifts, vinyl, signage, and equipment suppliers around Kigali.", template: "people", eyebrow: "Purchasing", action: "Add supplier" },
  { slug: "procurement", title: "Procurement", description: "Turn low-stock alerts and reserved jobs into organized purchase orders with clear delivery dates.", template: "queue", eyebrow: "Purchasing", action: "New purchase order" },
  { slug: "customers", title: "Customer CRM", description: "Build a useful profile for SMEs, corporates, NGOs, schools, event planners, and individual gift buyers.", template: "people", eyebrow: "Relationships", action: "Add customer" },
  { slug: "loyalty", title: "Repeat business", description: "Recognize returning corporate accounts, referral partners, and customers who order gifts for every occasion.", template: "people", eyebrow: "Retention", action: "Create offer" },
  { slug: "marketing", title: "Marketing campaigns", description: "Plan Facebook, Instagram, TikTok, LinkedIn, WhatsApp, Google, signage, and partnership campaigns.", template: "insights", eyebrow: "Growth channels", action: "New campaign" },
  { slug: "feedback", title: "Customer feedback", description: "Turn reviews, proof comments, delivery notes, and product feedback into better work.", template: "people", eyebrow: "Voice of customer", action: "Review feedback" },
  { slug: "staff", title: "Team & roles", description: "Coordinate designers, production operators, installers, sales, and administration around every job.", template: "people", eyebrow: "Team", action: "Add team member" },
  { slug: "accounting", title: "Accounting", description: "Keep revenue, material costs, monthly operating expenses, deposits, balances, and profit visible.", template: "finance", eyebrow: "Back office", action: "Run monthly close" },
  { slug: "branches", title: "Locations & delivery zones", description: "Plan the Nyarugenge studio today and future Kigali delivery zones or expansion locations.", template: "insights", eyebrow: "Business footprint", action: "Add zone" },
  { slug: "analytics", title: "Business analytics", description: "Understand which services, customer segments, channels, and job types are driving the studio forward.", template: "insights", eyebrow: "Performance", action: "Customize report" },
  { slug: "ai-assistant", title: "AI business assistant", description: "Ask about quote follow-ups, production bottlenecks, low-stock risks, or the path to the RWF 4.94M revenue target.", template: "insights", eyebrow: "Runme intelligence", action: "Ask Runme" },
  { slug: "automations", title: "Automations", description: "Automate quote follow-ups, proof reminders, deposit nudges, low-stock alerts, and delivery updates.", template: "settings", eyebrow: "Workflow", action: "Create automation" },
  { slug: "notifications", title: "Notifications", description: "Stay ahead of proof approvals, due dates, low stock, unpaid balances, and new WhatsApp inquiries.", template: "settings", eyebrow: "Inbox", action: "Mark all read" },
  { slug: "settings", title: "Workspace settings", description: "Manage studio details, Kigali service zones, tax preferences, payment methods, roles, and notifications.", template: "settings", eyebrow: "Workspace", action: "Save changes" },
  { slug: "help", title: "Help & support", description: "Get practical guidance for managing print production, customer approvals, equipment, and growth.", template: "settings", eyebrow: "Support", action: "Start a conversation" },
];

function rowsFor(template: ScreenTemplate, slug: string) {
  if (["menu", "qr-menu", "inventory", "recipes"].includes(slug)) return catalogRows;
  if (["customers", "loyalty", "feedback", "staff", "suppliers"].includes(slug)) return peopleRows;
  if (["payments", "accounting"].includes(slug)) return financeRows;
  if (["marketing", "analytics", "ai-assistant"].includes(slug)) return marketingRows;
  if (template === "queue" || slug === "dashboard" || slug === "kitchen" || slug === "delivery") return productionRows;
  return supplyRows;
}

function metricsFor(slug: string): Metric[] {
  if (slug === "inventory" || slug === "procurement" || slug === "suppliers") return [
    { label: "Tracked materials", value: "86", change: "+14 this month", trend: "up" },
    { label: "Low-stock items", value: "7", change: "Review today", trend: "down" },
    { label: "Reserved value", value: "RWF 2.1M", change: "+18.6%", trend: "up" },
    { label: "Supplier lead time", value: "3.4 days", change: "-0.8 days", trend: "up" },
  ];
  if (["marketing", "analytics", "ai-assistant"].includes(slug)) return [
    { label: "Open pipeline", value: "RWF 12.8M", change: "+21.4%", trend: "up" },
    { label: "Qualified leads", value: "46", change: "+12 this month", trend: "up" },
    { label: "Inquiry conversion", value: "34%", change: "+5.2%", trend: "up" },
    { label: "Repeat accounts", value: "68%", change: "Healthy", trend: "neutral" },
  ];
  if (["payments", "accounting"].includes(slug)) return [
    { label: "Collected this month", value: "RWF 3.76M", change: "+14.2%", trend: "up" },
    { label: "Outstanding balances", value: "RWF 2.44M", change: "12 invoices", trend: "down" },
    { label: "Gross profit", value: "RWF 2.99M", change: "+11.8%", trend: "up" },
    { label: "Monthly expenses", value: "RWF 1.95M", change: "On budget", trend: "neutral" },
  ];
  return businessMetrics;
}

function highlightsFor(slug: string) {
  if (["menu", "qr-menu"].includes(slug)) return [
    { label: "Best seller", value: "Corporate gifts", note: "RWF 1.8M quoted this month" },
    { label: "Fastest turnaround", value: "Business cards", note: "Same-day design and print" },
    { label: "Needs attention", value: "6 proofs", note: "Waiting on customer approval" },
  ];
  if (["inventory", "procurement", "suppliers"].includes(slug)) return [
    { label: "Critical item", value: "Blank mugs", note: "86 units left for 12 jobs" },
    { label: "Next delivery", value: "Kigali Paper Co.", note: "Tomorrow by 10:00 AM" },
    { label: "Cost opportunity", value: "Bulk vinyl", note: "Save RWF 72K on next order" },
  ];
  return [
    { label: "Revenue target", value: "RWF 4.94M", note: "Business plan monthly target" },
    { label: "Top segment", value: "Corporate SMEs", note: "42% of open pipeline" },
    { label: "Needs attention", value: "6 proofs", note: "Follow up before production" },
  ];
}

export const restaurantScreens: ScreenConfig[] = definitions.map((definition) => ({
  ...definition,
  metrics: metricsFor(definition.slug),
  rows: rowsFor(definition.template, definition.slug),
  highlights: highlightsFor(definition.slug),
}));

export function getRestaurantScreen(slug: string) {
  return restaurantScreens.find((screen) => screen.slug === slug);
}

export const restaurantSlugs = restaurantScreens.map((screen) => screen.slug);

export const businessPlanFacts = {
  location: "Nyarugenge District, Kigali, Rwanda",
  initialInvestment: "RWF 5,970,000",
  monthlyExpenses: "RWF 1,950,000",
  monthlyRevenueTarget: "RWF 4,940,000",
  grossProfitTarget: "RWF 2,990,000",
  netProfitRange: "RWF 2,000,000–2,500,000",
};
