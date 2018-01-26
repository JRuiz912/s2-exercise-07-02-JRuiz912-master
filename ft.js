/*

        * JavaScript: Exercise 07_02
        * Fan Trick Fine Art Photography
        * Digital 101 web page
        * Author: Joaquin Santiago Ruiz
        * Date: 1.18.18

         * Filename: ft.js



 */
// global variables
var photographerCost = 0;
var totalCost = 0;
var memoryBook = false;
var reproductionRight = false;


//calculates all cost based on staff and adds to total cost
function calcStaff() {
  var num = document.getElementById("photognum");
  var hrs = document.getElementById("photoghrs");
  var distance = document.getElementById("distance");
  totalCost -= photographerCost;
  photographerCost = num.value * 100 * hrs.value + distance.value * num.value;
  totalCost += photographerCost
  document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// add/subtract cost of memory book from total cost
function toggleMembook(){
  (document.getElementById("membook").checked === false) ? totalCost -= 250 : totalCost += 250;
  document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// adds /subtract cost of reproduction right from total
function toggleRights(){
  (document.getElementById("reprodrights").checked === false) ? totalCost -= 1250 : totalCost += 1250;
   document.getElementById("estimate").innerHTML = "$" + totalCost;
}

 //set all forms field to defaults
 function resetForm() {
   document.getElementById("photognum").value = 1;
   document.getElementById("photoghrs").value = 2;
   document.getElementById("membook").checked = memoryBook;
   document.getElementById("reprodrights").checked = reproductionRight;
   document.getElementById("distance").value = 0;
   calcStaff();
   createEventListeners();
    }
  // created event listerner
  function createEventListeners (){
    document.getElementById("photognum").addEventListener("change", calcStaff);
document.getElementById("photoghrs").addEventListener("change", calcStaff);
document.getElementById("membook").addEventListener("change", toggleMembook);
document.getElementById("reprodrights").addEventListener("change", toggleRights);
document.getElementById("distance").addEventListener("change",calcStaff);
  }

//resets form when page is reloaded
window.addEventListener("load", resetForm);
