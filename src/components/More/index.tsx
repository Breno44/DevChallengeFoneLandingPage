import { Container, IconContainer } from "./styles";

import { FiActivity, FiBluetooth, FiBattery } from "react-icons/fi";

function More() {
  return (
    <Container>
      <IconContainer>
        <FiActivity size={28} color="#000" />
        <p>High-Resolution Audio compatible</p>
      </IconContainer>
      <IconContainer>
        <FiBluetooth size={28} color="#000" />
        <p>Wireless connectivity using bluetooth</p>
      </IconContainer>
      <IconContainer>
        <FiBattery size={28} color="#000" />
        <p>A powerfull battery that lasts up to 4 hours of use</p>
      </IconContainer>
    </Container>
  );
}

export default More;
