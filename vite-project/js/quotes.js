const dailyQuoteUrl = 'https://zenquotes.io/api/today';

import axios from "axios";


//Fetches daily quote from zenquotes api
export async function getQuote(url) {
  try {
    const response = await axios.get(url);
    showQuote(response);
  } catch (error) {
    console.error('Error fetching quote:', error.message);
  }
}


getQuote(dailyQuoteUrl);
  
//creates paragraph elements in third dashboardbox, and appends them to the dashboardbox
//the text content of the paragraph is the quote and the author of the quote, fetched from the zenquotes api.
 export function showQuote(response) {
    const newCard = document.createElement('div')
      const quote = document.createElement('p');
      const author = document.createElement('p');

      
  newCard.classList.add('dashCard')

 const thirdDashboardBox = document.querySelector('.dashboardContainer .dashboardBox:nth-child(3)')
    
 if (thirdDashboardBox) {
        quote.textContent = response.data[0].q;
        author.textContent = response.data[0].a;

        thirdDashboardBox.append(newCard)
        newCard.append(quote);
        newCard.append(author);

 }
  
      };

      


      


