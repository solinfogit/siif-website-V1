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

/* ── Formulario de demo por pasos → HubSpot (+ correo de aviso) ── */
(function () {
  const form = document.getElementById('demo-form');
  if (!form) return;
  const steps = [...form.querySelectorAll('.stp')];
  const done = form.querySelector('.cta-done');
  const error = form.querySelector('.cta-error');
  const stepErr = form.querySelector('.stp-err');
  const btnBack = form.querySelector('.stp-back');
  const btnNext = form.querySelector('.stp-next');
  const submit = form.querySelector('.cta-submit');
  const submitHtml = submit.innerHTML;
  const bar = form.querySelector('.stp-bar i');
  const count = form.querySelector('.stp-count b');
  const name = form.querySelector('.stp-name');
  const WA = '573163534433';               // WhatsApp comercial
  const HUBSPOT = {
    portalId: '51079095',
    formId: 'bfe70095-cdab-497f-934e-d5dab1a05797'
  };
  let current = 0;

  const v = n => {
    const el = form.elements[n];
    if (!el) return '';
    if (el instanceof RadioNodeList || el.length > 1 && !el.tagName) return (el.value || '').trim();
    return (el.value || '').trim();
  };
  const checked = n => [...form.querySelectorAll('input[name="' + n + '"]:checked')].map(i => i.value);
  const plain = t => { const d = document.createElement('textarea'); d.innerHTML = t; return d.value; };

  function show(i, dir) {
    steps.forEach((s, k) => {
      s.hidden = k !== i;
      s.classList.toggle('back', dir === 'back');
    });
    current = i;
    bar.style.width = ((i + 1) / steps.length * 100) + '%';
    count.textContent = i + 1;
    name.textContent = steps[i].dataset.name;
    btnBack.hidden = i === 0;
    btnNext.hidden = i === steps.length - 1;
    submit.hidden = i !== steps.length - 1;
    stepErr.hidden = true;
  }

  function validate(i) {
    const step = steps[i];
    let first = null;
    step.querySelectorAll('[required]').forEach(el => {
      const val = el.value.trim();
      const ok = val && (el.type !== 'email' || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val));
      el.classList.toggle('err', !ok);
      if (!ok && !first) first = el;
    });
    step.querySelectorAll('[data-required]').forEach(group => {
      const ok = group.querySelector('input:checked');
      group.classList.toggle('err', !ok);
      if (!ok && !first) first = group.querySelector('input');
    });
    stepErr.hidden = !first;
    if (first) first.focus({ preventScroll: true });
    return !first;
  }

  form.addEventListener('input', e => {
    e.target.classList && e.target.classList.remove('err');
    const group = e.target.closest && e.target.closest('[data-required]');
    if (group) group.classList.remove('err');
    if (!form.querySelector('.err')) stepErr.hidden = true;
  });
  // Tipo de entidad: al elegirlo, el foco pasa al nombre de la entidad
  form.querySelectorAll('input[name="tipo"]').forEach(r => r.addEventListener('change', () => form.elements.entidad.focus({ preventScroll: true })));
  // Enter en un campo de texto avanza de paso en vez de enviar
  form.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && current < steps.length - 1) {
      e.preventDefault();
      btnNext.click();
    }
  });
  const keepInView = () => {
    const top = form.getBoundingClientRect().top;
    if (top < 70) window.scrollBy({ top: top - 80, behavior: 'smooth' });
  };
  btnNext.addEventListener('click', () => { if (validate(current)) { show(current + 1); keepInView(); } });
  btnBack.addEventListener('click', () => { show(current - 1, 'back'); keepInView(); });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    for (let i = 0; i < steps.length; i++) {
      if (!validate(i)) { show(i); validate(i); return; }
    }
    const tipo = plain(v('tipo'));
    const intereses = checked('interes').map(plain);
    const plazo = plain(v('plazo'));
    const sistema = plain(v('sistema'));

    // Mensaje de WhatsApp pre-llenado (solo si la persona elige seguir por WhatsApp)
    const lines = [
      'Hola, acabo de solicitar una demo de SIIFWEB.',
      '',
      '*Nombre:* ' + v('nombre') + (v('cargo') ? ' (' + v('cargo') + ')' : ''),
      '*Entidad:* ' + v('entidad') + (tipo ? ' — ' + tipo : ''),
      '*Correo:* ' + v('correo')
    ];
    if (v('telefono')) lines.push('*Teléfono:* ' + v('telefono'));
    if (intereses.length) lines.push('*Me interesa:* ' + intereses.join(', '));
    if (plazo) lines.push('*Plazo:* ' + plazo);
    if (v('mensaje')) lines.push('', v('mensaje'));
    const waHref = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n'));
    form.querySelectorAll('.cta-done-wa, .cta-error-wa').forEach(a => { a.href = waHref; });

    const nota = [
      'Entidad: ' + v('entidad'),
      tipo && 'Tipo de entidad: ' + tipo,
      intereses.length && 'Le interesa: ' + intereses.join(', '),
      plazo && 'Plazo de implementación: ' + plazo,
      sistema && 'Sistema actual: ' + sistema,
      v('mensaje') && 'Mensaje: ' + v('mensaje')
    ].filter(Boolean).join('\n');
    const field = (n, value) => ({ objectTypeId: '0-1', name: n, value });
    const fields = [
      field('firstname', v('nombre')),
      field('email', v('correo')),
      field('company', v('entidad')),
      field('message', nota)
    ];
    if (v('cargo')) fields.push(field('jobtitle', v('cargo')));
    if (v('telefono')) fields.push(field('phone', v('telefono')));

    error.hidden = true;
    submit.disabled = true;
    submit.textContent = 'Enviando…';
    try {
      const r = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/' + HUBSPOT.portalId + '/' + HUBSPOT.formId, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, context: { pageUri: location.href, pageName: document.title } })
      });
      if (!r.ok) throw new Error('HubSpot ' + r.status);
      done.hidden = false;
    } catch (err) {
      error.hidden = false;
    } finally {
      submit.disabled = false;
      submit.innerHTML = submitHtml;
    }
  });

  // Confirmación: editar (vuelve al inicio con los datos) o cerrar (limpia el formulario)
  form.querySelector('.cta-edit').addEventListener('click', () => {
    done.hidden = true;
    show(0, 'back');
  });
  form.querySelector('.cta-close').addEventListener('click', () => {
    form.reset();
    form.querySelectorAll('.err').forEach(el => el.classList.remove('err'));
    done.hidden = true;
    show(0, 'back');
  });

  // Llegada desde la ficha de un módulo: ./?modulo=Presupuesto#contacto
  const pedido = new URLSearchParams(location.search).get('modulo');
  if (pedido) {
    const n = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const op = [...form.querySelectorAll('input[name="interes"]')].find(i => n(pedido).includes(n(i.value)) || n(i.value).includes(n(pedido)));
    if (op) op.checked = true;
    form.elements.mensaje.value = 'Me interesa el módulo ' + pedido + '.';
  }

  // Llevar al formulario (no al panel azul) cuando viene de una ficha o en pantallas angostas
  const goForm = smooth => window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 84, behavior: smooth ? 'smooth' : 'auto' });
  if (location.hash === '#contacto' && (pedido || window.innerWidth <= 860)) {
    window.addEventListener('load', () => setTimeout(() => goForm(false), 50));
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href="#contacto"], a[href="./#contacto"]');
    if (a && window.innerWidth <= 860 && document.getElementById('contacto')) {
      e.preventDefault();
      history.replaceState(null, '', '#contacto');
      goForm(true);
    }
  });

  show(0);
}());
