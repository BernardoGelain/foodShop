import { useLocation, useNavigate } from "react-router-dom";
import { Container, Text } from "./styles";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useState } from "react";
import MenuBurguer from "./components/MenuBurguer/MenuBurguer";

export default function MenuHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const width = useWindowWidth() || 1280;
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Container $justifyContent={width > 1100 ? "center" : "center"}>
      {width > 1100 && (
        <>
          <Text $fontSize="24px" $border={pathname === "/"} $paddingBottom={pathname === "/"} onClick={() => navigate("/")}>
            MENU
          </Text>

          <Text $fontSize="24px" $border={pathname === "/sign-in"} $paddingBottom={pathname === "/sign-in"} onClick={() => navigate("/sign-in")}>
            ENTRAR
          </Text>

          <Text $fontSize="24px" $border={pathname === "/contact"} $paddingBottom={pathname === "/contact"} onClick={() => navigate("/contact")}>
            CONTATO
          </Text>
        </>
      )}
      {width <= 1100 && (
        <>
          <Text $fontSize="18px" onClick={() => navigate("/")}>
            MENU
          </Text>
          <div>
            <img src="menu.svg" onClick={() => setOpenMenu(!openMenu)} />
          </div>
          <MenuBurguer open={openMenu} toggleDrawer={() => setOpenMenu(!openMenu)} />
        </>
      )}
    </Container>
  );
}
