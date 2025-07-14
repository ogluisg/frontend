import { NavigationItem } from "@/types";

export interface HeaderProps {
  navigation?: NavigationItem[];
  transparent?: boolean;
  sticky?: boolean;
}

export interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}
