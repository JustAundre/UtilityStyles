// Can absolutely be optimized, but I'll get to that when I learn how.
const cssHrefElementsNode = document.querySelectorAll('link[rel="stylesheet"]');
const cssHrefElements = Array.from(cssHrefElementsNode);
const cssHrefs = cssHrefElements.map(Element => Element.href);
console.log(cssHrefs);
cssHrefElements.forEach(element => {
  const downloadElement = document.createElement("a");
  downloadElement.href = element.href;
  downloadElement.download;
  downloadElement.click();
})