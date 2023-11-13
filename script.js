// Exercice 1 :

// Déclaration de la variable nombre
// Affectation de la variable nombre à 0
// Tant que nombre est inférieur à 1 ou supérieur à 3
//      Alors on demande à l'utilisateur de rentrer un nombre
//      On affecte le nombre entré à la variable nombre
//          Si nombre est compris entre 1 et 3
//          Alors le chiffre est correct
//          FinSi
//          Sinon le chiffre est incorrect
// Fin du tant que

// let nombre = 0
// while (nombre < 1 || nombre > 3){
//     nombre = prompt()
//     if (nombre >= 1 && nombre <= 3){
//         console.log("Le chiffre est correct, le chiffre entré est : ", nombre)
//     }
//     else{
//         console.log("Le chiffre est incorrect, le chiffre entré est : ", nombre , "merci de recommencer")
//     }
// }

// Exercice 2 :

//Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

// On déclare une varible nombre à 0
// Tant que le nombre est inférieur à 10 ou supérieur à 20
// Demander à l'utilisateur de saisir à nouveau un nombre
// Si le nombre est supérieur à 20
// Alors affiche "plus petit !"
// FinSi
// Si le nombre est inférieur à 10
// Alors affiche "plus grand !"
// FinSi
// FinTantQue
// 


// let nombre = 0
// while (nombre < 10 || nombre > 20){
//     nombre = prompt()
//     if (nombre < 10){
//         console.log("plus grand")
//     }
//     if (nombre > 20) {
//         console.log('plus petit')
//     }
// }

// Exercice 3 
// Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres

// variable nombrePlusGrand / variable nombre
// Boucle FOR i / i < 20 / i ++
//      taper un nombre
//      si nombre > nombrePlusGrand
//          Alors nombrePlusGrand = nombre
//      fin si
// Fin de For
// Affichez nombrePlusGrand

// let nombrePlusGrand = 0
// let nombre = 0
// for (let i = 0; i < 20; i++) {
//     nombre = prompt("Entrer un nombre")
//     if (nombre > nombrePlusGrand){
//         nombrePlusGrand = nombre
//     }
// }
// console.log(nombrePlusGrand)


//   Exercice 4 :
// Modifiez l’algorithme précedant pour que le programme affiche en quelle position avait été saisie ce nombre :

// variable nombrePlusGrand
// variable nombre 
// Boucle FOR i / i < 20 / i ++
// taper un nombre
// si nombre > nombrePlusGrand
// Alors nombrePlusGrand = nombre
// i = position
// fin si
// Fin de For
// Affichez nombrePlusGrand$
// afficher position

// let nombrePlusGrand = 0
// let nombre 
// for (let i = 0; i < 5; i++) {
//     nombre = prompt("Entrer un nombre")
//     if (nombre > nombrePlusGrand){
//         nombrePlusGrand = nombre
//         position = i
//     }   
// }
// console.log(nombrePlusGrand)
// console.log(position)

// Exercice 5 : 
// Réécrire l’algorithme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro. (reprends l'exercice 3) 

// variable nombrePlus grand de 0
// variable nombre prompt (taper un nombre)
// tant que nombre different de 0
// si nombre > nombrePlusGrand
// Alors nombrePlusGrand = nombre
// fin si
// taper un nombre
// Affichez nombrePlusGrand

// let nombrePlusGrand = 0
// let nombre = prompt("Entrer un nombre")
// while (nombre!= 0) {
//     if (nombre > nombrePlusGrand){
//          nombrePlusGrand = nombre
//             }   
//     nombre = prompt("Entrer un nombre")
// }
// console.log(nombrePlusGrand)



// Exercice 6 :
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre

// variable nombre prompt taper un nombre
// pour defini la variable I (multiplicateur) 
// la variable resultat = nombre * I (multiplicateur)
// afficher dans la console le nombre * le mutliplicateur = et le resultat

// let nombre = prompt ("entrer un nombre")
// for (let I = 0 ; I <= 10; I++ ){
//     let resultat = nombre * I ;
//     console.log(nombre+ "*" + I + "=" + resultat);    
// }


// Exercice 7 :
// Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre

// variable nombre 
// variable de la somme
// boucle pour for i / i < nombre / i++
// afficher dans la console le nombre et la somme 

// let nombre = prompt ("entrer un nombre")
// let somme = 0
// for (let i = 1; i <= nombre; i++) {
//     somme += i ; 
// }
// console.log("La somme des entiers jusqu'à " + nombre + " est : " + somme);