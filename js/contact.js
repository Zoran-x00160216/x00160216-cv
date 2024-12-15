document.getElementById("closeMenu")
.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.history.back(); // Go back to the previous page
});

// Get the submit form, popup, and input fields
const form = document.getElementById('submitForm');
const popup = document.getElementById('popup');
const fullName = document.getElementById('fullName');
const email = document.getElementById('exampleInputEmail1');
const note = document.getElementById('note');
const emailError = document.getElementById('emailError');

// Add submit event listener to the form
form.addEventListener('submit', function (event) {
event.preventDefault(); // Prevent form submission

// Reset validation feedback
email.classList.remove('is-invalid');
emailError.style.display = 'none'; // Hide the error message initially

// Check if the email is in a valid format
if (!validateEmail(email.value)) {
    // Show the invalid email feedback
    email.classList.add('is-invalid');
    emailError.style.display = 'block'; // Show the error message
} else if (form.checkValidity()) {
    // Collect form data
    const formData = {
        fullName: fullName.value,
        email: email.value,
        note: note.value
    };

    // Store form data in a variable (can be sent to server if needed)
    console.log(formData); // For demonstration purposes

    // Show the popup
    popup.style.display = 'block';

    // Hide the popup after 4 seconds and navigate back
    setTimeout(function () {
        popup.style.display = 'none'; // Hide the popup
        window.history.back(); // Navigate to the previous page
    }, 2000); // 2 seconds
}
});

// Function to validate email format using regex
function validateEmail(email) {
const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
return re.test(String(email).toLowerCase());
}