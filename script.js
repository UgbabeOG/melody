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
    // Clear loading modal before redirecting 
    document.getElementById("loading-modal").style.display = "none";

    // Redirect to success page )
    localStorage.setItem(
      "bookingData",
      JSON.stringify({ origin, destination, passengers, date })
    );
   
    window.location.href = "html/quote.html";
  }, 3000); // After 3 seconds

  // Handle potential errors during form processing or API calls
  try {
    // Your form processing or API call logic here
  } catch (error) {
    console.error("Error during form processing:", error);
    // Display an error message to the user (e.g., using alert or modal)
    alert("An error occurred. Please try again later.");
    // Clear timeout to prevent unexpected redirection
    clearTimeout(redirectTimeout);
  }
}

// Attach to form submission event
const form = document.getElementById("booking-form");
form.addEventListener("submit", validateBookingFormAndRedirect);
