/* SIIFWEB Chat Widget + Cookie Banner */
(function () {
  'use strict';

  /* ── Cookie Banner ── */
  var COOKIE_KEY = 'siif_cookie_consent';

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }
  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  function buildCookieBanner() {
    if (getCookie(COOKIE_KEY)) return;
    var banner = document.createElement('div');
    banner.id = 'siif-cookie';
    banner.innerHTML =
      '<div class="ck-text">Usamos cookies esenciales para el funcionamiento del sitio y opcionales para mejorar su experiencia.' +
      ' Consulte nuestra <a href="./politica-privacidad.html#cookies">pol&iacute;tica de cookies</a>.</div>' +
      '<div class="ck-actions">' +
        '<button class="ck-btn ck-btn--decline" id="ck-decline">Solo esenciales</button>' +
        '<button class="ck-btn ck-btn--accept" id="ck-accept">Aceptar todas</button>' +
      '</div>';
    document.body.appendChild(banner);
    setTimeout(function () { banner.classList.add('visible'); }, 300);

    document.getElementById('ck-accept').addEventListener('click', function () {
      setCookie(COOKIE_KEY, 'all', 365);
      banner.classList.remove('visible');
      setTimeout(function () { banner.remove(); }, 400);
    });
    document.getElementById('ck-decline').addEventListener('click', function () {
      setCookie(COOKIE_KEY, 'essential', 365);
      banner.classList.remove('visible');
      setTimeout(function () { banner.remove(); }, 400);
    });
  }

  /* ── Knowledge Base ── */
  var KB = [
    {
      id: 'que-es',
      keys: ['qué es', 'que es', 'siifweb', 'plataforma', 'sistema', 'qué hace', 'que hace'],
      q: '¿Qué es SIIFWEB?',
      a: 'SIIFWEB es la <strong>Plataforma de Gestión Estatal</strong> de Soluciones de Información S.A.S., diseñada para la transformación digital del sector público colombiano. Integra <strong>44 módulos</strong> en un único sistema SaaS que cubre presupuesto, contratación, nómina, tesorería, contabilidad y más — con trazabilidad completa entre todos los procesos.'
    },
    {
      id: 'modulos',
      keys: ['módulos', 'modulos', 'módulo', 'funcionalidades', 'funciones', 'incluye', 'subsistemas', 'características'],
      q: '¿Qué módulos incluye?',
      a: 'SIIFWEB cuenta con <strong>44 módulos</strong> en 9 subsistemas integrados: Presupuesto, Contabilidad Pública, Tesorería, Nómina y Personal, Gestión Contractual, Almacén, Bienes e Inventarios, Atención al Ciudadano y Gestión Documental. Cada módulo se comunica con los demás en tiempo real.'
    },
    {
      id: 'precios',
      keys: ['precio', 'costo', 'cuesta', 'valor', 'tarifa', 'cotización', 'cuánto'],
      q: '¿Cuánto cuesta?',
      a: 'SIIFWEB opera bajo modelo <strong>SaaS</strong> (Software como Servicio), sin inversión en infraestructura propia. El costo se adapta al tamaño y necesidades de cada entidad. Solicite una <strong>demostración gratuita</strong> y nuestro equipo le entregará una propuesta personalizada.'
    },
    {
      id: 'implementacion',
      keys: ['implementación', 'implementacion', 'cuánto tarda', 'tiempo', 'plazo', 'arrancar', 'comenzar'],
      q: '¿Cómo es la implementación?',
      a: 'Nuestro equipo acompaña <strong>todo el proceso</strong>: diagnóstico inicial, configuración a medida, migración de datos, capacitación a funcionarios y go-live. Posterior a la implementación brindamos soporte continuo y actualizaciones incluidas, sin costos adicionales.'
    },
    {
      id: 'seguridad',
      keys: ['seguridad', 'seguro', 'certificación', 'iso', 'cumplimiento', 'normativa', 'confiable', 'datos'],
      q: '¿Es seguro?',
      a: 'Sí. Operamos bajo la norma <strong>ISO/IEC 27001</strong>. Nuestra infraestructura en <strong>AWS y Oracle Cloud</strong> garantiza redundancia geográfica y disponibilidad del <strong>99.999%</strong>. Cumplimos con MIPG, CHIP, SECOP II y toda la normativa de Gobierno Digital colombiano.'
    },
    {
      id: 'demo',
      keys: ['demo', 'demostración', 'demostracion', 'ver', 'probar', 'prueba', 'agendar', 'reunión', 'reunion'],
      q: '¿Cómo solicito una demo?',
      a: 'Puede solicitar una <strong>demostración gratuita</strong> completando el formulario en nuestra página de inicio o contactándonos directamente por WhatsApp. Nuestro equipo coordina una sesión personalizada para mostrarle los módulos más relevantes para su entidad, sin costo ni compromiso.'
    },
    {
      id: 'soporte',
      keys: ['soporte', 'ayuda', 'problema', 'error', 'falla', 'asistencia', 'técnico', 'tecnico'],
      q: 'Soporte técnico',
      a: 'Para soporte técnico ingrese a <a href="https://soporte.solinfo.com.co" target="_blank"><strong>soporte.solinfo.com.co</strong></a>, nuestra mesa de ayuda dedicada para clientes activos. También puede contactarnos por <strong>WhatsApp</strong> para casos urgentes. ¿Le conecto directamente?'
    },
    {
      id: 'entidades',
      keys: ['entidades', 'municipios', 'alcaldías', 'gobernaciones', 'clientes', 'quiénes', 'quienes', 'usan', 'atienden'],
      q: '¿Qué entidades usan SIIFWEB?',
      a: 'SIIFWEB acompaña a <strong>más de 100 entidades territoriales</strong>: alcaldías, gobernaciones, empresas sociales del Estado y entes descentralizados en todo el territorio colombiano. Con más de <strong>20 años</strong> de experiencia, conocemos profundamente la realidad operativa del sector público.'
    }
  ];

  var FALLBACK = '¡Gracias por su pregunta! Para atenderle con mayor precisión, le recomiendo hablar directamente con uno de nuestros asesores. ¿Le conectamos por WhatsApp?';

  function findAnswer(text) {
    var lower = text.toLowerCase();
    for (var i = 0; i < KB.length; i++) {
      for (var j = 0; j < KB[i].keys.length; j++) {
        if (lower.indexOf(KB[i].keys[j]) >= 0) return KB[i].a;
      }
    }
    return null;
  }

  /* ── Build Widget HTML ── */
  function buildWidget() {
    var wrap = document.createElement('div');
    wrap.id = 'siif-chat-wrap';
    wrap.innerHTML =
      /* Floating button */
      '<button id="siif-chat-btn" aria-label="Abrir asistente virtual" aria-expanded="false">' +
        '<div class="cb-pulse" aria-hidden="true"></div>' +
        '<span class="cb-badge" id="cb-badge">1</span>' +
        '<svg class="cb-icon cb-icon-chat" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#fff" stroke-width="1.9" stroke-linejoin="round"/></svg>' +
        '<svg class="cb-icon cb-close" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>' +
      '</button>' +

      /* Panel */
      '<div id="siif-chat-panel" role="dialog" aria-label="Asistente virtual SIIFWEB">' +

        /* Header */
        '<div class="sc-header">' +
          '<div class="sc-header-info">' +
            '<div class="sc-avatar" aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#fff" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#fff" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#fff" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#fff" stroke-width="1.8"/></svg>' +
            '</div>' +
            '<div><div class="sc-name">Asistente SIIFWEB</div><div class="sc-status">En l&iacute;nea ahora</div></div>' +
          '</div>' +
          '<button class="sc-close" aria-label="Cerrar asistente">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
          '</button>' +
        '</div>' +

        /* ── PHASE 1: INFO ── */
        '<div id="sc-phase-info" class="sc-phase">' +
          '<div class="sc-info-scroll">' +
            '<div class="sc-bot-bubble">' +
              '¡Hola! Soy el asistente de <strong>SIIFWEB</strong>. Antes de continuar, conozca lo que nuestra plataforma puede hacer por su entidad:' +
            '</div>' +
          '</div>' +
          '<div class="sc-info-cta">' +
            '<button class="sc-start-btn" id="sc-start-btn">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#fff" stroke-width="1.9" stroke-linejoin="round"/></svg>' +
              'Hacer una pregunta' +
            '</button>' +
          '</div>' +
        '</div>' +

        /* ── PHASE 2: CHAT ── */
        '<div id="sc-phase-chat" class="sc-phase sc-phase--hidden">' +
          '<div class="sc-messages" id="sc-messages"></div>' +
          '<div class="sc-quick" id="sc-quick"></div>' +
          '<div class="sc-input-area">' +
            '<input type="text" class="sc-input" id="sc-input" placeholder="Escriba su pregunta\u2026" maxlength="300" autocomplete="off">' +
            '<button class="sc-send" id="sc-send" aria-label="Enviar" disabled>' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '</button>' +
          '</div>' +
          '<div class="sc-powered">Asistente virtual &middot; <a href="./politica-privacidad.html" style="color:inherit">Privacidad</a></div>' +
        '</div>' +

      '</div>'; /* end panel */

    document.body.appendChild(wrap);
  }

  /* ── Widget Logic ── */
  var panelOpen = false;
  var chatPhaseActive = false;
  var msgCount = 0;
  var waShown = false;
  var isMobile = function () { return window.innerWidth <= 760; };

  function getOverlay() {
    var el = document.getElementById('siif-chat-overlay');
    if (!el && isMobile()) {
      el = document.createElement('div');
      el.id = 'siif-chat-overlay';
      document.body.appendChild(el);
      el.addEventListener('click', closePanel);
    }
    return el;
  }

  function openPanel() {
    panelOpen = true;
    var btn = document.getElementById('siif-chat-btn');
    var panel = document.getElementById('siif-chat-panel');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    panel.classList.add('open');
    var badge = document.getElementById('cb-badge');
    if (badge) badge.classList.add('hidden');
    if (isMobile()) {
      var ov = getOverlay();
      if (ov) { ov.style.display = 'block'; setTimeout(function () { ov.classList.add('visible'); }, 10); }
    }
  }

  function closePanel() {
    panelOpen = false;
    var btn = document.getElementById('siif-chat-btn');
    var panel = document.getElementById('siif-chat-panel');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    panel.classList.remove('open');
    var ov = document.getElementById('siif-chat-overlay');
    if (ov) {
      ov.classList.remove('visible');
      setTimeout(function () { ov.style.display = 'none'; }, 300);
    }
  }

  function switchToChat() {
    chatPhaseActive = true;
    document.getElementById('sc-phase-info').classList.add('sc-phase--hidden');
    var chatPhase = document.getElementById('sc-phase-chat');
    chatPhase.classList.remove('sc-phase--hidden');
    addBotMessage('¡Perfecto! ¿En qué puedo ayudarle? Puede escribir su pregunta o elegir un tema frecuente:');
    renderQuickReplies();
    document.getElementById('sc-input').focus();
  }

  function addBotMessage(html, showTyping) {
    var msgs = document.getElementById('sc-messages');
    if (showTyping) {
      var typing = document.createElement('div');
      typing.className = 'sc-msg sc-msg--bot';
      typing.innerHTML =
        '<div class="sc-msg-avatar" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/></svg>' +
        '</div>' +
        '<div class="sc-msg-text"><div class="sc-typing"><span></span><span></span><span></span></div></div>';
      msgs.appendChild(typing);
      msgs.scrollTop = msgs.scrollHeight;
      setTimeout(function () {
        typing.querySelector('.sc-msg-text').innerHTML = html;
        msgs.scrollTop = msgs.scrollHeight;
        msgCount++;
        if (msgCount >= 2 && !waShown) showWaCta();
      }, 700 + Math.random() * 400);
    } else {
      var msg = document.createElement('div');
      msg.className = 'sc-msg sc-msg--bot';
      msg.innerHTML =
        '<div class="sc-msg-avatar" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#1264A8" stroke-width="1.8"/></svg>' +
        '</div>' +
        '<div class="sc-msg-text">' + html + '</div>';
      msgs.appendChild(msg);
      msgs.scrollTop = msgs.scrollHeight;
    }
  }

  function addUserMessage(text) {
    var msgs = document.getElementById('sc-messages');
    var msg = document.createElement('div');
    msg.className = 'sc-msg sc-msg--user';
    msg.innerHTML = '<div class="sc-msg-text">' + escapeHtml(text) + '</div>';
    msgs.appendChild(msg);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showWaCta() {
    waShown = true;
    var msgs = document.getElementById('sc-messages');
    var cta = document.createElement('div');
    cta.className = 'sc-wa-cta';
    cta.innerHTML =
      '<div class="sc-wa-cta-text">' +
        '<strong>¿Prefiere hablar con un asesor?</strong>' +
        'Nuestro equipo está listo en WhatsApp.' +
      '</div>' +
      '<a href="https://wa.me/573232268844" target="_blank" rel="noreferrer" class="sc-wa-link">WhatsApp</a>';
    msgs.appendChild(cta);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function renderQuickReplies() {
    var quick = document.getElementById('sc-quick');
    quick.innerHTML = '';
    var shown = KB.slice(0, 5);
    shown.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className = 'sc-quick-btn';
      btn.textContent = item.q;
      btn.addEventListener('click', function () {
        addUserMessage(item.q);
        quick.innerHTML = '';
        addBotMessage(item.a, true);
      });
      quick.appendChild(btn);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function handleSend() {
    var input = document.getElementById('sc-input');
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    document.getElementById('sc-send').disabled = true;
    addUserMessage(text);
    document.getElementById('sc-quick').innerHTML = '';
    var answer = findAnswer(text);
    addBotMessage(answer || FALLBACK, true);
    if (!answer && !waShown) {
      setTimeout(function () {
        if (!waShown) showWaCta();
      }, 1300);
    }
  }

  function initWidget() {
    buildWidget();

    var btn = document.getElementById('siif-chat-btn');
    var closeBtn = document.querySelector('.sc-close');
    var startBtn = document.getElementById('sc-start-btn');
    var input = document.getElementById('sc-input');
    var sendBtn = document.getElementById('sc-send');

    btn.addEventListener('click', function () {
      if (panelOpen) closePanel(); else openPanel();
    });
    closeBtn.addEventListener('click', closePanel);
    startBtn.addEventListener('click', switchToChat);

    input.addEventListener('input', function () {
      sendBtn.disabled = input.value.trim().length === 0;
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
    });
    sendBtn.addEventListener('click', handleSend);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panelOpen) closePanel();
    });
  }

  /* ── Init ── */
  function run() {
    buildCookieBanner();
    initWidget();
    /* Auto-open on desktop/tablet only, once per session */
    if (window.innerWidth > 760 && !sessionStorage.getItem('siif_chat_opened')) {
      setTimeout(function () {
        if (!panelOpen) {
          openPanel();
          sessionStorage.setItem('siif_chat_opened', '1');
        }
      }, 2200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
}());
