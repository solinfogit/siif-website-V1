const modulesData = [
  {
    id: 'financiero',
    title: 'Gestión financiera',
    intro: 'M&oacute;dulos para la gesti&oacute;n contable, presupuestal, de tesorer&iacute;a e integraciones financieras de la entidad.',
    modules: [
      { name: 'Contabilidad', description: 'Integra la gesti&oacute;n contable con los procesos institucionales, genera estados financieros, auxiliares, informes CHIP, ex&oacute;gena DIAN y soporta cierres mensuales y anuales.' },
      { name: 'Presupuesto', description: 'Administra integralmente presupuesto de ingresos y egresos, PAC, compromisos, disponibilidades, reportes de ejecuci&oacute;n y libros presupuestales con salida a organismos de control.' },
      { name: 'Tesorer&iacute;a', description: 'Gestiona ingresos y egresos, caja y bancos, archivos planos de pago, conciliaci&oacute;n operativa y control de obligaciones pendientes con integraci&oacute;n bancaria.' },
      { name: 'Integraci&oacute;n Rentas', description: 'Automatiza registros de causaci&oacute;n y pago desde web services o archivos provistos por los procesos de rentas de la entidad.' },
      { name: 'Integraci&oacute;n Humano Mineducaci&oacute;n', description: 'Facilita la articulaci&oacute;n del componente humano con procesos financieros y de n&oacute;mina para mantener consistencia operativa y contable.' },
      { name: 'Integraci&oacute;n Estampillas Desmaterializadas', description: 'Permite incorporar operaciones de estampillas desmaterializadas al flujo financiero con control de trazabilidad e integraci&oacute;n institucional.' },
      { name: 'Construcciones en Curso', description: 'Apoya el registro y control contable de obras y activos en ejecuci&oacute;n dentro de la estructura financiera de la entidad.' },
      { name: 'Deuda P&uacute;blica', description: 'Centraliza el seguimiento de obligaciones de deuda y su articulaci&oacute;n con la gesti&oacute;n presupuestal, contable y financiera.' },
      { name: 'Provisiones Judiciales', description: 'Soporta el manejo financiero y contable de provisiones derivadas de procesos judiciales y obligaciones asociadas.' }
    ]
  },
  {
    id: 'contratacion',
    title: 'Contratación',
    intro: 'Componentes orientados al ciclo precontractual, contractual y la trazabilidad de obligaciones y pagos.',
    modules: [
      { name: 'Precontractual', description: 'Da seguimiento al tr&aacute;mite desde el estudio previo, con expediente virtual, radicado &uacute;nico, alertas, aprobaciones y trazabilidad completa.' },
      { name: 'Contrataci&oacute;n', description: 'Consolida la informaci&oacute;n contractual y el flujo de legalizaci&oacute;n, p&oacute;lizas, documentos firmados y tiempos de gesti&oacute;n por etapa.' },
      { name: 'Gesti&oacute;n de Gasto', description: 'Controla procesos de pago parametrizados, actuaciones, responsables y documentos generados durante la ejecuci&oacute;n del gasto.' },
      { name: 'Bandeja Pagos Tesorer&iacute;a', description: 'Organiza prioridades operativas y permite a cada actor identificar procesos nuevos, cr&iacute;ticos o pendientes dentro del flujo de pagos.' }
    ]
  },
  {
    id: 'recursos-fisicos',
    title: 'Recursos Físicos',
    intro: 'M&oacute;dulos para administrar activos, suministros y bienes institucionales con control centralizado.',
    modules: [
      { name: 'Suministros', description: 'Administra cat&aacute;logo, stock, solicitudes, aprobaciones, kardex, saldos por bodega y consumos por dependencia para elementos de consumo.' },
      { name: 'Devolutivos', description: 'Controla activos devolutivos con hoja de vida, depreciaci&oacute;n, deterioro, traslados, asignaci&oacute;n por responsable y conciliaci&oacute;n contable.' },
      { name: 'Bienes Inmuebles', description: 'Gestiona inventario inmobiliario con ficha catastral, ubicaci&oacute;n, valoraci&oacute;n, documentos, depreciaci&oacute;n y relaci&oacute;n entre predios y construcciones.' }
    ]
  },
  {
    id: 'recursos-humanos',
    title: 'Recursos Humanos',
    intro: 'Herramientas para la gesti&oacute;n del ciclo laboral, novedades, n&oacute;mina, obligaciones y procesos del talento humano.',
    modules: [
      { name: 'Biodata', description: 'Administra la informaci&oacute;n b&aacute;sica y laboral del empleado: vinculaci&oacute;n, cargos, historia laboral, datos personales, ausentismos y afiliaciones.' },
      { name: 'Liquidaci&oacute;n N&oacute;mina', description: 'Gestiona periodos de liquidaci&oacute;n, conceptos de n&oacute;mina, novedades, provisiones y genera archivos planos para pago bancario.' },
      { name: 'Obligaciones y Embargos', description: 'Controla libranzas, descuentos y embargos judiciales aplicados al empleado a trav&eacute;s del proceso de n&oacute;mina.' },
      { name: 'Parafiscales', description: 'Apoya el manejo de obligaciones parafiscales y su articulaci&oacute;n con la operaci&oacute;n laboral, de n&oacute;mina y reportes del subsistema.' },
      { name: 'Gesti&oacute;n Virtualizada de Novedades', description: 'Facilita la administraci&oacute;n de novedades y movimientos asociados al talento humano dentro de un flujo digital centralizado.' }
    ]
  },
  {
    id: 'oficina-virtual',
    title: 'Oficina Virtual',
    intro: 'Portales de acceso especializados para funcionarios y proveedores dentro del ecosistema SIIFWEB.',
    modules: [
      { name: 'Portal del Funcionario', description: 'Permite generar volantes de pago, certificados de ingresos y retenciones, consultar bienes a cargo y afiliaciones a seguridad social.' },
      { name: 'Portal del Proveedor', description: 'Facilita consulta de procesos y pagos, certificados tributarios y certificados de ingresos y retenciones para contratistas parametrizados.' }
    ]
  },
  {
    id: 'planeacion',
    title: 'Planeación',
    intro: 'M&oacute;dulos para formular, seguir y visualizar proyectos, resultados e instrumentos de planeaci&oacute;n territorial.',
    modules: [
      { name: 'Banco de Proyectos', description: 'Gestiona radicaci&oacute;n, importaci&oacute;n MGA, estados, actividades, metas de producto, certificados y reportes de proyectos institucionales.' },
      { name: 'Seguimiento Proyectos', description: 'Permite importar planes de acci&oacute;n, ponderar actividades y reportar avances cuantitativos o cualitativos con validaci&oacute;n y control.' },
      { name: 'Seguimiento Plan de Desarrollo', description: 'Monitorea metas de producto y resultado con tableros, indicadores semaforizados e informes de planeaci&oacute;n, seguimiento y control.' },
      { name: 'Seguimiento Plan de Acci&oacute;n', description: 'Estructura y controla el avance operativo de planes de acci&oacute;n mediante importaciones, ponderaciones y reportes descentralizados.' },
      { name: 'Seguimiento Resultados', description: 'Consolida resultados e indicadores para evaluar desempe&ntilde;o institucional por entidad, metas y estructura del plan de desarrollo.' },
      { name: 'Tablero de Control Gerencial', description: 'Presenta indicadores de eficiencia, eficacia y efectividad con visualizaci&oacute;n gerencial para proyectos, metas y ejecuci&oacute;n presupuestal.' }
    ]
  },
  {
    id: 'rentas-municipales',
    title: 'Rentas Municipales',
    intro: 'Componentes tributarios y de integraci&oacute;n para la administraci&oacute;n de ingresos, recaudo y servicios asociados.',
    modules: [
      { name: 'Predial', description: 'Soporta cargue catastral, liquidaci&oacute;n y reliquidaci&oacute;n, facturaci&oacute;n masiva, paz y salvos, cuenta corriente y trazabilidad sobre cartera del predio.' },
      { name: 'Industria y Comercio', description: 'Administra contribuyentes, autodeclaraciones, tarifas, cartera, facturaci&oacute;n, certificados, ex&oacute;genas y reportes operativos del impuesto.' },
      { name: 'Portal Tributario', description: 'Habilita declaraci&oacute;n web, firma electr&oacute;nica, impresi&oacute;n con c&oacute;digo de barras, pagos en l&iacute;nea y generaci&oacute;n de paz y salvos.' },
      { name: 'Web Services Bancarios', description: 'Permite integrar recaudos y validaciones de pago con entidades financieras a trav&eacute;s de servicios bancarios conectados.' },
      { name: 'Rentas Varias', description: 'Gestiona otras rentas directas, parametriza conceptos y tarifas, y genera recibos de pago para m&uacute;ltiples conceptos por dependencia.' },
      { name: 'Web Services Integraci&oacute;n Terceros', description: 'Facilita la interoperabilidad con proveedores externos para intercambio de informaci&oacute;n asociada a rentas y recaudo.' }
    ]
  },
  {
    id: 'recuperacion-cartera',
    title: 'Recuperación de Cartera',
    intro: 'M&oacute;dulos dirigidos al seguimiento de cartera, fiscalizaci&oacute;n, cobro coactivo e integraciones de recaudo.',
    modules: [
      { name: 'Fiscalizaci&oacute;n', description: 'Automatiza expedientes de fiscalizaci&oacute;n con etapas, actividades, documentos, criterios de selecci&oacute;n y trazabilidad total del proceso.' },
      { name: 'Cobro Coactivo', description: 'Gestiona expedientes de cobranza con seguimiento por funcionario, alertas, documentos PDF y control detallado de la gesti&oacute;n.' },
      { name: 'Acuerdos de Pago', description: 'Permite simular deudas, registrar convenios, liquidar financiaci&oacute;n, emitir recibos y generar resoluciones y pagar&eacute;s.' },
      { name: 'Portal de Acuerdos de Pago', description: 'Extiende la consulta y gesti&oacute;n asociada a convenios para facilitar interacci&oacute;n y seguimiento de los acuerdos registrados.' },
      { name: 'Web Service Bancarios', description: 'Integra pagos y recaudos desde servicios bancarios para afectar y controlar la cartera de forma directa.' },
      { name: 'Web Services Integraci&oacute;n Terceros', description: 'Conecta procesos de cartera y fiscalizaci&oacute;n con fuentes externas para intercambio de datos y soporte operativo.' }
    ]
  },
  {
    id: 'gesdoc',
    title: 'Gestión Documental',
    intro: 'M&oacute;dulos para la gesti&oacute;n documental y la atenci&oacute;n formal de comunicaciones y requerimientos.',
    modules: [
      { name: 'Gesti&oacute;n Documental', description: 'Controla producci&oacute;n, recepci&oacute;n, clasificaci&oacute;n, reparto, alertas y consulta de documentos con trazabilidad y TRD.' },
      { name: 'Actos Administrativos', description: 'Gestiona actos desde plantillas, consecutivos, aprobaciones, firmas y distribuci&oacute;n interna dentro del flujo documental institucional.' },
      { name: 'PQRS', description: 'Administra peticiones, quejas, reclamos, sugerencias, denuncias y felicitaciones con radicado &uacute;nico, responsables, plazos e historial de acciones.' }
    ]
  }
];

/* ── Category-level icons ── */
function iconSvg(name, groupId) {
  const value = `${groupId} ${name}`.toLowerCase();

  if (value.includes('contabilidad') || value.includes('presupuesto') || value.includes('tesorer') || value.includes('rentas') || value.includes('estampillas') || value.includes('deuda'))
    return '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="2.5" stroke-width="1.8"/><path d="M8 10.5h8M8 14.5h5" stroke-width="1.8" stroke-linecap="round"/><path d="M15.5 4v4" stroke-width="1.8" stroke-linecap="round"/></svg>';
  if (value.includes('contrat') || value.includes('precontractual') || value.includes('acto'))
    return '<svg viewBox="0 0 24 24" fill="none"><path d="M8 4.5h8l3 3V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V6A1.5 1.5 0 0 1 6.5 4.5Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M13 4.5V8h3.5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 13 2 2 4-4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  if (value.includes('suministros') || value.includes('devolutivos') || value.includes('bienes') || value.includes('inmuebles') || value.includes('construcciones'))
    return '<svg viewBox="0 0 24 24" fill="none"><path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-8.5Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 20.5v-6h5v6" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  if (value.includes('nómina') || value.includes('nomina') || value.includes('biodata') || value.includes('parafiscales') || value.includes('embargos') || value.includes('funcionario') || value.includes('proveedor'))
    return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke-width="1.8"/><path d="M5.5 19c1.2-3 3.6-4.5 6.5-4.5s5.3 1.5 6.5 4.5" stroke-width="1.8" stroke-linecap="round"/></svg>';
  if (value.includes('proyectos') || value.includes('plane') || value.includes('tablero') || value.includes('resultados'))
    return '<svg viewBox="0 0 24 24" fill="none"><path d="M5 18.5h14" stroke-width="1.8" stroke-linecap="round"/><path d="M7.5 16V11M12 16V7.5M16.5 16v-5" stroke-width="1.8" stroke-linecap="round"/><circle cx="7.5" cy="9.5" r="1" fill="currentColor"/><circle cx="12" cy="6" r="1" fill="currentColor"/><circle cx="16.5" cy="9" r="1" fill="currentColor"/></svg>';
  if (value.includes('predial') || value.includes('tribut') || value.includes('cartera') || value.includes('fiscaliz') || value.includes('acuerdos de pago') || value.includes('cobro coactivo'))
    return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7.5" stroke-width="1.8"/><path d="M12 7.5v9M8.8 9.5c.5-1 1.7-1.7 3.2-1.7 1.7 0 3 .9 3 2.2 0 3-6.2 1.2-6.2 4 0 1.3 1.3 2.2 3.2 2.2 1.5 0 2.7-.6 3.2-1.7" stroke-width="1.8" stroke-linecap="round"/></svg>';
  if (value.includes('documental') || value.includes('pqrs') || value.includes('portal') || value.includes('web service'))
    return '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="2.5" stroke-width="1.8"/><path d="m7 9 5 4 5-4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  return '<svg viewBox="0 0 24 24" fill="none"><rect x="4.5" y="4.5" width="15" height="15" rx="3" stroke-width="1.8"/><path d="M8.5 12h7" stroke-width="1.8" stroke-linecap="round"/><path d="M12 8.5v7" stroke-width="1.8" stroke-linecap="round"/></svg>';
}

/* ── Module-specific icons ── */
const moduleIconMap = {
  'financiero:contabilidad': '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4.5" width="14" height="15" rx="2.5" stroke-width="1.8"/><path d="M9 9.5h6M9 13.5h6M9 17.5h3" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'financiero:presupuesto': '<svg viewBox="0 0 24 24" fill="none"><path d="M12 4.5a7.5 7.5 0 1 1-7.5 7.5" stroke-width="1.8" stroke-linecap="round"/><path d="M12 4.5v7.5h7.5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'financiero:tesorer&iacute;a': '<svg viewBox="0 0 24 24" fill="none"><rect x="4.5" y="7" width="15" height="10" rx="2.5" stroke-width="1.8"/><path d="M8 12h8M8 15h4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'financiero:integraci&oacute;n rentas': '<svg viewBox="0 0 24 24" fill="none"><path d="M8.5 8.5h-2A2.5 2.5 0 0 0 4 11v2a2.5 2.5 0 0 0 2.5 2.5h2M15.5 8.5h2A2.5 2.5 0 0 1 20 11v2a2.5 2.5 0 0 1-2.5 2.5h-2" stroke-width="1.8" stroke-linecap="round"/><path d="M9 12h6" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'financiero:integraci&oacute;n humano mineducaci&oacute;n': '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="2.5" stroke-width="1.8"/><path d="M4.8 18c.8-2.2 2.3-3.5 4.2-3.5s3.4 1.3 4.2 3.5" stroke-width="1.8" stroke-linecap="round"/><path d="M15 8h5M17.5 5.5v5" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'financiero:integraci&oacute;n estampillas desmaterializadas': '<svg viewBox="0 0 24 24" fill="none"><path d="M7 5.5h10l2 2v9l-2 2H7l-2-2v-9l2-2Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 9.5h6M9 13.5h4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'financiero:construcciones en curso': '<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 19.5h15M7 19.5V11l5-3 5 3v8.5M12 8V4.5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'financiero:deuda p&uacute;blica': '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M8.8 8.5c.5-1 1.7-1.7 3.2-1.7 1.7 0 3 .9 3 2.2 0 3-6.2 1.2-6.2 4 0 1.3 1.3 2.2 3.2 2.2 1.5 0 2.7-.6 3.2-1.7" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="8" stroke-width="1.8"/></svg>',
  'financiero:provisiones judiciales': '<svg viewBox="0 0 24 24" fill="none"><path d="M12 4.5 18 7v4.5c0 3.6-2.3 6.8-6 8-3.7-1.2-6-4.4-6-8V7l6-2.5Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 12h5" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'contratacion:precontractual': '<svg viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="4.5" stroke-width="1.8"/><path d="m13.5 13.5 4 4" stroke-width="1.8" stroke-linecap="round"/><path d="M10 8v4M8 10h4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'contratacion:contrataci&oacute;n': '<svg viewBox="0 0 24 24" fill="none"><path d="M8 5.5h8l3 3V18a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18V7A1.5 1.5 0 0 1 6.5 5.5Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M13 5.5V9h3.5" stroke-width="1.8" stroke-linecap="round"/><path d="m9 14 1.8 1.8 4.2-4.3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'contratacion:gesti&oacute;n de gasto': '<svg viewBox="0 0 24 24" fill="none"><path d="M6 8.5h12M6 12h12M6 15.5h7" stroke-width="1.8" stroke-linecap="round"/><rect x="4.5" y="5" width="15" height="14" rx="2.5" stroke-width="1.8"/></svg>',
  'contratacion:bandeja pagos tesorer&iacute;a': '<svg viewBox="0 0 24 24" fill="none"><path d="M5 8.5h14v8.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8.5Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8.5V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5v2" stroke-width="1.8"/><path d="M9 13h6" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recursos-fisicos:suministros': '<svg viewBox="0 0 24 24" fill="none"><path d="M5 8.5 12 5l7 3.5-7 3.5L5 8.5Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M5 8.5V16l7 3.5 7-3.5V8.5" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  'recursos-fisicos:devolutivos': '<svg viewBox="0 0 24 24" fill="none"><path d="M7 6.5h10v11H7z" stroke-width="1.8"/><path d="M9.5 9.5h5M9.5 13h5" stroke-width="1.8" stroke-linecap="round"/><path d="M12 4.5v2" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recursos-fisicos:bienes inmuebles': '<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 19.5h15M7 19.5V10l5-4 5 4v9.5M10 13.5h4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'recursos-humanos:biodata': '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke-width="1.8"/><path d="M6 19c1-3 3.2-4.5 6-4.5S17 16 18 19" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recursos-humanos:liquidaci&oacute;n n&oacute;mina': '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4.5" width="14" height="15" rx="2.5" stroke-width="1.8"/><path d="M9 8.5h6M9 12h6M9 15.5h3" stroke-width="1.8" stroke-linecap="round"/><path d="M15.5 4.5v4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recursos-humanos:obligaciones y embargos': '<svg viewBox="0 0 24 24" fill="none"><path d="M7 7.5h10M9 10.5h6M12 10.5v6" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="7.5" stroke-width="1.8"/></svg>',
  'recursos-humanos:parafiscales': '<svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="2" stroke-width="1.8"/><circle cx="16" cy="8" r="2" stroke-width="1.8"/><circle cx="12" cy="16" r="2" stroke-width="1.8"/><path d="M9.6 9.2 10.8 14M14.4 9.2 13.2 14" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recursos-humanos:gesti&oacute;n virtualizada de novedades': '<svg viewBox="0 0 24 24" fill="none"><path d="M7 7.5h10v9H7z" stroke-width="1.8"/><path d="m9 5.5 3-2 3 2M9 18.5l3 2 3-2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'oficina-virtual:portal del funcionario': '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4.5" width="14" height="15" rx="2.5" stroke-width="1.8"/><circle cx="12" cy="10" r="2.5" stroke-width="1.8"/><path d="M8.5 16c.8-1.8 2-2.8 3.5-2.8s2.7 1 3.5 2.8" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'oficina-virtual:portal del proveedor': '<svg viewBox="0 0 24 24" fill="none"><path d="M5 8.5h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" stroke-width="1.8"/><path d="M9.5 13h5" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'planeacion:banco de proyectos': '<svg viewBox="0 0 24 24" fill="none"><path d="M6 18.5h12M8 15V9M12 15V6M16 15v-3" stroke-width="1.8" stroke-linecap="round"/><path d="M5 18.5h14" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'planeacion:seguimiento proyectos': '<svg viewBox="0 0 24 24" fill="none"><path d="M5 18.5h14" stroke-width="1.8" stroke-linecap="round"/><path d="m7.5 15 2.5-2.5 2.5 1.5 4-4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.5" cy="15" r="1" fill="currentColor"/><circle cx="10" cy="12.5" r="1" fill="currentColor"/><circle cx="12.5" cy="14" r="1" fill="currentColor"/><circle cx="16.5" cy="10" r="1" fill="currentColor"/></svg>',
  'planeacion:seguimiento plan de desarrollo': '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6.5h12v11H6z" stroke-width="1.8"/><path d="M9 10h6M9 13h4" stroke-width="1.8" stroke-linecap="round"/><path d="M15.5 4.5v4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'planeacion:seguimiento plan de acci&oacute;n': '<svg viewBox="0 0 24 24" fill="none"><path d="M8 6.5h8M8 12h8M8 17.5h5" stroke-width="1.8" stroke-linecap="round"/><circle cx="6" cy="6.5" r="1" fill="currentColor"/><circle cx="6" cy="12" r="1" fill="currentColor"/><circle cx="6" cy="17.5" r="1" fill="currentColor"/></svg>',
  'planeacion:seguimiento resultados': '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7.5" stroke-width="1.8"/><path d="M12 12 16 9" stroke-width="1.8" stroke-linecap="round"/><path d="M12 7.5v4.5" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'planeacion:tablero de control gerencial': '<svg viewBox="0 0 24 24" fill="none"><rect x="4.5" y="5" width="15" height="14" rx="2.5" stroke-width="1.8"/><path d="M8 14.5V11M12 14.5V8.5M16 14.5v-3" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'rentas-municipales:predial': '<svg viewBox="0 0 24 24" fill="none"><path d="M5 19.5h14M7.5 19.5V10l4.5-3.5 4.5 3.5v9.5" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 13h4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'rentas-municipales:industria y comercio': '<svg viewBox="0 0 24 24" fill="none"><path d="M5 10.5h14v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-8Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 10.5V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2.5" stroke-width="1.8"/></svg>',
  'rentas-municipales:portal tributario': '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4.5" width="14" height="15" rx="2.5" stroke-width="1.8"/><path d="m8 9 4 3 4-3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.5h8" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'rentas-municipales:web services bancarios': '<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 9 12 5l7.5 4v1.5h-15V9ZM6.5 10.5v6M10.5 10.5v6M14.5 10.5v6M18.5 10.5v6M5 18.5h14" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'rentas-municipales:rentas varias': '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7.5" stroke-width="1.8"/><path d="M12 8v8M9 10.5h6M9 13.5h6" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'rentas-municipales:web services integraci&oacute;n terceros': '<svg viewBox="0 0 24 24" fill="none"><path d="M8.5 8.5h-2A2.5 2.5 0 0 0 4 11v2a2.5 2.5 0 0 0 2.5 2.5h2M15.5 8.5h2A2.5 2.5 0 0 1 20 11v2a2.5 2.5 0 0 1-2.5 2.5h-2" stroke-width="1.8" stroke-linecap="round"/><path d="M9 12h6" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recuperacion-cartera:fiscalizaci&oacute;n': '<svg viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="4.5" stroke-width="1.8"/><path d="m13.5 13.5 4 4" stroke-width="1.8" stroke-linecap="round"/><path d="M10 8v4M8 10h4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recuperacion-cartera:cobro coactivo': '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M8.8 8.5c.5-1 1.7-1.7 3.2-1.7 1.7 0 3 .9 3 2.2 0 3-6.2 1.2-6.2 4 0 1.3 1.3 2.2 3.2 2.2 1.5 0 2.7-.6 3.2-1.7" stroke-width="1.8" stroke-linecap="round"/><path d="M5 5.5h3M16 18.5h3" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recuperacion-cartera:acuerdos de pago': '<svg viewBox="0 0 24 24" fill="none"><path d="M7.5 12.5 10 15l2.5-2.5M13.5 11.5 16 14l2.5-2.5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 12c1.2-2.8 3.4-4.5 5.8-4.5 1.5 0 2.7.7 3.2 1.8.5-1.1 1.7-1.8 3.2-1.8 2.4 0 4.6 1.7 5.8 4.5" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recuperacion-cartera:portal de acuerdos de pago': '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4.5" width="14" height="15" rx="2.5" stroke-width="1.8"/><path d="M8.5 9.5h7M8.5 13h7M8.5 16.5h4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'recuperacion-cartera:web service bancarios': '<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 9 12 5l7.5 4v1.5h-15V9ZM6.5 10.5v6M10.5 10.5v6M14.5 10.5v6M18.5 10.5v6M5 18.5h14" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'recuperacion-cartera:web services integraci&oacute;n terceros': '<svg viewBox="0 0 24 24" fill="none"><path d="M8.5 8.5h-2A2.5 2.5 0 0 0 4 11v2a2.5 2.5 0 0 0 2.5 2.5h2M15.5 8.5h2A2.5 2.5 0 0 1 20 11v2a2.5 2.5 0 0 1-2.5 2.5h-2" stroke-width="1.8" stroke-linecap="round"/><path d="M9 12h6" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'gesdoc:gesti&oacute;n documental': '<svg viewBox="0 0 24 24" fill="none"><path d="M7 5.5h8l3 3v9.5A1.5 1.5 0 0 1 16.5 19.5h-9A1.5 1.5 0 0 1 6 18V7a1.5 1.5 0 0 1 1-1.5Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M15 5.5V9h3" stroke-width="1.8" stroke-linecap="round"/><path d="M9 13h6M9 16h4" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'gesdoc:actos administrativos': '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" rx="2.5" stroke-width="1.8"/><path d="M8.5 9.5h7M8.5 13h7M9.5 16.5h5" stroke-width="1.8" stroke-linecap="round"/></svg>',
  'gesdoc:pqrs': '<svg viewBox="0 0 24 24" fill="none"><path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H11l-4 3v-3H7.5A2.5 2.5 0 0 1 5 13.5v-6Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 9.5h6M9 12.5h4" stroke-width="1.8" stroke-linecap="round"/></svg>'
};

function moduleIconSvg(name, groupId) {
  const key = `${groupId}:${name.toLowerCase()}`;
  return moduleIconMap[key] || iconSvg(name, groupId);
}

/* ── Render page ── */
const sideNav = document.getElementById('side-nav');
const sections = document.getElementById('sections');

modulesData.forEach(group => {
  const navLink = document.createElement('a');
  navLink.href = `#${group.id}`;
  navLink.textContent = group.title;
  sideNav.appendChild(navLink);

  const section = document.createElement('section');
  section.className = 'section';
  section.id = group.id;

  const cards = group.modules.map(module => `
    <article class="card">
      <div class="card-top">
        <div class="icon" aria-hidden="true">${moduleIconSvg(module.name, group.id)}</div>
        <div><h3>${module.name}</h3></div>
      </div>
      <p>${module.description}</p>
    </article>
  `).join('');

  section.innerHTML = `
    <div class="section-head">
      <div>
        <h2>${group.title}</h2>
        <p>${group.intro}</p>
      </div>
      <div class="section-count">${group.modules.length} m&oacute;dulos</div>
    </div>
    <div class="cards">${cards}</div>
  `;

  sections.appendChild(section);
});

/* ── Sidebar active tracking ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const link = sideNav.querySelector(`a[href="#${entry.target.id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      sideNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

document.querySelectorAll('.section').forEach(section => observer.observe(section));
const firstLink = sideNav.querySelector('a');
if (firstLink) firstLink.classList.add('active');

/* ── Nav scroll effect (same as index) ── */
const nav = document.getElementById('nav');
const heroEl = document.querySelector('.hero');
function checkNav() {
  nav.classList.toggle('scrolled', window.scrollY > heroEl.offsetHeight - 80);
}
window.addEventListener('scroll', checkNav, { passive: true });
checkNav();
