const chaine = 'bonjour a tous je me nomme zakaria'

//inverse chaine de carractere
const inverse = (chaine)=>{
   return chaine.split('').reverse().join('')
}
const resultat_inverse = inverse(chaine)
//longueur de la chaine
const compte = resultat_inverse.length

//met en majiscule la premiere lettre de charque mot
const capitaliserPremiereLettre = (chaine) => {
    return chaine.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
 };

console.log(resultat_inverse)
console.log(compte)
console.log(capitaliserPremiereLettre(chaine))

// Fonctions du tableau : max et min
const tab = [123, 45, 34, 67, 344, 2023];

const min_max = (tab) => {
    const maximum = Math.max(...tab);
    const minimum = Math.min(...tab);
    return { maximum, minimum };
}
console.log(min_max(tab));

//somme d'un tableau
const somme = tab.reduce((accumulateur, valeurActuelle) => {
    return accumulateur + valeurActuelle;
}, 0);
console.log(somme)
// filtrer avec une condition
const nombresPairs = tab.filter(nombre => nombre % 2 === 0);
console.log(nombresPairs)

// Calcul de la factorielle d'un nombre donné :

function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        return nombre * factorielle(nombre - 1);
    }
}
const nombre = 5;
console.log("Factorielle de", nombre, ":", factorielle(nombre));

//verification nombre premier
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

const nombreAVerifier = 17;
console.log(nombreAVerifier, "est premier ?", estPremier(nombreAVerifier));
 
//generation de la sequence de

function fibonacci(nombreDeTermes) {
    const sequence = [0, 1];
    for (let i = 2; i < nombreDeTermes; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

const nombreDeTermes = 10;
console.log("Séquence de Fibonacci avec", nombreDeTermes, "termes :", fibonacci(nombreDeTermes));
