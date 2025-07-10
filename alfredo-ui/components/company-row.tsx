import { Button } from "@/components/ui/button"
import { Pencil, MoreHorizontal } from "lucide-react"

type CompanyRowProps = {
  logo: string
  name: string
  subtitle: string
  activity: string
  members: string
  limitPercent: number
}

export function CompanyRow({ logo, name, subtitle, activity, members, limitPercent }: CompanyRowProps) {
  return (
    <div className="grid grid-cols-[4fr_1.5fr_1fr_1fr_80px] items-center bg-white dark:bg-muted px-6 py-4 rounded-xl shadow-sm text-sm mr-8">
      {/* Company Info */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* Activity */}
      <div className="text-muted-foreground text-sm text-right">{activity}</div>

      {/* Members */}
      <div className="text-muted-foreground text-sm text-right">{members} / ∞</div>

      {/* Limit (progress bar) */}
      <div className="text-center">
        <div className="inline-block w-20 h-2 bg-gray-200 rounded-full overflow-hidden ">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${limitPercent}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 text-center">
        <Button variant="ghost" size="icon">
          <Pencil className="w-4 h-4" />
        </Button>
        {/* <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button> */}
      </div>
    </div>
  )
}