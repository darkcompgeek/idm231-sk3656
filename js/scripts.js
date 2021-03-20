/*
VARIABLES FOR MODAL
*/
const _modalHeader = document.getElementById("modal-header");
//handle for modal header
const _modalHeaderText = document.getElementById("modal-header-text");
//handle for modal date range
const _modalDateRangeText = document.getElementById("modal-dateRange-text");
//handle for modal description
const _modalDescriptionText = document.getElementById("modal-Description-text");

//handle for the modal itself
const _modal = document.getElementById("modal");
//handle for close modal button
const _closeModalButton = document.getElementById("button-closeModal");

/*
VARIABLES FOR FORM ELEMENTS
*/
// //handle to first name field
// const firstNameField = document.getElementById("input-name");
// //handle to date field
// const dateField = document.getElementById("input-date");

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

function CalculateZodiac(whichOne) {
  console.log("userPicked called " + whichOne);
  switch (whichOne) {
    case "aqu":
      // display title
      _modalHeaderText.innerHTML = "District Line";
      // display date range
      _modalDateRangeText.innerHTML = "January 20th through February 18th";
      // display description
      _modalDescriptionText.innerHTML = "<p>Aquarius are .....</p>";

      _modalHeader.style.borderColor = "#00843d";
      // Show hide modal
      ShowModal();
      break;
    case "pis":
      // display title
      _modalHeaderText.innerHTML = "Bakerloo Line";
      // display date range
      _modalDateRangeText.innerHTML = "February 19th through March 20th";
      // display description
      _modalDescriptionText.innerHTML =
        "<p>Pisces are cool, they swim in water.</p>";

      _modalHeader.style.borderColor = "#b0600f";
      // Show hide modal
      ShowModal();
      break;
    case "ari":
      // display title
      _modalHeaderText.innerHTML = "Central Line";
      // display date range
      _modalDateRangeText.innerHTML = "March 21st through April 19th";
      // display description
      _modalDescriptionText.innerHTML = "<p>Aquarius are .....</p>";

      _modalHeader.style.borderColor = "#ee2e22";
      // Show hide modal
      ShowModal();
      break;
    case "tau":
      // display title
      _modalHeaderText.innerHTML = "Circle Line";
      // display date range
      _modalDateRangeText.innerHTML = "April 20th through May 20th";
      // display description
      _modalDescriptionText.innerHTML = "<p>Aquarius are .....</p>";

      _modalHeader.style.borderColor = "#ffd104";
      // Show hide modal
      ShowModal();
      break;
    case "gem":
      // display title
      _modalHeaderText.innerHTML = "Hammersmith & City Line";
      // display date range
      _modalDateRangeText.innerHTML = "May 21st through June 20th";
      // display description
      _modalDescriptionText.innerHTML = "<p>Aquarius are .....</p>";

      _modalHeader.style.borderColor = "#f386a0";
      // Show hide modal
      ShowModal();
      break;
    case "can":
      // display title
      _modalHeaderText.innerHTML = "Jubilee Line";
      // display date range
      _modalDateRangeText.innerHTML = "June 21st through July 22nd";
      // display description
      _modalDescriptionText.innerHTML = "<p>Aquarius are .....</p>";

      _modalHeader.style.borderColor = "#959ca1";
      // Show hide modal
      ShowModal();
      break;
    case "leo":
      // display title
      _modalHeaderText.innerHTML = "Metropolitan Line";
      // display date range
      _modalDateRangeText.innerHTML = "July 23rd through August 22nd";
      // display description
      _modalDescriptionText.innerHTML = "<p>Aquarius are .....</p>";

      _modalHeader.style.borderColor = "#97025f";
      // Show hide modal
      ShowModal();
      break;
    case "vir":
      // display title
      _modalHeaderText.innerHTML = "Northern Line";
      // display date range
      _modalDateRangeText.innerHTML = "August 23rd through September 22nd";
      // display description
      _modalDescriptionText.innerHTML = "<p>Scorpio are .....</p>";

      _modalHeader.style.borderColor = "#231f20";
      // Show hide modal
      ShowModal();
      break;
    case "lib":
      // display title
      _modalHeaderText.innerHTML = "Piccadilly Line";
      // display date range
      _modalDateRangeText.innerHTML = "September 23rd through October 22nd";
      // display description
      _modalDescriptionText.innerHTML =
        "You're the definition of reliable, even if there are some hiccups now and then. You take your time and get the job done.";

      _modalHeader.style.borderColor = "#1b3f94";
      // Show hide modal
      ShowModal();
      break;
    case "sco":
      // display title
      _modalHeaderText.innerHTML = "Victoria Line";
      // display date range
      _modalDateRangeText.innerHTML = "October 23rd through November 21st";
      // display description
      _modalDescriptionText.innerHTML =
        "You come from a family of high prestige. You carry the blood of royalty. You're destined for great things.";

      _modalHeader.style.borderColor = "#069ddc";
      // Show hide modal
      ShowModal();
      break;
    case "sag":
      // display title
      _modalHeaderText.innerHTML = "Waterloo & City Line";
      // display date range
      _modalDateRangeText.innerHTML = "November 22nd through December 21st";
      // display description
      _modalDescriptionText.innerHTML =
        "<p>You're short and sweet. You like to keep it simple. Two stops is all you need. Why have any more?</p>";

      _modalHeader.style.borderColor = "#84cdbc";
      // Show hide modal
      ShowModal();
      break;
    case "cap":
      // display title
      _modalHeaderText.innerHTML = "Elizabeth Line";
      // display date range
      _modalDateRangeText.innerHTML = "December 22nd through January 19th";
      // display description
      _modalDescriptionText.innerHTML =
        "You're innovative and bold. You love to work on yourself and improve all of the time. Although you may take longer than expected to get things done, you always make up for that delay in quality.";

      _modalHeader.style.borderColor = "#753dbd";
      // Show hide modal
      ShowModal();
      break;
    default:
      console.log("default value tripped");
  }
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
  // Get the user first name and store it in a variable
  //   const firstName = document.getElementById("input-name").value;
  //   console.log("userFirstName is: " + firstName);

  // Get the user date and extract the month of year and day of month
  const userBday = new Date(document.getElementById("input-date").value);
  console.log("userBday is: " + userBday);

  // Figure out the zodiac sign based on month and of year and day of month
  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log("whichMonth is: " + whichMonth);

  const whichDayOfMonth = userBday.getUTCDate();
  console.log("whichDayOfMonth is: " + whichDayOfMonth);

  let zodiacSign = "";

  if (
    (whichMonth == 12 && whichDayOfMonth >= 22) ||
    (whichMonth == 1 && whichDayOfMonth <= 19)
  ) {
    zodiacSign = "cap";
  } else if (
    (whichMonth == 11 && whichDayOfMonth >= 22) ||
    (whichMonth == 12 && whichDayOfMonth <= 21)
  ) {
    zodiacSign = "sag";
  } else if (
    (whichMonth == 10 && whichDayOfMonth >= 24) ||
    (whichMonth == 11 && whichDayOfMonth <= 21)
  ) {
    zodiacSign = "sco";
  } else if (
    (whichMonth == 9 && whichDayOfMonth >= 23) ||
    (whichMonth == 10 && whichDayOfMonth <= 23)
  ) {
    zodiacSign = "lib";
  } else if (
    (whichMonth == 8 && whichDayOfMonth >= 23) ||
    (whichMonth == 9 && whichDayOfMonth <= 22)
  ) {
    zodiacSign = "vir";
  } else if (
    (whichMonth == 7 && whichDayOfMonth >= 23) ||
    (whichMonth == 8 && whichDayOfMonth <= 22)
  ) {
    zodiacSign = "leo";
  } else if (
    (whichMonth == 6 && whichDayOfMonth >= 22) ||
    (whichMonth == 7 && whichDayOfMonth <= 22)
  ) {
    zodiacSign = "can";
  } else if (
    (whichMonth == 5 && whichDayOfMonth >= 21) ||
    (whichMonth == 6 && whichDayOfMonth <= 21)
  ) {
    zodiacSign = "gem";
  } else if (
    (whichMonth == 4 && whichDayOfMonth >= 20) ||
    (whichMonth == 5 && whichDayOfMonth <= 20)
  ) {
    zodiacSign = "tau";
  } else if (
    (whichMonth == 3 && whichDayOfMonth >= 21) ||
    (whichMonth == 4 && whichDayOfMonth <= 19)
  ) {
    zodiacSign = "ari";
  } else if (
    (whichMonth == 2 && whichDayOfMonth >= 19) ||
    (whichMonth == 3 && whichDayOfMonth <= 20)
  ) {
    zodiacSign = "pis";
  } else if (
    (whichMonth == 1 && whichDayOfMonth >= 20) ||
    (whichMonth == 2 && whichDayOfMonth <= 18)
  ) {
    zodiacSign = "aqu";
  }

  console.log("AstroSign is: " + zodiacSign);

  CalculateZodiac(zodiacSign);
});
//click event listener for help button
_helpButton.addEventListener("click", function () {
  console.log("Help Button Clicked");

  // display title
  _modalHeaderText.innerHTML = "Welcome!";
  // display date range
  _modalDateRangeText.innerHTML =
    "Want to learn what London Underground line you are?";
  // display description
  _modalDescriptionText.innerHTML = "awersome!";

  _modalHeader.style.borderColor = "#e32119";
  // Show hide modal
  ShowModal();
});

/*
EVENT LISTENERS FOR ZODIAC BUTTONS
*/

//click event listener for aquarius button
_aquariusButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("aqu");
});
_piscesButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("pis");
});
_ariesButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("ari");
});
_taurusButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("tau");
});
_geminiButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("gem");
});
_cancerButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("can");
});
_leoButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("leo");
});
_virgoButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("vir");
});
_libraButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("lib");
});
_scorpioButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("sco");
});
_saggitariusButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("sag");
});
_capricornButton.addEventListener("click", function (evt) {
  const idName = evt.target.id;
  console.log(idName + " Clicked");
  CalculateZodiac("cap");
});
