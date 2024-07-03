import Header from "../../components/Header/Header";

import Menu from "../../components/Menu/Menu";

import { CardContainer, Container, Img } from "./styles";

export default function Homepage() {
  return (
    <Container>
      <Header />
      <Img src="burger.svg" />
      <CardContainer>
        <Menu />
      </CardContainer>
    </Container>
  );
}
