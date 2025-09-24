# Yeezy-Inspired Portfolio Website

A minimalist portfolio website inspired by the aesthetic and user experience of Yeezy.com. Built with Next.js 14, TypeScript, and Tailwind CSS, focusing on extreme minimalism, visual impact, and performance.

## ✨ Features

- **Minimal Design Language**: Inspired by Yeezy's industrial luxury aesthetic
- **Performance-First**: Optimized for Web Vitals with lazy loading and image optimization
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Responsive**: Mobile-first design with fluid layouts
- **Type Safety**: Full TypeScript implementation
- **Modern Stack**: Next.js 14 App Router, Tailwind CSS, Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd yeezy-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── work/              # Work/Projects pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   └── Layout.tsx     # Main layout wrapper
│   └── ui/                # UI components
│       ├── HeroFullBleed.tsx      # Hero section
│       ├── ProjectCard.tsx        # Project preview card
│       ├── MasonryGallery.tsx     # Project gallery
│       ├── CaseStudyLayout.tsx    # Case study template
│       └── ContactForm.tsx        # Contact form
├── lib/                   # Utilities and helpers
│   └── utils.ts          # Common utilities
├── types/                 # TypeScript definitions
│   └── index.ts          # Main types
public/                    # Static assets
├── placeholder-images/    # Development placeholders
└── ...                   # Icons, images, etc.
```

## 🎨 Design System

### Color Palette

The design system uses a neutral-based palette inspired by raw materials:

- **Neutral Scale**: 25 shades from near-white to deep black
- **Primary Accent**: Earth tones (sand, concrete, charcoal)
- **High Contrast**: Optimized for accessibility (4.5:1+ ratio)

### Typography

- **Font**: Inter (primary), JetBrains Mono (monospace)
- **Scale**: Fluid typography from 14px to 128px
- **Features**: OpenType features, old-style numerals
- **Tracking**: Subtle letter-spacing adjustments for readability

## 🧩 Key Components

### HeroFullBleed
Full-viewport hero section with:
- Edge-to-edge media (image/video support)
- Parallax scrolling effects
- Accessible text overlays
- Scroll indicators

### MasonryGallery
Responsive project gallery:
- Masonry layout with configurable columns
- Lazy loading for performance
- Hover micro-interactions
- Keyboard navigation support

### ContactForm
Accessible contact form:
- React Hook Form + Zod validation
- Real-time error states
- Loading states and feedback
- Screen reader optimized

## 📊 Performance Targets

- **Lighthouse Performance**: ≥90
- **Lighthouse SEO**: ≥90
- **Lighthouse Accessibility**: ≥90
- **LCP**: <2.5s
- **CLS**: <0.1
- **TTI**: <3.5s

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables (if using CMS)
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## 📝 Content Management

### Adding Projects

To add new projects, update the mock data arrays in page components or integrate with a headless CMS:

```typescript
const project: Project = {
  id: 'unique-id',
  title: 'Project Title',
  slug: 'project-slug',
  description: 'Brief description...',
  year: 2024,
  tags: ['Tag1', 'Tag2'],
  coverImage: {
    src: '/path/to/image.jpg',
    alt: 'Descriptive alt text',
    blurDataURL: 'base64-blur-placeholder'
  },
  href: '/work/project-slug'
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ and careful attention to detail, performance, and accessibility.
