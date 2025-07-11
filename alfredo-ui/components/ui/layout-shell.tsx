"use client"

import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

type PageShellProps = {
  title: string
  children: ReactNode
  isLoading?: boolean
  className?: string
}

export function PageShell({ title, children, isLoading, className }: PageShellProps) {
  const pathname = usePathname()
  const parts = pathname.split("/").filter(Boolean)

  return (
    <div className={cn("p-6 space-y-6 ml-6", className)}>
      {/*Page Title */}
      <h1 className="text-2xl font-semibold mb-1">{title}</h1>
      {/*Dynamic Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/home">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
            <BreadcrumbPage>{capitalize(parts[0] || "Home")}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>

      

      {/*Content or Skeleton */}
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ) : (
        children
      )}
    </div>
  )
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
