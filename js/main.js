// Main JavaScript file
import { initTestimonialTicker } from './modules/testimonial-carousel.js';
import { initTheme } from './modules/theme.js';
import { initContactForm } from './modules/form.js';

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initContactForm();
  initTestimonialTicker();
});
