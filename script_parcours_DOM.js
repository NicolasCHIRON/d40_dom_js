// Question 1 : Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
console.log("Question 1 : Combien y a-t-il d'éléments <p> présents dans la page HTML ?");
let numberOfP = document.getElementsByTagName('p').length;
console.log(`Il y a ${numberOfP} éléments <p> dans la page HTML`);

// Question 2 : Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
console.log("");
console.log("Question 2 : Quel est le contenu texte de l'élément portant l'id coucou ?");
let coucou = document.getElementById('coucou').innerHTML;
console.log(coucou);

// Question 3 : Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
console.log("");
console.log("Question 3 : Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?");
let url3 = document.getElementsByTagName('a')[3].href;
console.log(url3);

// Question 4 : Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("");
console.log("Question 4 : Combien d'éléments portent la classe compte-moi ?");
let countMe = document.getElementsByClassName('compte-moi').length;
console.log(countMe);

// Question 5 : Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("");
console.log("Question 5 : Combien d'éléments <li> portent la classe compte-moi ?");
let countLi = document.querySelectorAll("li.compte-moi").length;
console.log(countLi);

// Question 6 : Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("");
console.log("Question 6 : Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?");
let countLi2 = document.getElementsByTagName('ol')[0].querySelectorAll("li.compte-moi").length;
console.log(countLi2);

// Question 7 :
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…
// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. 
// Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
console.log("");
console.log("Question 7 : Jeu de piste");
let onYCroit = document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[1].innerHTML;
console.log(onYCroit);
