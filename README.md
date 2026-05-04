# Be Orange — Sitio Web Oficial

Landing page oficial de **Be Orange**, el primer encuentro bitcoiner de escala en Uruguay, presentado por **Roderich** y **Plugin Agency**. Diseño inmersivo con hero en video, paleta naranja-crema y arquitectura de componentes modular. Construido con React + Vite + Tailwind CSS v4.

---

## Vista previa

| Hero | ¿Quiénes somos? |
|------|-----------------|
| Hero fullscreen con video de fondo + logo del evento | Sección con descripción del evento y contexto en la Bitcoin Week Uruguay |

---

## Evento

| | |
|---|---|
| **Nombre** | Be Orange — The Bitcoiners Meeting 2026 |
| **Fecha** | Domingo 24 de mayo de 2026 |
| **Horario** | 14:30 a 20:30 |
| **Lugar** | Montevideo, Uruguay |
| **Organizadores** | Roderich & Plugin Agency |
| **Contexto** | Cierra la Bitcoin Week Uruguay (18–24 de mayo) |

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI y componentes |
| [Vite](https://vitejs.dev/) | 8.x | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilos y sistema de diseño |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | 4.x | Plugin de integración con Vite |

Sitio 100% estático, sin backend ni base de datos.

---

## Características

- **Hero fullscreen** con video de fondo en loop, logos de Roderich y Plugin Agency, y CTA de registro gratuito
- **Sección "¿Quiénes somos?"** con descripción del evento y contexto en la Bitcoin Week Uruguay
- **EventCards** — cards con detalle de las actividades del día
- **Agenda completa** con cronograma del evento
- **Sponsors** con sistema de tiers (SponsorTier)
- **Sección de organizadores**
- **Footer** con links relevantes
- **Diseño responsive** optimizado para mobile y desktop
- **Microanimaciones** de elevación en botones CTA

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

---

## Estructura del proyecto

```
beorange/
├── public/
│   ├── logos/
│   │   ├── beorange/         # Logo principal y con subtítulo
│   │   ├── plugin/           # Logo de Plugin Agency
│   │   └── roderich/         # Logo de Roderich
│   ├── recursos/             # Assets gráficos del sitio
│   └── videos/
│       └── hero.mp4          # Video de fondo del hero
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       ├── Inter/        # Inter Variable Font
│   │       └── Lexend/       # Lexend Variable Font
│   ├── components/
│   │   ├── Navbar.jsx        # Barra de navegación fija
│   │   ├── Hero.jsx          # Hero con video de fondo
│   │   ├── About.jsx         # ¿Quiénes somos?
│   │   ├── EventCards.jsx    # Cards de eventos del día
│   │   ├── Agenda.jsx        # Cronograma completo
│   │   ├── Sponsors.jsx      # Grid de sponsors
│   │   ├── SponsorTier.jsx   # Componente de nivel de sponsor
│   │   ├── Organizers.jsx    # Sección de organizadores
│   │   └── Footer.jsx        # Pie de página
│   ├── data/
│   │   └── navigation.js     # URLs y constantes (REGISTER_URL)
│   ├── App.jsx               # Componente raíz
│   ├── App.css               # Estilos globales adicionales
│   ├── index.css             # Tokens de diseño + @theme Tailwind
│   └── main.jsx              # Entry point
├── index.html
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

## Deploy

El build genera archivos estáticos en `/dist`. Compatible con cualquier hosting estático:

- **Netlify** — arrastrar la carpeta `/dist` o conectar el repo
- **Vercel** — detecta Vite automáticamente
- **GitHub Pages** — ajustando `base` en `vite.config.js`

```bash
npm run build   # Genera /dist listo para subir
```

---

## Licencia

© 2026 Be Orange · Roderich & Plugin Agency · Todos los derechos reservados.
