import { useContext } from "react";
import { MenuItem } from "../../Models/Menu/MenuItem";
import { Text } from "../../styles/layout";
import { formatCurrency } from "../../utils/formatCurrency";
import { IconCart } from "../ModalItem/styles";
import { Container, ContainerActions, ContainerButtons } from "./styles";
import { CartContext } from "../../contexts/CartContext/CartContext";

type Props = {
  item: MenuItem;
};
export default function ItemsCart({ item }: Props) {
  const { removeFromCart, addToCart } = useContext(CartContext);
  return (
    <Container>
      <ContainerActions>
        <Text $fontSize="16px">{item.name}</Text>
        <ContainerButtons>
          <IconCart src="newMinus.svg" onClick={() => removeFromCart(item.id)} />
          <span>{item.quantity}</span>
          <IconCart src="add.svg" onClick={() => addToCart({ ...item, quantity: item.quantity + 1 })} />
        </ContainerButtons>
      </ContainerActions>
      <Text $fontSize="16px" $fontWeight="bold">
        {formatCurrency(item.quantity * item.price)}
      </Text>
    </Container>
  );
}
