import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 0px 11px 0px rgba(133, 133, 133, 1);
  box-shadow: 0px 0px 11px 0px rgba(133, 133, 133, 1);
  padding: 10px 20px 10px 20px;
`;
export const ContainerMenu = styled.div`
  display: flex;
`;
export const ContainerItem = styled.div<{
  $border?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  border-bottom: ${(props) => (props.$border ? "3px solid" : "")};
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
export const Icon = styled.img<{
  $border?: boolean;
}>`
  width: 120px;

  padding: 2px;
  border: ${(props) => (props.$border ? "2px solid" : "")};
  border-radius: 999px;
`;

export const Text = styled.span<{
  $bold?: boolean;
}>`
  font-weight: ${(props) => (props.$bold ? "600" : "")};
  font-size: 20px;
  padding: 20px;
`;
