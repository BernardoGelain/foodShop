import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerImage = styled.div`
  display: flex;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Header = styled.div`
  background-color: transparent;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  position: absolute;
`;
export const IconClose = styled.img`
  width: 24px;
  cursor: pointer;
`;
export const ContainerInfo = styled.div<{
  $padding?: string;
  $darker?: boolean;
}>`
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  display: flex;
  flex-direction: column;
`;
export const ContainerChoose = styled.div`
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.backgroundContainerCards};
  display: flex;
  flex-direction: column;
`;

export const ContainerAdd = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundContainerCards};
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  opacity: 0.9;
  width: 100%;
`;
export const ContainerButtons = styled.div`
  display: flex;
  gap: 30px;
`;
export const IconCart = styled.img`
  width: 24px;
  cursor: pointer;
`;
export const Button = styled.span<{ $disable?: boolean }>`
  width: 350px;
  height: 45px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  background-color: ${(props) => (props.$disable ? "gray" : "")};
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;

  @media (max-width: 1100px) {
    width: 250px;
  }
`;
