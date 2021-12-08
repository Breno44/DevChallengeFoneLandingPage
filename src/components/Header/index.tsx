import { Container, OptionsContainer, ItensContainer } from "./styles";

import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import LogoImg from "../../assets/img/logo.svg";

function Header() {
  return (
    <Container>
      <img src={LogoImg} alt="logo" />
      <OptionsContainer>
        <p>Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Support</p>
      </OptionsContainer>
      <ItensContainer>
        <AiOutlineSearch size={24} color="#333" />
        <AiOutlineShoppingCart size={24} color="#333" />
        <AiOutlineMenu size={24} color="#333" />
      </ItensContainer>
    </Container>
  );
}

export default Header;
