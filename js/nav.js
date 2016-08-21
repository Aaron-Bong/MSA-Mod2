/* When button is clicked by user, 
toggle hiding or showing the dropdown content */
function dropDownFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("toggle shown")
}

// Close dropdown if user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}