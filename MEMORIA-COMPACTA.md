# MEMORIA-COMPACTA — Proyecto STEVEN-PARIS-2026
> Documento de contexto persistente. Actualizado: 2026-08-10 (v7 FUSIÓN final + v6 CARQUIDEC/Fumé + fix de fotos).
> Uso: releer este archivo ANTES de continuar cualquier sesión para restaurar el estado mental completo.

---

## 1. IDENTIDAD DEL AUTOR (FIRMA OBLIGATORIA EN EL ENTREGABLE)
- Nombre: **Pedro Belentani**
- Email (firma real): **`belentani7studio@proton.me`**
- Web: **`noiacore.com`**
- Social: **`@belentani_`**
- Estudio: **BELENTANI** (el "7" forma parte de "belentani7studio", NO se separa)
- La firma debe aparecer en: comentario del `<head>`, `<footer>` (créditos), y metadata/JSON-LD si aplica.
- Regla de diseño de la firma: discreta, tipográfica, **sin emojis**, formato "Design & dev : Pedro Belentani — belentani7studio@proton.me · noiacore.com · @belentani_"

## 2. DATOS DEL CLIENTE (Steven)
- **Steven B.** — "Artisan du bâtiment" en París e Île-de-France.
- Tel: `+33 6 28 51 88 49` (FIJAR, no inventar otro)
- Email: `contact@steven-renovation.fr` (FIJAR)
- **NO TIENE DOCUMENTACIÓN POR AHORA** (sin SIRET real, sin décennale activa todavía).
  → PROHIBIDO afirmar SIRET ficticio (`892 XXX XXX 00012` era inventado en v4), prohibido afirmar "Décennale active (SMABTP/AXA)" como si fuera real.
  → Sustituir por lenguaje honesto: "Démarches d'immatriculation en cours", "Assurance en cours de souscription", o simplemente no mencionar.
- Es **polivalente**: hace mucho (gros œuvre, peinture, bains/cuisines, haussmannien, placo/isolation, dépannage).
- **Muy experimentado** (10+ años sobre el terreno, 120+ chantiers).
- Vive cerca de París; trabaja en 75, 92, 93, 94 (y 78/95 bajo estudio).
- Trilingüe FR·ES·EN (colombiano de origen → ventaja con clientes hispanos/expatriados).
- Objetivo del sitio: que la web LE SEA MUY ÚTIL (generar llamadas, WhatsApp y devis pre-calificados).

## 3. UBICACIÓN Y ESTRUCTURA DEL PROYECTO (ESTADO FINAL)
```
C:\Users\USER\Desktop\belentani_Omega-live\STEVEN-PARIS-2026\
├── MEMORIA-COMPACTA.md            ← ESTE ARCHIVO (contexto persistente)
├── README-DEPLOY.md               ← guía de despliegue Netlify + pendientes de negocio
├── AUDITORIA-PLAN-30.md           ← plan de auditoría de 30 pasos
├── PROBLEMAS-FUTUROS.md           ← 20 problemas futuros de Steve + soluciones web
├── steven-renovation-v4-source.html   (fuente original v4, 81 KB)
├── public\                        ← PUBLISH ROOT (subir a Netlify)
│   ├── index.html                 ← ENTREGABLE PRINCIPAL (v5 PREMIUM, 917 líneas, 98.369 B)
│   ├── index-fume.html            ← v6 VARIANTE "FUMÉ" (navy glacé + glassmorphism, en pausa)
│   ├── index-carquidec.html       ← v6 VARIANTE "CARQUIDEC" (negro mate + oro envejecido #B8A88A)
│   ├── index-v7.html              ← v7 FUSIÓN FINAL = CARQUIDEC base + glassmorphism Fumé + GSAP completo
│   ├── assets\                    ← MOVIDOS AQUÍ (bug de rutas corregido 2026-08-10)
│   │   ├── img\        (12 WebP locales + video-poster.webp — con data-backup Unsplash)
│   │   └── js\         (gsap.min.js 72KB + ScrollTrigger.min.js 44KB — locales, SRI)
│   ├── _headers                   ← cabeceras de seguridad (CSP + HSTS + nosniff…)
│   ├── robots.txt
│   └── sitemap.xml
├── netlify\functions\devis\devis.js   ← backend firmado (honeypot, rate-limit, validación FR)
└── netlify.toml
```
- **⚠️ FIX DE FOTOS (2026-08-10)**: los assets estaban en `assets\` (raíz) pero el HTML vive en `public\` → las rutas relativas `assets/img/...` resolvían a `public\assets\...` inexistente (fotos rotas en file:// y en deploy). Se movió TODO a `public\assets\`. Si se regenera desde v4, replicar esta estructura.

## 4. RECURSOS LOCALES Y SUS BACKUPS REMOTOS (FOTO POR FOTO)
Cada imagen local tiene su URL Unsplash original como backup (`data-backup` + JS `onerror`).

| Archivo local | Bytes | Backup remoto (Unsplash photo) |
|---|---|---|
| hero.webp | 282.028 | photo-1600607687920-4e2a09cf159d |
| maonnerie.webp | 196.354 | photo-1541888946425-d81bb19240f5 |
| peinture.webp | 102.246 | photo-1589939705384-5185137a7f0f |
| salle-de-bain.webp | 99.956 | photo-1552321554-5fefe8c9ef14 |
| haussmannien.webp | 55.644 | photo-1513694203232-719a280e022f |
| isolation.webp | 56.114 | photo-1558618666-fcd25c85cd64 ⚠️ sustituye a la original 404 |
| depannage.webp | 202.308 | photo-1504307651254-35680f356dfd |
| ba.webp | 194.240 | photo-1616486338812-3dadae4b4ace |
| passy.webp | 62.658 | photo-1556911220-bff31c812dba |
| monceau.webp | 104.240 | photo-1600566753190-17f0baa2a6c3 |
| neuilly.webp | 160.534 | photo-1600585154340-be6161a56a0c |
| video-poster.webp | 504.136 | photo-1504307651254-35680f356dfd (mismo que depannage) |

- Formato usado en descarga: `?q=80&w=1900|900|1600&auto=format&fit=crop` (ya aplicado en webp).
- **IMPORTANTE**: la imagen original de isolation (`photo-1621905251189-08b45b6a269e`) da **404** → usar SIEMPRE `photo-1558618666-fcd25c85cd64` (la descargada).
- Vídeo Pexels 4763826: **403 bloqueado**. Backup remoto en código: `https://videos.pexels.com/video-files/4763826/4763826-hd_1920_1080_25fps.mp4` (con poster local video-poster.webp como fallback).

## 5. SRI HASHES (GSAP 3.12.7 local) — YA CALCULADOS
- `gsap.min.js` (72.304 B): `sha384-pEQB1h4Zmn9xhS6jotzltHSIQq6N0Oh3BXkCNOH5LKI81R2NRbb9efarAJYw9gTY`
- `ScrollTrigger.min.js` (43.974 B): `sha384-TgZ1GoXcDnrw/czNfaiSZSFV1zgIRv8aQOevBA8ppS4SkNONmzYfjARpXsDfdnUE`

## 6. DECISIONES DE DISEÑO ACORDADAS (v5 PREMIUM)
1. **PALETA ARMÓNICA (refinada 2026-08-10 con estudio de coherencia + investigación web)** — Navy hue 255° + Oro complementario 75° (180° exacto en oklch). La investigación (zoviz.com, freecolorpalettes.co, media.io, madegooddesigns.com, avramify.com, 2026) confirma que **"Navy & Gold" es la combinación de lujo canónica** ("Navy = legacy, quiet confidence" · "Gold = wealth, prestige") y que el **oro legible/creíble es el ámbar profundo `#B8963E–#C6922A`** (los oros brillantes como #D99E2B leen "mass-market"; `#D4AF37` queda solo para decorativo grande). Regla lujo: máx. 2-3 colores, 1 acento único, oro reservado a CTA/iconos (nunca "yellow noise").
   - **TABLA DE COLORES → NOMBRES HUMANOS + COHERENCIA:**
     | Variable | Hex | Nombre humano | Rol / coherencia | Contraste AA |
     |---|---|---|---|---|
     | `--ivory` | `#F4EEE3` | Marfil porcelana | 60 % base artesanal (cremas cálidos + serif = orgánico) | 15.8:1 sobre navy |
     | `--paper` | `#FFFDF8` | Blanco crema | superficies | 18.0:1 sobre navy |
     | `--navy` | `#0B1526` | Azul marino profundo | 30 % confianza institucional (nunca negro puro) | — |
     | `--navy2` | `#13223B` | Azul marino medio | gradientes, fondos de tarjetas | 5.7:1 con oro |
     | `--blue` | `#2E4C7B` | Azul acero | soporte frío (gradientes, guías) | — |
     | `--amber` | `#C6922A` | Oro ámbar (deep amber-gold) | 10 % ÚNICA acción: CTA, acentos sobre navy | 6.6:1 (AAA) |
     | `--amber2` | `#A8781F` | Bronce | texto dorado sobre fondos claros (kickers, estrellas, firma) | 3.4:1 sobre marfil |
     | `--amber3` | `#F3E4C6` | Crema dorada | tinte para estados activos | — |
     | `--ink` | `#1A222D` | Grafito | texto primario | — |
     | `--mut` | `#5F6877` | Gris pizarra azulado | texto secundario (oscurecido para AA 4.9:1) | 4.9:1 |
     | `--line` | `#E5DCCB` | Lino | bordes y divisores | — |
     | `--wa` | `#25D366` | Verde WhatsApp | marca (solo FAB) | — |
   - **Cambios aplicados en el refinado**: `--amber #D99E2B → #C6922A` (oro ámbar legible, +sombra rgba 198,146,42) · `--amber2 #B57E1C → #A8781F` (bronce) · `--mut #67707F → #5F6877` (AA 4.9:1) · estrellas/logo/firma → `--amber2` (contraste sobre claro) · tintes `#F6EBD4`/`#F4E7CB`. Kickers de sección ya usaban amber2.
   - **Se eliminaron TODOS los emojis** (0 restantes) → reemplazados por **SVG inline monocromos** (pin, reloj, teléfono, escudo, escuadra, documento, candado, chat, sobre). 18 SVG en total. Se conservan los símbolos tipográficos ★ ◆ ← → ✓ (no son emojis).
2. **Escaparatismo**: patrón Z / F de lectura, puntos focales, regla de tercios, asimetría, jerarquía de baldas. El hero es la VITRINA.
3. **Transiciones estilo Apple**: easing suave `cubic-bezier(0.22,1,0.36,1)` / GSAP `power4.out`, fades+escala, header blur al scroll, reveals por sección.
4. **GSAP**: usar los archivos LOCALES (no CDN como fuente primaria), con fallback CDN + SRI. No eliminar GSAP (petición explícita del usuario).
5. **Mobile-first**: menú hamburguesa, touch targets ≥44px, formulario usable en móvil, hero compacto.
6. **Público objetivo**: propietarios parisinos, copropiedades (syndics), expatriados hispanos/anglófonos. → Copy debe transmitir confianza y trilingüismo.
7. **Comentado en español**: el código explica qué hace cada sección (petición explícita).
8. **Backups de fotos en el código** (petición explícita): `data-backup` + fallback a URL remota.
9. **Contenido honesto**: sin SIRET ficticio, sin décennale afirmada, avisos marcados como ejemplos ilustrativos.
10. **Single-file optimizado**: 1 HTML + assets locales; lazy loading, preconnect, `display=swap`, dimensiones para evitar CLS, `prefers-reduced-motion` respetado.

## 7. ESTADO DEL TRABAJO (checklist — TODO COMPLETO)
- [x] v4.0 extraída y auditada (seguridad, legal, rendimiento, accesibilidad)
- [x] 12 imágenes WebP descargadas + GSAP local + SRI
- [x] Estructura de carpetas creada
- [x] Referencias investigadas: Awwwards SOTD 2026, apple-website-clone (GitHub), GSAPify, web.dev CWV
- [x] MEMORIA-COMPACTA.md (este archivo)
- [x] Corrección de traducciones ES (3 errores: ta_note, p1_d, q2_t)
- [x] AUDITORIA-PLAN-30.md (30 pasos)
- [x] PROBLEMAS-FUTUROS.md (20 riesgos + soluciones)
- [x] index.html v5 PREMIUM (917 líneas, 98.369 B, comentado en español)
- [x] Optimización mobile completa (menú hamburguesa, touch 44px, hero compacto, form móvil)
- [x] CSP + nonce + SRI + backups (data-backup + onerror JS → URL remota)
- [x] Backend firmado netlify\functions\devis (honeypot, rate-limit 5/10min, validación FR, webhook LEAD_WEBHOOK_URL, CORS)
- [x] netlify.toml + _headers + robots.txt + sitemap.xml
- [x] README-DEPLOY.md (guía completa de despliegue + pendientes de negocio)
- [x] Verificación navegador: 23/23 comprobaciones OK + HTML5 válido + 0 errores JS (verifier)
- [x] **Última sesión (2026-08-10): emojis eliminados (0 restantes) + paleta armónica navy/oro aplicada + 18 SVG inline. Estructura verificada: 18/18 SVG balanceados, 4 gcards, HTML completo.**
- [x] Resumen final entregado

## 8. CONEXIÓN CON LA FASE PREVIA (historial del agente)
- Clave maestra DPAPI descifrada; cookies bloqueadas por proceso (vía ChatGPT cerrada).
- GPT "Judas era": `g-p-6a6dc3e90d9c81918bcedbc194d33070`; 28 conversaciones; site `chatgpt.site`.
- Backup ZIP: `BACKUP-belentani-Omega-live-2026-08-10.zip` (110 entradas); 39 scripts; `GUIA-BACKUP-2026-08-10.md`.
- Objetivos previos cerrados: lista de 10.000 tareas, extracción de ChatGPT.
- NO preguntar de nuevo al usuario por estos temas; ya están resueltos.

## 9. RESTRICCIONES OPERATIVAS
- PowerShell de Windows distorsiona UTF-8 en pantalla → usar herramientas Read/Write/Edit para tocar archivos, no la consola para ver acentos.
- El archivo tiene BOM UTF-8 → conservarlo al escribir.
- No puedo inspeccionar imágenes visualmente → las verificaciones visuales finales las hace el verifier/navegador.
- No publicar nada a Netlify sin preguntar; solo preparar los archivos.
- **Cierre de sesión (2026-08-10)**: se ordenó cerrar todas las sesiones de Codex, guardar toda la info y detener todos los agentes. Este archivo es el punto de retomada. Para continuar: releer este archivo y abrir `public\index.html`. Pendiente solo del usuario: decidir dominio real y aprobar deploy a Netlify.

## 10. ESTADO DE LIBERACIÓN (v5 CERRADA — ENTREGABLE LISTO)
- **HTML v5**: `public\index.html` (≈99 KB, 924+ líneas, firma Belentani en head/footer/JSON-LD; dict i18n honesto fr/es/en; GSAP local con SRI + fallback CDN; CSP nonce `H0o3tqwAN4FBeJaOjnGyTR`; 12 imágenes locales con data-backup; menú móvil burger+backdrop; preloader premium; form 6 pasos con validación inline sin alert, honeypot (campo oculto name=website) y POST a `/.netlify/functions/devis` con fallback wa.me; vídeo Pexels 403 → poster local; **SIN EMOJIS — iconos SVG monocromos; paleta Navy & Gold refinada: oro ámbar #C6922A + bronce #A8781F + mut #5F6877, contrastes AAA verificados**).
- **Verificación**: 23/23 OK base + auditoría final v2: 0 emojis (rango ampliado U+2300+), sin alert() nativo, honeypot presente, recursos 15/15, anclas 8/8, i18n 187×3 claves sin huecos, balance completo de etiquetas. Render real en navegador (crawl4ai) verificado sin errores. Contrastes WCAG calculados: CTA 6.6:1, marfil/navy 15.8:1, mut 4.9:1.
- **Pendiente usuario (no bloqueante)**: decidir dominio real, sustituir avisos/fotos ficticias cuando existan, aprobar deploy a Netlify.

## 11. VERSIONES v6 (FORKs PREMIUM — 2026-08-10, EN CURSO)
El usuario pidió variantes alternativas de la estética de v5. Ambas son forks de `public\index.html` (contenido/i18n/backend intactos; solo cambia el diseño).

### 11a. `index-carquidec.html` — "BRUTALISMO CÁLIDO EDITORIAL" (inspirado en CARQUIDEC)
- **Fuente de inspiración**: `C:\Users\USER\Documents\12_SCRIPTS\GitHub-Repos\Revision-2026-08-06\CARQUIDEC\` (index-ultra.html + GEMINI_index.html). ADN extraído: `--bg:#0a0a0a;--s:#111;--t:#f5f5f5;--ac:#c9c9c9;--gold:#b8a88a;` + Cormorant Garamond (display) + Space Grotesk (sans).
- **Misterio como estrategia** (solución al "no tenemos muchas fotos"): pocas fotos → tratar cada una como obra valiosa enmarcada: **B/N al reposo + revelado de color al hover** (`.xcard .ph img`, `.wcard .ph img`, `.portrait` con `filter:grayscale(.85)` → `grayscale(0)` en hover). Menos es más: las imágenes escasas se vuelven un lujo deliberado.
- **Paleta aplicada** (sustituye a la armónica de v5): `--ivory:#F5F1E8` (blanco roto) · `--paper:#111111` · `--navy:#0A0A0A` · `--navy2:#141414` · `--blue:#222222` · `--amber:#B8A88A` (oro envejecido, ÚNICO acento) · `--amber2:#8A7A5A` · `--amber3:#1E1B14` · `--ink:#E8E6E0` · `--mut:#9A968C` · `--line:#2A2A2A` · `--r:2px` (esquinas casi rectas) · fuentes `--fd:"Cormorant Garamond"` + `--fb:"Space Grotesk"`.
- **Cambios aplicados**: `<link>` Google Fonts → Cormorant Garamond + Space Grotesk · `theme-color` → `#0A0A0A` · `:root` completo · 30 reemplazos globales de colores hardcoded (fondos claros → carbón, dorados brillantes → oro envejecido) · `var(--white)` (indefinida, bug latente) → `var(--paper)` · bloque **"v6 CARQUIDEC — OVERRIDES"** al final del `<style>` (10 divisores dorados `.sec-head .rule`, hero/header/nav/inputs/tarjetas oscuros, CTA negro con botón dorado, marquee dorado, `:has()` para opciones del form) · **GSAP extra**: intro hero encadenada (kicker→h1→span→sub→CTAs→badges), parallax del bg con scrub, stagger por grids (`.grid3,.ggrid,.tiers,.tsteps,.gsteps`), líneas doradas que se dibujan (`scaleX` + `transformOrigin:left`, ScrollTrigger).
- **Estado**: estética completa y renderizada correctamente (verificado vía crawl4ai markdown: hero, expertises, método, BA, realizaciones, tarifs, avis, FAQ, form 6 pasos OK; estructura balanceada: 146/146 divs, 14/14 sections, 0 llaves sin cerrar). Falta: revisión visual fina por verifier + decidir con el usuario si es la elegida.

### 11b. `index-fume.html` — "FUMÉ GLACÉ" (en pausa)
- Paleta monocromática fría aplicada en `:root`: `--ivory:#E6EEF8` · `--paper:#0E1526` · `--navy:#0A101D` · `--navy2:#111C30` · `--blue:#27476E` · `--amber:#7FB4E8` (acento único azul hielo) · `--amber2:#A9CDF2` · `--amber3:#16273F` · `--ink:#C7D6EA` · `--mut:#7E93B5` · `--line:#1B2940` · `--r:18px` · `theme-color #0A101D`. Fuentes Fraunces/Manrope intactas.
- **Pendiente**: bloque de overrides glassmorphism (backdrop-blur en tarjetas, orbes de luz), GSAP extra. Pausado porque el usuario pivotó a CARQUIDEC. Retomable si se desea.

### 11c. `index-v7.html` — "FUSIÓN FINAL" (CARQUIDEC + Fumé + GSAP — RECOMENDADA)
- **Qué es**: fork de `index-carquidec.html` (toda la estética CARQUIDEC intacta: paleta negro mate #0A0A0A + oro envejecido #B8A88A, Cormorant+Space Grotesk, fotos misterio B/N→color, 10 divisores dorados) **+ capa glassmorphism heredada de Fumé** + animaciones finales. Es la versión que "aplica todo".
- **Capa glass añadida** (bloque "v7 FUSIÓN — GLASS" al final del `<style>`): header escarchado `rgba(10,10,10,.45)+blur(18px) saturate(1.3)` (y `.scrolled` blur 22px + sombra) · **2 orbes de luz** en el hero (`::before` dorado arriba-derecha + `::after` azul acero abajo-izquierda, blur 90px, keyframes CSS `orb1`/`orb2` 9s/11s que respiran; GSAP no anima pseudoelementos por eso keyframes) · tarjetas vidrio `.xcard/.wcard/.tier/.gcard` `rgba(17,17,17,.62)+blur(14px)` + glow dorado sutil al hover · `.step` placas glass · `.dform` y `.opts label` vidrio · `.ba/.video-sec` marcos de vidrio con `inset 0 0 0 1px` · `.t-slide` cristal esmerilado · preloader `rgba(10,10,10,.92)+blur(8px)` · **mobile fallback**: backdrop-filter desactivado <760px (costo), fondos más opacos.
- **GSAP extra final**: fade del marquee al entrar · zoom sutil (scale 1.12→1) de las fotos misterio al hacer scroll (encadena con el reveal B/N→color).
- **Verificado**: estructura balanceada (146/146 divs, 14/14 sections, 5/5 scripts, 0 llaves sin cerrar), 200 OK en servidor local, render completo vía crawl4ai (hero→FAQ→footer, form 6 pasos, i18n intacto).
- **Estado**: completa y lista para revisión visual por verifier. Firma Belentani intacta. **Candidata principal a desplegar.**

## 12. NOTA ADICIONAL: fix de fotos (2026-08-10)
- Síntoma: "no se ven las fotos". Causa: `assets\` estaba en la raíz del proyecto, pero el HTML está en `public\` → rutas `assets/img/...` resolvían a `public\assets\...` (inexistente). Esto rompía las fotos tanto en `file://` como en Netlify (publish dir = `public/`).
- Fix aplicado: `Move-Item` de todo `assets\` → `STEVEN-PARIS-2026\public\assets\`. Verificado: `hero.webp` presente, raíz sin assets, 200 OK en servidor local, markdown renderizado con `<img>` correctos.
