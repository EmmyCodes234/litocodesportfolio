import type React from "react"

interface DashboardPageLayoutProps {
  children: React.ReactNode

  header: {
    title: string
    description?: string
    icon: React.ElementType
  }
}

export default function DashboardPageLayout({ children, header }: DashboardPageLayoutProps) {
  return (
    <div className="flex flex-col relative w-full gap-1 min-h-full">
      <div className="flex flex-col gap-4 px-4 md:px-6 py-6 md:py-8 lg:py-10 ring-2 ring-pop bg-background">
        <div className="flex items-start lg:items-center gap-3 md:gap-4">
          <div className="rounded bg-primary size-7 md:size-9 flex items-center justify-center flex-shrink-0">
            <header.icon className="opacity-50 md:opacity-100 size-5" />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">{header.title}</h1>
        </div>
        {header.description && (
          <p className="text-sm md:text-base text-muted-foreground pl-0 md:pl-11 max-w-3xl">{header.description}</p>
        )}
      </div>
      <div className="min-h-full flex-1 flex flex-col gap-8 md:gap-14 px-3 lg:px-6 py-6 md:py-10 ring-2 ring-pop bg-background">
        {children}
      </div>
    </div>
  )
}
