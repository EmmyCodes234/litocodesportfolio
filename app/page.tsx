import DashboardPageLayout from "@/components/dashboard/layout"
import DashboardStat from "@/components/dashboard/stat"
import RebelsRanking from "@/components/dashboard/rebels-ranking"
import SecurityStatus from "@/components/dashboard/security-status"
import BracketsIcon from "@/components/icons/brackets"
import ProcessorIcon from "@/components/icons/proccesor"
import BoomIcon from "@/components/icons/boom"
import GearIcon from "@/components/icons/gear"
import EmailIcon from "@/components/icons/email"
import mockDataJson from "@/mock.json"
import type { MockData } from "@/types/dashboard"

const mockData = mockDataJson as MockData

const iconMap = {
  proccesor: ProcessorIcon,
  boom: BoomIcon,
  gear: GearIcon,
}

export default function DashboardOverview() {
  return (
    <DashboardPageLayout
      header={{
        title: "Portfolio",
        description:
          "LitoCodes • Full-Stack Web Developer • Lagos, Nigeria — Building scalable web experiences with modern technologies",
        icon: BracketsIcon,
      }}
    >
      <div
        id="overview"
        className="mb-8 py-6 px-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
      >
        <h2 className="text-2xl md:text-3xl font-display font-normal mb-3 text-foreground">
          Crafting Digital Experiences
        </h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl font-light">
          Full-stack web developer specializing in building scalable, high-performance applications. With expertise in
          React, Next.js, and modern web technologies, I turn ideas into elegant solutions that users love.
        </p>
      </div>

      {/* Portfolio metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockData.dashboardStats.map((stat, index) => (
          <DashboardStat
            key={index}
            label={stat.label}
            value={stat.value}
            description={stat.description}
            icon={iconMap[stat.icon as keyof typeof iconMap]}
            tag={stat.tag}
            intent={stat.intent}
            direction={stat.direction}
          />
        ))}
      </div>

      {/* Featured projects and tech stack section */}
      <div id="projects" className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 rounded-full bg-primary" />
          <h3 className="text-sm font-display font-normal tracking-wide text-foreground">
            FEATURED WORK & CAPABILITIES
          </h3>
        </div>
      </div>

      {/* Main 2-column grid section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RebelsRanking rebels={mockData.rebelsRanking} />
        <div id="tech-stack">
          <SecurityStatus statuses={mockData.securityStatus} />
        </div>
      </div>

      <div id="contact" className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 rounded-full bg-primary" />
          <h3 className="text-sm font-display font-normal tracking-wide text-foreground">GET IN TOUCH</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <EmailIcon className="size-6 text-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-display font-normal text-foreground mb-2">Email</h4>
                <a
                  href="mailto:litocodes@gmail.com"
                  className="text-muted-foreground hover:text-foreground font-mono text-sm break-all transition-colors font-light"
                >
                  litocodes@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group p-6 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <svg className="size-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-display font-normal text-foreground mb-2">Phone</h4>
                <a
                  href="tel:+2348136632593"
                  className="text-muted-foreground hover:text-foreground font-mono text-sm transition-colors font-light"
                >
                  +234 813 6632 593
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardPageLayout>
  )
}