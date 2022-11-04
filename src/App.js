import React from "react";
import GlobalStyle from "./styles/Global";
import { ThemeSwitch } from "./styles/ThemeSwitch";
import { Input, InputContainer } from "./styles/Input";
import { Flex } from "./styles/Containers";
import { Button } from "./styles/Button";
import {
  Img,
  InfoWeatherContainer,
  Temperature,
  Subtitle,
  WeatherDesc,
} from "./styles/InfoWeather";

const App = () => {
  // https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid={yourkey}
  const [theme, setTheme] = React.useState("dark");
  const [city, setCity] = React.useState("São Paulo");
  const [data, setData] = React.useState("");
  const key = "2c47a3a8e122183e0799239a6f1d8f73";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  React.useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r), console.log(data));
  }, []);

  function handleFetchData() {
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r));
    setCity("");
  }

  return (
    <>
      <GlobalStyle theme={theme} />
      <Flex>
        <ThemeSwitch theme={theme} onClick={handleTheme}>
          <span>
            dark
            <br />
            mode
          </span>
          <span>
            light
            <br />
            mode
          </span>
        </ThemeSwitch>
        <InputContainer>
          <Input
            theme={theme}
            value={city}
            type="text"
            placeholder="Type your city..."
            onChange={({ target }) => {
              setCity(target.value);
            }}
          />
        </InputContainer>
        <Button theme={theme} onClick={handleFetchData}>
          Search
        </Button>
      </Flex>
      {data.name ? (
        <InfoWeatherContainer theme={theme}>
          <WeatherDesc theme={theme}>
            <Img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            />
            <Subtitle>{data.weather[0].description} </Subtitle>
            <Temperature>{Math.round(data.main.temp - 273.15)}ºC</Temperature>
            <Subtitle>{data.name}</Subtitle>
          </WeatherDesc>
        </InfoWeatherContainer>
      ) : (
        <h2 style={{ margin: "0 auto", textAlign: "center" }}>
          Nenhuma Cidade encontrada
        </h2>
      )}
    </>
  );
};

export default App;
