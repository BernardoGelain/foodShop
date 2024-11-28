import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  margin-top: 2px;
  padding: 32px 40px 32px 40px;
  justify-content: space-around;
  width: 85%;

  @media (max-width: 1100px) {
    width: 100%;
    padding: 10px;
  }
`;
export const Img = styled.img`
  width: 100%;
  min-height: 150px;
  object-fit: cover;
  margin-bottom: 4px;
`;
