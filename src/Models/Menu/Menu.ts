import { MenuSection } from "./MenuSection";

export interface Menu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: MenuSection[];
}
