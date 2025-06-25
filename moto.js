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

const bikeData = {
  "Ducati Panigale V4": {
    engine: "1103cc V4",
    horsepower: "214 HP",
    topSpeed: "299+ km/h",
    weight: "198 kg",
    features: "Quick shifter, ABS Cornering, TFT Display"
  },
  "BMW R 1250 GS": {
    engine: "1254cc Boxer",
    horsepower: "136 HP",
    topSpeed: "200+ km/h",
    weight: "249 kg",
    features: "Telelever Suspension, Ride Modes Pro, TFT Dash"
  },
  "Harley Iron 883": {
    engine: "883cc Air-cooled V-Twin",
    horsepower: "49 HP",
    topSpeed: "165 km/h",
    weight: "256 kg",
    features: "Classic styling, Belt Drive, Low-slung stance"
  },
  "Kawasaki ZX-10R": {
    engine: "998cc Inline-4",
    horsepower: "203 HP",
    topSpeed: "299+ km/h",
    weight: "207 kg",
    features: "KQS, KTRC, Launch Control"
  },
  "RE Himalayan": {
    engine: "411cc Single-cylinder",
    horsepower: "24.3 HP",
    topSpeed: "120 km/h",
    weight: "199 kg",
    features: "Long Travel Suspension, Digital Compass, Rear Rack"
  }
};

document.querySelectorAll('.bike-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.bike-title').innerText;
    const details = bikeData[title];

    const modal = document.createElement('div');
    modal.className = 'bike-modal';
    modal.innerHTML = `
      <div class="bike-modal-content">
        <span class="close-modal">&times;</span>
        <h2>${title}</h2>
        <p><strong>Engine:</strong> ${details.engine}</p>
        <p><strong>Horsepower:</strong> ${details.horsepower}</p>
        <p><strong>Top Speed:</strong> ${details.topSpeed}</p>
        <p><strong>Weight:</strong> ${details.weight}</p>
        <p><strong>Key Features:</strong> ${details.features}</p>
      </div>
    `;

    document.body.appendChild(modal);
    document.querySelector('.close-modal').onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
