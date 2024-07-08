import { useState } from "react";
import { MenuItem } from "../../Models/Menu/MenuItem";
import { Text } from "../../styles/layout";
import { formatCurrency } from "../../utils/formatCurrency";
import EllipsisText from "../EllipsisText/EllipsisText";
import { Container, ContainerInfo, ImageItem } from "./styles";
import ModalItem from "../ModalItem/ModalItem";

type Props = {
  item: MenuItem;
};
export default function ListItem({ item }: Props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  console.log(open);
  return (
    <>
      <Container onClick={handleOpen}>
        <ContainerInfo>
          <Text $fontSize="18px" $fontWeight="600">
            {item.name}
          </Text>
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
