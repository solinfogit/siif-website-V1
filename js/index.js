const nav = document.getElementById('nav');
const heroEl = document.querySelector('.hero') || document.querySelector('.nos-hero');

function checkNav() {
  nav.classList.toggle('scrolled', window.scrollY > (heroEl ? heroEl.offsetHeight - 80 : 50));
}
window.addEventListener('scroll', checkNav, { passive: true });
checkNav();

const navToggle = nav.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

/* ── Access dropdown ── */
const accessWrap = nav.querySelector('.nav-access-wrap');
const accessBtn  = accessWrap && accessWrap.querySelector('.nav-access');
if (accessBtn) {
  accessBtn.addEventListener('click', e => {
    e.stopPropagation();
    const open = accessWrap.classList.toggle('open');
    accessBtn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', () => {
    accessWrap.classList.remove('open');
    accessBtn.setAttribute('aria-expanded', 'false');
  });
  accessWrap.addEventListener('click', e => e.stopPropagation());
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      accessWrap.classList.remove('open');
      accessBtn.setAttribute('aria-expanded', 'false');
      accessBtn.focus();
    }
  });
}

const io = new IntersectionObserver(entries => {
  entries.forEach(x => {
    if (x.isIntersecting) {
      x.target.classList.add('vis');
      io.unobserve(x.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll('.sr').forEach(el => io.observe(el));
