//variable pour la verification
var chiffre1 = document.getElementById("champChiffre1");
var chiffre2 = document.getElementById("champChiffre2");

//verification si la saisie numéro 1 est un chiffre
function verifNbre1() {
    if (isNaN(chiffre1.value) == true){
        chiffre1.value = "";
        chiffre1.style.border ="2px solid red";//bordure rouge en cas de lettre
    }else{
        chiffre1.style.border ="2px solid blue";//bordure bleu si chiffre
    };
}
//verification si la saisie numéro 2 est un chiffre
function verifNbre2() {
    if (isNaN(chiffre2.value) == true){
        chiffre2.value = "";
        chiffre2.style.border ="2px solid red";//bordure rouge en cas de lettre
    }else{
        chiffre2.style.border ="2px solid blue";//bordure bleu si chiffre
    };
}

//fonction calculatrice
function calc(){
    var chiffre1 = parseFloat(document.forms["calculatrice"].elements["champChiffre1"].value);//recupération des chiffres saisie
    var chiffre2 = parseFloat(document.forms["calculatrice"].elements["champChiffre2"].value);
    var resultat
    if(document.forms["calculatrice"].elements["list"].value == "additionner") {
        var resultat = chiffre1 + chiffre2;
    }
    if(document.forms["calculatrice"].elements["list"].value == "soustraire") {
        var resultat = chiffre1 - chiffre2;
    }
    if(document.forms["calculatrice"].elements["list"].value == "multiplier") {
        var resultat = chiffre1 * chiffre2;
    }
    if(document.forms["calculatrice"].elements["list"].value == "diviser") {
        var resultat = chiffre1 / chiffre2;
    }
    
    document.forms["calculatrice"].elements["result"].value = resultat;//affichage du resultat dans la zone resultat

};
