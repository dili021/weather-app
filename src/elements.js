import createForm from './form';

const app = document.querySelector('.app');
const weatherEl = document.createElement('div');
weatherEl.className = 'report-wrap';
app.appendChild(weatherEl);

const appendForm = () => {
  const title = document.querySelector('.title');
  title.insertAdjacentHTML('afterend', createForm());
};


export { appendForm, weatherEl, app };
