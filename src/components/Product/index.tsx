import {
  Container,
  ContainerLeft,
  ContainerRight,
  Note,
  Description,
  Buy,
  Price,
  ButtonCart,
} from "./styles";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import FoneImg from "../../assets/img/fone.png";

function Product() {
  return (
    <Container>
      <ContainerLeft>
        <img src={FoneImg} alt="fone" />
      </ContainerLeft>
      <ContainerRight>
        <h1>HYPER X ON-EAR</h1>
        <p>Wireless over-ear headphones</p>
        <Note>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          4.2 (335)
        </Note>
        <Description>
          <p>Driver unit</p>
          <span>70 mm, dome type (CCAW Voice Col)</span>
        </Description>
        <Description>
          <p>Frequency Response</p>
          <span>4 Hz + 100.000 Hz</span>
        </Description>
        <Buy>
          <Price>$89.99</Price>
          <ButtonCart>ADD TO CART</ButtonCart>
        </Buy>
      </ContainerRight>
    </Container>
  );
}

export default Product;
