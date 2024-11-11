// Can absolutely be optimized, but I'll get to that when I learn how.
const cssHrefElementsNode = document.querySelectorAll('link[rel="stylesheet"]');
const cssHrefElements = Array.from(cssHrefElementsNode);
const cssHrefs = cssHrefElements.map(element => element.href);
cssHrefElements.forEach(element => {
  const a = document.createElement('a');
  a.href = element.href;
  a.download;
  a.click();
})