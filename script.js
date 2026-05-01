// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (themeIcon) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            if (themeIcon) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            if (themeIcon) {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
            localStorage.setItem('theme', 'light');
        }
    });
}

// Scroll Reveal Animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Tab Functionality for Menu
const tabBtns = document.querySelectorAll('.tab-btn');
const menuCategories = document.querySelectorAll('.menu-category');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and categories
        tabBtns.forEach(b => b.classList.remove('active'));
        menuCategories.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding category
        btn.classList.add('active');
        const targetCategory = document.getElementById(tabId);
        if (targetCategory) {
            targetCategory.classList.add('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    fadeInOnScroll();
    
    // Add staggered animation to menu items
    const menuItems = document.querySelectorAll('.menu-card');
    menuItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add staggered animation to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add staggered animation to review cards
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});