import { Archive, Calendar, Shirt, Sparkles } from "lucide-react";
import type { HomeShortcut } from "./type";

export const homeShortcuts: HomeShortcut[] = [
  {
    label: 'Мои образы',
    Icon: Archive,
    to: '/looks',
  },
  {
    label: 'Мои вещи',
    Icon: Shirt,
    to: '/my-things',
  },
  {
    label: 'Календарь образов',
    Icon: Calendar,
    to: '/calendar',
  },
  {
    label: 'Онлайн примерочная',
    Icon: Sparkles,
    to: '/fitting',
  },
] as const