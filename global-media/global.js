// General functions 
const
root = document.documentElement; // The root of the document; the HTML element
now = new Date(); // Sets "now" as a new Date object (Used for time-related operations)
// Function to call for a random value between an automatically adjusting range
function rng(num, noRound) {
  if (noRound === true) {
    if (num > 0) { return(Math.random() * (num - 1)); }
    else { return(Math.random()); }
  }
  else {
    if (num > 0) { return(Math.round(Math.random() * (num - 1))); }
    else { return(Math.round(Math.random())); }
  }
}
// Function to pull a value from the cookie based on the value's name
function getCookie(cookieName) {
  for (let data of document.cookie.split("; ")) {
    data = data.split("=");
    if (data[0] === cookieName) { return data[1]; }
  }
}

// Imports globally and locally used resources (resources used on all pages in this repository and ones specific to one page)
{
  const
  importGlobalCss = document.createElement("link"),
  importLocalCss = document.createElement("link"),
  importLocalJs = document.createElement("script");	
  //
  importGlobalCss.href = "/UtilityStyles/global-media/global.css";
  importLocalCss.href = "index.css";
  importLocalJs.src = "index.js";
  //
  importGlobalCss.rel = "stylesheet";
  importLocalCss.rel = "stylesheet";
  importLocalJs.defer = true;
  //
  document.head.appendChild(importLocalJs);
  document.head.appendChild(importGlobalCss);
  document.head.appendChild(importLocalCss);
}