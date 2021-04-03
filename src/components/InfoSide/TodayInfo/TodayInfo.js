import './TodayInfo.style.css';
import { useContext } from 'react';

import WeatherContext from '../../../contexts/WeatherContext';

function TodayInfo() {
  const data = useContext(WeatherContext);

  return (
    <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation">
                <span className="title">DEW POINT</span>
                <span className="value">{data.today.precipitation} °C</span>
                <div className="clear"></div>
              </div>
              <div className="humidity">
                <span className="title">HUMIDITY</span>
                <span className="value">{data.today.humidity} %</span>
                <div className="clear"></div>
              </div>
              <div className="wind">
                <span className="title">WIND</span>
                <span className="value">{data.today.windSpeed} km/h</span>
                <div className="clear"></div>
              </div>
            </div>
       </div>
  )
}

export default TodayInfo
