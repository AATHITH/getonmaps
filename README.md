# Get On Maps Website

## Project Structure

```
├── components/           # Reusable HTML components
│   ├── header.html      # Site header with navigation
│   └── footer.html      # Site footer
├── css/
│   ├── base.css         # Base styles and reset
│   ├── components.css   # Component-specific styles
│   ├── layout.css       # Layout and grid systems
│   ├── main.css         # Main stylesheet (imports)
│   └── modules/         # CSS modules
│       ├── accessibility.css  # Accessibility improvements
│       ├── pricing.css        # Pricing section styles
│       ├── services.css       # Services section styles
│       ├── testimonials.css   # Testimonials section styles
│       └── variables.css      # CSS custom properties
├── js/
│   ├── main.js          # Main JavaScript file
│   └── modules/         # JavaScript modules
│       ├── components.js         # Component loader
│       ├── form.js              # Form handling
│       ├── testimonial-carousel.js # Testimonial carousel
│       └── theme.js             # Theme toggle
└── blogs/               # Blog articles
    └── *.html           # Individual blog posts
```

## Features

- Modular CSS architecture
- Component-based structure
- Responsive design
- Dark/Light theme toggle
- Accessibility improvements
- Performance optimizations

## Development

### CSS Structure
- Base styles in `base.css`
- Component-specific styles in `components.css`
- Layout system in `layout.css`
- Variables and theming in `modules/variables.css`

### JavaScript Modules
- Component loading system
- Form validation and submission
- Theme management
- Testimonial carousel

### Components
HTML components are in the `components/` directory and loaded dynamically using JavaScript.

## Accessibility Features

- Skip to main content link
- ARIA labels
- Keyboard navigation support
- Focus management
- Reduced motion support
- Screen reader optimizations

## Performance Optimizations

- CSS module imports
- JavaScript code splitting
- Component-based architecture
- Optimized assets
- Responsive images
