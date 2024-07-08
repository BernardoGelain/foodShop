import { useContext, useEffect, useState } from "react";
import { MenuItem } from "../../../Models/Menu/MenuItem";
import { Button, ContainerAdd, ContainerButtons, IconCart } from "../styles";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import { formatCurrency } from "../../../utils/formatCurrency";
import Modifier from "../../Modifier/Modifier";
import { ModifierItem } from "../../../Models/Menu/ModifierItem";

type Props = {
  item: MenuItem;
  handleClose: () => void;
};
export default function AddCartModal({ item, handleClose }: Props) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price);
  const [modifierState, setModifier] = useState<ModifierItem>();
  const hasModifiers = !item.modifiers || (item.modifiers && !!modifierState);
  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(item.id);
    }
  };
  const handleAdd = () => {
    if (!item.modifiers) {
      addToCart({ ...item, quantity: quantity });
    } else if (!!modifierState) {
      addToCart({ ...item, quantity: quantity, price: modifierState.price, name: `${item.name} - ${modifierState.name}` });
    }
    handleClose();
  };

  useEffect(() => {
    const product = cart.find((data) => item.id === data.id);
    if (product && product.quantity > 0) setQuantity(product.quantity);

    if (!!modifierState) setPrice(modifierState.price);
  }, [modifierState]);
  return (
    <>
      {item?.modifiers?.map((modifier) => {
        return <Modifier modifier={modifier} setModifier={setModifier} />;
      })}
      <ContainerAdd>
        <ContainerButtons>
          <IconCart src="minus.svg" onClick={handleRemove} />
          <span>{quantity}</span>
          <IconCart
            src="add.svg"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          />
        </ContainerButtons>
        <Button $disable={!hasModifiers} onClick={handleAdd}>
          Add to cart • {formatCurrency(price * quantity)}
        </Button>
      </ContainerAdd>
    </>
  );
}
