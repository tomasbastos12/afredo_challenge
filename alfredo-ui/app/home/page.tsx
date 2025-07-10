"use client"

import {
  Plus,
  Search,
  BarChart,
  Users,
  CreditCard,
  Settings,
  Store,
  Globe,
  Building,
  Mail,
} from "lucide-react"

export default function HomePage() {
  const solutionsDayToDay = [
    { title: "Criar novo estudo de mercado", desc: "Crie estudos de mercado para imóveis residenciais...", icon: Plus },
    { title: "Procurar imóveis", desc: "Procure por qualquer imóvel e conheça todo o seu histórico", icon: Search },
    { title: "Estatísticas de mercado", desc: "Aceda a estatísticas e tendências únicas para qualquer zona", icon: BarChart },
    { title: "Procurar imóveis de particulares", desc: "Procure imóveis de particulares e conheça todo o seu histórico", icon: Users },
    { title: "Pesquisar imóveis da banca", desc: "Procure imóveis da banca e conheça todo o seu histórico", icon: CreditCard },
    { title: "Alterar logótipo", desc: "Customize os relatórios com o seu logótipo", icon: Settings },
    { title: "Alertas", desc: "Guarde as suas pesquisas e receba alertas de novos imóveis", icon: Mail },
    { title: "Favoritos", desc: "Agrupe imóveis numa lista de favoritos", icon: Store },
    { title: "Coleções", desc: "Agrupe imóveis numa coleção partilhável", icon: Globe },
  ]

  const automationSolutions = [
    { title: "Gestão de portfólio", desc: "Analise e monitore todos os seus portfólios imobiliários", icon: Building },
    { title: "Análise de risco", desc: "Compare a performance dos seus ativos com o mercado", icon: BarChart },
    { title: "Encontre oportunidades", desc: "Identifique novos investimentos anteriormente escondidos", icon: Search },
    { title: "Customização de AVMs", desc: "Tecnologia de Inteligência Artificial de última geração", icon: Settings },
    { title: "Observatório de dados", desc: "Ganhe uma intuição única sobre o mercado", icon: BarChart },
    { title: "Avaliador online (leads)", desc: "Gere novas leads de vendedor e converta-as em análises", icon: Mail },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Início</h1>
          <p className="text-sm text-muted-foreground">Início &gt; Início</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#ec1463] text-white text-sm px-4 py-2 rounded-md flex items-center gap-2">
            <Search className="w-4 h-4" />
            Metasearch
          </button>

          <button className="bg-[#00a5ff] text-white text-sm px-4 py-2 rounded-md flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Novo Estudo de Mercado
          </button>
        </div>
      </div>

      {/* Soluções para o dia-a-dia */}
      <section>
        <h2 className="text-base font-semibold mb-4">Soluções para o dia-a-dia – Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutionsDayToDay.map(({ title, desc, icon: Icon }) => (
            <button
              key={title}
              className="w-full text-left bg-white p-4 rounded-xl shadow-sm border flex gap-4 items-start hover:bg-gray-50 transition cursor-pointer"
              disabled
            >
              <div className="p-2 rounded-md bg-blue-100 text-blue-600">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-muted-foreground text-xs">{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Soluções de automação */}
      <section>
        <h2 className="text-base font-semibold mb-4 mt-6">Soluções de automação – Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {automationSolutions.map(({ title, desc, icon: Icon }) => (
            <button
              key={title}
              className="w-full text-left bg-white p-4 rounded-xl shadow-sm border flex gap-4 items-start hover:bg-gray-50 transition cursor-pointer"
              disabled
            >
              <div className="p-2 rounded-md bg-yellow-100 text-yellow-600">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-muted-foreground text-xs">{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      
    </div>
  )
}
