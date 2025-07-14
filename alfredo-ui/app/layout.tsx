// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import SidebarProviderWrapper from "@/components/SidebarProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alfredo App",
  description: "Alfredo Dashboard Layout",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex min-h-screen")}>
        <SidebarProviderWrapper>{children}</SidebarProviderWrapper>
      </body>
    </html>
  );
}

