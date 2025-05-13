
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for Clerk publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  console.warn("Missing VITE_CLERK_PUBLISHABLE_KEY. Authentication won't work properly.");
}

createRoot(document.getElementById("root")!).render(<App />);
