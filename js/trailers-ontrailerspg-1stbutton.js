// 1st buton in the 1st section

// it gets the modal
var modal = document.getElementById("myModal");

// it gets the button that opens the modal
var btn = document.getElementById("myBtn");

// it gets the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// opens the modal when you click the button
btn.onclick = function() {
  modal.style.display = "block";
}

// will close the modal when you click on <span> (x)
span.onclick = function() {
  modal.style.display = "none";
}

// will close if you click  outside of the modal   
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


