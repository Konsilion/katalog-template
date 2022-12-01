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


var url = window.location.pathname + '../katalogs.json';
fetch(url)
    .then(response => response.json())
    .then(json => {
        IndexConstruction(json);
    });






function IndexConstruction(katalogs) {

    for (let i = 0; i < katalogs.katalogs.length; i++) {
        
        const card = ressourceCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const link = card.querySelector("[data-link]")
        const img = card.querySelector("[data-img]")
        const author = card.querySelector("[data-author]")
        const descr = card.querySelector("[data-descr]")
                
        header.textContent = katalogs.katalogs[i].name
        link.setAttribute("onclick","DatamiConstruction('" + katalogs.katalogs[i].name + "','" + katalogs.katalogs[i].link + "','" + katalogs.katalogs[i].type +"');")
        if(katalogs.katalogs[i].image !== ""){
            img.src = katalogs.katalogs[i].image
        } else {
            img.src = "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg"
        }
        author.textContent = "par : " + katalogs.katalogs[i].auteur
        descr.textContent = katalogs.katalogs[i].description
        
        ressourceCardContainer.append(card)
        
        ressources[i] = {name: katalogs.katalogs[i].name, description: katalogs.katalogs[i].description, author: katalogs.katalogs[i].auteur, element: card}        
    }
    
    fetch(window.location.pathname + '../../../param.json')
        .then(response => response.json())
        .then(json => {
            EditButtonRedirection(json);
        });
}


function EditButtonRedirection(param) {

    document.getElementById('EditBtn').setAttribute("href", param.informations[0].link + 'edit/master/docs/etc/katalogs/katalogs.json')
}

