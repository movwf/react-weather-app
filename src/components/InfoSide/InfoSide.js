import './InfoSide.style.css';

import TodayInfo from './TodayInfo/TodayInfo'
import LocationButton from "./LocationButton/LocationButton";
import WeeklyForecast from './WeeklyForecast/WeeklyForecast'

function InfoSide() {
  

  return (
    <div className="info-side">
      <TodayInfo />
      <WeeklyForecast />
      <LocationButton />
    </div>
  )
}

export default InfoSide
