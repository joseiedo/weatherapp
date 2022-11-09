import styled, { keyframes } from "styled-components";

const spinningAnimation = keyframes`
  100% {transform: rotate(360deg)}
`;

export const Loading = styled.div`
  margin: 0 auto;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => (theme === "dark" ? " #fff " : "#131313")};
  border-bottom: 5px solid transparent;
  animation: ${spinningAnimation} linear infinite 1s;
`;
