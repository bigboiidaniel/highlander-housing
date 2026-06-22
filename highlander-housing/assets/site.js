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

/* ==========================================================================
   Scroll-Synced Video Preview
   ========================================================================== */
function initScrollSyncedVideo() {
  const section = document.getElementById('scrollVideo');
  const video   = document.getElementById('scrollVideoMedia');
  if (!section || !video) return;

  const FALLBACK_DURATION = 8;
  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    section.classList.add('no-scrub');
    return;
  }

  const park = () => { try { video.pause(); } catch (e) {} };
  video.addEventListener('play', park);
  video.addEventListener('loadedmetadata', park);
  park();

  let duration = FALLBACK_DURATION;
  const refreshDuration = () => {
    if (isFinite(video.duration) && video.duration > 0) duration = video.duration;
  };
  video.addEventListener('loadedmetadata', refreshDuration);
  video.addEventListener('durationchange', refreshDuration);
  refreshDuration();

  let ticking = false;
  let lastT = -1;

  function update() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const scrubDistance = section.offsetHeight - vh;
    if (scrubDistance <= 0) return;

    let progress = (-rect.top) / scrubDistance;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    const t = progress * duration;
    if (Math.abs(t - lastT) > 0.02) {
      lastT = t;
      try { video.currentTime = t; } catch (e) {}
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  video.addEventListener('loadeddata', update);
  update();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollSyncedVideo);
} else {
  initScrollSyncedVideo();
}
