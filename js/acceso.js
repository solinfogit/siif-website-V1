/* ── Directorio Acceso Nuevo: buscador, filtro y render ── */
(function () {
  const $search = document.getElementById('acc-search');
  const $dep    = document.getElementById('acc-dep');
  const $dir    = document.getElementById('acc-directory');
  const $empty  = document.getElementById('acc-empty');
  const $reset  = document.getElementById('acc-reset');

  const state = { q: '', dep: '' };

  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  /* Iniciales para el avatar: dos letras significativas del nombre */
  const STOP = new Set(['de', 'del', 'la', 'las', 'los', 'el', 'y', 'e']);
  function initials(nombre) {
    const words = nombre.split(/\s+/).filter(w => w && !STOP.has(norm(w)));
    if (!words.length) return '?';
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  /* ── Select de departamentos (a partir de los datos) ── */
  [...new Set(ENTIDADES.map(e => e.departamento))]
    .sort((a, b) => a.localeCompare(b, 'es'))
    .forEach(d => {
      const op = document.createElement('option');
      op.value = d;
      op.textContent = d;
      $dep.appendChild(op);
    });

  function matches(e) {
    if (state.dep && e.departamento !== state.dep) return false;
    if (state.q) {
      const hay = norm(e.nombre + ' ' + e.municipio + ' ' + e.departamento);
      if (!hay.includes(norm(state.q))) return false;
    }
    return true;
  }

  function card(e) {
    const pending = e.estado !== 'activo' || !e.url;
    const action = pending
      ? '<span class="acc-enter acc-enter--pending">Pr&oacute;ximamente</span>'
      : '<a class="acc-enter" href="' + esc(e.url) + '" target="_blank" rel="noreferrer">Siifweb' +
        '<svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 9.5l7-7M9.5 2.5H4M9.5 2.5v5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    return '<article class="acc-card' + (pending ? ' acc-card--pending' : '') + '">' +
      '<div class="acc-card-top">' +
        '<div class="acc-avatar" aria-hidden="true">' + esc(initials(e.nombre)) + '</div>' +
        '<div class="acc-card-id">' +
          '<div class="acc-card-name">' + esc(e.nombre) + '</div>' +
          '<div class="acc-card-muni">' + esc(e.municipio) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="acc-card-foot">' + action + '</div>' +
    '</article>';
  }

  function render() {
    const found = ENTIDADES.filter(matches);

    /* Agrupar por departamento, orden alfabético */
    const groups = new Map();
    found.forEach(e => {
      if (!groups.has(e.departamento)) groups.set(e.departamento, []);
      groups.get(e.departamento).push(e);
    });

    let html = '';
    [...groups.keys()].sort((a, b) => a.localeCompare(b, 'es')).forEach(dep => {
      const items = groups.get(dep).sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
      html += '<section class="acc-group">' +
        '<div class="acc-group-hd"><h2>' + esc(dep) + '</h2>' +
        '<span class="acc-group-count">' + items.length + '</span></div>' +
        '<div class="acc-grid">' + items.map(card).join('') + '</div>' +
      '</section>';
    });

    $dir.innerHTML = html;
    $empty.classList.toggle('show', !found.length);
  }

  $search.addEventListener('input', () => { state.q = $search.value.trim(); render(); });
  $dep.addEventListener('change', () => { state.dep = $dep.value; render(); });
  $reset.addEventListener('click', () => {
    state.q = state.dep = '';
    $search.value = '';
    $dep.value = '';
    render();
  });

  render();
}());
