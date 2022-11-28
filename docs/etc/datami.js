var path = document.getElementById("CallDatami").getAttribute("path");
var title = document.getElementById("CallDatami").getAttribute("title");
var img = document.getElementById("CallDatami").getAttribute("src-img");
var model = document.getElementById("CallDatami").getAttribute("model");


function DatamiConstruction() {

    console.log()
    
    var url = window.location.pathname + path;

    Papa.parse(window.location.pathname + path, { 
        download: true,
        delimiter: ";",
        skipEmptyLines: true,
        complete: results => {
            TakeTheToken(results.data.slice(0));
        }
    });
}


function TakeTheToken(data) {
    var url = window.location.pathname + '../../../git.json';
    fetch(url)
    .then(response => response.json())
    .then(json => {
        DatamiKatalog(data,json.token,json.repo);
    });
}

//datami-file-previews

function DatamiKatalog(data,token,repo) {

    let html = ""

    let grid = document.getElementById('DatamiGrid');

    switch (model) {
      case '1':
        html += `<!-- DATAMI WIDGET'S HTML BLOCK -->
                    <datami-file
                      title="` + title + `"
                      gitfile="` + repo + `/docs/master/docs/etc/` + path.split('/')[1].split('.')[0] + `/` + path.split('/')[1] + `"
                      options='{
                      "height": "500px",
                      "separator": ";",
                      "lockcolumns": false,
                      "pagination": {
                        "itemsPerPage": 9
                      },
                      "cardsview": {
                        "activate": true,
                        "default": true
                      },
                      "schema": {
                        "file": "https://github.com/Konsilion/katalog-setup/blob/master/json/schema.json"
                      },
                      "fields-custom-properties": {
                        "file": "https://github.com/Konsilion/katalog-setup/blob/master/json/custom.json"
                      },
                      "customfilters": {
                        "activate": true,
                        "filterfields": [
                          "IDs - FILTRES"
                        ],
                        "tagsSeparator": ","
                      },

                      "cardsdetail": false,
                      "cardssettings": {
                        "mini": {
                          "NOM DE LA RESSOURCE": {
                            "position": "title"
                          },
                          "IDs - FILTRES": {
                            "position": "tags"
                          }
                        },
                        "detail": {
                          "NOM DE LA RESSOURCE": {
                            "position": "title"
                          },
                          "DESCRIPTION": {
                            "position": "resume"
                          },
                          "IMAGE": {
                            "position": "image"
                          },
                          "LIEN": {
                            "position": "links"
                          },
                          "IDs - FILTRES": {
                            "position": "tags", "block_title": "Catégories :"
                          }
                        }
                      }
                    }'
                      onlypreview="false"
                      usertoken="` + token + `"
                      locale="fr"
                    ></datami-file> `;
        break;
      case '2':
        html += `<!-- DATAMI WIDGET'S HTML BLOCK -->
                    <datami-file
                      title="` + title + `"
                      gitfile="` + repo + `/docs/master/docs/etc/` + path.split('/')[1].split('.')[0] + `/` + path.split('/')[1] + `"
                      options='{
                      "height": "500px",
                      "separator": ";",
                      "lockcolumns": false,
                      "pagination": {
                        "itemsPerPage": 9
                      },
                      "cardsview": {
                        "activate": true,
                        "default": true
                      },
                      "schema": {
                        "file": "https://github.com/Konsilion/katalog-setup/blob/master/json/schema.json"
                      },
                      "fields-custom-properties": {
                        "file": "https://github.com/Konsilion/katalog-setup/blob/master/json/custom.json"
                      },
                      "customfilters": {
                        "activate": true,
                        "filterfields": [
                          "IDs - FILTRES"
                        ],
                        "tagsSeparator": ","
                      },

                      "cardsdetail": false,
                      "cardssettings": {
                        "mini": {
                          "NOM DE LA RESSOURCE": {
                            "position": "title"
                          }
                        },
                        "detail": {
                          "NOM DE LA RESSOURCE": {
                            "position": "title"
                          },
                          "DESCRIPTION": {
                            "position": "resume"
                          },
                          "IMAGE": {
                            "position": "image"
                          },
                          "LIEN": {
                            "position": "links"
                          },
                          "IDs - FILTRES": {
                            "position": "tags", "block_title": "Catégories :"
                          }
                        }
                      }
                    }'
                      onlypreview="false"
                      usertoken="` + token + `"
                      locale="fr"
                    ></datami-file> `;            
        break;
      default:
        console.log(`Sorry, we are out of ${model}.`);
    }
    
    grid.innerHTML += html;
}

DatamiConstruction();



var descr = document.getElementById("CallDatami").getAttribute("descr");
var text = document.createTextNode(descr);

setTimeout(function() {

    const para = document.createElement("p");
    para.setAttribute("id", "DescrKatalog")
    const node = document.createTextNode(descr);


    para.appendChild(node);  


    var child = document.getElementsByClassName("PreviewCsv")[0];
    child.parentNode.insertBefore(para, child);

}, 1000);
