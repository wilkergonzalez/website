# AGENTS.md

This file contains essential information for agentic coding agents working in this React + Vite portfolio repository.

## Project Overview

This is a personal portfolio website built with React 19, Vite, and React Router. The application features:
- Name entry gatekeeping component
- Multi-page navigation (Home, Projects, Contact)
- Responsive design with CSS modules
- Component-based architecture

## Development Commands

### Core Commands
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

### Running Tests
This project currently has no test framework configured. To add testing, install vitest or jest and add test scripts to package.json.

### Build Process
- Uses Vite as build tool
- No TypeScript configuration (pure JavaScript/JSX)
- ESLint configured for React development

## Code Style Guidelines

### File Organization
```
src/
├── components/        # React components (PascalCase naming)
├── assets/           # Static assets and data
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── *.css           # Component-specific styles
```

### Component Conventions
- Use functional components with React hooks
- Export components as default: `export default ComponentName`
- Import React at top of JSX files: `import React from 'react'`
- Use PascalCase for component names and file names
- Co-locate CSS files with components (ComponentName.css)

### Import Style
- External libraries first, then relative imports
- Use named imports for React hooks: `import { useState } from 'react'`
- Use default exports for components
- Keep import statements organized alphabetically when possible

### React Patterns
- Use functional components over class components
- Prefer hooks (useState, useEffect) over class lifecycle methods
- Use proper prop destructuring: `const Component = ({ userName }) => {}`
- Return single parent element or fragments

### Styling Conventions
- Use CSS modules with component-specific stylesheets
- Prefer semantic HTML elements
- Use BEM-like class naming: `.component-element-modifier`
- Keep CSS in separate `.css` files, not inline styles

### Error Handling
- Validate props with simple conditional checks
- Use form validation for user inputs
- Handle edge cases in component logic
- No error boundaries currently implemented

### Data Management
- Local state with useState for component-level data
- Props drilling for data flow between components
- No global state management library currently used

### JavaScript Standards
- ES6+ syntax (arrow functions, destructuring, template literals)
- No semicolons (following Vite convention)
- Use single quotes for strings
- Avoid unused variables (ESLint rule enforces this)

### ESLint Configuration
- Extends recommended JS and React hooks configs
- Special rule: unused variables starting with uppercase are ignored (for components)
- Files in `dist/` are ignored
- Configured for browser environment with JSX support

### Naming Conventions
- Components: PascalCase (`HomePage`, `Navigation`)
- Files: PascalCase for components, camelCase for utilities
- Variables: camelCase (`userName`, `isSubmitting`)
- Constants: UPPER_SNAKE_CASE when used as constants
- CSS classes: kebab-case (`.home-container`, `.nav-link`)

### Best Practices Specific to This Codebase
- Maintain the name entry flow - userName state controls app access
- Keep resume data centralized in HomePage component
- Use React Router for navigation with proper active state handling
- Preserve the existing semantic HTML structure and accessibility patterns
- Follow the established color scheme and design system in CSS

## Development Workflow

1. Always run `npm run lint` after making changes
2. Test the application with `npm run dev` before committing
3. Build with `npm run build` to ensure production readiness
4. Component changes should include both JSX and CSS updates when applicable