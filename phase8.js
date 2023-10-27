 /* //Ex.1

var a = parseInt(window.prompt("Entrez un nombre"));

if (a = a % 2) {
    alert("impair");
}

else {
    alert("pair");
}


  Ex.2

var annee = new Date().getFullYear(); 
var age = (window.prompt("Quelle est votre année de naissance ?"));
var adn = annee - age;

if (adn>=18){    
 alert("Vous etes majeur" );
}
else {
 alert("Vous etes mineur");
}


 Ex.3


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