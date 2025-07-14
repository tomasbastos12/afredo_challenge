"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, ReferenceArea  } from "recharts"

const chartData = [
  { name: "julho", ativos: 90, angariados: 15, vendidos: 10, perdido: 5, highlight: 1 },
  { name: "agosto", ativos: 60, angariados: 5, vendidos: 3, perdido: 2, highlight: 1 },
  { name: "setembro", ativos: 70, angariados: 10, vendidos: 5, perdido: 3, highlight: 1 },
  { name: "outubro", ativos: 80, angariados: 12, vendidos: 6, perdido: 4, highlight: 1 },
  { name: "novembro", ativos: 75, angariados: 9, vendidos: 4, perdido: 3, highlight: 1 },
  { name: "dezembro", ativos: 85, angariados: 11, vendidos: 5, perdido: 2, highlight: 1 },
  { name: "janeiro", ativos: 82, angariados: 10, vendidos: 6, perdido: 4, highlight: 1 },
  { name: "fevereiro", ativos: 65, angariados: 8, vendidos: 4, perdido: 2, highlight: 1 },
  { name: "março", ativos: 58, angariados: 7, vendidos: 3, perdido: 2, highlight: 1 },
  { name: "abril", ativos: 40, angariados: 4, vendidos: 2, perdido: 1, highlight: 1 },
  { name: "maio", ativos: 52, angariados: 6, vendidos: 3, perdido: 2, highlight: 1 },
  { name: "junho", ativos: 30, angariados: 3, vendidos: 1, perdido: 1, highlight: 1 },
  { name: "julho", ativos: 12, angariados: 2, vendidos: 1, perdido: 0, highlight: 1 },
]

export default function AgencySummaryPage() {
  const [loading, setLoading] = useState(true)
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number | null>(null)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const selected = selectedMonthIndex !== null
    ? chartData[selectedMonthIndex]
    : chartData[0]

  return (
    <div className="p-6 ml-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Agência</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Definições</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList className="bg-transparent flex gap-2 w-fit h-12">
          <TabsTrigger value="summary" className="data-[state=active]:bg-black data-[state=active]:text-white px-4 py-2 rounded-md text-sm font-medium">
            Sumário
          </TabsTrigger>
          <TabsTrigger value="activity" className="px-4 py-2 rounded-md text-sm font-medium">
            Atividade
          </TabsTrigger>
          <TabsTrigger value="ranking" className="px-4 py-2 rounded-md text-sm font-medium">
            Ranking
          </TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <div className="flex items-center  mb-4">
            <h2 className="text-base font-semibold">Sumário</h2>
            <select className="ml-2 text-base px-1 py-0.5 bg-transparent outline-none">
                <option>Ano</option>
                <option>Mês</option>
                <option>Semana</option>
            </select>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm mr-8">
            <p className="text-sm font-bold uppercase ">Nível de Atividade</p>
            {loading ? (
              <div className="mt-4 space-y-3">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-[200px] w-full mt-4" />
              </div>
            ) : (
              <>
                {selectedMonthIndex === null ? (
                  <p className="text-xl font-semibold">
                    Total: {chartData.reduce((sum, item) => sum + item.ativos + item.angariados + item.vendidos + item.perdido, 0)}
                  </p>
                ) : (
                  <p className="text-xl font-semibold text-muted-foreground">
                    Ativos: {selected.ativos} Angariados: {selected.angariados} Vendidos: {selected.vendidos} Perdido: {selected.perdido}
                  </p>
                )}

                <p className="text-sm text-muted-foreground mb-4">
                  {selectedMonthIndex !== null ? `${chartData[selectedMonthIndex].name}` : "julho, 2024 - julho, 2025"}
                </p>

                <ResponsiveContainer width="100%" height={240} className="border-none">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    {selectedMonthIndex !== null && (
                      <ReferenceArea
                        x1={chartData[selectedMonthIndex].name}
                        x2={chartData[selectedMonthIndex].name}
                        stroke="none"
                        fill="#ccfbf1"
                        fillOpacity={1}
                      />
                    )}
                    <Bar dataKey="ativos" stackId="a" fill="#fbcfe8" barSize={40} onClick={(_, index) => setSelectedMonthIndex(index)}>
                      {chartData.map((_, index) => (
                        <Cell key={`ativos-${index}`} fill="#fbcfe8" />
                      ))}
                    </Bar>
                    
                    
                    <Bar dataKey="angariados" stackId="a" fill="#f472b6" onClick={(_, index) => setSelectedMonthIndex(index)} />
                    <Bar dataKey="vendidos" stackId="a" fill="#ec4899" onClick={(_, index) => setSelectedMonthIndex(index)} />
                    <Bar dataKey="perdido" stackId="a" fill="#be185d" onClick={(_, index) => setSelectedMonthIndex(index)} />
                  </BarChart>
                </ResponsiveContainer>
              </>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
