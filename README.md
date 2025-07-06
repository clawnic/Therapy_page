# Therapy Page

A modern, responsive therapy and counseling website built with Next.js, React, and Tailwind CSS. This project is designed for therapists or counseling professionals to showcase their services, provide information, and allow clients to get in touch easily.

## Features
- Fully responsive design
- Service and specialty listings
- Contact form with validation
- Office hours section
- Modern UI components (Radix UI, custom components)
- Static export for deployment to GitHub Pages

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn if preferred)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
   cd YOUR-REPO
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Development
To start the development server:
```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
To build the project for production:
```sh
pnpm build
# or
npm run build
# or
yarn build
```

### Static Export & Deployment (GitHub Pages)
1. **Ensure your `next.config.js` contains:**
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     // basePath: '/YOUR-REPO-NAME', // Uncomment and set if deploying to a subpath
   }
   module.exports = nextConfig
   ```
2. **Deploy to GitHub Pages:**
   ```sh
   pnpm run deploy
   # or
   npm run deploy
   # or
   yarn deploy
   ```
   This will build the project and publish the static site from the `out` directory to the `gh-pages` branch.

3. **Configure GitHub Pages:**
   - Go to your repository on GitHub.
   - Navigate to **Settings > Pages**.
   - Set the source to the `gh-pages` branch and `/ (root)` folder.
   - Save.

Your site will be available at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

## Configuration
- **Images:** Place your images in the `public/images/` directory.
- **Content:** Edit the files in the `components/` and `app/` folders to customize services, contact info, and more.
- **Styling:** Tailwind CSS is used for styling. You can customize the theme in `tailwind.config.ts`.

## Scripts
- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm run deploy` — Build and deploy to GitHub Pages

## License
This project is licensed under the MIT License.
