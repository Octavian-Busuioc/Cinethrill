
// click on the menu btn and to toggle between hiding and showing the content

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// if you click outside of the menu button it will close the dropdown
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }