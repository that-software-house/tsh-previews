import { motion as Motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import './ConstructionScrollHero.css'

const FRAMES = [
  '01-0-00.jpg',
  '02-0-00.jpg',
  '03-0-01.jpg',
  '04-0-01.jpg',
  '05-0-02.jpg',
  '06-0-02.jpg',
  '07-0-03.jpg',
  '08-0-04.jpg',
  '09-0-04.jpg',
  '10-0-05.jpg',
  '11-0-05.jpg',
  '12-0-06.jpg',
  '13-0-06.jpg',
  '14-0-07.jpg',
  '15-0-07.jpg',
].map((frame) => `/assets/construction-frames/${frame}`)

function ConstructionScrollHero() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [frameIndex, setFrameIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    FRAMES.forEach((source) => {
      const image = new Image()
      image.src = source
    })
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const nextProgress = Number.isFinite(value) ? value : 0
    const nextFrame = Math.round(nextProgress * (FRAMES.length - 1))

    setProgress(nextProgress)
    setFrameIndex(nextFrame)
  })

  return (
    <section className="construction-hero-demo">
      <div className="construction-hero-demo__scroll-shell" ref={containerRef}>
        <div className="construction-hero-demo__sticky">
          <div className="construction-hero-demo__backdrop" aria-hidden="true" />

          <div className="construction-hero-demo__inner">
            <Motion.div
              className="construction-hero-demo__copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="construction-hero-demo__eyebrow">Scroll-driven build sequence</p>
              <h1>Watch the house rise one frame at a time.</h1>
              <p className="construction-hero-demo__lede">
                The hero is pinned while scroll progress swaps through each construction
                milestone, turning a static landing section into a tactile before-to-after demo.
              </p>

              <div className="construction-hero-demo__meta" aria-label="Sequence progress">
                <span>Start frame</span>
                <div className="construction-hero-demo__progress-track" aria-hidden="true">
                  <span
                    className="construction-hero-demo__progress-fill"
                    style={{ transform: `scaleX(${progress})` }}
                  />
                </div>
                <span>Completed build</span>
              </div>
            </Motion.div>

            <Motion.div
              className="construction-hero-demo__frame-panel"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="construction-hero-demo__frame-chrome">
                <span>Frame {String(frameIndex + 1).padStart(2, '0')}</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>

              <div className="construction-hero-demo__image-wrap">
                <img
                  className="construction-hero-demo__image"
                  src={FRAMES[frameIndex]}
                  alt="House construction progress"
                />
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConstructionScrollHero
