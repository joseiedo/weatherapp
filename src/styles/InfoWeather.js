import styled from "styled-components";

export const InfoWeatherContainer = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? "#e0e0e0" : "#2b2b2b"};
  margin: 120px auto;
  width: 80vw;
  height: 40vh;
  max-width: 600px;
  max-height: 600px;
  display: grid;
  place-items: center;
  position: relative;
  transition: all 0.3s;
`;
export const WeatherDesc = styled.div`
  line-height: 1;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#eee")};
  left: 0;
  bottom: 0;
`;
export const Temperature = styled.h2`
  font-weight: 200;
  font-size: 96px;
  color: inherit;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Subtitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  color: inherit;
`;
export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: 60px;
  object-fit: cover;
`;
