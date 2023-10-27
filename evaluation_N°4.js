/*var PU = window.prompt("Veuillez entrer le prix unitaire : ");
var QTECOM = window.prompt("Veuillez entrer la quantité commandée : ");

{

var TOT = (PU) * (QTECOM);

var RemP;
var RemN = 6;


if (TOT >= 100 && TOT <= 200)
{
    RemP = "5%";
    RemN = 0.05;
}

else if (TOT > 200)
{
    RemP = "10%";
    RemN = 0.10;
}

else if (TOT < 100)
{
    RemP = "0%";
    RemN = 0;
}

var REM = (TOT) * (RemN);
var TOTREM = (TOT) - (REM);

var PortP = 0;
var PortN = 0;
var PORT = 0;
const PortMin = 6;

if (TOTREM > 500)
{
    PortP = "Gratuits"
    PORT = 0;
}
else if (TOTREM <= 500)
{
    PortP = "2%"
    PortN = 0.02;
    PORT = (PortN) * (TOTREM);

    if (PORT < 6)
    {
        PortP = "Frais de port minimaux"
        PORT = (PortMin)
    }
}

var PAP = (TOTREM) + (PORT);



alert("Prix unitaire : " + Math.round(PU * 100) / 100 + "€\n" + "Quantité commandée : " + Math.round(QTECOM) + "\n" + "Prix total : " + Math.round(TOT * 100) / 100 + "€\n" + "Remise : " + RemiseP + ", soit " + Math.round(REM * 100) / 100 + "€\n" + "Prix avec remise : " + Math.round(TOTREM * 100) / 100 + "€\n" + "Frais de port : " + PortP + ", soit " + Math.round(PORT * 100) / 100 + "€\n" +  "Prix à payer : " + Math.round(PAP * 100) / 100 + "€")}*/