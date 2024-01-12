const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
