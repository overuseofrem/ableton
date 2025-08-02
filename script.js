/**
 * FILE: script.js
 * DESCRIPTION:
 * - Handles interactive elements on the homepage.
 * - Manages the mobile menu toggle.
 * - Manages the desktop "More" dropdown menu.
 * - Controls the visibility of a scroll-to-articles button.
 */

// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // MOBILE NAVIGATION TOGGLE
    // =================================================================
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileHeader = document.querySelector('.mobile-header');
    const navLogo = document.querySelector('.mobile-header .nav-logo'); // More specific selector

    // Ensure all elements exist before adding listeners
    if (menuBtn && mobileNav && mobileHeader && navLogo) {
        menuBtn.addEventListener('click', () => {
            // Toggle classes to trigger CSS animations and style changes.
            // This is better than manipulating styles directly in JS.
            const isOpen = mobileNav.classList.toggle('is-visible');
            
            menuBtn.classList.toggle('is-menu-open');
            mobileHeader.classList.toggle('is-menu-active');
            
            // Set aria-expanded for accessibility
            menuBtn.setAttribute('aria-expanded', isOpen);

            // Change the logo color based on the menu's state
            if (isOpen) {
                navLogo.src = 'assets/icons/gestures-light.png'; // White logo
            } else {
                navLogo.src = 'assets/icons/gestures-dark.png'; // Black logo
            }
        });
    }


    // =================================================================
    // DESKTOP "MORE" DROPDOWN TOGGLE
    // =================================================================
    const megaMenuBtn = document.getElementById('mega-menu-btn');
    const secondaryNav = document.querySelector('.secondary-nav');

    if (megaMenuBtn && secondaryNav) {
        megaMenuBtn.addEventListener('click', (event) => {
            // Prevent the link from navigating to '#'
            event.preventDefault();

            // Toggle classes on the button and the navigation panel
            megaMenuBtn.classList.toggle('is-open');
            secondaryNav.classList.toggle('is-open');
        });
    }


    // =================================================================
    // SCROLL-TO-ARTICLES BUTTON LOGIC
    // =================================================================
    const scrollBtn = document.getElementById('scroll-to-articles-btn');
    const firstArticleSection = document.querySelector('.content-wrapper');

    if (scrollBtn && firstArticleSection) {

        // Shows/hides the button based on scroll position
        const handleScrollButtonVisibility = () => {
            // Show the button ONLY if the user is near the top of the page.
            if (window.scrollY < 10) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        };

        // Scrolls the page smoothly to the first article section
        const scrollToArticles = () => {
            firstArticleSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        // Attach event listeners
        window.addEventListener('scroll', handleScrollButtonVisibility);
        scrollBtn.addEventListener('click', scrollToArticles);

        // Run once on page load to set the initial state
        handleScrollButtonVisibility();
    }

});