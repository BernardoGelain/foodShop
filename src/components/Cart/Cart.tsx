import { useContext, useMemo } from "react";
import { Text } from "../../styles/layout";
import { Container, ContainerItems, Divider, EmptyCart } from "./styles";
import { CartContext } from "../../contexts/CartContext/CartContext";
import ItemsCart from "../ItemsCart/ItemsCart";
import { calculateTotalCart } from "../../utils/calculateTotalCart";
import { formatCurrency } from "../../utils/formatCurrency";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const total = useMemo(() => calculateTotalCart(cart), [cart]);
  const emptyCart = cart?.length < 1;
  return (
    <Container $empty={emptyCart}>
      <div>
        <Divider>
          <Text $fontSize="22px" $fontWeight="bold">
            Carrinho
          </Text>
        </Divider>
        <ContainerItems>
          {cart?.map((product) => (
            <ItemsCart item={product} />
          ))}
          {emptyCart && (
            <EmptyCart>
              <Text $fontSize="18px">Seu carrinho está vazio</Text>
            </EmptyCart>
          )}
        </ContainerItems>
      </div>
      <div>
        {!emptyCart && (
          <>
            <Divider $twoElement={true}>
              <Text $fontSize="18px">Subtotal</Text>
              <Text $fontSize="18px">{formatCurrency(total)}</Text>
            </Divider>
            <Divider $twoElement={true}>
              <Text $fontSize="20px" $fontWeight="bold">
                Total
              </Text>
              <Text $fontSize="20px" $fontWeight="bold">
                {formatCurrency(total)}
              </Text>
            </Divider>
          </>
        )}
      </div>
    </Container>
  );
}
