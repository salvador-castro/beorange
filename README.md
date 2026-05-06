# Be Orange — Sitio Web Oficial

> **Sitio en producción:** [beorange.uy](https://beorange.uy/)

Landing page oficial de **Be Orange — The Bitcoiners Meeting 2026**, el primer encuentro bitcoiner de escala en Uruguay, presentado por **Roderich** y **Plugin Agency**. Diseño inmersivo con hero en video, paleta naranja-crema y arquitectura de componentes modular. Construido con React 19 + Vite 8 + Tailwind CSS v4.

---

## Evento

| | |
|---|---|
| **Nombre** | Be Orange — The Bitcoiners Meeting 2026 |
| **Fecha** | Domingo 24 de mayo de 2026 |
| **Horario** | 14:30 a 20:30 |
| **Lugar** | Sinergia, Montevideo, Uruguay |
| **Organizadores** | Roderich & Plugin Agency |
| **Contexto** | Cierra la Bitcoin Week Uruguay (18–24 de mayo) |
| **Sitio web** | [beorange.uy](https://beorange.uy/) |
| **Registro** | [luma.com/tagqrq6d](https://luma.com/tagqrq6d) |

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | ^19.2.5 | UI y componentes |
| [Vite](https://vitejs.dev/) | ^8.0.10 | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.4 | Estilos y sistema de diseño |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | ^4.2.4 | Plugin de integración con Vite |
| [ESLint](https://eslint.org/) | ^10.2.1 | Linting |

Sitio 100% estático, sin backend ni base de datos. Sin dependencias de routing — single page con anclas.

---

## Características

- **Hero fullscreen** con video de fondo en loop, logos de Roderich y Plugin Agency, y CTA de registro a Luma
- **Sección "¿Quiénes somos?"** con descripción del evento y contexto en la Bitcoin Week Uruguay
- **EventCards** — cards con detalle de las actividades del día
- **SinergiaVideo** — video presentando la sede del evento (Sinergia)
- **Agenda completa** con cronograma del evento (data en `src/data/agenda.js`)
- **Sponsors** con sistema de tiers: Early adopter, Friendly, Ecosystem Partners, Media Partners, Supporters
- **Sección de organizadores** con perfiles (data en `src/data/organizers.js`)
- **Footer** con links relevantes
- **Diseño responsive** optimizado para mobile y desktop
- **Microanimaciones** de elevación en botones CTA
- **SEO básico** con `robots.txt` y `sitemap.xml`

---

## Diseño

| Variable | Valor |
|---|---|
| Fondo oscuro principal | `#190808` |
| Fondo oscuro secundario | `#241310` |
| Acento naranja | `#f28b18` |
| Acento naranja claro | `#f4a23b` |
| Crema | `#f4ebd8` |
| Crema claro | `#f9f5ec` |
| Tipografía principal | Inter (variable font) |
| Tipografía display | Lexend (variable font) |

Tokens definidos en [src/index.css](src/index.css) bajo `@theme` de Tailwind v4.

---

## Estructura del proyecto

```
beorange/
├── public/
│   ├── logos/
│   │   ├── beorange/             # Logo principal y variantes
│   │   ├── plugin/               # Logo de Plugin Agency
│   │   ├── roderich/             # Logo de Roderich
│   │   ├── sinergia/             # Logo de Sinergia (sede)
│   │   ├── spacedev/             # Logo de SpaceDev
│   │   └── tangram/              # Logo de Tangram
│   ├── lugares/
│   │   └── sinergia.png          # Imagen de la sede
│   ├── patrocinadores/
│   │   ├── earlyAdopter/         # Sponsors tier "Early adopter"
│   │   ├── ecosystemPartners/    # Sponsors tier "Ecosystem Partners"
│   │   ├── friendly/             # Sponsors tier "Friendly"
│   │   ├── mediaPartners/        # Sponsors tier "Media Partners"
│   │   └── supporters/           # Sponsors tier "Supporters"
│   ├── recursos/                 # Assets gráficos generales
│   ├── videos/
│   │   ├── hero.mp4              # Video de fondo del hero
│   │   └── sinergia.mp4          # Video de la sede
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       ├── Inter/            # Inter Variable Font
│   │       └── Lexend/           # Lexend Variable Font
│   ├── components/
│   │   ├── Navbar.jsx            # Barra de navegación fija
│   │   ├── Hero.jsx              # Hero con video de fondo + countdown
│   │   ├── About.jsx             # ¿Quiénes somos?
│   │   ├── EventCards.jsx        # Cards de eventos del día
│   │   ├── SinergiaVideo.jsx     # Video de la sede
│   │   ├── Agenda.jsx            # Cronograma completo
│   │   ├── Sponsors.jsx          # Grid de sponsors por tier
│   │   ├── SponsorTier.jsx       # Componente de nivel de sponsor
│   │   ├── Organizers.jsx        # Sección de organizadores
│   │   └── Footer.jsx            # Pie de página
│   ├── data/
│   │   ├── navigation.js         # NAV_LINKS y REGISTER_URL
│   │   ├── agenda.js             # Cronograma del evento
│   │   ├── organizers.js         # Perfiles de organizadores
│   │   └── sponsors.js           # SPONSOR_TIERS con todos los patrocinadores
│   ├── App.jsx                   # Componente raíz
│   ├── App.css                   # Estilos globales adicionales
│   ├── index.css                 # Tokens de diseño + @theme Tailwind
│   └── main.jsx                  # Entry point
├── index.html
├── eslint.config.js
├── vite.config.js
└── package.json
```

---

## Instalación y desarrollo

### Requisitos

- Node.js >= 18

### Pasos

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd beorange

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción → /dist
npm run preview  # Preview del build de producción
npm run lint     # Linting con ESLint
```

---

## Datos del sitio

Todo el contenido editable vive en [src/data/](src/data/):

- [navigation.js](src/data/navigation.js) — links del navbar y URL de registro a Luma
- [agenda.js](src/data/agenda.js) — bloques horarios del evento
- [organizers.js](src/data/organizers.js) — perfiles de los organizadores
- [sponsors.js](src/data/sponsors.js) — patrocinadores agrupados por tier, con `src`, `alt`, `heightClass`, `maxWidth` y `url`

Para agregar un sponsor: subir el logo a `public/patrocinadores/<tier>/` y añadir la entrada en `sponsors.js`.

---

## Deploy

El build genera archivos estáticos en `/dist`. Compatible con cualquier hosting estático:

- **Netlify** — arrastrar la carpeta `/dist` o conectar el repo
- **Vercel** — detecta Vite automáticamente
- **GitHub Pages** — ajustando `base` en [vite.config.js](vite.config.js)

```bash
npm run build   # Genera /dist listo para subir
```

---

## Licencia

© 2026 Be Orange · Roderich & Plugin Agency · Todos los derechos reservados.
