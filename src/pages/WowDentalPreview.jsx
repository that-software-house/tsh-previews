import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  Baby,
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
  Stethoscope,
  Users,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './WowDentalPreview.css'

const doctorImage1 =
  'assets/doctors/female2.png'
const doctorImage2 =
  'assets/doctors/female2.png'
const heroDoctor =
  'assets/doctors/male2.png'
const officeImage =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80'
const smileImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80'

const previewData = {
  businessName: 'WOW Dental',
  tagline: 'Southern Dallas Dentistry — Veneers, Implants & Family Care',
  phoneDisplay: '(972) 709-4867',
  phoneHref: 'tel:+19727094867',
  address: '3704 W Camp Wisdom Rd, Suite 120',
  city: 'Dallas, TX 75237',
  mapsUrl: 'https://maps.google.com/?q=3704+W+Camp+Wisdom+Rd+Suite+120+Dallas+TX+75237',
  heroHeadline: "Dallas's Most Exciting Dental Experience.",
  heroSubheadline:
    'From your first cleaning to a full smile transformation — WOW Dental delivers exceptional care that puts the joy back in your smile.',
  heroCta: 'Book Online',
  secondaryCta: 'See Our Services',
  stats: [
    { value: '15+', label: 'Years of Experience' },
    { value: '5,000+', label: 'Smiles Transformed' },
    { value: '5.0★', label: 'Google Rating' },
    { value: '2', label: 'Doctors on Staff' },
  ],
  services: [
    {
      title: 'Dental Implants',
      desc: 'Permanent tooth replacement that looks and feels completely natural.',
      icon: Crown,
      color: 'violet',
    },
    {
      title: 'Porcelain Veneers',
      desc: 'Transform your smile with custom, ultra-thin porcelain shells.',
      icon: Sparkles,
      color: 'emerald',
    },
    {
      title: 'Invisalign / ClearCorrect',
      desc: 'Straighten your teeth discreetly with clear aligner therapy.',
      icon: Smile,
      color: 'amber',
    },
    {
      title: 'Teeth Whitening',
      desc: 'Professional-grade whitening for a brilliantly brighter smile.',
      icon: Star,
      color: 'rose',
    },
    {
      title: 'General & Preventive',
      desc: 'Cleanings, exams, X-rays, and sealants for lifelong oral health.',
      icon: Shield,
      color: 'sky',
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Gentle, fun dental care for children from first tooth to teen years.',
      icon: Baby,
      color: 'violet',
    },
    {
      title: 'Emergency Dentistry',
      desc: 'Same-day relief for toothaches, broken teeth, and dental trauma.',
      icon: Zap,
      color: 'emerald',
    },
    {
      title: 'Componeers',
      desc: 'Pre-fabricated composite veneers — a fast, affordable smile upgrade.',
      icon: Sparkles,
      color: 'amber',
    },
  ],
  whyUs: [
    {
      icon: BadgeCheck,
      title: 'Baylor-Trained Dentists',
      desc: 'Dr. Stafford is a Baylor College of Dentistry graduate with 15+ years serving Dallas.',
    },
    {
      icon: Heart,
      title: 'Truly Welcoming Office',
      desc: 'Our team goes above and beyond to make every patient feel at home — no judgment, ever.',
    },
    {
      icon: ShieldCheck,
      title: 'Full Spectrum of Care',
      desc: 'From baby teeth to dental implants, we treat the whole family under one roof.',
    },
    {
      icon: Stethoscope,
      title: 'Modern Technology',
      desc: 'Digital X-rays, same-day restorations, and the latest in cosmetic techniques.',
    },
  ],
  doctors: [
    {
      name: 'Dr. Saosat Stafford',
      title: 'Founder & Lead Dentist, DDS',
      image: doctorImage1,
      tag: 'General & Cosmetic',
      bio: 'A Baylor College of Dentistry graduate, Dr. Stafford has been passionately serving the Dallas/Fort Worth community since 2008. Known for her warmth, precision, and commitment to making dentistry a positive experience for every patient.',
    },
    {
      name: 'Dr. Jackson-Smith',
      title: 'Associate Dentist, DDS',
      image: doctorImage2,
      tag: 'Family & Pediatric',
      bio: 'Dr. Jackson-Smith brings a gentle, kid-friendly approach to every appointment. Dedicated to building healthy habits early, she makes dental visits something children actually look forward to.',
    },
  ],
  testimonials: [
    {
      text: "WOW Dental truly lives up to its name. I came in for veneers and left with the most stunning smile of my life. Dr. Stafford's attention to detail is incredible — I can't stop showing off my teeth!",
      author: 'Tamika J.',
      role: 'Dallas Patient',
      rating: 5,
    },
    {
      text: "I've been bringing my whole family here for three years and the experience is always exceptional. The staff remembers us by name, the office is beautiful, and my kids actually look forward to their cleanings.",
      author: 'Marcus W.',
      role: 'South Dallas Patient',
      rating: 5,
    },
    {
      text: "Had a dental emergency on a Friday morning and they got me in within the hour. Dr. Stafford was calm, efficient, and compassionate. This is what a dental practice should feel like.",
      author: 'Priscilla R.',
      role: 'DeSoto Patient',
      rating: 5,
    },
  ],
  hours: [
    { day: 'Monday', time: '11:00 AM – 7:00 PM' },
    { day: 'Tuesday', time: '1:00 PM – 5:00 PM' },
    { day: 'Wednesday', time: '9:00 AM – 5:00 PM' },
    { day: 'Thursday', time: '1:00 PM – 5:00 PM' },
    { day: 'Friday', time: '7:00 AM – 1:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  socialLinks: {
    facebook: 'https://facebook.com/mywowdental',
    instagram: 'https://instagram.com/mywowdental',
  },
}

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function Section({ children, className, id }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </Motion.section>
  )
}

function StarRow({ count = 5 }) {
  return (
    <div className="wow-preview__stars">
      {[...Array(count)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
    </div>
  )
}

function WowDentalPreview() {
  const [navScrolled, setNavScrolled] = useState(false)

  useSEO({
    title: 'WOW Dental Preview | That Software House',
    description:
      'A modern redesign preview for WOW Dental — Southern Dallas dentistry, veneers, implants, and family care.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/wow-dental',
    openGraph: {
      title: 'WOW Dental Dallas Preview',
      description: 'Preview concept for WOW Dental — the most exciting dental experience in Southern Dallas.',
      url: 'https://preview.thatsoftwarehouse.com/wow-dental',
      image: heroDoctor,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="wow-preview" id="top">

      {/* ── NAV ── */}
      <header className={`wow-preview__nav ${navScrolled ? 'wow-preview__nav--scrolled' : ''}`}>
        <div className="wow-preview__shell wow-preview__nav-inner">
          <a href="#top" className="wow-preview__brand">
            <span className="wow-preview__brand-icon">
              <Smile size={16} />
            </span>
            <span className="wow-preview__brand-name">WOW Dental</span>
          </a>
          <nav className="wow-preview__nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Our Doctors</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="wow-preview__nav-cta">
            Get Started <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="wow-preview__hero-section">
        <div className="wow-preview__shell">
          <div className="wow-preview__hero-card">
            {/* Left text */}
            <div className="wow-preview__hero-text">
              <Motion.span
                className="wow-preview__eyebrow"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Southern Dallas, TX
              </Motion.span>

              <Motion.h1
                className="wow-preview__hero-headline"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Dallas's Most <em>Exciting</em><br />Dental Experience.
              </Motion.h1>

              <Motion.p
                className="wow-preview__hero-sub"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                {previewData.heroSubheadline}
              </Motion.p>

              <Motion.div
                className="wow-preview__hero-actions"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                <a href="#contact" className="wow-preview__btn wow-preview__btn--primary">
                  {previewData.heroCta}
                </a>
                <a href="#services" className="wow-preview__btn wow-preview__btn--outline">
                  {previewData.secondaryCta}
                </a>
              </Motion.div>

              <Motion.div
                className="wow-preview__hero-proof"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.48 }}
              >
                <StarRow />
                <span>5.0 · 100+ Google Reviews</span>
              </Motion.div>
            </div>

            {/* Doctor photo */}
            <Motion.div
              className="wow-preview__hero-photo"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={heroDoctor} alt="WOW Dental doctor" />

              {/* Floating badge top-right */}
              <div className="wow-preview__hero-badge wow-preview__hero-badge--top">
                <span className="wow-preview__badge-icon">
                  <BadgeCheck size={16} />
                </span>
                <div>
                  <strong>Top Rated</strong>
                  <span>Southern Dallas</span>
                </div>
              </div>

              {/* Floating badge bottom-left */}
              <div className="wow-preview__hero-badge wow-preview__hero-badge--bottom">
                <span className="wow-preview__badge-smile">
                  <Smile size={16} />
                </span>
                <div>
                  <strong>WOW Dental</strong>
                  <span>Dallas, TX</span>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="wow-preview__stats-bar">
        <div className="wow-preview__shell">
          <Motion.div
            className="wow-preview__stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {previewData.stats.map((s, i) => (
              <Motion.div key={s.label} className="wow-preview__stat" variants={staggerChild}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                {i < previewData.stats.length - 1 && <div className="wow-preview__stat-sep" />}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <Section className="wow-preview__services" id="services">
        <div className="wow-preview__shell">
          <div className="wow-preview__services-header">
            <span className="wow-preview__kicker">What We Offer</span>
            <h2 className="wow-preview__section-heading">
              Trusted Dental Services for <em>the Whole Family</em>
            </h2>
          </div>
          <Motion.div
            className="wow-preview__services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {previewData.services.map((s) => (
              <Motion.div
                key={s.title}
                className={`wow-preview__service-card wow-preview__service-card--${s.color}`}
                variants={staggerChild}
              >
                <div className="wow-preview__service-icon">
                  <s.icon size={22} />
                </div>
                <h3 className="wow-preview__service-title">{s.title}</h3>
                <p className="wow-preview__service-desc">{s.desc}</p>
                <a href="#contact" className="wow-preview__service-link">
                  Book Now <ArrowUpRight size={14} />
                </a>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── ABOUT / WHY US ── */}
      <Section className="wow-preview__about" id="about">
        <div className="wow-preview__shell wow-preview__about-inner">
          <div className="wow-preview__about-images">
            <div className="wow-preview__about-img-main">
              <img src={officeImage} alt="WOW Dental office" />
            </div>
            <div className="wow-preview__about-img-secondary">
              <img src={smileImage} alt="Happy patient" />
            </div>
          </div>

          <div className="wow-preview__about-content">
            <span className="wow-preview__kicker">Why WOW?</span>
            <h2 className="wow-preview__section-heading">
              Dentistry That Makes You Say <em>"WOW."</em>
            </h2>
            <p className="wow-preview__section-body">
              At WOW Dental, we believe great dentistry should feel great too. Our Southern Dallas
              practice is built on genuine care, top-tier training, and a commitment to making
              every visit more comfortable than the last.
            </p>
            <Motion.div
              className="wow-preview__why-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {previewData.whyUs.map((w) => (
                <Motion.div key={w.title} className="wow-preview__why-item" variants={staggerChild}>
                  <div className="wow-preview__why-icon">
                    <w.icon size={18} />
                  </div>
                  <div>
                    <h4 className="wow-preview__why-title">{w.title}</h4>
                    <p className="wow-preview__why-desc">{w.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>
      </Section>

      {/* ── DOCTORS ── */}
      <Section className="wow-preview__team" id="team">
        <div className="wow-preview__shell">
          <div className="wow-preview__team-header">
            <span className="wow-preview__kicker">Our Doctors</span>
            <h2 className="wow-preview__section-heading">Qualified, Caring Dentists</h2>
            <p className="wow-preview__section-body">
              Our team of board-certified dentists brings expertise, warmth, and a genuine passion
              for transforming smiles across the Dallas community.
            </p>
          </div>
          <Motion.div
            className="wow-preview__team-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {previewData.doctors.map((doc) => (
              <Motion.div key={doc.name} className="wow-preview__doctor-card" variants={staggerChild}>
                <div className="wow-preview__doctor-photo">
                  <img src={doc.image} alt={doc.name} />
                  <span className="wow-preview__doctor-tag">{doc.tag}</span>
                </div>
                <div className="wow-preview__doctor-info">
                  <p className="wow-preview__doctor-role">{doc.title}</p>
                  <h3 className="wow-preview__doctor-name">{doc.name}</h3>
                  <p className="wow-preview__doctor-bio">{doc.bio}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="wow-preview__testimonials" id="reviews">
        <div className="wow-preview__shell">
          <div className="wow-preview__testimonials-header">
            <span className="wow-preview__kicker">Testimonials</span>
            <h2 className="wow-preview__section-heading">What People Say About Us</h2>
          </div>
          <Motion.div
            className="wow-preview__testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {previewData.testimonials.map((t) => (
              <Motion.div key={t.author} className="wow-preview__testimonial-card" variants={staggerChild}>
                <StarRow count={t.rating} />
                <blockquote className="wow-preview__testimonial-text">"{t.text}"</blockquote>
                <div className="wow-preview__testimonial-author">
                  <span className="wow-preview__testimonial-name">{t.author}</span>
                  <span className="wow-preview__testimonial-role">{t.role}</span>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section className="wow-preview__cta-banner">
        <div className="wow-preview__shell wow-preview__cta-inner">
          <Motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="wow-preview__kicker wow-preview__kicker--light">Ready for Your WOW Moment?</span>
            <h2 className="wow-preview__cta-headline">
              Your Dream Smile Is One Appointment Away.
            </h2>
            <p className="wow-preview__cta-sub">
              New patients welcome. We accept most insurance plans and offer flexible payment options
              through CareCredit and in-house financing.
            </p>
            <div className="wow-preview__cta-actions">
              <a href={previewData.phoneHref} className="wow-preview__btn wow-preview__btn--white">
                <Phone size={15} /> {previewData.phoneDisplay}
              </a>
              <a href="#contact" className="wow-preview__btn wow-preview__btn--accent">
                Book Online
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="wow-preview__contact" id="contact">
        <div className="wow-preview__shell wow-preview__contact-inner">
          <div className="wow-preview__contact-info">
            <span className="wow-preview__kicker">Find Us</span>
            <h2 className="wow-preview__section-heading">Visit WOW Dental in Dallas</h2>

            <div className="wow-preview__contact-details">
              <div className="wow-preview__contact-item">
                <MapPin size={16} />
                <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                  {previewData.address}<br />{previewData.city}
                </a>
              </div>
              <div className="wow-preview__contact-item">
                <Phone size={16} />
                <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              </div>
              <div className="wow-preview__contact-item">
                <Clock3 size={16} />
                <div className="wow-preview__hours">
                  {previewData.hours.map((h) => (
                    <p key={h.day}><strong>{h.day}:</strong> {h.time}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="wow-preview__contact-card">
            <h3>Request an Appointment</h3>
            <p>Book online or call us — we'll confirm within 24 hours.</p>
            <div className="wow-preview__form">
              <input type="text" placeholder="Your Name" aria-label="Name" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone" />
              <input type="text" placeholder="Service Interested In" aria-label="Service" />
              <a href={previewData.phoneHref} className="wow-preview__btn wow-preview__btn--primary wow-preview__btn--full">
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="wow-preview__footer">
        <div className="wow-preview__shell wow-preview__footer-inner">
          <div className="wow-preview__footer-brand">
            <div className="wow-preview__footer-logo">
              <Smile size={20} />
              <span>WOW Dental</span>
            </div>
            <p className="wow-preview__footer-tagline">{previewData.tagline}</p>
            <div className="wow-preview__footer-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={15} />
              </a>
            </div>
          </div>

          <div className="wow-preview__footer-cols">
            <div className="wow-preview__footer-col">
              <h4>Practice</h4>
              <a href="#about">About WOW Dental</a>
              <a href="#team">Our Doctors</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="wow-preview__footer-col">
              <h4>Services</h4>
              <a href="#services">Dental Implants</a>
              <a href="#services">Porcelain Veneers</a>
              <a href="#services">Invisalign</a>
              <a href="#services">Teeth Whitening</a>
              <a href="#services">Pediatric Care</a>
            </div>
            <div className="wow-preview__footer-col">
              <h4>Contact</h4>
              <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                {previewData.address}
              </a>
              <p>{previewData.city}</p>
            </div>
          </div>
        </div>
        <div className="wow-preview__footer-bottom">
          <div className="wow-preview__shell wow-preview__footer-bottom-inner">
            <p>© 2025 WOW Dental. All rights reserved.</p>
            <div className="wow-preview__footer-legal">
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
      <div className="wow-preview__mobile-rail">
        <a href={previewData.phoneHref} className="wow-preview__rail-btn wow-preview__rail-btn--ghost">
          <Phone size={15} /> Call
        </a>
        <a href="#contact" className="wow-preview__rail-btn wow-preview__rail-btn--primary">
          Book Appointment
        </a>
      </div>

    </main>
  )
}

export default WowDentalPreview
