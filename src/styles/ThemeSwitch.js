import styled from "styled-components";

export const ThemeSwitch = styled.button`
  position: relative;
  font-size: 1rem;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme === "light" ? "#c5c5c5" : "#2b2b2b"};
  border: none;
  padding: 5px;
  width: 75px;
  display: flex;
  gap: 10px;
  color: ${(props) => (props.theme === "dark" ? "#c5c5c5" : "#2b2b2b")};
  align-items: center;
  font-size: 9px;
  &::before {
    content: "";
    position: absolute;
    display: block;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: #fff;
    left: ${(props) => (props.theme === "light" ? "3px" : "calc(100% - 35px)")};
    transition: left 0.3s ease-in;
  }
`;
