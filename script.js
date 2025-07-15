// Mobile menu navigation toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileHeader = document.querySelector('.mobile-header');
    
    menuBtn.addEventListener('click', function () {
        // Toggle the slide-down class for animation
        mobileNav.classList.toggle('slide-down');
        
        // Toggle the menu-open class for button styling
        menuBtn.classList.toggle('menu-open');
        
        // Toggle the menu-active class for header styling
        mobileHeader.classList.toggle('menu-active');
    });
});