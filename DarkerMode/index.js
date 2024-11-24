/* Redirect to Netlify Deploy if on Github Pages */
  if (window.location.href.includes('github.io')) { window.location.href = 'https://internetutils.netlify.app/DarkerMode/'; }
//

// Defines elements
  // Sets a JS variable for the header buttons button
    const details = document.querySelector('.packDetails');
    const tos = document.querySelector('.termsOfUse');
    const log = document.querySelector('.updateLog');
  //
//
function tosClick() {
  if (tos.hasAttribute('a')) { tos.removeAttribute('a') }
  else {
    tos.toggleAttribute('a');
    details.removeAttribute('a');
    log.removeAttribute('a');
  }
}
function detailsClick() {
  if (details.hasAttribute('a')) { details.removeAttribute('a') }
  else {
    tos.removeAttribute('a');
    details.toggleAttribute('a');
    log.removeAttribute('a');
  }
}
function logClick() {
  if (log.hasAttribute('a')) { log.removeAttribute('a') }
  else {
    tos.removeAttribute('a');
    details.removeAttribute('a');
    log.toggleAttribute('a');
  }
}