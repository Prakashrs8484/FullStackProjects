import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [err,setError]=useState(false);

    const API_URL="http://api.openweathermap.org/geo/1.0/direct"
    const API_KEY="7241d7ea06b7b4aa3ac2d86e95f8b652"
    const QUALITY_URL="http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}"
    let getWeatherInfo = async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonresponse=await response.json();
            let lattitude=jsonresponse[0].lat;
            let longitude=jsonresponse[0].lon;
            // let quality= await fetch(`${QUALITY_URL}?lat=${lattitude}&lon${longitude}&appid=${API_KEY}`)
           
        console.log(quality.json())
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description,
        };
        console.log(result)
        return result;
        }catch(err){
            throw(err)
        }
    }

    let handlChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            // let info=await getWeatherInfo();
            // updateInfo(info)
            getWeatherInfo();
        }catch(err){
           setError(err);
        }
    }
    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlChange}/>
            <br /><br />
            <Button variant="contained" type="submit" >Search</Button>
            {err  && <p>No such place exist</p>}
            </form>
        </div>
    )
}