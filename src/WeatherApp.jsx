import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
export default function WeatherApp()
{
    let [weatherInfo,setweatherInfo]=useState({
        city:"delhi",
        temp:25.05,
        humidity:47,
        min_temp:25.05,
        max_temp:25.05,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div>
            <h1 style={{textAlign:"center",color:"green", textShadow:"0px 0px 6px gray"}}>Weather App by Hanif</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}