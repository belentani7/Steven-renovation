# Export — Steven Renovation

Este repo es un **sitio estático sin lógica de datos**: no hay módulos, APIs ni
colecciones que exportar como librería. El "export" del proyecto es el propio sitio
desplegable, y la forma de exportarlo es publicar la raíz del repo tal cual.

## Qué se exporta

| Artefacto | Contenido | Destino |
|-----------|-----------|---------|
| Sitio completo | `index.html`, `ecosistema.html`, `front-upgrade.js`, `lenis.min.js`, `magic/` | Vercel / Netlify / Cloudflare Pages |

## Cómo se exporta

1. **Vercel** (actual): `vercel.json` reescribe `/(.*)` → `/index.html`. Despliegue con
   `vercel --prod` o conectando el repo en el panel de Vercel.
2. **Netlify**: `netlify.toml` publica `.` con la misma regla de redirección. Despliegue
   con `netlify deploy --prod` o conectando el repo.
3. **Cloudflare Pages**: `wrangler.toml` define `pages_build_output_dir = "."`.
   Despliegue con `wrangler pages deploy .`.

No hay paso de build: lo que hay en el repo es exactamente lo que se sirve al navegador.

## Estado

Desplegado en producción en <https://steven-renovation.vercel.app>.
Canal de publicación oficial; GitHub Pages no está en uso.
