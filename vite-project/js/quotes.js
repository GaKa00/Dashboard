const dailyQuoteUrl = 'https://zenquotes.io/api/today';

import axios from "axios";

export async function getQuote(url) {
  try {
    const response = await axios.get(url);
    
    console.log(response.data);  
  } catch (error) {
    console.error('Error fetching quote:', error.message);
  }
}


getQuote(dailyQuoteUrl);
  

 export function showQuote(response) {
    const newCard = document.createElement('div')
      const quote = document.createElement('p');
      const author = document.createElement('p');

      
  newCard.classList.add('dashCard')

 const thirdDashboardBox = document.querySelector('.dashboardContainer .dashboardBox:nth-child(3)')
    
 if (thirdDashboardBox) {
quote.textContent = response.data.q;
        author.textContent = response.data.a;

        thirdDashboardBox.append(newCard)
        newCard.append(quote);
        newCard.append(author);

 }
   
        

      };

      

// showQuote();
      


