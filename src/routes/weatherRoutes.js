import { Router } from 'express';
import { WeatherController } from '../controllers/weatherController.js';

const router = Router();
const weatherController = new WeatherController();

export const setWeatherRoutes = () => {
    router.get('/weather', weatherController.getWeather.bind(weatherController));
    return router;
};
