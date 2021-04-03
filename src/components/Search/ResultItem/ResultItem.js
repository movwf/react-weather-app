import './ResultItem.style.css';
import {useContext} from 'react'

import WeatherContext from "../../../contexts/WeatherContext";

function ResultItem({long,lat,trigger,data}) {
  const formatted = data.formatted;

  const geoData = useContext(WeatherContext);

  const handleCitySelect = () => {
    const newCoordinates = {
      'name':data.components.state,
      'country_code':data.components.country_code.toUpperCase(),
      'lat':lat,
      "lon":long
    }
    console.log(newCoordinates);
    geoData.today.setGeoLocation(newCoordinates);
    // Closes overlay
    trigger(false);
  };

  return (
    <li
    className="list-item"
    onClick={()=>{handleCitySelect()}}
    >
      {formatted}
    </li>
  )
}

export default ResultItem;
