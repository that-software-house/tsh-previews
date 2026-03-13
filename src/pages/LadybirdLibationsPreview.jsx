import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Phone, CalendarCheck } from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './LadybirdLibationsPreview.css'

// ── Variants ──────────────────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}
const slideUp = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
}
const pillReveal = {
  hidden: { opacity: 0, scale: 0.78, rotate: -3 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
}

// ── Data ──────────────────────────────────────────────────────────────────────
const data = {
  businessName: 'Ladybird Libations',
  tagline: 'Mobile Cocktail & Mocktail Bar',
  location: 'Austin, TX',
  bookingUrl: 'https://ladybirdlibations.com',
  instagram: 'https://www.instagram.com/ladybirdlibations/',
  owner: 'Rezzy Davis',

  hero: {
    lines: [
      [
        { type: 'text', text: 'We bring good times,' },
        {
          type: 'pill',
          src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=220&h=140&q=80',
          alt: 'colorful mocktails',
        },
      ],
      [
        { type: 'text', text: 'from', italic: true },
        {
          type: 'pill',
          src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=220&h=140&q=80',
          alt: 'amber mocktail',
        },
        { type: 'text', text: 'a good place' },
      ],
    ],
    slides: [
      'https://assets.lummi.ai/assets/QmQtkgR7t2E8TtDa2qrA7BTcnuGLzZjEfRfps1YZtTxJBB?auto=format&h=520',
      'https://assets.lummi.ai/assets/QmY2un3vbi6cLhPppzBpJ87GhgyBY1NgoMFr3fDT3UyMzx?auto=format&w=1500',
      'https://assets.lummi.ai/assets/QmQtkgR7t2E8TtDa2qrA7BTcnuGLzZjEfRfps1YZtTxJBB?auto=format&w=1500',
      'https://assets.lummi.ai/assets/QmQtkgR7t2E8TtDa2qrA7BTcnuGLzZjEfRfps1YZtTxJBB?auto=format&w=1500',
      'https://assets.lummi.ai/assets/QmQtkgR7t2E8TtDa2qrA7BTcnuGLzZjEfRfps1YZtTxJBB?auto=format&w=1500',
    ],
  },

  sections: [
    {
      id: 'craft',
      headA: 'House',
      headI: 'of',
      headB: 'Craft',
      sub: 'Locally sourced. Curated fresh. Made for your moment.',
      meta: [
        { label: 'Mixologist', value: 'Rezzy Davis\nFounder & Bartender' },
        { label: 'Based In', value: 'Austin, TX' },
      ],
      slides: [
        'https://assets.lummi.ai/assets/QmY2un3vbi6cLhPppzBpJ87GhgyBY1NgoMFr3fDT3UyMzx?auto=format&w=1500',
        'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&w=1400&q=80',
        'https://assets.lummi.ai/assets/QmY2un3vbi6cLhPppzBpJ87GhgyBY1NgoMFr3fDT3UyMzx?auto=format&w=1500',
        'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1400&q=80',
      ],
    },
    {
      id: 'flavor',
      headA: 'House',
      headI: 'of',
      headB: 'Flavor',
      sub: 'Zero-proof perfection. Every menu crafted from scratch.',
      meta: [
        { label: 'Specialty', value: 'Mocktail & Dry Bar\nCustom Menus' },
        { label: 'Perfect For', value: 'Any Event' },
      ],
      slides: [
        'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1400&q=80',
        'https://assets.lummi.ai/assets/QmY2un3vbi6cLhPppzBpJ87GhgyBY1NgoMFr3fDT3UyMzx?auto=format&w=1500',
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1400&q=80',
        'https://assets.lummi.ai/assets/QmY2un3vbi6cLhPppzBpJ87GhgyBY1NgoMFr3fDT3UyMzx?auto=format&w=1500',
        'https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=1400&q=80',
      ],
    },
    {
      id: 'experience',
      headA: 'House',
      headI: 'of',
      headB: 'Good Times',
      sub: 'TABC Licensed · Woman-Owned · 20+ Years of Craft',
      meta: [
        { label: 'Events', value: 'Weddings · Corporate\nFestivals · Parties' },
        { label: 'Service Area', value: 'Austin, TX\n& Surrounding Area' },
      ],
      slides: [
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1400&q=80',
      ],
    },
  ],
}

// ── Carousel ──────────────────────────────────────────────────────────────────
function Carousel({ slides }) {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)
  const total = slides.length

  const go = (d) => {
    setDir(d)
    setIdx((i) => (i + d + total) % total)
  }

  const fmt = (n) => String(n).padStart(2, '0')

  return (
    <div className="ll-preview__carousel">
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <Motion.div
          key={idx}
          className="ll-preview__carousel-frame"
          custom={dir}
          variants={{
            enter: (d) => ({ x: d > 0 ? '5%' : '-5%', opacity: 0 }),
            center: { x: 0, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
            exit: (d) => ({
              x: d > 0 ? '-3%' : '3%',
              opacity: 0,
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src={slides[idx]}
            alt={`Ladybird Libations slide ${idx + 1}`}
            className="ll-preview__carousel-img"
          />
          <div className="ll-preview__counter" aria-hidden="true">
            <span className="ll-preview__counter-num">{fmt(idx + 1)}</span>
            <span className="ll-preview__counter-sep">&nbsp;</span>
            <span className="ll-preview__counter-num ll-preview__counter-total">{fmt(total)}</span>
          </div>
        </Motion.div>
      </AnimatePresence>
      <button
        className="ll-preview__arrow ll-preview__arrow--prev"
        onClick={() => go(-1)}
        aria-label="Previous slide"
      >
        <ArrowLeft size={13} strokeWidth={1.5} />
      </button>
      <button
        className="ll-preview__arrow ll-preview__arrow--next"
        onClick={() => go(1)}
        aria-label="Next slide"
      >
        <ArrowRight size={13} strokeWidth={1.5} />
      </button>
    </div>
  )
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="ll-preview__nav">
      <a href="#hero" className="ll-preview__nav-logo">
        Ladybird Libations
      </a>
      <ul className="ll-preview__nav-links">
        <li><a href="#craft">Bar</a></li>
        <li><a href="#flavor">Menu</a></li>
        <li><a href="#experience">Events</a></li>
        <li><a href="#contact">Location</a></li>
      </ul>
      <a
        href={data.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="ll-preview__nav-cta"
      >
        Contact
      </a>
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="ll-preview__section ll-preview__section--hero" id="hero">
      <Motion.div
        className="ll-preview__hero-head"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="ll-preview__hero-h1">
          {data.hero.lines.map((line, li) => (
            <span key={li} className="ll-preview__hero-line">
              {line.map((token, ti) => {
                if (token.type === 'pill') {
                  return (
                    <Motion.span key={ti} className="ll-preview__pill" variants={pillReveal}>
                      <img src={token.src} alt={token.alt} />
                    </Motion.span>
                  )
                }
                return token.italic ? (
                  <Motion.em key={ti} className="ll-preview__hero-em" variants={slideUp}>
                    {token.text}
                  </Motion.em>
                ) : (
                  <Motion.span key={ti} className="ll-preview__hero-word" variants={slideUp}>
                    {token.text}
                  </Motion.span>
                )
              })}
            </span>
          ))}
        </h1>
      </Motion.div>
      <Motion.div
        className="ll-preview__carousel-wrap"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.4 }}
      >
        <Carousel slides={data.hero.slides} />
      </Motion.div>
    </section>
  )
}

// ── Standard Section ──────────────────────────────────────────────────────────
function StdSection({ sec }) {
  return (
    <section className="ll-preview__section ll-preview__section--std" id={sec.id}>
      <Motion.div
        className="ll-preview__std-head"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <Motion.h2 className="ll-preview__std-h2" variants={slideUp}>
          {sec.headA} <em className="ll-preview__std-em">{sec.headI}</em> {sec.headB}
        </Motion.h2>
        <Motion.p className="ll-preview__std-sub" variants={slideUp}>
          {sec.sub}
        </Motion.p>
      </Motion.div>

      <Motion.div
        className="ll-preview__carousel-wrap"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.2 }}
      >
        <Carousel slides={sec.slides} />
      </Motion.div>

      <Motion.div
        className="ll-preview__meta-bar"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {sec.meta.map((m, i) => (
          <div key={i} className="ll-preview__meta-col">
            <span className="ll-preview__meta-label">{m.label}</span>
            <span className="ll-preview__meta-value">{m.value}</span>
          </div>
        ))}
        <a
          href={data.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="ll-preview__meta-link"
        >
          Read More
        </a>
      </Motion.div>
    </section>
  )
}

// ── Contact Section ───────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="ll-preview__section ll-preview__section--contact" id="contact">
      <Motion.div
        className="ll-preview__contact-inner"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Motion.span className="ll-preview__contact-kicker" variants={slideUp}>
          Ready to elevate your event?
        </Motion.span>
        <Motion.h2 className="ll-preview__contact-h2" variants={slideUp}>
          Book <em className="ll-preview__contact-em">your</em> Event
        </Motion.h2>
        <Motion.p className="ll-preview__contact-sub" variants={slideUp}>
          Mobile bar for Austin's best moments.
          <br />
          Starting at $50/hr · TABC Licensed & Insured
        </Motion.p>
        <Motion.div className="ll-preview__contact-ctas" variants={slideUp}>
          <a
            href={data.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="ll-preview__contact-btn"
          >
            Get a Quote →
          </a>
          <a
            href={data.instagram}
            target="_blank"
            rel="noreferrer"
            className="ll-preview__contact-ig"
          >
            @ladybirdlibations
          </a>
        </Motion.div>
        <Motion.div className="ll-preview__contact-foot" variants={slideUp}>
          <span>Woman-Owned · Minority-Led</span>
          <span>Austin, TX 78704</span>
          <span>© 2025 Ladybird Libations</span>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function LadybirdLibationsPreview() {
  useSEO({
    title: 'Ladybird Libations — Mobile Mocktail Bar Austin TX',
    description:
      'Woman-owned mobile cocktail & mocktail bar in Austin, TX. Custom curated menus, TABC licensed. Book Rezzy Davis for your wedding, corporate event, or party.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/ladybird-libations',
  })

  return (
    <div className="ll-preview">
      <img
        src="https://thatsoftwarehouse.com/api/track/open/ladybird-libations"
        width="1"
        height="1"
        alt=""
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />

      <Nav />

      <main className="ll-preview__main">
        <HeroSection />
        {data.sections.map((sec) => (
          <StdSection key={sec.id} sec={sec} />
        ))}
        <ContactSection />
      </main>

      {/* Mobile rail */}
      <div className="ll-preview__mobile-rail">
        <a
          href={data.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="ll-preview__rail-btn ll-preview__rail-btn--book"
        >
          <CalendarCheck size={17} />
          <span>Book Now</span>
        </a>
        <a
          href={data.instagram}
          target="_blank"
          rel="noreferrer"
          className="ll-preview__rail-btn ll-preview__rail-btn--ig"
        >
          <span>@ladybirdlibations</span>
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}
