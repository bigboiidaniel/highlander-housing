// Highlander Housing — site.js

// Mobile nav
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav    = document.getElementById('mobileNav');

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Active nav link
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === page) link.classList.add('active');
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
