"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

import { Button } from "@/components/ui/button"
import { Pencil, MoreHorizontal } from "lucide-react"

export default function HomePage() {
  return (
    <div className="p-6 space-y-6">
      {/* ✅ Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Accounts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Page Title + Action */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Accounts</h1>
        <Button variant="link" size="sm" className="text-primary">
          + Add new company
        </Button>
      </div>

      {/* ✅ Tabs */}
      <Tabs defaultValue="companies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ranking">Ranking</TabsTrigger>
        </TabsList>

        {/* ✅ Companies List */}
        <TabsContent value="companies">
          <div className="space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-5 text-sm font-semibold text-muted-foreground px-4">
              <div>Company</div>
              <div>Activity</div>
              <div>Members</div>
              <div>Limit</div>
              <div className="text-right">Actions</div>
            </div>

            {/* List Item Example */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-5 items-center bg-muted/50 p-4 rounded-md text-sm"
              >
                {/* Company Info */}
                <div className="flex items-center gap-3">
                  <img
                    src="/logo-alfredo-black.png"
                    alt="Company Logo"
                    className="w-8 h-8 rounded"
                  />
                  <div>
                    <p className="font-medium">Alfredo Inc.</p>
                    <p className="text-xs text-muted-foreground">Company</p>
                  </div>
                </div>
                <div>Active</div>
                <div>12</div>
                <div>50</div>

                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Footer */}
          <div className="mt-6 flex justify-between items-center text-sm text-muted-foreground px-4">
            <div>
              Rows per page:
              <select className="ml-2 border rounded px-1 py-0.5">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span>1–10 of 30</span>
              <Button variant="ghost" size="icon">←</Button>
              <Button variant="ghost" size="icon">→</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="overview">
          <p>Overview section content...</p>
        </TabsContent>

        <TabsContent value="ranking">
          <p>Ranking section content...</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
