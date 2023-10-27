/* Ex.1 Calcul du nombre de jeunes, de moyens et de vieux

var j = 0;
var a = 0;
var v = 0;
var i = 0;

do {
    i = window.prompt("Entrez votre âge: ");
 
    if (i<20) {
        j++;
        console.log(j);
    }

    else if (i>=20 && i<=40) {
        a++;
        console.log(a);
    }

    else if (i>40 && i<=100) {
        v++;
        console.log(v);
    }
 } while (i<100)

alert("Il y a " + "" + j + "" + " jeunes," + "\n" + "" + a + "" + "adultes," + "\n"+ "" + v + "" + "vieux" + "\n" + "dont" + 1 + "centenaire");

*/