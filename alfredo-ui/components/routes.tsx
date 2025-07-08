// components/navigation/routes.tsx
import {
  Home,
  Activity,
  Globe,
  Store,
  UserCog,
  Settings,
  BadgeDollarSign,
  HelpCircle,
  LogOut,
  Rocket,
  Users,
  Grip,
  ShieldUser,
  ArrowLeftRight,
  PiggyBank,
} from "lucide-react";


import type { ReactNode } from "react";

export type RouteItem = {
  id: string;
  href?: string;
  icon?: ReactNode;
  action?: string;
  dropdownItems?: RouteItem[];
};

export const ROUTES: Record<string, RouteItem> = {
  home: {
    id: "Home",
    icon: <Home className="w-6 h-6" />,
    href: "/home",
  },
  Group: {
    id: "Group",
    icon: <Grip className="w-6 h-6" />,
    href: "/group"
  },
  Agency: {
    id: "Agency",
    icon: <ShieldUser className="w-6 h-6" />,
    href: "/agency"
  },

  activity: {
    id: "Activity",
    icon: <Activity className="w-6 h-6" />,
    href: "/activity",
  },
  users: {
    id: "Users",
    icon: <Users className="w-6 h-6" />,
    href: "/Users",
  },
  Leads: {
    id: "Leads",
    icon: <ArrowLeftRight className="w-6 h-6" />,
    href: "/leads",
  },
  Subscriptions: {
    id: "Subscriptions",
    icon: <PiggyBank className="w-6 h-6" />,
    href: "/subscriptions",
  },
  website: {
    id: "Website",
    icon: <Globe className="w-6 h-6" />,
    href: "/website",
  },
  store: {
    id: "Store",
    icon: <Store className="w-6 h-6" />,
    href: "/store",
  },
  account: {
    id: "Account",
    icon: <UserCog className="w-6 h-6" />,
    href: "/account", // still clickable
    dropdownItems: [
      {
        id: "Settings",
        icon: <Settings className="w-6 h-6" />,
        href: "/settings",
      },
      {
        id: "Billing",
        icon: <BadgeDollarSign className="w-6 h-6" />,
        href: "/billing",
      },
      {
        id: "Roadmap",
        icon: <Rocket className="w-6 h-6" />,
        href: "/roadmap",
      },
      {
        id: "Help",
        icon: <HelpCircle className="w-6 h-6" />,
        action: "help",
      },
      {
        id: "Logout",
        icon: <LogOut className="w-6 h-6" />,
        action: "logout",
      },
    ],
  },
};
