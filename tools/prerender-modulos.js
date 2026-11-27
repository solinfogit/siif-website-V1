/* Genera en modulos.html una versión estática (HTML simple) del catálogo de
   módulos, para buscadores y vistas previas que no ejecutan JavaScript.
   El JavaScript de la página la reemplaza al cargar por la versión interactiva.

   Uso (desde la raíz del sitio), cada vez que cambie js/modulos.js:
     node tools/prerender-modulos.js
*/
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const js = fs.readFileSync(path.join(root, 'js/modulos.js'), 'utf8');
const MARK = '/* ── Utilidades para la ficha';
const cut = js.indexOf(MARK);
if (cut === -1) {
  console.error(`No se encontró el marcador "${MARK}" en js/modulos.js: el script lo usa para separar los datos del código de la página.`);
  process.exit(1);
}
const dataSrc = js.slice(0, cut);
const modulesData = new Function(dataSrc + '; return modulesData;')();

const html = modulesData.map(g => `
    <section class="section" id="${g.id}">
      <h2>${g.title}</h2>
      <p>${g.intro}</p>
      <ul>${g.modules.map(m => `
        <li><h3>${m.name}</h3><p>${m.description}</p></li>`).join('')}
      </ul>
    </section>`).join('');

const file = path.join(root, 'modulos.html');
let page = fs.readFileSync(file, 'utf8');
const start = '<!-- prerender:modulos -->';
const end = '<!-- /prerender:modulos -->';
const block = `${start}${html}\n    ${end}`;
if (page.includes(start)) {
  page = page.replace(new RegExp(start + '[\\s\\S]*?' + end), () => block);
} else {
  page = page.replace('<div class="content" id="sections"></div>', () => `<div class="content" id="sections">\n    ${block}\n  </div>`);
}
fs.writeFileSync(file, page);
const total = modulesData.reduce((n, g) => n + g.modules.length, 0);
console.log(`modulos.html: ${modulesData.length} subsistemas y ${total} módulos pre-renderizados`);
