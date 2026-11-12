import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("las páginas del sitio existen", () => {
  for (const page of [
    "index.html",
    "ecosistema.html",
    "magic/immersive.html",
    "magic/shader.html",
    "magic/sfx.html",
  ]) {
    assert.ok(existsSync(join(root, page)), `falta ${page}`);
  }
});

test("los scripts locales referenciados por index.html existen", () => {
  const html = readFileSync(join(root, "index.html"), "utf8");
  const srcs = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  const locales = srcs.filter((src) => !/^https?:\/\//.test(src));
  assert.ok(locales.includes("lenis.min.js"), "index.html debe referenciar lenis.min.js");
  assert.ok(locales.includes("front-upgrade.js"), "index.html debe referenciar front-upgrade.js");
  for (const src of locales) {
    assert.ok(existsSync(join(root, src)), `script local roto: ${src}`);
  }
});

test("front-upgrade.js es el IIFE con guard de Lenis/GSAP", () => {
  const js = readFileSync(join(root, "front-upgrade.js"), "utf8");
  assert.ok(js.trim().startsWith("(function"), "debe ser un IIFE");
  assert.match(js, /window\.__frontUpgrade/);
  assert.match(js, /window\.Lenis/);
  assert.match(js, /gsap\.registerPlugin\(ScrollTrigger\)/);
});

test("index.html declara el negocio (título y descripción)", () => {
  const html = readFileSync(join(root, "index.html"), "utf8");
  assert.match(html, /<title>Steven Rénovation[^<]*<\/title>/);
  assert.match(html, /<meta name="description"/);
  assert.match(html, /El canal comercial de presupuestos está pendiente de configurar/);
  assert.match(html, /href="https:\/\/github.com\/belentani7\/Steven-renovation"/);
  assert.doesNotMatch(html, /href="https:\/\/wa\.me\/"/, "no publicar un contacto vacío");
});

test("el repo cumple los protocolos base (LICENSE MIT + README)", () => {
  assert.match(readFileSync(join(root, "LICENSE"), "utf8"), /MIT License/);
  assert.match(readFileSync(join(root, "README.md"), "utf8"), /## Licencia/);
});
