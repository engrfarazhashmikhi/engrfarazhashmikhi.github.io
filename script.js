// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and other elements
document.querySelectorAll('.project-card, .stat, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== Contact Form Handling ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Validate form
        if (!name.trim() || !email.trim() || !message.trim()) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Validate email
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Simulate sending (replace with actual backend integration)
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate delay
        setTimeout(() => {
            showNotification('Message sent successfully! Thank you for reaching out.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles for notifications
if (!document.querySelector('style[data-notification]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notification', 'true');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== Navbar Active Link Highlight ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.borderBottom = '3px solid #f093fb';
        } else {
            link.style.borderBottom = 'none';
        }
    });
});

// ==================== Scroll to Top Button ====================
function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
    });
}

createScrollToTopButton();

// ==================== Skill Progress Animation ====================
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills');

    if (!skillsSection) return;

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillsObserver.observe(skillsSection);
}

animateSkills();

// ==================== Typed Effect for Hero Subtitle ====================
function createTypedEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Start typing after a delay
    setTimeout(type, 500);
}

createTypedEffect();

// ==================== Counter Animation ====================
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    const statsSection = document.querySelector('.about-stats');

    if (!statsSection) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    let current = 0;
                    const increment = target / 30;

                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                            clearInterval(counter);
                        } else {
                            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                        }
                    }, 50);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterObserver.observe(statsSection);
}

animateCounters();

// ==================== Project Card Hover Effect ====================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== Parallax Effect on Scroll ====================
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            shape.style.transform = `translateY(${scrollPosition * (0.5 + index * 0.1)}px)`;
        });
    }
});

// ==================== Dark Mode Toggle (Optional) ====================
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;

    // Check saved preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        enableDarkMode();
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'false');
        } else {
            enableDarkMode();
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'true');
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        document.documentElement.style.setProperty('--dark-bg', '#1a1a2e');
        document.documentElement.style.setProperty('--light-bg', '#16213e');
        document.documentElement.style.setProperty('--text-dark', '#eaeaea');
        document.documentElement.style.setProperty('--text-light', '#eaeaea');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        document.documentElement.style.setProperty('--dark-bg', '#0f0f1e');
        document.documentElement.style.setProperty('--light-bg', '#f8f9fa');
        document.documentElement.style.setProperty('--text-dark', '#1a1a2e');
        document.documentElement.style.setProperty('--text-light', '#ffffff');
    }

    // Uncomment the next line to enable the theme toggle button
    // document.body.appendChild(themeToggle);
}

createThemeToggle();

// ==================== Lazy Loading for Images ====================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ==================== Smooth Fade In on Page Load ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// ==================== Console Message ====================
console.log('%cWelcome to Faraz Hashmikhi\'s Portfolio! 👨‍💻', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore and get in touch!', 'color: #764ba2; font-size: 14px;');

// ==================== Performance Optimization ====================
// Debounce function for scroll and resize events
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Optimize scroll performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-based operations here
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ==================== Accessibility Enhancements ====================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Focus visible for keyboard navigation
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('focus', function () {
        this.style.outline = '2px solid #667eea';
        this.style.outlineOffset = '2px';
    });

    el.addEventListener('blur', function () {
        this.style.outline = 'none';
    });
});
