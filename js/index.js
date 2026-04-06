const nav = document.getElementById('nav');
const heroEl = document.querySelector('.hero');

function checkNav() {
  nav.classList.toggle('scrolled', window.scrollY > heroEl.offsetHeight - 80);
}
window.addEventListener('scroll', checkNav, { passive: true });
checkNav();

const io = new IntersectionObserver(entries => {
  entries.forEach(x => {
    if (x.isIntersecting) {
      x.target.classList.add('vis');
      io.unobserve(x.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll('.sr').forEach(el => io.observe(el));
