
//forms a prompt, asking for a website name. ie. google.
//prompt answer is then pushed into empty array, which is then used t make a card, linking to the webpage.
export function addNewLink() {
    const favorite = prompt('Enter Link Name, I.e "Google", "Facebook" etc.');
    

    favoriteLinks.push(favorite);
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
        dashBox1.insertBefore(newCard, button);
}

  
}

const favoriteLinks =[];

const dashBox1 = document.querySelector('.dashboardBox')
const button = document.querySelector('.newLink');



//add a button that deletes the attached link from the dashboardbox

export function changeLink() {
   alert("Select the faulty link that you wish to change by clicking on it's card")
   dashBox1.addEventListener('click', () => {
    const selectedLink = event.target;
    if (selectedLink.classList.contains('dashCard')) {
            
            change(selectedLink);
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
  

  }
 


 //add a button that deletes the attached link from the dashboardbox
 export function deleteLink() {
  alert("Select the link that you wish to delete by clicking on it's card")
  dashBox1.addEventListener('click', () => {
    const selectedCard = event.target;

    if (selectedCard.classList.contains('dashCard')) {
            selectedCard.parentNode.removeChild(selectedCard);
        }
          else{
            return;

   }}
   )
  
 }


