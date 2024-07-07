import styled from "styled-components";

export const Text = styled.span<{
  $fontSize?: string;
  $fontWeight?: string;
}>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "12px")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "")};
  color: ${({ theme }) => theme.colors.text};
`;
