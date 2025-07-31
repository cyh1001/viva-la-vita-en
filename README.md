# Viva La Vida Knowledge Base - English Version

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

- `/docs` - Documentation pages in Markdown
- `/blog` - Blog posts in Markdown
- `/src` - React components and pages
- `/static` - Static assets like images
- `/sidebars.ts` - Navigation configuration
- `/docusaurus.config.ts` - Site configuration

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.