// Defines elements
const packDetails = document.querySelector(".packDetails");
const permissions = document.querySelector(".termsOfUse");
const updateLog = document.querySelector(".updateLog");

function detailsClick() {
  // Sets the button to inactive if it was already active and was clicked.
  if (packDetails.hasAttribute("active")) {
    packDetails.removeAttribute("active")
  }
  // Changes the default button CSS to indicate it is selected only if it isn't already selected.
  else {
  packDetails.setAttribute("active", "")
  permissions.removeAttribute("active")
  updateLog.removeAttribute("active")
  }
}
function permissionsClick() {
  if (permissions.hasAttribute("active")) {
    permissions.removeAttribute("active")
  }
  else {
  packDetails.removeAttribute("active")
  permissions.setAttribute("active", "")
  updateLog.removeAttribute("active")
  }
}
function updateLogClick() {
  if (updateLog.hasAttribute("active")) {
    updateLog.removeAttribute("active")
  }
  else {
  packDetails.removeAttribute("active")
  permissions.removeAttribute("active")
  updateLog.setAttribute("active", "")
  }
}

function generateRandomValues() {
  const x1 = Math.round(Math.random() * 100) - 50;
  const x2 = Math.round(Math.random() * 100) - 50;
  const x3 = Math.round(Math.random() * 100) - 50;
  const y1 = Math.round(Math.random() * 100) - 50;
  const y2 = Math.round(Math.random() * 100) - 50;
  const y3 = Math.round(Math.random() * 100) - 50;

  document.documentElement.style.setProperty(
    '--x1', `${x1}vw` );
  document.documentElement.style.setProperty(
    '--x2', `${x2}vw` );
  document.documentElement.style.setProperty(
    '--x3', `${x3}vw` );
  document.documentElement.style.setProperty(
    '--y1', `${y1}vh` );
  document.documentElement.style.setProperty(
    '--y2', `${y2}vh` );
  document.documentElement.style.setProperty(
    '--y3', `${y3}vh` );
}

// Call the function initially to set the initial values
generateRandomValues();

// Set an interval to update the values every 20 seconds
setInterval(generateRandomValues, 20000);

/* Redirect to Netlify Deploy if on Github Pages */
function checkAndRedirect(targetURL, redirectURL) {
  const currentURL = window.location.href;

  if (currentURL === "https://justaundre.github.io/DarkerMode/" ) {
    window.location.href = "https://darkermode.netlify.app";
  }
}

checkAndRedirect("https://justaundre.github.io/UtilityThemes/", "https://darkermode.netlify.app/");