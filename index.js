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
    document.querySelector("#tip").setAttribute("style", "opacity: 0; font-size: 20px;")
    switchCount += 1
  }
})

async function fetchFileTree(path = '') {
  try {
    const response = await fetch(`https://api.github.com/repos/JustAundre/UtilityStyles/contents/css/${path}`, { headers: {'X-GitHub-Api-Version': '2022-11-28'} })
    if (response.ok) { console.log(`HTTP success to Github API with code ${response.status}`) }
    else { console.error(`HTTP error to Github API with code ${response.status}`) }

    data = await response.json()
    var orderInc = 1
    for (const item of data) {
      var element = document.createElement("div")
      element.setAttribute("path", item.path.replace("css/", ""))
      element.innerText = item.path.replace("css/", "")
      element.setAttribute("item-type", item.type)
      element.setAttribute("style", `--layer: ${item.path.replace("css/", "").split("/").length - 1}; order: ${orderInc};`)
      orderInc += 2
      document.querySelector("#tree").appendChild(element)
    }
  } catch (error) { console.error('Error fetching file tree:', error) }
}
fetchFileTree()

function rescaleTip() {
  if (document.querySelector("#tip").clientWidth < document.querySelector("#tip > span").clientWidth) {
    var scaleDown = document.querySelector("#tip").clientWidth / document.querySelector("#tip > span").clientWidth - .1
    document.querySelector("#tip").setAttribute("style", `scale: ${scaleDown};`)
  }
  if (document.querySelector("#tip").clientHeight < document.querySelector("#tip > span").clientHeight) {
    var scaleDown = document.querySelector("#tip").clientHeight / document.querySelector("#tip > span").clientHeight - .01
    document.querySelector("#tip").setAttribute("style", `scale: ${scaleDown};`)
  }
}

setTimeout(() => { rescaleTip() }, 300);
window.addEventListener("resize", () => { rescaleTip() })