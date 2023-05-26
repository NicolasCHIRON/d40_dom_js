// Modification n°1

function changeTitles(changeTitle, changeLittleTitle)  {
  let title1 = document.querySelector("h1","jumbotron-heading").innerHTML = changeTitle;
  let subTitle1 = document.getElementsByClassName("lead")[0].innerHTML = changeLittleTitle;
}

changeTitles("Ce que j'ai appris à THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");


// -----------------
// Modification n°2
// -----------------

function changeCallToActions(textBtn1, textBtn2) {
  // changement premier bouton
  let btn1 = document.querySelector(".btn.btn-primary.my-2");
  btn1.innerHTML = textBtn1;
  btn1.href = "http://www.thehackingproject.org";
  
  // changement deuxième bouton
  let btn2 = document.querySelector(".btn.btn-secondary.my-2");
  btn2.innerHTML = textBtn2;
  btn2.href = "https://www.pole-emploi.fr/accueil/";
}

// -----------------
// Modification n°3
// -----------------

function changeLogoName(newTextLogo) {
  let newLogo = document.getElementsByTagName('strong')[0];
  newLogo.innerHTML = newTextLogo;
  newLogo.style.fontSize = '2em';
}

changeLogoName("The THP Experience");

// -----------------
// Modification n°4
// -----------------

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  let listOfCardBox = document.querySelectorAll(".card.mb-4.box-shadow");

  for (card = 0; card < listOfCardBox.length; card++) {
    newImg = document.createElement('img');
    divAfter = document.querySelectorAll(".card-body")[card];
    newImg.src = imagesArray[card];
    Card = document.querySelectorAll(".card.mb-4.box-shadow")[card];
    Card.insertBefore(newImg, divAfter);
  }
}

populateImages();

// -----------------
// Modification n°5
// -----------------

function deleteLastCards() {
  let listOfCards = document.querySelectorAll(".col-md-4");
  
  for (card = (listOfCards.length - 1); card > (listOfCards.length - 1 - 3); card--) {
    listOfCards[card].remove();
  }
}

deleteLastCards();

// -----------------
// Modification n°6
// -----------------

function changeCardsText() {
  let listOfCardTexts = document.querySelectorAll(".card-text");
  let text1 = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
  let text2 = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
  let text3 = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";

  for (card = 0; card < 3; card++) {
    switch(card) {
    case 0:
      document.querySelectorAll(".card-text")[card].innerHTML = text1;
      break;
    case 1:
      document.querySelectorAll(".card-text")[card].innerHTML = text2;
      break;
    case 2:
      document.querySelectorAll(".card-text")[card].innerHTML = text3;
      break;
    default:
      console.log("erreur !");
      break;
    }
  }
}

changeCardsText();

// -----------------
// Modification n°7
// -----------------

function changeViewButtons() {

}

changeViewButtons();

// -----------------
// Modification n°8
// -----------------

function lastOne() {

}

lastOne();