document.addEventListener('DOMContentLoaded', () => {
    // Hover effect on navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.style.transform = 'scale(1.1)');
        link.addEventListener('mouseout', () => link.style.transform = 'scale(1)');
    });

    // Smooth scroll for internal links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Team member hover effect (if applicable)
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseover', () => {
            member.style.boxShadow = '0 8px 20px rgba(0, 217, 255, 0.5)';
        });
        member.addEventListener('mouseout', () => {
            member.style.boxShadow = 'none';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link in the navbar
    const currentLocation = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Service card hover animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 12px 30px rgba(0, 217, 255, 0.6)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 10px rgba(0, 217, 255, 0.3)';
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link in the navbar
    const currentLocation = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Portfolio item hover animations
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 12px 30px rgba(0, 217, 255, 0.6)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 10px rgba(0, 217, 255, 0.3)';
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link in the navbar
    const currentLocation = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Portfolio item hover animations
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 12px 30px rgba(0, 217, 255, 0.6)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 10px rgba(0, 217, 255, 0.3)';
        });
    });

    // Scroll reveal animation for portfolio items
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        portfolioItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            if (itemPosition < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  // Trigger on load
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.style.transform = 'scale(1.1)');
        link.addEventListener('mouseout', () => link.style.transform = 'scale(1)');
    });

    // Blog post hover animation
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('mouseover', () => {
            post.style.transform = 'scale(1.05)';
            post.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.6)';
        });
        post.addEventListener('mouseout', () => {
            post.style.transform = 'scale(1)';
            post.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.style.transform = 'scale(1.1)');
        link.addEventListener('mouseout', () => link.style.transform = 'scale(1)');
    });

    // Careers hover animation
    const careerOpenings = document.querySelectorAll('.career-opening');
    careerOpenings.forEach(opening => {
        opening.addEventListener('mouseover', () => {
            opening.style.transform = 'translateY(-10px)';
            opening.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
        });
        opening.addEventListener('mouseout', () => {
            opening.style.transform = 'translateY(0)';
            opening.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
    });

    // Contact form animation on submit
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const moreContent = document.getElementById('moreContent');

    learnMoreBtn.addEventListener('click', function() {
        if (moreContent.classList.contains('hidden')) {
            moreContent.classList.remove('hidden');
            learnMoreBtn.textContent = 'Show Less';
        } else {
            moreContent.classList.add('hidden');
            learnMoreBtn.textContent = 'Learn More';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn1 = document.getElementById('learnMoreBtn1');
    const moreContent1 = document.getElementById('moreContent1');

    learnMoreBtn1.addEventListener('click', function() {
        if (moreContent1.classList.contains('hidden')) {
            moreContent1.classList.remove('hidden');
            learnMoreBtn1.textContent = 'Show Less';
        } else {
            moreContent1.classList.add('hidden');
            learnMoreBtn1.textContent = 'Learn More';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn2 = document.getElementById('learnMoreBtn2');
    const moreContent2 = document.getElementById('moreContent2');

    learnMoreBtn2.addEventListener('click', function() {
        if (moreContent2.classList.contains('hidden')) {
            moreContent2.classList.remove('hidden');
            learnMoreBtn2.textContent = 'Show Less';
        } else {
            moreContent2.classList.add('hidden');
            learnMoreBtn2.textContent = 'Learn More';
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch('/send-email/', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Application submitted successfully!');
                form.reset();
            } else {
                alert('There was an error submitting your application.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your application.');
        });
    });
});
