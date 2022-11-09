import styled from "styled-components";

export const InfoWeatherContainer = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? "#e0e0e0" : "#2b2b2b"};
  margin: 120px auto;
  width: 80vw;
  height: 100vh;
  max-width: 600px;
  max-height: 600px;
  display: grid;
  place-items: center;
  position: relative;
  transition: all 0.3s;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#eee")};

  & > div > img {
    display: block;
    max-width: 100%;
    height: 60px;
  }
  & > div {
    line-height: 1;
    left: 0;
    bottom: 0;
  }

  & > div h2 {
    font-weight: 200;
    font-size: 96px;
    color: inherit;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  & > div span {
    font-size: 20px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    color: inherit;
  }

  & h2 {
    color: inherit;
    font-weight: 400;
  }

  & h2 ~ div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  .iconWrapper {
    display: flex;
  }

  .iconWrapper + .iconWrapper {
    margin-top: 8px;
  }

  .iconWrapper svg {
    width: 24px;
    height: 24px;
  }

  .city {
    margin: 1rem 0px;
    font-weight: bold;
  }
`;
