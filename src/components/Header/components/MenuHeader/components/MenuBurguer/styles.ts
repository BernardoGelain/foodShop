import styled from "styled-components";

export const ContainerGeneral = styled.div<{
  $justifyContent?: string;
  $background?: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  border-bottom: 1px solid #eaeaea;
  gap: 5px;
  overflow-y: scroll;
  div {
    width: 100%;
  }
`;
export const ContainerMenu = styled.div<{
  $justifyContent?: string;
  $background?: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : "center")};
  background-color: white;
  color: black;
  min-width: 90vw;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;

  img {
    position: absolute;
    width: 24px;
    right: 10px;
    top: 20px;
    cursor: pointer;
  }
`;

export const Text = styled.span<{
  $fontSize?: string;
  $fontWeight?: string;
  $paddingBottom?: boolean;
  $color?: string;
  $border?: boolean;
}>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "12px")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "")};
  color: ${(props) => (props.$color ? props.$color : "black")};
  border-bottom: ${(props) => (props.$border ? "5px solid white" : "")};
  padding-bottom: ${(props) => (props.$paddingBottom ? "10px" : "15px")};
  display: flex;
`;

export const ContainerPrices = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundContainerCards};
  height: 100%;
`;

export const Pipe = styled.div`
  width: 100%;
  height: 2px;
  background-color: #eaeaea;
`;
