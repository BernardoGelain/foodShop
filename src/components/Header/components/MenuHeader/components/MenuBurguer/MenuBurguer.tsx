import { useContext, useMemo } from "react";
import { Divider, EmptyCart } from "../../../../../Cart/styles";
import DrawerComponent from "../../../../../DrawerComponent/DrawerComponent";
import ItemsCart from "../../../../../ItemsCart/ItemsCart";

import { ContainerGeneral, ContainerMenu, ContainerPrices, Pipe, Text } from "./styles";
import { CartContext } from "../../../../../../contexts/CartContext/CartContext";
import { formatCurrency } from "../../../../../../utils/formatCurrency";
import { calculateTotalCart } from "../../../../../../utils/calculateTotalCart";

type Props = {
  open: boolean;
  toggleDrawer: () => void;
};
export default function MenuBurguer({ open, toggleDrawer }: Props) {
  const { cart } = useContext(CartContext);
  const total = useMemo(() => calculateTotalCart(cart), [cart]);
  const emptyCart = cart?.length < 1;

  return (
    <DrawerComponent anchor="right" open={open} toggleDrawer={toggleDrawer}>
      <ContainerGeneral>
        <ContainerMenu>
          <Text $color="black" $fontSize={"20px"}>
            Carrinho
          </Text>
          <img src="close.svg" onClick={toggleDrawer} />
        </ContainerMenu>

        {cart?.map((product) => (
          <>
            <ItemsCart item={product} />
            <Pipe />
          </>
        ))}

        {emptyCart && (
          <EmptyCart>
            <Text $fontSize="18px">Seu carrinho está vazio</Text>
          </EmptyCart>
        )}

        {!emptyCart && (
          <ContainerPrices>
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
          </ContainerPrices>
        )}
      </ContainerGeneral>
    </DrawerComponent>
  );
}
