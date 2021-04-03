import './Search.style.css';
import Response from './response.json';
import axios from 'axios';

import { useState } from "react";

import ResultHeader from './ResultHeader/ResultHeader';
import ResultItem from "./ResultItem/ResultItem";



function Search(data) {
  const [searchVal,setSearchVal] = useState("");

  const [list,setList] = useState(Response.results);



  const handleSearch = (e) => {
    //e.preventDefault();
    if(e.key==="Enter"){
      //console.log(Response.results[0].components.town);
      //console.log(list);
      //console.log(e.target.value);
      const url = process.env.REACT_APP_LOCATION_DATA_URL + e.target.value;

      axios.get(url)
      .then((res)=>{
        //console.log(res.data.results);
        console.log(res.data.results);
        setList(res.data.results);
      })
      .catch((error)=>{
        console.error(error);
      });
      //console.log("Response : "+ LocationData(e.target.value).data.results);
    }else if(e.key==="Escape"){
      data.data(false)
    }
  };

  return (
    <div id={"myOverlay"} className="overlay">
      <div className="closeDiv">
      <span 
        className="closebtn" 
        onClick={()=>{data.data(false)}} 
        title={"Close"}>
          x
      </span>
      </div>
      <div className="search-container">
        <div className="search-and-results">
          <div className="overlay-content">
                <input 
                  id="1"
                  className="searchBox" 
                  type="text" 
                  placeholder={"Search.."} 
                  name="search"
                  onKeyDown={(e)=>handleSearch(e)}
                  onChange={(e)=>{setSearchVal(e.target.value)}}
                ></input>
            </div>
            <ResultHeader />
            <ul>
                {list
                  .filter((item,key)=>(key===0?item:item.components.state!==list[key-1].components.state))
                  .map((item,key)=>(
                  <ResultItem 
                  key={key}
                  trigger={data.data}
                  searchValue={searchVal}
                  long={item.geometry.lng}
                  lat={item.geometry.lat}
                  data={item}
                  />
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
};

export default Search;
