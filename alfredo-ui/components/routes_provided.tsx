// components/navigation/routes.tsx
import {
  Home,
  Users,
  UserCog,
  Settings,
  Store,
  Globe,
  Activity,
  BadgeDollarSign,
  MonitorSmartphone,
  LayoutDashboard,
  LogOut,
  HelpCircle,
  FileStack,
  ArrowLeftRight,
} from "lucide-react";

import type { ReactNode } from "react";

export type RouteItem = {
  id: string;
  icon?: ReactNode;
  href?: string;
  action?: string;
  disallowed?: (userInfo: any) => boolean;
  dropdownItems?: RouteItem[];
};

export const ROUTES: Record<string, RouteItem> = {
  home: {
    id: "home",
    icon: <Home className="w-4 h-4" />,
    href: "/home",
  },
  accounts: {
    id: "accounts",
    icon: <LayoutDashboard className="w-4 h-4" />,
    href: "/accounts",
  },
  account: {
    id: "account",
    icon: <UserCog className="w-4 h-4" />,
    href: "/account",
  },
  team: {
    id: "team",
    icon: <Users className="w-4 h-4" />,
    href: "/team",
  },
  agents: {
    id: "agents",
    icon: <Users className="w-4 h-4" />,
    href: "/agents",
  },
  activity: {
    id: "activity",
    icon: <Activity className="w-4 h-4" />,
    href: "/activity",
  },
  leads: {
    id: "leads",
    icon: <ArrowLeftRight className="w-4 h-4" />,
    href: "/leads",
  },
  subscriptions: {
    id: "subscriptions",
    icon: <BadgeDollarSign className="w-4 h-4" />,
    href: "/subscriptions",
  },
  landing_pages: {
    id: "landing_pages",
    icon: <FileStack className="w-4 h-4" />,
    href: "/landing_pages",
  },
  website: {
    id: "website",
    icon: <Globe className="w-4 h-4" />,
    href: "/website",
  },
  store: {
    id: "store",
    icon: <Store className="w-4 h-4" />,
    href: "/store",
  },
  settings: {
    id: "settings",
    icon: <Settings className="w-4 h-4" />,
    href: "/settings",
    dropdownItems: [
      {
        id: "definitions",
        href: "/settings",
      },
      {
        id: "billing",
        href: "/billing",
        disallowed: (userInfo) => {
          const { accountType, subscriptionInfo } = userInfo;
          const hasEnterprise =
            subscriptionInfo?.status === "active" &&
            subscriptionInfo?.product?.includes("_enterprise");
          if (accountType === "company_admin" && !hasEnterprise) return true;
          if (
            ["group_admin", "company_leader", "company_employee"].includes(
              accountType
            )
          )
            return true;
          return false;
        },
      },
      {
        id: "sold",
        href: "/sold",
        disallowed: (userInfo) => userInfo.accountType !== "admin",
      },
      {
        id: "bms",
        href: "/bms",
        disallowed: (userInfo) => userInfo.accountType !== "admin",
      },
      {
        id: "loginAsUser",
        action: "loginAsUser",
        disallowed: (userInfo) => userInfo.accountType !== "admin",
      },
      {
        id: "roadmap",
        href: "/roadmap",
      },
      {
        id: "help",
        action: "help",
        icon: <HelpCircle className="w-4 h-4" />,
      },
      {
        id: "logout",
        action: "logout",
        icon: <LogOut className="w-4 h-4" />,
      },
    ],
  },
};





/* // components/navigation/routes.tsx
import {
  Store,
  Web,
  Savings,
  Group,
  GroupWork,
  BubbleChart,
  WebStories,
  CompareArrows,
  Roofing,
  Settings,
  Storage,
} from "lucide-react";

import type { ReactNode } from "react";

export type RouteItem = {
  id: string;
  icon?: ReactNode;
  href?: string;
  action?: string;
  disallowed?: (userInfo: any) => boolean;
  dropdownItems?: RouteItem[];
};

export const ROUTES: Record<string, RouteItem> = {
  home: {
    id: "home",
    icon: <Roofing />,
    href: "/home",
  },
  accounts: {
    id: "accounts",
    icon: <BubbleChart />,
    href: "/accounts",
  },
  account: {
    id: "account",
    icon: <GroupWork />,
    href: "/account",
  },
  team: {
    id: "team",
    icon: <GroupWork />,
    href: "/team",
  },
  agents: {
    id: "agents",
    icon: <Group />,
    href: "/agents",
  },
  activity: {
    id: "activity",
    icon: <WebStories />,
    href: "/activity",
  },
  leads: {
    id: "leads",
    icon: <CompareArrows />,
    href: "/leads",
  },
  subscriptions: {
    id: "subscriptions",
    icon: <Savings />,
    href: "/subscriptions",
  },
  landing_pages: {
    id: "landing_pages",
    icon: <Storage />,
    href: "/landing_pages",
  },
  website: {
    id: "website",
    icon: <Web />,
    href: "/website",
  },
  store: {
    id: "store",
    icon: <Store />,
    href: "/store",
  },
  settings: {
    id: "settings",
    icon: <Settings />,
    href: "/settings",
    dropdownItems: [
      {
        id: "definitions",
        href: "/settings",
      },
      {
        id: "billing",
        href: "/billing",
        disallowed: (userInfo) => {
          const { accountType, subscriptionInfo } = userInfo;
          const hasEnterprise =
            subscriptionInfo?.status === "active" &&
            subscriptionInfo?.product?.includes("_enterprise");
          if (accountType === "company_admin" && !hasEnterprise) return true;
          if (
            ["group_admin", "company_leader", "company_employee"].includes(
              accountType
            )
          )
            return true;
          return false;
        },
      },
      {
        id: "sold",
        href: "/sold",
        disallowed: (userInfo) => userInfo.accountType !== "admin",
      },
      {
        id: "bms",
        href: "/bms",
        disallowed: (userInfo) => userInfo.accountType !== "admin",
      },
      {
        id: "loginAsUser",
        action: "loginAsUser",
        disallowed: (userInfo) => userInfo.accountType !== "admin",
      },
      {
        id: "roadmap",
        href: "/roadmap",
      },
      {
        id: "help",
        action: "help",
      },
      {
        id: "logout",
        action: "logout",
      },
    ],
  },
};
 */