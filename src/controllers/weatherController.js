import { WeatherService } from '../services/weatherService.js';

export class WeatherController {
    constructor() {
        this.weatherService = new WeatherService();
    }

    async getWeather(req, res) {
        try {
            const weatherData = await this.weatherService.fetchWeatherData('Curitiba');
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    }
}
