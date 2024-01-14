import{ displayTimeDate } from './js/script.js';
displayTimeDate();
import { setBackground } from './js/script.js';
setBackground()

import { addNewLink } from './js/weatherAndLinks.js';


import { getQuote } from './js/quotes.js';
getQuote();


import { showQuote } from './js/quotes.js';






























const linkButton = document.querySelector('.newLink');

linkButton.addEventListener('click', () => {
    addNewLink();
   
});

