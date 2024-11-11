/* Redirect to Netlify Deploy if on Github Pages */
if (window.location.href.includes(`github.io`)) { window.location.href = "https://internetutils.netlify.app/UtilityThemes/"; }

const folderInitial = document.querySelector(`.folder`);

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

// Remove folder entrance animation property after 2 seconds have passed
setTimeout(function() { folder.style.animation = `none`; }, 2000);