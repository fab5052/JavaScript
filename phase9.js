/* Ex.1

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

var i = true
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
alert("La somme est : " + somme + "." + "Le nombre de saisie :" + counter + "." + "La moyenne de toutes les saisies" + moy + ".");

// Ex.4


var i = parseInt(window.prompt("Entrez le 1er nombre"));
var X = parseInt(window.prompt("Entrez le 2eme nombre"));

 for  (i = 1; i<10; i++) { 

   result = i * X;
   
    alert(result);
} while (i =!0 && i == 0);*/