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