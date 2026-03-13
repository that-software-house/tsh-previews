import React, { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Stethoscope, HeartPulse, Users, Video, Scale, FlaskConical,
  CalendarCheck, ShieldCheck, Activity, Phone, MapPin, Clock,
  Globe, Star, CheckCircle, Menu, X,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './WellnessBayHealthPreview.css'

// ── Motion variants ──────────────────────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] } },
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ children, className = '', id, variants }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={variants || staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      {children}
    </Motion.section>
  )
}

// ── Preview data ──────────────────────────────────────────────────────────────
const previewData = {
  businessName: 'Wellness Bay Health',
  tagline: "Georgetown's trusted primary care for adults & seniors",
  phone: '(512) 588-7008',
  phoneHref: 'tel:+15125887008',
  addressOneline: '4887 Williams Dr, Ste 107, Georgetown, TX 78633',
  hours: 'Mon–Fri  8:00 AM – 5:00 PM',
  bookingUrl: 'https://www.wellnessbayhealth.com/book-online',
  hero: {
    eyebrow: 'Georgetown, TX · Accepting New Patients',
    headline: 'Primary Care That Actually Knows You',
    subheadline:
      'Same-day appointments, direct doctor access, and unhurried visits — right here in Georgetown. Dr. Al Darawsha limits his patient panel so you never feel like a number.',
    cta: 'Book Same-Day Appointment',
    ctaSecondary: 'Call (512) 588-7008',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
  },
  stats: [
    { value: '125+', label: 'Five-Star Google Reviews' },
    { value: 'Nextdoor', label: 'Neighborhood Favorite 2025' },
    { value: 'Same-Day', label: 'Appointments Available' },
    { value: 'Medicare', label: 'Accepted · In-Office Labs' },
  ],
  about: {
    kicker: 'About Wellness Bay Health',
    heading: 'A Practice Built Around You — Not Volume',
    body: 'Dr. Al Darawsha intentionally limits our patient panel so every visit feels unhurried. Located minutes from Sun City in Georgetown, we serve adults and seniors who deserve a doctor that listens — not just a portal that sends reminders.',
    features: [
      'Board-certified internal medicine since founding',
      'Bilingual care — English, Spanish & Arabic',
      'Telehealth & in-office same-day slots',
      'In-office labs for faster results',
    ],
    image:
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80',
    badge: '125+ ⭐ Google Reviews',
  },
  doctor: {
    kicker: 'Meet Your Doctor',
    heading: 'Dr. Mohammad Al Darawsha, MD',
    body: 'Founder and board-certified internist, Dr. Al Darawsha built Wellness Bay Health on a simple belief: exceptional primary care starts with knowing your patient. His approach blends evidence-based medicine with genuine time spent listening.',
    credentials: [
      'Board-Certified · Internal Medicine',
      'Georgetown, TX · Sun City Community',
      'Medicare & Most Major Insurance Accepted',
    ],
    teamNote: 'Joining May 2026: Misty Young, PA-C — bilingual (English / Spanish)',
    image:
      'assets/doctors/male1.png',
  },
  services: [
    {
      icon: 'stethoscope',
      title: 'Primary Care',
      description: 'Comprehensive annual physicals, acute illness visits, and preventive care for adults.',
    },
    {
      icon: 'heart-pulse',
      title: 'Chronic Disease Management',
      description: 'Ongoing support for diabetes, hypertension, thyroid conditions, and more.',
    },
    {
      icon: 'users',
      title: 'Senior & Geriatric Care',
      description: 'Specialized attention for Medicare patients and the Sun City community.',
    },
    {
      icon: 'video',
      title: 'Telehealth Visits',
      description: 'See Dr. Al Darawsha from home — same personalized care, no commute required.',
    },
    {
      icon: 'scale',
      title: 'Weight Management',
      description: 'Evidence-based weight loss programs tailored to your health history and goals.',
    },
    {
      icon: 'flask',
      title: 'In-Office Labs',
      description: 'Bloodwork and results faster — no outside lab trip required for most tests.',
    },
    {
      icon: 'calendar-check',
      title: 'Same-Day Appointments',
      description: "When you're not feeling well, we make time for you — often the same day you call.",
    },
    {
      icon: 'shield-check',
      title: 'Preventive Screenings',
      description: 'Catch problems early with age-appropriate screenings and wellness panels.',
    },
    {
      icon: 'activity',
      title: 'TRT & Hormone Health',
      description: 'Testosterone replacement therapy and hormone balancing for men over 40.',
    },
  ],
  whyUs: {
    kicker: 'Why Patients Choose Us',
    heading: 'Medicine the Way It Should Feel',
    reasons: [
      {
        title: 'A Doctor Who Knows Your Name',
        body: 'We limit our panel size so Dr. Al Darawsha can give you real time — not a rushed 7-minute visit.',
      },
      {
        title: 'Nextdoor Neighborhood Favorite 2025',
        body: 'Voted by Georgetown neighbors who trust us with their families year after year.',
      },
      {
        title: '125+ Five-Star Google Reviews',
        body: 'Our patients say it best — read why they recommend us to everyone they know.',
      },
      {
        title: 'Medicare & Most Insurance Accepted',
        body: 'We work with Medicare and major plans so cost is never a barrier to good care.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
  },
  testimonials: [
    {
      quote:
        'Dr. Al Darawsha actually listens. After years of feeling like a number at a big clinic, coming here felt like having a real family doctor again.',
      author: 'Susan R.',
      location: 'Georgetown, TX',
      stars: 5,
    },
    {
      quote:
        'I called on a Monday morning not feeling well and they got me in the same day. The whole team was warm and professional.',
      author: 'James T.',
      location: 'Sun City, TX',
      stars: 5,
    },
    {
      quote:
        "My wife and I are both patients. He manages my diabetes and her blood pressure — we wouldn't go anywhere else.",
      author: 'Robert & Carol M.',
      location: 'Georgetown, TX',
      stars: 5,
    },
    {
      quote:
        "As a Medicare patient I was worried about finding a good doctor who wouldn't rush me. Wellness Bay exceeded every expectation.",
      author: 'Patricia L.',
      location: 'Georgetown, TX',
      stars: 5,
    },
    {
      quote:
        'The in-office lab is so convenient. Results came back same day and Dr. Al Darawsha called me personally to go over everything.',
      author: 'David H.',
      location: 'Georgetown, TX',
      stars: 5,
    },
    {
      quote:
        'Nextdoor Neighborhood Favorite for a reason. Everyone in Sun City knows — if you need a doctor, go to Wellness Bay.',
      author: 'Linda K.',
      location: 'Sun City, TX',
      stars: 5,
    },
  ],
  contact: {
    kicker: 'Find Us',
    heading: 'Visit Wellness Bay Health',
    details: [
      { icon: 'map-pin', label: 'Address', value: '4887 Williams Dr, Ste 107\nGeorgetown, TX 78633' },
      { icon: 'phone', label: 'Phone', value: '(512) 588-7008' },
      { icon: 'clock', label: 'Hours', value: 'Mon–Fri  8:00 AM – 5:00 PM' },
      { icon: 'globe', label: 'Telehealth', value: 'Available for established patients' },
    ],
    mapImage:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
  },
  nav: {
    links: ['About', 'Services', 'Our Team', 'Contact'],
  },
  footer: {
    links: ['Home', 'About', 'Services', 'Our Team', 'Contact'],
    contactItems: [
      '4887 Williams Dr, Ste 107',
      'Georgetown, TX 78633',
      '(512) 588-7008',
      'Mon–Fri  8:00 AM – 5:00 PM',
    ],
  },
}

// ── Icon helpers ──────────────────────────────────────────────────────────────
const SERVICE_ICONS = {
  stethoscope: Stethoscope,
  'heart-pulse': HeartPulse,
  users: Users,
  video: Video,
  scale: Scale,
  flask: FlaskConical,
  'calendar-check': CalendarCheck,
  'shield-check': ShieldCheck,
  activity: Activity,
}
const CONTACT_ICONS = { 'map-pin': MapPin, phone: Phone, clock: Clock, globe: Globe }

function ServiceIcon({ name }) {
  const Icon = SERVICE_ICONS[name] || Stethoscope
  return <Icon size={22} />
}
function ContactIcon({ name }) {
  const Icon = CONTACT_ICONS[name] || Phone
  return <Icon size={20} />
}
function Stars({ count = 5 }) {
  return (
    <div className="wbh-preview__stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function WellnessBayHealthPreview() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useSEO({
    title: 'Wellness Bay Health — Primary Care Georgetown TX',
    description:
      "Georgetown's trusted primary care for adults & seniors. Same-day appointments, direct doctor access, Medicare accepted. Dr. Mohammad Al Darawsha, MD.",
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/wellness-bay-health',
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="wbh-preview">
      {/* Tracking pixel */}
      <img
        src="https://thatsoftwarehouse.com/api/track/open/wellness-bay-health"
        width="1"
        height="1"
        alt=""
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav className={`wbh-preview__nav${scrolled ? ' wbh-preview__nav--scrolled' : ''}`}>
        <div className="wbh-preview__nav-inner">
          <a href="#" className="wbh-preview__nav-logo">
            Wellness Bay Health
          </a>
          <ul className="wbh-preview__nav-links">
            {previewData.nav.links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</a>
              </li>
            ))}
          </ul>
          <div className="wbh-preview__nav-actions">
            <a href={previewData.phoneHref} className="wbh-preview__nav-phone">
              <Phone size={14} />
              {previewData.phone}
            </a>
            <a
              href={previewData.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="wbh-preview__btn wbh-preview__btn--primary wbh-preview__btn--sm"
            >
              Book Appointment
            </a>
          </div>
          <button
            className="wbh-preview__nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            className="wbh-preview__mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {previewData.nav.links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={previewData.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="wbh-preview__btn wbh-preview__btn--primary"
              style={{ marginTop: '1.5rem', justifyContent: 'center' }}
            >
              Book Appointment
            </a>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="wbh-preview__hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13,31,27,0.85) 0%, rgba(26,107,90,0.65) 100%), url(${previewData.hero.image})`,
        }}
      >
        <div className="wbh-preview__hero-content">
          <Motion.span
            className="wbh-preview__hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.hero.eyebrow}
          </Motion.span>
          <Motion.h1
            className="wbh-preview__hero-h1"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.hero.headline}
          </Motion.h1>
          <Motion.p
            className="wbh-preview__hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.hero.subheadline}
          </Motion.p>
          <Motion.div
            className="wbh-preview__hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={previewData.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="wbh-preview__btn wbh-preview__btn--accent wbh-preview__btn--lg"
            >
              {previewData.hero.cta}
            </a>
            <a
              href={previewData.phoneHref}
              className="wbh-preview__btn wbh-preview__btn--outline wbh-preview__btn--lg"
            >
              {previewData.hero.ctaSecondary}
            </a>
          </Motion.div>
        </div>
        <div className="wbh-preview__hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5FAF8" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section className="wbh-preview__trust-bar" id="about">
        <div className="wbh-preview__shell">
          <Motion.div
            className="wbh-preview__trust-bar-inner"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {previewData.stats.map((stat, i) => (
              <Motion.div key={i} className="wbh-preview__stat" variants={staggerChild}>
                <span className="wbh-preview__stat-value">{stat.value}</span>
                <span className="wbh-preview__stat-label">{stat.label}</span>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <Section className="wbh-preview__about">
        <div className="wbh-preview__shell wbh-preview__about-inner">
          <Motion.div className="wbh-preview__about-text" variants={fadeLeft}>
            <span className="wbh-preview__kicker">{previewData.about.kicker}</span>
            <h2 className="wbh-preview__section-h2">{previewData.about.heading}</h2>
            <div className="wbh-preview__accent-line" />
            <p className="wbh-preview__body-lg">{previewData.about.body}</p>
            <ul className="wbh-preview__feature-list">
              {previewData.about.features.map((f, i) => (
                <li key={i}>
                  <CheckCircle size={18} />
                  {f}
                </li>
              ))}
            </ul>
          </Motion.div>
          <Motion.div className="wbh-preview__about-image-wrap" variants={fadeRight}>
            <img
              src={previewData.about.image}
              alt="Warm primary care clinic interior Georgetown TX"
              className="wbh-preview__about-img"
            />
            <div className="wbh-preview__about-badge">{previewData.about.badge}</div>
          </Motion.div>
        </div>
      </Section>

      {/* ── DOCTOR ───────────────────────────────────────────────────────── */}
      <Section className="wbh-preview__doctor" id="our-team">
        <div className="wbh-preview__shell wbh-preview__doctor-inner">
          <Motion.div className="wbh-preview__doctor-image-wrap" variants={fadeLeft}>
            <img
              src={previewData.doctor.image}
              alt="Dr. Mohammad Al Darawsha MD"
              className="wbh-preview__doctor-img"
            />
          </Motion.div>
          <Motion.div className="wbh-preview__doctor-text" variants={fadeRight}>
            <span className="wbh-preview__kicker wbh-preview__kicker--light">
              {previewData.doctor.kicker}
            </span>
            <h2 className="wbh-preview__section-h2 wbh-preview__section-h2--light">
              {previewData.doctor.heading}
            </h2>
            <div className="wbh-preview__accent-line wbh-preview__accent-line--light" />
            <p className="wbh-preview__body-lg wbh-preview__body-lg--light">
              {previewData.doctor.body}
            </p>
            <ul className="wbh-preview__credentials">
              {previewData.doctor.credentials.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="wbh-preview__team-note">{previewData.doctor.teamNote}</div>
          </Motion.div>
        </div>
      </Section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <Section className="wbh-preview__services" id="services">
        <div className="wbh-preview__shell">
          <Motion.div className="wbh-preview__section-header" variants={fadeIn}>
            <span className="wbh-preview__kicker">What We Treat</span>
            <h2 className="wbh-preview__section-h2">
              Comprehensive Care for Every Stage of Life
            </h2>
            <p className="wbh-preview__section-body">
              From prevention to chronic disease management — all under one roof in Georgetown.
            </p>
          </Motion.div>
          <Motion.div
            className="wbh-preview__services-grid"
            variants={staggerContainer}
          >
            {previewData.services.map((svc, i) => (
              <Motion.div key={i} className="wbh-preview__service-card" variants={staggerChild}>
                <div className="wbh-preview__service-icon">
                  <ServiceIcon name={svc.icon} />
                </div>
                <h3 className="wbh-preview__service-title">{svc.title}</h3>
                <p className="wbh-preview__service-desc">{svc.description}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <Section className="wbh-preview__why-us">
        <div className="wbh-preview__shell wbh-preview__why-us-inner">
          <Motion.div className="wbh-preview__why-us-text" variants={fadeLeft}>
            <span className="wbh-preview__kicker">{previewData.whyUs.kicker}</span>
            <h2 className="wbh-preview__section-h2">{previewData.whyUs.heading}</h2>
            <div className="wbh-preview__accent-line" />
            <ul className="wbh-preview__reason-list">
              {previewData.whyUs.reasons.map((r, i) => (
                <li key={i}>
                  <strong>{r.title}</strong>
                  <p>{r.body}</p>
                </li>
              ))}
            </ul>
          </Motion.div>
          <Motion.div className="wbh-preview__why-us-image-wrap" variants={fadeRight}>
            <img
              src={previewData.whyUs.image}
              alt="Doctor patient conversation warm office"
              className="wbh-preview__why-us-img"
            />
          </Motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <Section className="wbh-preview__testimonials">
        <div className="wbh-preview__shell">
          <Motion.div className="wbh-preview__section-header" variants={fadeIn}>
            <span className="wbh-preview__kicker wbh-preview__kicker--light">
              Patient Stories
            </span>
            <h2 className="wbh-preview__section-h2 wbh-preview__section-h2--light">
              What Our Patients Are Saying
            </h2>
            <div className="wbh-preview__rating-bar">
              <Stars count={5} />
              <span className="wbh-preview__rating-label">4.9 · 125+ Reviews on Google</span>
            </div>
          </Motion.div>
          <Motion.div
            className="wbh-preview__reviews-grid"
            variants={staggerContainer}
          >
            {previewData.testimonials.map((t, i) => (
              <Motion.div key={i} className="wbh-preview__review-card" variants={staggerChild}>
                <Stars count={t.stars} />
                <p className="wbh-preview__review-quote">"{t.quote}"</p>
                <div className="wbh-preview__review-author">
                  <strong>{t.author}</strong>
                  <span>{t.location}</span>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <section className="wbh-preview__cta-band">
        <Motion.div
          className="wbh-preview__cta-band-inner"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="wbh-preview__cta-band-kicker">Ready to Get Started?</span>
          <h2 className="wbh-preview__cta-band-h2">Same-Day Appointments Available Now</h2>
          <p className="wbh-preview__cta-band-body">
            Call us at {previewData.phone} or request your appointment online.
            <br />
            We're accepting new patients in Georgetown, TX.
          </p>
          <div className="wbh-preview__cta-band-btns">
            <a
              href={previewData.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="wbh-preview__btn wbh-preview__btn--white wbh-preview__btn--lg"
            >
              Book Your Appointment
            </a>
            <a
              href={previewData.phoneHref}
              className="wbh-preview__btn wbh-preview__btn--outline-white wbh-preview__btn--lg"
            >
              {previewData.phone}
            </a>
          </div>
        </Motion.div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <Section className="wbh-preview__contact" id="contact">
        <div className="wbh-preview__shell wbh-preview__contact-inner">
          <Motion.div className="wbh-preview__contact-text" variants={fadeLeft}>
            <span className="wbh-preview__kicker">{previewData.contact.kicker}</span>
            <h2 className="wbh-preview__section-h2">{previewData.contact.heading}</h2>
            <div className="wbh-preview__accent-line" />
            <ul className="wbh-preview__contact-details">
              {previewData.contact.details.map((d, i) => (
                <li key={i}>
                  <div className="wbh-preview__contact-icon">
                    <ContactIcon name={d.icon} />
                  </div>
                  <div>
                    <span className="wbh-preview__contact-label">{d.label}</span>
                    <span className="wbh-preview__contact-value">{d.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Motion.div>
          <Motion.div className="wbh-preview__contact-map" variants={fadeRight}>
            <img
              src={previewData.contact.mapImage}
              alt="Wellness Bay Health location Georgetown TX"
              className="wbh-preview__contact-map-img"
            />
            <div className="wbh-preview__contact-map-card">
              <MapPin size={16} />
              <span>{previewData.addressOneline}</span>
            </div>
          </Motion.div>
        </div>
      </Section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="wbh-preview__footer">
        <div className="wbh-preview__shell wbh-preview__footer-top">
          <div className="wbh-preview__footer-brand">
            <span className="wbh-preview__footer-logo">Wellness Bay Health</span>
            <span className="wbh-preview__footer-tagline">
              Georgetown, TX · Accepting New Patients
            </span>
          </div>
          <div className="wbh-preview__footer-links">
            <span className="wbh-preview__footer-col-heading">Quick Links</span>
            <ul>
              {previewData.footer.links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="wbh-preview__footer-contact-col">
            <span className="wbh-preview__footer-col-heading">Contact</span>
            <ul>
              {previewData.footer.contactItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wbh-preview__footer-divider" />
        <div className="wbh-preview__shell wbh-preview__footer-bottom">
          <span>© 2025 Wellness Bay Health · All rights reserved</span>
          <span>
            Website preview by{' '}
            <a href="https://thatsoftwarehouse.com" target="_blank" rel="noreferrer">
              That Software House
            </a>
          </span>
        </div>
      </footer>

      {/* ── MOBILE RAIL ──────────────────────────────────────────────────── */}
      <div className="wbh-preview__mobile-rail" role="navigation" aria-label="Quick actions">
        <a href={previewData.phoneHref} className="wbh-preview__rail-btn wbh-preview__rail-btn--call">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <a
          href={previewData.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="wbh-preview__rail-btn wbh-preview__rail-btn--book"
        >
          <CalendarCheck size={18} />
          <span>Book</span>
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}
