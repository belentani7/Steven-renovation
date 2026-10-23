
document.addEventListener("DOMContentLoaded",function(){
/* ================= I18N FR / ES / EN ================= */
var T={
fr:{top_zone:"Paris (75) & Île-de-France (92·93·94·95)",top_hours:"Lun–Ven : 8h00–19h00",top_dec:"Démarches d'immatriculation en cours",logo_sub:"Artisan du bâtiment",nav_exp:"Expertises",nav_meth:"Méthode",nav_work:"Réalisations",nav_tar:"Tarifs",nav_gar:"Garanties",nav_quote:"Devis",hero_kicker:"Entreprise générale de rénovation — Paris & Île-de-France",hero_title:"L'excellence du geste, <span>la rigueur du contrat.</span>",hero_sub:"Du gros œuvre aux moulures haussmanniennes : Steven pilote votre rénovation de A à Z, en français, español & english. Devis détaillé sous 48 h, chantier propre et en règle.",hero_cta1:"Demander un devis 48 h",hero_cta2:"Appeler Steven",b1:"<b>10+</b> ans d'expérience",b2:"<b>120+</b> chantiers livrés",b3:"<b>48 h</b> délai de devis",b4:"FR · ES · EN",m1:"Gros œuvre & maçonnerie",m2:"Peinture & finitions",m3:"Bains & cuisines",m4:"Rénovation haussmannienne",m5:"Placo & isolation",m6:"Carrelage & parquets",s1:"chantiers livrés",s2:"ans d'expérience",s3:"clients satisfaits",s4:"délai de devis",exp_k:"Savoir-faire technique",exp_t:"Nos expertises",exp_s:"Six corps de métier, un seul interlocuteur : zéro coordination à votre charge.",e1_tag:"Structure",e1_t:"Gros œuvre & maçonnerie",e1_d:"Ouverture de murs porteurs, pose d'IPN, chapes, cloisons briques ou placo. Structure & sécurité.",e2_tag:"Design",e2_t:"Peinture & finitions",e2_d:"Enduits lissés, papiers peints haut de gamme, peintures mates velours, parquets poncés-vitrifiés.",e3_tag:"Clé en main",e3_t:"Bains & cuisines",e3_d:"Rénovation complète clé en main : douche italienne étanche, carrelage grand format, plomberie sanitaire.",e4_tag:"Patrimoine",e4_t:"Rénovation haussmannienne",e4_d:"Moulures, corniches, cheminées en marbre, parquet point de Hongrie : le cachet parisien préservé.",e5_tag:"Confort",e5_t:"Placo & isolation",e5_d:"Cloisons acoustiques, doublage, isolation thermique performante.",e6_tag:"Rapide",e6_t:"Dépannage & petits travaux",e6_d:"Fuites, fissures, menuiserie, reprises : intervention rapide sur Paris et couronnes.",lot:"Devis pour ce lot →",me_k:"Process contractuel",me_t:"La méthode Steven",me_s:"Cinq étapes, zéro surprise : chaque engagement est écrit.",p1_t:"Visite & diagnostic",p1_d:"Mesures, contraintes techniques et copropriété, écoute du besoin.",p2_t:"Devis détaillé (48 h)",p2_d:"Chiffrage poste par poste, transparent, sans avenant surprise.",p3_t:"Planning & protections",p3_d:"Calendrier contractuel, protection des parties communes.",p4_t:"Chantier piloté",p4_d:"Suivi quotidien, photos, point hebdo, chantier propre chaque soir.",p5_t:"Livraison & garanties",p5_d:"Réception contradictoire, décennale levée sur les ouvrages.",ba_k:"La preuve par l'image",ba_t:"Avant / Après : faites glisser",ba_s:"Un même espace, deux histoires. Le curseur révèle le chantier.",ba_a:"AVANT",ba_b:"APRÈS",wo_k:"Galerie de chantiers",wo_t:"Réalisations récentes",wo_s:"Paris & couronnes, 2024–2026. Chaque chantier est daté et localisé.",w1_tag:"Rénovation complète",w1_t:"Studio 32 m² — Passy (16e)",w1_p:"Optimisation totale, cuisine ouverte sur mesure, salle d'eau repensée.",w1_d:"5 semaines",w2_tag:"Patrimoine",w2_t:"Appartement 110 m² — Monceau (8e)",w2_p:"Moulures restaurées, parquet point de Hongrie vitrifié, peinture mate velours.",w2_d:"9 semaines",w3_tag:"Gros œuvre",w3_t:"Pavillon — Neuilly (92)",w3_p:"Ouverture de mur porteur avec IPN certifié, cloisons acoustiques.",w3_d:"6 semaines",vi_k:"Sur le terrain",vi_t:"Le chantier, en mouvement",vi_s:"Propreté, sécurité, précision : notre quotidien, sans filtre.",ap_k:"L'artisan",ap_t:"Steven B. — le geste colombien, la norme française",ap_p1:"Formé sur les chantiers de Bogotá, perfectionné depuis plus de dix ans dans les immeubles parisiens, Steven allie la polyvalence latino-américaine à l'exigence des DTU français.",ap_p2:"Un seul interlocuteur, trois langues (FR·ES·EN), un chantier propre et des engagements écrits. C'est ainsi que la confiance se construit, devis après devis.",ap_b1:"ans à Paris",ap_b3:"chantiers",ta_k:"Repères tarifaires",ta_t:"Des prix clairs, pour décider vite",ta_s:"Fourchettes indicatives HT, hors matériaux nobles. Le prix exact est confirmé après visite technique gratuite.",t1_t:"Rafraîchissement",t1_p:"450–700 €/m²",t1_d:"Peinture, sols, reprises ponctuelles : le coup d'éclat avant vente ou location.",t2_t:"Rénovation complète",t2_p:"900–1 400 €/m²",t2_d:"Cuisine, bain, électricité, placo : transformation totale, livré clé en main.",t3_t:"Haussmannien / patrimoine",t3_p:"1 300–1 900 €/m²",t3_d:"Moulures, parquet point de Hongrie, cachet ancien : restauration dans les règles de l'art.",ta_note:"Ces fourchettes sont indicatives (hors matériaux nobles et contraintes amiante). Chaque devis est gratuit, détaillé poste par poste, et sans engagement.",ga_k:"Cadre juridique & protections",ga_t:"Le standard de confiance parisien",ga_s:"Travailler avec Steven, c'est un cadre juridique et technique irréprochable.",g1_t:"Travail en règle",g1_d:"Démarches d'immatriculation et d'assurance en cours : attestations transmises dès leur réception. Devis et factures toujours écrits.",g2_t:"Normes DTU",g2_d:"Application stricte des Documents Techniques Unifiés, y compris en immeuble ancien.",g3_t:"Transparence tarifaire",g3_d:"Devis chiffré poste par poste ; aucun dépassement sans avenant signé par vous.",g4_t:"RGPD & données",g4_d:"Vos coordonnées servent uniquement à vous répondre. Jamais revendues. Hébergement UE.",av_k:"Preuve sociale",av_t:"Ils nous recommandent",di_t:"Besoin d'un diagnostic immédiat ?",di_s:"Intervention technique dans le 75, 92, 93, 94. Devis gratuit et facturation en règle.",di_cta:"Appeler Steven directement",zo_k:"Couverture",zo_t:"Zones d'intervention",zo_s:"Toute la petite couronne ; grande couronne sur étude.",de_k:"Formulaire intelligent",de_t:"Votre devis pré-qualifié en 2 minutes",de_s:"Île-de-France (Paris & couronnes). Réponse garantie sous 48 h ouvrées.",q1_t:"1. Typologie du bien immobilier",q1a:"Immeuble haussmannien (parquet, moulures, ancien)",q1b:"Immeuble récent / années 70-90",q1c:"Maison individuelle / pavillon",q1d:"Local commercial / bureau (ERP)",q2_t:"2. Surface et envergure des travaux",q2a:"Rénovation totale (> 60 m²)",q2b:"Partielle (cuisine, SDB, 15-60 m²)",q2c:"Petits travaux / finitions (< 15 m²)",q3_t:"3. Année de construction / diagnostics",q3a:"Dossier de diagnostics (DDT) disponible",q3b:"Antérieur à 1997 (vérification amiante/plomb requise)",q3c:"Postérieur à 2000 (sans risque apparent)",q4_t:"4. Accès et contraintes de copropriété",q4a:"Accès facile / ascenseur / autorisations prêtes",q4b:"Sans ascenseur / ZFE / stationnement complexe",q4c:"Immeuble protégé / règles strictes de copropriété",q5_t:"5. Délai souhaité pour le démarrage",q5a:"Immédiat / budget validé (prêt à démarrer)",q5b:"À court terme (1 à 3 mois)",q5c:"Simple estimation / exploration de coûts",q6_t:"6. Vos coordonnées",f_name:"Nom / prénom",f_phone:"Téléphone",f_city:"Ville / code postal",f_msg:"Votre projet (optionnel)",f_back:"← Retour",f_next:"Suivant →",f_send:"Envoyer ma demande sécurisée",d_done_t:"Demande bien reçue !",d_done_s:"Steven vous rappelle sous 24 h ouvrées. Accélérez tout en confirmant via WhatsApp ou e-mail.",d_legal:"Données protégées (RGPD UE 2016/679). Devis gratuit et sans engagement.",fq_k:"Transparence",fq_t:"Questions fréquentes",f1_q:"Le devis est-il vraiment gratuit ?",f1_a:"Oui : visite, métré et devis détaillé gratuits et sans engagement (art. L111-1 Code de la consommation).",f2_q:"Êtes-vous assuré pour le gros œuvre ?",f2_a:"Les démarches d'immatriculation et d'assurance professionnelle sont en cours. Les attestations seront transmises avec chaque devis dès leur réception. Travail toujours facturé en règle.",f3_q:"Travaillez-vous en copropriété parisienne ?",f3_a:"Oui : horaires réglementaires, protections des parties communes, dossier d'autorisation pour le syndic, évacuations conformes.",f4_q:"Un immeuble avant 1997 pose-t-il problème ?",f4_a:"Non, mais il exige des vérifications amiante/plomb (DDT). Nous intégrons ces contraintes au planning et au devis.",f5_q:"Parlez-vous espagnol ou anglais ?",f5_a:"Sí / Yes : devis, chantier et livraison suivis en FR, ES ou EN — idéal propriétaires expatriés.",f6_q:"Quels acomptes ?",f6_a:"Acomptes légaux uniquement, liés à l'avancement réel et toujours contre facture. Jamais de paiement « au noir ».",c_t:"Un projet ? Parlons-en aujourd'hui.",c_s:"Visite conseil gratuite à Paris et en couronnes — réponse sous 48 h.",ft_about:"Entreprise générale de rénovation. Paris (75) & Île-de-France. Gros œuvre, second œuvre, finitions de patrimoine.",ft_assur:"Démarches d'immatriculation & assurance en cours",ft_nav:"Navigation",ft_contact:"Contact direct",ft_legal:"Légal",ft_lcen:"Mentions légales : Steven B., artisan du bâtiment — Paris. RGPD UE 2016/679.",ft_rgpd:"Hébergement UE · RGPD conforme · aucune revente de données",ft_credits:"Photos : Unsplash (licence libre) · Vidéo : Pexels · Anim : GSAP",ft_rights:"© 2026 Steven B. Artisan du Bâtiment — Tous droits réservés.",ck:"Cookies limités à la mesure d'audience anonyme (RGPD).",av_note:"Avis illustratifs — à remplacer par de vrais avis clients."},
es:{top_zone:"París (75) e Île-de-France (92·93·94·95)",top_hours:"Lun–Vie : 8h00–19h00",top_dec:"Trámites de registro en curso",logo_sub:"Artesano de la construcción",nav_exp:"Servicios",nav_meth:"Método",nav_work:"Obras",nav_tar:"Tarifas",nav_gar:"Garantías",nav_quote:"Presupuesto",hero_kicker:"Empresa general de reformas — París e Île-de-France",hero_title:"La excelencia del oficio, <span>el rigor del contrato.</span>",hero_sub:"De la obra gruesa a las molduras haussmannianas: Steven dirige tu reforma de la A a la Z, en français, español & english. Presupuesto detallado en 48 h, obra limpia y en regla.",hero_cta1:"Pedir presupuesto 48 h",hero_cta2:"Llamar a Steven",b1:"<b>10+</b> años de experiencia",b2:"<b>120+</b> obras entregadas",b3:"<b>48 h</b> plazo de presupuesto",b4:"FR · ES · EN",m1:"Albañilería y obra gruesa",m2:"Pintura y acabados",m3:"Baños y cocinas",m4:"Reforma haussmanniana",m5:"Pladur y aislamiento",m6:"Alicatado y parquets",s1:"obras entregadas",s2:"años de experiencia",s3:"clientes satisfechos",s4:"plazo de presupuesto",exp_k:"Saber hacer técnico",exp_t:"Nuestros servicios",exp_s:"Seis oficios, un solo interlocutor: cero coordinación para ti.",e1_tag:"Estructura",e1_t:"Albañilería y obra gruesa",e1_d:"Aperturas de muros de carga, vigas IPN, soleras, tabiques. Estructura y seguridad.",e2_tag:"Diseño",e2_t:"Pintura y acabados",e2_d:"Enlucidos finos, papeles pintados de gama alta, pinturas mate, parquets lijados y barnizados.",e3_tag:"Llave en mano",e3_t:"Baños y cocinas",e3_d:"Reforma completa llave en mano: ducha de obra estanca, gres gran formato, fontanería.",e4_tag:"Patrimonio",e4_t:"Reforma haussmanniana",e4_d:"Molduras, cornisas, chimeneas de mármol, parqué punto de Hungría: el encanto parisino preservado.",e5_tag:"Confort",e5_t:"Pladur y aislamiento",e5_d:"Tabiques acústicos, trasdosados, aislamiento térmico de alto rendimiento.",e6_tag:"Rápido",e6_t:"Reparaciones y pequeños trabajos",e6_d:"Fugas, grietas, carpintería: intervención rápida en París y alrededores.",lot:"Presupuesto de este lote →",me_k:"Proceso contractual",me_t:"El método Steven",me_s:"Cinco pasos, cero sorpresas: cada compromiso por escrito.",p1_t:"Visita y diagnóstico",p1_d:"Mediciones, limitaciones técnicas y comunidad, escucha del cliente.",p2_t:"Presupuesto detallado (48 h)",p2_d:"Precio por partidas, transparente, sin suplementos sorpresa.",p3_t:"Planificación y protecciones",p3_d:"Calendario contractual, protección de zonas comunes.",p4_t:"Obra dirigida",p4_d:"Seguimiento diario, fotos, reunión semanal, obra limpia cada día.",p5_t:"Entrega y garantías",p5_d:"Recepción conjunta y seguro decenal sobre lo ejecutado.",ba_k:"La prueba en imagen",ba_t:"Antes / Después: desliza",ba_s:"Un mismo espacio, dos historias. El cursor revela la obra.",ba_a:"ANTES",ba_b:"DESPUÉS",wo_k:"Galería de obras",wo_t:"Obras recientes",wo_s:"París y alrededores, 2024–2026. Cada obra con fecha y lugar.",w1_tag:"Reforma completa",w1_t:"Estudio 32 m² — Passy (16)",w1_p:"Optimización total, cocina abierta a medida, baño renovado.",w1_d:"5 semanas",w2_tag:"Patrimonio",w2_t:"Piso 110 m² — Monceau (8)",w2_p:"Molduras restauradas, parqué punto de Hungría barnizado, pintura mate.",w2_d:"9 semanas",w3_tag:"Obra gruesa",w3_t:"Chalet — Neuilly (92)",w3_p:"Apertura de muro de carga con IPN certificado, tabiques acústicos.",w3_d:"6 semanas",vi_k:"En el terreno",vi_t:"La obra, en movimiento",vi_s:"Limpieza, seguridad, precisión: nuestro día a día, sin filtro.",ap_k:"El artesano",ap_t:"Steven B. — el oficio colombiano, la norma francesa",ap_p1:"Formado en las obras de Bogotá y curtido durante más de diez años en los edificios parisinos, Steven une la versatilidad latinoamericana con la exigencia de los DTU franceses.",ap_p2:"Un solo interlocutor, tres idiomas (FR·ES·EN), una obra limpia y compromisos por escrito. Así se construye la confianza, presupuesto a presupuesto.",ap_b1:"años en París",ap_b3:"obras",ta_k:"Tarifas orientativas",ta_t:"Precios claros para decidir rápido",ta_s:"Franjas orientativas sin IVA, sin materiales nobles. El precio exacto se confirma tras la visita técnica gratuita.",t1_t:"Refresco",t1_p:"450–700 €/m²",t1_d:"Pintura, suelos, retoques puntuales: el impulso antes de vender o alquilar.",t2_t:"Reforma completa",t2_p:"900–1 400 €/m²",t2_d:"Cocina, baño, electricidad, pladur: transformación total, entregada llave en mano.",t3_t:"Haussmanniano / patrimonio",t3_p:"1 300–1 900 €/m²",t3_d:"Molduras, parqué punto de Hungría, encanto antiguo: restauración en regla.",ta_note:"Estas franjas son orientativas (sin materiales nobles ni restricciones por amianto). Cada presupuesto es gratuito, detallado por partidas y sin compromiso.",ga_k:"Marco jurídico y protecciones",ga_t:"El estándar de confianza parisino",ga_s:"Trabajar con Steven es un marco jurídico y técnico impecable.",g1_t:"Trabajo en regla",g1_d:"Trámites de registro y de seguro en curso: certificados enviados en cuanto estén listos. Presupuesto y facturas siempre por escrito.",g2_t:"Normas DTU",g2_d:"Aplicación estricta de los Documents Techniques Unifiés, también en edificio antiguo.",g3_t:"Transparencia de precios",g3_d:"Presupuesto por partidas; ningún suplemento sin adenda firmada por ti.",g4_t:"RGPD y datos",g4_d:"Tus datos solo sirven para responderte. Nunca se revenden. Hosting UE.",av_k:"Prueba social",av_t:"Nos recomiendan",di_t:"¿Necesitas un diagnóstico inmediato?",di_s:"Intervención técnica en el 75, 92, 93, 94. Presupuesto gratuito y facturación en regla.",di_cta:"Llamar a Steven ahora",zo_k:"Cobertura",zo_t:"Zonas de trabajo",zo_s:"Toda la pequeña corona; gran corona bajo estudio.",de_k:"Formulario inteligente",de_t:"Tu presupuesto pre-calificado en 2 minutos",de_s:"Île-de-France (París y coronas). Respuesta garantizada en 48 h laborables.",q1_t:"1. Tipología del inmueble",q1a:"Edificio haussmanniano (parqué, molduras, antiguo)",q1b:"Edificio reciente / años 70-90",q1c:"Casa individual / chalet",q1d:"Local comercial / oficina (ERP)",q2_t:"2. Superficie y envergadura de la obra",q2a:"Reforma total (> 60 m²)",q2b:"Parcial (cocina, baño, 15-60 m²)",q2c:"Pequeños trabajos / acabados (< 15 m²)",q3_t:"3. Año de construcción / diagnósticos",q3a:"Dossier de diagnósticos (DDT) disponible",q3b:"Anterior a 1997 (verificación amianto/plomo)",q3c:"Posterior a 2000 (sin riesgo aparente)",q4_t:"4. Acceso y comunidad de propietarios",q4a:"Acceso fácil / ascensor / permisos listos",q4b:"Sin ascensor / ZFE / aparcamiento complejo",q4c:"Edificio protegido / normas estrictas",q5_t:"5. Plazo deseado para empezar",q5a:"Inmediato / presupuesto aprobado",q5b:"A corto plazo (1 a 3 meses)",q5c:"Simple estimación / explorar costes",q6_t:"6. Tus datos",f_name:"Nombre y apellidos",f_phone:"Teléfono",f_city:"Ciudad / código postal",f_msg:"Tu proyecto (opcional)",f_back:"← Atrás",f_next:"Siguiente →",f_send:"Enviar solicitud segura",d_done_t:"¡Solicitud recibida!",d_done_s:"Steven te llama en 24 h laborables. Agiliza confirmando por WhatsApp o e-mail.",d_legal:"Datos protegidos (RGPD UE 2016/679). Presupuesto gratis y sin compromiso.",fq_k:"Transparencia",fq_t:"Preguntas frecuentes",f1_q:"¿El presupuesto es gratis de verdad?",f1_a:"Sí: visita, medición y presupuesto detallado gratis y sin compromiso (art. L111-1 Code de la consommation).",f2_q:"¿Estás asegurado para obra gruesa?",f2_a:"Los trámites de registro y de seguro profesional están en curso. Los certificados se adjuntarán a cada presupuesto en cuanto estén listos. Trabajo siempre facturado en regla.",f3_q:"¿Trabajas en comunidades parisinas?",f3_a:"Sí: horarios reglamentarios, protección de zonas comunes, dossier de autorización para el administrador.",f4_q:"¿Un edificio anterior a 1997 es un problema?",f4_a:"No, pero exige verificaciones de amianto/plomo (DDT). Las integramos en planificación y presupuesto.",f5_q:"¿Hablas español o inglés?",f5_a:"Sí / Yes: presupuesto, obra y entrega seguidos en FR, ES o EN — ideal propietarios expatriados.",f6_q:"¿Qué anticipos?",f6_a:"Solo anticipos legales, ligados al avance real y siempre con factura. Nunca pagos en negro.",c_t:"¿Un proyecto? Hablemos hoy.",c_s:"Visita de asesoramiento gratuita en París y alrededores — respuesta en 48 h.",ft_about:"Empresa general de reformas. París (75) e Île-de-France. Obra gruesa, segunda obra, acabados de patrimonio.",ft_assur:"Trámites de registro y seguro en curso",ft_nav:"Navegación",ft_contact:"Contacto directo",ft_legal:"Legal",ft_lcen:"Menciones legales: Steven B., artesano de la construcción — París. RGPD UE 2016/679.",ft_rgpd:"Hosting UE · RGPD conforme · sin reventa de datos",ft_credits:"Fotos: Unsplash (licencia libre) · Vídeo: Pexels · Anim: GSAP",ft_rights:"© 2026 Steven B. Artesano de la Construcción — Todos los derechos reservados.",ck:"Cookies limitadas a medición anónima (RGPD).",av_note:"Opiniones ilustrativas — sustituir por opiniones reales de clientes."},
en:{top_zone:"Paris (75) & Île-de-France (92·93·94·95)",top_hours:"Mon–Fri: 8am–7pm",top_dec:"Registration in progress",logo_sub:"Building craftsman",nav_exp:"Services",nav_meth:"Method",nav_work:"Projects",nav_tar:"Pricing",nav_gar:"Guarantees",nav_quote:"Quote",hero_kicker:"General renovation contractor — Paris & Île-de-France",hero_title:"The excellence of craft, <span>the rigour of contract.</span>",hero_sub:"From structural work to Haussmann mouldings: Steven manages your renovation end to end, in français, español & English. Detailed quote within 48 h, clean site, work done by the book.",hero_cta1:"Get a 48 h quote",hero_cta2:"Call Steven",b1:"<b>10+</b> years of experience",b2:"<b>120+</b> projects delivered",b3:"<b>48 h</b> quote turnaround",b4:"FR · ES · EN",m1:"Masonry & structural work",m2:"Painting & finishing",m3:"Bathrooms & kitchens",m4:"Haussmann renovation",m5:"Drywall & insulation",m6:"Tiling & parquet",s1:"projects delivered",s2:"years of experience",s3:"satisfied clients",s4:"quote turnaround",exp_k:"Technical craft",exp_t:"Our expertise",exp_s:"Six trades, one single contact: zero coordination on your side.",e1_tag:"Structure",e1_t:"Masonry & structural work",e1_d:"Load-bearing wall openings, steel beams, screeds, partitions. Structure & safety.",e2_tag:"Design",e2_t:"Painting & finishing",e2_d:"Skim coats, premium wallpapers, velvet-matt paints, sanded & sealed parquet.",e3_tag:"Turnkey",e3_t:"Bathrooms & kitchens",e3_d:"Full turnkey renovation: watertight walk-in shower, large-format tiles, plumbing.",e4_tag:"Heritage",e4_t:"Haussmann renovation",e4_d:"Mouldings, cornices, marble fireplaces, herringbone parquet: Parisian character preserved.",e5_tag:"Comfort",e5_t:"Drywall & insulation",e5_d:"Acoustic partitions, lining, high-performance thermal insulation.",e6_tag:"Fast",e6_t:"Repairs & small works",e6_d:"Leaks, cracks, carpentry: fast response across Paris and suburbs.",lot:"Quote for this trade →",me_k:"Contractual process",me_t:"The Steven method",me_s:"Five steps, zero surprises: every commitment in writing.",p1_t:"Site visit & survey",p1_d:"Measurements, technical and co-ownership constraints, listening.",p2_t:"Detailed quote (48 h)",p2_d:"Line-by-line pricing, transparent, no surprise extras.",p3_t:"Planning & protection",p3_d:"Contractual schedule, protection of common areas.",p4_t:"Managed site",p4_d:"Daily follow-up, photos, weekly check-in, clean site every evening.",p5_t:"Handover & warranties",p5_d:"Joint acceptance, 10-year warranty on structural works.",ba_k:"Proof by image",ba_t:"Before / After: slide",ba_s:"One space, two stories. The slider reveals the work.",ba_a:"BEFORE",ba_b:"AFTER",wo_k:"Site gallery",wo_t:"Recent projects",wo_s:"Paris & suburbs, 2024–2026. Every project dated and located.",w1_tag:"Full renovation",w1_t:"32 sqm studio — Passy (16th)",w1_p:"Full optimisation, bespoke open kitchen, redesigned shower room.",w1_d:"5 weeks",w2_tag:"Heritage",w2_t:"110 sqm flat — Monceau (8th)",w2_p:"Mouldings restored, herringbone parquet sealed, velvet-matt paint.",w2_d:"9 weeks",w3_tag:"Structural",w3_t:"House — Neuilly (92)",w3_p:"Load-bearing wall opening with certified steel beam, acoustic partitions.",w3_d:"6 weeks",vi_k:"On site",vi_t:"The site, in motion",vi_s:"Cleanliness, safety, precision: our daily standard, unfiltered.",ap_k:"The craftsman",ap_t:"Steven B. — Colombian craft, French standards",ap_p1:"Trained on Bogotá's building sites and refined for over ten years in Parisian buildings, Steven blends Latin-American versatility with the demands of French DTU standards.",ap_p2:"One single contact, three languages (FR·ES·EN), a clean site and written commitments. That is how trust is built, quote after quote.",ap_b1:"years in Paris",ap_b3:"projects",ta_k:"Pricing benchmarks",ta_t:"Clear prices, to decide fast",ta_s:"Indicative VAT-free ranges, excluding premium materials. Exact price confirmed after a free technical visit.",t1_t:"Refresh",t1_p:"€450–700/sqm",t1_d:"Painting, floors, spot repairs: the boost before selling or letting.",t2_t:"Full renovation",t2_p:"€900–1,400/sqm",t2_d:"Kitchen, bathroom, electrics, drywall: full transformation, turnkey handover.",t3_t:"Haussmann / heritage",t3_p:"€1,300–1,900/sqm",t3_d:"Mouldings, herringbone parquet, old-world charm: restoration by the book.",ta_note:"These ranges are indicative (excluding premium materials and asbestos constraints). Every quote is free, itemised, and non-binding.",ga_k:"Legal framework & protections",ga_t:"The Parisian trust standard",ga_s:"Working with Steven means an impeccable legal and technical framework.",g1_t:"Work done by the book",g1_d:"Registration and insurance procedures in progress: certificates sent as soon as available. Quotes and invoices always in writing.",g2_t:"DTU standards",g2_d:"Strict application of French technical standards, including old buildings.",g3_t:"Pricing transparency",g3_d:"Line-by-line quote; no overrun without a signed amendment.",g4_t:"GDPR & data",g4_d:"Your details are used only to reply to you. Never sold. EU hosting.",av_k:"Social proof",av_t:"They recommend us",di_t:"Need an immediate survey?",di_s:"Technical intervention in 75, 92, 93, 94. Free quote and invoicing by the book.",di_cta:"Call Steven now",zo_k:"Coverage",zo_t:"Service areas",zo_s:"All inner suburbs; outer suburbs on request.",de_k:"Smart form",de_t:"Your pre-qualified quote in 2 minutes",de_s:"Île-de-France (Paris & suburbs). Guaranteed reply within 48 working hours.",q1_t:"1. Property type",q1a:"Haussmann building (parquet, mouldings, period)",q1b:"Recent building / 70s-90s",q1c:"Detached house",q1d:"Commercial premises / office",q2_t:"2. Size & scope of works",q2a:"Full renovation (> 60 sqm)",q2b:"Partial (kitchen, bath, 15-60 sqm)",q2c:"Small works / finishing (< 15 sqm)",q3_t:"3. Year of construction / surveys",q3a:"Survey file (DDT) available",q3b:"Pre-1997 (asbestos/lead check required)",q3c:"Post-2000 (no apparent risk)",q4_t:"4. Access & co-ownership constraints",q4a:"Easy access / lift / permits ready",q4b:"No lift / low-emission zone / complex parking",q4c:"Protected building / strict rules",q5_t:"5. Desired start date",q5a:"Immediate / budget approved",q5b:"Short term (1-3 months)",q5c:"Simple estimate / cost exploration",q6_t:"6. Your details",f_name:"Full name",f_phone:"Phone",f_city:"City / postcode",f_msg:"Your project (optional)",f_back:"← Back",f_next:"Next →",f_send:"Send secure request",d_done_t:"Request received!",d_done_s:"Steven will call you within 24 working hours. Speed things up via WhatsApp or e-mail.",d_legal:"Data protected (GDPR EU 2016/679). Free, non-binding quote.",fq_k:"Transparency",fq_t:"FAQ",f1_q:"Is the quote really free?",f1_a:"Yes: visit, survey and detailed quote are free and non-binding (art. L111-1 Code de la consommation).",f2_q:"Are you insured for structural work?",f2_a:"Registration and professional insurance procedures are in progress. Certificates will be attached to every quote as soon as they are available. Work is always invoiced by the book.",f3_q:"Do you work in Parisian co-ownerships?",f3_a:"Yes: regulated hours, common-area protection, authorisation file for the building manager.",f4_q:"Is a pre-1997 building a problem?",f4_a:"No, but it requires asbestos/lead checks (DDT). We build them into planning and quote.",f5_q:"Do you speak Spanish or English?",f5_a:"Sí / Yes: quote, site and handover managed in FR, ES or EN — ideal for expat owners.",f6_q:"What deposits?",f6_a:"Legal deposits only, tied to real progress and always invoiced. Never cash-in-hand.",c_t:"A project? Let's talk today.",c_s:"Free advisory visit in Paris and suburbs — reply within 48 h.",ft_about:"General renovation contractor. Paris (75) & Île-de-France. Structural, second-fix, heritage finishing.",ft_assur:"Registration & insurance in progress",ft_nav:"Navigation",ft_contact:"Direct contact",ft_legal:"Legal",ft_lcen:"Legal notice: Steven B., building craftsman — Paris. GDPR EU 2016/679.",ft_rgpd:"EU hosting · GDPR compliant · no data resale",ft_credits:"Photos: Unsplash (free licence) · Video: Pexels · Anim: GSAP",ft_rights:"© 2026 Steven B. Building Craftsman. All rights reserved.",ck:"Cookies limited to anonymous analytics (GDPR).",av_note:"Illustrative reviews — to be replaced with real client reviews."}
};
var fallbackText={
fr:"Envoi direct indisponible. Utilisez WhatsApp ou e-mail avec les boutons ci-dessous.",
es:"El envío directo no está disponible. Usa WhatsApp o correo electrónico con los botones siguientes.",
en:"Direct sending is unavailable. Use WhatsApp or email with the buttons below."
};
function $$(s){return Array.prototype.slice.call(document.querySelectorAll(s));}
function setLang(l){
try{localStorage.setItem("sr4_lang",l);}catch(e){}
document.documentElement.lang=l;
$$("[data-i18n]").forEach(function(el){var k=el.getAttribute("data-i18n");if(T[l]&&T[l][k])el.innerHTML=T[l][k];});
$$(".lang").forEach(function(b){
b.classList.toggle("active",b.getAttribute("data-lang")===l);
b.setAttribute("aria-pressed",b.getAttribute("data-lang")===l?"true":"false");
});
}
$$(".lang").forEach(function(b){b.addEventListener("click",function(){setLang(b.getAttribute("data-lang"));});});
var savedLang="fr";
try{savedLang=localStorage.getItem("sr4_lang")||"fr";}catch(e){}
setLang(savedLang);
/* ========== HEADER + PROGRESS ========== */
var hdr=document.getElementById("header"),pb=document.getElementById("pbar");
window.addEventListener("scroll",function(){
hdr.classList.toggle("scrolled",window.scrollY>10);
var h=document.documentElement.scrollHeight-window.innerHeight;
pb.style.width=(window.scrollY/h*100)+"%";
},{passive:true});
/* ========== GSAP REVEALS ========== */
var reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(window.gsap&&!reduced){
gsap.registerPlugin(ScrollTrigger);
if(window.CustomEase){gsap.registerPlugin(CustomEase);CustomEase.create("steven","M0,0 C0.16,1 0.3,1 1,1");}
var stevenEase=window.CustomEase?"steven":"expo.out";
var moveGlow=null;
var motionContext=gsap.context(function(){
$$("[data-reveal]").forEach(function(el){
gsap.from(el,{y:24,opacity:0,duration:1,ease:stevenEase,clearProps:"transform,opacity",scrollTrigger:{trigger:el,start:"top 88%",once:true}});
});
/* ===== v6 CARQUIDEC: INTRO HERO (timeline encadenada) ===== */
var heroTl=gsap.timeline({defaults:{ease:stevenEase}});
heroTl.fromTo(".hero .bg img",{scale:1.075,opacity:.35},{scale:1.035,opacity:1,duration:1.45})
.from(".hero .kicker",{y:18,opacity:0,duration:.8},-.95)
.from(".hero h1",{y:34,opacity:0,clipPath:"inset(0 0 100% 0)",duration:1.15},-.72)
.from(".hero .sub",{y:24,opacity:0,duration:.9},-.58)
.from(".hero .cta-row .btn",{y:18,opacity:0,duration:.75,stagger:.08},-.48)
.from(".hero .badges li",{y:14,opacity:0,duration:.65,stagger:.06},-.32);
gsap.to(".hero-glint",{xPercent:760,duration:4.8,ease:"power2.inOut",repeat:-1,repeatDelay:3.2});
if(window.matchMedia("(pointer:fine)").matches){
var glowX=gsap.quickTo(document.documentElement,"--mx",{duration:.65,ease:stevenEase});
var glowY=gsap.quickTo(document.documentElement,"--my",{duration:.65,ease:stevenEase});
moveGlow=function(e){glowX(e.clientX+"px");glowY(e.clientY+"px");};
window.addEventListener("pointermove",moveGlow,{passive:true});
}
/* ===== v6 CARQUIDEC: PARALLAX hero bg (scrub) ===== */
gsap.to(".hero .bg img",{yPercent:7,scale:1.055,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:.8}});
/* ===== v6 CARQUIDEC: STAGGER por grids ===== */
$$(".grid3,.ggrid,.tiers,.tsteps,.gsteps").forEach(function(g){
var kids=g.children;
if(kids.length){
gsap.from(kids,{y:22,opacity:0,duration:.92,stagger:.065,ease:stevenEase,clearProps:"transform,opacity",scrollTrigger:{trigger:g,start:"top 84%",once:true}});
}
});
/* ===== v6 CARQUIDEC: las líneas doradas se dibujan ===== */
$$(".sec-head .rule").forEach(function(r){
gsap.fromTo(r,{scaleX:0},{scaleX:1,duration:1.05,ease:stevenEase,transformOrigin:"left center",scrollTrigger:{trigger:r,start:"top 92%",once:true}});
});

gsap.fromTo("#video video",{scale:1.035,opacity:.2},{scale:1,opacity:.34,ease:"none",scrollTrigger:{trigger:"#video",start:"top bottom",end:"bottom top",scrub:.8}});
});
window.addEventListener("pagehide",function(){if(moveGlow)window.removeEventListener("pointermove",moveGlow);motionContext.revert();},{once:true});
}
/* ========== CONTADORES ========== */
function runCount(el){
var end=+el.getAttribute("data-count"),suf=el.getAttribute("data-suffix")||"",t0=null;
function tick(t){if(!t0)t0=t;var p=Math.min((t-t0)/1400,1);
el.textContent=Math.round(end*(1-Math.pow(1-p,3)))+suf;
if(p<1)requestAnimationFrame(tick);}
requestAnimationFrame(tick);
}
var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){runCount(e.target);cio.unobserve(e.target);}});},{threshold:.6});
$$("[data-count]").forEach(function(el){cio.observe(el);});
/* ========== SLIDER AVANT/APRÈS ========== */
var ba=document.querySelector(".ba"),br=document.getElementById("barange");
br.addEventListener("input",function(){ba.style.setProperty("--pos",br.value+"%");});
/* ========== CARRUSEL AVIS ========== */
var ti=0,tl=$$(".t-slide").length,trk=document.getElementById("ttrack");
function tgo(i){ti=(i+tl)%tl;trk.style.transform="translateX(-"+ti*100+"%)";}
document.getElementById("tnext").onclick=function(){tgo(ti+1);};
document.getElementById("tprev").onclick=function(){tgo(ti-1);};
if(!reduced)setInterval(function(){tgo(ti+1);},7000);
/* ========== FORM DEVIS 6 PASOS ========== */
var dstep=1,DTOTAL=6,svc="";
function dshow(){
$$(".dstep").forEach(function(s){s.classList.toggle("show",+s.getAttribute("data-step")===dstep);});
document.getElementById("dnum").textContent=dstep+"/"+DTOTAL;
document.getElementById("dfill").style.width=(dstep/DTOTAL*100)+"%";
document.getElementById("dback").hidden=(dstep===1);
document.getElementById("dnext").hidden=(dstep===DTOTAL);
document.getElementById("dsend").hidden=(dstep!==DTOTAL);
var ee=document.getElementById("ferr");if(ee){ee.style.display="none";}
}
document.getElementById("dnext").addEventListener("click",function(){
if(!document.querySelector('.dstep[data-step="'+dstep+'"] input:checked')){
var err=document.getElementById("ferr");
if(!err){err=document.createElement("p");err.id="ferr";err.setAttribute("role","alert");err.className="form-err";document.getElementById("dform").appendChild(err);}
err.textContent="Veuillez choisir une option / Seleccione una opción / Please select an option";
err.style.display="block";return;}
dstep=Math.min(DTOTAL,dstep+1);dshow();
});
document.getElementById("dback").addEventListener("click",function(){dstep=Math.max(1,dstep-1);dshow();});
$$(".lot").forEach(function(a){
a.addEventListener("click",function(){
svc=a.getAttribute("data-svc");
var chip=document.getElementById("svcchip");
chip.textContent=svc;chip.classList.add("on");
});
});
document.getElementById("dform").addEventListener("submit",function(e){
e.preventDefault();
/* Honeypot: si un bot rellena el campo oculto, simulamos éxito sin enviar */
if(document.querySelector('input[name="website"]').value){document.getElementById("dflow").style.display="none";document.querySelector(".dprog").style.display="none";document.getElementById("ddone").hidden=false;return;}
var n=document.getElementById("fname").value.trim(),p=document.getElementById("fphone").value.trim();
/* Validación inline accesible (sin alert nativo) */
var err=document.getElementById("ferr");
if(!err){err=document.createElement("p");err.id="ferr";err.setAttribute("role","alert");err.className="form-err";document.getElementById("dform").appendChild(err);}
if(!n||p.replace(/\D/g,"").length<10){err.textContent="Nom + téléphone requis / Nombre + teléfono / Name + phone required";err.style.display="block";return;}
err.style.display="none";
function g(q){var c=document.querySelector('input[name="'+q+'"]:checked');return c?c.value:"—";}
var body="Bonjour Steven — Demande de devis"+(svc?" ["+svc+"]":"")
+" | Bien: "+g("q1")+" | Envergure: "+g("q2")+" | Diagnostics: "+g("q3")
+" | Accès: "+g("q4")+" | Délai: "+g("q5")
+" | "+n+" · "+document.getElementById("fcity").value+" · "+p
+" | "+document.getElementById("fmsg").value;
/* Backend firmado: POST a /.netlify/functions/devis (Netlify). Fallback: wa.me */
var payload={name:n,phone:p,city:document.getElementById("fcity").value,msg:document.getElementById("fmsg").value,svc:svc,q1:g("q1"),q2:g("q2"),q3:g("q3"),q4:g("q4"),q5:g("q5"),lang:document.documentElement.lang};
/* Una respuesta HTTP 200 (por ejemplo el index.html de una SPA) no demuestra
   que el presupuesto haya llegado. Exigimos un acuse JSON del backend. */
var submitButton=document.getElementById("dsend");
if(submitButton.disabled)return;
submitButton.disabled=true;
if(!window.StevenQuoteDelivery || typeof window.StevenQuoteDelivery.postQuote!=="function"){
showFallback();
submitButton.disabled=false;
}else{
window.StevenQuoteDelivery.postQuote(payload).then(function(sent){
if(sent){showDone();}else{showFallback();}
}).catch(function(){showFallback();}).finally(function(){submitButton.disabled=false;});
}
function showFallback(){
var lang=document.documentElement.lang;
var err=document.getElementById("derr");
err.textContent=fallbackText[lang]||fallbackText.fr;
err.style.display="block";
var headings={fr:"Envoi non effectué",es:"Solicitud pendiente de envío",en:"Request not sent"};
var details={
fr:"Votre demande n'a pas encore été transmise. Cliquez sur WhatsApp ou E-mail ci-dessous pour l'envoyer vous-même.",
es:"Tu solicitud todavía no se ha enviado. Pulsa WhatsApp o E-mail para enviarla tú mismo.",
en:"Your request has not been sent. Select WhatsApp or E-mail below to send it yourself."
};
document.getElementById("ddone-title").textContent=headings[lang]||headings.fr;
document.getElementById("ddone-detail").textContent=details[lang]||details.fr;
document.getElementById("dwa").href="https://wa.me/33628518849?text="+encodeURIComponent(body);
document.getElementById("dmail").href="mailto:contact@steven-renovation.fr?subject="+encodeURIComponent("Demande de devis — "+n)+"&body="+encodeURIComponent(body);
document.getElementById("dflow").style.display="none";
document.querySelector(".dprog").style.display="none";
document.getElementById("ddone").hidden=false;
}
function showDone(){
document.getElementById("dwa").href="https://wa.me/33628518849?text="+encodeURIComponent(body);
document.getElementById("dmail").href="mailto:contact@steven-renovation.fr?subject="+encodeURIComponent("Demande de devis — "+n)+"&body="+encodeURIComponent(body);
document.getElementById("dflow").style.display="none";
document.querySelector(".dprog").style.display="none";
document.getElementById("ddone").hidden=false;
}
});
dshow();
/* ========== BACKUPS DE IMÁGENES (petición del usuario) ==========
   Cada <img> local lleva data-backup="URL remota original".
   Si la imagen local falla (error de carga), se sustituye por la remota.
   Solo si ambas fallan, se oculta suavemente. */
$$("img").forEach(function(im){
var backup=im.getAttribute("data-backup");
if(backup)im.addEventListener("error",function(){if(im.getAttribute("src")!==backup){im.src=backup;}else{im.style.opacity="0";}});
});
/* ========== VÍDEO: fallback en cascada (remoto Pexels → local demo → ocultar) ========== */
var bv=document.getElementById("bvideo");
if(bv){
var vIndex=0,vs=bv.querySelectorAll("source");
bv.addEventListener("error",function(){nextSrc();},true);
function nextSrc(){
if(vs.length&&vIndex<vs.length-1){vIndex++;bv.src=vs[vIndex].getAttribute("src");bv.load();}
else{bv.style.display="none";}
}
/* El poster local siempre queda como fondo visual aunque el vídeo falle */
}
/* ========== PRELOADER (cortina premium) ========== */
(function(){
var pl=document.getElementById("preloader"),reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!pl){return;}
var started=performance.now(),finished=false;
if(window.gsap&&!reduced){gsap.timeline({defaults:{ease:"steven"}}).to(".pl-mark",{opacity:1,y:0,duration:.7}).to(".pl-line span",{scaleX:1,duration:.95},-.45);}
function finishPreloader(){
if(finished)return;finished=true;
var wait=Math.max(0,1100-(performance.now()-started));
setTimeout(function(){pl.classList.add("ready");setTimeout(function(){pl.classList.add("out");},140);setTimeout(function(){pl.style.display="none";},1500);},wait);
}
if(document.readyState==="complete")finishPreloader();else window.addEventListener("load",finishPreloader,{once:true});
setTimeout(finishPreloader,3500);
})();
/* ========== MENÚ MÓVIL (hamburguesa + backdrop) ========== */
(function(){
var burger=document.getElementById("burger"),nav=document.getElementById("mnav"),bd=document.getElementById("mbackdrop");
function toggle(open){
var o=open!==undefined?open:!nav.classList.contains("open");
nav.classList.toggle("open",o);
burger.setAttribute("aria-expanded",o?"true":"false");
bd.classList.toggle("on",o);
document.body.style.overflow=o?"hidden":"";
}
burger.addEventListener("click",function(){toggle();});
bd.addEventListener("click",function(){toggle(false);});
/* Cerrar al pulsar un enlace del menú */
$$("#mnav a").forEach(function(a){a.addEventListener("click",function(){toggle(false);});});
/* Cerrar con tecla Escape (accesibilidad) */
document.addEventListener("keydown",function(e){if(e.key==="Escape")toggle(false);});
/* Cerrar al agrandar la ventana (vuelta a desktop) */
window.addEventListener("resize",function(){if(window.innerWidth>860)toggle(false);});
})();
/* ========== COOKIES ========== */
if(localStorage.getItem("sr4_rgpd"))document.getElementById("cookies").style.display="none";
document.getElementById("okc").addEventListener("click",function(){localStorage.setItem("sr4_rgpd","1");document.getElementById("cookies").style.display="none";});
});
