const form = document.getElementById("booking-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form data
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const passengers = document.getElementById("passengers").value;
  const date = document.getElementById("date").value;

  // Display success message)
});
