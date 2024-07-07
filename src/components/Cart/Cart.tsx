import { Text } from "../../styles/layout";
import { Container, ContainerItems, Divider } from "./styles";

export default function Cart() {
  return (
    <Container>
      <div>
        <Divider>
          <Text $fontSize="22px" $fontWeight="bold">
            Carrinho
          </Text>
        </Divider>
        <ContainerItems>654654</ContainerItems>
      </div>
      <div>
        <Divider $twoElement={true}>
          <Text $fontSize="18px">Subtotal</Text>
          <Text $fontSize="18px">00,00</Text>
        </Divider>
        <Divider $twoElement={true}>
          <Text $fontSize="20px" $fontWeight="bold">
            Total
          </Text>
          <Text $fontSize="20px" $fontWeight="bold">
            00,00
          </Text>
        </Divider>
      </div>
    </Container>
  );
}
