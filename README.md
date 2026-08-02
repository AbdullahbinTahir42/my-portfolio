# Abdullah's Portfolio

A modern personal portfolio website built with React, Vite, and Tailwind CSS. It showcases projects, resume information, and a conversational AI assistant powered by a Gradio-backed chatbot.

## Features

- Responsive portfolio homepage
- Project showcase section
- Resume section with downloadable content
- AI chatbot experience for exploring Abdullah's background and work
- Smooth animations and polished UI

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React
- @gradio/client

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal (usually http://localhost:5173).

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build the production bundle
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks

## Project Structure

- `src/components/` - reusable UI sections such as hero, navbar, projects, and resume
- `src/pages/` - route-based pages including the homepage and chatbot
- `public/` - static assets and downloadable files

## Notes

The chatbot page connects to a Gradio-hosted model endpoint. If the service is unavailable, the app will display a friendly fallback message.

## Deployment

Run the build command and deploy the generated `dist/` folder to your preferred hosting service.
