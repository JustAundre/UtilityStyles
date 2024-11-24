// Imports some JS Library that's needed.
  const deviceJs = document.createElement('script');
  deviceJs.crossorigin = 'anonymous';
  deviceJs.referrerpolicy = 'no-referrer';
  deviceJs.src = `https://cdnjs.cloudflare.com/ajax/libs/device.js/0.2.7/device.min.js`;
  document.head.appendChild(deviceJs);
//
// Create the series of elements used to do the blocking
  // Create the main div element
    const tabExpandDiv = document.createElement('div');
    tabExpandDiv.classList.add('tabExpand');
    tabExpandDiv.id = 'tabExpand';
    document.body.appendChild(tabExpandDiv);
  //

  // Create the expand icon image
    const expandIcon = document.createElement('img');
    expandIcon.src = `/Global Media/Graphics/Expand.svg`;
    expandIcon.classList.add('expandIcon');
    expandIcon.id = 'expandIcon';
    tabExpandDiv.appendChild(expandIcon);
  //

  // Create the preloaded GIF image
    const preloadGif = document.createElement('img');
    preloadGif.loading = 'lazy';
    preloadGif.style.display = 'none';
    preloadGif.src = `/Global Media/Graphics/Expand Tab.gif`;
    tabExpandDiv.appendChild(preloadGif);
  //

  // Create the alert span
    const tabExpandAlert = document.createElement('span');
    tabExpandAlert.classList.add('tabExpandAlert');
    tabExpandAlert.id = 'tabExpandAlert';
    tabExpandAlert.innerText = 'Please rotate your display or expand your tab horizontally.';
    tabExpandDiv.appendChild(tabExpandAlert);
  //