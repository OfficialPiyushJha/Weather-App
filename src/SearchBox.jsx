import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Search.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "95c44e170e853fd720db0c6cc1978280";

    const getWeatherInfo = async () => {
        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const jsonResponse = await response.json();

        return {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            feels_like: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            weather: jsonResponse.weather?.[0]?.main || "Clear",

            // OpenWeather icon code is useful for day/night and cloud variations.
            weatherIcon: jsonResponse.weather?.[0]?.icon || "01d",

            // Convert m/s to km/h.
            wind: jsonResponse.wind?.speed
                ? Math.round(jsonResponse.wind.speed * 3.6)
                : 0,
        };
    };

    const handleChange = (event) => {
        setCity(event.target.value);

        if (error) {
            setError(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!city.trim()) return;

        try {
            const newInfo = await getWeatherInfo();

            updateInfo(newInfo);

            setError(false);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="search-wrapper">

            <div className="search-title">
                Search for a city
            </div>

            <form
                className="search-form"
                onSubmit={handleSubmit}
            >

                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    placeholder="Enter city name..."
                />

                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>

            </form>

            {error && (
                <p className="search-error">
                    ⚠️ No such place exists. Try another city.
                </p>
            )}

        </div>
    );
}
