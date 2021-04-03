import { createContext, useState, useEffect } from "react";
import axios from 'axios';

import WeatherResponse from "../mock/location.json";

import {WeatherIcon} from "./constants/WeatherIcons";
import {WeekDaysLong} from "./constants/WeekDays";

const WeatherContext = createContext(null);

// Default city will had from either geoLocation Api or Default
// Localstorage for save Api calls.
const defaultCity = {
	"name":"Istanbul",
	"country_code":"TR",
	"lat":41.0351,
	"lon":28.9833
};

export const WeatherDataProvider = ({ children }) => {
	const [city, setCity] = useState(defaultCity);
	const [geoLocation,setGeoLocation] = useState(defaultCity);
	const [weatherData,setWeatherData] = useState(WeatherResponse);

	const weatherDays = weatherData.daily
											.map(items=>new Date(items.dt*1000).toUTCString().toString().slice(5,16));
	const shortWeatherDays = weatherData.daily
											.map(items=>new Date(items.dt*1000).toUTCString().toString().slice(0,3));							
	const dayWeatherStatus = weatherData.daily
											.map(items=>items.weather[0].id);
	const precipitationWeekly = weatherData.daily
											.map(items=>items.dew_point);
	const humidityWeekly = weatherData.daily
											.map(items=>items.humidity);
	const windSpeedWeekly = weatherData.daily
											.map(items=>items.wind_speed);
	const tempWeekly = weatherData.daily
											.map(items=>items.temp.day);
	const tempStatesWeekly = weatherData.daily
											.map(items=>items.weather[0].description);
									
	

	const today = {
		"fullDayName" : WeekDaysLong(shortWeatherDays[0])[0],
		"fullDate":weatherDays[0],
		"cityName":city.name,
		"countryName":city.country_code,
		"temp":tempWeekly[0],
		"tempState":tempStatesWeekly[0].toLocaleUpperCase(),
		"weatherType":WeatherIcon(dayWeatherStatus[0],true),
		"dayIcon" : WeatherIcon(dayWeatherStatus[0],false),
		"precipitation":precipitationWeekly[0],
		"humidity":humidityWeekly[0],
		"windSpeed":windSpeedWeekly[0],
		"setGeoLocation":setGeoLocation
	};
	
	const weekly = {
		"weather_icon":WeatherIcon,
		"weather_code":dayWeatherStatus,
		"temp_weekly":tempWeekly,
		"weather_days":shortWeatherDays,
		"dew_point":precipitationWeekly,
		"humidity":humidityWeekly,
		"wind_speed":windSpeedWeekly
	};
	

	useEffect(()=>{
		 console.log("City is changed");
		 console.log("New City : "+city.name);
		 const url = process.env.REACT_APP_WEATHER_DATA_URL 
									 + "&lat=" + city.lat 
									 + "&lon=" + city.lon;
		 axios.get(url)
					 .then((res)=>console.log(res))
					 .catch((error)=>console.log(error));
	 },[city]);

	useEffect(()=>{
		if(geoLocation!==null){
		 const url =  process.env.REACT_APP_WEATHER_DATA_URL 
									 + "&lat=" + geoLocation.lat 
									 + "&lon=" + geoLocation.lon;
		 axios.get(url)
					 .then((res)=>setWeatherData(res.data))
					 .catch((error)=>console.log(error))
					 .then(setCity(geoLocation));
		}else{
			console.log("Empty change.");
		}
	},[geoLocation]);
	
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
			const url =  process.env.REACT_APP_WEATHER_DATA_URL 
										+ "&lat=" + position.coords.latitude
										+ "&lon=" + position.coords.longitude;
		 	axios.get(url)
					 .then((res)=>setWeatherData(res.data))
					 .catch((error)=>console.log(error));
    });
	}, []);
	



	return (
		<WeatherContext.Provider value={{today,weekly}}>
      {children}
    </WeatherContext.Provider>
	);
};

export default WeatherContext;