/*
* euroaxislogistics - Animations JavaScript
* GSAP animations for the logistics company website
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP is not loaded. Animations will not work.');
        return;
    }

    // Register ScrollTrigger plugin
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.warn('ScrollTrigger plugin is not loaded. Scroll animations will not work.');
    }

    // Hero Section Animations
    const heroElements = document.querySelectorAll('.animate-hero');

    if (heroElements.length > 0) {
        gsap.from(heroElements, {
            opacity: 0,
            y: 50,
            stagger: 0.3,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
    }

    // Animate section headings on scroll
    const sectionHeadings = document.querySelectorAll('.section-heading');

    if (sectionHeadings.length > 0 && typeof ScrollTrigger !== 'undefined') {
        sectionHeadings.forEach(heading => {
            gsap.from(heading, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // Animate service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');

    if (serviceCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(serviceCards, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate statistics on scroll
    const statItems = document.querySelectorAll('.stat-item');

    if (statItems.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(statItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.statistics-wrapper',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate solution cards on scroll
    const solutionCards = document.querySelectorAll('.solution-card');

    if (solutionCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(solutionCards, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.solutions-wrapper',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate testimonial on scroll
    const testimonialContent = document.querySelector('.testimonial-content');

    if (testimonialContent && typeof ScrollTrigger !== 'undefined') {
        gsap.from(testimonialContent, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.testimonials-slider',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate case study cards on scroll
    const caseStudyCards = document.querySelectorAll('.case-study-card');

    if (caseStudyCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(caseStudyCards, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.case-studies-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate map points
    const mapPoints = document.querySelectorAll('.map-point');

    if (mapPoints.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(mapPoints, {
            opacity: 0,
            scale: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.network-map',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate network stats
    const networkStats = document.querySelectorAll('.network-stat');

    if (networkStats.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(networkStats, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.network-stats',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate sustainability goals
    const goalItems = document.querySelectorAll('.goal-item');

    if (goalItems.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(goalItems, {
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.sustainability-goals',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }



    // Animate partner logos
    const partnerLogos = document.querySelectorAll('.partner-logo');

    if (partnerLogos.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(partnerLogos, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.partners-slider',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate award items
    const awardItems = document.querySelectorAll('.award-item');

    if (awardItems.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(awardItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.awards-wrapper',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate team members
    const teamMembers = document.querySelectorAll('.team-member');

    if (teamMembers.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(teamMembers, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.team-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate CTA section
    const ctaContent = document.querySelector('.cta-content');

    if (ctaContent && typeof ScrollTrigger !== 'undefined') {
        gsap.from(ctaContent, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.cta-wrapper',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }



    // About Page Animations

    // Animate story timeline
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(timelineItems, {
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.story-timeline',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate mission, vision, values boxes
    const mvvBoxes = document.querySelectorAll('.mission-box, .vision-box, .values-box');

    if (mvvBoxes.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(mvvBoxes, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.mission-vision-wrapper',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate advantage cards
    const advantageCards = document.querySelectorAll('.advantage-card');

    if (advantageCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(advantageCards, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.advantages-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Contact Page Animations

    // Animate contact cards
    const contactCards = document.querySelectorAll('.contact-card');

    if (contactCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(contactCards, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-info-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate contact form
    const contactForm = document.querySelector('.contact-form');

    if (contactForm && typeof ScrollTrigger !== 'undefined') {
        gsap.from(contactForm, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-form-section',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate office cards
    const officeCards = document.querySelectorAll('.office-card');

    if (officeCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(officeCards, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.offices-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Jobs Page Animations

    // Animate benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');

    if (benefitCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(benefitCards, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.benefits-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate job cards
    const jobCards = document.querySelectorAll('.job-card');

    if (jobCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(jobCards, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.jobs-grid',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Animate process steps
    const processSteps = document.querySelectorAll('.process-step');

    if (processSteps.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(processSteps, {
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.process-steps',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }
});
