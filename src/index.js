import './style.scss';
import { appendForm } from './elements';
import getWeatherData from './fetch';


appendForm();

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = form.city.value;
  const units = form.units.value || 'metric';
  getWeatherData(city, units);
});
getWeatherData('Novi Sad', 'metric');