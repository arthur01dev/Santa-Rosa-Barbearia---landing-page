// PERFORMANCE: once: true — animação roda uma vez e para de monitorar o elemento
AOS.init({
  duration: 650,
  easing: 'ease-out-cubic',
  offset: 60
});

// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function openMenu() {
  hamburger.classList.add('open');
  drawer.classList.add('open');
  overlay.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
  overlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.drawer-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Smooth scroll com offset da navbar fixa
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navbarHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
    ) || 80;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});