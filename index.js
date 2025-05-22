{
  var tip = document.createElement("span")
  tip.innerHTML = "<span>< Click on the edges to switch color themes ></span>"
  tip.id = "tip"
  document.documentElement.appendChild(tip)
}

let colorTheme;
if (window.matchMedia("(prefers-color-scheme: dark)")) {
  colorTheme = "dark"
  document.documentElement.setAttribute("color-theme", colorTheme)
  document.documentElement.setAttribute("detected-color-theme", "dark")
} else {
  colorTheme = "light"
  document.documentElement.setAttribute("color-theme", colorTheme)
  document.documentElement.setAttribute("detected-color-theme", "light")
}

function flipColorTheme() {
  if (colorTheme === "dark") {
    colorTheme = "light"
    document.documentElement.setAttribute("color-theme", colorTheme)
  } else {
    colorTheme = "dark"
    document.documentElement.setAttribute("color-theme", colorTheme)
  }
}

let switchCount = 0
let interval = setInterval(function() {
  if (switchCount >= 10) {
    document.body.querySelector("h2").innerHTML = ".. What are you doing?"
  } else {
    if (document.body.querySelector("h2").innerHTML === ".. What are you doing?") {
      document.body.querySelector("h2").innerHTML = ".. Okay."
      document.removeEventListener("click")
      clearInterval(interval)
    }
  }
  switchCount = 0
}, 5000)
document.addEventListener("click", function(event) {
  if (!document.body.contains(event.target)) { 
    flipColorTheme()
    tip.setAttribute("style", "opacity: 0; font-size: 20px;")
    switchCount += 1
  }
})

async function fetchFileTree(path, parent) {
  try {
    if (path === undefined) { path = "" }
    if (!parent) { parent = "#tree" }
    const response = await fetch(`https://api.github.com/repos/JustAundre/UtilityStyles/contents/css/${path}`, { headers: {'X-GitHub-Api-Version': '2022-11-28'} })
    if (response.ok) { console.log(`HTTP success to Github API with code ${response.status}`) }
    else { console.error(`HTTP error to Github API with code ${response.status}`) }

    data = await response.json()
    for (const item of data) {
      var element = document.createElement("div")
      element.setAttribute("data-path", item.path.replace("css/", ""))
      element.innerHTML = `<span>${item.path.replace("css/", "")}</span>`
      element.setAttribute("style", `--layer: ${item.path.replace("css/", "").split("/").length - 1};`);
      element.setAttribute("layer", item.path.replace("css/", "").split("/").length - 1)
      element.setAttribute("item-type", item.type)
      document.querySelector(parent).appendChild(element)
    }
  } catch (error) { console.error('Error fetching file tree:', error) }
}
fetchFileTree()
document.querySelector('#tree').addEventListener("click", function(event) {
  fetchFileTree(event.target.dataset.path, `[data-path="${event.target.dataset.path}"]`)
})

function rescaleTip() {
  var tip = document.querySelector("#tip")
  var tipInside = document.querySelector("#tip > span")
  if (!tip.clientWidth < tipInside.clientWidth && !tip.clientHeight < tipInside.clientHeight) { tip.setAttribute("style", "scale: 1;") }
  if (tip.clientWidth < tipInside.clientWidth) {
    var scaleDown = tip.clientWidth / tipInside.clientWidth - .1
    tip.setAttribute("style", `scale: ${scaleDown};`)
  }
  if (tip.clientHeight < tipInside.clientHeight) {
    var scaleDown = tip.clientHeight / tipInside.clientHeight - .01
    tip.setAttribute("style", `scale: ${scaleDown};`)
  }
}

addEventListener("DOMContentLoaded", rescaleTip())
window.addEventListener("resize", () => { rescaleTip() })