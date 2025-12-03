# Pearl of the Bay

**Overview:** A Vite + React frontend for a travel/booking app ("Travel Guru"). Uses Tailwind CSS, Firebase Authentication and multiple UI/animation libs. This repo contains the client-side code, routes, and dashboard pages for bookings and user roles.

**Quick Links:**
- **Project root:** `.`
- **Main entry:** `src/main.jsx` and `index.html`

**Features:**
- Role-based dashboard (Admin / Rider / User)
- Booking flow and payment pages
- Firebase Authentication integration
- Responsive UI built with Tailwind CSS and DaisyUI
- Lottie animations and other rich UI components

**Tech Stack:**
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (+ DaisyUI)
- **Auth / Backend:** Firebase (client-side usage)
- **State / Data:** React Query, Axios
- **Other libs:** Lottie, Swiper, React Router

**Folder Overview:**
- **`src/`**: app source code
  - **`src/Pages/`**: page components and nested dashboard pages
  - **`src/components/`**: shared UI components
  - **`src/firebase/`**: Firebase init (`firebase.init.js`)
  - **`src/contexts/`**: Auth and app contexts
  - **`src/hooks/`**: custom hooks (axios, auth helpers)
  - **`src/api/`**: local hooks to call APIs
  - **`src/assets/`**: static assets and lotties

**Getting Started (Local Development)**

Prerequisites:
- Node.js (v16+ recommended) and npm or yarn

Install:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Lint (ESLint):

```bash
npm run lint
```

**Environment Variables**
Create a `.env` (or `.env.local`) file at project root and provide the following keys (used in `src/firebase/firebase.init.js`):

```
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

Be careful not to commit secret values to version control.

**Scripts (from `package.json`)**
- **`dev`**: `vite` — run local dev server
- **`build`**: `vite build` — build production assets
- **`preview`**: `vite preview` — locally preview production build
- **`lint`**: `eslint .` — run ESLint

**Deployment**
- **Vercel:** Repo is ready to deploy to Vercel (root contains `vercel.json`). Set the same env variables in the Vercel dashboard and use the default build command (`npm run build`) and output directory Vite uses (Vite's default output is `dist`).
- **Firebase Hosting:** If you also want to host with Firebase, build the app and deploy the `dist` folder to Firebase hosting.

**Testing / Manual QA**
- Verify Firebase auth flows (signup, login, password reset)
- Check role-based routes under `src/Pages/Dashboard/*`
- Test payment success/failure flows in `src/Pages/Dashboard/Payment`

**Contributing**
- Fork and create a feature branch
- Keep changes focused and small
- Run `npm run lint` before submitting PR

**Troubleshooting**
- If styles appear missing after build, ensure Tailwind is properly configured in `tailwind.config.js` and `postcss` settings (if added) are up to date.
- Missing Firebase keys -> app will fail to init. Confirm `.env` values are correct and available at build time.

**License & Notes**
- This README is a developer-focused summary. Confirm any backend or server-side services (APIs) used by the app and add their docs/credentials to a secure place (not in the repo).

---

If you'd like, I can also:
- Add a small `README` badge header (CI / deploy status) or
- Add an `.env.example` file with the placeholders.

