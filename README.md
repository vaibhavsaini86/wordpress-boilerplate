<!-- <p align="center"><img src="wp-content/themes/framesync/public/logo.png" width="150" height="auto" draggable="false" decoding="async"></p> -->

# Framesync

A modern WordPress theme built with Webpack (Laravel Mix), Tailwind CSS, and Sass. Features auto-reload for instant browser refresh on code changes using BrowserSync.

## Features

- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Laravel Mix** - Webpack wrapper for asset compilation
- 🎯 **Sass/SCSS** - Preprocessor for enhanced styling
- 🔄 **BrowserSync** - Auto-reload on file changes
- ✨ **GSAP** - High-performance animation library
- 🖼️ **Fancybox** - Lightbox library for images and media
- 🔍 **ESLint** - JavaScript linting and code quality

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)
- **WordPress** installation
- **PHP** 5.6 or higher

## Installation

1. Navigate to the theme directory:

   ```bash
   cd wp-content/themes/framesync
   ```

2. Install all dependencies:

   ```bash
   npm install
   ```

## Development

### Watch Mode

During development, use watch mode to automatically rebuild assets and reload the browser when changes are detected:

```bash
npm run watch
```

or

```bash
npm start
```

This will:
- Compile JavaScript and Sass files
- Watch for changes in source files
- Automatically reload the browser via BrowserSync
- Proxy your local WordPress site (configured in `webpack.mix.js`)

**Note:** Make sure your WordPress site is running at the proxy URL specified in `webpack.mix.js` (default: `wp-boilerplate.local/`).

### Code Linting

To check your JavaScript code for linting issues:

```bash
npm run lint
```

To automatically fix linting issues where possible:

```bash
npm run lint:fix
```

## Production Build

When you're ready to deploy, create a production-ready build:

```bash
npm run build
```

This command will:
- Optimize and minify JavaScript and CSS
- Remove console.log statements
- Generate versioned assets
- Output files to the `dist/` directory

**Build Output:**
- JavaScript: `dist/js/theme.bundle.min.js`
- CSS: `dist/css/theme.bundle.min.css`

## Project Structure

```
framesync/
├── dist/              # Compiled assets (generated)
├── inc/               # PHP includes and functions
├── js/                # JavaScript source files
│   ├── index.js       # Main entry point
│   └── modules/       # JavaScript modules
├── sass/              # Sass/SCSS source files
│   ├── main.scss      # Main stylesheet entry
│   ├── base/          # Base styles
│   ├── components/    # Component styles
│   ├── layout/        # Layout styles
│   ├── pages/         # Page-specific styles
│   └── utils/         # Utility styles
├── templates/          # PHP templates
├── public/            # Public assets (images, icons)
├── package.json       # Node.js dependencies
├── webpack.mix.js     # Laravel Mix configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Configuration

### BrowserSync Proxy

To change the BrowserSync proxy URL, edit `webpack.mix.js`:

```javascript
mix.browserSync({
  proxy: 'your-site.local/', // Update this URL
  // ...
});
```

### Tailwind CSS

Customize Tailwind CSS settings in `tailwind.config.js`.

## Technologies Used

- **Laravel Mix** - Asset compilation
- **Tailwind CSS** - Utility-first CSS framework
- **Sass** - CSS preprocessor
- **GSAP** - Animation library
- **Fancybox** - Lightbox library
- **BrowserSync** - Development server with live reload
- **ESLint** - JavaScript linter

## Author

**Vaibhav Saini**

- LinkedIn: [@vaibhavsaini07](https://www.linkedin.com/in/vaibhavsaini07/)

## License

This theme is licensed under the GNU General Public License v2 or later.

## Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

---

Happy coding! 🚀