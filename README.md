# Alfredo Challenge
Recreate the exact layout and feel of the current Alfredo.pt interface, using Next.js 15 App Router, Tailwind CSS, and ShadCN. 

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/tomasbastos12/afredo_challenge.git
cd afredo_challenge
cd alfredo-ui
```
---
### 2. Run the Development Server
When you are on .../afredo_challenge/alfredo-ui run:
```bash
npm run dev
```
or build the app for production and start:
```bash
npm run build
npm run start
```
### 3. Visit App

Visit http://localhost:3000 in your browser to view the app.

## Notes

This project was developed on windows using VScode and Next.js v15.3.5

### 1. Project structure

alfredo_challenge/
│
├── app/                   # Main Next.js app routes
│   ├── agency/            # Agency summary page
│   ├── group/             # Group management page
│   └── layout.tsx         # Shared layout with sidebar
│
├── components/
│   ├── ui/                # ShadCN UI components and some costume
│   ├── sidebar.tsx        # Sidebar navigation
│   ├── company-row.tsx    # Company row for /group/page.tsx
│   ├── routes.tsx         # Route definitions
│
├── public/                # Static assets (images, logos)
│
└──styles/                # Global styles (Tailwind)           
