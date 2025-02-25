
import express from 'express';
import { setWeatherRoutes } from './routes/weatherRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', setWeatherRoutes());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//comentários