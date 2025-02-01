//form validation checker
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const errorDiv = document.getElementById("error-message");

      if (name === "" || email === "" || message === "") {
          errorDiv.textContent = "All fields are required!";
          errorDiv.style.color = "red";
      } else if (!isValidEmail(email)) {
          errorDiv.textContent = "Please enter a valid email address!";
          errorDiv.style.color = "red";
      } else {
          errorDiv.textContent = "Form submitted successfully!";
          errorDiv.style.color = "green";
      }
  });

  function isValidEmail(email) {
      const emailTester = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailTester.test(email);
  }
});


// countdown clock
const tournamentDate = new Date("2025-06-19T09:00:00");
function updateCountdown() {
  const now = new Date();
  const timeDiff = tournamentDate - now;

  if (timeDiff <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>The Tournament Started!</h2>";
    document.getElementById("overtext").innerHTML = "";
    document.getElementById("subtext").innerHTML = "<h3>Come and Join Us!</h3>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}
const countdownInterval = setInterval(updateCountdown, 1000);



//map to NK Tomislav
const map = L.map('map').setView([45.527948829236706, 18.616080696887398], 15); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
L.marker([45.527948829236706, 18.616080696887398]).addTo(map)
  .bindPopup('<b>NK Tomislav</b><br>Livana, Croatia')
  .openPopup();
  


  function flipCard(card) {
    card.classList.toggle('flipped');
}


