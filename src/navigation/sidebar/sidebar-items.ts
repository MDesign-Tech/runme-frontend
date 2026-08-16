import {
  Banknote,
  Bell,
  BookOpen,
  Box,
  Calendar,
  ChartBar,
  CheckSquare,
  Clipboard,
  Coffee,
  Cpu,
  CreditCard,
  Fingerprint,
  FolderOpen,
  Forklift,
  Gauge,
  GraduationCap,
  HeartPulse,
  Kanban,
  LayoutDashboard,
  ListTodo,
  Lock,
  type LucideIcon,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquare,
  ReceiptText,
  Server,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  SquareArrowUpRight,
  Star,
  Table,
  Truck,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 10,
    label: "RUNME",
    items: [
      {
        id: "runme-home",
        title: "Dashboard",
        url: "/dashboard/runme",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    id: 11,
    label: "SALES",
    items: [
      { id: "runme-pos", title: "POS", url: "/dashboard/runme/pos", icon: ShoppingCart },
      {
        id: "runme-orders",
        title: "Orders",
        url: "/dashboard/runme/orders",
        icon: Clipboard,
      },
      {
        id: "runme-delivery",
        title: "Delivery",
        url: "/dashboard/runme/delivery",
        icon: Truck,
      },
      {
        id: "runme-payments",
        title: "Payments",
        url: "/dashboard/runme/payments",
        icon: CreditCard,
      },
    ],
  },
  {
    id: 12,
    label: "OPERATIONS",
    items: [
      { id: "runme-menu", title: "Menu", url: "/dashboard/runme/menu", icon: Menu },
      {
        id: "runme-qr-menu",
        title: "QR Menu",
        url: "/dashboard/runme/qr-menu",
        icon: Smartphone,
      },
      {
        id: "runme-tables",
        title: "Tables",
        url: "/dashboard/runme/tables",
        icon: Table,
      },
      {
        id: "runme-reservations",
        title: "Reservations",
        url: "/dashboard/runme/reservations",
        icon: Calendar,
      },
      {
        id: "runme-kitchen",
        title: "Kitchen",
        url: "/dashboard/runme/kitchen",
        icon: Coffee,
      },
    ],
  },
  {
    id: 13,
    label: "INVENTORY",
    items: [
      {
        id: "runme-inventory-index",
        title: "Inventory",
        url: "/dashboard/runme/inventory",
        icon: Box,
      },
      {
        id: "runme-recipes",
        title: "Recipes",
        url: "/dashboard/runme/recipes",
        icon: BookOpen,
      },
      {
        id: "runme-suppliers",
        title: "Suppliers",
        url: "/dashboard/runme/suppliers",
        icon: Truck,
      },
      {
        id: "runme-procurement",
        title: "Procurement",
        url: "/dashboard/runme/procurement",
        icon: ShoppingBag,
      },
    ],
  },
  {
    id: 14,
    label: "CUSTOMERS",
    items: [
      {
        id: "runme-customers-index",
        title: "Customers",
        url: "/dashboard/runme/customers",
        icon: Users,
      },
      {
        id: "runme-loyalty",
        title: "Loyalty",
        url: "/dashboard/runme/loyalty",
        icon: Star,
      },
      {
        id: "runme-marketing",
        title: "Marketing",
        url: "/dashboard/runme/marketing",
        icon: Megaphone,
      },
      {
        id: "runme-feedback",
        title: "Feedback",
        url: "/dashboard/runme/feedback",
        icon: MessageSquare,
      },
    ],
  },
  {
    id: 15,
    label: "BUSINESS",
    items: [
      {
        id: "runme-staff",
        title: "Staff",
        url: "/dashboard/runme/staff",
        icon: UserRound,
      },
      {
        id: "runme-accounting",
        title: "Accounting",
        url: "/dashboard/runme/accounting",
        icon: Banknote,
      },
      {
        id: "runme-branches",
        title: "Branches",
        url: "/dashboard/runme/branches",
        icon: MapPin,
      },
    ],
  },
  {
    id: 16,
    label: "INSIGHTS",
    items: [
      {
        id: "runme-analytics",
        title: "Analytics",
        url: "/dashboard/runme/analytics",
        icon: ChartBar,
      },
      {
        id: "runme-ai",
        title: "AI Assistant",
        url: "/dashboard/runme/ai-assistant",
        icon: Cpu,
      },
      {
        id: "runme-automations",
        title: "Automations",
        url: "/dashboard/runme/automations",
        icon: Zap,
      },
    ],
  },
  {
    id: 17,
    label: "Account & Support",
    items: [
      {
        id: "runme-notifications",
        title: "Notifications",
        url: "/dashboard/runme/notifications",
        icon: Bell,
      },
      {
        id: "runme-settings",
        title: "Settings",
        url: "/dashboard/runme/settings",
        icon: Settings,
      },
      {
        id: "runme-help",
        title: "Help & Support",
        url: "/dashboard/runme/help",
        icon: MessageSquare,
      },
    ],
  },
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        id: "default",
        title: "Default",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        id: "crm",
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        id: "finance",
        title: "Finance",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        id: "analytics",
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        id: "productivity",
        title: "Productivity",
        url: "/dashboard/productivity",
        icon: ListTodo,
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        url: "/dashboard/ecommerce",
        icon: ShoppingBag,
      },
      {
        id: "academy",
        title: "Academy",
        url: "/dashboard/academy",
        icon: GraduationCap,
      },
      {
        id: "logistics",
        title: "Logistics",
        url: "/dashboard/logistics",
        icon: Forklift,
      },
      {
        id: "infrastructure",
        title: "Infrastructure",
        url: "/dashboard/infrastructure",
        icon: Server,
      },
      {
        id: "file-manager",
        title: "File Manager",
        url: "/dashboard/file-manager",
        icon: FolderOpen,
        badge: "new",
      },
      {
        id: "patient-monitoring",
        title: "Patient Monitoring",
        url: "/dashboard/patient-monitoring",
        icon: HeartPulse,
        badge: "new",
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        id: "email",
        title: "Email",
        url: "/dashboard/mail",
        icon: Mail,
      },
      {
        id: "chat",
        title: "Chat",
        url: "/dashboard/chat",
        icon: MessageSquare,
      },
      {
        id: "calendar",
        title: "Calendar",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
      {
        id: "kanban",
        title: "Kanban",
        url: "/dashboard/kanban",
        icon: Kanban,
      },
      {
        id: "tasks",
        title: "Tasks",
        url: "/dashboard/tasks",
        icon: CheckSquare,
      },
      {
        id: "invoice",
        title: "Invoice",
        url: "/dashboard/invoice",
        icon: ReceiptText,
      },
      {
        id: "profile",
        title: "Profile",
        url: "/dashboard/profile",
        icon: UserRound,
        badge: "new",
      },
      {
        id: "users",
        title: "Users",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        id: "roles",
        title: "Roles",
        url: "/dashboard/roles",
        icon: Lock,
      },
      {
        id: "authentication",
        title: "Authentication",
        icon: Fingerprint,
        subItems: [
          {
            id: "auth-login-v1",
            title: "Login v1",
            url: "/auth/v1/login",
            newTab: true,
          },
          {
            id: "auth-login-v2",
            title: "Login v2",
            url: "/auth/v2/login",
            newTab: true,
          },
          {
            id: "auth-register-v1",
            title: "Register v1",
            url: "/auth/v1/register",
            newTab: true,
          },
          {
            id: "auth-register-v2",
            title: "Register v2",
            url: "/auth/v2/register",
            newTab: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Legacy",
    items: [
      {
        id: "legacy-dashboards",
        title: "Dashboards",
        subItems: [
          {
            id: "legacy-default",
            title: "Default V1",
            url: "/dashboard/default-v1",
          },
          { id: "legacy-crm", title: "CRM V1", url: "/dashboard/crm-v1" },
          {
            id: "legacy-finance",
            title: "Finance V1",
            url: "/dashboard/finance-v1",
          },
          {
            id: "legacy-analytics",
            title: "Analytics V1",
            url: "/dashboard/analytics-v1",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Misc",
    items: [
      {
        id: "others",
        title: "Others",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
        badge: "soon",
        disabled: false,
      },
    ],
  },
];
