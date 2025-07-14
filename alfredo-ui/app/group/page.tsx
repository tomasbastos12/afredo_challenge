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
import { ArrowUp, ArrowDown, ArrowUpDown, LayoutGrid, List, Search } from "lucide-react"
import { CompanyRow } from "@/components/company-row"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const rankingData = [
  {
    logo: "/assets/core-investments-logo.png",
    name: "Core Investments",
    activity: 806671,
    rank: 1,
  },
  {
    logo: "/assets/avatar.png",
    name: "Alfredo AI Trial test",
    activity: 371272,
    rank: 2,
  },
  {
    logo: "/assets/doutor-finanças-logo.PNG",
    name: "Doutor Finanças",
    activity: 59191,
    rank: 3,
  },
  {
    logo: "/assets/properstar.png",
    name: "Properstar Portugal",
    activity: 37151,
    rank: 4,
  },
  {
    logo: "/assets/iad-espanha-logo.png",
    name: "iad Espana",
    activity: 25054,
    rank: 5,
  },
]

function RankingTable({ loading }: { loading: boolean }) {
  return (
    <div className="space-y-2 mt-4">
      <div className="grid grid-cols-[1fr_auto] items-center bg-white px-6 py-4 rounded-xl shadow-sm text-sm font-semibold mr-8">
        <div className="ml-15 font-semibold">Nome</div>
        <div className="text-right ">Ranking</div>
      </div>

      {loading ? (
        Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto] items-center bg-white px-6 py-4 rounded-xl shadow-sm text-sm mr-8">
            <div className="flex items-center gap-4">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-20 h-3" />
              </div>
            </div>
            <Skeleton className="w-16 h-4 justify-self-end" />
          </div>
        ))
      ) : (
        rankingData.map((company) => (
          <div key={company.rank} className="grid grid-cols-[1fr_auto] items-center bg-white px-6 py-4 rounded-xl shadow-sm text-sm mr-8">
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <img src={company.logo} alt="Logo" className="w-10 h-10 object-contain" />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold text-white ${
                  company.rank === 1
                    ? "bg-yellow-400"
                    : company.rank === 2
                    ? "bg-gray-400"
                    : company.rank === 3
                    ? "bg-orange-400"
                    : "bg-red-400"
                }`}>
                  {company.rank}
                </div>
              </div>
              <div>
                <p className="font-semibold">{company.name}</p>
                <p className="text-xs text-muted-foreground">
                  Atividade: {company.activity.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="text-right text-sm font-semibold text-muted-foreground">
              {company.rank}# Posição
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default function GroupPage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const totalItems = 500; 
  const currentPage = 1; 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [])

 const companies = [
  { logo: "/assets/iad-portugal-logo.png", name: "iad Portugal", subtitle: "Empresa", activity: "---", memberCount: 1025, memberLimit: 1500 },
  { logo: "/assets/iad-espanha-logo.png", name: "iad Espana", subtitle: "Empresa", activity: "---", memberCount: 714, memberLimit: 1200 },
  { logo: "/assets/remax-portugal.png", name: "RE/MAX Portugal", subtitle: "Empresa", activity: "---", memberCount: 141, memberLimit: 500 },
  { logo: "/assets/Century-21-logo.png", name: "CENTURY 21 Portugal", subtitle: "Empresa", activity: "---", memberCount: 132, memberLimit: 300 },
  { logo: "/assets/noow.jpg", name: "NOOW", subtitle: "Empresa", activity: "---", memberCount: 137 },
];
const computedCompanies = companies.map((c) => ({
  ...c,
  members: c.memberLimit ? `${c.memberCount} / ${c.memberLimit}` : `${c.memberCount} / ∞`,
  limitPercent: c.memberLimit ? Math.min((c.memberCount / c.memberLimit) * 100, 100) : 100,
}));


  const sortedCompanies = [...computedCompanies].sort((a, b) => {
    const aMembers = a.memberCount;
    const bMembers = b.memberCount;
    return sortOrder === "asc" ? aMembers - bMembers : bMembers - aMembers;
  })

  const start = (currentPage - 1) * rowsPerPage + 1;
  const end = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="p-6 space-y-6 ml-6">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold mb-1">Grupo</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Início</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Grupo</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-between items-center">
        <Button variant="link" size="sm" className="text-sky-400 font-medium hover:underline">
          + Adicionar nova empresa
        </Button>
      </div>

      <Tabs defaultValue="companies" className="space-y-4">
        <TabsList className="bg-transparent flex gap-2 w-fit h-12">
          <TabsTrigger value="companies" className="data-[state=active]:bg-black data-[state=active]:text-white bg-transparent text-muted-foreground px-4 py-2 rounded-md transition-colors text-sm font-medium">Agências</TabsTrigger>
          <TabsTrigger value="overview" className="data-[state=active]:bg-black data-[state=active]:text-white bg-transparent text-muted-foreground px-4 py-2 rounded-md transition-colors text-sm font-medium">Sumário</TabsTrigger>
          <TabsTrigger value="ranking" className="data-[state=active]:bg-black data-[state=active]:text-white bg-transparent text-muted-foreground px-4 py-2 rounded-md transition-colors text-sm font-medium">Ranking</TabsTrigger>
        </TabsList>

        <TabsContent value="companies">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2 pt-2">
              <h2 className="text-lg font-semibold text-foreground">Empresas</h2>
              <div className="flex items-center gap-4 text-muted-foreground mr-8">
                <button className="hover:text-foreground"><ArrowUpDown className="w-5 h-5 opacity-50" /></button>
                <button className="hover:text-foreground"><LayoutGrid className="w-5 h-5 opacity-50" /></button>
                <button className="hover:text-foreground"><List className="w-5 h-5 text-foreground" /></button>
                <button className="hover:text-foreground"><Search className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="grid grid-cols-[4fr_1.5fr_1fr_1fr_80px] items-center bg-white dark:bg-muted px-6 py-4 rounded-xl shadow-sm text-sm mr-8">
              <div className="ml-15 font-semibold">Nome</div>
              <div className="font-semibold text-right">Atividade</div>
              <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} className="font-semibold text-right flex items-center justify-end gap-1">
                Membros {sortOrder === "asc" ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              </button>
              <div className="font-semibold text-center">Limite</div>
              <div className="font-semibold text-right">Ações</div>
            </div>

            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="grid grid-cols-[4fr_1.5fr_1fr_1fr_80px] items-center bg-white px-6 py-4 rounded-xl shadow-sm text-sm mr-8">
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="w-32 h-4" />
                      <Skeleton className="w-20 h-3" />
                    </div>
                  </div>
                  <Skeleton className="w-16 h-4 justify-self-end" />
                  <Skeleton className="w-12 h-4 justify-self-end" />
                  <Skeleton className="w-24 h-2 mx-auto" />
                  <div className="flex justify-end gap-2">
                    <Skeleton className="w-6 h-6 rounded-full" />
                    <Skeleton className="w-6 h-6 rounded-full" />
                  </div>
                </div>
              ))
            ) : (
              sortedCompanies.map((company, index) => (
                <CompanyRow key={index} {...company} />
              ))
            )}
            {/* Pagination Footer */}
            <div className="mt-6 flex justify-end px-4 text-sm text-muted-foreground mr-6">
              <div className="flex items-center gap-6">
                {/* Rows per page */}
                <div className="flex items-center">
                  <span className="mr-2">Rows per page:</span>
                  <select
                    className="border rounded px-1 py-0.5"
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(Number(e.target.value))}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                </div>

                {/* Pagination Info & Controls */}
                <div className="flex items-center gap-2">
                  <span>
                    {start}–{end} of {totalItems}
                  </span>
                  <Button variant="ghost" size="icon">←</Button>
                  <Button variant="ghost" size="icon">→</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="overview">
          <p>Sumário</p>
        </TabsContent>

        <TabsContent value="ranking">
          <div className="flex items-center justify-between px-2 pt-2 mr-8">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold text-foreground">Ranking</h2>
              <select className="ml-2 text-base px-1 py-0.5 bg-transparent outline-none">
                <option>Ano</option>
                <option>Mês</option>
                <option>Semana</option>
              </select>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <button className="hover:text-foreground"><Search className="w-5 h-5" /></button>
            </div>
          </div>
          <RankingTable loading={loading} />
          {/* Pagination Footer */}
          <div className="mt-6 flex justify-end px-4 text-sm text-muted-foreground mr-6">
            <div className="flex items-center gap-6">
              {/* Rows per page */}
              <div className="flex items-center">
                <span className="mr-2">Rows per page:</span>
                <select
                  className="border rounded px-1 py-0.5"
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>

              {/* Pagination Info & Controls */}
              <div className="flex items-center gap-2">
                <span>
                  {start}–{end} of {totalItems}
                </span>
                <Button variant="ghost" size="icon">←</Button>
                <Button variant="ghost" size="icon">→</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
    </div>
  )
}
