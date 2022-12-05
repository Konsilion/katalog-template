#

<div class="dropdown">
  <button class="dropbtn">Selectionnez le sujet de votre recherche 🔍</button>
  <div class="dropdown-content">
    <a href="#">Projets</a>
    <a href="#">Tâches</a>
    <a href="#">Évenements</a>
    <a href="#">Ressources</a>  
    <a href="#">Personnes</a>
  </div>
</div>

<hr>

<label class="wrapper" for="states">Quel projet précisement ?</label>
<div class="button dropdown"> 
  <select id="ProjectSelector">
     <option value="red"></option>
     <option value="yellow"></option>
     <option value="blue"></option>
  </select>
</div>

---

<style>
    
.dropdown {
  position: relative;
  display:block;
  margin-top:0.5em;
  padding:0;
    width:100%;
    
}
    
.dropdown select {
  width:100%;
  background:none;
  border: 1px solid var(--md-primary-fg-color);
  border-radius: 10px;
  outline: none;
  /* Magic font size number to prevent iOS text zoom */
  font-size:17px;
  /* General select styles: change as needed */
  color: grey;
  padding: 10px 25px;
  line-height:20px;
}    
    
    
    
    
    
/* Dropdown Button */
.dropbtn {
    text-align: center;
  background-color: var(--md-primary-fg-color);
  border-radius: 10px;  
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container - needed to position the dropdown content */
.dropdown {
    text-align: center;
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    border-radius: 10px;
    margin: auto;
  text-align: center;
  display: none;
  position: relative;
  background-color: #f1f1f1;
  min-width: 160px;
  max-width: 350px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    text-align: center;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;text-align: center;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;text-align: center;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;text-align: center;}

</style>
    
    

<script type="text/javascript" src="https://konsilion.github.io/katalog-setup/js/pages.js"></script>

<button id="ShowNav" onclick="ShowNav();" class="hide">Afficher le menu<button>

<button id="HideNav" onclick="HideNav();">Masquer<button>