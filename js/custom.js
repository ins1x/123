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