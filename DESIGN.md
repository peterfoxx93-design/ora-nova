---
name: Ora Nova
version: alpha
description: "Plataforma de Turismo Dental en República Dominicana — Datos, transparencia y lujo silencioso para pacientes internacionales."
colors:
  primary: "#0A1628"           # Azul medianoche profundo — base, evoca confianza médica internacional
  primary-light: "#1A2D4A"     # Azul oscuro — hover estados
  secondary: "#F0EEE9"         # Beige cálido — fondos de sección, contraste con primary
  accent: "#C9A96E"            # Dorado suave — CTAs, acentos premium
  accent-light: "#E0CDA0"      # Dorado claro — hover
  neutral-100: "#FFFFFF"
  neutral-200: "#F8F7F4"       # Blanco cálido — fondos
  neutral-300: "#E5E3DC"       # Bordes suaves
  neutral-400: "#9CA3AF"       # Texto secundario
  neutral-500: "#6B7280"       # Meta, etiquetas
  neutral-700: "#374151"       # Texto cuerpo
  neutral-900: "#111827"       # Texto principal
  success: "#059669"           # Verde esmeralda — ahorros, confirmaciones
  error: "#DC2626"
  surface-glass: "rgba(10, 22, 40, 0.85)"   # Glassmorphism navbar
  surface-glass-light: "rgba(240, 238, 233, 0.8)"
  gradient-hero: "linear-gradient(135deg, #0A1628 0%, #1A2D4A 50%, #2C3E50 100%)"
  gradient-cta: "linear-gradient(135deg, #C9A96E 0%, #D4B87A 100%)"

typography:
  heading-xl:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontWeight: 700
    fontSize: clamp(2.5rem, 5vw, 4rem)
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  heading-lg:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontWeight: 700
    fontSize: clamp(2rem, 4vw, 3rem)
    lineHeight: 1.1
  heading-md:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontWeight: 600
    fontSize: clamp(1.5rem, 3vw, 2rem)
    lineHeight: 1.2
  heading-sm:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontWeight: 600
    fontSize: 1.125rem
    lineHeight: 1.3
  body-lg:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontWeight: 400
    fontSize: 1.125rem
    lineHeight: 1.7
  body-md:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontWeight: 400
    fontSize: 1rem
    lineHeight: 1.7
  body-sm:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontWeight: 400
    fontSize: 0.875rem
    lineHeight: 1.5
  stat-number:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontWeight: 700
    fontSize: clamp(2.5rem, 4vw, 3.5rem)
    lineHeight: 1
  label-uppercase:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontWeight: 600
    fontSize: 0.75rem
    letterSpacing: "0.1em"
    textTransform: "uppercase"

rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 80px

motion:
  duration-fast: 200ms
  duration-normal: 400ms
  duration-slow: 700ms
  easing-default: cubic-bezier(0.16, 1, 0.3, 1)
  easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
  easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)

elevation:
  sm: 0px 1px 2px rgba(10, 22, 40, 0.05)
  md: 0px 4px 12px rgba(10, 22, 40, 0.08)
  lg: 0px 8px 24px rgba(10, 22, 40, 0.12)
  card-hover: 0px 12px 32px rgba(10, 22, 40, 0.15)

accessibility:
  touchTargetMin: 44px
  colorContrastMin: 4.5:1
  focusRing: "2px solid #C9A96E"
  reducedMotion: "respect prefers-reduced-motion"
  target: WCAG 2.1 AA
---

# Ora Nova — Sistema de Diseño Estratégico

## Marca y Posicionamiento

**Ora Nova** (latín: "boca nueva") es una **plataforma de turismo dental** en República Dominicana. No somos una clínica más — somos el puente entre pacientes internacionales que buscan odontología de clase mundial y la excelencia clínica del Caribe.

### Diferencia Estratégica (vs. lo que ya existe)

| Factor | Clínicas típicas RD | Ora Nova |
|--------|--------------------|----------|
| Precios | Ocultos, "pida presupuesto" | **Transparentes, publicados** |
| Competencia | Local | **Regional (MX, CO, AR)** |
| Contenido | Stock photos, sonrisas genéricas | **Datos de mercado, informes, comparativas** |
| Audiencia | Pacientes locales | **Internacional + diáspora dominicana** |
| Propuesta | "Somos los mejores" | **"Esto es lo que cuesta, esto es lo que ahorras"** |

### Taglines
- **Principal:** *República Dominicana. Odontología de Clase Mundial.*
- **Secundario:** *Datos claros, precios transparentes, resultados excepcionales.*
- **Alternativo (hero):** *La mejor odontología de Latinoamérica está en el Caribe.*
- **Para turismo dental:** *¿Pagar $1,500 por un implante en Nueva York? En RD, desde $1,195. Misma calidad. Mitad del precio.*

## Arquitectura de Contenido

### Páginas

| Ruta | Propósito | Diferenciador |
|------|-----------|---------------|
| `/` | Home: conversión inmediata | Hero con calculadora de ahorro + stats del informe Gemini |
| `/servicios` | Catálogo completo con precios | Tablas comparativas RD vs MX vs CO vs AR (datos reales) |
| `/servicios/[slug]` | Deep dive por tratamiento | Costos, procedimiento, recuperación, preguntas frecuentes |
| `/reserva` | Booking flow completo | Paso a paso: servicio → profesional → fecha → confirmar |
| `/nosotros` | Quiénes somos + equipo | Dra. Elena Gómez (del prototipo Stitch) y equipo |
| `/blog` | Contenido educativo SEO | Artículos basados en el informe Gemini |
| `/blog/[slug]` | Artículo individual | Con tablas de datos, fuentes, CTA a reserva |
| `/contacto` | Contacto y ubicación | Formulario + Google Maps + FAQs |
| `/comparativa` | **Página estrella** | RD vs MX vs CO vs AR — tabla completa del informe |
| `/ahorro` | Calculadora interactiva | Cuánto ahorras viniendo a RD vs tu país |

### Tipos de Contenido Clave (basados en el informe Gemini)

1. **Artículo estrella:** "Costo de Implantes Dentales 2026: RD vs México vs Colombia vs Argentina"
2. **Guía:** "Turismo Dental en República Dominicana: Guía Completa 2026"
3. **Comparativa:** "¿Por qué RD está desplazando a México en turismo dental?"
4. **Datos:** "Precios Odontológicos RD 2026 — Tabla Completa por Tratamiento"
5. **Testimonial con datos:** "Ahorré $4,000 viniendo a RD desde Toronto"

## Paleta de Color — Explicación Estratégica

| Color | Hex | Rol | Por qué |
|-------|-----|-----|---------|
| Azul medianoche | `#0A1628` | Fondo principal, navbar | Evoca confianza médica internacional (como Johns Hopkins, Cleveland Clinic) |
| Beige cálido | `#F0EEE9` | Fondos de sección | Calidez caribeña, contraste con el azul |
| Dorado suave | `#C9A96E` | CTAs, acentos | Premium, calidad, atardeceres del Caribe |
| Verde esmeralda | `#059669` | Ahorros, $$ | Color universal de "ganancia", positivo |
| Blanco cálido | `#F8F7F4` | Fondos | Menos estéril que blanco puro, más natural |

### Modo Claro (default en mobile)
- Fondo: `#F8F7F4`
- Superficies: `#FFFFFF`
- Acentos azul: `#0A1628` en headers, botones secundarios
- Dorado en CTAs

### Modo Oscuro (default en desktop — efecto premium)
- Fondo: `#0A1628`
- Superficies: `#1A2D4A`
- Texto: `#F0EEE9`
- Acentos dorados más vibrantes

## Componentes Clave

### Navbar
- Fixed top con glassmorphism oscuro
- Logo "ORA NOVA" en dorado
- Links: Servicios · Precios · Blog · Reserva
- CTA "Agenda tu cita" dorado
- Selector de idioma (ES/EN) — para turismo internacional

### Hero
- Full viewport, fondo gradiente azul oscuro
- Título display en Playfair Display (blanco)
- Subtítulo con dato de mercado ("Ahorra hasta un 70% vs EE.UU.")
- Dos CTAs: "Calcula tu ahorro" (primario) y "Ver servicios" (secundario)
- **Dato clave:** Una estadística rotativa (ej: "Implante + Corona desde $1,195")
- Imagen de fondo con overlay azul

### Sección "República Dominicana vs el Mundo"
- **Layout:** Tarjetas de 4 países (MX, CO, AR, US) vs RD
- Cada tarjeta muestra: bandera + precio del implante + diferencia %
- La tarjeta de RD destaca en dorado
- Animación: contadores que suben al hacer scroll

### Tarjetas de Servicio
- Icono grande (SVG inline)
- Nombre del servicio + descripción técnica (del informe: "Restauración con material nanohíbrido foto-polimerizable")
- Precio en USD destacado
- Precio de referencia en otro país (ej: "En EE.UU. cuesta $X")
- Botón "Agendar" o "Ver detalle"

### Calculadora de Ahorro (Página /ahorro)
- Selector: ¿De dónde vienes? (US, Canadá, Europa)
- Selector: ¿Qué tratamiento? (Implante, Corona, Carilla, etc.)
- Resultado: Precio en tu país vs Precio en RD
- Ahorro total + pasaje de avión estimado
- CTA: "Agenda tu evaluación gratis"

### Blog / Contenido Educativo
- Cada artículo usa datos del informe Gemini como fuente
- Tablas de precios embedidas
- Citas a las fuentes (footnotes estilo informe)
- CTA al final: "¿Listo para tu tratamiento? Agenda aquí"

## Animaciones y UX

- **Hero:** Typewriter effect alternando datos de mercado
- **Contadores:** Números que suben al hacer scroll (ej: "$1,195 desde")
- **Tablas comparativas:** Scroll horizontal reveal
- **Mapa:** SVG de Latam con países iluminados al hover
- **Calculadora:** Transiciones suaves entre pasos
- **Booking flow:** Slide transitions (como Stitch prototype)
- **Blog cards:** Image zoom sutil + metadata reveal

## Estrategia Técnica

### Framework
- **Next.js 15** (App Router) — compilado en servidores Vercel
- **Tailwind CSS v4** — utility-first
- **shadcn/ui** — base components
- **Framer Motion** — animaciones

### Datos y Contenido
- Datos de precios del informe Gemini → Tipados en TypeScript (`src/data/prices.ts`)
- Google Sheets API → Leads de reservas en tiempo real
- Blog → MDX o data objects (no CMS pesado)

### Chatbud
- API Route en Next.js (`/api/chat`)
- Memoria contextual por sesión (server-side Map con TTL)
- Sin almacenamiento PII — solo preferencias de navegación
- Respuestas basadas en el contenido de la página + FAQ data

### Rendimiento (objetivos)
- **Lighthouse:** 95+ Performance, 100 Accessibility
- **LCP:** < 1.5s (critical CSS inline, WebP, next/font)
- **CLS:** < 0.05 (dimensiones explícitas en imágenes)
- **JS bundle:** < 150KB first load (server components por defecto)

### Deploy
- GitHub → Vercel (auto-build)
- Dominio personalizado
- SSL automático
- Edge Network global

## DOs y DON'Ts

✅ **Hacer:**
- Mostrar precios SIEMPRE. La transparencia es el diferenciador #1
- Usar datos del informe Gemini como autoridad
- Comparar RD con otros países constantemente (refuerza la propuesta de valor)
- Fotografía real y profesional de la clínica (nunca stock photos)
- CTAs siempre presentes: "Calcula tu ahorro", "Agenda tu cita"
- Incluir siempre el precio en USD (público internacional)
- Modo oscuro por defecto en desktop (look premium tipo Tesla/Apple)

❌ **No hacer:**
- NO ocultar precios ("pida presupuesto" mata la conversión)
- NO fotos de stock de sonrisas blancas genéricas
- NO lenguaje médico intimidante sin explicación
- NO prometer lo que no se puede cuantificar
- NO formularios largos — mínimo de campos
- NO trackers de terceros (cookies, analytics invasivos)
