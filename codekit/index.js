// Creates the "container" for animations for 5items in the scroller 
const itemAnimations = document.createElement("style");
itemAnimations.id = "itemAnimations";
document.head.appendChild(itemAnimations);

// Do the following when the folder is clicked/released/hovered/unhovered
function folderClick(id) {
  itemAnimations.textContent = `
    #${id} {
      transition: 100ms linear;
      opacity: .75;
      scale: .9;
    }
  `;
}
let hoverAnimation = true;
function folderMouseEnter(id) {
  try { while (hoverAnimation) { hoverAnimation = false; } }
  catch (Error) { hoverAnimation = false; }
}
function folderMouseExit(id) {
  hoverAnimation = false;
  itemAnimations.textContent = `#${id} { transition: 250ms ease-out; }`;
  throw new Error("Stop hover animation")
}

function addEventListenerToAllFolders() {
  let folders = Array.from(document.querySelectorAll(".folder"));
  folders.forEach(element => {
    let id = element.id;
    element.setAttribute("onmousedown", `folderClick("${id}")`);
    element.setAttribute("onmouseup", `folderMouseExit("${id}")`);
    element.setAttribute("onmouseenter", `folderMouseEnter("${id}")`);
    element.setAttribute("onmouseleave", `folderMouseExit("${id}")`);
    console.log(id);
  });
  console.log("Event listeners declared");
}
addEventListenerToAllFolders();