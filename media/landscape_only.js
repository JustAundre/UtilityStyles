// Find the orientation of the user"s screen
function findOrientation() {
  if (window.innerWidth <= window.innerHeight) {
    root.classList.add("portrait");
    root.classList.remove("landscape");
  } else {
    root.classList.add("landscape");
    root.classList.remove("portrait");
  }
}
findOrientation()
window.addEventListener("resize", findOrientation);
screen.orientation.addEventListener("change", findOrientation);

/*
// Create the series of elements used to do the blocking
// Create the main div element
const tabExpandDiv = document.createElement("div");
tabExpandDiv.classList.add("tabExpand");
tabExpandDiv.id = "tabExpand";
document.body.appendChild(tabExpandDiv);

// Create the expand icon image
const expandIcon = document.createElement("img");
expandIcon.src = `/global_files/graphics/expand_tab_unfufilled.svg`;
expandIcon.classList.add("expandIcon");
expandIcon.id = "expandIcon";
tabExpandDiv.appendChild(expandIcon);

// Create the preloaded GIF image
const preloadGif = document.createElement("img");
preloadGif.loading = "lazy";
preloadGif.style.display = "none";
preloadGif.src = `/Global Media/Graphics/Expand Tab.gif`;
tabExpandDiv.appendChild(preloadGif);

// Create the alert text
const tabExpandAlert = document.createElement("span");
tabExpandAlert.classList.add("tabExpandAlert");
tabExpandAlert.id = "tabExpandAlert";
tabExpandAlert.innerText = "Please rotate your display or expand your tab horizontally.";
tabExpandDiv.appendChild(tabExpandAlert);
*/