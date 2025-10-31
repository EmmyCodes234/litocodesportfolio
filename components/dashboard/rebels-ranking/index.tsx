import { Badge } from "@/components/ui/badge"
import DashboardCard from "@/components/dashboard/card"
import type { RebelRanking } from "@/types/dashboard"
import { cn } from "@/lib/utils"

interface RebelsRankingProps {
  rebels: RebelRanking[]
}

export default function RebelsRanking({ rebels }: RebelsRankingProps) {
  return (
    <DashboardCard
      title="FEATURED PROJECTS"
      intent="default"
      addon={<Badge variant="outline-warning">6 PROJECTS</Badge>}
    >
      <div className="space-y-3">
        {rebels.map((rebel) => (
          <a
            key={rebel.id}
            href={rebel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg border border-primary/20 hover:bg-accent hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 w-full">
                <div
                  className={cn(
                    "flex items-center justify-center rounded text-sm font-bold px-1.5",
                    rebel.featured
                      ? "h-10 bg-primary text-primary-foreground"
                      : "h-8 bg-secondary text-secondary-foreground",
                  )}
                >
                  {rebel.id}
                </div>
                <div
                  className={cn("flex flex-1 h-full items-center py-2 px-2.5 rounded", rebel.featured && "bg-accent")}
                >
                  <div className="flex flex-col flex-1">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={cn("font-display", rebel.featured ? "text-xl md:text-2xl" : "text-lg md:text-xl")}
                      >
                        {rebel.name}
                      </span>
                      <span className="text-muted-foreground text-xs md:text-sm">{rebel.handle}</span>
                    </div>
                    {rebel.subtitle && <span className="text-sm text-muted-foreground italic">{rebel.subtitle}</span>}
                    {rebel.streak && !rebel.featured && (
                      <span className="text-sm text-muted-foreground italic">{rebel.streak}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </DashboardCard>
  )
}
