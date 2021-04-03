import './LocationButton.style.css';

import {memo,useState} from 'react';
import { MapPin } from 'react-feather';

import Search from "../../Search/Search";


function LocationButton() {
  const [toggleBox,setToggleBox] = useState(false);

  return (
    <div className="location-container">
            <button 
              className="location-button"
              onClick={()=>{setToggleBox(true)}}
            >
              <MapPin className="feather"/>
              <span>Change location</span>
            </button>
            {toggleBox&&
            <Search 
              data={setToggleBox}
            />}
    </div>
  )
}

export default memo(LocationButton);
