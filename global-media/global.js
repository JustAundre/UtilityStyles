// General functions 
const
root = document.documentElement; // The root of the document; the HTML element
now = new Date(); // Sets "now" as a new Date object (Used for time-related operations)
let options; // A constantly changing variable representative of the options rng() gets to choose from
// Function to call for a random value between an automatically adjusting range
function rng(options) {
  if (options) { return(Math.round(Math.random() * (options.length - 1))); }
  else return(Math.round(Math.random()));
}

// Basic user data
const user = {};
if (document.cookie) { user.name = document.cookie; }
else {
  options = ["programmer", "coder", "stranger", "user", "guest", "old friend", "friend", "traveler", "visitor",];
  user.name = options[rng(options)];
  document.cookie = user.name;
}
user.hour = now.getHours();
user.generalTime = (function () {
  if (user.hour >= 4 && user.hour < 12) { return("morning"); }
  else if (user.hour >= 12 && user.hour < 16) { return("afternoon"); }
  else return("evening");
})();
user.utcOffset = Math.abs(Number(`${now.getUTCFullYear()}${now.getUTCMonth() + 1}${now.getUTCDate()}`) - Number(`${now.getFullYear()}${(now.getMonth() + 1)}${now.getDate()}`)); // Subtracts the user's date string (year, month, day) from the UTC date string and then converts it to an absolute number (force to positive number if negative) to find their absolute difference from the UTC date.
if (user.utcOffset > 1) { user.name = "time traveler"; } // If their offset is greater than 1 day, they are marked as "time traveler"

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