// Defines elements
// Sets a JS variable for the header buttons button
const
packDetails = document.querySelector("#packDetails"),
termsOfUse = document.querySelector("#termsOfUse"),
updateLog = document.querySelector("#updateLog"),
allButtons = Array.from(document.querySelectorAll(".headerButton"));

// If a button is clicked..
function toggleButton(element) {
  // If it is active, make it no longer active
  if (element.hasAttribute("a")) { element.removeAttribute("a"); }
  // If it isn"t active, make everything inactive and then only active it
  else {
    allButtons.forEach(element => { element.removeAttribute("a"); });
    element.setAttribute("a", "");
  }
}