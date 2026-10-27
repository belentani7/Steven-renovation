# PROJECT MASTER PROMPT — STEVEN RÉNOVATION

Canonical repository: `belentani7/Steven-renovation`. Product: **Steven Rénovation**, a French renovation contractor's real customer-facing website for Paris and Île-de-France. This site represents a **third-party business**; it is not a Belentani artistic project and must retain its own brand, voice, ownership, contact details and factual scope.

## Reality and source of truth

Read the current `index.html`, `site.js`, `quote-delivery.js`, `vercel.json`, `README.md`, and tests before making changes. Confirm actual production host and deployment configuration rather than assuming a Netlify function exists on Vercel. Preserve verifiable historical content. Do **not** present placeholder projects, insurance, registrations, reviews, references, years of experience or response-time guarantees as externally verified facts.

Do not create a new repository, rebrand as NOIACORE/BELENTANI, publish internal client documents or expose visitor contact information. No deletions or changes to domain ownership without explicit permission.

## Maximum useful destination — actual working business product

1. **Discover & trust:** fast, responsive, accessible homepage; meaningful service explanations, geographical coverage, proof-based before/after portfolio with permissions, honest registration/insurance status, verifiable reviews, real FAQs, click-to-call and messaging.
2. **Get a quotation:** progressive 6-step questionnaire, keyboard and screen-reader support, field validation, anti-spam controls, useful accessibility feedback and multilingual FR/ES/EN parity. Never claim a request was received on HTTP 200 alone; require a signed/verified backend receipt or show a truthful manual WhatsApp/email route.
3. **Deliver inquiries:** deploy an environment-specific server endpoint with schema validation, rate-limiting, human-safe input limits, no secret leakage and explicit JSON `{ok:true}` only after persistent delivery. If persistent delivery is unavailable, remain functional in transparent manual-contact mode. Use deduplication and reliable notification retries. Preserve the exact state sent to WhatsApp/email with URL length safeguards.
4. **Business operations:** consented CRM/lead inbox, status and ownership, secure access controls, spam triage, operational notifications, and optional scheduling. Use a database only if the actual workflow needs one and approved access exists.
5. **Experience:** correct Paris-area local SEO and service pages, structured data matching true credentials, privacy and legal details, performance-conscious media, resilient navigation, reduced-motion and accessible forms. Keep the existing black/navy, ivory and amber design direction unless the business owner decides otherwise.
6. **Security & privacy:** data minimization, retention/deletion rights, honest GDPR descriptions, strict CSP, HTTPS, no third-party analytics collecting submitted PII, access logging without sensitive content, no contact data in URLs except explicit user-driven WhatsApp/email actions.
7. **Delivery:** reproducible tests for quote submission success, failed sends, missing backend, SPA HTML rewrites, abort/timeouts, multilingual labels and keyboard access. Validate production routes and browser journey before merging or deploying.

## Operating phases — execute code, not another audit-only document

- **Phase A:** remove false-positive quotation success; supply manual fallback; add deterministic tests and separate local JS for CSP compatibility.
- **Phase B:** implement a real environment-compatible lead receiver and privacy-preserving storage/delivery path, or prove manual-only mode if serverless facilities are unavailable.
- **Phase C:** validate responsive/accessibility behavior and functional navigation; fix actual failures. Replace only demonstrably incorrect claims after owner review.
- **Phase D:** enrich the portfolio, services, localized pages and customer workflow with authentic, permissioned source materials.
- **Phase E:** run CI, production smoke tests and end-to-end quotation verification, then publish with documented rollback.

## Current implementation status

- 2026-10-23: a branch/PR adds `quote-delivery.js` with explicit JSON acknowledgement, timeout, network failure handling and unit tests; `site.js` with unsent status and multilingual fallback; `index.html` with local CSP-friendly scripts and accessible feedback.
- A lightweight syntax and response-shape smoke check passed in the execution session. **GitHub Actions and production delivery have not been verified; no production claim is made.**
- The live endpoint `/.netlify/functions/devis` must be verified on the actual host. Vercel's catch-all `index.html` rewrite is not a lead-submission backend.

For every next agent session: examine this repo and its open PRs first, implement a concrete missing feature or fix with focused regression coverage, verify the behavior, keep changes on a reviewable branch and report actual verification status. No untested production changes or unauthorized public disclosure.
