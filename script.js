function validateBookingFormAndRedirect(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const passengers = document.getElementById("passengers").value;
  const date = document.getElementById("date").value;

  // Perform form validation (modify or add validations as needed)
  if (!origin || !destination || !passengers || !date) {
    alert("Please fill in all required fields.");
    return; // Stop further processing if validation fails
  }

  // Display loading modal and set redirection timeout
  document.getElementById("loading-modal").style.display = "block";
  const redirectTimeout = setTimeout(() => {
    // Clear loading modal before redirecting (optional)
    document.getElementById("loading-modal").style.display = "none";

    // Redirect to success page (replace with your actual URL)
    window.location.href = " /qoute.html";
  }, 3000); // After 3 seconds

  // Additional form processing or API calls could go here before redirecting
}

// Attach to form submission event
const form = document.getElementById("booking-form");
form.addEventListener("submit", validateBookingFormAndRedirect);
