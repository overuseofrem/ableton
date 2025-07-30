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

// More+ menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const megaMenuLink = document.getElementById('mega-menu');
    const secondaryNav = document.querySelector('.secondary-nav');

    // Initially hide the secondary navigation
    secondaryNav.style.display = 'none';

    megaMenuLink.addEventListener('click', (event) => {
        // Prevent the default link behavior (e.g., navigating to '#')
        event.preventDefault();

        // Toggle the display of the secondary navigation
        if (secondaryNav.style.display === 'none' || secondaryNav.style.display === '') {
            secondaryNav.style.display = 'flex'; // Or 'block', depending on your CSS layout
            megaMenuLink.classList.add('active'); // Add a class to change the ::after content
        } else {
            secondaryNav.style.display = 'none';
            megaMenuLink.classList.remove('active'); // Remove the class
        }
    });
});