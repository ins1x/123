/*!
 * Custom scripts
 */

// Enable Bootstrap popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Enable Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// End: Bootstrap utils

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

// Simple keywords highlight at page search
const searchBar = document.getElementById('searchBar'); 
const searchBtn = document.getElementById('searchBtn'); 
const searchClearBtn = document.getElementById('searchClearBtn'); 
var markContext, markInstance;

// Search on pressed 'Enter' key
searchBar.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    const searchValue = event.target.value;
    if (searchValue.trim() === '') {
      searchBar.focus();
      return;
    }
    find(searchValue)
    markContext = document.querySelector(".app-wrapper");
    markInstance = new Mark(markContext);
    markInstance.unmark();
    markInstance.mark(searchBar.value);
  }
});

// Unmark search on ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    markContext = document.querySelector(".app-wrapper");
    markInstance = new Mark(markContext);
    markInstance.unmark();
  }
});

// If search input is empty - unmark context
searchBar.addEventListener('input', function(event) {
  const searchValue = event.target.value; 
  if (searchValue.trim() === '') {
    markContext = document.querySelector(".app-wrapper");
    markInstance = new Mark(markContext);
    markInstance.unmark();
  }
});

// Search on press search button 
searchBtn.addEventListener("click", ()=>{
  if (searchBar.value.trim() === '') {
    searchBar.focus();
    return;
  }
  find(searchBar.value)
  markContext = document.querySelector(".app-wrapper");
  markInstance = new Mark(markContext);
  markInstance.unmark();
  markInstance.mark(searchBar.value); 
});
// End: Page search