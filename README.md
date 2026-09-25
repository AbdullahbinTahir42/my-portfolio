# Abdullah Tahir — AI Engineer Portfolio

A premium, modern personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Showcases technical projects, career background, and a conversational AI assistant connected to a Hugging Face Space.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS
- **Animations & Interaction:** Framer Motion
- **Icons:** Lucide React
- **AI / Chatbot Integration:** `@gradio/client` connected to Hugging Face Space (`abdullahtahir/My_Chatbot`)
- **Content Rendering:** `react-markdown` + `remark-gfm`
- **Routing:** React Router DOM

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Project Architecture

- `src/components/`: Modular UI sections (`Navbar`, `Hero`, `Projects`, `Resume`, `Footer`)
- `src/pages/`: Route pages (`Home`, `Chatbot`)
- `src/data.js`: Centralized portfolio content data
- `public/`: Static assets, resume PDF, and favicon

## AI Assistant

The `/chat` route features a conversational assistant trained on Abdullah's portfolio knowledge base, communicating via Gradio Client to Hugging Face Spaces.
