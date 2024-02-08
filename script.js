const form = document.getElementById("booking-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form data
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const passengers = document.getElementById("passengers").value;
  const date = document.getElementById("date").value;

  // Send data to server (replace with your actual API call)
  console.log("Origin:", origin);
  console.log("Destination:", destination);
  console.log("Passengers:", passengers);
  console.log("Date:", date);

  // Display success message)
});
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("active"); // Optional: Toggle icon state
});
