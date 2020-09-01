
const getWeatherData = async (city, units) => {
  const key = '969c4ecd761e8903fe359368bcee2c3b';
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`);
  const data = await res.json();
  console.log(data);
};

export default getWeatherData;