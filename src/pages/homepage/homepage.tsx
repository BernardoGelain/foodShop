import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header";

import Menu from "../../components/Menu/Menu";
import { useFetchRestaurantDetails } from "../../hooks/requests/useFetchRestaurantDetails";
import { useWindowWidth } from "../../hooks/useWindowWidth";

import { CardContainer, Container, Img } from "./styles";

export default function Homepage() {
  const { restaurant } = useFetchRestaurantDetails();
  const width = useWindowWidth() || 1280;

  return (
    <Container>
      <Header />
      <Img src={restaurant?.webSettings.bannerImage} />

      <CardContainer>
        <Menu />
        {width > 1100 && <Cart />}
      </CardContainer>
    </Container>
  );
}
