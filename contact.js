// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("contactForm");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         alert("Form submitted successfully!");
//         form.reset();
//     });
// });
// document.getElementById("submit-button").addEventListener("click", myfunction);
// function myFunction(){
//     alert("Form Submitted Successfully");
// }
// Function to handle form submission
function myFunction() {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get form input values
  const firstName = document.getElementById("f_name").value;
  const lastName = document.getElementById("l_name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!firstName || !email || !message) {
    alert("Please fill out all the required fields.");
    return;
  }

  // Create an object to store form details
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message,
  };

  // Store the form data in local storage
  localStorage.setItem("contactFormData", JSON.stringify(formData));

  // Pop an alert that the form was submitted successfully
  alert("Form submitted successfully!");

  // Optionally, clear the form fields after submission
  document.getElementById("contactForm").reset();
}
