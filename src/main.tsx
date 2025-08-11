import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import './index.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
