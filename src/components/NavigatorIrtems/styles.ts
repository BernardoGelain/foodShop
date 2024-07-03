import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
