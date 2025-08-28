import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';

export default function({updateInfo}){
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_key="833ac30f62f612e981cfbb4f289977ff";

    let getWeather=async ()=>{
      try{
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
      let jsonResponse=await response.json();
      // console.log(jsonResponse);
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        feels_like:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }
    catch(err)
    {
      throw err;
    }
    }

    let updateCity=(event)=>{
        setcity(event.target.value);
    };
    
    let submitHandle= async (event)=>{
      try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newInfo=await getWeather();
        updateInfo(newInfo);
      }
      catch(err)
      {
        seterror(true);
      }
    };
  return(
  <div className="search_box">
    {/* <h3>Search for the Weather!</h3> */}
    <form onSubmit={submitHandle}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={updateCity}  required />
        <br></br>
        <br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
        Send
      </Button>
      {error && <p style={{color:"red"}}>No such Place Exists!</p>}
    </form>
  </div>
  );
}
