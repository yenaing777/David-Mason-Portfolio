const hambergerButton = document.querySelector('.hamberger');
    const timesButton = document.querySelector('.times');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuLinks = mobileNav.querySelectorAll('a');

    // Function to open the mobile menu
    function openMobileMenu() {
        mobileNav.classList.add('open');
    }

    // Function to close the mobile menu
    function closeMobileMenu() {
        mobileNav.classList.remove('open');
    }

    // Add click event listeners
    hambergerButton.addEventListener('click', openMobileMenu);
    timesButton.addEventListener('click', closeMobileMenu);

    // Add click event listeners to menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });