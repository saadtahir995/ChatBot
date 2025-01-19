import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChatPage from './components/chatpage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ChatPage />
  </StrictMode>,
)
