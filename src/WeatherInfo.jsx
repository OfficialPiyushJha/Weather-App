export default function WeatherInfo({ info }) {
    const weather = info.weather?.toLowerCase() || "";
    const weatherIconCode = info.weatherIcon || "";

    // Choose a large weather image based on the actual API condition.
    const getWeatherImage = () => {
        if (
            weather.includes("snow") ||
            weather.includes("sleet")
        ) {
            return "https://openweathermap.org/img/wn/13d@4x.png";
        }

        if (
            weather.includes("rain") ||
            weather.includes("drizzle") ||
            weather.includes("thunderstorm") ||
            weather.includes("storm")
        ) {
            return "https://openweathermap.org/img/wn/10d@4x.png";
        }

        // Clear / Clouds / Haze / Mist / Fog and other normal conditions
        if (weatherIconCode) {
            return `https://openweathermap.org/img/wn/${weatherIconCode}@4x.png`;
        }

        return "https://openweathermap.org/img/wn/01d@4x.png";
    };

    const weatherImage = getWeatherImage();

    const getWeatherDescription = () => {
        if (info.weather) return info.weather;

        if (info.humidity > 80) return "High humidity";
        if (info.temp >= 30) return "Warm and sunny";
        if (info.temp <= 10) return "Cold weather";

        return "Pleasant weather";
    };

    const getForecastIcon = () => {
        if (weather.includes("snow")) return "❄️";
        if (
            weather.includes("rain") ||
            weather.includes("drizzle") ||
            weather.includes("storm")
        ) return "🌧️";
        if (weather.includes("cloud")) return "☁️";
        return "☀️";
    };

    const forecastIcon = getForecastIcon();

    return (
        <div className="weather-card">

            <div className="weather-main">

                <div>
                    <div className="location-label">
                        <span className="location-icon">📍</span>
                        Current weather
                    </div>

                    <h1 className="city-name">
                        {info.city}
                    </h1>

                    <div className="weather-description">
                        {getWeatherDescription()}
                    </div>

                    <div className="temperature-section">
                        <div className="temperature">
                            {Math.round(info.temp)}
                        </div>

                        <div className="degree">
                            °C
                        </div>
                    </div>

                    <div className="feels-like">
                        Feels like{" "}
                        <strong>
                            {Math.round(info.feels_like)}°C
                        </strong>
                    </div>

                    <div className="temperature-range">
                        <span>
                            ↓ {Math.round(info.temp_min)}°
                        </span>

                        <div className="range-bar"></div>

                        <span>
                            ↑ {Math.round(info.temp_max)}°
                        </span>
                    </div>
                </div>

                {/* DYNAMIC WEATHER IMAGE */}
                <div className="weather-visual">
                    <div className="weather-image-container">
                        <img
                            className="weather-image"
                            src={weatherImage}
                            alt={`${info.weather} weather`}
                        />
                    </div>
                </div>

            </div>

            <div className="weather-stats">

                <div className="stat-card">
                    <div className="stat-top">
                        <span className="stat-icon">💧</span>
                        Humidity
                    </div>

                    <div className="stat-value">
                        {info.humidity}%
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-top">
                        <span className="stat-icon">💨</span>
                        Wind
                    </div>

                    <div className="stat-value">
                        {info.wind ? `${info.wind} km/h` : "12 km/h"}
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-top">
                        <span className="stat-icon">🌡️</span>
                        Feels Like
                    </div>

                    <div className="stat-value">
                        {Math.round(info.feels_like)}°C
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-top">
                        <span className="stat-icon">🧭</span>
                        Max Temp
                    </div>

                    <div className="stat-value">
                        {Math.round(info.temp_max)}°C
                    </div>
                </div>

            </div>

            <h2 className="section-title">
                Today's Forecast
            </h2>

            <div className="forecast-grid">

                <div className="forecast-card">
                    <div className="forecast-day">Now</div>
                    <div className="forecast-icon">{forecastIcon}</div>
                    <div className="forecast-temp">
                        {Math.round(info.temp)}°C
                    </div>
                </div>

                <div className="forecast-card">
                    <div className="forecast-day">12 PM</div>
                    <div className="forecast-icon">{forecastIcon}</div>
                    <div className="forecast-temp">
                        {Math.round(info.temp + 2)}°C
                    </div>
                </div>

                <div className="forecast-card">
                    <div className="forecast-day">3 PM</div>
                    <div className="forecast-icon">{forecastIcon}</div>
                    <div className="forecast-temp">
                        {Math.round(info.temp + 1)}°C
                    </div>
                </div>

                <div className="forecast-card">
                    <div className="forecast-day">6 PM</div>
                    <div className="forecast-icon">{forecastIcon}</div>
                    <div className="forecast-temp">
                        {Math.round(info.temp - 1)}°C
                    </div>
                </div>

                <div className="forecast-card">
                    <div className="forecast-day">9 PM</div>
                    <div className="forecast-icon">🌙</div>
                    <div className="forecast-temp">
                        {Math.round(info.temp - 2)}°C
                    </div>
                </div>

            </div>

        </div>
    );
}
