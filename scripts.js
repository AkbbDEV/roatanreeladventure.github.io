// Function to toggle the active class for the navigation links
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Event listener for the menu button
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
