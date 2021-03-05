// Get current year for footer

document.getElementById("currentYear").innerHTML = new Date().getFullYear();


// Navigation Menu Overlay Functionality
// Inspiration: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

var navigation = document.getElementById("myNav");

/* Open */
function openNav() {
    navigation.style.height = "100vh";
}

/* Close */
function closeNav() {
    navigation.style.height = "0vh";
}