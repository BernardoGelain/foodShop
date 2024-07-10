import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 4px;
`;
export const ImageItem = styled.img`
  width: 140px;
  border-radius: 8px;
`;
export const Badge = styled.span`
  min-width: 18px;
  min-height: 18px;
  display: flex;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;
export const Flex = styled.span`
  display: flex;
  gap: 5px;
`;
