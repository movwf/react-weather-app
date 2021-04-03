import { 
  Sun,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Wind 
} from 'react-feather';

export const WeatherIcon = (weatherCode,isWeatherSide) => {
  if (weatherCode > 199 && weatherCode < 233) {
    return <CloudLightning className={isWeatherSide?"weather-icon":"day-icon"} />;
  } else if (weatherCode > 299 && weatherCode < 322) {
    return <CloudDrizzle className={isWeatherSide?"weather-icon":"day-icon"} />;
  } else if (weatherCode > 499 && weatherCode < 532) {
    return <CloudRain className={isWeatherSide?"weather-icon":"day-icon"} />;
  } else if (weatherCode > 599 && weatherCode < 623) {
    return <CloudSnow className={isWeatherSide?"weather-icon":"day-icon"} />;
  } else if (weatherCode > 700 && weatherCode < 782) {
    return <Wind className={isWeatherSide?"weather-icon":"day-icon"}  />;
  } else if (weatherCode === 800) {
    return <Sun className={isWeatherSide?"weather-icon":"day-icon"}  />;
  } else if (weatherCode > 800 && weatherCode < 805) {
    return <Cloud className={isWeatherSide?"weather-icon":"day-icon"}  />;
  }
};