var linkWrite = document.querySelector(".modal-popup-write");
var popupWrite = document.querySelector(".fixed-overlay");
var closePopup = document.querySelector(".close-popup");
var popupMap = document.querySelector(".fixed-overlay-map");
var linkMap = document.querySelector(".modal-map")
var closeMap = document.querySelector(".close-popup-map")
var login = popupWrite.querySelector("[name=login]");

linkWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-show");
  login.focus();
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("modal-show");
  });

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show")
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

