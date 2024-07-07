import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
export const Collapsible = styled.div`
  display: flex;
  cursor: pointer;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;
export const Arrow = styled.img`
  width: 24px;
`;
export const ArrowDown = styled.img`
  width: 24px;
  transform: rotate(180deg);
`;
