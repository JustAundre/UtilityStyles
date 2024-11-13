/* Redirect to Netlify Deploy if on Github Pages */ if (window.location.href.includes(`github.io`)) { window.location.href = "https://internetutils.netlify.app/UtilityThemes/"; }
// Sets a JS variable representing the root; something usually used in CSS for global CSS variables
  const root = document.documentElement;
// Sets a JS variable representing the folders
  const folderInitial = document.querySelector(`.folder`);

function generateRandomXY() {
  // Generates 6 random X/Y values
    const x1 = `${Math.round( Math.random() * 100 - 50 )}vw`;
    const x2 = `${Math.round( Math.random() * 100 - 50 )}vw`;
    const x3 = `${Math.round( Math.random() * 100 - 50 )}vw`;
    const y1 = `${Math.round( Math.random() * 100 - 50 )}vh`;
    const y2 = `${Math.round( Math.random() * 100 - 50 )}vh`;
    const y3 = `${Math.round( Math.random() * 100 - 50 )}vh`;
  // Assigns the 6 random X/Y values to :root
    root.style.cssText = `
      --x1: ${x1};
      --x2: ${x2};
      --x3: ${x3};
      --y1: ${y1};
      --y2: ${y2};
      --y3: ${y3};`;
}

// Call the function initially to set the initial values
generateRandomXY();

// Call the function to make it start moving immediately
setTimeout(generateRandomXY, 1);

// Set an interval to update the values every 20 seconds
setInterval(generateRandomXY, 20000);

// Remove folder entrance animation property after 2 seconds have passed
setTimeout(function() { folder.style.animation = `none`; }, 2000);