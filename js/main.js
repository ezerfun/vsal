var myRadios = document.getElementsByName("tabs2");
var setCheck;
var x = 0;
for (x = 0; x < myRadios.length; x++) {
  myRadios[x].onclick = function () {
    if (setCheck != this) {
      setCheck = this;
    } else {
      this.checked = false;
      setCheck = null;
    }
  };
}

let button = document.querySelector(".categories__button");
let menu = document.querySelector(".categories__hidden");
button.addEventListener("click",function(){
    if(menu.style.display === "none"){
        menu.style.display = "flex";
    }else{
        menu.style.display = "none";
    }
});
// Initialization for ES Users
