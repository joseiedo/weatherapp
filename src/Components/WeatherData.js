import { Loading } from "./styles/Loading";
import { WiHumidity } from "react-icons/wi";
import { TbWind } from "react-icons/tb";

export const WeatherData = ({ data, theme, loading }) => {
  return data.name ? (
    <div theme={theme}>
      <img
        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt=""
      />
      <span>{data.weather[0].description} </span>
      <div>
        <h2>{Math.round(data.main.temp - 273.15)}ºC</h2>
        <div>
          <span>min: {Math.round(data.main.temp_min - 273.15)}ºC</span>
          <span>max: {Math.round(data.main.temp_max - 273.15)}ºC</span>
        </div>
      </div>
      <span className="city">{data.name}</span>
      <div className="iconWrapper">
        <WiHumidity />
        <span>humidity: {data.main.humidity} %</span>
      </div>
      <div className="iconWrapper">
        <TbWind />
        <span>wind speed: {data.wind.speed} m/s</span>
      </div>
    </div>
  ) : loading ? (
    <Loading theme={theme} />
  ) : (
    <h2>city not found...</h2>
  );
};
