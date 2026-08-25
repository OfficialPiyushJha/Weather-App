# Weather App - Frontend Upgrade

This package contains the redesigned frontend files for the Weather App.

## Included files

- `src/App.css`
- `src/Search.css`
- `src/WeatherApp.jsx`
- `src/WeatherInfo.jsx`
- `src/SearchBox.jsx`

## Installation

Replace the matching files in your existing React project.

Then run:

```bash
npm install
npm run dev
```

The design uses Material UI components already present in the project and adds a modern dark glassmorphism dashboard.

## Note

The current SearchBox still contains the existing OpenWeather API key so the project works immediately. For a public deployment, move the key into an environment variable and rotate the exposed key if it has been published publicly.
