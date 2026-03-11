import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowUpRight,
  Baby,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Clock3,
  Crown,
  Facebook,
  Heart,
  Languages,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './BearCreekFamilyDentistryPreview.css'

const heroBg =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80'
const aboutImage =
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80'
const kidImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80'
const founderImage = 'assets/doctors/male2.png'
const officeImage =
  'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?auto=format&fit=crop&w=900&q=80'

const previewData = {
  businessName: 'Bear Creek Family Dentistry',
  tagline: "Your Family's Dental Home™",
  phoneDisplay: '(888) 676-2327',
  phoneHref: 'tel:+18886762327',
  address: '2947 S. Buckner Blvd. #100',
  city: 'Dallas, TX 75227',
  mapsUrl: 'https://maps.google.com/?q=2947+S+Buckner+Blvd+100+Dallas+TX+75227',
  heroHeadline: "DFW's Family\nDental Home.",
  heroSubheadline:
    'Nearly 30 years of caring for Dallas–Fort Worth families — kids, teens, adults, and seniors — all under one roof, at 13 convenient locations.',
  heroCta: 'Find Your Location',
  secondaryCta: 'Our Services',
  stats: [
    { value: '30+', label: 'Years Serving DFW' },
    { value: '13', label: 'DFW Locations' },
    { value: '6', label: 'Days a Week Open' },
    { value: '12+', label: 'Insurance Plans Accepted' },
  ],
  services: [
    {
      title: 'Family Dentistry',
      desc: 'Checkups, cleanings, and preventive care for every member of your family — from first tooth to golden years.',
      icon: Heart,
      color: 'cobalt',
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Fun, gentle dental care for kids. Play gyms, movie theatres, and a dedicated BFF assistant for every young patient.',
      icon: Baby,
      color: 'amber',
    },
    {
      title: 'Dental Implants',
      desc: 'Permanent, natural-looking tooth replacement performed by our in-house specialists — no referrals needed.',
      icon: Crown,
      color: 'cobalt',
    },
    {
      title: 'Orthodontics',
      desc: 'Braces and alignment solutions for kids, teens, and adults — handled by our on-staff orthodontists.',
      icon: Smile,
      color: 'amber',
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Crowns, bridges, whitening, and smile makeovers crafted to look and feel completely natural.',
      icon: Sparkles,
      color: 'cobalt',
    },
    {
      title: 'Emergency Dentistry',
      desc: 'Walk-ins always welcome. Emergency patients seen quickly — because pain shouldn\'t wait.',
      icon: Zap,
      color: 'amber',
    },
  ],
  differentiators: [
    {
      icon: ShieldCheck,
      title: 'In-House Specialists',
      desc: 'Pediatric dentists, oral surgeons, orthodontists, and prosthodontists all on staff. Your whole family stays under one roof.',
    },
    {
      icon: Building2,
      title: '13 DFW Locations',
      desc: 'Dallas, Arlington, Fort Worth, Mesquite, Grapevine, Duncanville — there\'s a Bear Creek near you.',
    },
    {
      icon: CalendarCheck,
      title: 'Early, Late & Saturday Hours',
      desc: 'Open six days a week with morning, evening, and weekend slots — because life doesn\'t pause for dentist visits.',
    },
    {
      icon: Languages,
      title: 'Se Habla Español',
      desc: 'We serve our full community. Spanish-speaking staff at every location — comfortable care for every family.',
    },
  ],
  founder: {
    name: 'Dr. Robert E. Tafel',
    title: 'Founder & Owner, D.D.S.',
    image: founderImage,
    tag: 'Founder · 30+ Yrs',
    bio: 'Dr. Tafel founded Bear Creek Family Dentistry with a single vision: to be the dental home every DFW family deserves. Nearly three decades later, that vision has grown to 13 locations and thousands of families who call Bear Creek their own.',
  },
  testimonials: [
    {
      text: "The staff is extremely sweet — genuine happy faces everywhere. My kids actually felt comfortable for the first time at a dentist. That's not easy to pull off, but Bear Creek does it every time.",
      author: 'Chisa E.',
      role: 'Arlington Patient',
      rating: 5,
    },
    {
      text: "Fun atmosphere and real entertainment for the kids. My daughter had a cavity treated and you'd never know it — she was watching a movie the whole time and walked out smiling.",
      author: 'Jennifer F.',
      role: 'Dallas Patient',
      rating: 5,
    },
    {
      text: 'Super friendly staff, barely any wait time, and the dentist actually explained everything before touching my teeth. I drive past three other dental offices to come here. Worth every mile.',
      author: 'Diana C.',
      role: 'Dallas Patient',
      rating: 5,
    },
  ],
  insurance: [
    'Aetna', 'Assurant', 'Blue Cross Blue Shield', 'Cigna',
    'Delta Dental', 'Guardian', 'UnitedHealthcare', 'Ameritas',
    'MCNA', 'MetLife', 'Principal', 'DentaQuest',
  ],
  financing: ['CareCredit', 'Sunbit', 'Monthly Payment Plans'],
  socialLinks: {
    facebook: 'https://www.facebook.com/Bear-Creek-Family-Dentistry-1657390287895980/',
  },
}

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } }
const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] } },
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
    <div className="bcfd-preview__stars">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} fill="currentColor" />
      ))}
    </div>
  )
}

function BearCreekFamilyDentistryPreview() {
  const [navScrolled, setNavScrolled] = useState(false)

  useSEO({
    title: 'Bear Creek Family Dentistry Preview | That Software House',
    description:
      "A modern redesign preview for Bear Creek Family Dentistry — DFW's family dental home for 30+ years.",
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/bear-creek-family-dentistry',
    openGraph: {
      title: 'Bear Creek Family Dentistry Preview',
      description: "Preview concept for Bear Creek Family Dentistry — Your Family's Dental Home™.",
      url: 'https://preview.thatsoftwarehouse.com/bear-creek-family-dentistry',
      image: heroBg,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="bcfd-preview" id="top">

      {/* ── TRACKING PIXEL ── */}
      <img
        src="https://thatsoftwarehouse.com/api/track/open/bear-creek-family-dentistry"
        width="1" height="1" alt=""
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />

      {/* ── NAV ── */}
      <header className={`bcfd-preview__nav ${navScrolled ? 'bcfd-preview__nav--scrolled' : ''}`}>
        <div className="bcfd-preview__shell bcfd-preview__nav-inner">
          <a href="#top" className="bcfd-preview__brand">
            <span className="bcfd-preview__brand-icon"><Smile size={16} /></span>
            <span className="bcfd-preview__brand-name">Bear Creek Family Dentistry</span>
          </a>
          <nav className="bcfd-preview__nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Locations</a>
          </nav>
          <a href="#contact" className="bcfd-preview__nav-cta">
            Find a Location <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="bcfd-preview__hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bcfd-preview__hero-overlay" aria-hidden="true" />
        <div className="bcfd-preview__hero-inner">
          <Motion.span
            className="bcfd-preview__eyebrow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Dallas · Fort Worth · Arlington · and More
          </Motion.span>

          <Motion.h1
            className="bcfd-preview__hero-headline"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            DFW's Family<br /><em>Dental Home.</em>
          </Motion.h1>

          <Motion.p
            className="bcfd-preview__hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroSubheadline}
          </Motion.p>

          <Motion.div
            className="bcfd-preview__hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="bcfd-preview__btn bcfd-preview__btn--amber">
              {previewData.heroCta}
            </a>
            <a href="#services" className="bcfd-preview__btn bcfd-preview__btn--outline-light">
              {previewData.secondaryCta}
            </a>
          </Motion.div>

          <Motion.div
            className="bcfd-preview__hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            <StarRow />
            <span>30+ Years · Trusted by DFW Families</span>
          </Motion.div>

          {/* Trust pills */}
          <Motion.div
            className="bcfd-preview__hero-pills"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
          >
            <span className="bcfd-preview__pill"><BadgeCheck size={12} /> Emergencies Welcome</span>
            <span className="bcfd-preview__pill"><Baby size={12} /> Kids Love It Here</span>
            <span className="bcfd-preview__pill"><Shield size={12} /> All Major Insurance</span>
            <span className="bcfd-preview__pill"><Languages size={12} /> Se Habla Español</span>
          </Motion.div>
        </div>

        {/* Decorative wave */}
        <div className="bcfd-preview__hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,80 C360,0 1080,80 1440,20 L1440,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bcfd-preview__stats-bar">
        <div className="bcfd-preview__shell">
          <Motion.div
            className="bcfd-preview__stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {previewData.stats.map((s, i) => (
              <Motion.div key={s.label} className="bcfd-preview__stat" variants={staggerChild}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                {i < previewData.stats.length - 1 && <div className="bcfd-preview__stat-sep" />}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="bcfd-preview__about" id="about">
        <div className="bcfd-preview__shell bcfd-preview__about-inner">
          <Motion.div
            className="bcfd-preview__about-text"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="bcfd-preview__kicker">Our Story</span>
            <h2 className="bcfd-preview__section-heading">
              Serving DFW Families<br /><em>for Nearly 30 Years</em>
            </h2>
            <div className="bcfd-preview__heading-line" />
            <p className="bcfd-preview__section-body">
              Bear Creek Family Dentistry was founded on one belief: every family deserves a dental
              home they can trust. From a child's very first visit to a lifetime of care, we've
              built each of our 13 DFW locations around the same promise — genuine relationships,
              real comfort, and dentistry that works for your life and your budget.
            </p>
            <p className="bcfd-preview__section-body" style={{ marginTop: '1rem' }}>
              With board-certified specialists across pediatrics, oral surgery, orthodontics, and
              prosthodontics all under one roof, you get complete family care without the referral
              runaround.
            </p>
            <div className="bcfd-preview__about-badges">
              <div className="bcfd-preview__about-badge">
                <Users size={16} />
                <span>Board-Certified Specialists On Staff</span>
              </div>
              <div className="bcfd-preview__about-badge">
                <ShieldCheck size={16} />
                <span>Bear Essentials 5-Star Cleanliness Program</span>
              </div>
              <div className="bcfd-preview__about-badge">
                <Heart size={16} />
                <span>Same Team, Every Visit — Continuity of Care</span>
              </div>
            </div>
            <a href="#contact" className="bcfd-preview__btn bcfd-preview__btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
              Find Nearest Location <ArrowUpRight size={14} />
            </a>
          </Motion.div>

          <Motion.div
            className="bcfd-preview__about-images"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bcfd-preview__about-img-main">
              <img src={aboutImage} alt="Bear Creek dental team" />
            </div>
            <div className="bcfd-preview__about-img-secondary">
              <img src={kidImage} alt="Happy patient smiling" />
              <div className="bcfd-preview__about-img-tag">
                <Baby size={14} />
                <span>Kid-Friendly Promise</span>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Section className="bcfd-preview__services" id="services">
        <div className="bcfd-preview__shell">
          <div className="bcfd-preview__services-header">
            <span className="bcfd-preview__kicker">What We Offer</span>
            <h2 className="bcfd-preview__section-heading">
              Complete Care for <em>Every Age</em>
            </h2>
            <div className="bcfd-preview__heading-line bcfd-preview__heading-line--center" />
            <p className="bcfd-preview__section-body" style={{ margin: '0.75rem auto 0', textAlign: 'center' }}>
              From baby teeth to dental implants — our in-house specialists cover everything your family needs.
            </p>
          </div>
          <Motion.div
            className="bcfd-preview__services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {previewData.services.map((s) => (
              <Motion.div
                key={s.title}
                className={`bcfd-preview__service-card bcfd-preview__service-card--${s.color}`}
                variants={staggerChild}
              >
                <div className="bcfd-preview__service-icon"><s.icon size={20} /></div>
                <h3 className="bcfd-preview__service-title">{s.title}</h3>
                <p className="bcfd-preview__service-desc">{s.desc}</p>
                <a href="#contact" className="bcfd-preview__service-link">
                  Learn More <ArrowUpRight size={13} />
                </a>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── DARK PANEL — DIFFERENTIATORS ── */}
      <section className="bcfd-preview__dark-panel">
        <div className="bcfd-preview__shell">
          <div className="bcfd-preview__dark-panel-inner">
            <Motion.div
              className="bcfd-preview__dark-panel-text"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="bcfd-preview__kicker bcfd-preview__kicker--amber">Why Bear Creek</span>
              <h2 className="bcfd-preview__dark-panel-heading">
                More Than a Dentist.<br /><em>A Family Partner.</em>
              </h2>
              <p className="bcfd-preview__dark-panel-sub">
                We built Bear Creek around the things that actually matter to families — convenience,
                comfort, and a team that genuinely knows you. Here's what makes us different.
              </p>
              <a href="#contact" className="bcfd-preview__btn bcfd-preview__btn--amber" style={{ marginTop: '0.5rem' }}>
                Book an Appointment <ArrowUpRight size={14} />
              </a>
            </Motion.div>

            <Motion.div
              className="bcfd-preview__diff-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {previewData.differentiators.map((d) => (
                <Motion.div key={d.title} className="bcfd-preview__diff-item" variants={staggerChild}>
                  <div className="bcfd-preview__diff-icon"><d.icon size={18} /></div>
                  <div>
                    <h4 className="bcfd-preview__diff-title">{d.title}</h4>
                    <p className="bcfd-preview__diff-desc">{d.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <Section className="bcfd-preview__founder" id="team">
        <div className="bcfd-preview__shell bcfd-preview__founder-inner">
          <Motion.div
            className="bcfd-preview__founder-image"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={previewData.founder.image} alt={previewData.founder.name} />
            <span className="bcfd-preview__founder-tag">{previewData.founder.tag}</span>
            <div className="bcfd-preview__founder-office-badge">
              <Building2 size={14} />
              <span>13 DFW Locations</span>
            </div>
          </Motion.div>

          <Motion.div
            className="bcfd-preview__founder-text"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="bcfd-preview__kicker">Our Founder</span>
            <h2 className="bcfd-preview__section-heading">{previewData.founder.name}</h2>
            <p className="bcfd-preview__founder-role">{previewData.founder.title}</p>
            <div className="bcfd-preview__heading-line" />
            <p className="bcfd-preview__section-body" style={{ marginTop: '1.25rem' }}>
              {previewData.founder.bio}
            </p>
            <blockquote className="bcfd-preview__founder-quote">
              "Creating relationships, building familiarity, and establishing safety always comes
              first — before any treatment begins."
            </blockquote>
            <p className="bcfd-preview__section-body" style={{ marginTop: '1.25rem' }}>
              His teams of board-certified specialists across all 13 locations carry that mission
              forward every single day — serving kids, teens, adults, seniors, and patients with
              special needs with the same warmth Bear Creek has always been known for.
            </p>
          </Motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <section className="bcfd-preview__testimonials" id="reviews">
        <div className="bcfd-preview__shell">
          <Motion.div
            className="bcfd-preview__testimonials-header"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="bcfd-preview__kicker bcfd-preview__kicker--amber">Patient Stories</span>
            <h2 className="bcfd-preview__dark-panel-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              Why DFW Families Choose Bear Creek
            </h2>
          </Motion.div>
          <Motion.div
            className="bcfd-preview__testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {previewData.testimonials.map((t) => (
              <Motion.div key={t.author} className="bcfd-preview__testimonial-card" variants={staggerChild}>
                <StarRow count={t.rating} />
                <blockquote className="bcfd-preview__testimonial-text">"{t.text}"</blockquote>
                <div className="bcfd-preview__testimonial-author">
                  <span className="bcfd-preview__testimonial-name">{t.author}</span>
                  <span className="bcfd-preview__testimonial-role">{t.role}</span>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* ── INSURANCE ── */}
      <Section className="bcfd-preview__insurance">
        <div className="bcfd-preview__shell bcfd-preview__insurance-inner">
          <div className="bcfd-preview__insurance-text">
            <span className="bcfd-preview__kicker">Insurance & Financing</span>
            <h2 className="bcfd-preview__section-heading">
              We Work With <em>Your Insurance</em>
            </h2>
            <div className="bcfd-preview__heading-line" />
            <p className="bcfd-preview__section-body" style={{ marginTop: '1rem' }}>
              In-network with nearly every major plan. No insurance? No problem — CareCredit,
              Sunbit, and flexible monthly payment plans keep great care accessible for every family.
            </p>
            <div className="bcfd-preview__financing-row">
              {previewData.financing.map((f) => (
                <span key={f} className="bcfd-preview__financing-tag">{f}</span>
              ))}
            </div>
          </div>
          <Motion.div
            className="bcfd-preview__insurance-pills"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {previewData.insurance.map((ins) => (
              <Motion.span key={ins} className="bcfd-preview__insurance-pill" variants={staggerChild}>
                <ShieldCheck size={11} /> {ins}
              </Motion.span>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section className="bcfd-preview__cta-banner">
        <div className="bcfd-preview__shell bcfd-preview__cta-inner">
          <Motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bcfd-preview__cta-content"
          >
            <span className="bcfd-preview__kicker bcfd-preview__kicker--amber">Ready to get started?</span>
            <h2 className="bcfd-preview__dark-panel-heading" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.8rem)', marginBottom: '1rem' }}>
              Your Family's Dental Home<br />Is Closer Than You Think.
            </h2>
            <p className="bcfd-preview__dark-panel-sub" style={{ maxWidth: '50ch', marginBottom: '2rem' }}>
              13 locations across DFW. Emergencies always welcome. Same-day appointments often available.
              Call us or find your nearest location.
            </p>
            <div className="bcfd-preview__cta-actions">
              <a href={previewData.phoneHref} className="bcfd-preview__btn bcfd-preview__btn--white">
                <Phone size={15} /> {previewData.phoneDisplay}
              </a>
              <a href="#contact" className="bcfd-preview__btn bcfd-preview__btn--amber">
                Find Your Location
              </a>
            </div>
          </Motion.div>
          <div className="bcfd-preview__cta-image">
            <img src={officeImage} alt="Bear Creek dental office" />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bcfd-preview__contact" id="contact">
        <div className="bcfd-preview__shell bcfd-preview__contact-inner">
          <div className="bcfd-preview__contact-info">
            <span className="bcfd-preview__kicker">Find a Location</span>
            <h2 className="bcfd-preview__section-heading">13 Locations Across DFW</h2>
            <div className="bcfd-preview__heading-line" />
            <p className="bcfd-preview__section-body" style={{ marginTop: '1rem' }}>
              Dallas, Arlington, Fort Worth, Mesquite, Grapevine, Duncanville — Bear Creek is
              always nearby. Call our main line or visit us at any location.
            </p>

            <div className="bcfd-preview__contact-details">
              <div className="bcfd-preview__contact-item">
                <Phone size={16} />
                <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              </div>
              <div className="bcfd-preview__contact-item">
                <MapPin size={16} />
                <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                  {previewData.address}<br />{previewData.city} — and 12 more locations
                </a>
              </div>
              <div className="bcfd-preview__contact-item">
                <Clock3 size={16} />
                <div>
                  <p><strong>Mon – Sat:</strong> Early morning to evening</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p style={{ marginTop: '0.4rem', color: 'var(--bcfd-primary)', fontWeight: 700 }}>
                    Emergencies welcome — walk-ins accepted
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bcfd-preview__contact-card">
            <h3>Request an Appointment</h3>
            <p>We'll confirm within 24 hours — often same day.</p>
            <div className="bcfd-preview__form">
              <input type="text" placeholder="Your Name" aria-label="Name" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone" />
              <input type="text" placeholder="Nearest City / Location" aria-label="Location" />
              <input type="text" placeholder="Service Needed" aria-label="Service" />
              <a href={previewData.phoneHref} className="bcfd-preview__btn bcfd-preview__btn--primary bcfd-preview__btn--full">
                Request Appointment
              </a>
            </div>
            <p className="bcfd-preview__contact-card-note">
              Emergencies welcome — same-day slots often available
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bcfd-preview__footer">
        <div className="bcfd-preview__shell bcfd-preview__footer-inner">
          <div className="bcfd-preview__footer-brand">
            <div className="bcfd-preview__footer-logo">
              <Smile size={18} />
              <span>Bear Creek Family Dentistry</span>
            </div>
            <p className="bcfd-preview__footer-tagline">{previewData.tagline}</p>
            <p className="bcfd-preview__footer-tagline" style={{ marginTop: '0.3rem', fontSize: '0.78rem' }}>
              Serving DFW families since 1995 · 13 locations
            </p>
            <div className="bcfd-preview__footer-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={14} />
              </a>
            </div>
          </div>

          <div className="bcfd-preview__footer-cols">
            <div className="bcfd-preview__footer-col">
              <h4>Practice</h4>
              <a href="#about">About Us</a>
              <a href="#team">Our Founder</a>
              <a href="#reviews">Patient Reviews</a>
              <a href="#contact">Find a Location</a>
            </div>
            <div className="bcfd-preview__footer-col">
              <h4>Services</h4>
              <a href="#services">Family Dentistry</a>
              <a href="#services">Pediatric Dentistry</a>
              <a href="#services">Dental Implants</a>
              <a href="#services">Orthodontics</a>
              <a href="#services">Emergency Care</a>
            </div>
            <div className="bcfd-preview__footer-col">
              <h4>Contact</h4>
              <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                {previewData.address}
              </a>
              <p>{previewData.city}</p>
              <p style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
                + 12 more DFW locations
              </p>
            </div>
          </div>
        </div>
        <div className="bcfd-preview__footer-divider" />
        <div className="bcfd-preview__footer-bottom">
          <div className="bcfd-preview__shell bcfd-preview__footer-bottom-inner">
            <p>© 2025 Bear Creek Family Dentistry. All rights reserved.</p>
            <div className="bcfd-preview__footer-legal">
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
      <div className="bcfd-preview__mobile-rail">
        <a href={previewData.phoneHref} className="bcfd-preview__rail-btn bcfd-preview__rail-btn--ghost">
          <Phone size={15} /> Call
        </a>
        <a href="#contact" className="bcfd-preview__rail-btn bcfd-preview__rail-btn--primary">
          Find a Location
        </a>
      </div>
    </main>
  )
}

export default BearCreekFamilyDentistryPreview
