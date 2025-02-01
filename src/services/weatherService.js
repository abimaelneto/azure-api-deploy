import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export class WeatherService {
    constructor() {
        this.apiKey = process.env.WEATHER_API_KEY || '';
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
    }

    kelvinToCelsius(kelvin) {
        return Number((kelvin - 273.15).toFixed(2));
    }

    kelvinToFahrenheit(kelvin) {
        return Number(((kelvin - 273.15) * 9/5 + 32).toFixed(2));
    }

    getCondition(celsius) {
        if (celsius < 18) return 'cold';
        if (celsius > 25) return 'hot';
        return 'warm';
    }

    async fetchWeatherData(city) {
        try {
            const response = await axios.get(
                `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}`
            );

            const weatherData = response.data.list
                .filter((_, index) => index < 7)
                .map(day => {
                    const kelvin = day.main.temp;
                    const celsius = this.kelvinToCelsius(kelvin);
                    const fahrenheit = this.kelvinToFahrenheit(kelvin);

                    return {
                        date: new Date(day.dt * 1000).toISOString().split('T')[0],
                        kelvin: Number(kelvin.toFixed(2)),
                        celsius,
                        fahrenheit,
                        condition: this.getCondition(celsius)
                    };
                });

            return weatherData;

        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw new Error('Failed to fetch weather data');
        }
    }
}
