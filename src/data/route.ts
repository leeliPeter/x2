import { Home, MessageCircle, GitGraph, Settings } from "lucide-react";
export const routes = [
  {
    id: 1,
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    name: "Graph",
    href: "/graph",
    icon: GitGraph,
  },
  {
    id: 3,
    name: "Chat",
    href: "/chatbox",
    icon: MessageCircle,
  },
  {
    id: 4,
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
