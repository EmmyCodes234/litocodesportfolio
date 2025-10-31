import { SidebarTrigger } from "@/components/ui/sidebar"
import type { MockData } from "@/types/dashboard"
import Image from "next/image"

interface MobileHeaderProps {
  mockData: MockData
}

export function MobileHeader({ mockData }: MobileHeaderProps) {
  return (
    <div className="lg:hidden h-header-mobile sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Sidebar Menu */}
        <SidebarTrigger />

        {/* Center: LitoCodes Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded flex items-center justify-center overflow-clip">
              <Image src="/logo-litocodes.png" alt="LitoCodes" width={32} height={32} className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
