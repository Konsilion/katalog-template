fetch(window.location.pathname + '../../../param.json')
        .then(response => response.json())
        .then(json => {
            EditButtonRedirection(json);
        });



function EditButtonRedirection(param) {

    document.getElementById('EditBtn').setAttribute("href", param.informations[0].link + 'etc/ekosystems/katalogs.json')
}




// ------------------------------------------



const ressourceCardTemplate = document.querySelector("[data-ressource-template]");
const ressourceCardContainer = document.querySelector("[data-ressource-cards-container]")
let ressources = [];

const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  ressources.forEach(ressource => {
    const isVisible =
      ressource.name.toLowerCase().includes(value) || ressource.description.toLowerCase().includes(value) || ressource.author.toLowerCase().includes(value)
      ressource.element.classList.toggle("hide", !isVisible)
  })
})


var url = window.location.pathname + '../ekosystems.json';
fetch(url)
    .then(response => response.json())
    .then(json => {
        IndexConstruction(json);
    });

function IndexConstruction(ekosystems) {

    for (let i = 0; i < ekosystems.ekosystems.length; i++) {
        
        const card = ressourceCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const link = card.querySelector("[data-link]")
        const img = card.querySelector("[data-img]")
        const author = card.querySelector("[data-author]")
        const descr = card.querySelector("[data-descr]")
                
        header.textContent = ekosystems.ekosystems[i].name
        link.setAttribute("onclick","DatamiConstruction('" + ekosystems.ekosystems[i].name + "','" + ekosystems.ekosystems[i].link + "','" + ekosystems.ekosystems[i].type +"');")
        if(ekosystems.ekosystems[i].image !== ""){
            img.src = ekosystems.ekosystems[i].image
        } else {
            img.src = "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg"
        }
        author.textContent = "par : " + ekosystems.ekosystems[i].auteur
        descr.textContent = ekosystems.ekosystems[i].description
        
        ressourceCardContainer.append(card)
        
        ressources[i] = {name: ekosystems.ekosystems[i].name, description: ekosystems.ekosystems[i].description, author: ekosystems.ekosystems[i].auteur, element: card}        
    }
    
    fetch(window.location.pathname + '../../../param.json')
        .then(response => response.json())
        .then(json => {
            EditButtonRedirection(json);
        });
}


function EditButtonRedirection(param) {

    document.getElementById('EditBtn').setAttribute("href", param.informations[0].link + 'edit/master/docs/etc/ekosystems/home.md')
    document.getElementById('ModifEko').setAttribute("href", param.informations[0].link + 'edit/master/docs/etc/ekosystems/ekosystems.json')
  
}
