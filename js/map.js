const reservshow=document.querySelector(".page-body");
const closeform=document.querySelector(".modal-map");
const showform=document.querySelector(".button-search");
//reservshow.addEventListener("onload", function (evt) {
  document.addEventListener('DOMContentLoaded', function() {
    closeform.classList.add("close-form");
}, false);
showform.addEventListener("click", function (evt) {
 closeform.classList.toggle("close-form");
});
