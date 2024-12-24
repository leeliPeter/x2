import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-screen px-6 py-2 bg-background border-b border-border">
      <div className="p-4 flex items-center gap-2">
        <SidebarTrigger className="hover:bg-accent">
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
        <h1 className="text-2xl text-primary font-bold ml-4">X2</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 p-1 h-10 justify-center w-10 bg-gray-200 text-gray-800 rounded-full ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
