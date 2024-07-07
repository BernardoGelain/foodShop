import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header";

import Menu from "../../components/Menu/Menu";
import { useFetchRestaurantDetails } from "../../hooks/useFetchRestaurantDetails";

import { CardContainer, Container, Img } from "./styles";

export default function Homepage() {
  const { restaurant } = useFetchRestaurantDetails();

  return (
    <Container>
      <Header />
      <Img src={restaurant?.webSettings.bannerImage} />
      <CardContainer>
        <Menu />
        <Cart />
      </CardContainer>
    </Container>
  );
}
