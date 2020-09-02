import { weatherEl, app } from './elements';

const imageURLs = [
  'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

const setImage = ([obj]) => {
  const { main } = obj;
  switch (main) {
    default:
      document.body.style.backgroundImage = `url(${imageURLs[1]})`;
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage = `url(${imageURLs[0]})`;
      break;
    case 'Drizzle':
      document.body.style.backgroundImage = `url(${imageURLs[5]})`;
      break;
    case 'Rain':
      document.body.style.backgroundImage = `url(${imageURLs[4]})`;
      break;
    case 'Snow':
      document.body.style.backgroundImage = `url(${imageURLs[6]})`;
      break;
    case 'Clear':
      document.body.style.backgroundImage = `url(${imageURLs[2]})`;
      break;
    case 'Clouds':
      document.body.style.backgroundImage = `url(${imageURLs[3]})`;
  }
};

const renderReport = ({
  name, main, weather, wind,
}, units) => {
  const unitDisplay = units === 'metric' ? 'C' : 'F';
  const weatherReport = `
    <div class="report">
      <h2 class="city">${name}</h2>
      <h3 class="weather-state">${weather[0].description} <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt=""/></h3>
      <ul class="stats">
        <li>Temp: ${Math.floor(main.temp)} ${unitDisplay}</li>
        <li>Feels like: ${Math.floor(main.feels_like)} ${unitDisplay}</li>
        <li>Humidity: ${main.humidity}% RH</li>
        <li>Pressure: ${main.pressure} mbar</li>
        <li>Wind: ${wind.speed} m/s</li>
      </ul>
    </div>
  `;
  weatherEl.innerHTML = weatherReport;

  app.appendChild(weatherEl);
};

const processData = (data, units) => {
  const {
    name, main, wind, weather,
  } = data;
  renderReport({
    name, main, weather, wind,
  }, units);
  setImage(weather);
};

export { processData, setImage, renderReport };