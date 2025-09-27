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
    populateShirt();
    populateGallery();
    populateSponsors();
    populateRacePhotos();
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
            <button class="btn btn-registration" onclick="handleRegistration('${price.category}')">
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

function populateShirt() {
    if (!CONFIG.settings.showShirtSection) {
        const shirtSection = document.querySelector('.shirt-section');
        if (shirtSection) shirtSection.style.display = 'none';
        return;
    }
    
    // Update shirt content
    document.getElementById('shirt-title').textContent = CONFIG.shirt.title;
    document.getElementById('shirt-subtitle').textContent = CONFIG.shirt.subtitle;
    document.getElementById('shirt-description').innerHTML = CONFIG.shirt.description;
    
    // Update shirt image
    const shirtImg = document.getElementById('shirt-img');
    if (shirtImg) {
        shirtImg.src = CONFIG.images.shirtImage;
    }
    
    // Populate features
    const featuresContainer = document.getElementById('shirt-features');
    if (featuresContainer) {
        featuresContainer.innerHTML = '';
        CONFIG.shirt.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            featuresContainer.appendChild(featureItem);
        });
    }
}

function populateGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!CONFIG.settings.showGallery) {
        document.querySelector('.gallery').style.display = 'none';
        return;
    }
    
    CONFIG.images.galleryImages.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${imagePath}" alt="Galería ${index + 1}" loading="lazy" onclick="openGalleryModal('${imagePath}')">
        `;
        container.appendChild(galleryItem);
    });
}

function populateSponsors() {
    const container = document.getElementById('sponsors-container');
    container.innerHTML = '';
    
    if (!CONFIG.settings.showSponsorsSection) {
        document.querySelector('.sponsors').style.display = 'none';
        return;
    }
    
    // Define priority sponsors (GuardiaCivil, AYTO, ARPA)
    const prioritySponsors = CONFIG.sponsors.filter(sponsor => 
        sponsor.category === 'principal' || 
        sponsor.category === 'institucional' || 
        sponsor.category === 'beneficiario' ||
        sponsor.name.toLowerCase().includes('guardia civil') ||
        sponsor.name.toLowerCase().includes('ayuntamiento') ||
        sponsor.name.toLowerCase().includes('arpa')
    ).slice(0, 3); // Take only first 3 priority sponsors
    
    // Get remaining sponsors
    const regularSponsors = CONFIG.sponsors.filter(sponsor => 
        !prioritySponsors.includes(sponsor)
    );
    
    // Create priority sponsors row
    if (prioritySponsors.length > 0) {
        const priorityRow = document.createElement('div');
        priorityRow.className = 'sponsors-priority-row';
        
        prioritySponsors.forEach(sponsor => {
            const sponsorItem = document.createElement('div');
            sponsorItem.className = 'sponsor-priority';
            
            const content = `
                <img src="${sponsor.logo}" alt="${sponsor.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display:none; padding: 20px; color: #666;">
                    <i class="fas fa-image" style="font-size: 3rem; margin-bottom: 15px;"></i>
                    <p style="font-size: 1.1rem; font-weight: 600;">${sponsor.name}</p>
                </div>
            `;
            
            if (sponsor.website) {
                sponsorItem.innerHTML = `<a href="${sponsor.website}" target="_blank" style="display: flex; align-items: center; justify-content: center; height: 100%;">${content}</a>`;
            } else {
                sponsorItem.innerHTML = content;
            }
            
            priorityRow.appendChild(sponsorItem);
        });
        
        container.appendChild(priorityRow);
    }
    
    // Create regular sponsors table
    if (regularSponsors.length > 0) {
        const sponsorsTable = document.createElement('div');
        sponsorsTable.className = 'sponsors-table';
        
        regularSponsors.forEach(sponsor => {
            const sponsorItem = document.createElement('div');
            sponsorItem.className = 'sponsor-item';
            
            const content = `
                <img src="${sponsor.logo}" alt="${sponsor.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display:none; padding: 15px; color: #666;">
                    <i class="fas fa-image" style="font-size: 1.5rem; margin-bottom: 8px;"></i>
                    <p style="font-size: 0.9rem;">${sponsor.name}</p>
                </div>
            `;
            
            if (sponsor.website) {
                sponsorItem.innerHTML = `<a href="${sponsor.website}" target="_blank" style="display: flex; align-items: center; justify-content: center; height: 100%;">${content}</a>`;
            } else {
                sponsorItem.innerHTML = content;
            }
            
            sponsorsTable.appendChild(sponsorItem);
        });
        
        container.appendChild(sponsorsTable);
    }
}

function populateRacePhotos() {
    // Update race photos section content
    document.getElementById('photos-title').textContent = CONFIG.racePhotos.title;
    document.getElementById('photos-description').textContent = CONFIG.racePhotos.description;
    
    const photosBtn = document.getElementById('photos-btn');
    const photosNote = document.getElementById('photos-note');
    
    // Update button text
    photosBtn.innerHTML = `<i class="fas fa-camera"></i> ${CONFIG.racePhotos.buttonText}`;
    
    // Update button URL and state
    if (CONFIG.racePhotos.isAvailable && CONFIG.racePhotos.url !== "#") {
        photosBtn.href = CONFIG.racePhotos.url;
        photosBtn.target = "_blank"; // Open in new tab for external links
        photosNote.style.display = "none"; // Hide the "coming soon" note
    } else {
        photosBtn.href = "#";
        photosBtn.style.opacity = "0.7";
        photosBtn.style.cursor = "not-allowed";
        photosNote.textContent = CONFIG.racePhotos.note;
        
        // Prevent clicking when not available
        photosBtn.addEventListener('click', function(e) {
            if (!CONFIG.racePhotos.isAvailable || CONFIG.racePhotos.url === "#") {
                e.preventDefault();
                return false;
            }
        });
    }
}

function populateContact() {
    document.getElementById('contact-email').textContent = CONFIG.contact.email;
    document.getElementById('contact-phone').textContent = CONFIG.contact.phone;
    document.getElementById('contact-address').textContent = CONFIG.contact.address;
    
    // Update social media links
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks[0]) socialLinks[0].href = CONFIG.contact.socialMedia.facebook || '#';
    if (socialLinks[1]) socialLinks[1].href = CONFIG.contact.socialMedia.twitter || '#';
    if (socialLinks[2]) socialLinks[2].href = CONFIG.contact.socialMedia.instagram || '#';
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
    // Contact form has been removed - no setup needed
    return;
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
    document.querySelectorAll('.event-card, .price-card, .service-item, .award-item, .shirt-section, .gallery-item').forEach(el => {
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
    
    showNotification(`Inscripción para ${category}. Redirigiendo a la plataforma de inscripciones...`, 'info');
    
    // Here you would typically redirect to a registration system
    window.location.href = 'https://www.rockthesport.com/es/evento/gc_carrera_popular_la_rioja';
    
    // Or open a modal with registration form
    // openRegistrationModal(category);
}

function handleDonation(amount) {
    showNotification(`Donación de ${amount}€. Redirigiendo al sistema de pagos...`, 'info');
    
    // Here you would integrate with a payment system
    window.location.href = 'https://www.rockthesport.com/es/evento/gc_carrera_popular_la_rioja';
}

// Contact form has been removed - function no longer needed

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

