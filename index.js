// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// inverser le tableau des fruits 
const lesFruits = ['Banane', 'Orange', 'Fraise', 'Mangue', 'Kiwi', 'Pastèque'];

for (let b = lesFruits.length -1; b >0; b -= 1) {
    console.log(`Ce fruit: '${lesFruits[b]}' est inversé dans le tableau.`); 
}

// inverser les chiffres 
const leTempsInverse = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

for (let s = leTempsInverse.length - 1; s >= 0; s--) {
    console.log(`${leTempsInverse[s]}`); 
}

console.log('Fin du match');

// afficher une chaine de caractère avec la boucle for...of
const nameOfTheUser = 'mike';

for (let name of nameOfTheUser) {
    console.log(name); 
}; 

// additionne par cinq à l'aide de la boucle for...of
const additioneParCinq = [0, 1, 2, 3, 4, 5]; 

for (let addition of additioneParCinq) {
    addition += 5; 
    console.log(addition);  
}

// utilisation des objets énumérés à l'aide la boucle for...in 
const objetEnumres = {
    name: 'Mike', 
    age: 27, 
    job: 'JavaScript Programmer',
}

for (let enumeration in objetEnumres) {
    console.log(`${enumeration} => ${objetEnumres[enumeration]}`);
}   