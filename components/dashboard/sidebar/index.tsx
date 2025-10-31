"use client"

import { SidebarMenuBadge } from "@/components/ui/sidebar"
import AtomIcon from "@/components/icons/atom"

import type * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import BracketsIcon from "@/components/icons/brackets"
import CuteRobotIcon from "@/components/icons/cute-robot"
import EmailIcon from "@/components/icons/email"
import { Bullet } from "@/components/ui/bullet"
import Image from "next/image"
import { useIsV0 } from "@/lib/v0-context"

const data = {
  navMain: [
    {
      title: "Portfolio",
      items: [
        {
          title: "Overview",
          url: "#overview",
          icon: BracketsIcon,
          isActive: true,
        },
        {
          title: "Projects",
          url: "#projects",
          icon: AtomIcon,
          isActive: false,
        },
        {
          title: "Tech Stack",
          url: "#tech-stack",
          icon: CuteRobotIcon,
          isActive: false,
        },
        {
          title: "Contact",
          url: "#contact",
          icon: EmailIcon,
          isActive: false,
        },
      ],
    },
  ],
  desktop: {
    title: "Desktop (Online)",
    status: "online",
  },
  user: {
    name: "LitoCodes",
    email: "litocodes@gmail.com",
    avatar: "/avatars/user_mati.png",
  },
}

function SidebarContent_Inner() {
  const { setOpenMobile, isMobile } = useSidebar()

  return (
    <>
      {data.navMain.map((group, i) => (
        <SidebarGroup className={cn(i === 0 && "rounded-t-none")} key={group.title}>
          <SidebarGroupLabel>
            <Bullet className="mr-2" />
            {group.title}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(item.locked && "pointer-events-none opacity-50")}
                  data-disabled={item.locked}
                >
                  <SidebarMenuButton
                    asChild={!item.locked}
                    isActive={item.isActive}
                    disabled={item.locked}
                    className={cn("disabled:cursor-not-allowed", item.locked && "pointer-events-none")}
                  >
                    {item.locked ? (
                      <div className="flex items-center gap-3 w-full">
                        <item.icon className="size-5" />
                        <span>{item.title}</span>
                      </div>
                    ) : (
                      <a
                        href={item.url}
                        onClick={(e) => {
                          const targetId = item.url.substring(1)
                          const targetElement = document.getElementById(targetId)
                          if (targetElement) {
                            e.preventDefault()
                            targetElement.scrollIntoView({ behavior: "smooth" })
                            if (isMobile) {
                              setOpenMobile(false)
                            }
                          }
                        }}
                      >
                        <item.icon className="size-5" />
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                  {item.locked && <SidebarMenuBadge></SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}

export function DashboardSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  const isV0 = useIsV0()

  return (
    <Sidebar {...props} className={cn("py-sides", className)}>
      <SidebarHeader className="rounded-t-lg flex gap-3 flex-row rounded-b-none">
        <div className="flex overflow-clip size-12 shrink-0 items-center justify-center rounded bg-sidebar-primary-foreground/10 transition-colors group-hover:bg-sidebar-primary">
          <Image
            src="/logo-litocodes.png"
            alt="LitoCodes Logo"
            width={48}
            height={48}
            className="object-cover size-full group-hover:scale-[1.1] origin-center transition-transform"
          />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="text-2xl font-display">LitoCodes</span>
          <span className="text-xs uppercase">Web Developer</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarContent_Inner />
      </SidebarContent>

      <SidebarFooter className="p-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex gap-0.5 w-full group">
                  <div className="shrink-0 flex size-14 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground overflow-clip">
                    <Image
                      src="/logo-litocodes.png"
                      alt={data.user.name}
                      width={120}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                  <div className="pl-3 pr-1.5 pt-2 pb-1.5 flex-1 flex bg-sidebar-accent items-center rounded">
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate text-xl font-display">{data.user.name}</span>
                      <span className="truncate text-xs uppercase opacity-50">{data.user.email}</span>
                    </div>
                  </div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
