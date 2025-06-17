/*
* euroaxislogistics - Main JavaScript
* Main functionality for the logistics company website
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Sticky Header
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    function startSlideShow() {
        slideInterval = setInterval(nextSlideAuto, 5000);
    }

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlideAuto() {
        showSlide(currentSlide + 1);
    }

    if (slides.length > 0 && prevSlide && nextSlide) {
        prevSlide.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(currentSlide - 1);
            startSlideShow();
        });

        nextSlide.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(currentSlide + 1);
            startSlideShow();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(index);
                startSlideShow();
            });
        });

        startSlideShow();
    }

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevTestimonial = document.querySelector('.prev-testimonial');
    const nextTestimonial = document.querySelector('.next-testimonial');
    const testimonialIndicators = document.querySelectorAll('.t-indicator');
    let currentTestimonial = 0;
    let testimonialInterval;

    function startTestimonialSlideShow() {
        testimonialInterval = setInterval(nextTestimonialAuto, 5000);
    }

    function showTestimonial(n) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialIndicators.forEach(indicator => indicator.classList.remove('active'));

        currentTestimonial = (n + testimonialSlides.length) % testimonialSlides.length;

        testimonialSlides[currentTestimonial].classList.add('active');
        testimonialIndicators[currentTestimonial].classList.add('active');
    }

    function nextTestimonialAuto() {
        showTestimonial(currentTestimonial + 1);
    }

    if (testimonialSlides.length > 0 && prevTestimonial && nextTestimonial) {
        prevTestimonial.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            showTestimonial(currentTestimonial - 1);
            startTestimonialSlideShow();
        });

        nextTestimonial.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            showTestimonial(currentTestimonial + 1);
            startTestimonialSlideShow();
        });

        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                clearInterval(testimonialInterval);
                showTestimonial(index);
                startTestimonialSlideShow();
            });
        });

        startTestimonialSlideShow();
    }

    // Statistics Counter
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounter(el) {
        const target = parseFloat(el.getAttribute('data-count'));
        const originalText = el.textContent;
        const duration = 2000; // 2 seconds
        const step = target / duration * 10; // Update every 10ms
        let current = 0;

        // Check if the original text has a suffix like "+" or "/5"
        const hasPlus = originalText.includes('+');
        const hasFraction = originalText.includes('/');
        const hasPercent = originalText.includes('%');

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(timer);
                // Preserve the original format
                if (hasPlus) {
                    el.textContent = target + '+';
                } else if (hasFraction) {
                    const parts = originalText.split('/');
                    el.textContent = target + '/' + parts[1];
                } else if (hasPercent) {
                    el.textContent = target + '%';
                } else {
                    el.textContent = target;
                }
            } else {
                // For decimal values, show one decimal place during animation
                if (Number.isInteger(target)) {
                    el.textContent = Math.floor(current);
                } else {
                    el.textContent = current.toFixed(1);
                }
            }
        }, 10);
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkCounters() {
        statNumbers.forEach(statNumber => {
            if (isInViewport(statNumber) && !statNumber.classList.contains('counted')) {
                animateCounter(statNumber);
                statNumber.classList.add('counted');
            }
        });
    }

    if (statNumbers.length > 0) {
        window.addEventListener('scroll', checkCounters);
        // Check on initial load
        checkCounters();
    }

    // FAQ Accordion (for Contact Page)
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');

            question.addEventListener('click', () => {
                // Close all other answers
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-answer').style.display = 'none';
                        otherItem.querySelector('.faq-toggle i').className = 'fas fa-plus';
                    }
                });

                // Toggle current answer
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    toggle.innerHTML = '<i class="fas fa-plus"></i>';
                } else {
                    answer.style.display = 'block';
                    toggle.innerHTML = '<i class="fas fa-minus"></i>';
                }
            });
        });
    }

    // Job Filters (for Jobs Page)
    const filterBtn = document.querySelector('.filter-btn');
    const jobCards = document.querySelectorAll('.job-card');

    if (filterBtn && jobCards.length > 0) {
        filterBtn.addEventListener('click', () => {
            const departmentFilter = document.getElementById('department').value;
            const locationFilter = document.getElementById('location').value;
            const typeFilter = document.getElementById('type').value;

            jobCards.forEach(card => {
                const department = card.querySelector('.job-department').textContent.trim().toLowerCase();
                const location = card.querySelector('.job-location').textContent.trim().toLowerCase();
                const type = card.querySelector('.job-type').textContent.trim().toLowerCase();

                const departmentMatch = departmentFilter === 'all' || department.includes(departmentFilter.toLowerCase());
                const locationMatch = locationFilter === 'all' || location.includes(locationFilter.toLowerCase());
                const typeMatch = typeFilter === 'all' || type.includes(typeFilter.toLowerCase());

                if (departmentMatch && locationMatch && typeMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }

      
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
