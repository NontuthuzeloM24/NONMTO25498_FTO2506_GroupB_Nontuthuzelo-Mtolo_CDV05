// ====== Mobile Nav Toggle ======
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ====== Smooth Scrolling ======
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after click
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// ====== Dark Mode Toggle ======
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  htmlElement.classList.add('dark');
  if (themeToggle) themeToggle.textContent = '☀️';
} else {
  htmlElement.classList.remove('dark');
  if (themeToggle) themeToggle.textContent = '🌙';
}

// Toggle dark mode on click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });
}


