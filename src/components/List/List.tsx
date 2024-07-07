import { Collapse } from "@mui/material";
import { Menu } from "../../Models/Menu/Menu";
import { Text } from "../../styles/layout";
import ListItem from "../ListItem/ListItem";

import { Arrow, ArrowDown, Collapsible, Container } from "./styles";
import { useState } from "react";

type Props = {
  menu?: Menu;
  index: string;
};
export default function List({ menu, index }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Container>
        {menu?.sections?.map((item) => {
          if (index === item.name) {
            return (
              <div>
                <Collapsible onClick={() => setOpen(!open)}>
                  <Text $fontSize="22px" $fontWeight="600">
                    {item.name}
                  </Text>
                  {open ? <Arrow src="arrow.svg" /> : <ArrowDown src="arrow.svg" />}
                </Collapsible>
                <Collapse in={open}>
                  <Container>
                    {item.items.map((data) => {
                      return <ListItem item={data} />;
                    })}
                  </Container>
                </Collapse>
              </div>
            );
          }
        })}
      </Container>
    </>
  );
}
