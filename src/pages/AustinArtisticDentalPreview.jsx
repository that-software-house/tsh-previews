import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { MapPin, Phone, Clock, Star, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import FloatingCTA from '../components/FloatingCTA'
import useSEO from '../hooks/useSEO'
import './AustinArtisticDentalPreview.css'

// ─── Content ───────────────────────────────────────────────────────────────
const previewData = {
  businessName: 'Austin Artistic Dental',
  phone: '(512) 292-9209',
  tel: '5122929209',
  email: 'austinartisticdental@gmail.com',
  address: 'Southpark Meadows · 9900 S IH-35 Suite P-200, Austin, TX 78748',
  slug: 'austin-artistic-dental',

  hero: {
    kicker: "South Austin's Premier Cosmetic Studio",
    headline: 'Your Smile,\nArtistically Crafted.',
    subheadline: 'Dr. Jarett Hulse · Top 3 Cosmetic Dentist in Austin · Bioclear Key Opinion Leader · M.A.G.D.',
    body: 'Porcelain veneers, smile makeovers, and full-mouth rehabilitation — delivered with an artist\'s eye and a no-judgment philosophy.',
    cta: 'Schedule a Consultation',
    ctaSecondary: 'View Patient Results',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
    trustBadges: ['Top 3 Cosmetic Dentist Since 2018', 'Bioclear Key Opinion Leader', 'M.A.G.D. — Top 1% of Dentists'],
  },

  stats: [
    { number: '#1–3', label: 'Cosmetic Dentist in Austin', sub: 'Voted every year since 2018' },
    { number: 'Top 1%', label: 'of U.S. Dentists', sub: 'M.A.G.D. Designation' },
    { number: '15+', label: 'Years Transforming Smiles', sub: 'South Austin' },
    { number: 'TV', label: 'Media Appearances', sub: "Austin's trusted expert" },
  ],

  about: {
    kicker: 'The Artistic Philosophy',
    heading: 'Dentistry That Considers\nYour Whole Face.',
    body: "At Austin Artistic Dental, every treatment begins with listening. Dr. Hulse takes a portrait-maker's approach — studying your facial proportions, skin tone, and personality before ever picking up a tool. The result is dentistry that looks like you, only better.",
    features: [
      'No-judgment, personalized consultations',
      'Natural-looking results — never "too done"',
      'Bioclear technology for minimally invasive care',
      'Luxury boutique environment in South Austin',
    ],
    cta: 'Meet Dr. Hulse →',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
  },

  doctor: {
    kicker: 'Meet Your Artist',
    heading: 'Dr. Jarett Hulse,\nD.M.D., M.A.G.D.',
    bio: "Dr. Hulse is a Master of the Academy of General Dentistry — a credential held by fewer than 1% of dentists nationwide. A Bioclear Key Opinion Leader, television personality, and South Austin's most trusted cosmetic artist, he has been voted one of Austin's top 3 cosmetic dentists every year since 2018.",
    credentials: [
      'M.A.G.D. — Master, Academy of General Dentistry (Top 1%)',
      'Bioclear Key Opinion Leader',
      'Voted Top 3 Cosmetic Dentist in Austin since 2018',
      'Television appearances as dental expert',
      'Smile Makeovers & Full Mouth Rehabilitation specialist',
    ],
    cta: 'Schedule with Dr. Hulse',
    image: 'assets/doctors/male1.png',
  },

  services: [
    {
      title: 'Smile Makeovers',
      description: 'A comprehensive redesign of your smile — combining veneers, whitening, and recontouring for a total transformation.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Porcelain Veneers',
      description: 'Paper-thin ceramic shells that mask chips, gaps, and discoloration — blended invisibly with your natural teeth.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'No-Prep Veneers',
      description: 'The reversible, minimally invasive alternative — no drilling, no sensitivity, stunning results.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Bioclear Method',
      description: "Dr. Hulse's specialty — injection-molded composite that closes black triangles and reshapes teeth without crowns.",
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Full Mouth Rehabilitation',
      description: 'Comprehensive reconstruction for worn or damaged dentition — restoring function and beauty simultaneously.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'KöR Whitening',
      description: 'The gold standard in professional whitening — designed for even deep tetracycline stains and age-related discoloration.',
      image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=900&q=80',
    },
  ],

  differentiators: {
    kicker: 'The Difference',
    heading: 'Luxury Boutique Care,\nNot a Dental Factory.',
    body: "Austin Artistic Dental is a boutique studio — not a high-volume chain. Every patient receives Dr. Hulse's direct, unhurried attention in a warm environment designed to feel nothing like a dental office.",
    reasons: [
      { title: 'No-Judgment Consultations', body: "We meet you where you are — whether it's your first visit or a long-overdue one." },
      { title: 'One Doctor, Always Dr. Hulse', body: "You'll never see a different provider at your follow-up." },
      { title: 'Artistically Matched Results', body: 'Every restoration is customized to your facial proportions, not a catalog.' },
      { title: 'Southpark Meadows Convenience', body: 'Easily accessible for all of South Austin, Buda, and Kyle patients.' },
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    imageSecondary: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80',
  },

  testimonials: [
    { stars: 5, quote: "Dr. Hulse completely transformed my smile before my wedding. I cried when I saw the results — I never thought I could look like this. Truly an artist.", author: 'Megan R.', location: 'South Austin' },
    { stars: 5, quote: "I'd been embarrassed about my teeth for 20 years. From the very first consultation, there was zero judgment. The Bioclear treatment changed my life in two visits.", author: 'Carlos V.', location: 'Kyle, TX' },
    { stars: 5, quote: "I've seen other cosmetic dentists. Nobody thinks about your face the way Dr. Hulse does. He designed a smile that actually fits my face — it's subtle and perfect.", author: 'Alison T.', location: 'Buda, TX' },
    { stars: 5, quote: "The KöR whitening removed stains I'd had since childhood. The whole experience felt more like a spa than a dental office.", author: 'Derek M.', location: 'Austin, TX' },
  ],

  gallery: [
    { image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80', label: 'Smile Makeover' },
    { image: 'https://plus.unsplash.com/premium_photo-1702598533345-57ecc9b1992d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Porcelain Veneers' },
    { image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=900&q=80', label: 'Bioclear Method' },
  ],

  cta: {
    kicker: 'Start Your Journey',
    heading: 'Your Confidence\nIs One Call Away.',
    body: "Schedule a no-pressure consultation with Dr. Hulse. We'll listen, evaluate, and create a personalized plan — with no obligation.",
    ctaPhone: '(512) 292-9209',
    ctaBook: 'Book Online',
    image: 'https://images.unsplash.com/photo-1514415008039-efa173293080?auto=format&fit=crop&w=900&q=80',
  },

  footer: {
    services: ['Smile Makeovers', 'Porcelain Veneers', 'No-Prep Veneers', 'Bioclear Method', 'KöR Whitening'],
    links: ['About Dr. Hulse', 'Patient Results', 'Contact', 'Book Consultation'],
  },
}

// ─── Motion Variants ────────────────────────────────────────────────────────
const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } }
const staggerChild = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const fadeIn = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const fadeLeft = { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0, transition: { duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] } } }
const scaleUp = { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }
const headingLine = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] } } }

// ─── Helpers ────────────────────────────────────────────────────────────────
function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      {children}
    </Motion.section>
  )
}

function HexDecor({ size = '60%', fill = 'var(--aad-gold-pale)', style = {} }) {
  return (
    <svg
      viewBox="0 0 268 305"
      fill={fill}
      style={{ position: 'absolute', width: size, pointerEvents: 'none', zIndex: 0, ...style }}
      aria-hidden="true"
    >
      <polygon points="134,0 268,77 268,229 134,305 0,229 0,77" />
    </svg>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function AustinArtisticDentalPreview() {
  useSEO({
    title: 'Austin Artistic Dental — New Website Preview',
    description: "See Austin Artistic Dental's modern website redesign — South Austin's premier cosmetic dentistry studio, featuring Dr. Jarett Hulse.",
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/austin-artistic-dental',
  })

  const [navScrolled, setNavScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const prevSlide = () => setActiveSlide(i => (i - 1 + previewData.testimonials.length) % previewData.testimonials.length)
  const nextSlide = () => setActiveSlide(i => (i + 1) % previewData.testimonials.length)

  return (
    <>
    <div className="aad-preview">
      {/* Tracking pixel */}
      <img src="https://thatsoftwarehouse.com/api/track/open/austin-artistic-dental" width="1" height="1" alt="" style={{ position: 'absolute', opacity: 0 }} />

      {/* ───── NAV ───── */}
      <nav className={`aad-nav${navScrolled ? ' aad-nav--scrolled' : ''}`}>
        <div className={`aad-nav__overlay${navScrolled ? ' aad-nav__overlay--visible' : ''}`} />
        <div className="aad-nav__shell">
          <div className="aad-nav__left">
            <a href="#about" className="aad-nav__link">About</a>
            <a href="#services" className="aad-nav__link">Services</a>
            <a href="#results" className="aad-nav__link">Results</a>
          </div>
          <div className="aad-nav__center">
            <span className="aad-nav__wordmark">Austin Artistic Dental</span>
          </div>
          <div className="aad-nav__right">
            <a href={`tel:${previewData.tel}`} className="aad-nav__phone">{previewData.phone}</a>
            <a href={`tel:${previewData.tel}`} className="aad-nav__book-btn">Book Consultation</a>
          </div>
          <button className="aad-nav__hamburger" onClick={() => setMobileMenuOpen(v => !v)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="aad-nav__mobile-menu">
            <a href="#about" className="aad-nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="aad-nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#results" className="aad-nav__mobile-link" onClick={() => setMobileMenuOpen(false)}>Results</a>
            <a href={`tel:${previewData.tel}`} className="aad-nav__mobile-link">{previewData.phone}</a>
            <a href={`tel:${previewData.tel}`} className="aad-nav__mobile-cta">Book Consultation</a>
          </div>
        )}
      </nav>

      {/* ───── HERO ───── */}
      <section className="aad-hero" style={{ backgroundImage: `url(${previewData.hero.image})` }}>
        <div className="aad-hero__overlay" />
        <div className="aad-hero__content">
          <Motion.span
            className="aad-hero__kicker"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.hero.kicker}
          </Motion.span>
          <Motion.h1
            className="aad-hero__h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.hero.headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </Motion.h1>
          <Motion.p
            className="aad-hero__sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.hero.subheadline}
          </Motion.p>
          <Motion.p
            className="aad-hero__body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.hero.body}
          </Motion.p>
          <Motion.div
            className="aad-hero__ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href={`tel:${previewData.tel}`} className="aad-btn aad-btn--gold">{previewData.hero.cta}</a>
            <a href="#services" className="aad-btn aad-btn--outline-white">{previewData.hero.ctaSecondary}</a>
          </Motion.div>
          <Motion.div
            className="aad-hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.78 }}
          >
            {previewData.hero.trustBadges.map((badge, i) => (
              <React.Fragment key={i}>
                <span className="aad-hero__trust-badge">{badge}</span>
                {i < previewData.hero.trustBadges.length - 1 && <span className="aad-hero__trust-dot" aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* ───── PROOF STRIP ───── */}
      <Section className="aad-proof">
        <div className="aad-shell">
          <Motion.div className="aad-proof__row" variants={staggerContainer}>
            {previewData.stats.map((stat, i) => (
              <Motion.div key={i} className="aad-proof__item" variants={staggerChild}>
                <span className="aad-proof__number">{stat.number}</span>
                <span className="aad-proof__label">{stat.label}</span>
                <span className="aad-proof__sub">{stat.sub}</span>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ───── ABOUT ───── */}
      <Section id="about" className="aad-about">
        <div className="aad-shell aad-about__inner">
          <Motion.div className="aad-about__text" variants={fadeLeft}>
            <span className="aad-kicker">{previewData.about.kicker}</span>
            <h2 className="aad-h2">
              {previewData.about.heading.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
              ))}
            </h2>
            <Motion.div className="aad-heading-line" variants={headingLine} />
            <p className="aad-body">{previewData.about.body}</p>
            <Motion.ul className="aad-about__features" variants={staggerContainer}>
              {previewData.about.features.map((f, i) => (
                <Motion.li key={i} className="aad-about__feature" variants={staggerChild}>{f}</Motion.li>
              ))}
            </Motion.ul>
            <a href={`tel:${previewData.tel}`} className="aad-link">{previewData.about.cta}</a>
          </Motion.div>
          <Motion.div className="aad-about__image-wrap" variants={fadeRight}>
            <HexDecor size="77%" fill="var(--aad-gold-pale)" style={{ top: '-9%', left: '-42%' }} />
            <HexDecor size="57%" fill="var(--aad-sage-pale)" style={{ top: '11%', right: '-42%' }} />
            <HexDecor size="37%" fill="var(--aad-gold-pale)" style={{ bottom: '15%', left: '-20%' }} />
            <HexDecor size="47%" fill="var(--aad-sage-pale)" style={{ bottom: '-5%', right: '-15%' }} />
            <img src={previewData.about.image} alt="Patient with beautiful smile after cosmetic dentistry" className="aad-about__img" />
          </Motion.div>
        </div>
      </Section>

      {/* ───── DOCTOR (dark centerpiece) ───── */}
      <Section className="aad-doctor">
        <div className="aad-doctor__inner">
          <Motion.div className="aad-doctor__image-wrap" variants={fadeLeft}>
            <img src={previewData.doctor.image} alt="Dr. Jarett Hulse, cosmetic dentist" className="aad-doctor__img" />
          </Motion.div>
          <Motion.div className="aad-doctor__content" variants={fadeRight}>
            <HexDecor size="55%" fill="var(--aad-gold)" style={{ bottom: '8%', right: '-10%', opacity: 0.05, zIndex: 0 }} />
            <HexDecor size="28%" fill="var(--aad-gold)" style={{ top: '6%', right: '6%', opacity: 0.04, zIndex: 0 }} />
            <span className="aad-kicker aad-kicker--gold">{previewData.doctor.kicker}</span>
            <h2 className="aad-h2 aad-h2--white">
              {previewData.doctor.heading.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
              ))}
            </h2>
            <Motion.div className="aad-heading-line aad-heading-line--gold" variants={headingLine} />
            <p className="aad-body aad-body--muted-white">{previewData.doctor.bio}</p>
            <Motion.ul className="aad-doctor__creds" variants={staggerContainer}>
              {previewData.doctor.credentials.map((c, i) => (
                <Motion.li key={i} className="aad-doctor__cred" variants={staggerChild}>{c}</Motion.li>
              ))}
            </Motion.ul>
            <a href={`tel:${previewData.tel}`} className="aad-btn aad-btn--gold">{previewData.doctor.cta}</a>
          </Motion.div>
        </div>
      </Section>

      {/* ───── SERVICES ───── */}
      <Section id="services" className="aad-services">
        <div className="aad-shell">
          <Motion.div className="aad-services__header" variants={fadeIn}>
            <span className="aad-kicker">Signature Services</span>
            <h2 className="aad-h2">Your Path to a Remarkable Smile</h2>
            <Motion.div className="aad-heading-line aad-heading-line--center" variants={headingLine} />
            <p className="aad-body">From subtle refinements to complete smile transformations — each treatment is crafted to your unique anatomy.</p>
          </Motion.div>
          <Motion.div className="aad-services__grid" variants={staggerContainer}>
            {previewData.services.map((svc, i) => (
              <Motion.div key={i} className="aad-service-card" variants={staggerChild}>
                <div className="aad-service-card__img-wrap">
                  <img src={svc.image} alt={svc.title} className="aad-service-card__img" />
                </div>
                <div className="aad-service-card__body">
                  <div className="aad-service-card__title-wrap">
                    <span className="aad-service-card__title">{svc.title}</span>
                  </div>
                  <div className="aad-service-card__line" />
                  <p className="aad-service-card__desc">{svc.description}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ───── DIFFERENTIATORS ───── */}
      <Section className="aad-diff">
        <div className="aad-shell aad-diff__inner">
          <Motion.div className="aad-diff__image-col" variants={fadeLeft}>
            <div className="aad-diff__image-stack">
              <img src={previewData.differentiators.image} alt="Luxury dental studio interior" className="aad-diff__img-main" />
              <img src={previewData.differentiators.imageSecondary} alt="Dental treatment close-up" className="aad-diff__img-secondary" />
            </div>
          </Motion.div>
          <Motion.div className="aad-diff__text" variants={fadeRight}>
            <span className="aad-kicker">{previewData.differentiators.kicker}</span>
            <h2 className="aad-h2">
              {previewData.differentiators.heading.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
              ))}
            </h2>
            <Motion.div className="aad-heading-line" variants={headingLine} />
            <p className="aad-body">{previewData.differentiators.body}</p>
            <Motion.ul className="aad-diff__reasons" variants={staggerContainer}>
              {previewData.differentiators.reasons.map((r, i) => (
                <Motion.li key={i} className="aad-diff__reason" variants={staggerChild}>
                  <strong className="aad-diff__reason-title">{r.title}</strong>
                  <span className="aad-diff__reason-body">{r.body}</span>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.div>
        </div>
      </Section>

      {/* ───── TESTIMONIALS ───── */}
      <Section className="aad-testimonials">
        <div className="aad-testimonials__inner">
          <div className="aad-testimonials__image-col">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
              alt="Happy patient with beautiful smile"
              className="aad-testimonials__img"
            />
          </div>
          <Motion.div className="aad-testimonials__content" variants={fadeIn}>
            <span className="aad-kicker aad-kicker--gold">Patient Stories</span>
            <h2 className="aad-h2 aad-h2--white">Real Results.<br />Real People.</h2>
            <Motion.div className="aad-heading-line aad-heading-line--gold" variants={headingLine} />
            <div className="aad-testimonials__slider">
              <div className="aad-testimonials__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#B8975A" color="#B8975A" />
                ))}
              </div>
              <blockquote className="aad-testimonials__quote">
                "{previewData.testimonials[activeSlide].quote}"
              </blockquote>
              <cite className="aad-testimonials__author">
                — {previewData.testimonials[activeSlide].author},{' '}
                <span className="aad-testimonials__location">{previewData.testimonials[activeSlide].location}</span>
              </cite>
              <div className="aad-testimonials__nav">
                <button className="aad-testimonials__arrow" onClick={prevSlide} aria-label="Previous testimonial">
                  <ChevronLeft size={18} color="#B8975A" />
                </button>
                <div className="aad-testimonials__dots">
                  {previewData.testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`aad-testimonials__dot${i === activeSlide ? ' aad-testimonials__dot--active' : ''}`}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button className="aad-testimonials__arrow" onClick={nextSlide} aria-label="Next testimonial">
                  <ChevronRight size={18} color="#B8975A" />
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      </Section>

      {/* ───── RESULTS GALLERY ───── */}
      <Section id="results" className="aad-gallery">
        <div className="aad-shell">
          <Motion.div className="aad-gallery__header" variants={fadeIn}>
            <span className="aad-kicker">Before &amp; After</span>
            <h2 className="aad-h2">The Work Speaks<br />for Itself.</h2>
            <Motion.div className="aad-heading-line" variants={headingLine} />
          </Motion.div>
          <Motion.div className="aad-gallery__grid" variants={staggerContainer}>
            {previewData.gallery.map((item, i) => (
              <Motion.div key={i} className={`aad-gallery__item aad-gallery__item--${i}`} variants={staggerChild}>
                <div className="aad-gallery__img-wrap">
                  <img src={item.image} alt={item.label} className="aad-gallery__img" />
                </div>
                <span className="aad-gallery__label">{item.label}</span>
              </Motion.div>
            ))}
          </Motion.div>
          <Motion.div className="aad-gallery__cta-wrap" variants={fadeIn}>
            <a href={`tel:${previewData.tel}`} className="aad-link">View Full Gallery →</a>
          </Motion.div>
        </div>
      </Section>

      {/* ───── CTA CARD ───── */}
      <Section className="aad-cta-section">
        <div className="aad-shell">
          <Motion.div className="aad-cta-card" variants={scaleUp}>
            <div className="aad-cta-card__content">
              <span className="aad-kicker">{previewData.cta.kicker}</span>
              <h2 className="aad-h2">
                {previewData.cta.heading.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                ))}
              </h2>
              <Motion.div className="aad-heading-line" variants={headingLine} />
              <p className="aad-body">{previewData.cta.body}</p>
              <div className="aad-cta-card__btns">
                <a href={`tel:${previewData.tel}`} className="aad-btn aad-btn--dark">{previewData.cta.ctaPhone}</a>
                <a href={`tel:${previewData.tel}`} className="aad-btn aad-btn--gold">{previewData.cta.ctaBook}</a>
              </div>
            </div>
            <Motion.div
              className="aad-cta-card__image-wrap"
              variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <img src={previewData.cta.image} alt="Welcoming dental consultation room" className="aad-cta-card__img" />
            </Motion.div>
          </Motion.div>
        </div>
      </Section>

      {/* ───── CONTACT ───── */}
      <Section id="contact" className="aad-contact">
        <div className="aad-shell">
          <Motion.div className="aad-contact__header" variants={fadeIn}>
            <span className="aad-kicker">Find Us</span>
            <h2 className="aad-h2">Visit Our South Austin Studio</h2>
            <Motion.div className="aad-heading-line" variants={headingLine} />
          </Motion.div>
          <Motion.div className="aad-contact__grid" variants={staggerContainer}>
            {[
              { Icon: MapPin, title: 'Location', body: '9900 S IH-35 Suite P-200\nSouthpark Meadows\nAustin, TX 78748' },
              { Icon: Phone, title: 'Phone', body: previewData.phone, link: `tel:${previewData.tel}` },
              { Icon: Clock, title: 'Hours', body: 'Tue – Fri: 8:00 am – 5:00 pm\nVirtual Consults Available' },
            ].map(({ Icon, title, body, link }, i) => (
              <Motion.div key={i} className="aad-contact__card" variants={staggerChild}>
                <Icon size={28} className="aad-contact__icon" />
                <strong className="aad-contact__title">{title}</strong>
                {link ? (
                  <a href={link} className="aad-contact__body aad-contact__body--link">{body}</a>
                ) : (
                  <p className="aad-contact__body">{body}</p>
                )}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ───── FOOTER ───── */}
      <footer className="aad-footer">
        <div className="aad-shell aad-footer__top">
          <div className="aad-footer__brand">
            <span className="aad-footer__wordmark">Austin Artistic Dental</span>
            <p className="aad-footer__address">{previewData.address}</p>
            <a href={`tel:${previewData.tel}`} className="aad-footer__phone">{previewData.phone}</a>
          </div>
          <div className="aad-footer__nav-cols">
            <div className="aad-footer__col">
              <h4 className="aad-footer__col-heading">Services</h4>
              <ul className="aad-footer__col-list">
                {previewData.footer.services.map((s, i) => (
                  <li key={i}><a href={`tel:${previewData.tel}`} className="aad-footer__col-link">{s}</a></li>
                ))}
              </ul>
            </div>
            <div className="aad-footer__col">
              <h4 className="aad-footer__col-heading">Practice</h4>
              <ul className="aad-footer__col-list">
                {previewData.footer.links.map((l, i) => (
                  <li key={i}><a href={`tel:${previewData.tel}`} className="aad-footer__col-link">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="aad-footer__divider" />
        <div className="aad-shell aad-footer__bottom">
          <span className="aad-footer__copy">© 2026 Austin Artistic Dental. All rights reserved.</span>
          <div className="aad-footer__legal">
            <a href="#" className="aad-footer__legal-link">Privacy Policy</a>
            <a href="#" className="aad-footer__legal-link">Accessibility</a>
          </div>
        </div>
      </footer>

      {/* ───── MOBILE RAIL ───── */}
      <div className="aad-mobile-rail">
        <a href={`tel:${previewData.tel}`} className="aad-mobile-rail__phone">
          <Phone size={18} />
          {previewData.phone}
        </a>
        <a href={`tel:${previewData.tel}`} className="aad-mobile-rail__cta">Book Now</a>
      </div>

    </div>
    <FloatingCTA />
    </>
  )
}
