import { Checkbox } from "@mui/material";
import { ModifierItem as ModifierItemType } from "../../Models/Menu/ModifierItem";
import { Text } from "../../styles/layout";
import { formatCurrency } from "../../utils/formatCurrency";
import { ContainerInfo } from "../ListItem/styles";
import { Container } from "./styles";

type Props = {
  item: ModifierItemType;
  optionSelected: string;
  setSelected: (item: string) => void;
  setModifierItem: () => void;
};
export default function ModifierItem({ item, optionSelected, setSelected, setModifierItem }: Props) {
  const check = optionSelected === item.name;
  return (
    <Container
      onClick={() => {
        setSelected(item.name);
        setModifierItem();
      }}
    >
      <ContainerInfo>
        <Text $fontSize="18px" $fontWeight="600">
          {item.name}
        </Text>
        <Text $fontSize="18px">{formatCurrency(item.price)}</Text>
      </ContainerInfo>
      <Checkbox
        sx={{
          color: "transparent",
          "&.Mui-checked": {
            color: "transparent",
          },
          "& .MuiSvgIcon-root": {
            borderRadius: "50%",
            border: "3px solid black",
            backgroundColor: check ? "black" : "white",
          },
        }}
      />
    </Container>
  );
}
