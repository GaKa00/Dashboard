const dailyQuote = 'https://zenquotes.io/api/today'

import axios from "axios";


   export async function getQuote(dailyQuote) {
  try {
    const response = await axios.get(dailyQuote);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching quotes:', error.message);
  }
}

getQuote(dailyQuote); 