"use client";

import { ReactNode } from "react";
import { SidebarProvider, useSidebar } from "@/components/sidebarContext";
import Sidebar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";
import { cn } from "@/lib/utils";

function LayoutContent({ children }: { children: ReactNode }) {
  const { collapsed } = useSidebar();

  return (
    <>
      <Sidebar />
      <div
        className={cn(
          "transition-all duration-300 flex-1 flex flex-col",
          collapsed ? "ml-[5.5rem]" : "ml-80"
        )}
      >
        <main className="flex-1 p-4 bg-muted/40">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default function SidebarProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}
