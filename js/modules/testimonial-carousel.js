// Marquee-style testimonial ticker
export function initTestimonialTicker() {
  const container = document.querySelector('.testimonial-carousel-container');
  const carousel = document.querySelector('.testimonial-carousel');
  
  if (!carousel || !container) return;
  
  // Clone testimonials for infinite scroll
  const testimonials = carousel.innerHTML;
  carousel.innerHTML = testimonials + testimonials;
  
  let scrollPosition = 0;
  let animationFrame;
  let isPaused = false;
  let isTransitioning = false;
  
  function scroll() {
    if (!isPaused) {
      scrollPosition += 0.5; // Adjust speed as needed
      
      // Reset scroll position for infinite loop
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
    animationFrame = requestAnimationFrame(scroll);
  }
  
  // Start scrolling
  scroll();
  
  // Pause on hover/touch
  container.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  
  container.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  
  // Handle touch devices
  container.addEventListener('touchstart', () => {
    isPaused = true;
  });
  
  container.addEventListener('touchend', () => {
    isPaused = false;
  });
  
  // Handle visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else {
      scroll();
    }
  });
  
  // Cleanup on page change
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationFrame);
  });
}
