// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Ha Ha, AppSec (Matt) Tricked You !</h1>`;
window.alert('XSS Code Runs in Here');