# AUDITORIA-PLAN-30 — Plan de auditoría de 30 pasos (web STEVEN-PARIS-2026)
> Proyecto: Steven Rénovation — sitio single-file premium (v5).
> Método: verificación transversal de cada dimensión del entregable, en orden de impacto.
> Estado: cada paso se marca [OK]/[PENDIENTE]/[N/A] al ejecutarlo.

---

## FASE A — SEGURIDAD (pasos 1–8)
1. **CSP en headers** — `_headers` de Netlify con `Content-Security-Policy` (script-src 'self' + CDN allowlist, img-src https: data:, font-src, connect-src). Meta CSP como capa local.
2. **SRI en todos los scripts externos** — GSAP y ScrollTrigger con `integrity` + `crossorigin` (hashes ya calculados en MEMORIA-COMPACTA §5).
3. **Carga local primero, CDN como fallback** — `<script src="assets/js/...">` con `onerror` dinámico → CDN cdnjs; nunca al revés.
4. **Formulario con backend real** — Netlify function `devis` (validación server-side) con fallback wa.me; eliminar dependencia única de mailto.
5. **Protección anti-bot** — honeypot invisible + rate-limit en memoria (IP) en la función serverless.
6. **Sin datos en query strings** — wa.me/mailto solo como fallback; el POST del form es la vía principal.
7. **Headers de seguridad generales** — `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options: DENY`, `frame-ancestors 'none'`.
8. **Sin innerHTML con datos de usuario** — revisar i18n (diccionario estático, OK) y el form (datos van a wa.me, no a DOM).

## FASE B — LEGAL Y HONESTIDAD (pasos 9–14)
9. **Eliminar SIRET ficticio** — quitar `892 XXX XXX 00012` de topbar y footer (Steven no tiene documentación aún).
10. **Eliminar afirmaciones de décennale** — quitar "100% assuré décennale", "Décennale active (SMABTP/AXA)"; sustituir por lenguaje honesto ("démarches en cours" o no mencionarlo).
11. **Avis de clientes marcados como ejemplos** — nota "Avis illustratifs — noms fictifs" para no inducir a error.
12. **Mentions légales completas** — identidad del éditeur, dirección, RGPD, hébergeur (Netlify, UE/Dublín), politique de confidentialité (enlace/banda).
13. **JSON-LD sin datos falsos** — revisar schema.org: quitar afirmaciones de seguros; mantener servicios reales.
14. **Consentimiento cookies RGPD** — banner funcional con localStorage (ya existe); texto honesto (sin analytics falsos).

## FASE C — RENDIMIENTO Y CWV (pasos 15–21)
15. **LCP optimizado** — hero con `fetchpriority=high`, imagen local webp dimensionada, `preload` de la imagen hero.
16. **CLS = 0** — `width`/`height` (o `aspect-ratio`) en todas las imágenes; contenedores con altura reservada.
17. **INP optimizado** — eventos delegados, evitar `alert()`, transiciones CSS-only donde se pueda.
18. **Lazy loading** — todas las imágenes no-hero con `loading="lazy"`; vídeo `preload="none"` + poster.
19. **Fuentes** — `display=swap`, `preconnect` a fonts.googleapis/gstatic, `font-display` respetado.
20. **JS al mínimo** — GSAP local minificado; cargar tras el parseo (`defer`); no bloquear render.
21. **Media responsive** — imágenes `srcset`/`sizes` para móvil (peso menor) o al menos una sola webp optimizada por imagen.

## FASE D — ACCESIBILIDAD (pasos 22–26)
22. **Contraste AA** — verificar navy/ámbar/marfil en texto (ámbar sobre marfil NO cumple → usar ámbar2 #C9861F para texto pequeño).
23. **Teclado y foco** — skip link, focus-visible en todos los controles, menú móvil con foco atrapado y Escape.
24. **Formulario accesible** — `<label for>` reales, mensajes de error con `aria-live`, no solo color; `aria-describedby`.
25. **prefers-reduced-motion** — respetar: desactivar marquee, kenburns, reveals GSAP (ya existe, ampliar al preloader).
26. **aria-live / roles** — carrusel de avis con `aria-live="polite"` pausable; botones con aria-label; imágenes decorativas `alt=""`.

## FASE E — NEGOCIO / UX (pasos 27–30)
27. **Conversión móvil** — CTA "tel/WhatsApp" visibles sin scroll (FABs + header), menú hamburguesa funcional, form usable con pulgar.
28. **Mensajes de error en el idioma activo** — alert() → mensajes inline trilingües (diccionario i18n).
29. **SEO local** — title/meta/OG actualizados, JSON-LD `LocalBusiness` corregido, sitemap.xml + robots.txt.
30. **Prueba de humo final** — navegador desktop (1366×768) y móvil (390×844): sin errores JS en consola, i18n cambia bien, form envía, backups de imagen funcionan (simular red offline), vídeo cae al poster.

---

## Veredicto esperado
- [ ] Todos los pasos [OK] → publicar.
- [ ] Con [PENDIENTE] → no publicar; resolver antes del deploy.
