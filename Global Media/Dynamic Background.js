// Sets a JS variable for the root, something usually used in CSS for global CSS variables
  const root = document.documentElement;
//
// An anyways true if statement to make the variables non-global variables
  if (true) {
    // Creates the background elements
      blueBlur = document.createElement('div');
      salmonBlur = document.createElement('div');
      blurpleBlur = document.createElement('div');
      baseBg = document.createElement('div')
      document.body.appendChild(baseBg);
      baseBg.appendChild(blurpleBlur);
      baseBg.appendChild(salmonBlur);
      baseBg.appendChild(blueBlur);
    //
    // Defines their classes
      baseBg.classList.add('linear-gradient');
      baseBg.id = 'linear-gradient';
      blurpleBlur.classList.add('blurple-blur');
      blurpleBlur.classList.add('blur');
      blurpleBlur.id = 'blurple-blur blur';
      salmonBlur.classList.add('salmon-blur');
      salmonBlur.classList.add('blur');
      salmonBlur.id = 'salmon-blur blur';
      blueBlur.classList.add('blue-blur');
      blueBlur.classList.add('blur');
      blueBlur.id = 'blue-blur blur';
    //
  }
//

function generateRandomXY() {
  // Generates 6 random X/Y values
    const x1 = `${ Math.round( Math.random() * 100 - 50 ) }vw`;
    const x2 = `${ Math.round( Math.random() * 100 - 50 ) }vw`;
    const x3 = `${ Math.round( Math.random() * 100 - 50 ) }vw`;
    const y1 = `${ Math.round( Math.random() * 100 - 50 ) }vh`;
    const y2 = `${ Math.round( Math.random() * 100 - 50 ) }vh`;
    const y3 = `${ Math.round( Math.random() * 100 - 50 ) }vh`;
  //
  // Assigns the 6 random X/Y values to :root
    root.style.cssText =`--x1: ${x1}; --x2: ${x2}; --x3: ${x3}; --y1: ${y1}; --y2: ${y2}; --y3: ${y3};`;
  //
}

// Call the function initially to set the initial values, make it move immediately, then make it change directions every 20 seconds
  generateRandomXY();
  setTimeout(generateRandomXY, 1);
  setInterval(generateRandomXY, 20000);
//