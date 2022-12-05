# **Développer, proposer et promouvoir la Low-technologie.**

Nous proposons des outils et méthodes utiles au développement, à la fabrication et à l’appropriation de la Low-technologie.

??? tip "Qu'est ce que la Low-tech ?"

    **Utile, Durable et accessible**
    
    ---
    
    « La ou les low-tech, mot à mot basses technologies, désignent une catégorie de produits, de services, de procédés ou autres systèmes permettant, via une transformation technique, organisationnelle et culturelle, le développement de nouveaux modèles de société intégrant, dans leurs principes fondamentaux, les exigences de durabilité forte et de résilience collective.

    La low-tech n’est pas une démarche technophobe mais technocritique. Autrement dit, même si elle s’oppose à l’obsession de la high-tech, celle-ci s’accorde du principe de techno-discernement »
    
    ---
    
    Wikipédia 10-2022 – *Nous vous présentons la définition de Wikipédia car elle issue d’une réflexion collaborative, amenée à évoluer.*


---

<div id="DatamiMain"></div>

<hr>

<h2>Afficher les catalogues externes</h2> 

<label class="ksln-switch"><input id="LoadAll" type="checkbox" onclick="document.getElementById('DatamiExternal').classList.toggle('hide');"><span class="slider round"></span></label>

<div id="DatamiExternal" class="hide" style="padding-left:50px; border-left: 3px solid #EEE;"></div>


<button id="ShowNav">Afficher le menu<button>



<script id="CallDatami" type="text/javascript" src="https://konsilion.github.io/katalog-setup/js/katalog/starter.js"></script>


<style>
    .tip > summary {font-size: 15px;}
    
    #ShowNav {
        background-color: var(--md-primary-fg-color);
        color: white;    
        font-size: 17px;
        font-weight: 500;
        position: fixed;
        top: 30px;
        left: 0px;
        border-radius: 0 0 10px 0;
        padding: 5px 25px; 
        cursor: pointer;
        z-index: 4;
    }
    
    .md-main {
        margin: auto;
    }
  
    #HideNav {
        background-color: #EEE;
        color: grey;    
        font-size: 17px;
        font-weight: 500;
        position: fixed;
        top: 30px;
        left: 225px;
        width: 125px;
        height: 40px;
        cursor: pointer;
    }
    
</style>