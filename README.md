
<p align="center"><img src="wp-content/themes/framesync/public/logo.png" width="150" height="auto" draggable="false" decoding="async"></p>

# Aerobed

## Getting Started

### Prerequisites
Before you begin, make sure you have Node.js and npm installed on your machine.

### Installation
1. Open a terminal window and navigate to the theme directory.
2. Run the following command to install all dependencies:

   ```bash
   npm install
   ```

### Development

#### Watch for Changes

During development, you can use the watch mode to automatically rebuild whenever changes are detected. Run the following command:

```bash
   npm run watch
```

This will start a watcher that monitors your source files, triggering a rebuild whenever a change is made.

#### Code Linting

To check your JavaScript code for linting issues, use:

```bash
   npm run lint
```

To automatically fix linting issues where possible:

```bash
   npm run lint:fix
```

### Production Build

#### Build for Production

When you're ready to deploy, use the following command to create a production-ready build:

```bash
   npm run build
```

This command optimizes and bundles your code, making it suitable for deployment. Find the output in the designated build directory.

### Additional Information

Contributions are welcome! Feel free to fork and submit pull requests.


Happy coding!