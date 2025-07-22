// mobile menu navigation toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileHeader = document.querySelector('.mobile-header');
    const navLogo = document.querySelector('.nav-logo'); // Add this line
    
    menuBtn.addEventListener('click', function () {
        // toggle the slide-down class for animation
        mobileNav.classList.toggle('slide-down');
        
        // toggle the menu-open class for button styling
        menuBtn.classList.toggle('menu-open');
        
        // toggle the menu-active class for header styling
        mobileHeader.classList.toggle('menu-active');
        
        // toggle the logo image based on menu state
        if (mobileHeader.classList.contains('menu-active')) {
            navLogo.src = 'assets/icons/gestures-light.png'; // white logo when menu is open
        } else {
            navLogo.src = 'assets/icons/gestures-dark.png'; // black logo when menu is closed
        }
    });
});