fetch("https://unpkg.com/papaparse@5.3.0/papaparse.min.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {
  
  })




fetch("https://konsilion.github.io/katalog-setup/js/datami.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {
  })  




fetch("https://datami-widget.multi.coop/js/app.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {
  })







function linkRemoteCss(url){

// create new link tag
var link = document.createElement('link');

// set properties of link tag
link.href = url;
link.rel = 'stylesheet';
link.type = 'text/css';

// append link element to html
document.body.appendChild(link);

}


linkRemoteCss('https://konsilion.github.io/katalog-setup/css/konsilion.css');

linkRemoteCss('https://konsilion.github.io/katalog-setup/css/konsilion-mkdocs.css');

linkRemoteCss('https://konsilion.github.io/katalog-setup/css/konsilion-datami.css');
