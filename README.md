# Muhammad Haroon Ali — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
cp .env.example .env.local   # add your Web3Forms key and site URL
npm run dev
```

## Editing content

All content (profile, experience, projects, skills, education, certifications) is in `lib/data.ts`.

- **Photo:** add `public/photo.jpg` and set `profile.photo = "/photo.jpg"`.
- **Project screenshots:** add images to `public/projects/` and set each project's `image` path.
- **Resume:** edit `resume/resume.html`, then regenerate the PDF:
  `google-chrome --headless=new --no-pdf-header-footer --print-to-pdf=public/resume.pdf file://$PWD/resume/resume.html`
- **Blog posts:** add an entry to `blogPosts` in `lib/data.ts` (title, date, summary, tags, platform, url). Cards on `/blog` link out to the platform where the post is published.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access key for the contact form (web3forms.com) |
| `NEXT_PUBLIC_SITE_URL` | Production URL, used for SEO metadata, sitemap and OG image |

## Deploy

Push to GitHub and import the repo on Vercel. Set the env vars above in the project settings.
