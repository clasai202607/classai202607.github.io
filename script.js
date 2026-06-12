const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const countdown = document.querySelector('.countdown');

function updateCountdown() {
  if (!countdown) return;

  const targetTime = new Date(countdown.dataset.target).getTime();
  const remaining = Math.max(targetTime - Date.now(), 0);

  const values = {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60)
  };

  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = String(value).padStart(2, '0');
    }
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
