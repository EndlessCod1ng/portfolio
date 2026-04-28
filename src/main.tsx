import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { BrowserRouter } from "react-router";
import './app/styles/index.css'
import { ThemeProvider } from './app/providers/ThemeProvider';
import '@/shared/config/i18n';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio/">
      <ThemeProvider>
        <Suspense fallback={<div>{"Loading"}</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
