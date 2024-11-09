/* Redirect to Netlify Deploy if on Github Pages */
if (window.location.href === 'https://justaundre.github.io/InternetUtilities/DarkerMode/' ) { window.location.href = 'https://internetutils.netlify.app/DarkerMode/'; }

// Defines elements
const packDetails = document.querySelector('.packDetails');
const permissions = document.querySelector('.termsOfUse');
const updateLog = document.querySelector('.updateLog');
const root = document.querySelector(':root')

function detailsClick() {
  // Sets the button to inactive if it was already active and was clicked.
  if (packDetails.hasAttribute('active')) { packDetails.removeAttribute('active'); }
  else {
    // Changes the default button CSS to indicate it is selected only if it isn't already selected.
    packDetails.setAttribute('active', '');
    permissions.removeAttribute('active');
    updateLog.removeAttribute('active');
  }
}
function permissionsClick() {
  if (permissions.hasAttribute('active')) { permissions.removeAttribute('active'); }
  else {
    packDetails.removeAttribute('active');
    permissions.setAttribute('active', '');
    updateLog.removeAttribute('active');
  }
}
function updateLogClick() {
  if (updateLog.hasAttribute('active')) { updateLog.removeAttribute('active'); }
  else {
    packDetails.removeAttribute('active');
    permissions.removeAttribute('active');
    updateLog.setAttribute('active', '');
  }
}

function generateRandomXY() {
  const x1 = Math.round(Math.random() * 100 - 50);
  const x2 = Math.round(Math.random() * 100 - 50);
  const x3 = Math.round(Math.random() * 100 - 50);
  const y1 = Math.round(Math.random() * 100 - 50);
  const y2 = Math.round(Math.random() * 100 - 50);
  const y3 = Math.round(Math.random() * 100 - 50);

  root.setAttribute('--x1', `${x1}vw` );
  root.setAttribute('--x2', `${x2}vw` );
  root.setAttribute('--x3', `${x3}vw` );
  root.setAttribute('--y1', `${y1}vh` );
  root.setAttribute('--y2', `${y2}vh` );
  root.setAttribute('--y3', `${y3}vh` );
}

// Call the function initially to set the initial values
generateRandomXY();

// Call the function to make it start moving immediately
setTimeout(generateRandomXY, 1);

// Set an interval to update the values every 20 seconds
setInterval(generateRandomXY, 20000);
