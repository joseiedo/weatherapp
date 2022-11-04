import styled from "styled-components";

export const Input = styled.input`
  width: 80vw;
  max-width: 360px;
  font-size: 20px;
  padding: 6px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#eee")};
  line-height: 1.5;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === "light" ? "#000" : "#d8d8d8")}; ;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
