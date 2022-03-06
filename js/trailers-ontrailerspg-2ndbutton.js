// 2n buton in the 2nd section

// it gets the modal
var modald = document.getElementById("myModal1");

// it gets the button that opens the modal
var btn = document.getElementById("myBtn1");

// it gets the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// opens the modal when you click the button
btn.onclick = function() {
  modald.style.display = "block";
}

// will close the modal when you click on <span> (x)
span.onclick = function() {
  modald.style.display = "none";
}

// will close if you click  outside of the modal  
window.onclick = function(event) {
  if (event.target == modald) {
    modald.style.display = "none";
  }
}