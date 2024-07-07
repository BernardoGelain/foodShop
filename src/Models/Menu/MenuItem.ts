import { Image } from "./Image";
import { Modifier } from "./Modifier";

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: Image[];
  modifiers?: Modifier[];
  available: boolean;
}
