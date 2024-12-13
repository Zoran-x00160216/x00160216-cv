
// // // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    const scrollBtn = document.getElementById('scroll-up-btn');
    // Show btn if user scroll down more than 150px
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
}


// Jquery smooth scrolling
$(document).ready(function () {
    // Add smooth scrolling to btn
    $('#scroll-up-btn').on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area(navbar)
            $('html, body').animate({
                scrollTop: $('header').offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});