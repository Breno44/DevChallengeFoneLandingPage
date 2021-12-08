import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;

  @media (min-width: 300px) and (max-width: 700px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  img {
    height: 550px;
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    img {
      height: 450px;
    }
  }

  @media (min-width: 300px) and (max-width: 700px) {
    margin-top: 30px;

    img {
      height: 350px;
    }
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 200px;
  width: 50%;
  gap: 25px;

  h1 {
    font-size: 38px;
    color: #d01c26;
  }

  p {
    font-weight: bold;
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    padding: 0 0 0 60px;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 100%;
    padding: 0 30px;
    margin-top: 40px;

    h1 {
      font-size: 32px;
    }
  }
`;

export const Note = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #d01c26;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    font-size: 24px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    font-weight: 300;
    color: #333;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  gap: 65px;

  @media (min-width: 300px) and (max-width: 700px) {
    gap: 35px;
  }
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 28px;

  @media (min-width: 300px) and (max-width: 700px) {
    font-size: 24px;
  }
`;

export const ButtonCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  width: 180px;
  height: 45px;
  background-color: #d01c26;
  transition: all 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #000;
  }
`;
