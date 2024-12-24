import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, Settings, User, LayoutDashboard } from "lucide-react";

export function SidebarNav() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border px-2 py-4">
        <h2 className="px-4 text-lg text-primary font-semibold">Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="flex flex-col gap-2 py-2 p-4">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Dashboard"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Home"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Settings"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Profile"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
