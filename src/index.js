import './style.scss';
import getWeatherData from './fetch';
import fetchForm from './fetch-form';

const formNode = document.createElement('div');
formNode.innerHTML = fetchForm();
const container = document.querySelector('.app');
container.appendChild(formNode);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = form.city.value;
  const units = form.units.value;
  getWeatherData(city, units);
});