const bookingData = localStorage.getItem("bookingData");
if (bookingData) {
  const data = JSON.parse(bookingData);
  const origin = data.origin;
  const destination = data.destination;
  const passengers = data.passengers;
  const date = data.date;

  // Populate payment form fields with obtained values
  document.getElementById("payment-origin").value = origin;
  document.getElementById("payment-destination").value = destination;
  document.getElementById("payment-passengers").value = passengers;
  document.getElementById("payment-date").value = date;
  localStorage.removeItem("bookingData"); // Clear to avoid redundancy
}
