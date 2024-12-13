window.addEventListener('load', (e) => {
    const aboutImg = document.querySelector('.img-about');
    const aboutText = document.querySelector('.text-about');

    aboutImg.classList.add('about-translateX');
    aboutText.classList.add('about-translateX');
    e.preventDefault();
});