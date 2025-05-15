<a name="readme-top"></a>

# Modern 3D Portfolio using React, Three.js and Typescript

![Modern 3D Portfolio using React, Three.js and Typescript](/.github/images/img_main.png "Modern 3D Portfolio using React, Three.js and Typescript")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/J2Surf "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/J2Surf/portfolio?icon=github&color=black&scale=1.01)](https://github.com/J2Surf/portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/J2Surf/portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/J2Surf/portfolio?icon=github&color=black&scale=1.01)](https://github.com/J2Surf/portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/J2Surf/portfolio?icon=github&color=black&scale=1.01)](https://github.com/J2Surf/portfolio/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/J2Surf/portfolio?icon=github&color=black&scale=1.01)](https://github.com/J2Surf/portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/J2Surf/portfolio?icon=github&color=black&scale=1.01)](https://github.com/J2Surf/portfolio/pulls "GitHub pull requests")
[![Netlify status](https://api.netlify.com/api/v1/badges/5c77ba92-e2f5-468e-99f1-3543906a90cb/deploy-status)](https://J2Surf.netlify.app/ "Netlify status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
portfolio/
  |- public/
    |-- desktop_pc/
    |-- planet/
    |-- apple-touch-icon.png
    |-- favicon.png
    |-- favicon16.png
    |-- favicon32.png
  |- src/
    |-- assets/
        |--- company/
        |--- projects/
        |--- socials/
        |--- tech/
        |--- testimonials/
        |--- index.ts
    |-- components/
        |--- canvas/
        |--- about.tsx
        |--- banner.tsx
        |--- contact.tsx
        |--- experience.tsx
        |--- feedbacks.tsx
        |--- footer.tsx
        |--- hero.tsx
        |--- index.ts
        |--- loader.tsx
        |--- navbar.tsx
        |--- tech.tsx
        |--- works.tsx
    |-- constants/
        |--- index.ts
    |-- hoc/
        |--- index.ts
        |--- section-wrapper.tsx
    |-- utils/
        |--- lib.ts
        |--- motion.ts
    |-- app.tsx
    |-- env.d.ts
    |-- index.css
    |-- main.tsx
    |-- styles.ts
  |- .env
  |- .env.example
  |- .gitignore
  |- index.html
  |- package-lock.json
  |- package.json
  |- postcss.config.cjs
  |- tailwind.config.ts
  |- tsconfig.json
  |- vite.config.ts
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# email js configuration
VITE_APP_SERVICE_ID=XXXXXXXXXXXXXXXX
VITE_APP_TEMPLATE_ID=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_KEY=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_RECIEVER=your@email.com
```

5. ### Service ID (Replace VITE_APP_SERVICE_ID):

- Visit the website where you are obtaining the service ID.
- Log in to your account or sign up if needed.
- Navigate to the section related to API keys or services.
- Find and copy the Service ID associated with your account.

6. ### Template ID (Replace VITE_APP_TEMPLATE_ID):

- Visit [EmailJS](https://emailjs.com "EmailJS") Website.
- Log in to your account or sign up if necessary.
- Access the section for email templates or integration.
- Locate the template you want to use and copy its Template ID.

7. ### EmailJS Public Key (Replace VITE_APP_EMAILJS_KEY):

- Go to the EmailJS website.
- Log in to your account or create one if you haven't.
- Navigate to the dashboard or settings page.
- Look for API keys or integration settings.
- Copy the Public Key associated with your account.

![Copy public key](/.github/images/step_emailjs.png "Copy public key")

8. ### EmailJS Receiver (Replace VITE_APP_EMAILJS_RECIEVER):

- Choose the email address where you want to receive emails.
- If needed, create an email address or use an existing one.
- Ensure that the chosen email address is accessible and ready to receive emails.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Showcase your skills](/.github/images/img1.png "Showcase your skills")

![Showcase your projects](/.github/images/img2.png "Showcase your projects")

![Modern UI/UX](/.github/images/img3.png "Modern UI/UX")

![Functional Contact form](/.github/images/img4.png "Functional Contact form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## :wrench: Stats

[![Stats for 3D Portfolio](/.github/images/stats.svg "Stats for 3D Portfolio")](https://pagespeed.web.dev/analysis?url=https://shubam.netlify.app/ "Stats for 3D Portfolio")

