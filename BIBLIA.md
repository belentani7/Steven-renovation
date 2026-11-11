# BIBLIA.md — Steven-renovation

> Doctrina del producto. Referencia única de visión, misión, reglas de desarrollo, arquitectura, stack, decisiones de diseño y convenciones del repositorio.

---

## Visión

Sitio web premium de empresa de renovación general "Steven Rénovation" (París & Île-de-France): una presencia digital de alta conversión con diseño estilo Apple, solicitud de presupuesto en 48h y soporte multiidioma (FR/ES/EN).

## Misión

Proveer un sitio web corporativo premium para empresa de renovación (HTML/CSS/JS vanilla) con diseño 60-30-10 (Itten), escaparatismo Z/F, mobile-first, Core Web Vitals optimizados, RGPD compliant, y CSP/SRI para seguridad.

## Reglas de desarrollo

1. **Impeccable HTML**: Sin eyebrow en cada sección, sin gradient text, sin side-stripe borders, hero heading <= 6rem (96px), `:focus-visible` en interactivos, estados vacío/error/carga diseñados, touch targets >= 44px.
2. **Diseño premium**: Sistema 60/30/10 (Itten), paleta oklch, tipografía Cormorant Garamond + Space Grotesk + Fraunces + Manrope.
3. **Multiidioma**: Soporte para FR, ES, EN con conmutador de idioma.
4. **Seguridad**: CSP con SRI, RGPD compliant, no tracking de terceros.
5. **Tokens CANON**: #05030a, #ff073a, #d4af37, #4de8e0.
6. **No secretos**: Nunca commitear API keys, tokens ni credenciales (incluyendo email de contacto y teléfonos si se consideran sensibles). Ejecutar gitleaks antes de cada push.

## Arquitectura

- `index.html` — Página principal (sitio premium de renovación, multiidioma).
- `ecosistema.html` — Página del circuito del ecosistema Belentani.
- `magic/immersive.html` — Experiencia inmersiva.
- `magic/sfx.html` — Efectos de sonido.
- `magic/shader.html` — Shaders visuales.
- `front-upgrade.js` — Script de frontend.
- `lenis.min.js` — Librería de scroll suave.
- `netlify.toml` — Configuración Netlify.
- `vercel.json` — Configuración Vercel.
- `wrangler.toml` — Configuración Cloudflare Workers.
- `test/` — Pruebas del sitio.
- `EXPORT.md` — Documentación de exportación.

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5 + CSS3 + JS vanilla |
| Scroll suave | Lenis (lenis.min.js) |
| Tipografías | Cormorant Garamond, Space Grotesk, Fraunces, Manrope, Bebas Neue |
| Despliegue | Netlify / Vercel / Cloudflare Workers |

## Decisiones de desarrollo

- **Diseño premium**: Estética estilo Apple con sistema de color 60-30-10 (Itten).
- **Multiidioma por defecto**: FR/ES/EN con conmutador de idioma integrado.
- **CSP estricta**: Content Security Policy con Subresource Integrity para scripts externos.
- **Sin framework JS**: JavaScript vanilla para mantener el sitio ligero y rápido.

## Convenciones de commit

`type(scope): summary`

Ejemplos:
- `feat(hero): optimizar animación Ken Burns de fondo`
- `fix(i18n): corrección de conmutador de idioma FR/ES/EN`
- `docs(biblia): documentar diseño premium y arquitectura`

## Tokens de diseño (CANON)

- Negro vacío: `#05030a` (fondo body)
- Rojo neón: `#ff073a` (acento primario)
- Dorado Zion: `#d4af37` (acento secundario)
- Cyan señal: `#4de8e0` (acento terciario)

<!-- repo-forge:biblia:inicio -->
# BIBLIA.md — Steven-renovation

Doctrina del producto del repositorio `Steven-renovation` del ecosistema belentani7.

## Visión

portafolio de obra con presupuesto y plazos, que genere llamadas

## Misión

Decir la verdad del precio, el plazo y el resultado, y hacer que dar el paso sea fácil.

## Público

propietarios en Barcelona

## Stack

sitio estático publicable tal cual · HTML, Markdown, JavaScript, CSS, JSON

## Módulos que la promesa exige

- Obra
- Servicios
- Presupuesto
- Contacto

## Reglas de desarrollo

- Protocolo spec-first: PRD → SRS → Design Doc → ADR → Plan → Tests.
- Un cambio, un resultado verificable.
- Nada se afirma sin ejecución; lo no probado se declara como no probado.
- Escritura solo con confirmación; nada destructivo.
- Idioma del producto: español, salvo el público del repositorio.
- Secreto fuera de disco, logs y manifiestos.

## Lo que este repositorio no va a hacer

fotos sin permiso

## Convenciones

`type(scope): resumen` — feat, fix, docs, chore, refactor, test, perf.

<!-- repo-forge:biblia -->
<!-- repo-forge:biblia:fin -->
