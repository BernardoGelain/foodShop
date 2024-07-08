import { useState } from "react";
import { Modifier as ModifierType } from "../../Models/Menu/Modifier";
import { Text } from "../../styles/layout";
import { ContainerChoose } from "../ModalItem/styles";
import ModifierItem from "../ModifierItem/ModifierItem";
import { ContainerScroll } from "./styles";
import { ModifierItem as ModifiewrItemType } from "../../Models/Menu/ModifierItem";

type Props = {
  modifier: ModifierType;
  setModifier: (modifierItem: ModifiewrItemType) => void;
};
export default function Modifier({ modifier, setModifier }: Props) {
  const [selected, setSelected] = useState("");
  return (
    <>
      <ContainerChoose>
        <Text $fontSize="18px" $fontWeight="600">
          {modifier.name}
        </Text>
        <Text $fontSize="18px">Select {modifier.minChoices} option</Text>
      </ContainerChoose>
      <ContainerScroll>
        {modifier.items.map((modifierItem) => (
          <ModifierItem item={modifierItem} setSelected={setSelected} setModifierItem={() => setModifier(modifierItem)} optionSelected={selected} />
        ))}
      </ContainerScroll>
    </>
  );
}
