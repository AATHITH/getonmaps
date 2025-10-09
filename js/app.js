// Get On Maps - Main JavaScript Application

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggle(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
  const toggleBtns = document.querySelectorAll('.theme-toggle');
  toggleBtns.forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  });
}

// Testimonial Ticker
function initTestimonialTicker() {
  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;
  
  // Clone testimonials for infinite scroll
  const testimonials = carousel.innerHTML;
  carousel.innerHTML = testimonials + testimonials;
  
  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
  });
  
  carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
  });
}

// Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    // Validate form
    if (!validateForm(form)) return;
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show success message (in real implementation, this would send data to server)
    showFormMessage(form, 'success', 'Thank you for your message! We\'ll get back to you soon.');
    form.reset();
    
    // Log form data (for demo purposes)
    console.log('Form submitted:', data);
  });
}

function validateForm(form) {
  let isValid = true;
  
  // Remove previous error states
  form.querySelectorAll('.is-invalid').forEach(field => {
    field.classList.remove('is-invalid');
  });
  form.querySelectorAll('.invalid-feedback').forEach(msg => {
    msg.remove();
  });
  
  // Check required fields
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('is-invalid');
      
      const errorMsg = document.createElement('div');
      errorMsg.className = 'invalid-feedback';
      errorMsg.textContent = 'This field is required';
      field.parentNode.appendChild(errorMsg);
    }
  });
  
  // Validate email
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      isValid = false;
      emailField.classList.add('is-invalid');
      
      const errorMsg = document.createElement('div');
      errorMsg.className = 'invalid-feedback';
      errorMsg.textContent = 'Please enter a valid email address';
      emailField.parentNode.appendChild(errorMsg);
    }
  }
  
  return isValid;
}

function showFormMessage(form, type, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;
  
  form.insertBefore(messageDiv, form.firstChild);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Smooth Scrolling for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

// Lazy Loading Images
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    return;
  }
  
  // Fallback for browsers that don't support native lazy loading
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Animation on Scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(el => animationObserver.observe(el));
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTestimonialTicker();
  initContactForm();
  initSmoothScroll();
  updateActiveNavLink();
  initLazyLoading();
  initScrollAnimations();
  
  // Add theme toggle event listeners
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
  
  // Handle mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  const carousel = document.querySelector('.testimonial-carousel');
  if (carousel) {
    if (document.hidden) {
      carousel.style.animationPlayState = 'paused';
    } else {
      carousel.style.animationPlayState = 'running';
    }
  }
});
