import React, { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import './FloatingCTA.css'

function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [dismissed])

  const handleDismiss = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setVisible(false)
    setDismissed(true)
  }

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className="floating-cta"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            className="floating-cta__dismiss"
            onClick={handleDismiss}
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
          <p className="floating-cta__eyebrow">Like what you see?</p>
          <p className="floating-cta__body">
            Let's build your practice a site like this.
          </p>
          <a
            href="https://thatsoftwarehouse.com/contact"
            target="_blank"
            rel="noreferrer"
            className="floating-cta__link"
          >
            <MessageCircle size={15} />
            Get in touch
          </a>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
