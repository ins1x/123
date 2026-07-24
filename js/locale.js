/*!
 * Locale checker
 */

const userLocale = navigator.language || navigator.userLanguage;
const ruLocale = 'ru'; 
if (!userLocale.startsWith(ruLocale)) {
  document.getElementsByTagName("BODY")[0].style.display = "none";
}

// Europe/Minsk
// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)