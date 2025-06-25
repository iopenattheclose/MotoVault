// Toggle between dark and light themes
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Click to zoom bike images
document.querySelectorAll('.bike-image').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});
