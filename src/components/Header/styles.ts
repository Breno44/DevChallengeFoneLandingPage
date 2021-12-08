import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  img {
    height: 60px;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    padding: 0 20px;

    img {
      height: 40px;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }

  p {
    height: 25px;
    transition: all 1s linear;

    &:hover {
      border-bottom: 1px solid red;
    }
  }

  @media (min-width: 300px) and (max-width: 700px) {
    display: none;
  }
`;

export const ItensContainer = styled.div`
  display: flex;
  gap: 25px;

  &:hover {
    cursor: pointer;
  }
`;
