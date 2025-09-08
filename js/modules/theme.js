// Theme management module
export function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  document.documentElement.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    updateThemeIcon(themeToggle);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(this);
}

function updateThemeIcon(toggleButton) {
  const icon = toggleButton.querySelector('i');
  icon.className = document.documentElement.dataset.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}
