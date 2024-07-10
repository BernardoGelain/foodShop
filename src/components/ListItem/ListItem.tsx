import { useContext, useMemo, useState } from "react";
import { MenuItem } from "../../Models/Menu/MenuItem";
import { Text } from "../../styles/layout";
import { formatCurrency } from "../../utils/formatCurrency";
import EllipsisText from "../EllipsisText/EllipsisText";
import { Badge, Container, ContainerInfo, Flex, ImageItem } from "./styles";
import ModalItem from "../ModalItem/ModalItem";
import { CartContext } from "../../contexts/CartContext/CartContext";

type Props = {
  item: MenuItem;
};
export default function ListItem({ item }: Props) {
  const { cart } = useContext(CartContext);
  const itemInCart = useMemo(() => {
    return cart.find((product) => product.id === item.id);
  }, [cart]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Container onClick={handleOpen}>
        <ContainerInfo>
          <Flex>
            {!!itemInCart && <Badge>{itemInCart?.quantity}</Badge>}
            <Text $fontSize="18px" $fontWeight="600">
              {item.name}
            </Text>
          </Flex>

          <EllipsisText>
            <Text $fontSize="14px">{item?.description}</Text>
          </EllipsisText>

          <Text $fontSize="18px" $fontWeight="600">
            {formatCurrency(item?.price)}
          </Text>
        </ContainerInfo>
        {!!item.images && item.available && <ImageItem src={item.images?.[0].image} />}
      </Container>
      {!item.images && <hr />}
      <ModalItem handleClose={handleClose} item={item} open={open} key={item.id} />
    </>
  );
}
