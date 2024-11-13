/* Redirect to Netlify Deploy if on Github Pages */
  if (window.location.href.includes(`github.io`)) { window.location.href = `https://internetutils.netlify.app/DarkerMode/`; }

// Defines elements
  // Sets a JS variable for the header buttons button
  const packDetails = document.querySelector(`.packDetails`);
  const termsOfUse = document.querySelector(`.termsOfUse`);
  const updateLog = document.querySelector(`.updateLog`);
/* Sets a JS variable for the root, something usually used in CSS for global CSS variables */
const root = document.documentElement;

function detailsClick() {
  // Sets the button to inactive if it was already active and was clicked.
  if (packDetails.hasAttribute(`active`)) { packDetails.removeAttribute(`active`); }
  else {
    // Changes the default button CSS to indicate it is selected only if it isn`t already selected.
    packDetails.style(`active`);
    termsOfUse.removeAttribute(`active`);
    updateLog.removeAttribute(`active`);
  }
}
function termsOfUseClick() {
  if (termsOfUse.hasAttribute(`active`)) { termsOfUse.removeAttribute(`active`); }
  else {
    packDetails.removeAttribute(`active`);
    termsOfUse.style(`active`);
    updateLog.removeAttribute(`active`);
  }
}
function updateLogClick() {
  if (updateLog.hasAttribute(`active`)) { updateLog.removeAttribute(`active`); }
  else {
    packDetails.removeAttribute(`active`);
    termsOfUse.removeAttribute(`active`);
    updateLog.style(`active`);
  }
}

function generateRandomXY() {
  // Generates 6 random X/Y values
    const x1 = `${ Math.round( Math.random() * 100 - 50 ) }vw`;
    const x2 = `${ Math.round( Math.random() * 100 - 50 ) }vw`;
    const x3 = `${ Math.round( Math.random() * 100 - 50 ) }vw`;
    const y1 = `${ Math.round( Math.random() * 100 - 50 ) }vh`;
    const y2 = `${ Math.round( Math.random() * 100 - 50 ) }vh`;
    const y3 = `${ Math.round( Math.random() * 100 - 50 ) }vh`;
  // Assigns the 6 random X/Y values to :root
    root.style.setProperty(`--x1`, x1);
    root.style.setProperty(`--x2`, x2);
    root.style.setProperty(`--x3`, x3);
    root.style.setProperty(`--y1`, y1);
    root.style.setProperty(`--y2`, y2);
    root.style.setProperty(`--y3`, y3);
}

// Call the function initially to set the initial values
generateRandomXY();

// Call the function to make it start moving immediately
setTimeout(generateRandomXY, 1);

// Set an interval to update the values every 20 seconds
setInterval(generateRandomXY, 20000);