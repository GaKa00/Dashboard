export function addNewLink() {
    const favorite = prompt('Enter Link Name, I.e "Google", "Facebook" etc.');
    

    favoriteLinks.push(favorite);
    favoriteLinks.forEach(link => {
       createDashcard(link);
       
    });

};

function createDashcard(link) {

    dashBox1.innerHTML = '';
  const newCard = document.createElement('div')
  newCard.classList.add('dashCard')


  const  favlink = document.createElement('a');
        favlink.href = `https://www.${link}.com`;
        favlink.textContent = `${link}`;
        
        newCard.append(favlink);
        dashBox1.append(newCard)

  
}

const favoriteLinks =[];

const dashBox1 = document.querySelector('.dashboardBox')