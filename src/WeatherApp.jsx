import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"
import {useState} from "react"


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "delhi",
        feels_like : 24.48,
        temp : 24,
        temp_min: 20,
        temp_max: 26,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
 
    return(
        <div>
            
            <SearchBox updateInfo = {updateInfo}/>
            <WeatherInfo info={weatherInfo}/>
        </div>
    )
}