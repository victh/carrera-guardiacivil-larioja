// ====================================
// CARRERA SOLIDARIA - MAIN JAVASCRIPT
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    setupEventListeners();
    setupMobileMenu();
    setupSmoothScrolling();
    setupContactForm();
});

// ====================================
// WEBSITE INITIALIZATION
// ====================================
function initializeWebsite() {
    // Populate content from config
    populateEventDetails();
    populateObjective();
    populateDistances();
    populateRegistrationStatus();
    populatePricing();
    populateAwards();
    populateServices();
    populateSponsors();
    populateContact();
    
    // Apply custom colors if set
    applyCustomColors();
    
    // Add loading animations
    addScrollAnimations();
}

// ====================================
// POPULATE CONTENT FROM CONFIG
// ====================================
function populateEventDetails() {
    // Basic event info
    document.getElementById('event-date').textContent = CONFIG.event.date;
    document.getElementById('event-location').textContent = CONFIG.event.location;
    document.getElementById('event-time').textContent = CONFIG.event.time;
    
    // Update hero section
    document.querySelector('.hero-title').textContent = CONFIG.event.title;
    document.querySelector('.hero-subtitle').textContent = CONFIG.event.subtitle;
    document.querySelector('.hero-description').textContent = CONFIG.event.description;
}

function populateObjective() {
    document.getElementById('objective-description').textContent = CONFIG.objective.description;
    document.getElementById('beneficiary-org').textContent = CONFIG.objective.beneficiaryOrg;
}

function populateDistances() {
    const container = document.getElementById('distances-container');
    container.innerHTML = '';
    
    CONFIG.distances.forEach(distance => {
        const distanceItem = document.createElement('div');
        distanceItem.className = 'distance-item';
        distanceItem.innerHTML = `
            <h4>${distance.distance} - ${distance.category}</h4>
            <p><i class="fas fa-clock"></i> ${distance.time}</p>
            <p>${distance.description}</p>
        `;
        container.appendChild(distanceItem);
    });
}

function populateRegistrationStatus() {
    document.getElementById('registration-status-title').textContent = CONFIG.registration.statusTitle;
    document.getElementById('registration-status-text').textContent = CONFIG.registration.statusText;
    
    const statusBtn = document.getElementById('registration-btn');
    if (CONFIG.registration.status === 'closed' || CONFIG.registration.status === 'sold_out') {
        statusBtn.textContent = 'Inscripciones Cerradas';
        statusBtn.className = 'btn btn-secondary';
        statusBtn.style.pointerEvents = 'none';
    }
}

function populatePricing() {
    const container = document.getElementById('pricing-container');
    container.innerHTML = '';
    
    CONFIG.pricing.forEach(price => {
        const priceCard = document.createElement('div');
        priceCard.className = `price-card ${price.featured ? 'featured' : ''}`;
        priceCard.innerHTML = `
            <h3>${price.category}</h3>
            <div class="price">${price.price}</div>
            <p>${price.description}</p>
            <button class="btn btn-primary" onclick="handleRegistration('${price.category}')">
                Inscribirse
            </button>
        `;
        container.appendChild(priceCard);
    });
}

function populateAwards() {
    const container = document.getElementById('awards-container');
    container.innerHTML = '';
    
    CONFIG.awards.forEach(award => {
        const awardItem = document.createElement('div');
        awardItem.className = 'award-item';
        awardItem.innerHTML = `
            <i class="${award.icon}"></i>
            <h4>${award.category}</h4>
            <p><strong>${award.prize}</strong></p>
            <p>${award.description}</p>
        `;
        container.appendChild(awardItem);
    });
}

function populateServices() {
    const container = document.getElementById('services-container');
    container.innerHTML = '';
    
    CONFIG.services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <i class="${service.icon}"></i>
            <h4>${service.name}</h4>
            <p>${service.description}</p>
        `;
        container.appendChild(serviceItem);
    });
}

function populateSponsors() {
    const container = document.getElementById('sponsors-container');
    container.innerHTML = '';
    
    if (!CONFIG.settings.showSponsorsSection) {
        document.querySelector('.sponsors').style.display = 'none';
        return;
    }
    
    CONFIG.sponsors.forEach(sponsor => {
        const sponsorItem = document.createElement('div');
        sponsorItem.className = 'sponsor-item';
        
        const content = `
            <img src="${sponsor.logo}" alt="${sponsor.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div style="display:none; padding: 20px; color: #666;">
                <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>${sponsor.name}</p>
            </div>
        `;
        
        if (sponsor.website) {
            sponsorItem.innerHTML = `<a href="${sponsor.website}" target="_blank">${content}</a>`;
        } else {
            sponsorItem.innerHTML = content;
        }
        
        container.appendChild(sponsorItem);
    });
}

function populateContact() {
    document.getElementById('contact-email').textContent = CONFIG.contact.email;
    document.getElementById('contact-phone').textContent = CONFIG.contact.phone;
    document.getElementById('contact-address').textContent = CONFIG.contact.address;
    
    // Update social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks[0].href = CONFIG.contact.socialMedia.facebook || '#';
    socialLinks[1].href = CONFIG.contact.socialMedia.twitter || '#';
    socialLinks[2].href = CONFIG.contact.socialMedia.instagram || '#';
}

// ====================================
// CUSTOM STYLING
// ====================================
function applyCustomColors() {
    if (CONFIG.settings.primaryColor || CONFIG.settings.secondaryColor) {
        const root = document.documentElement;
        if (CONFIG.settings.primaryColor) {
            root.style.setProperty('--primary-color', CONFIG.settings.primaryColor);
        }
        if (CONFIG.settings.secondaryColor) {
            root.style.setProperty('--secondary-color', CONFIG.settings.secondaryColor);
        }
    }
}

// ====================================
// EVENT LISTENERS AND INTERACTIONS
// ====================================
function setupEventListeners() {
    // Donation buttons
    document.querySelectorAll('.donation-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const amount = this.getAttribute('data-amount');
            handleDonation(amount);
        });
    });
    
    // Scroll to top button (if you want to add one)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        
        if (scrolled > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form || !CONFIG.settings.enableContactForm) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactForm(this);
    });
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.event-card, .price-card, .service-item, .award-item').forEach(el => {
        observer.observe(el);
    });
}

// ====================================
// HANDLER FUNCTIONS
// ====================================
function handleRegistration(category) {
    // You can customize this function to handle registration
    // For now, it shows an alert, but you can integrate with a registration system
    
    if (CONFIG.registration.status === 'closed' || CONFIG.registration.status === 'sold_out') {
        showNotification('Las inscripciones están cerradas', 'error');
        return;
    }
    
    showNotification(`Inscripción para ${category}. Redirigiendo al sistema de registro...`, 'info');
    
    // Here you would typically redirect to a registration system
    // window.location.href = 'https://your-registration-system.com';
    
    // Or open a modal with registration form
    // openRegistrationModal(category);
}

function handleDonation(amount) {
    showNotification(`Donación de ${amount}€. Redirigiendo al sistema de pagos...`, 'info');
    
    // Here you would integrate with a payment system
    // window.location.href = `https://your-payment-system.com?amount=${amount}`;
}

function handleContactForm(form) {
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        showNotification('Mensaje enviado correctamente. Te contactaremos pronto.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
    
    // Here you would typically send the form data to your server
    // fetch('/contact', { method: 'POST', body: formData })...
}

// ====================================
// UTILITY FUNCTIONS
// ====================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                max-width: 400px;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-info {
                background: #3b82f6;
                color: white;
            }
            .notification-success {
                background: #10b981;
                color: white;
            }
            .notification-error {
                background: #ef4444;
                color: white;
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
}

function formatDate(dateString) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[+]?[\d\s\-()]+$/;
    return re.test(phone) && phone.length >= 9;
}

// ====================================
// ADDITIONAL FEATURES
// ====================================

// Image lazy loading for better performance
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Print functionality for registration confirmation
function printPage() {
    window.print();
}

// Share functionality
function shareEvent() {
    if (navigator.share) {
        navigator.share({
            title: CONFIG.event.title,
            text: CONFIG.event.description,
            url: window.location.href
        });
    } else {
        // Fallback: copy link to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Enlace copiado al portapapeles', 'success');
        });
    }
}

// Export functions for external use
window.CarreraSolidaria = {
    handleRegistration,
    handleDonation,
    showNotification,
    shareEvent,
    printPage
};

