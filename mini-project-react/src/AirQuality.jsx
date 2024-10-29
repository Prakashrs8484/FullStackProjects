import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [err,setError]=useState(false);

    const API_URL="http://api.openweathermap.org/data/2.5/air_pollution"
    const API_KEY="7241d7ea06b7b4aa3ac2d86e95f8b652"

    let getWeatherInfo = async()=>{

     
            let response=await fetch(`${API_URL}?lat=${51.5156177}&lon${-0.0919983}&appid=${API_KEY}`)
            let jsonresponse=await response.json();
            console.log(jsonresponse)
        
    }

    let handlChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let info=await getWeatherInfo();
            updateInfo(info)
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