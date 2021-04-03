import './WeatherSide.style.css';
import { MapPin } from 'react-feather';
import { useContext } from 'react';

import WeatherContext from '../../contexts/WeatherContext';


function WeatherSide() {
  const data = useContext(WeatherContext);

  return (
    <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{data.today.fullDayName}</h2>
              <span className="date-day">{data.today.fullDate}</span>
              <MapPin className="location-icon" />
              <span className="location">{data.today.cityName}, {data.today.countryName}</span>
          </div>
          <div className="weather-container">{data.today.weatherType}
            <h1 className="weather-temp">{data.today.temp}°C</h1>
            <h3 className="weather-desc">{data.today.tempState}</h3>
          </div>
      </div>
  )
}

export default WeatherSide;
