/*

        * JavaScript: Exercise 07_02
        * Fan Trick Fine Art Photography
        * Digital 101 web page
        * Author: Joaquin Santiago Ruiz
        * Date: 1.18.18

         * Filename: ft.js



 */
// global variables
var photographerCot = 0;
var totalCost = 0;
var memoryBook = false;
var reproductionRight = false;

//
calculates all cost based on staff and adds to total cost
function calcStaff(){
  var num = documaent.getElementById("photognum");
  document.getElementsById("photoghrs");
  totalCost = photographerCost;
  photographerCost = num.value *100* hrs.value;
  totalCost += photographerCost
  document.getelementById("estimate").innerHTML
  = "$" + totalcode
}
 //set all forms field to defaults
 function restForm() {
   document.getElementById("photognum").value = 1;
   document.getElementById("photoghrs").value = 2;
   document.getElementById("membook") checked = memoryBook;
   document.getElementById("reprodrights") checked = reproductionRight;
   document.getElementById("distance").value = 0;
   calcStaff()
    }
  // created event listerner
  function createEventListeners (){
    document.getElementById("photognum").addevent
  }

//resets form when page is reloaded
window.addEventListener("load", restForm, false);
