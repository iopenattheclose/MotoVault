document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Functionality ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme'); // Get saved theme

    // Apply saved theme on load, or default to dark theme
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        // Default to dark theme if no preference is saved
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); // Save default preference
    }

    // Toggle theme on button click
    if (themeToggle) { // Ensure button exists before adding listener
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
    }

    // --- Dynamic Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Image Modal Functionality ---
    const bikeCards = document.querySelectorAll('.bike-card');
    let modal = null; // To hold the modal element

    bikeCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('.bike-image').src;
            const title = card.querySelector('.bike-title').textContent;
            const desc = card.querySelector('.bike-desc').textContent;
            const specs = card.querySelector('.specs').textContent;

            // Create modal elements
            modal = document.createElement('div');
            modal.classList.add('bike-modal');
            modal.classList.add('active'); // Activate the modal

            modal.innerHTML = `
                <div class="bike-modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${imgSrc}" alt="${title}" style="max-width: 100%; height: auto; border-radius: 5px; margin-bottom: 1rem;">
                    <h2>${title}</h2>
                    <p>${desc}</p>
                    <p class="modal-specs"><strong>Specs:</strong> ${specs}</p>
                </div>
            `;
            document.body.appendChild(modal);

            // Add event listener to close modal
            const closeModalBtn = modal.querySelector('.close-modal');
            closeModalBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                // Give time for transition before removing from DOM
                setTimeout(() => {
                    if (modal && modal.parentNode) {
                        modal.parentNode.removeChild(modal);
                        modal = null; // Clear reference
                    }
                }, 300);
            });

            // Close modal if clicking outside the content
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    setTimeout(() => {
                        if (modal && modal.parentNode) {
                            modal.parentNode.removeChild(modal);
                            modal = null; // Clear reference
                        }
                    }, 300);
                }
            });
        });
    });
});