// TODO
import Fetch from './fetch-wrapper.js';

const baseURL = 'https://v6.exchangerate-api.com/v6/d8982227266da5952b7c10b7';
const API = new Fetch(baseURL);

const base = document.querySelector('#base-currency');
const target = document.querySelector('#target-currency');
const result = document.querySelector('#conversion-result');

const getConvertionRate = () => {
   API.get(`/latest/${base.value}`)
      .then(data => {
         if (data.result !== 'success') {
            throw new Error('error');
         }
         console.log(data)
         result.textContent = data.conversion_rates[target.value];
      })
      .catch(err => console.error(err));
};

base.addEventListener('change', () => {
   getConvertionRate();
});
target.addEventListener('change', () => {
   getConvertionRate();
});
