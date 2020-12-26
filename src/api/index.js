import axios from "axios";

const instance = axios.create({
    baseURL: "api.openweathermap.org",
});

const API_KEY = "a4b84299e11cace69a0ca0f7a3479d30"

export const weatherAPI = {
    getWeather(city) {
      return instance.get(
        `data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
    },
};