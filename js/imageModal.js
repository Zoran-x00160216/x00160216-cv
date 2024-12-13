const modal = function () {
    // Get the modal
    const modal = document.getElementById("myModal");
    // Get the button that opens the modal
    const btn =document.querySelector('#btn-cert');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        modalImg.src = "./img/about-page/cisco_cert.png"; 
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
modal();