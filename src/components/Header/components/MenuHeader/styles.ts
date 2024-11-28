import styled from "styled-components";

export const Container = styled.div<{
  $justifyContent?: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : "center")};
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  color: ${({ theme }) => theme.colors.text_light};

  img {
    position: absolute;
    width: 24px;
    right: 10px;
    top: 25px;
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
  color: ${({ theme }) => theme.colors.text_light};
  border-bottom: ${(props) => (props.$border ? "5px solid white" : "")};
  padding-top: 28px;
  padding-bottom: ${(props) => (props.$paddingBottom ? "10px" : "15px")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  cursor: pointer;
`;
