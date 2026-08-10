/* ================================================================
   DEVIS — Netlify Function firmada por el estudio
   Recibe el formulario de presupuesto de la web de Steven Rénovation
   ----------------------------------------------------------------
   DESIGN & DÉVELOPPEMENT : Pedro Belentani
   belentani7studio@proton.me · noiacore.com · @belentani_
   ----------------------------------------------------------------
   Qué hace:
   1. Valida la carga en servidor (nunca confiar en el cliente).
   2. Protección anti-bot: honeypot + rate-limit por IP en memoria.
   3. Envía el lead a un webhook/email opcional (LEAD_WEBHOOK_URL).
   4. Responde 200 al navegador y deja el fallback WhatsApp intacto.
   Deploy: Netlify Functions (carpeta netlify/functions/devis).
   ================================================================ */
const crypto = require("crypto");

// Rate-limit simple en memoria (se reinicia al redeploy — suficiente para este volumen)
const hits = new Map();
const MAX_PER_IP = 5;          // máx. solicitudes por IP
const WINDOW_MS = 10 * 60 * 1000; // ventana de 10 minutos

function ipFrom(event) {
  return (
    (event.headers && (event.headers["x-nf-client-connection-ip"] ||
      event.headers["x-forwarded-for"] || "").split(",")[0].trim()) ||
    "unknown"
  );
}

function validPhone(p) {
  // Teléfonos FR: +33 o 0 seguido de 9 dígitos. Acepta espacios/puntos/guiones.
  return /^(\+33|0)[1-9](?:[\s.\-]?\d{2}){4}$/.test(String(p || "").trim());
}

exports.handler = async (event) => {
  // 1) Solo POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: "method" }) };
  }

  // 2) Rate-limit por IP
  const ip = ipFrom(event);
  const now = Date.now();
  const rec = hits.get(ip) || { n: 0, t: now };
  if (now - rec.t > WINDOW_MS) { rec.n = 0; rec.t = now; }
  rec.n += 1;
  hits.set(ip, rec);
  if (rec.n > MAX_PER_IP) {
    return { statusCode: 429, body: JSON.stringify({ ok: false, error: "rate" }) };
  }

  // 3) Parseo del cuerpo
  let data = {};
  try { data = JSON.parse(event.body || "{}"); } catch (e) { /* cuerpo vacío */ }

  // 4) Honeypot anti-bot: si está relleno, es un bot → responder éxito falso
  if (data.website && data.website.length > 0) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, honey: true }) };
  }

  // 5) Validación en servidor (nunca confiar en el cliente)
  const name = String(data.name || "").trim().slice(0, 120);
  const phone = String(data.phone || "").trim().slice(0, 40);
  const city = String(data.city || "").trim().slice(0, 80);
  const msg = String(data.msg || "").trim().slice(0, 1500);
  const svc = String(data.svc || "").trim().slice(0, 60);

  if (!name || !validPhone(phone)) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: "fields" }) };
  }

  // 6) Componer el lead (líneas seguras, escapadas para texto plano)
  const clean = (s) => String(s || "").replace(/[\r\n]+/g, " ").trim();
  const q = (k) => clean(data[k] || "—");
  const lead = [
    `Nouvelle demande de devis${svc ? " [" + svc + "]" : ""}`,
    `Nom: ${name}`,
    `Téléphone: ${phone}`,
    `Ville: ${city || "—"}`,
    `Bien: ${q("q1")}`,
    `Envergure: ${q("q2")}`,
    `Diagnostics: ${q("q3")}`,
    `Accès: ${q("q4")}`,
    `Délai: ${q("q5")}`,
    `Langue: ${clean(data.lang || "fr")}`,
    `Message: ${msg || "—"}`,
    `---`,
    `IP: ${ip} · ${new Date().toISOString()}`,
  ].join("\n");

  // 7) Envío opcional a webhook (email, Slack, CRM, etc.)
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "steven-renovation.fr",
          type: "devis",
          id: crypto.randomUUID(),
          name, phone, city, msg, svc,
          q1: q("q1"), q2: q("q2"), q3: q("q3"), q4: q("q4"), q5: q("q5"),
          lang: clean(data.lang || "fr"),
          ip, ts: new Date().toISOString(),
        }),
      });
    } catch (e) { /* el fallo del webhook no debe romper la respuesta */ }
  }

  // 8) Respuesta de éxito (el frontend muestra la pantalla de confirmación)
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify({ ok: true }),
  };
};
