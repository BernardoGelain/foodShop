import { MenuItem } from "../../Models/Menu/MenuItem";
import { Text } from "../../styles/layout";
import { formatCurrency } from "../../utils/formatCurrency";
import { IconCart } from "../ModalItem/styles";
import { Container, ContainerActions, ContainerButtons } from "./styles";

type Props = {
  item: MenuItem;
};
export default function ItemsCart({ item }: Props) {
  return (
    <Container>
      <ContainerActions>
        <Text $fontSize="16px">{item.name}</Text>
        <ContainerButtons>
          <IconCart src="newMinus.svg" onClick={() => {}} />
          <span>{item.quantity}</span>
          <IconCart src="add.svg" onClick={() => {}} />
        </ContainerButtons>
      </ContainerActions>
      <Text $fontSize="16px" $fontWeight="bold">
        {formatCurrency(item.quantity * item.price)}
      </Text>
    </Container>
  );
}
