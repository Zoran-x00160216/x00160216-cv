
document.addEventListener("DOMContentLoaded", function() {
    const btnCv = document.getElementById("btn-cv");
    btnCv.addEventListener("click", function() {
      window.open('./pdf/cv.pdf', '_blank');
    });
  });
