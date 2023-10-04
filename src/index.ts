import './init_apm';
import { getWeather } from './get_weather';
import { logger } from './logger';
import { startServer } from './start_server';

startServer().catch((err) => {
  logger.error('An error occured while starting server', err);
});

setInterval(getWeather, 5000);
