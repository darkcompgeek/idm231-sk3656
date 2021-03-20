/*
VARIABLES FOR MODAL
*/

//handle for the modal itself
const _modal = document.getElementById("modal");
//handle for close modal button
const _closeModalButton = document.getElementById("button-closeModal");

/*
VARIABLES FOR FORM BUTTONS
*/

//handle to submit button
const _submitButton = document.getElementById("button-submit");
//handle to help button
const _helpButton = document.getElementById("button-help");

/*
VARIABLES FOR ZODIAC BUTTONS
*/
//handle for district line button
const _aquariusButton = document.getElementById("button-aquarius");
//handle for bakerloo line button
const _piscesButton = document.getElementById("button-pisces");
//handle for central line button
const _ariesButton = document.getElementById("button-aries");
//handle for circle line button
const _taurusButton = document.getElementById("button-taurus");
//handle for hammersmith and city line button
const _geminiButton = document.getElementById("button-gemini");
//handle for jubilee line button
const _cancerButton = document.getElementById("button-cancer");
//handle for metropolitan line button
const _leoButton = document.getElementById("button-leo");
//handle for northern line button
const _virgoButton = document.getElementById("button-virgo");
//handle for piccadilly line button
const _libraButton = document.getElementById("button-libra");
//handle for victoria line button
const _scorpioButton = document.getElementById("button-scorpio");
//handle for waterloo and city  line button
const _saggitariusButton = document.getElementById("button-saggitarius");
//handle for elizabeth line button
const _capricornButton = document.getElementById("button-capricorn");

/*
FUNCTIONS
*/

function ShowModal() {
  _modal.hidden = !_modal.hidden;
}

/*
EVENT LISTENERS FOR MODAL BUTTONS
*/

_closeModalButton.addEventListener("click", ShowModal);

/*
EVENT LISTENERS FOR FORM BUTTONS
*/

//click event listener for submit button
_submitButton.addEventListener("click", function () {
  ShowModal();
});
//click event listener for help button
_helpButton.addEventListener("click", function () {
  console.log("Help Button Clicked");
  ShowModal();
});

/*
EVENT LISTENERS FOR ZODIAC BUTTONS
*/

//click event listener for aquarius button
_aquariusButton.addEventListener("click", function () {
  console.log("Aquarius Button Clicked");
});
_piscesButton.addEventListener("click", function () {
  console.log("Pisces Button Clicked");
});
_ariesButton.addEventListener("click", function () {
  console.log("Aries Button Clicked");
});
_taurusButton.addEventListener("click", function () {
  console.log("Taurus Button Clicked");
});
_geminiButton.addEventListener("click", function () {
  console.log("Gemini Button Clicked");
});
_cancerButton.addEventListener("click", function () {
  console.log("Cancer Button Clicked");
});
_leoButton.addEventListener("click", function () {
  console.log("Leo Button Clicked");
});
_virgoButton.addEventListener("click", function () {
  console.log("Virgo Button Clicked");
});
_libraButton.addEventListener("click", function () {
  console.log("Libra Button Clicked");
});
_scorpioButton.addEventListener("click", function () {
  console.log("Scorpio Button Clicked");
});
_saggitariusButton.addEventListener("click", function () {
  console.log("Saggitarius Button Clicked");
});
_capricornButton.addEventListener("click", function () {
  console.log("Capricorn Button Clicked");
});
