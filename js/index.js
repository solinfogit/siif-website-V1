const nav = document.getElementById('nav');
const heroEl = document.querySelector('.hero') || document.querySelector('.nos-hero');

const lightHero = heroEl && heroEl.classList.contains('hero--light');
function checkNav() {
  nav.classList.toggle('scrolled', lightHero || window.scrollY > (heroEl ? heroEl.offsetHeight - 80 : 50));
}

/* ── Pausa de la animación del hero ── */
const heroPause = document.querySelector('.hero-pause');
if (heroPause) {
  const playIco = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.8v8.4L10 6Z" fill="currentColor"/></svg>';
  const pauseIco = heroPause.innerHTML;
  heroPause.addEventListener('click', () => {
    const paused = heroEl.classList.toggle('paused');
    heroPause.innerHTML = paused ? playIco : pauseIco;
    heroPause.setAttribute('aria-label', paused ? 'Reanudar animación' : 'Pausar animación');
  });
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

/* ── Active nav page ── */
(function () {
  const p = window.location.pathname;
  const isHome = p === '/' || p.endsWith('/index.html');
  document.querySelectorAll('.nav-links > li > a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href === '#contacto' || href === '#') return;
    const clean = href.replace(/^\.\//, '').split('#')[0];
    const cleanNoExt = clean.replace(/\.html$/, '');
    if (
      (clean === '' && isHome) ||
      (clean && (p.endsWith('/' + clean) || p.endsWith('/' + cleanNoExt)))
    ) {
      a.classList.add('active');
    }
  });
}());

/* ── Conteo animado de cifras ── */
(function () {
  const els = document.querySelectorAll('.stat-n[data-count]');
  if (!els.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const fmt = (el, v) => {
    const dec = +(el.dataset.dec || 0);
    el.textContent = (el.dataset.prefix || '') + v.toFixed(dec).replace('.', ',') + (el.dataset.suffix || '');
  };
  const run = el => {
    const target = parseFloat(el.dataset.count);
    const dec = +(el.dataset.dec || 0);
    const from = dec ? target - 9 : 0;
    const t0 = performance.now(), dur = 1600;
    const step = now => {
      const k = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - k, 4);
      fmt(el, from + (target - from) * e);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver(entries => {
    entries.forEach(x => { if (x.isIntersecting) { run(x.target); obs.unobserve(x.target); } });
  }, { threshold: .6 });
  els.forEach(el => { fmt(el, dec0(el)); obs.observe(el); });
  function dec0(el) { return +(el.dataset.dec || 0) ? parseFloat(el.dataset.count) - 9 : 0; }
}());

/* ── Formulario de demo → WhatsApp + HubSpot ── */
(function () {
  const form = document.getElementById('demo-form');
  if (!form) return;
  const done = form.querySelector('.cta-done');
  const WA = '573163534433';               // WhatsApp comercial (Juan Valentín)
  const HUBSPOT = {
    portalId: '51079095',
    formId: 'bfe70095-cdab-497f-934e-d5dab1a05797'   // Formulario HubSpot (vacío = no se envía)
  };
  form.addEventListener('input', e => e.target.classList && e.target.classList.remove('err'));
  form.addEventListener('submit', e => {
    e.preventDefault();
    let first = null;
    form.querySelectorAll('[required]').forEach(el => {
      const ok = el.value.trim() && (el.type !== 'email' || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value.trim()));
      el.classList.toggle('err', !ok);
      if (!ok && !first) first = el;
    });
    if (first) { first.focus(); return; }
    const v = n => (form.elements[n] && form.elements[n].value || '').trim();
    const intereses = [...form.querySelectorAll('input[name="interes"]:checked')].map(i => i.value);
    const lines = [
      'Hola, quiero agendar una demo de SIIFWEB.',
      '',
      '*Nombre:* ' + v('nombre') + (v('cargo') ? ' (' + v('cargo') + ')' : ''),
      '*Entidad:* ' + v('entidad') + (v('tipo') ? ' — ' + v('tipo') : ''),
      '*Correo:* ' + v('correo')
    ];
    if (v('telefono')) lines.push('*Teléfono:* ' + v('telefono'));
    if (intereses.length) lines.push('*Me interesa:* ' + intereses.join(', '));
    if (v('mensaje')) lines.push('', v('mensaje'));
    // WhatsApp se abre primero (dentro del clic, para que el navegador no lo bloquee)
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    done.hidden = false;

    // HubSpot: crea/actualiza el contacto aunque la persona no envíe el WhatsApp
    if (HUBSPOT.formId) {
      const nota = [
        v('tipo') && 'Tipo de entidad: ' + v('tipo'),
        intereses.length && 'Le interesa: ' + intereses.join(', '),
        v('mensaje') && 'Mensaje: ' + v('mensaje')
      ].filter(Boolean).join('\n');
      const field = (name, value) => ({ objectTypeId: '0-1', name, value });
      const fields = [
        field('firstname', v('nombre')),
        field('email', v('correo')),
        field('company', v('entidad'))
      ];
      if (v('cargo')) fields.push(field('jobtitle', v('cargo')));
      if (v('telefono')) fields.push(field('phone', v('telefono')));
      if (nota) fields.push(field('message', nota));
      fetch('https://api.hsforms.com/submissions/v3/integration/submit/' + HUBSPOT.portalId + '/' + HUBSPOT.formId, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({ fields, context: { pageUri: location.href, pageName: document.title } })
      }).catch(() => {});
    }
  });
  form.querySelector('.cta-again').addEventListener('click', () => { done.hidden = true; });
}());
