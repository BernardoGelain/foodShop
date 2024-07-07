import { Container, ContainerItem, Icon, Text } from "./styles";

export default function Menu() {
  return (
    <Container>
      <ContainerItem $border={true}>
        <Icon src="burgerNav.svg" $border={true} />
        <Text $bold={true}>Burguers</Text>
      </ContainerItem>
      <ContainerItem>
        <Icon src="dessertNav.svg" />
        <Text>Drinks</Text>
      </ContainerItem>
      <ContainerItem>
        <Icon src="drinkNav.svg" />
        <Text>Desserts</Text>
      </ContainerItem>
    </Container>
  );
}
