import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  max-width: 1000px;
  gap: 16px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 20px;

  button.srch {
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
  }

  button.srch:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "#000" : "#d8d8d8"};
    color: ${({ theme }) => (theme === "dark" ? "#000" : "#d8d8d8")};
  }

  input {
    width: 80vw;
    max-width: 360px;
    font-size: 20px;
    padding: 6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#eee")};
    line-height: 1.5;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid
      ${({ theme }) => (theme === "light" ? "#000" : "#d8d8d8")};
  }
`;
