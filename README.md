# SIIFWEB — Sitio Web Institucional V1

Sitio web público de presentación y catálogo de la plataforma **SIIFWEB** (Sistema Integrado de Información Financiera). Construido en HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias externas.

---

## Tabla de contenidos

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Cómo funciona el sitio](#2-cómo-funciona-el-sitio)
3. [Sistema de diseño y estilos](#3-sistema-de-diseño-y-estilos)
4. [Navegación: navbar, menú móvil y footer](#4-navegación-navbar-menú-móvil-y-footer)
5. [Páginas existentes](#5-páginas-existentes)
6. [JavaScript y comportamiento dinámico](#6-javascript-y-comportamiento-dinámico)
7. [Assets e imágenes](#7-assets-e-imágenes)
8. [Guías de mantenimiento](#8-guías-de-mantenimiento)
   - [Cambiar textos y contenido](#81-cambiar-textos-y-contenido)
   - [Cambiar colores o tipografía](#82-cambiar-colores-o-tipografía)
   - [Agregar una nueva página](#83-agregar-una-nueva-página)
   - [Agregar un enlace al navbar](#84-agregar-un-enlace-al-navbar)
   - [Agregar un enlace al footer](#85-agregar-un-enlace-al-footer)
   - [Agregar un enlace al menú móvil](#86-agregar-un-enlace-al-menú-móvil)
   - [Agregar un módulo o subsistema al catálogo](#87-agregar-un-módulo-o-subsistema-al-catálogo)
   - [Agregar o reemplazar imágenes](#88-agregar-o-reemplazar-imágenes)
9. [Breakpoints responsivos](#9-breakpoints-responsivos)
10. [Glosario rápido de clases CSS](#10-glosario-rápido-de-clases-css)

---

## 1. Estructura del proyecto

```
siif-website-V1/
│
├── index.html          # Página principal (home)
├── modulos.html        # Catálogo dinámico de módulos
│
├── css/
│   ├── common.css      # Estilos compartidos: navbar, footer, reset, botones, variables
│   ├── index.css       # Estilos exclusivos de index.html
│   └── modulos.css     # Estilos exclusivos de modulos.html
│
├── js/
│   ├── index.js        # Lógica de index.html: scroll, animaciones, menú móvil
│   └── modulos.js      # Datos de módulos + generación dinámica del catálogo
│
└── assets/
    ├── favicon.ico
    ├── apple-touch-icon.png
    ├── logo-navbar.webp        # Logo del navbar (resolución normal)
    ├── logo-navbar@2x.webp     # Logo del navbar (pantallas Retina / HiDPI)
    ├── siifweb-icon.webp       # Icono de marca usado en el footer
    └── soluciones-info.webp    # Logo de Soluciones Informáticas (footer)
```

**Regla general:** cada página tiene su propio archivo HTML, su propio CSS específico y su propio JS. Lo que comparten todas las páginas (navbar, footer, variables de color) vive en `common.css`.

---

## 2. Cómo funciona el sitio

El sitio es **multi-página estática**. No hay servidor de backend, ni base de datos, ni framework de frontend. Todo lo que el navegador necesita está en estos archivos.

```
Navegador
  └── Pide index.html
        ├── Carga css/common.css  (estilos globales)
        ├── Carga css/index.css   (estilos de la página)
        └── Carga js/index.js     (interactividad)
```

La página `modulos.html` carga adicionalmente `modulos.css` y `modulos.js`. Este último contiene un array de datos con los 44 módulos del sistema, y al cargar la página genera todo el HTML del catálogo dinámicamente. Eso significa que **no hay contenido de módulos en el HTML de `modulos.html`** — todo lo genera JavaScript al vuelo.

---

## 3. Sistema de diseño y estilos

### Variables CSS globales (`css/common.css`, primeras líneas)

Todos los colores, espaciados y valores reutilizables se definen como variables en el selector `:root`. Para cambiar un color en todo el sitio, solo se cambia aquí.

| Variable | Valor | Uso |
|---|---|---|
| `--blue` | `#1264A8` | Azul principal (navbar inicial, botones, acentos) |
| `--blue-deep` | `#0D4F85` | Azul oscuro (hover de botones, gradientes) |
| `--blue-soft` | `#EAF3FB` | Azul muy claro (fondos de secciones, tags) |
| `--white` | `#FFFFFF` | Blanco puro |
| `--white-2` | `#F0F5FB` | Blanco con tono azulado (fondos alternativos) |
| `--ink` | `#1B2B3C` | Azul noche (textos principales) |
| `--ink-mid` | `#47637C` | Gris azulado (subtítulos, texto secundario) |
| `--ink-dim` | `#7A9BB4` | Gris claro (placeholders, texto terciario) |
| `--line` | `#D8E4F0` | Color de bordes y separadores |
| `--shadow` | `0 16px 40px rgba(11,33,56,.08)` | Sombra estándar de cards |
| `--site-max` | `1180px` | Ancho máximo del contenido en desktop |
| `--page-pad` | `clamp(1.5rem, 5vw, 3rem)` | Padding lateral de las secciones (escala con la pantalla) |
| `--ease` | `cubic-bezier(.22,1,.36,1)` | Curva de animación global |

### Tipografía

Se cargan desde Google Fonts:
- **Montserrat** (pesos 300–800): títulos, botones, etiquetas
- **Open Sans** (pesos 300–600): texto de párrafos y descripciones

### Componentes reutilizables (clases disponibles en cualquier página)

| Clase | Elemento | Descripción |
|---|---|---|
| `.btn` | `<a>` o `<button>` | Botón azul sólido principal |
| `.btn-white` | `<a>` o `<button>` | Botón blanco (uso sobre fondos azules) |
| `.btn-outline` | `<a>` o `<button>` | Botón con solo borde blanco |
| `.tag` | `<span>` | Etiqueta pequeña de categoría |
| `.tag-blue` | `<span>` | Etiqueta azul oscuro |
| `.tag-light` | `<span>` | Etiqueta azul claro |
| `.wrap` | `<div>` | Contenedor centrado con `--site-max` y `--page-pad` |

### Animaciones de aparición al scroll

Cualquier elemento con la clase `.sr` se vuelve invisible y se anima suavemente al entrar al viewport. JavaScript le agrega la clase `.vis` cuando el elemento es visible.

```html
<!-- Elemento que aparece al scroll -->
<div class="sr">Contenido</div>

<!-- Con delay (para efecto cascada en grupos) -->
<div class="sr d1">Primero</div>
<div class="sr d2">Segundo</div>
<div class="sr d3">Tercero</div>
<div class="sr d4">Cuarto</div>
```

Los delays son: `d1` = 0.07s, `d2` = 0.14s, `d3` = 0.21s, `d4` = 0.28s.

---

## 4. Navegación: navbar, menú móvil y footer

### Estructura HTML del navbar

El navbar es idéntico en todas las páginas. Se encuentra justo después del `<body>`:

```html
<nav id="nav">
  <div class="nav-inner">

    <!-- Logo -->
    <a class="nav-logo" href="./index.html">
      <img src="assets/logo-navbar.webp" srcset="assets/logo-navbar@2x.webp 2x" alt="SIIFWEB">
    </a>

    <!-- Links de navegación -->
    <ul class="nav-links">
      <li><a href="./index.html">Inicio</a></li>
      <li><a href="./modulos.html">Módulos</a></li>
      <li><a href="./index.html#contacto">Contacto</a></li>
      <!-- nav-links-cta: solo visible en móvil (dentro del menú desplegable) -->
      <li class="nav-links-cta">
        <a class="btn btn-white" href="https://siifweb.com/acceso" target="_blank" rel="noopener">Acceder</a>
      </li>
    </ul>

    <!-- Botón Acceder (solo desktop) -->
    <div class="nav-access-wrap">
      <a class="nav-access btn btn-white" href="https://siifweb.com/acceso" target="_blank" rel="noopener">Acceder</a>
    </div>

    <!-- Hamburger (solo móvil) -->
    <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</nav>
```

### Comportamiento del navbar

- **Desktop (> 860px):** fondo azul `--blue`, enlaces blancos horizontales, botón "Acceder" a la derecha.
- **Al hacer scroll:** cuando el usuario pasa el alto de la primera sección (hero), el navbar agrega la clase `.scrolled`. Esto cambia el fondo a blanco y los textos a oscuro. Este cambio ocurre automáticamente en `index.js`.
- **Páginas sin hero grande** (como `modulos.html`): el navbar arranca directamente en estado `.scrolled` (fondo blanco), usando la clase `nav-static` en el `<nav>`.

### Menú móvil (< 860px)

En móvil el navbar oculta los links y muestra el botón hamburger (tres líneas). Al presionarlo:

1. JavaScript agrega la clase `.open` al `<nav id="nav">`.
2. Los `.nav-links` se hacen visibles y se despliegan hacia abajo.
3. El botón hamburger se anima (las líneas se cruzan formando una X).
4. Al hacer click en cualquier enlace del menú, este se cierra solo.

El botón "Acceder" en móvil es el `<li class="nav-links-cta">` dentro de `.nav-links`, que está oculto en desktop y visible en móvil.

### Estructura HTML del footer

```html
<!-- Curva decorativa justo antes del footer -->
<div class="footer-curve">
  <svg ...><!-- SVG wave --></svg>
</div>

<footer>
  <div class="footer-in">

    <!-- Logo izquierda -->
    <div class="fl">
      <img src="assets/siifweb-icon.webp" alt="SIIFWEB">
      SIIF<span>WEB</span>
    </div>

    <!-- Links de navegación centrados -->
    <ul class="fn">
      <li><a href="./index.html">Inicio</a></li>
      <li><a href="./modulos.html">Módulos</a></li>
      <li><a href="./index.html#contacto">Contacto</a></li>
      <li><a href="#">Soporte</a></li>
      <li><a href="#">Política de datos</a></li>
      <li><a href="https://siifweb.com/acceso" target="_blank" rel="noopener">Acceder</a></li>
    </ul>

    <!-- Copyright derecha -->
    <div class="fc">
      <img src="assets/soluciones-info.webp" alt="Soluciones Informáticas">
      <span>&copy; 2026</span>
    </div>

  </div>
</footer>
```

---

## 5. Páginas existentes

### `index.html` — Página principal

| Sección | Clase CSS | Descripción |
|---|---|---|
| Hero | `.hero` | Banner principal con título, descripción y botones CTA |
| Evoluciona | `.s-evolve` | Grid de 2 columnas describiendo los problemas que resuelve |
| Transforma | `.s-transform` | 4 tarjetas "pilares" de valor del producto |
| Integración | `.s-integ` | Imagen + texto (2 columnas) |
| Características | `.s-features` | 5 bloques alternados imagen/texto con descripción de funcionalidades |
| Contacto | `.s-cta` | Formulario de solicitud de demostración (`id="contacto"`) |
| Footer curve | `.footer-curve` | Separador decorativo con SVG |
| Footer | `footer` | Footer estándar |

Todos los efectos de scroll, animaciones y el comportamiento del navbar están en `js/index.js`.

### `modulos.html` — Catálogo de módulos

Página de dos columnas: barra lateral izquierda con navegación por subsistema, y área de contenido derecha con las cards de módulos.

El **contenido completo** (sidebar y cards) es generado por `js/modulos.js`. Los datos están definidos en el array `modulesData` al inicio de ese archivo:

```javascript
// js/modulos.js
const modulesData = [
  {
    id: 'financiero',          // ID único (se usa en URLs: #financiero)
    title: 'Gestión financiera',
    intro: 'Descripción del subsistema...',
    modules: [
      { name: 'Contabilidad', description: 'Descripción...' },
      { name: 'Presupuesto',  description: 'Descripción...' },
      // ...más módulos
    ]
  },
  // ...más subsistemas
];
```

**Subsistemas actuales (9) y total de módulos (44):**

| # | Subsistema | Módulos |
|---|---|---|
| 1 | Gestión Financiera | 9 |
| 2 | Contratación | 4 |
| 3 | Recursos Físicos | 3 |
| 4 | Recursos Humanos | 5 |
| 5 | Oficina Virtual | 2 |
| 6 | Planeación | 6 |
| 7 | Rentas Municipales | 6 |
| 8 | Recuperación de Cartera | 6 |
| 9 | Gestión Documental | 3 |

---

## 6. JavaScript y comportamiento dinámico

### `js/index.js`

Maneja tres comportamientos en `index.html`:

1. **Cambio de color del navbar al scroll**
   ```
   scroll → si scrollY > alto del hero − 80px → agrega .scrolled al nav
   ```

2. **Menú móvil**
   ```
   click en .nav-toggle → toggle .open en #nav → actualiza aria-expanded
   click en cualquier <a> dentro de .nav-links → cierra el menú
   ```

3. **Scroll reveal (animaciones)**
   ```
   Intersection Observer observa todos los .sr
   → cuando un .sr entra al 15% del viewport → le agrega .vis → se anima
   ```

### `js/modulos.js`

Al cargarse la página:

1. Lee el array `modulesData`.
2. Genera los `<a>` del sidebar (`#side-nav`) con `href="#id-del-subsistema"`.
3. Genera las secciones de contenido (`#sections`): título, descripción y grid de cards.
4. Cada card tiene un icono SVG único generado por la función `getIcon(name)`.
5. Un Intersection Observer rastrea qué sección es visible y resalta el enlace del sidebar.
6. También inicializa las animaciones `.sr` (mismo sistema que `index.js`).

---

## 7. Assets e imágenes

### Assets locales (`/assets/`)

| Archivo | Dónde se usa | Cuándo reemplazar |
|---|---|---|
| `favicon.ico` | Pestaña del navegador | Si cambia la identidad de marca |
| `apple-touch-icon.png` | Ícono al guardar en iOS | Si cambia el ícono de la app |
| `logo-navbar.webp` | Navbar de todas las páginas | Si cambia el logo |
| `logo-navbar@2x.webp` | Navbar en pantallas Retina | Siempre junto al anterior |
| `siifweb-icon.webp` | Footer (izquierda) | Si cambia el ícono de marca |
| `soluciones-info.webp` | Footer (derecha) | Si cambia el logo corporativo |

### Imágenes externas (Unsplash)

Las imágenes del hero, la sección de integración y las características en `index.html` se cargan desde Unsplash con parámetros de optimización:

```
https://images.unsplash.com/photo-XXXXXXX?w=900&q=80&fit=crop&crop=focalpoint
```

Para reemplazar una imagen por una propia, cambia la URL en el `src` del `<img>` o el `background-image` del CSS. Preferiblemente usa imágenes en formato **WebP** para mantener la velocidad de carga.

---

## 8. Guías de mantenimiento

### 8.1 Cambiar textos y contenido

Abre el archivo HTML correspondiente (`index.html` o `modulos.html`) y edita directamente el texto dentro de las etiquetas. Los títulos de secciones usan `<h2>`, los subtítulos `<h3>`, y los párrafos `<p>`.

Para los módulos, edita el array `modulesData` en `js/modulos.js`.

---

### 8.2 Cambiar colores o tipografía

Abre `css/common.css` y modifica las variables en `:root` (líneas iniciales). El cambio se propaga automáticamente a todo el sitio.

```css
:root {
  --blue: #1264A8;  /* ← Cambia este valor */
}
```

Para la tipografía, busca la etiqueta `<link>` de Google Fonts en el `<head>` de cada HTML y actualiza el nombre de la fuente, luego actualiza también la propiedad `font-family` en el `body` dentro de `common.css`.

---

### 8.3 Agregar una nueva página

1. **Crea el archivo HTML** copiando la estructura de `modulos.html` como base (ya tiene navbar y footer listos):

   ```bash
   cp modulos.html nueva-pagina.html
   ```

2. **Crea su CSS específico** en `css/nueva-pagina.css`.

3. **En el `<head>` del nuevo HTML**, actualiza los links:
   ```html
   <link rel="stylesheet" href="css/common.css">
   <link rel="stylesheet" href="css/nueva-pagina.css">
   ```

4. **Al final del `<body>`**, actualiza el script si la página necesita lógica propia:
   ```html
   <script src="js/nueva-pagina.js" defer></script>
   ```

5. **Agrega el enlace al navbar y footer** en TODOS los archivos HTML existentes (ver secciones 8.4 y 8.5).

> **Importante:** el navbar y el footer se copian manualmente en cada página. No existe un sistema de componentes o templates. Si editas el navbar en `index.html`, debes replicar el cambio en `modulos.html` (y en cualquier nueva página que crees).

---

### 8.4 Agregar un enlace al navbar

Localiza el bloque `<ul class="nav-links">` en **cada archivo HTML** y agrega el nuevo `<li>` antes de `.nav-links-cta`:

```html
<ul class="nav-links">
  <li><a href="./index.html">Inicio</a></li>
  <li><a href="./modulos.html">Módulos</a></li>
  <li><a href="./index.html#contacto">Contacto</a></li>

  <!-- NUEVO ENLACE -->
  <li><a href="./nueva-pagina.html">Nueva Sección</a></li>

  <!-- Este li siempre debe ir al final (es el botón Acceder en móvil) -->
  <li class="nav-links-cta">
    <a class="btn btn-white" href="https://siifweb.com/acceso" ...>Acceder</a>
  </li>
</ul>
```

El nuevo enlace aparecerá automáticamente tanto en desktop como en el menú móvil, ya que `.nav-links` se usa en ambos.

---

### 8.5 Agregar un enlace al footer

Localiza el bloque `<ul class="fn">` en **cada archivo HTML** y agrega el `<li>`:

```html
<ul class="fn">
  <li><a href="./index.html">Inicio</a></li>
  <li><a href="./modulos.html">Módulos</a></li>
  <li><a href="./index.html#contacto">Contacto</a></li>
  <li><a href="#">Soporte</a></li>
  <li><a href="#">Política de datos</a></li>

  <!-- NUEVO ENLACE -->
  <li><a href="./nueva-pagina.html">Nueva Sección</a></li>

  <li><a href="https://siifweb.com/acceso" ...>Acceder</a></li>
</ul>
```

---

### 8.6 Agregar un enlace al menú móvil

El menú móvil **es el mismo `<ul class="nav-links">`** del navbar — no existe un HTML separado para móvil. Lo que cambia es el CSS: en pantallas pequeñas (< 860px) la lista se muestra verticalmente desplegada.

Para agregar un enlace solo en móvil (que no aparezca en desktop), usa la clase `nav-links-mobile`:

```html
<li class="nav-links-mobile"><a href="./pagina-solo-movil.html">Solo Móvil</a></li>
```

Y en `css/common.css` agrega:

```css
.nav-links-mobile { display: none; }

@media (max-width: 860px) {
  .nav-links-mobile { display: block; }
}
```

---

### 8.7 Agregar un módulo o subsistema al catálogo

Toda la información del catálogo está en `js/modulos.js`, en el array `modulesData`.

**Para agregar un nuevo subsistema completo:**

```javascript
// Agrega un nuevo objeto al final del array modulesData
{
  id: 'nuevo-subsistema',        // ID único en minúsculas, sin espacios ni tildes
  title: 'Nombre del Subsistema',
  intro: 'Descripción general de lo que hace este subsistema.',
  modules: [
    {
      name: 'Nombre del Módulo',
      description: 'Descripción del módulo y sus funciones principales.'
    },
    // ... más módulos
  ]
}
```

**Para agregar un módulo a un subsistema existente:**

Encuentra el objeto del subsistema en `modulesData` por su `title` o `id`, y agrega un objeto al array `modules`:

```javascript
{
  name: 'Nuevo Módulo',
  description: 'Descripción del nuevo módulo.'
}
```

El icono SVG se asigna automáticamente por la función `getIcon(name)` según el nombre del módulo. Si el nombre no coincide con ningún icono predefinido, se usa un icono genérico de cuadrícula.

---

### 8.8 Agregar o reemplazar imágenes

1. Convierte la imagen a formato **WebP** (se recomienda usar [Squoosh](https://squoosh.app/) o similar).
2. Copia el archivo a la carpeta `assets/`.
3. Si es una imagen de alta resolución (Retina), exporta también una versión `@2x` con el doble de píxeles.
4. Reemplaza el `src` en el HTML:

```html
<!-- Sin versión retina -->
<img src="assets/mi-imagen.webp" alt="Descripción de la imagen">

<!-- Con versión retina -->
<img
  src="assets/mi-imagen.webp"
  srcset="assets/mi-imagen@2x.webp 2x"
  alt="Descripción de la imagen">
```

---

## 9. Breakpoints responsivos

| Breakpoint | Cambios principales |
|---|---|
| `> 860px` | Desktop completo: navbar horizontal, menú hamburger oculto |
| `≤ 860px` | Móvil: navbar hamburger, menú desplegable vertical |
| `≤ 900px` | Hero: imagen a un lado se oculta, layout de 1 columna |
| `≤ 760px` | Grids de secciones colapsan a 1 columna |
| `≤ 520px` | Ajustes de fuente y espaciado para pantallas muy pequeñas |

Estos valores están definidos con `@media (max-width: Xpx)` en `css/common.css`, `css/index.css` y `css/modulos.css`.

---

## 10. Glosario rápido de clases CSS

| Clase | Archivo | Descripción |
|---|---|---|
| `.wrap` | common.css | Contenedor centrado con ancho máximo y padding lateral |
| `.btn` | common.css | Botón azul sólido |
| `.btn-white` | common.css | Botón blanco (para fondos azules) |
| `.btn-outline` | common.css | Botón solo con borde blanco |
| `.tag`, `.tag-blue`, `.tag-light` | common.css | Etiquetas de categoría |
| `.sr` | common.css | Elemento invisible que aparece al scroll |
| `.sr.vis` | common.css | Estado visible del elemento animado |
| `.d1` `.d2` `.d3` `.d4` | common.css | Delays de animación escalonados |
| `#nav` | common.css | Barra de navegación principal |
| `#nav.open` | common.css | Navbar con menú móvil abierto |
| `#nav.scrolled` | common.css | Navbar con fondo blanco (post-scroll) |
| `.nav-links-cta` | common.css | Botón "Acceder" dentro del menú móvil |
| `.hero` | index.css | Sección principal de la página de inicio |
| `.s-evolve` | index.css | Sección "Evoluciona" (grid de problema/solución) |
| `.s-transform` | index.css | Sección de 4 pilares de valor |
| `.pillar` | index.css | Tarjeta individual de pilar |
| `.s-integ` | index.css | Sección de integración (2 columnas) |
| `.s-features` | index.css | Sección de características alternadas |
| `.feat` | index.css | Bloque individual de característica |
| `.s-cta` | index.css | Sección de contacto / solicitud de demo |
| `.cta-form` | index.css | Formulario de contacto |
| `.layout` | modulos.css | Contenedor principal de 2 columnas en modulos.html |
| `.sidebar` | modulos.css | Panel lateral de navegación por subsistema |
| `.cards` | modulos.css | Grid de tarjetas de módulos |
| `.card` | modulos.css | Tarjeta individual de módulo |
| `.footer-curve` | common.css | Contenedor del SVG wave decorativo antes del footer |
| `.footer-in` | common.css | Contenedor del footer con max-width |
| `.fl` | common.css | Footer logo (izquierda) |
| `.fn` | common.css | Footer nav (centro) |
| `.fc` | common.css | Footer copyright (derecha) |
