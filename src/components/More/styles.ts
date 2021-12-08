import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 450px 0 450px;

  @media (min-width: 1280px) and (max-width: 1440px) {
    padding: 100px 150px 100px 150px;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    flex-direction: column;
    padding: 40px 50px;
    gap: 20px;
  }
`;

export const IconContainer = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    font-weight: 500;
    line-height: 24px;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 100%;
    font-size: 14px;
  }
`;
