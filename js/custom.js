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

// Generate breadcrumb dropdown
const breadcrumbTable = [
  { desc: 'Главная', icon: 'bi-grid-1x2', link: 'dashboard.html'},
  { desc: 'Рабочие порталы', icon: 'bi-grid-3x3-gap-fill', link: 'portals.html'},
  { desc: 'Онлайн утилиты', icon: 'bi-globe2', link: 'checker.html'},
  { desc: 'Оборудование', icon: 'bi-router', link: 'equipment.html'},
  { desc: 'Быстрая настройка', icon: 'bi-box2', link: 'quicksetup.html'},
  { desc: 'Шаблоны МБТК', icon: 'bi-person-badge', link: 'mbtk.html'},
  { desc: 'OLT команды', icon: 'bi-terminal', link: 'olt.html'}
];

const breadcrumbDropdown = document.querySelector('#breadcrumb-dropdown');
const rowsBreadcrumbTable = breadcrumbTable.map(data => {
  return `
     <li><a class="dropdown-item" href="${data.link}" aria-current="true"><i class="nav-icon bi ${data.icon}" aria-hidden="true"></i> ${data.desc}</a></li>
  `;
}).join('');
breadcrumbDropdown.innerHTML = rowsBreadcrumbTable;
// End: breadcrumb

// Footer
const footerTextContent = document.querySelector('#footer-text-content');
footerTextContent.innerHTML = `<small><u>Не является</u> официальным ресурсом РУП "Белтелеком" &nbsp;2026 &#128383;<small>`
// End: Footer

// Disclaimer
const devDisclaimer = document.querySelector('#devDisclaimer');
devDisclaimer.innerHTML = `
Возможны опечатки и неточности. Если обнаружили ошибку сообщите пожалуйста об этом разработчику. 
Портал Admin-123 <u>не является</u> разработкой либо официальным ресурсом РУП "Белтелеком"
`
// End: Disclaimer

// News block
const newsTable = [
  { date: '21/10/2026', desc: 'Добавлены фотографии ONU/ONT терминалов в список оборудования', link: 'equipment.html'},
  { date: '17/10/2026', desc: 'Обновлен список подразделений для перенаправления в разделе MBTK', link: 'mbtk.html'},
  { date: '14/10/2026', desc: 'Обновлен раздел FAQ', link: 'quicksetup.html'},
  { date: '10/10/2026', desc: 'Обновлен раздел рабочих порталов', link: 'portals.html'},
  { date: '10/09/2026', desc: 'Удалена страница диагностика сети из FAQ', link: 'quicksetup.html'},
  { date: '7/09/2026', desc: 'Добавлен поиск по регионам в шаблонах для МБТК', link: 'mbtk.html'},
  { date: '3/09/2026', desc: 'Добавлено оглавление в шаблонах MBTK и изменена шапка портала', link: 'mbtk.html'},
  { date: '30/08/2026', desc: 'Добавлены шаблоны Мой Белтелком (веб-версия)', link: 'mbtk.html'},
  { date: '21/08/2026', desc: 'Обновлен раздел быстрой настройки (FAQ) и основное меню', link: 'quicksetup.htm'},
  { date: '10/08/2026', desc: 'Обновлена информация по DSL модемам и приставкам ZALA', link: 'equipment.html#dsl'},
  { date: '2/08/2026', desc: 'Обновлена информация по Двух-диапазонным терминалам', link: 'equipment.html#dual-band'},
  { date: '29/07/2026', desc: 'Список рабочих порталов теперь расположен на отдельной вкладке', link: 'portals.html'}
];
const whatsnew = document.querySelector('#whatsnew');
const rowsNewsTable = newsTable.map(data => {
  return `
    <a href="${data.link}" class="list-group-item list-group-item-action">
      ${data.desc}<br>
      <small class="text-secondary icon-link icon-link-hover"><i class="bi bi-arrow-return-right"></i> Перейти &nbsp; ${data.date}</small>
    </a>
  `;
}).join('');
whatsnew.innerHTML = rowsNewsTable;
// End: News block

// Generate sidebar menu
// const sidebarMenuTable = [
//   { desc: 'Главная', icon: 'bi-grid-1x2', link: 'dashboard.html'},
//   { desc: 'Оборудование', icon: 'bi-router', link: 'equipment.html'},
//   { desc: 'Рабочие порталы', icon: 'bi-grid-3x3-gap-fill', link: 'portals.html'},
//   { desc: 'Онлайн утилиты', icon: 'bi-globe2', link: 'checker.html'},
//   { desc: 'FAQ', icon: 'bi-patch-question', link: 'quicksetup.html'},
//   { desc: 'Шаблоны МБТК', icon: 'bi-person-badge', link: 'mbtk.html'},
//   { desc: 'OLT команды', icon: 'bi-terminal', link: 'olt.html'}
// ];

// const currentPath = window.location.pathname; 
// const currentPageName = currentPath.split('/').filter(Boolean).pop(); 
// const sidebarMenu = document.querySelector('#sidebar-menu');
// const rowsSidebarTable = sidebarMenuTable.map(data => {
//   return `<li class="nav-item"><a href="${data.link}" class="nav-link"><i class="nav-icon bi ${data.icon}" aria-hidden="true"></i><p>${data.desc}</p></a></li>`;
// }).join('');
// sidebarMenu.innerHTML = rowsSidebarTable;