# Splint

The social network for California community college students. Connect with transfer-minded peers at your CC or across campuses, share stats, find study partners, and stay motivated together.

**Stack:** React 18 + Vite + Tailwind CSS + React Router v6

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

If `npm` isn't installed, use the portable Node runtime:

```bash
.tools/node/bin/npm install
.tools/node/bin/npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

1. Push to GitHub.
2. Import in Netlify, build settings are in `netlify.toml`.
3. Set form notification email to **splint.connect@gmail.com** under **Site settings → Forms → Form notifications**.

### Password protection

The site uses HTTP Basic Auth via `public/_headers` (generated at build time).

**Default credentials (change before launch):**
- Username: `splint`
- Password: `V&R26`

Set these in **Netlify → Site settings → Environment variables**:
- `BASIC_AUTH_USER`
- `BASIC_AUTH_PASSWORD`

Redeploy after changing env vars.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Intro, landing page with waitlist CTA |
| `/waitlist` | Full waitlist signup form |
| `/home` | App feed (preview) |
| `/discover` | Filter students by major, courses, institution, GPA, ECS, interests |
| `/communities` | Browse CC communities |
| `/communities/:id` | Discord-style community with channels |
| `/profile/:id` | Student profile with stats, courses, ECS |
| `/about` | What Splint is |

## TODO checklist

- [ ] Add real auth and user profiles
- [ ] Add messaging / DMs
- [ ] Add real-time community channels
- [ ] Add founder photos and bios
- [ ] Add social media links
- [ ] Expand CC communities beyond initial 6
- [x] Set Netlify waitlist form notification email (`splint.connect@gmail.com`)

## Project structure

```
src/
  components/
    Navbar.jsx, Footer.jsx, PhotoPlaceholder.jsx
    StudentCard.jsx, CommunityCard.jsx, FeedPost.jsx, FilterSidebar.jsx
  pages/
    Home.jsx, Discover.jsx, Communities.jsx, CommunityDetail.jsx
    Profile.jsx, About.jsx, NotFound.jsx
  data/
    students.js, communities.js, institutions.js, feed.js
```
