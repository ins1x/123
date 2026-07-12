/*!
 * Custom scripts
 */

// <!-- sortablejs -->
// new Sortable(document.querySelector('.connectedSortable'), {
//   group: 'shared',
//   handle: '.card-header',
// });
// const cardHeaders = document.querySelectorAll('.connectedSortable .card-header');
// cardHeaders.forEach((cardHeader) => {
//   cardHeader.style.cursor = 'move';
// });


// Enable Bootstrap popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Enable Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// End: Bootstrap utils

// Locale checker
const userLocale = navigator.language || navigator.userLanguage;
const ruLocale = 'ru'; 
if (!userLocale.startsWith(ruLocale)) {
  document.getElementsByTagName("BODY")[0].style.display = "none";
}
// End:Local checker

// Back to top button
let backToTopBtn = document.getElementById("btn-back-to-top");
// On scroll event
window.onscroll = function () {
  scrollFunction();
};
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End:Back to top button


// Toggle large font 
const largeFontBtn = document.getElementById('toggleLargeFontBtn');
largeFontBtn.addEventListener('click', () => {
  document.body.classList.toggle('font-large');
});
// End: Toggle Large font