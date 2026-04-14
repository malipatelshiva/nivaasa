import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// ✅ SWIPER GLOBAL CSS (IMPORTANT)
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// 🔥 CREATE ROOT & RENDER APP
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);