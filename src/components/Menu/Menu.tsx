import { useState } from "react";
import { Container, ContainerItem, ContainerMenu, Icon, Text } from "./styles";
import List from "../List/List";
import { useFetchRestaurantMenu } from "../../hooks/useFetchRestaurantMenu";

export default function Menu() {
  const [selected, setSelected] = useState("Burgers");
  const { menu } = useFetchRestaurantMenu();
  return (
    <Container>
      <ContainerMenu>
        <ContainerItem $border={selected === "Burgers"} onClick={() => setSelected("Burgers")}>
          <Icon src="burgerNav.svg" $border={selected === "Burgers"} />
          <Text $bold={selected === "Burgers"}>Burgers</Text>
        </ContainerItem>
        <ContainerItem $border={selected === "Drinks"} onClick={() => setSelected("Drinks")}>
          <Icon src="drinkNav.svg" $border={selected === "Drinks"} />
          <Text $bold={selected === "Drinks"}>Drinks</Text>
        </ContainerItem>
        <ContainerItem $border={selected === "Desserts"} onClick={() => setSelected("Desserts")}>
          <Icon src="dessertNav.svg" $border={selected === "Desserts"} />
          <Text $bold={selected === "Desserts"}>Desserts</Text>
        </ContainerItem>
      </ContainerMenu>
      <List menu={menu} index={selected} />
    </Container>
  );
}
