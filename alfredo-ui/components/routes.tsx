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
    id: "Início",
    icon: <Home className="w-6 h-6" />,
    href: "/home",
  },
  Group: {
    id: "Grupo",
    icon: <Grip className="w-6 h-6" />,
    href: "/group"
  },
  Agency: {
    id: "Agência",
    icon: <ShieldUser className="w-6 h-6" />,
    href: "/agency"
  },

  activity: {
    id: "Atividade",
    icon: <Activity className="w-6 h-6" />,
    href: "/activity",
  },
  users: {
    id: "Utilizadores",
    icon: <Users className="w-6 h-6" />,
    href: "/users",
  },
  Leads: {
    id: "Leads",
    icon: <ArrowLeftRight className="w-6 h-6" />,
    href: "/leads",
  },
  Subscriptions: {
    id: "Subscrições",
    icon: <PiggyBank className="w-6 h-6" />,
    href: "/subscriptions",
  },
  website: {
    id: "Website",
    icon: <Globe className="w-6 h-6" />,
    href: "/website",
  },
  store: {
    id: "Loja",
    icon: <Store className="w-6 h-6" />,
    href: "/store",
  },
  account: {
    id: "Conta",
    icon: <UserCog className="w-6 h-6" />,
    href: "/account", // still clickable
    dropdownItems: [
      {
        id: "Definições",
        icon: <Settings className="w-6 h-6" />,
        href: "/settings",
      },
      {
        id: "Faturação",
        icon: <BadgeDollarSign className="w-6 h-6" />,
        href: "/billing",
      },
      {
        id: "Roadmap",
        icon: <Rocket className="w-6 h-6" />,
        href: "/roadmap",
      },
      {
        id: "Ajuda",
        icon: <HelpCircle className="w-6 h-6" />,
        action: "help",
      },
      {
        id: "Terminar Sessão",
        icon: <LogOut className="w-6 h-6" />,
        action: "logout",
      },
    ],
  },
};
