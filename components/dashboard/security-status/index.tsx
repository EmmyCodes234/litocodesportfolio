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
      <span className="font-normal text-sm">{title}</span> {/* Changed from font-medium to font-normal */}
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
        {/* Animation section - same on mobile and desktop */}
        <div className="flex items-center justify-center my-4">
          <div className="relative w-full h-48">
            <Image
              src="/assets/bot_greenprint.gif"
              alt="Tech Stack"
              fill
              quality={90}
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Tech stack items - same layout on mobile and desktop */}
        <div className="grid grid-cols-2 gap-3 py-2 px-1">
          {statuses.map((item, index) => (
            <TechStackItem key={index} title={item.title} variant={item.variant} />
          ))}
        </div>
      </div>
    </DashboardCard>
  )
}