# parcel-static-template

Start a simple static site with components.

> Note: This is an opinionated basic template to save some time for future projects.

- ✨️ Zero-config bundler for HTML/SCSS/JS using [Parcel](https://parceljs.org/).
- 🔥 Hot Module Reloading
- 😎️ Supports ES6 out of the box.
- 🧱️ Render simple HTML components.
- 💯️ Render inline SVGs from files using a special `<icon>` element.
- 📸️ Automatic image optimization.
- 🚀️ Images are converted to WEBP for better performance with `<img>` elements transformed into `<picture>` elements that display WEBP in supported browsers and fallback to original image.
- 🕵️ Obfuscate `mailto` links to prevent scraper spam.
- 🔁️ Easily repeat blocks for prototyping.
- 🔒️ Automatically add `noopener noreferrer` to links to prevent [this vulnerability](https://developers.google.com/web/tools/lighthouse/audits/noopener).

## Quick start for your own site

| Deploy to Netlify & fork to a new repo 👉️ | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pugson/parcel-static-template) |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Running it locally
1. Install required packages with `yarn install`
2. Start your local development server with `yarn start`

## Deploying
Run `yarn build` to create an optimized production build in `/dist` which can be deployed as a website.

----

# To-do
- [ ] Automatically set `loading="lazy"` for image elements.
