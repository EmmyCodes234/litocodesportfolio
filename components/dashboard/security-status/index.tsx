import { Badge } from "@/components/ui/badge"
import DashboardCard from "@/components/dashboard/card"
import type { SecurityStatus as SecurityStatusType } from "@/types/dashboard"
import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const techStackItemVariants = cva("border rounded-md ring-4 flex items-center justify-center py-3 px-4", {
  variants: {
    variant: {
      success: "border-success bg-success/5 text-success ring-success/3",
      warning: "border-warning bg-warning/5 text-warning ring-warning/3",
      destructive: "border-destructive bg-destructive/5 text-destructive ring-destructive/3",
    },
  },
  defaultVariants: {
    variant: "success",
  },
})

interface TechStackItemProps extends VariantProps<typeof techStackItemVariants> {
  title: string
  className?: string
}

function TechStackItem({ title, variant, className }: TechStackItemProps) {
  return (
    <div className={cn(techStackItemVariants({ variant }), className)}>
      <span className="font-medium text-sm">{title}</span>
    </div>
  )
}

interface SecurityStatusProps {
  statuses: SecurityStatusType[]
}

export default function SecurityStatus({ statuses }: SecurityStatusProps) {
  return (
    <DashboardCard title="MY TECH STACK" intent="success" addon={<Badge variant="outline-success">ACTIVE</Badge>}>
      <div className="flex flex-col">
        <div className="max-md:order-1 grid grid-cols-2 md:grid-cols-1 gap-3 py-2 px-1 md:max-w-max">
          {statuses.map((item, index) => (
            <TechStackItem key={index} title={item.title} variant={item.variant} />
          ))}
        </div>
        <picture className="md:absolute md:top-0 md:right-0 w-full md:w-auto md:h-full aspect-square min-[2160px]:right-[10%]">
          <Image
            src="/assets/bot_greenprint.gif"
            alt="Tech Stack"
            width={1000}
            height={1000}
            quality={90}
            className="size-full object-contain"
          />
        </picture>
      </div>
    </DashboardCard>
  )
}
