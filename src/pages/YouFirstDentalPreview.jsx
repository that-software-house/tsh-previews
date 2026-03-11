import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  Bed,
  BrainCircuit,
  CalendarDays,
  Clock3,
  Crown,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
  Youtube,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './YouFirstDentalPreview.css'

const heroBg = 'https://youfirstdental.ca/wp-content/uploads/2025/01/dentist-airdrie-dental-clinic.jpg'
const heroDoctor = 'assets/doctors/female2.png'
const officeImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80'
const smileImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80'
const previewData = {
  businessName: 'You First Dental',
  tagline: 'Passionate about teeth, crazy about YOU',
  phoneDisplay: '(403) 948-3342',
  phoneHref: 'tel:+14039483342',
  address: '130 – 52 Gateway Dr NE',
  city: 'Airdrie, AB T4B 0J6',
  mapsUrl: 'https://g.page/r/CcTR2WuJk5cFEBA',
  heroHeadline: `Airdrie's Friendliest Dental Family.`,
  heroSubheadline:
    'Caring for Airdrie families for 20+ years — general, cosmetic, implants, and Invisalign all under one warm, welcoming roof.',
  heroCta: 'Book an Appointment',
  secondaryCta: 'Explore Services',
  stats: [
    { value: '20+', label: 'Years in Airdrie' },
    { value: '3', label: 'Caring Dentists' },
    { value: '5.0★', label: 'Google Rating' },
    { value: 'Free', label: 'Implant & Invisalign Consults' },
  ],
  services: [
    {
      title: 'Family Dentistry',
      desc: 'Cleanings, fillings, root canals, and gum care — trusted care for every age.',
      icon: Heart,
      color: 'rose',
    },
    {
      title: 'Dental Implants',
      desc: 'Permanent, natural-looking tooth replacement. Free consultations included.',
      icon: Crown,
      color: 'amber',
    },
    {
      title: 'Invisalign',
      desc: 'Clear aligners for teens and adults — results up to 5 months faster than braces.',
      icon: Smile,
      color: 'teal',
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Veneers, crowns, whitening, and full smile makeovers tailored to you.',
      icon: Sparkles,
      color: 'rose',
    },
    {
      title: 'TMJ & Pain Relief',
      desc: 'Expert treatment for jaw pain, headaches, and migraines linked to bite issues.',
      icon: BrainCircuit,
      color: 'amber',
    },
    {
      title: 'Sleep Apnea Therapy',
      desc: 'Custom dental appliances — a comfortable, CPAP-free solution for better sleep.',
      icon: Bed,
      color: 'teal',
    },
    {
      title: 'Sedation Dentistry',
      desc: 'Nervous about the dentist? Relax comfortably — we make it easy.',
      icon: ShieldCheck,
      color: 'rose',
    },
    {
      title: 'Emergency Care',
      desc: "Toothache? Broken tooth? Call us — we'll get you in fast.",
      icon: Zap,
      color: 'amber',
    },
  ],
  differentiators: [
    {
      icon: BadgeCheck,
      title: '20+ Years Rooted in Airdrie',
      desc: 'Dr. Jennifer Buchanan founded You First Dental to serve this community — and we\'re still here, still passionate.',
    },
    {
      icon: Heart,
      title: 'Everyone Is Important',
      desc: 'Our name says it all. Every patient — new or returning — gets the same genuine, unhurried care.',
    },
    {
      icon: Users,
      title: 'A Team That Loves What They Do',
      desc: 'Our hygienists, assistants, and front desk team aren\'t just staff — they\'re neighbours who love their work.',
    },
    {
      icon: Shield,
      title: 'Flexible Payment & Financing',
      desc: 'Treatment Now, Pay Later options and free consultations for implants and Invisalign — no barriers to your best smile.',
    },
  ],
  doctors: [
    {
      name: 'Dr. Jennifer Buchanan',
      title: 'Owner & Dentist',
      image: heroDoctor,
      tag: 'Founder · 20+ Yrs',
      bio: 'Dr. Buchanan founded You First Dental with one mission: to make every patient feel genuinely cared for. After more than two decades in Airdrie, her warmth and precision are what patients keep coming back for.',
    },
    {
      name: 'Dr. Darnell Dickson',
      title: 'Dentist',
      image: 'assets/doctors/male1.png',
      tag: 'General & Cosmetic',
      bio: 'Dr. Dickson brings a calm, thorough approach to every appointment. Patients appreciate his clear communication and his ability to make even the most anxious visitors feel at ease.',
    },
    {
      name: 'Dr. Manon Foidart',
      title: 'Dentist',
      image: 'assets/doctors/female1.png',
      tag: 'Family & Preventive',
      bio: 'Dr. Foidart is passionate about preventive care and helping patients build lifelong oral health habits. She has a special way of connecting with kids and nervous adults alike.',
    },
  ],
  testimonials: [
    {
      text: "We've been coming to You First Dental since we moved to Airdrie eight years ago, and I wouldn't go anywhere else. The whole team remembers us by name — it really does feel like family.",
      author: 'Sandra M.',
      role: 'Airdrie Patient',
      rating: 5,
    },
    {
      text: 'I was terrified of implants but came in for the free consultation and Dr. Buchanan put every fear to rest. Two months later I have a permanent tooth that looks completely natural. Incredible.',
      author: 'Kevin R.',
      role: 'Implant Patient',
      rating: 5,
    },
    {
      text: 'My Invisalign treatment was faster than I expected and the team checked in every step of the way. I smile so much more confidently now. You First Dental is the real deal.',
      author: 'Taryn L.',
      role: 'Invisalign Patient',
      rating: 5,
    },
  ],
  hours: [
    { day: 'Monday – Wednesday', time: '9:00 AM – 4:00 PM' },
    { day: 'Thursday', time: '9:00 AM – 5:00 PM' },
    { day: 'Friday', time: '9:00 AM – 2:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/YouFirstDentalAirdrie',
    instagram: 'https://www.instagram.com/youfirstdental/',
    youtube: 'https://www.youtube.com/channel/UCfHMJxngdksZnHkYTU2yA8g/featured',
  },
}

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } }
const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Section({ children, className, id }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      {children}
    </Motion.section>
  )
}

function StarRow({ count = 5 }) {
  return (
    <div className="yfd-preview__stars">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} fill="currentColor" />
      ))}
    </div>
  )
}

function YouFirstDentalPreview() {
  const [navScrolled, setNavScrolled] = useState(false)

  useSEO({
    title: 'You First Dental Airdrie Preview | That Software House',
    description:
      "A modern redesign preview for You First Dental — Airdrie's friendliest family dental practice.",
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/you-first-dental',
    openGraph: {
      title: 'You First Dental Airdrie Preview',
      description: 'Preview concept for You First Dental — passionate about teeth, crazy about YOU.',
      url: 'https://preview.thatsoftwarehouse.com/you-first-dental',
      image: heroDoctor,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="yfd-preview" id="top">

      {/* ── TRACKING PIXEL ── */}
      <img
        src="https://thatsoftwarehouse.com/api/track/open/you-first-dental"
        width="1"
        height="1"
        alt=""
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />

      {/* ── NAV ── */}
      <header className={`yfd-preview__nav ${navScrolled ? 'yfd-preview__nav--scrolled' : ''}`}>
        <div className="yfd-preview__shell yfd-preview__nav-inner">
          <a href="#top" className="yfd-preview__brand">
            <span className="yfd-preview__brand-icon">
              <Smile size={16} />
            </span>
            <span className="yfd-preview__brand-name">You First Dental</span>
          </a>
          <nav className="yfd-preview__nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="yfd-preview__nav-cta">
            Book Now <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="yfd-preview__hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="yfd-preview__hero-overlay" aria-hidden="true" />

        <div className="yfd-preview__hero-inner">
          <Motion.span
            className="yfd-preview__eyebrow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Airdrie, Alberta
          </Motion.span>

          <Motion.h1
            className="yfd-preview__hero-headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Airdrie's Friendliest <em>Dental Family.</em>
          </Motion.h1>

          <Motion.p
            className="yfd-preview__hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroSubheadline}
          </Motion.p>

          <Motion.div
            className="yfd-preview__hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="yfd-preview__btn yfd-preview__btn--primary">
              {previewData.heroCta}
            </a>
            <a href="#services" className="yfd-preview__btn yfd-preview__btn--outline-light">
              {previewData.secondaryCta}
            </a>
          </Motion.div>

          <Motion.div
            className="yfd-preview__hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.46 }}
          >
            <StarRow />
            <span>5.0 · Airdrie's Top-Rated Dental Practice</span>
          </Motion.div>

          {/* Trust pills */}
          <Motion.div
            className="yfd-preview__hero-pills"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
          >
            <span className="yfd-preview__pill">
              <BadgeCheck size={12} /> Free Implant Consults
            </span>
            <span className="yfd-preview__pill">
              <CalendarDays size={12} /> New Patients Welcome
            </span>
            <span className="yfd-preview__pill">
              <Shield size={12} /> Flexible Financing
            </span>
          </Motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="yfd-preview__stats-bar">
        <div className="yfd-preview__shell">
          <Motion.div
            className="yfd-preview__stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {previewData.stats.map((s, i) => (
              <Motion.div key={s.label} className="yfd-preview__stat" variants={staggerChild}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                {i < previewData.stats.length - 1 && <div className="yfd-preview__stat-sep" />}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <Section className="yfd-preview__services" id="services">
        <div className="yfd-preview__shell">
          <div className="yfd-preview__services-header">
            <span className="yfd-preview__kicker">What We Offer</span>
            <h2 className="yfd-preview__section-heading">
              Complete Dental Care for <em>the Whole Family</em>
            </h2>
            <p className="yfd-preview__section-body" style={{ margin: '0 auto', textAlign: 'center' }}>
              From your child's first cleaning to a full smile transformation — everything you need, all in one place.
            </p>
          </div>
          <Motion.div
            className="yfd-preview__services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {previewData.services.map((s) => (
              <Motion.div
                key={s.title}
                className={`yfd-preview__service-card yfd-preview__service-card--${s.color}`}
                variants={staggerChild}
              >
                <div className="yfd-preview__service-icon">
                  <s.icon size={20} />
                </div>
                <h3 className="yfd-preview__service-title">{s.title}</h3>
                <p className="yfd-preview__service-desc">{s.desc}</p>
                <a href="#contact" className="yfd-preview__service-link">
                  Learn More <ArrowUpRight size={13} />
                </a>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── DIFFERENTIATORS (dark panel) ── */}
      <section className="yfd-preview__dark-panel" id="about">
        <div className="yfd-preview__shell">
          <div className="yfd-preview__dark-panel-inner">
            {/* Left: image */}
            <Motion.div
              className="yfd-preview__dark-panel-image"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={officeImage} alt="You First Dental office" />
              <div className="yfd-preview__dark-panel-img-badge">
                <Smile size={18} />
                <span>"At You First Dental,<br />everyone is important."</span>
              </div>
            </Motion.div>

            {/* Right: content */}
            <div className="yfd-preview__dark-panel-content">
              <span className="yfd-preview__kicker yfd-preview__kicker--light">Our Difference</span>
              <h2 className="yfd-preview__dark-panel-heading">
                Dentistry That Puts <em>People First</em>
              </h2>
              <p className="yfd-preview__dark-panel-sub">
                We believe going to the dentist should never feel intimidating. We're a fun, positive,
                warm-hearted team — and every patient who walks through our door matters to us.
              </p>
              <Motion.div
                className="yfd-preview__diff-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {previewData.differentiators.map((d) => (
                  <Motion.div key={d.title} className="yfd-preview__diff-item" variants={staggerChild}>
                    <div className="yfd-preview__diff-icon">
                      <d.icon size={17} />
                    </div>
                    <div>
                      <h4 className="yfd-preview__diff-title">{d.title}</h4>
                      <p className="yfd-preview__diff-desc">{d.desc}</p>
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <Section className="yfd-preview__team" id="team">
        <div className="yfd-preview__shell">
          <div className="yfd-preview__team-header">
            <span className="yfd-preview__kicker">Meet the Doctors</span>
            <h2 className="yfd-preview__section-heading">Three Dentists, One Shared Mission</h2>
            <p className="yfd-preview__section-body" style={{ margin: '0 auto', textAlign: 'center' }}>
              Our doctors bring decades of combined experience and a genuine love for what they do. You're in great hands.
            </p>
          </div>
          <Motion.div
            className="yfd-preview__team-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {previewData.doctors.map((doc) => (
              <Motion.div key={doc.name} className="yfd-preview__doctor-card" variants={staggerChild}>
                <div className="yfd-preview__doctor-photo">
                  <img src={doc.image} alt={doc.name} />
                  <span className="yfd-preview__doctor-tag">{doc.tag}</span>
                </div>
                <div className="yfd-preview__doctor-info">
                  <p className="yfd-preview__doctor-role">{doc.title}</p>
                  <h3 className="yfd-preview__doctor-name">{doc.name}</h3>
                  <p className="yfd-preview__doctor-bio">{doc.bio}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="yfd-preview__testimonials" id="reviews">
        <div className="yfd-preview__shell">
          <div className="yfd-preview__testimonials-header">
            <span className="yfd-preview__kicker">Patient Stories</span>
            <h2 className="yfd-preview__section-heading">What Airdrie Families Say</h2>
          </div>
          <Motion.div
            className="yfd-preview__testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {previewData.testimonials.map((t) => (
              <Motion.div
                key={t.author}
                className="yfd-preview__testimonial-card"
                variants={staggerChild}
              >
                <StarRow count={t.rating} />
                <blockquote className="yfd-preview__testimonial-text">"{t.text}"</blockquote>
                <div className="yfd-preview__testimonial-author">
                  <span className="yfd-preview__testimonial-name">{t.author}</span>
                  <span className="yfd-preview__testimonial-role">{t.role}</span>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section className="yfd-preview__cta-banner">
        <div className="yfd-preview__shell yfd-preview__cta-inner">
          <div className="yfd-preview__cta-image">
            <img src={smileImage} alt="Confident smile" />
          </div>
          <Motion.div
            className="yfd-preview__cta-content"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="yfd-preview__kicker yfd-preview__kicker--accent">Ready to smile more?</span>
            <h2 className="yfd-preview__cta-headline">
              Your Best Smile Starts Here.
            </h2>
            <p className="yfd-preview__cta-sub">
              New patients always welcome. Free consultations for implants and Invisalign.
              Flexible financing — Treatment Now, Pay Later.
            </p>
            <div className="yfd-preview__cta-actions">
              <a href={previewData.phoneHref} className="yfd-preview__btn yfd-preview__btn--white">
                <Phone size={15} /> {previewData.phoneDisplay}
              </a>
              <a href="#contact" className="yfd-preview__btn yfd-preview__btn--accent">
                Book Online
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="yfd-preview__contact" id="contact">
        <div className="yfd-preview__shell yfd-preview__contact-inner">
          <div className="yfd-preview__contact-info">
            <span className="yfd-preview__kicker">Find Us</span>
            <h2 className="yfd-preview__section-heading">Visit Us in Airdrie</h2>

            <div className="yfd-preview__contact-details">
              <div className="yfd-preview__contact-item">
                <MapPin size={16} />
                <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                  {previewData.address}
                  <br />
                  {previewData.city}
                </a>
              </div>
              <div className="yfd-preview__contact-item">
                <Phone size={16} />
                <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              </div>
              <div className="yfd-preview__contact-item">
                <Clock3 size={16} />
                <div className="yfd-preview__hours">
                  {previewData.hours.map((h) => (
                    <p key={h.day}>
                      <strong>{h.day}:</strong> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="yfd-preview__contact-social">
              <a
                href={previewData.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href={previewData.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href={previewData.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          <div className="yfd-preview__contact-card">
            <h3>Request an Appointment</h3>
            <p>Call us or fill this out — we'll confirm within 24 hours.</p>
            <div className="yfd-preview__form">
              <input type="text" placeholder="Your Name" aria-label="Name" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone" />
              <input type="text" placeholder="Service Interested In" aria-label="Service" />
              <a
                href={previewData.phoneHref}
                className="yfd-preview__btn yfd-preview__btn--primary yfd-preview__btn--full"
              >
                Request Appointment
              </a>
            </div>
            <p className="yfd-preview__contact-card-note">
              Free consultations available for Implants & Invisalign
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="yfd-preview__footer">
        <div className="yfd-preview__shell yfd-preview__footer-inner">
          <div className="yfd-preview__footer-brand">
            <div className="yfd-preview__footer-logo">
              <Smile size={18} />
              <span>You First Dental</span>
            </div>
            <p className="yfd-preview__footer-tagline">{previewData.tagline}</p>
            <div className="yfd-preview__footer-social">
              <a
                href={previewData.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href={previewData.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href={previewData.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          <div className="yfd-preview__footer-cols">
            <div className="yfd-preview__footer-col">
              <h4>Practice</h4>
              <a href="#about">About Us</a>
              <a href="#team">Our Dentists</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="yfd-preview__footer-col">
              <h4>Services</h4>
              <a href="#services">Family Dentistry</a>
              <a href="#services">Dental Implants</a>
              <a href="#services">Invisalign</a>
              <a href="#services">Cosmetic Dentistry</a>
              <a href="#services">Sleep Apnea</a>
            </div>
            <div className="yfd-preview__footer-col">
              <h4>Visit Us</h4>
              <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                {previewData.address}
              </a>
              <p>{previewData.city}</p>
            </div>
          </div>
        </div>
        <div className="yfd-preview__footer-bottom">
          <div className="yfd-preview__shell yfd-preview__footer-bottom-inner">
            <p>© 2025 You First Dental. All rights reserved.</p>
            <div className="yfd-preview__footer-legal">
              <a href="/">Privacy Policy</a>
              <a href="https://thatsoftwarehouse.com" target="_blank" rel="noreferrer">
                Preview by That Software House
              </a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCTA />

      {/* ── MOBILE RAIL ── */}
      <div className="yfd-preview__mobile-rail">
        <a
          href={previewData.phoneHref}
          className="yfd-preview__rail-btn yfd-preview__rail-btn--ghost"
        >
          <Phone size={15} /> Call
        </a>
        <a href="#contact" className="yfd-preview__rail-btn yfd-preview__rail-btn--primary">
          Book Appointment
        </a>
      </div>
    </main>
  )
}

export default YouFirstDentalPreview
