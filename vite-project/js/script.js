
// Unsplash API
const uKey = 'WQ8bliAn-Ur0f4Z-_H6z3-CWL1gKq-4fFGCH6iZPDYE'
const randomImage = `https://api.unsplash.com/photos/random?client_id=${uKey}` ;


//queries
const changeImage = document.querySelector('.changeBackground')


//Functions

//Sets time and date at the top of dashboard
export function displayTimeDate(){
    let timeDate= new Date();
    let hour = timeDate.getHours()
    let min  =timeDate.getMinutes()
    let year = timeDate.getFullYear()

    

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;


    let date = timeDate.getDate()
    let month = timeDate.toLocaleString('en-US', { month: 'long' });
    
    document.getElementById('clock').innerHTML = hour + ":"+ min  
    document.getElementById('date').innerHTML = month + " "+date +"th" +  " " + year;
    
}


//Sets a random background Image

import axios from 'axios';

 export async function setBackground() {
    try {
        const response = await axios.get(randomImage);
        const imageUrl = response.data.urls.regular;
        console.log(response.data)

        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundAttachment = 'fixed';

        console.log(response.data);
    } catch (error) {
        console.error('Image could not be loaded:', error.message);
    }
}



// window.addEventListener('DOMContentLoaded', () => {
//     // setBackground();
//     displayTimeDate();
//     setInterval(displayTimeDate,1000);
// });




//button function

changeImage.addEventListener('click', ()=> {
    location.reload();
});