import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppWithProvider from './AppWithProvider';
import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithProvider />
  </StrictMode>
);
