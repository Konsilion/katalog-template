const ressourceCardTemplate = document.querySelector("[data-ressource-template]");
const ressourceCardContainer = document.querySelector("[data-ressource-cards-container]")
let ressources = [];

var url = window.location.pathname + '../klouds.json';
fetch(url)
    .then(response => response.json())
    .then(json => {
        IndexConstruction(json);
    });

function IndexConstruction(klouds) {

    for (let i = 0; i < klouds.klouds.length; i++) {
        
        const card = ressourceCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const link = card.querySelector("[data-link]")
        const img = card.querySelector("[data-img]")
        const author = card.querySelector("[data-author]")
        const descr = card.querySelector("[data-descr]")
                
        header.textContent = klouds.klouds[i].name
        link.setAttribute("href",klouds.klouds[i].link)
        if(klouds.klouds[i].image !== ""){
            img.src = klouds.klouds[i].image
        } else {
            img.src = "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg"
        }
        author.textContent = "par : " + klouds.klouds[i].auteur
        descr.textContent = klouds.klouds[i].description
        
        ressourceCardContainer.append(card)
        
        ressources[i] = {name: klouds.klouds[i].name, description: klouds.klouds[i].description, author: klouds.klouds[i].auteur, element: card}        
    }
    
    fetch(window.location.pathname + '../../../param.json')
        .then(response => response.json())
        .then(json => {
            EditButtonRedirection(json);
        });
}


function EditButtonRedirection(param) {

    document.getElementById('EditBtn').setAttribute("href", param.informations[0].link + 'edit/master/docs/etc/klouds/klouds.json') 
}