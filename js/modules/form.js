// Form handling module
export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  
  // Basic form validation
  if (!validateForm(form)) {
    return;
  }

  // Collect form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    // Add form submission logic here
    console.log('Form data:', data);
    form.reset();
    showMessage('success', 'Message sent successfully!');
  } catch (error) {
    console.error('Form submission error:', error);
    showMessage('error', 'Failed to send message. Please try again.');
  }
}

function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      showFieldError(field, 'This field is required');
    } else {
      clearFieldError(field);
    }
  });

  return isValid;
}

function showFieldError(field, message) {
  const errorDiv = field.nextElementSibling?.classList.contains('error-message') 
    ? field.nextElementSibling 
    : createErrorElement();
  
  errorDiv.textContent = message;
  if (!field.nextElementSibling?.classList.contains('error-message')) {
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  }
  field.classList.add('error');
}

function clearFieldError(field) {
  const errorDiv = field.nextElementSibling;
  if (errorDiv?.classList.contains('error-message')) {
    errorDiv.remove();
  }
  field.classList.remove('error');
}

function createErrorElement() {
  const div = document.createElement('div');
  div.className = 'error-message';
  return div;
}

function showMessage(type, text) {
  const message = document.createElement('div');
  message.className = `form-message ${type}`;
  message.textContent = text;
  
  const container = document.querySelector('.form-container');
  container.insertBefore(message, container.firstChild);
  
  setTimeout(() => message.remove(), 5000);
}
