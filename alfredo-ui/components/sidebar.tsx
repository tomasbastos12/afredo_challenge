// components/sidebar.tsx
"use client";
import { Home, Globe, Store, Settings } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you're using ShadCN's `cn`
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const linkClasses = (path: string) =>
    cn(
      "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
      pathname === path
        ? "bg-black text-white shadow"
        : "text-muted-foreground hover:text-primary"
    );


  return (
    <aside className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-zinc-950 border-r shadow-sm flex flex-col justify-between">
      {/* Top section: logo + nav */}
      <div>
        <div className="p-4 flex justify-center items-center">
            <img src="/logo-alfredo-black.png" alt="Alfredo Logo" className="h-10 w-auto" />
        </div>

        {/* User info */}
        <div className="px-4 py-2">
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm flex items-center gap-4">
            <Avatar>
                <AvatarImage src="/avatar.jpg" alt="User avatar" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Tomás</p>
              <p className="text-xs text-muted-foreground">bdebaca12@gmail.com</p>
              <p className="text-xs text-red-500 ">Conta regular</p>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="mt-4 px-4 flex flex-col gap-2 text-sm">
          <Link href="/home" className={linkClasses("/home")}>
            <Home className="w-4 h-4" /> Início
          </Link>
          <Link href="/atividade" className={linkClasses("/atividade")}>
            <Globe className="w-4 h-4" /> Atividade
          </Link>
          <Link href="/loja" className={linkClasses("/loja")}>
            <Store className="w-4 h-4" /> Loja
          </Link>
          <Link href="/conta" className={linkClasses("/conta")}>
            <Settings className="w-4 h-4" /> Conta
          </Link>
        </nav>
      </div>

      {/* Bottom: language switcher */}
      <div className="p-4">
        <button className="text-xs text-muted-foreground">🌐 PT</button>
      </div>
    </aside>
  );
}
