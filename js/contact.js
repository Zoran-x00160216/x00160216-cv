document.getElementById("closeMenu")
.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor behavior
  window.history.back(); // Go back to the previous page
});

 // Get the submit form and popup
 const form = document.getElementById('submitForm');
 const popup = document.getElementById('popup');

 // Add submit event listener to the form
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form submission

     // Show the popup
     popup.style.display = 'block';

     // Hide the popup after 4 seconds and navigate back
     setTimeout(function() {
         popup.style.display = 'none'; // Hide the popup
         window.history.back(); // Navigate to the previous page
     }, 2000); // 4 seconds
 });