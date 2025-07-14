// components/ui/footer-wrapper.tsx
"use client"

import { usePathname } from "next/navigation"
import Footer from "./footer"

export default function FooterWrapper() {
  const pathname = usePathname()

  // Only show on homepage ("/")
  if (pathname !== "/home") return null

  return <Footer />
}
