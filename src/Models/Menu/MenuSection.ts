import { Image } from "./Image";
import { MenuItem } from "./MenuItem";

export interface MenuSection {
  id: number;
  name: string;
  description?: string;
  position: number;
  visible: number;
  images: Image[];
  items: MenuItem[];
}
