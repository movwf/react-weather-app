import './WeeklyForecast.style.css';
import { useContext } from 'react';

import WeatherContext from '../../../contexts/WeatherContext';

function WeeklyForecast() {
  const data = useContext(WeatherContext);

  return (
    <div className="week-container">
            <ul className="week-list">
              <li className="active">{data.today.dayIcon}
                <span className="day-name">{data.weekly.weather_days[0]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[0]}°C</span>
              </li>
              <li>
                {data.weekly.weather_icon(data.weekly.weather_code[1],false)}
                <span className="day-name">{data.weekly.weather_days[1]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[1]}°C</span>
              </li>
              <li>
                {data.weekly.weather_icon(data.weekly.weather_code[2],false)}
                <span className="day-name">{data.weekly.weather_days[2]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[2]}°C</span>
              </li>
              <li>
                {data.weekly.weather_icon(data.weekly.weather_code[3],false)}
                <span className="day-name">{data.weekly.weather_days[3]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[3]}°C</span>
              </li>
              <li>
                {data.weekly.weather_icon(data.weekly.weather_code[4],false)}
                <span className="day-name">{data.weekly.weather_days[4]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[4]}°C</span>
              </li>
              <li>
                {data.weekly.weather_icon(data.weekly.weather_code[5],false)}
                <span className="day-name">{data.weekly.weather_days[5]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[5]}°C</span>
              </li>
              <li>
                {data.weekly.weather_icon(data.weekly.weather_code[6],false)}
                <span className="day-name">{data.weekly.weather_days[6]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[6]}°C</span>
              </li>  
              <li>
                {data.weekly.weather_icon(data.weekly.weather_code[7],false)}
                <span className="day-name">{data.weekly.weather_days[7]}</span>
                <span className="day-temp">{data.weekly.temp_weekly[7]}°C</span>
              </li>    
              <div className="clear"></div>
            </ul>
          </div>
  )
}

export default WeeklyForecast
