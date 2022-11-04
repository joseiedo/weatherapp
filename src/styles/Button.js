import styled from "styled-components";

export const Button = styled.button`
  display: block;
  height: 43px;
  width: 110px;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 20ppx;
  border: none;
  border: 2px solid ${({ theme }) => (theme === "light" ? "#000" : "#d8d8d8")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#d8d8d8")};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "#000" : "#d8d8d8"};
    color: ${({ theme }) => (theme === "dark" ? "#000" : "#d8d8d8")};
  }
`;
