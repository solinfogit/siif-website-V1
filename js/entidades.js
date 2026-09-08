/* ═══════════════════════════════════════════════════════════════════
   DIRECTORIO DE ENTIDADES — ACCESO NUEVO
   Entidades que ya operan en la plataforma actualizada de SIIFWEB.

   Para agregar una entidad, copie un bloque y ajuste los campos:

   {
     nombre:       "Alcaldía de ____",           // nombre público de la entidad
     departamento: "____",                        // departamento (agrupa el directorio)
     municipio:    "____",                        // municipio o sede
     url:          "https://____",                // URL de acceso a su plataforma
     estado:       "activo"                       // activo | proximamente
   }

   Notas:
   - Si `url` queda vacía (""), la tarjeta se muestra como "Próximamente"
     aunque el estado sea "activo".
   - Las entidades que aún operan en la versión anterior NO van aquí:
     su acceso sigue siendo colombiagestiona.com.
   ═══════════════════════════════════════════════════════════════════ */

const ENTIDADES = [
  {
    nombre: "UCEVA",
    departamento: "Valle del Cauca",
    municipio: "Tuluá",
    url: "", // TODO: pegar URL de acceso de la plataforma actualizada
    estado: "activo"
  },
  {
    nombre: "Soluciones de Información",
    departamento: "Risaralda",
    municipio: "Pereira",
    url: "", // TODO: pegar URL de acceso de la plataforma actualizada
    estado: "activo"
  },
  {
    nombre: "Alcaldía de Santa Marta",
    departamento: "Magdalena",
    municipio: "Santa Marta",
    url: "", // TODO: pegar URL de acceso de la plataforma actualizada
    estado: "activo"
  }
];
