/// <reference path="typings/index.d.ts" />

/* When button is clicked by user, 
toggle hiding or showing the dropdown content */
function dropDownFunc(): void {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown if user clicks outside of it
window.onclick = function (e: MouseEvent) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns: NodeListOf<Element> = document.getElementsByClassName("dropdown-content");
    for (var d: number = 0; d < dropdowns.length; d++) {
      var openDropdown: Element = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}