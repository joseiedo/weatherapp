import React from "react";
import GlobalStyle from "./Components/styles/Global";
import { ThemeSwitch } from "./Components/styles/ThemeSwitch";
import { Flex } from "./Components/styles/Containers";
import { InfoWeatherContainer } from "./Components/styles/InfoWeather";
import { WeatherData } from "./Components/WeatherData";

const App = () => {
  // --------------------------------------------------------------------
  // se quiser testar, ou usa a minha ou gere a sua key no site do openweather!

  // Minha key:
  // 2c47a3a8e122183e0799239a6f1d8f73
  const key = "";

  // --------------------------------------------------------------------
  const [theme, setTheme] = React.useState("dark");
  const [city, setCity] = React.useState("");
  const [typed, setTyped] = React.useState(false);
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function handleFetchData() {
    setTyped(true);
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
        setLoading(false);
        setCity("");
      });
  }

  return (
    <>
      <GlobalStyle theme={theme} />
      <Flex theme={theme}>
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
        <input
          theme={theme}
          value={city}
          type="text"
          placeholder="Type your city..."
          onChange={({ target }) => {
            setCity(target.value);
          }}
        />
        <button className="srch" theme={theme} onClick={handleFetchData}>
          Search
        </button>
      </Flex>

      <InfoWeatherContainer theme={theme}>
        {typed ? (
          <WeatherData data={data} theme={theme} loading={loading} />
        ) : (
          <h2>type a city...</h2>
        )}
      </InfoWeatherContainer>
    </>
  );
};

export default App;
