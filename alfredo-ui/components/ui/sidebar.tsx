"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ROUTES } from "@/components/routes";
import { cn } from "@/lib/utils"; 
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/sidebarContext";

export default function Sidebar() {
  const pathname = usePathname(); //
  const [accountOpen, setAccountOpen] = useState(false);  //estados da sidebar, começa com a sidebar fechada
  //const [language, setLanguage] = useState("pt"); // estado para o idioma selecionado
  const { collapsed, toggleCollapsed } = useSidebar();
  /* const userInfo = {
    accountType: "admin",
    subscriptionInfo: {
      status: "active",
      product: "pro_enterprise",
    },
  }; */

  /* const handleAction = (action: string) => {
    switch (action) {
      case "logout":
        console.log("Logging out...");
        break;
      case "help":
        console.log("Open help modal...");
        break;
      default:
        console.log(`Unhandled action: ${action}`);
    }
  }; */
  const renderLink = (
    id: string,
    href?: string,
    icon?: React.ReactNode,
    label?: string,
    action?: string
  ) => {
    const isActive = pathname === href;
    const baseClasses = cn(
      "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
      isActive
        ? "bg-black text-white shadow"
        : "text-muted-foreground hover:text-primary",
      collapsed && "justify-center px-2" // ⬅ icon centering
    );

    if (action) {
      return (
        <button key={id} onClick={() => {}} className={baseClasses}>
          {icon}
          {!collapsed && <span>{label}</span>}
        </button>
      );
    }

    return (
      <Link key={id} href={href || "#"} className={baseClasses}>
        {icon}
        {!collapsed && <span>{label}</span>}
      </Link>
    );
  };
 /* const renderLink = (
    id: string,
    href?: string,
    icon?: React.ReactNode,
    label?: string,
    action?: string
  ) => {
    const isActive = pathname === href;
    const classes = cn(
      "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
      isActive
        ? "bg-black text-white shadow"
        : "text-muted-foreground hover:text-primary"
    );

    if (action) {
      return (
        <button key={id} onClick={() => {}} className={classes}>
          {icon}
          {!collapsed && label}
        </button>
      );
    }

    return (
      <Link key={id} href={href || "#"} className={classes}>
        {icon}
        {!collapsed && label}
      </Link>
    );
  }; */


  return (
  <aside
    className={cn(
      "fixed left-0 top-0 h-full bg-white dark:bg-zinc-950 border-r shadow-sm flex flex-col transition-all duration-300",
      collapsed ? "w-22" : "w-80"
    )}
  >
    {/* para dar scroll na barra */}
    <div className="flex-1 overflow-y-auto">
      {/* Top Logo da empresa quando expandida e collapsed*/}
      <div className="p-4 flex items-center justify-between h-[64px] mt-6">
        {collapsed ? (
          <img src="assets/logo-icon.png" alt="Logo" className="h-10 w-10 ml-2" />
        ) : (
          <img src="assets/logo-alfredo-black.png" alt="Logo" className="h-10 ml-8 w-auto" />
        )}
      </div>

      {/* Avatar da conta*/}
      <div
        className={cn(
          "px-4 py-2 h-[72px] flex items-center mt-8",
          !collapsed && "ml-6"
        )}
      >
        <div className="bg-white dark:bg-zinc-900 p-2 rounded-xl shadow-sm flex items-center gap-2 w-full">
          <Avatar>
            <AvatarImage src="/avatar.jpg" alt="User avatar" />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">Tomás</p>
              <p className="text-xs text-muted-foreground">tomasbastos@gmail.com</p>
              <p className="text-xs text-red-500">Conta regular</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "mt-4 px-4 flex flex-col gap-2 text-sm",
          !collapsed && "ml-6",
          collapsed && "items-center px-0"
        )}
      >
        {["home", "Group", "Agency", "users", "activity", "Leads", "Subscriptions", "website", "store"].map((key) => {
          const route = ROUTES[key];
          return renderLink(route.id, route.href, route.icon, route.id, route.action);
        })}

        {/* botão da conta*/}
        <div key="account">
          <Button
            variant="ghost"
            onClick={() => {
              if (collapsed) {
                toggleCollapsed();   // Expand the sidebar
                setAccountOpen(true); // Open the dropdown after expanding
              } else {
                setAccountOpen(!accountOpen); // Toggle if already expanded
              }
            }}

            className="w-full justify-between px-3 py-2 text-sm text-muted-foreground hover:text-primary"
          >
            <span className="flex items-center gap-2">
              {ROUTES.account.icon}
              {!collapsed && ROUTES.account.id}
            </span>
            {!collapsed && (accountOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </Button>
          {accountOpen && (
            <div className={cn("mt-1 flex flex-col gap-1", collapsed ? "pl-0 items-center" : "pl-6")}>
              {ROUTES.account.dropdownItems?.map((item) =>
                renderLink(item.id, item.href, item.icon, item.id, item.action)
              )}
            </div>
          )}
        </div>
      </nav>
    </div>

    {/* Bottom: Language + Collapse */}
    <div className="p-4 border-t border-muted bg-white dark:bg-zinc-950">
      {!collapsed && (
        <div className="flex justify-center gap-2 text-xs text-muted-foreground">
          <Button
            variant="link"
            size="sm"
            className="p-0 text-xs text-muted-foreground"
          >
            🇵🇹 PT
          </Button>
          <Button
            variant="link"
            size="sm"
            className="p-0 text-xs text-muted-foreground"
          >
            🇺🇸 EN
          </Button>
        </div>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleCollapsed}
        className="mt-4"
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </Button>
    </div>
  </aside>
  );

}

