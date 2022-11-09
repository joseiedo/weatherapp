import { Loading } from "./styles/Loading";

export const WeatherData = ({ data, theme, loading }) => {
  return data.name ? (
    <div theme={theme}>
      <img
        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt=""
      />
      <span>{data.weather[0].description} </span>
      <h2>{Math.round(data.main.temp - 273.15)}ºC</h2>
      <span>{data.name}</span>
    </div>
  ) : loading ? (
    <Loading theme={theme} />
  ) : (
    <h2>city not found...</h2>
  );
};
