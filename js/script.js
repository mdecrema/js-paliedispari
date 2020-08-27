

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
