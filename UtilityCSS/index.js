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

// Call the function to make it start moving immediately
setTimeout(generateRandomValues, 1);

// Set an interval to update the values every 20 seconds
setInterval(generateRandomValues, 20000);

function disableEnterAnimation() {
  const folderInitial = document.getElementsByClassName('folder');
  for (const folder of folderInitial) {
    folder.style.animation ='none';
  }
}

setTimeout(disableEnterAnimation, 2000);

/* Redirect to Netlify Deploy if on Github Pages */
const currentURL = window.location.href;

if (currentURL === "https://justaundre.github.io/UtilityThemes/" ) {
  window.location.href = "https://internetutils.netlify.app/UtilityThemes/";
}