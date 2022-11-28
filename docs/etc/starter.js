fetch("https://unpkg.com/papaparse@5.3.0/papaparse.min.js")
  .then((response) => response.text())
  .then((text) => eval(text))
  .then(() => {
  
  })




fetch("/etc/datami.js")
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

linkRemoteCss('/etc/konsilion.css');

linkRemoteCss('/etc/konsilion-mkdocs.css');

linkRemoteCss('/etc/konsilion-datami.css');












