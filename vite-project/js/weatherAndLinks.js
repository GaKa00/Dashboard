export function addNewLink() {
    const favorite = prompt('Enter Link Name, I.e "Google", "Facebook" etc.');
    

    favoriteLinks.push(favorite);
       createDashcard(favorite);
       
    

};

function createDashcard(link) {
  const newCard = document.createElement('div')
  newCard.classList.add('dashCard')


  const  favlink = document.createElement('a');
        favlink.href = `https://www.${link}.com`;
        favlink.textContent = `${link}`;
        
        newCard.append(favlink);
        dashBox1.insertBefore(newCard, button);

  
}

const favoriteLinks =[];

const dashBox1 = document.querySelector('.dashboardBox')
const button = document.querySelector('.newLink');