# PROBLEMAS-FUTUROS — 20 problemas que Steve podría tener en el futuro (+ solución en la web)
> Proyecto: Steven Rénovation — sitio v5. Análisis de riesgos de negocio a medio plazo y cómo la web los previene o mitiga.
> Nota: algunos "arreglos" son de negocio (el sitio solo los acompaña); la web resuelve los señalados como **[WEB]**.

---

## CATEGORÍA A — LEGAL Y DOCUMENTACIÓN (día 1 crítico)
1. **Aún sin SIRET ni décennale real** → la v4 afirmaba un SIRET ficticio y "Décennale active (SMABTP/AXA)". Si un syndic o cliente contrasta, pierde toda credibilidad (riesgo de denuncia por publicidad engañosa).
   **[WEB] Solución:** ya eliminado en v5 — texto honesto "démarches en cours". FAQ anticipa la pregunta de seguros con respuesta sincera y el compromiso de aportar certificados en cuanto estén.
2. **Un cliente pregunta "¿estás asegurado?" y no sabe qué responder** → pierde la venta en 30 segundos.
   **[WEB] Solución:** FAQ honesta f2 + página de garantías redactada para convertir la debilidad en transparencia ("trabajo en regla, facturas reales, documentos cuando existan").
3. **Hace décennale "por debajo de la mesa" con otro artesano** → él asume el riesgo de su propio seguro. Peligro legal si hay siniestro.
   **[WEB] Solución:** no puede arreglarlo la web, pero el copy de "transparencia" lo orienta a no fingir; se recomienda a Steve formalizar cuanto antes.
4. **Facturación en negro recurrente** → sin historial fiscal no puede optar a crédito, subvenciones (MaPrimeRénov) ni licitaciones.
   **[WEB] Solución:** formulario con mensaje "presupuesto con factura" refuerza la práctica legal desde el primer contacto.

## CATEGORÍA B — REPUTACIÓN Y PRUEBA SOCIAL
5. **Avisos falsos actuales (Claire D., Marc L., etc. son inventados)** → si un cliente reconoce un nombre, escándalo.
   **[WEB] Solución:** en v5 los avisos se marcan "Ejemplos ilustrativos — nombres ficticios", y se añade un banner interno para que Steve los sustituya por avisos reales (Google Business) cuando los tenga.
6. **Sin Google Business Profile** → cuando buscan "artisan rénovation Paris" no aparece; la web sola no trae tráfico.
   **[WEB] Solución:** secciones con SEO local real (JSON-LD LocalBusiness, zonas, servicios); se recomienda a Steve crear la ficha Google para acompañar.
7. **Un cliente deja una reseña negativa y nadie la gestiona** → no hay sistema de respuesta.
   **[WEB] Solución:** se documenta en el README cómo responder; el diseño de avisos futuros (cuando sean reales) incluirá moderación.
8. **Fotos de Unsplash = proyectos que no son suyos** → engaño si el cliente lo descubre (búsqueda inversa de imagen).
   **[WEB] Solución:** no arreglable hoy (no hay fotos reales); el README incluye checklist "sustituir fotos por fotos reales de chantier" como prioridad #1 del futuro. La web deja espacio para las fotos reales.

## CATEGORÍA C — OPERACIONES Y CAPACIDAD
9. **Steve se satura de llamadas cuando el sitio funciona** → pierde leads porque no puede atender.
   **[WEB] Solución:** formulario de 6 pasos pre-califica (superficie, año, acceso, plazo) → solo llama a leads serios; mensaje "respondo en 48 h" gestiona expectativas.
10. **No prioriza los proyectos rentables** → pierde dinero en obras pequeñas de soporte.
    **[WEB] Solución:** los tarifs orientan al cliente hacia proyectos medios; el form pide superficie y presupuesto (q2, q5) → Steve decide a quién llamar primero.
11. **Olvida responder a un lead** → cliente se va con la competencia.
    **[WEB] Solución]** el backend firmado envía el lead por email/webhook → sistema de tickets; fallback WhatsApp.
12. **Sin presupuesto por escrito estandarizado** → malentendidos y conflictos.
    **[WEB] Solución:** la méthode (pasos 02 y 05) educa al cliente en "devis poste a poste, recepción conjunta"; Steve tiene plantilla mental clara.

## CATEGORÍA D — FINANZAS
13. **Pagos a plazos sin contrato** → impagos.
    **[WEB] Solución:** FAQ f6 educa ("anticipos legales ligados al avance, siempre con factura") — posiciona la política antes de la negociación.
14. **No cobra el desplazamiento ni el diagnóstico** → el "devis gratis" atrae curiosos.
    **[WEB] Solución:** la web mantiene el gancho comercial (visita gratuita) pero el form filtrado evita curiosos sin presupuesto real.
15. **No tiene visibilidad de flujo de caja** → no sabe si puede asumir 2 obras a la vez.
    **[WEB] Solución:** no arreglable con la web; se documenta en el README la recomendación de contabilidad simple desde el día 1 (importante: Steve sin documentación debe llevar registro desde YA).

## CATEGORÍA E — CRECIMIENTO Y DIVERSIFICACIÓN
16. **Depende de una sola fuente de leads (boca a boca)** → meses secos.
    **[WEB] Solución:** el sitio con SEO local + form + WhatsApp = segundo canal constante; el marquee de oficios posiciona a Steve como "empresa general" no como "el de la pintura".
17. **No explota su nicho de expatriados** (habla FR·ES·EN) → pierde clientes hispanos/anglófonos con poder adquisitivo.
    **[WEB] Solución:** i18n completo FR/ES/EN con selector visible; copy dirigido a expatriados (FAQ f5, hero). Este es su diferencial real.
18. **No captura emails para re-contactar** → vende solo al primer contacto.
    **[WEB] Solución:** el form pide nombre+teléfono+ciudad; se añade el compromiso RGPD. Futuro: newsletter trimestral.

## CATEGORÍA F — TECNOLOGÍA Y MANTENIMIENTO
19. **El sitio se rompe cuando Steve cambia el teléfono o el email** → leads muertos.
    **[WEB] Solución:** todos los datos clave (tel, email, WhatsApp) están centralizados en variables/constantes comentadas al inicio del JS + README con instrucción "cambia aquí el teléfono".
20. **Depende del hosting gratuito de un tercero que caduca** → sitio caído sin aviso.
    **[WEB] Solución:** despliegue en Netlify (gratis, estándar), archivos versionables y guía de despliegue documentada en el README; backup local del proyecto completo.

---

## RESUMEN EJECUTIVO PARA STEVE
- **Hoy mismo (web):** la v5 elimina las mentiras legales, filtra leads, captura contacto en 3 idiomas, y educa al cliente en transparencia.
- **Esta semana (negocio):** iniciar el trámite de SIRET/micro-entreprise; crear Google Business Profile; responder cada lead en <24 h.
- **Este mes (reputación):** sustituir avisos ficticios por reales; sustituir fotos de Unsplash por fotos reales de chantier (pantalla delante de obra).
- **Mensualmente:** revisar el README, actualizar tarifas y avisos, y formalizar la contabilidad.
