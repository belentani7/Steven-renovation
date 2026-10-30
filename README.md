# Steven Rénovation

Web de presentación de **Steven Rénovation**, empresa general de reformas en París e
Île-de-France. Sitio 100 % estático (HTML/CSS/JS, sin build ni dependencias) que presenta
servicios, realizaciones y precios, y capta presupuestos por WhatsApp, teléfono y email.
En línea: <https://steven-renovation.vercel.app>

## Qué hace

- **Página principal** (`index.html`, en francés): experticias (gros œuvre, pintura, baños y
  cocinas, reforma hausmanniana), método de trabajo, comparador antes/después, galería de
  obras, precios orientativos, testimonios, zonas de intervención (75·92·93·94) y FAQ.
- **Captación de contacto**: presupuesto gratuito en 48 h vía formulario pre-calificado,
  WhatsApp (`wa.me`), teléfono (`tel:`) y email.
- **`ecosistema.html`**: circuito con los proyectos del ecosistema Belentani.
- **`magic/`**: capa experimental "Belentani Magic Kit" — experiencias inmersivas
  (shader WebGL, efectos WebAudio) y utilidades para agentes (lore, instrucciones, skill y
  plugin de opencode con comando `/immersive`).

## Stack

- HTML5 + CSS + JavaScript vanilla, sin framework ni paso de build.
- Animaciones con **GSAP + ScrollTrigger + CustomEase** (por CDN) y **Lenis** para smooth
  scroll (`lenis.min.js` vendido localmente), integrados por `front-upgrade.js`.
- Fuentes de Google Fonts; imágenes de Unsplash.
- Despliegue: **Vercel** (`vercel.json`), **Netlify** (`netlify.toml`) y **Cloudflare Pages**
  (`wrangler.toml`) — las tres configuraciones están en el repo.

## Instalación

No hay build ni dependencias. Clona el repo y abre `index.html` en el navegador, o sirve
la carpeta con cualquier servidor estático.

## Uso

```bash
python -m http.server 8000
# abre http://localhost:8000
```

## Estructura

```
index.html          página principal del negocio (francés)
ecosistema.html     circuito de proyectos del ecosistema Belentani
front-upgrade.js    integración propia Lenis + GSAP (animaciones de entrada)
lenis.min.js        librería de smooth scroll (vendida)
magic/              kit inmersivo Belentani (shader, sfx, immersive, lore, skill, plugin)
test/               tests básicos (node --test)
vercel.json         despliegue en Vercel
netlify.toml        despliegue en Netlify
wrangler.toml       despliegue en Cloudflare Pages
```

## Scripts

No hay `package.json`; los comandos usan herramientas globales:

```bash
node --test test/               # tests básicos
node --check front-upgrade.js   # sintaxis del JS propio
```

## Tests

`test/basic.test.mjs` verifica con `node:test` que las páginas y scripts locales
referenciados existen y que el contenido clave del sitio está en su sitio:

```bash
node --test test/
```

Nota: `magic/plugin.js` es código TypeScript (fuente del plugin de opencode, con
dependencia externa `opencode`), por lo que queda fuera de la verificación de sintaxis JS
de Node; su uso es como plantilla/referencia, no se ejecuta en el sitio.

## Utilidad

- **Social:** da a vecinos y pequeños propietarios de París/Île-de-France acceso claro y
  multicanal a un servicio de reformas, con precios transparentes y presupuesto en 48 h.
- **Comercial:** es el escaparate de captación de clientes del negocio (presupuestos vía
  WhatsApp/teléfono/email) y un nodo de visibilidad dentro del circuito Belentani.

## Nota sobre el repositorio

`index.html` es el sitio de un negocio de un tercero, alojado aquí por comodidad de
despliegue; no forma parte del universo artístico Belentani. En cambio, `ecosistema.html`
y la carpeta `magic/` sí son material propio de la capa Belentani.

## Licencia

[MIT](LICENSE) — Copyright (c) 2026 Pedro Belentani (belentani7).
