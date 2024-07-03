import { useLocation, useNavigate } from "react-router-dom";
import { Container, Text } from "./styles";

export default function MenuHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Container>
      <Text $fontSize="24px" $border={pathname === "/"} $paddingBottom={pathname === "/"} onClick={() => navigate("/")}>
        MENU
      </Text>
      <Text $fontSize="24px" $border={pathname === "/sign-in"} $paddingBottom={pathname === "/sign-in"} onClick={() => navigate("/sign-in")}>
        ENTRAR
      </Text>
      <Text $fontSize="24px" $border={pathname === "/contact"} $paddingBottom={pathname === "/contact"} onClick={() => navigate("/contact")}>
        CONTATO
      </Text>
    </Container>
  );
}
