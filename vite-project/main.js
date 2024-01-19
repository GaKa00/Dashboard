import{ displayTimeDate } from './js/script.js';
displayTimeDate();
import { setBackground } from './js/script.js';
 setBackground()

import { addNewLink } from './js/weatherAndLinks.js';

import {changeLink } from './js/weatherAndLinks.js';

import {deleteLink  } from './js/weatherAndLinks.js';

import { loadLinks } from './js/weatherAndLinks.js';
loadLinks()

import { getWeatherForecast } from './js/weatherAndLinks.js';
getWeatherForecast()

import { getQuote } from './js/quotes.js';
getQuote();

import { saveNotes } from "./js/script.js";
saveNotes();





//Button functions

const linkButton = document.querySelector('.newLink');
const changeButton = document.querySelector('.changeLink');
const deleteButton = document.querySelector('.delete');

changeButton.addEventListener('click', () => {
  changeLink();  
});

linkButton.addEventListener('click', () => {
    addNewLink();
});


deleteButton.addEventListener('click', () => {
    deleteLink();

});

