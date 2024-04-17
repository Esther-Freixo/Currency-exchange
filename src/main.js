import Swal from 'sweetalert2';
import { currCalculator, renderCurrList } from './helpers';

const searchBtn = document.querySelector('.btn-search');
const input = document.querySelector('.currency-input');
const currenciesUl = document.querySelector('.currencies-list');
const currencyTitle = document.querySelector('.currency-title');


searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://v6.exchangerate-api.com/v6/cef35234f1ea3827e094ba02/latest/${input.value}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((currList) => {
        renderCurrList(currList,
        currencyTitle,
        currenciesUl),
        currCalculator()
})
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong with the API request!',
        });
        console.error('Error during API request:', error.message);
    });


});