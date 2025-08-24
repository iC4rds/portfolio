# Portfolio Website

A modern, responsive portfolio website built with SvelteKit and styled with Catppuccin colors. Features smooth animations, a clean design, and showcases my projects and skills.

## Features

- **Modern Design** - Clean, minimalistic interface with Catppuccin color scheme
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and hover effects using Svelte transitions
- **Project Showcase** - Interactive portfolio section with expandable project grid
- **Fast Performance** - Built with SvelteKit for optimal loading speeds

## Getting Started

### Installation

Make sure to have [Bun](https://bun.sh/) installed on your System

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
- **Styling**: Tailwind CSS with custom Catppuccin theme

## Project Structure

```
src/
├── lib/
│   └── components/   # Reusable Svelte components
│   └── server/db/    # Database setup
├── routes/           # SvelteKit routes
│   └── api/          # SvelteKit api
├── app.html          # Main HTML template
└── app.css           # Global styles

static/
├── favicon.svg       # Custom Catppuccin favicon
└── assets/           # Images and static files
```

## Color Scheme

This portfolio uses the beautiful [Catppuccin](https://catppuccin.com/) color palette:
- **Base**: `#303446`
- **Crust**: `#232634`
- **Surface**: `#414559`  
- **Text**: `#c6d0f5`
- **Blue**: `#8caaee`
- **Mauve**: `#ca9ee6`
- **Green**: `#a6d189`
