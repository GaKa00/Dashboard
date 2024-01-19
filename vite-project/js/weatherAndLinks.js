
import axios from 'axios';
//forms a prompt, asking for a website name. ie. google.
//prompt answer is then pushed into empty array, which is then used t make a card, linking to the webpage.
export function addNewLink() {
    const favorite = prompt('Enter Link Name, I.e "Google", "Facebook" etc.');
    
        favoriteLinks.push({
        href: `https://www.${favorite}.com`,
        textContent: favorite
    });
    // favoriteLinks.push(favorite);
       createDashcard(favorite);
      
       
  
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
        favlink.href = `https://www.${link}.com`;
        favlink.textContent = `${link}`;
        
        newCard.append(favlink);
        dashBox1.append(newCard);
        console.log(favoriteLinks);
         saveLinks();
}

  
}

const favoriteLinks = storeLinks();

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
        saveLinks();
    }
  

  }
 


 //add a button that deletes the attached link from the dashboardbox
 export function deleteLink() {
  alert("Select the link that you wish to delete by clicking on it's card")
  let deleteLock = true
  dashBox1.addEventListener('click', () => {
    const selectedCard = event.target;

    if (selectedCard.classList.contains('dashCard') && deleteLock) {
            selectedCard.parentNode.removeChild(selectedCard);
            deleteLock = false;
            saveLinks();
           
        }
          else{
            return;

   }}
   )
  
 }





 //Saves link by local storage
 
  function saveLinks(){
   localStorage.setItem("LinkData", JSON.stringify(favoriteLinks) );}
   console.log(favoriteLinks);
   function storeLinks() {
  const storedLinks = localStorage.getItem('LinkData');
  return JSON.parse(storedLinks) || [];
}

 function initializeDashboard() {
 
  const storedLinks = storeLinks();
  console.log(storedLinks);
  storedLinks.forEach(link => {
    createDashcard(link.textContent);
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
  data.map((day) => {
    const secondDashboardBox = document.querySelector('.dashboardContainer .dashboardBox:nth-child(2)')
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weatherCard');

    const temp = document.createElement('p');
    temp.textContent= day.main.temp + '°C';
    temp.classList.add('temp');
    

    const weather = document.createElement('p');
    weather.textContent =  day.weather[0].main;
    weather.classList.add('weather');



    secondDashboardBox.appendChild(weatherCard);
    weatherCard.appendChild(weather);
    weatherCard.appendChild(temp);
    


    
    
  })




}
































































// const APIkey = "7232d8219f4634164c47de963a16e583"
// let Coords = {
//   lat: null,
//   log: null
// }


// export function getLocation() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 Coords.lat = position.coords.latitude;
//                 Coords.log = position.coords.longitude;
//                 resolve();
//             },
//             (error) => {
//                 reject(error);
//             }
//         );
//     });
// }


// async function fetchData() {
//     try {
//         await getLocation();
//         await getWeather();
//     } catch (error) {
//         console.error('Error getting location:', error.message);
//     }
// }

// fetchData();

// async function getWeather() {
//   let lat = Coords.lat;
//   let log = Coords.log;
  
// const weatherAtLocation = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${log}&appid=${APIkey}`
// // `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${APIkey}`
// // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${log}&appid=${APIkey}`
//     try {
//         const response = await axios.get(weatherAtLocation);
//         createWeatherCard(response.data);
//     } catch (error) { console.error('Data could not be loaded:', error.message); 
//   }
// }


// function createWeatherCard(weatherData) {
//     // Assuming you have an HTML element with the id "weatherCard" to render the card
//     const weatherCardContainer = document.getElementById('weatherCard');

//     // Create HTML elements for the weather card content
//     const cityName = document.createElement('h2');
//     cityName.textContent = weatherData.name;

//     const temperature = document.createElement('p');
//     temperature.textContent = `Temperature: ${weatherData.main.temp} °C`;

//     const description = document.createElement('p');
//     description.textContent = `Weather: ${weatherData.weather[0].description}`;

//     // Clear previous content if any
//     weatherCardContainer.innerHTML = '';

//     // Append the created elements to the card container
//     weatherCardContainer.appendChild(cityName);
//     weatherCardContainer.appendChild(temperature);
//     weatherCardContainer.appendChild(description);
// }

