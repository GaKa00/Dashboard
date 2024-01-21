
import axios from 'axios';
//forms a prompt, asking for a website name. ie. google.
//prompt answer is then pushed into empty array, which is then used t make a card, linking to the webpage.


let favoriteLinks 
export function addNewLink() {
    const favorite = prompt('Enter Link Name, I.e "Google", "Facebook" etc.');
    
        favoriteLinks.push({
        href: `https://www.${favorite}.com`,
        textContent: favorite
    });
    // favoriteLinks.push(favorite);
       createDashcard(favorite);
       saveLinks();
      
       
  
};
//function creates an empty div with dashcard class (see css file)
// then appends a link to the div, appenind it to the dashboardbox
function createDashcard(link) {
  const newCard = document.createElement('div')
  newCard.classList.add('dashCard')

if (favoriteLinks.length > 7) {
  alert('Max number of links reached, one link must be deleted to add another.');
  return;
}
else {
  const  favlink = document.createElement('a');
        favlink.href = link.href;
        // `https://www.${link}.com`;
        favlink.textContent =  link.textContent;
        // `${link}`;
        
        newCard.append(favlink);
        dashBox1.append(newCard);
         saveLinks();
       
         
}

 
}



const dashBox1 = document.querySelector('.dashboardBox')
const button = document.querySelector('.newLink');



//add a button that deletes the attached link from the dashboardbox

export function changeLink() {
   alert("Select the faulty link that you wish to change by clicking on it's card")
     let changeLock = true;
   dashBox1.addEventListener('click', () => {
    const selectedLink = event.target;
    if (selectedLink.classList.contains('dashCard') && changeLock) {
            change(selectedLink);
            changeLock= false
            
        }

   })
 }

 function change(oldLink) {
   const updatedLink = prompt('Paste the correct link')
   const updatedName = prompt('Enter the new name of your shortcut i.e "My Google Drive", "Specific Folder"')
   const linkElement = oldLink.querySelector('a');
    if (linkElement) {
        linkElement.href = `${updatedLink}`;
        linkElement.textContent = updatedName;
       
    }
  
 saveLinks();
  }
 


 //add a button that deletes the attached link from the dashboardbox
 export function deleteLink() {
  alert("Select the link that you wish to delete by clicking on it's card")
  let deleteLock = true
  dashBox1.addEventListener('click', () => {
    const selectedCard = event.target;

    if (selectedCard.classList.contains('dashCard') && deleteLock) {

      const linkIndex = Array.from(dashBox1.children).indexOf(selectedCard);
        favoriteLinks.splice(linkIndex, 1);
         
            selectedCard.parentNode.removeChild(selectedCard);
            console.log(favoriteLinks);
           saveLinks();
            deleteLock = false;

           
        }
          else{
            return;

   }

           }
   )
  
 }





 //Saves link by local storage
 
  function saveLinks(){
   localStorage.setItem("LinkData", JSON.stringify(favoriteLinks) );}
   
   function storeLinks() {
  const storedLinks = localStorage.getItem('LinkData');
  return JSON.parse(storedLinks) || [];
}

function initializeDashboard() {
  favoriteLinks = storeLinks();

  console.log(favoriteLinks);
  favoriteLinks.forEach(link => {
    createDashcard(link); 
  });
}

 export function loadLinks() { 
  document.addEventListener('DOMContentLoaded', initializeDashboard);

}
    

 

//
 // Weather API
//





const APIkey = "7232d8219f4634164c47de963a16e583"
const locationName = document.querySelector('.locationName');



 export async function getWeatherForecast() {
    try {
        
        const position = await getCurrentLocation();
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const weatherForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
        const response = await axios.get(weatherForecastURL);

        locationName.textContent = `${response.data.city.name}, ${response.data.city.country}`;	
        

        
        const forecastData = response.data.list.slice(0, 3); 
        console.log(response.data);
       appendData(forecastData);
    } catch (error) {
        console.error('Error fetching weather forecast:', error.message);
    }
}

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        );
    });
}





function appendData(data) {
  const days = ['Today', 'Tomorrow', getDayAfterTomorrow()];

  data.forEach((day, index) => {
    const secondDashboardBox = document.querySelector('.dashboardContainer .dashboardBox:nth-child(2)');
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weatherCard');

    const temp = document.createElement('p');
    temp.textContent = day.main.temp + '°C';
    temp.classList.add('temp');

    const weather = document.createElement('p');
    weather.textContent = day.weather[0].main;
    weather.classList.add('weather');

    const dayLabel = document.createElement('p');
    dayLabel.textContent = days[index];
    dayLabel.classList.add('dayLabel');

    secondDashboardBox.appendChild(weatherCard);
    weatherCard.appendChild(dayLabel);
    weatherCard.appendChild(weather);
    weatherCard.appendChild(temp);
  });
}

function getDayAfterTomorrow() {
  const currentDate = new Date();
  const dayAfterTomorrow = new Date(currentDate);
  dayAfterTomorrow.setDate(currentDate.getDate() + 2);

  const options = { weekday: 'long' }; 

  return dayAfterTomorrow.toLocaleDateString('en-US', options);
}
// function appendData(data) {
//   data.map((day) => {
//     const secondDashboardBox = document.querySelector('.dashboardContainer .dashboardBox:nth-child(2)')
//     const weatherCard = document.createElement('div');
//     weatherCard.classList.add('weatherCard');

//     const temp = document.createElement('p');
//     temp.textContent= day.main.temp + '°C';
//     temp.classList.add('temp');
    

//     const weather = document.createElement('p');
//     weather.textContent =  day.weather[0].main;
//     weather.classList.add('weather');



//     secondDashboardBox.appendChild(weatherCard);
//     weatherCard.appendChild(weather);
//     weatherCard.appendChild(temp);
    


    
    
//   })




// }






























































