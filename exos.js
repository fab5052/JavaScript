/*alert("Salut!");

console.log("Ah te revoila !");


var myVar; // le type de var myVar est undefined
myVar = 324; //typt num
myVar = "Bonjour"; //typ string
myVar = new Array(); //type object

console.log(typeof 324);

var myVar;
console.log(typeof myVar);

var age = 35;
document.write("<b>" + "votre age est " + "</b>" + age);

// Phase 7 

// Ex.1

var reponse1 = window.prompt("Saisissez votre Nom");
var reponse2 = window.prompt("Saisissez votre Prénom");
alert("Non, Prénom")


// Ex.2

var nb1 = parseInt (window.prompt("Entrez le 1er chiffre"));
var nb2 = parseInt (window.prompt("Entrez le 2eme chiffre"));  
alert("Résultat:"+(nb1*nb2));


// Ex.3

var C = parseInt (window.prompt("Entrez la températureen C°")); 
alert("F="+(C* + (9/5) + 32));


// Phase 8

// Ex.1

var a = parseInt(window.prompt("Entrez un nombre"));

if (a = a % 2) {
    alert("impair");
}

else {
    alert("pair");
}


// Ex.2

var annee = new Date().getFullYear(); 
var age = (window.prompt("Quelle est votre année de naissance ?"));
var adn = annee - age;

if (adn>=18){    
 alert("Vous etes majeur" );
}
else {
 alert("Vous etes mineur");
}


// Ex.3


var nb1 = parseInt(window.prompt("Entrez un 1er nombre entier"));
var op = (window.prompt("Entrez un opérateur"));
var nb2 = parseInt(window.prompt("Entrez un 2eme nombre entier"));

if (nb2 == 0 && op == "/") {
    console.log("none");
    alert("erreur");
}

else {
    switch (op) {
        case "+":
            var add = nb1 + nb2;
            alert(add)
            break;

        case "-":
            var sou = nb1 - nb2;
            alert(sou);
            break;


        case "*":
            var mul = nb1 * nb2;
            alert(mul);
            break;

        case "/":
            var divi = nb1 / nb2;
            alert(divi);
            break;

        default:
            alert("erreur");
    }

}

// Phase 9

// Ex.1

var a=true ;
var Num = 1;
var n= 1;
while(a==true){

    var prenom = prompt("Saissisez le prenom N°" + (Num++));

    console.log("prenom Num°" + (n++) + prenom);
   if ( prenom =='' || prenom == null){
    a=false
   }
}


// Ex.2


var nombre =parseInt (window.prompt("entrez un nombre"));

for(nombre; nombre>=0; --nombre ){
    i =nombre;
    alert(i);
    console.log(i);
}


// Ex.3

var i = true;
var somme = 0;
var moy = 0;
var counter = 0;
while (i == true) {
    var saisie = parseInt(window.prompt("Entrez un nombre Entier"));
    console.log(saisie);
    if (saisie == 0) {
        i = false;
    }
    else {
        somme = somme + saisie;
        ++counter;
    }
}

var moy = somme / counter;
alert("La somme est : " + somme + "." + "Le nombre de saisie :" + counter + "." + "La moyenne de toutes les saisies" + moy + ".");*/


// Ex.4

var N=0;
var X=0;
N = parseInt(window.prompt("Entrez le premier nombre"));
X = parseInt(window.prompt("Entrez le deuxieme nombre"));

for (N=0;N<=10;N++){
    result=N*X;
    alert(result);

}

