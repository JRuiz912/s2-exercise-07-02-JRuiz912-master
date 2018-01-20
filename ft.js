/*

        * JavaScript: Exercise 07_02
        * Fan Trick Fine Art Photography
        * Digital 101 web page
        * Author: Joaquin Santiago Ruiz
        * Date: 1.18.18

         * Filename: ft.js



 */


 //set all forms field to defaults
 function restForm() {
   document.getElementById("photognum").value = 1;
   document.getElementById("photoghrs").value = 2;
   document.getElementById("membook") checked = false;
   document.getElementById("reprodrights") checked = false;
   document.getElementById("distance").value = 0;
  

//resets form when page is reloaded
window.addEventListener("load", restForm, false);
