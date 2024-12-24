"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { routes } from "@/data/route";
import { Home, User, MessageCircle, GitGraph } from "lucide-react";
import Link from "next/link";

export function SidebarNav() {
  const { setOpen, setOpenMobile, isMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border px-2 py-4">
        <h2 className="px-4 text-lg text-primary font-semibold">SideBar</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="flex flex-col gap-2 py-2 p-4">
          {routes.map((route) => (
            <SidebarMenuItem key={route.id}>
              <Link href={route.href}>
                <SidebarMenuButton
                  tooltip={route.name}
                  className="hover:bg-primary hover:text-primary-foreground w-full"
                  onClick={handleClick}
                >
                  <route.icon className="h-4 w-4" />
                  <span>{route.name}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
