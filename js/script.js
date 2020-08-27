

document.getElementById("pali").addEventListener("click", function() {
  var parola= prompt("Inserisci una parola:");
  var prova= "";
  var prova2= "";
  var numLettere= parola.length;
  var halfWord= numLettere/2;
  for (var i=0; i<halfWord; i++) {
   prova += parola.charAt(i);
  }
  for (var a=numLettere ; a > halfWord; a--);
    prova2 += parola.charAt(a);
    console.log(prova+" "+prova2);
});


document.getElementById("dispari").addEventListener("click", function() {
  var answer= prompt("PARI(p) o DISPARI(d)?");
  var check = false;
  var numero= parseInt(prompt("Inserisci un NUMERO da 1 a 5:"));
  var numRandom = Math.floor(Math.random() *5)+1;
  console.log(numRandom);
  var somma= numero + numRandom;
  if (somma % 2 == 0 && answer == "p") {
    alert("Hai VINTO");
  } else if ( somma % 2 != 0 && answer == "d") {
    alert("Hai VINTO");
  } else {
    alert("LOSER");
  }
});
