import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  color: ${({ theme }) => theme.colors.text_light};
`;
