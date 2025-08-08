# Portfolio Website

A modern, responsive portfolio website built with SvelteKit and styled with Catppuccin colors. Features smooth animations, a clean design, and showcases my projects and skills.

## Features

- **Modern Design** - Clean, minimalistic interface with Catppuccin color scheme
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and hover effects using Svelte transitions
- **Project Showcase** - Interactive portfolio section with expandable project grid
- **Fast Performance** - Built with SvelteKit for optimal loading speeds
- **TypeScript Ready** - Full TypeScript support for better development experience

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Node.js 18+ (for compatibility)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iC4rds/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and visit `http://localhost:5173`

## Tech Stack

- **Framework**: SvelteKit
- **Runtime**: Bun
- **Database**: Turso (SQLite)
- **Styling**: Tailwind CSS with custom Catppuccin them

## Project Structure

```
src/
├── lib/
│   └── components/     # Reusable Svelte components
├── routes/            # SvelteKit routes
├── app.html          # Main HTML template
└── app.css           # Global styles

static/
├── favicon.svg       # Custom Catppuccin favicon
└── assets/          # Images and static files
```

## Color Scheme

This portfolio uses the beautiful [Catppuccin](https://catppuccin.com/) color palette:
- **Base**: `#1e1e2e`
- **Surface**: `#313244`  
- **Text**: `#cdd6f4`
- **Blue**: `#89b4fa`
- **Pink**: `#f38ba8`

## License
MIT