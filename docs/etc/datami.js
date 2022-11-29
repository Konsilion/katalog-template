const appId = window.location.pathname.split('/');
var name = appId[appId.length - 3]

var title = document.getElementById("CallDatami").getAttribute("title");

var descr = document.getElementById("CallDatami").getAttribute("descr");

var model = document.getElementById("CallDatami").getAttribute("model");



// --------------------------------------------------



function TakeTheToken() {
    var url = window.location.pathname + '../../../git.json';
    fetch(url)
    .then(response => response.json())
    .then(json => {
        DatamiKatalog(json.token,json.repo);
    });
}



function DatamiKatalog(token,repo) {

    let htlm = "";
    
    switch (model) {
      case '1':
        html = `<!-- DATAMI WIDGET'S HTML BLOCK -->
                    <datami-file
                      title="` + title + `"
                      gitfile="` + repo + `/docs/master/docs/etc/` + name + `/data.csv"
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
        html = `<!-- DATAMI WIDGET'S HTML BLOCK -->
                    <datami-file
                      title="` + title + `"
                      gitfile="` + repo + `/docs/master/docs/etc/` + name + `/data.csv"
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
    
    document.getElementById('DatamiGrid').innerHTML += html;
    
    setTimeout(function() {
        const elem = document.createElement("p");
            elem.setAttribute("id", "DescrKatalog")
            elem.appendChild(document.createTextNode(descr));  


        var child = document.getElementsByClassName("PreviewCsv")[0];
            child.parentNode.insertBefore(elem, child);

    }, 1500);    
}

TakeTheToken();