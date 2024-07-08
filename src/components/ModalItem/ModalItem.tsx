import { Box, Modal } from "@mui/material";
import { MenuItem } from "../../Models/Menu/MenuItem";
import { Container, ContainerImage, ContainerInfo, Header, IconClose, Image } from "./styles";
import { Text } from "../../styles/layout";
import AddCartModal from "./components/AddCartModal";

type Props = {
  item: MenuItem;
  handleClose: () => void;
  open: boolean;
};
export default function ModalItem({ item, handleClose, open }: Props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Container>
          <Header>
            <IconClose src="close.svg" onClick={handleClose} />
          </Header>
          <ContainerImage>
            <Image src={item.images?.[0].image} />
          </ContainerImage>
          <ContainerInfo $padding="12px">
            <Text $fontSize="22px" $fontWeight="600">
              {item.name}
            </Text>
            <Text $fontSize="18px">{item?.description}</Text>
          </ContainerInfo>

          <AddCartModal item={item} />
        </Container>
      </Box>
    </Modal>
  );
}
