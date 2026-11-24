/* ═══════════════════════════════════════════════════════════════════
   DIRECTORIO DE ENTIDADES — ACCESO APLICATIVO
   Entidades que ya operan en la plataforma actualizada de SIIFWEB.

   Para agregar una entidad, copie un bloque y ajuste los campos:

   {
     nombre:       "Alcaldía de ____",           // nombre público de la entidad
     departamento: "____",                        // departamento (agrupa el directorio)
     municipio:    "____",                        // municipio o sede
     url:          "https://____",                // URL de acceso a su plataforma (SIIFWEB)
     urlProcesos:  "https://____",                // URL de procesos (Synchrox) — opcional
     estado:       "activo"                       // activo | proximamente
   }

   Notas:
   - Si `url` queda vacía (""), el botón SIIFWEB+ se muestra como "Pronto".
     Si también `urlProcesos` está vacía, la tarjeta completa queda en
     "Próximamente".
   - Las entidades que aún operan en la versión anterior NO van aquí:
     su acceso sigue siendo colombiagestiona.com.
   ═══════════════════════════════════════════════════════════════════ */

const ENTIDADES = [
  {
    nombre: "UCEVA",
    departamento: "Valle del Cauca",
    municipio: "Tuluá",
    url: "https://apx-servicio.siifweb.com/ords/r/siifweb/siif-main/login?p9999_nit_compania=891900853",
    urlProcesos: "https://servicio.siifweb.com/",
    estado: "activo"
  },
  {
    nombre: "Soluciones de Información",
    departamento: "Risaralda",
    municipio: "Pereira",
    url: "https://apx-solinfo.siifweb.com/ords/r/siifweb/siif-main/login?p9999_nit_compania=900293512",
    urlProcesos: "https://solinfo.synchrox.com/",
    estado: "activo"
  },
  {
    nombre: "Alcaldía de Santa Marta",
    departamento: "Magdalena",
    municipio: "Santa Marta",
    url: "https://apx-santamarta.siifweb.com/ords/r/siifweb/siif-main/login?p9999_nit_compania=891780009",
    urlProcesos: "https://santamarta.siifweb.com/",
    estado: "activo"
  },
  {
    nombre: "Empresa de Aseo de Pereira",
    departamento: "Risaralda",
    municipio: "Pereira",
    url: "https://apx-servicio.siifweb.com/ords/r/siifweb/siif-main/login?p9999_nit_compania=816002017",
    urlProcesos: "https://new.servicio.siifweb.com/",
    estado: "activo"
  },
  {
    nombre: "Área Metropolitana Centro Occidente",
    departamento: "Risaralda",
    municipio: "Pereira",
    url: "",
    urlProcesos: "https://new.servicio-oci.siifweb.com/",
    estado: "activo"
  },
  {
    nombre: "Parque Temático Ukumarí",
    departamento: "Risaralda",
    municipio: "Pereira",
    url: "https://apx-servicio.siifweb.com/ords/r/siifweb/siif-main/login?p9999_nit_compania=900811423",
    urlProcesos: "https://new.servicio.siifweb.com/",
    estado: "activo"
  },
  {
    nombre: "Beneficencia del Valle — Lotería del Valle",
    departamento: "Valle del Cauca",
    municipio: "Cali",
    url: "https://apx-servicio.siifweb.com/ords/r/siifweb/siif-main/login?p9999_nit_compania=890399027",
    urlProcesos: "https://new.servicio.siifweb.com/",
    estado: "activo"
  }
];
