import { Drawer } from "@mui/material";
import { ReactNode } from "react";
type Props = {
  open: boolean;
  anchor: "left" | "right";
  toggleDrawer: () => void;
  children: ReactNode;
};
export default function DrawerComponent({ open, anchor, toggleDrawer, children }: Props) {
  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
      {children}
    </Drawer>
  );
}
