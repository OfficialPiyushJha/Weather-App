import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./Search.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let[error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "ac662bee9a02df75bc1b0d85df396302";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                feels_like: jsonResponse.main.feels_like,
                humidity : jsonResponse.main.humidity,
                temp_max : jsonResponse.main.temp_max,
                temp_min : jsonResponse.main.temp_min,
            }
            return result;
        }catch(err) {
            throw err;
        }

    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await  getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }

    return(
        <div>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <Button variant="contained" type="submit">Search</Button>
                
                {error && <p style={{color: "red"}}>NO Such Place Exist !</p>}
            </form>

        </div>
    )
}