import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Lenis from 'lenis'

function Root() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true })
    function raf(t){ lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
  }, [])
  return <App />
}
createRoot(document.getElementById('root')).render(<Root />)