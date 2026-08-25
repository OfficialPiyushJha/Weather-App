import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 24.48,
        temp: 24,
        temp_min: 20,
        temp_max: 26,
        humidity: 47,
        weather: "Clear",
        weatherIcon: "01d",
        wind: 12,
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <main className="weather-app">
            <div className="weather-container">
                <header className="weather-header">
                    <div className="brand">
                        <div className="brand-icon">☁️</div>
                        <div className="brand-name">
                            Weather<span>ly</span>
                        </div>
                    </div>
                </header>

                <SearchBox updateInfo={updateInfo} />

                <section className="weather-content">
                    <WeatherInfo info={weatherInfo} />
                </section>

                <footer className="weather-footer">
                    Powered by OpenWeather • Weatherly
                </footer>
            </div>
        </main>
    );
}
