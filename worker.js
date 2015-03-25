self.onmessage = function(event) {
  console.log("Pum");
  var n = 1;
  primelist = "";
  cont = 0;
  search: while (n<event.data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
        // found a prime!
    primelist += " " + n;
    cont++;
    console.log("cont" + cont);
    if(cont > 1000){
      console.log("Pum222");

      cont = 0;
      self.postMessage(primelist);
      primelist = "";
    }
      //document.getElementById('result').innerHTML = primelist;
  }
  self.postMessage(primelist);
}




