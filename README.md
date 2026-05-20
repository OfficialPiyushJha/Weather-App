# 🌦️ Weather App

A modern and responsive Weather Application built using **React.js**, **Vite**, and **Material UI**. This application allows users to search for any city and view real-time weather information such as temperature, humidity, minimum temperature, maximum temperature, and feels-like temperature using the OpenWeatherMap API.

---

## 🚀 Live Features

* 🔍 Search weather by city name
* 🌡️ Displays current temperature
* 🤗 Shows feels-like temperature
* 💧 Humidity information
* 📉 Minimum temperature
* 📈 Maximum temperature
* 🖼️ Dynamic weather images based on temperature and humidity
* ⚡ Fast and responsive UI using Vite + React
* 🎨 Beautiful Material UI components
* ❌ Error handling for invalid city names

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **Vite**
* **Material UI (MUI)**
* **CSS**

### API

* **OpenWeatherMap API**

---

## 📂 Project Structure

```bash
Weather/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── WeatherInfo.jsx
│   ├── Search.css
│   ├── App.css
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 📸 Application Preview

### Search Weather

* Enter any city name
* Click on the **Search** button
* Weather details will appear instantly

### Dynamic Weather Cards

The application changes weather images dynamically:

| Condition      | Image              |
| -------------- | ------------------ |
| Rainy Weather  | Rain Image         |
| Cold Weather   | Snow Image         |
| Normal Weather | Sunny/Cloudy Image |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### 2️⃣ Navigate to Project Directory

```bash
cd weather-app
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Development Server

```bash
npm run dev
```

### 5️⃣ Open in Browser

```bash
http://localhost:5173
```

---

## 🔑 API Configuration

This project uses the OpenWeatherMap API.

### Get Your API Key

1. Visit the OpenWeatherMap website
2. Create a free account
3. Generate an API key

Website:

```text
https://openweathermap.org/api
```

### Replace API Key

Inside `SearchBox.jsx`:

```javascript
const API_KEY = "YOUR_API_KEY";
```

---

## 🧠 How the Project Works

### 1. User Inputs City Name

The city name is stored using React `useState()`.

### 2. API Request Sent

A fetch request is sent to OpenWeatherMap API.

```javascript
let response = await fetch(
`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
);
```

### 3. Weather Data Received

The application extracts:

* Temperature
* Feels-like temperature
* Humidity
* Minimum temperature
* Maximum temperature

### 4. Data Displayed in Weather Card

Material UI Cards are used for displaying weather information.

---

## 📦 Main Components

### 🔹 WeatherApp.jsx

Acts as the parent component and manages weather state.

### 🔹 SearchBox.jsx

Handles:

* User input
* API calls
* Error handling

### 🔹 WeatherInfo.jsx

Displays weather details using Material UI cards.

---

## 🎨 UI Components Used

Material UI Components:

* `Card`
* `CardMedia`
* `CardContent`
* `Typography`
* `Button`
* `TextField`

---

## 📱 Responsive Design

The application is responsive and works well on:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

---

## ❌ Error Handling

If the user enters an invalid city name:

```text
NO Such Place Exist !
```

is displayed on the screen.

---

## 📜 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

## 🔮 Future Improvements

Possible future enhancements:

* 🌍 Detect current location weather
* 📅 7-day weather forecast
* 🌙 Dark mode support
* 📊 Weather charts and graphs
* 🌡️ Weather condition icons
* 🗺️ Map integration
* 🔔 Weather alerts and notifications
* ⏰ Hourly weather updates

---

## 🧪 Sample Output

```text
City: Delhi
Temperature: 24°C
Feels Like: 24.48°C
Humidity: 47%
Min Temp: 20°C
Max Temp: 26°C
```

---

## 👨‍💻 Author

Developed by **Piyush Jha**

---

## ⭐ Support

If you liked this project:

* Give it a ⭐ on GitHub
* Fork the repository
* Contribute to the project

---

## 📄 License

This project is open-source and available under the MIT License.
