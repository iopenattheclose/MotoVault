document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Functionality ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on load, or default to dark theme
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        // Default to dark theme if no preference is saved
        body.classList.add('dark-theme'); // Changed this line to 'dark-theme'
        localStorage.setItem('theme', 'dark-theme'); // Also set it in local storage
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // --- Dynamic Welcome Message ---
    const dynamicMessageDiv = document.getElementById('dynamic-message');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning, Rider!";
    } else if (hour < 18) {
        greeting = "Good Afternoon, Rider!";
    } else {
        greeting = "Good Evening, Rider!";
    }

    dynamicMessageDiv.textContent = greeting;
    dynamicMessageDiv.style.marginTop = '20px';
    dynamicMessageDiv.style.fontSize = '1.2em';
    dynamicMessageDiv.style.color = 'var(--text-color)'; // Use CSS variable for color

    // --- Dynamic Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});