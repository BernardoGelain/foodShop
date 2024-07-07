import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 0px 11px 0px rgba(133, 133, 133, 1);
  box-shadow: 0px 0px 11px 0px rgba(133, 133, 133, 1);
  justify-content: space-between;
  max-height: 350px;
`;
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 180px;
  max-height: 180px;
  overflow-y: scroll;

  overflow-y: scroll;
`;
export const Divider = styled.div<{
  $twoElement?: boolean;
}>`
  display: flex;
  justify-content: ${(props) => (props.$twoElement ? "space-between" : "")};
  width: 100%;
  height: 60px;
  padding: 16px 24px 16px 24px;
  background-color: ${({ theme }) => theme.colors.backgroundContainerCards};
  color: ${({ theme }) => theme.colors.text};
`;
