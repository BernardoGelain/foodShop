import { MenuItem } from "../../Models/Menu/MenuItem";
import { Text } from "../../styles/layout";
import { formatCurrency } from "../../utils/formatCurrency";
import EllipsisText from "../EllipsisText/EllipsisText";
import { Container, ContainerInfo, ImageItem } from "./styles";

type Props = {
  item: MenuItem;
};
export default function ListItem({ item }: Props) {
  return (
    <Container>
      <ContainerInfo>
        <Text $fontSize="18px" $fontWeight="600">
          {item.name}
        </Text>
        <EllipsisText title={item?.description}>
          <Text $fontSize="14px">{item?.description}</Text>
        </EllipsisText>

        <Text $fontSize="18px" $fontWeight="600">
          {formatCurrency(item?.price)}
        </Text>
      </ContainerInfo>
      {!!item.images && item.available && <ImageItem src={item.images?.[0].image} />}
    </Container>
  );
}
