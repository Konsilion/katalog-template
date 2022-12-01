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





var url = window.location.pathname + '../projekts.json';
fetch(url)
    .then(response => response.json())
    .then(json => {
        IndexConstruction(json);
    });

function IndexConstruction(projekts) {
        
    for (let i = 0; i < projekts.projekts.length; i++) {
        
        const card = ressourceCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const link = card.querySelector("[data-link]")
        const img = card.querySelector("[data-img]")
        const author = card.querySelector("[data-author]")
        const descr = card.querySelector("[data-descr]")
                
        header.textContent = projekts.projekts[i].name
        link.setAttribute("onclick","DatamiConstruction('" + projekts.projekts[i].name + "','" + projekts.projekts[i].link + "','" + projekts.projekts[i].type +"');")
        if(projekts.projekts[i].image !== ""){
            img.src = projekts.projekts[i].image
        } else {
            img.src = "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg"
        }
        author.textContent = "par : " + projekts.projekts[i].auteur
        descr.textContent = projekts.projekts[i].description
        
        ressourceCardContainer.append(card)
        
        ressources[i] = {name: projekts.projekts[i].name, description: projekts.projekts[i].description, author: projekts.projekts[i].auteur, element: card}        
    }
    
    fetch(window.location.pathname + '../../../param.json')
        .then(response => response.json())
        .then(json => {
            EditButtonRedirection(json);
        });
}


function EditButtonRedirection(param) {

    document.getElementById('EditBtn').setAttribute("href", param.informations[0].link + 'edit/master/docs/etc/projekts/projekts.json') 
    document.getElementById('AddDelBtn').setAttribute("onclick", "AddDelElement();") 
    document.getElementById('StartStep1').setAttribute("onclick", "AddDelRunStep1('" + param.informations[0].link + "new/master/docs/stg/datami/projekts');")
    document.getElementById('StartStep2').setAttribute("onclick", "AddDelRunStep2('" + param.informations[0].link + "edit/master/docs/etc/projekts/projekts.json');")

}

function AddDelElement() {
    SwitchHideElement("IndexBloc");
    SwitchHideElement("AddDelPop");
}
function SwitchHideElement(elementID) {
    document.getElementById(elementID).classList.toggle("hide");
}





function AddDelSwitchStep(elementID) {
    
    // Get desired elements
    var step1_elements = document.getElementsByClassName("pop-step1");

    // Iterate through the retrieved elements and add the necessary class names.
    for(var i = 0; i < step1_elements.length; i++)
    {
        step1_elements[i].classList.add('hide');
    }    
    
    // Get desired elements
    var step2_elements = document.getElementsByClassName("pop-step2");

    // Iterate through the retrieved elements and add the necessary class names.
    for(var i = 0; i < step2_elements.length; i++)
    {
        step2_elements[i].classList.add('hide');
    }       
    
    
    // Get desired elements
    var elements = document.getElementsByClassName(elementID);

    // Iterate through the retrieved elements and add the necessary class names.
    for(var i = 0; i < elements.length; i++)
    {
        elements[i].classList.toggle('hide');
    }       
}





function AddDelRunStep2(path) {

    var elements = document.getElementsByClassName('step2-input');
    
    let html = `        
        {
            "name": "` + elements[0].value + `", 
            "description": "` + elements[1].value + `", 
            "auteur": "` + elements[2].value + `",
            "type": "1",
            "link": "` + elements[3].value + `",
            "image": "` + elements[4].value + `",
            "token": "` + elements[5].value + `"
        },
        `;
    
    copyTextToClipboard(html);
    
    alert("Une page va s'ouvrir, il vous faut coller ce texte au début de la ligne 2 du grand encart.\n\nLe texte est déjà copié !\n\n" + html);    
    
    setTimeout(function () {
        window.open(path, '_blank').focus();
    }, 50);
}




function AddDelRunStep1(path) {

    let html = `DESIGNATION;DESCRIPTION;LIEN;FILTRES;IMAGE;AUTEUR.ICES`;
    
    copyTextToClipboard(html);

    setTimeout(function () {
        window.open(path, '_blank');
        alert("Une page c'est ouverte, il vous faut coller ce texte dans le grand encart blanc.\n\nLe texte est déjà copié !\n\n" + html);
    }, 50);
}




function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
          alert("Copied the text: " + html);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}