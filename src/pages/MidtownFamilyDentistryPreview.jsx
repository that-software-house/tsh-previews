import React, { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Activity,
  AlertCircle,
  AlignCenter,
  Anchor,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Crown,
  DollarSign,
  Facebook,
  Gem,
  Heart,
  Instagram,
  Layers,
  MapPin,
  Moon,
  Paintbrush,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Sun,
  Users,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './MidtownFamilyDentistryPreview.css'

const heroImage =
  'https://images.unsplash.com/photo-1588776814546-1ffb4d000d22?auto=format&fit=crop&w=1400&q=80'
const aboutImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80'
const diffImage =
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80'
const ctaImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80'

const iconMap = {
  Activity,
  AlertCircle,
  AlignCenter,
  Anchor,
  Crown,
  DollarSign,
  Gem,
  Heart,
  Layers,
  Moon,
  Paintbrush,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Sun,
  Users,
  Zap,
}

const previewData = {
  businessName: 'Midtown Family Dentistry',
  tagline: 'High-quality dental care for the whole family',
  phoneDisplay: '(469) 290-0609',
  phoneHref: 'tel:+14692900609',
  address: '13309 Montfort Dr.',
  city: 'Dallas, TX 75240',
  mapsUrl:
    'https://www.google.com/maps/place/Midtown+Family+Dentistry+of+Dallas/@32.9294632,-96.8116912,17z',
  eyebrow: 'Dallas · Farmers Branch Area',
  heroHeadline: 'Dallas Dentistry Your Whole Family Can',
  heroHeadlineEm: 'Count On.',
  heroSubheadline:
    'Five experienced doctors. One welcoming practice near Farmers Branch. Modern care that fits real life — and real budgets.',
  heroCta: 'Book Your Visit',
  secondaryCta: 'Meet Our Team',
  trustPills: ['5 In-House Doctors', 'Same-Day Emergencies', 'Invisalign Provider', 'Accepting New Patients'],
  stats: [
    { value: '5', label: 'Expert Doctors' },
    { value: '25+', label: 'Services Offered' },
    { value: '10K+', label: 'Patients Served' },
    { value: '5.0★', label: 'Google Rating' },
  ],
  aboutKicker: 'Our Story',
  aboutHeading: 'A Practice Built on Roots, Not Referrals',
  aboutBody:
    'Co-founded by Dr. Zach Kingsberg and Dr. Sara Fallahi, Midtown Family Dentistry was created with a simple belief: every Dallas family deserves modern dental care without the big-practice impersonal feel. Our five-doctor team brings specialist-level expertise — orthodontics, implants, sedation, and more — all under one roof, on your schedule.',
  servicesHeading: 'Everything Your Family Needs, Under One Roof',
  servicesSub: 'From routine cleanings to full smile transformations — we do it all.',
  serviceTabs: [
    {
      label: 'Preventive',
      items: [
        { title: 'Checkups & Cleanings', desc: 'Twice-yearly exams and professional cleanings to keep your smile healthy.', icon: 'ShieldCheck' },
        { title: "Children's Dentistry", desc: 'Gentle, fun visits that set kids up for a lifetime of healthy smiles.', icon: 'Smile' },
        { title: 'Periodontal Therapy', desc: 'Deep cleaning and gum disease treatment to protect your foundation.', icon: 'Activity' },
        { title: 'Wisdom Teeth Removal', desc: 'Safe, comfortable extractions by experienced doctors — no referral needed.', icon: 'Zap' },
      ],
    },
    {
      label: 'Restorative',
      items: [
        { title: 'Dental Crowns', desc: 'Durable, natural-looking crowns to restore damaged or weakened teeth.', icon: 'Crown' },
        { title: 'Root Canal Therapy', desc: 'Pain-free root canal treatment to save your natural tooth.', icon: 'Zap' },
        { title: 'Dental Implants', desc: 'Permanent tooth replacement that looks, feels, and functions like natural.', icon: 'Anchor' },
        { title: 'Dentures & Partials', desc: 'Custom-fitted dentures to restore your full smile and confidence.', icon: 'Smile' },
      ],
    },
    {
      label: 'Cosmetic',
      items: [
        { title: 'Porcelain Veneers', desc: 'Ultra-thin porcelain shells for a flawless, camera-ready smile.', icon: 'Sparkles' },
        { title: 'Teeth Whitening', desc: 'Professional whitening for results that are dramatically brighter.', icon: 'Sun' },
        { title: 'Dental Bonding', desc: 'Quick, affordable cosmetic fixes for chips, gaps, and stains.', icon: 'Paintbrush' },
        { title: 'Metal-Free Crowns', desc: 'Ceramic crowns that blend perfectly with your natural teeth.', icon: 'Gem' },
      ],
    },
    {
      label: 'Orthodontics',
      items: [
        { title: 'Traditional Braces', desc: 'Time-tested orthodontic treatment for kids, teens, and adults.', icon: 'AlignCenter' },
        { title: 'Invisalign', desc: 'Straighten your smile discreetly with custom clear aligners.', icon: 'Layers' },
        { title: 'Sedation Dentistry', desc: 'Anxiety-free care with safe, supervised sedation options.', icon: 'Moon' },
        { title: 'Emergency Dentistry', desc: 'Same-day appointments for urgent pain, trauma, or broken teeth.', icon: 'AlertCircle' },
      ],
    },
  ],
  diffKicker: 'The Midtown Difference',
  diffHeading: 'A Full Team of Experts Who Actually Know Your Name',
  diffSub: 'Five doctors. Countless specialties. One welcoming practice that puts you first — not the clock.',
  differentiators: [
    { icon: 'Users', title: 'Multi-Doctor Practice', desc: 'Five doctors means less waiting, more options, and specialist care without a referral.' },
    { icon: 'Heart', title: 'Compassionate First', desc: 'Anxiety? Sensitive teeth? Kids? We adjust every visit to what you need, not the other way around.' },
    { icon: 'Clock', title: 'Same-Day Emergencies', desc: "Dental emergencies don't wait — neither do we. Call us and we'll get you in fast." },
    { icon: 'DollarSign', title: 'Transparent Pricing', desc: 'No surprise bills. We walk you through costs before any procedure, every time.' },
  ],
  doctorsKicker: 'Meet the Team',
  doctorsHeading: 'Five Doctors, One Shared Mission',
  doctorsSub: 'Our doctors bring decades of combined experience and a genuine love for what they do.',
  doctors: [
    {
      name: 'Dr. Zach Kingsberg',
      title: 'Co-Founder & General Dentist',
      tag: 'Co-Founder',
      bio: "Dr. Kingsberg co-founded Midtown Family Dentistry with a mission to bring honest, expert dental care to Dallas families. His approachable style and commitment to transparency make patients feel genuinely at ease.",
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Sara Fallahi',
      title: 'Co-Founder & General Dentist',
      tag: 'Co-Founder',
      bio: "Dr. Fallahi brings warmth and precision to every appointment. She co-founded the practice believing that a welcoming environment is just as important as clinical excellence.",
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Jay Patel',
      title: 'Orthodontist',
      tag: 'Orthodontist',
      bio: "Dr. Patel is a specialist in braces and Invisalign for patients of all ages. His precision orthodontic work transforms smiles and builds lasting confidence.",
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Layth',
      title: 'General Dentist',
      tag: 'General Dentist',
      bio: "Dr. Layth is known for his gentle touch and thorough explanations. He excels in restorative and emergency dentistry, making complex procedures feel manageable.",
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Joon',
      title: 'General Dentist',
      tag: 'General Dentist',
      bio: "Dr. Joon is passionate about preventive care and patient education. He helps families build lasting oral health habits with patience and genuine care.",
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80',
    },
  ],
  testimonialsHeading: 'Loved by Dallas Families',
  testimonialsSub: 'Real reviews from real patients who made us part of their routine.',
  testimonials: [
    { author: 'Amanda R.', role: 'Dallas, TX', text: "Best dental experience I've ever had. Dr. Fallahi is so patient and thorough. My kids actually look forward to their appointments now!", rating: 5 },
    { author: 'Marcus T.', role: 'Dallas, TX', text: "I came in for an emergency on a Tuesday and they got me in within the hour. Root canal was painless. Incredible team.", rating: 5 },
    { author: 'Priya N.', role: 'Dallas, TX', text: "Dr. Patel did my Invisalign and the results are unreal. The whole practice feels modern and the staff is incredibly warm.", rating: 5 },
    { author: 'James W.', role: 'Dallas, TX', text: "We moved our whole family here after our first visit. Five doctors under one roof means we never have to go anywhere else.", rating: 5 },
    { author: 'David L.', role: 'Dallas, TX', text: "Dr. Kingsberg did my implant and I could not be happier. Clear pricing, no pressure, and the result looks completely natural.", rating: 5 },
    { author: 'Tanya F.', role: 'Dallas, TX', text: "Finally a dentist's office that doesn't feel scary. The sedation option made my cleaning a total breeze. So grateful I found them.", rating: 5 },
  ],
  ctaHeading: 'Your Dallas Dental Home Is Waiting',
  ctaSub: 'New patients welcome. Same-day emergencies available. Book your first visit today.',
  hours: [
    { day: 'Monday – Thursday', time: '8:00 AM – 5:00 PM' },
    { day: 'Friday', time: '8:00 AM – 2:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/midtowndentistrydallas',
    instagram: 'https://www.instagram.com/midtown_family_dentistry/',
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
    <div className="mfd-preview__stars">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={12} fill="currentColor" />
      ))}
    </div>
  )
}

function MidtownFamilyDentistryPreview() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useSEO({
    title: 'Midtown Family Dentistry Dallas Preview | That Software House',
    description:
      'A modern redesign preview for Midtown Family Dentistry of Dallas — five doctors, comprehensive care, new patients welcome.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/midtown-family-dentistry-dallas',
    openGraph: {
      title: 'Midtown Family Dentistry Dallas Preview',
      description: 'Preview concept for Midtown Family Dentistry — Dallas dentistry your whole family can count on.',
      url: 'https://preview.thatsoftwarehouse.com/midtown-family-dentistry-dallas',
      image: heroImage,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="mfd-preview" id="top">

      {/* ── TRACKING PIXEL ── */}
      <img
        src="https://thatsoftwarehouse.com/api/track/open/midtown-family-dentistry-dallas"
        width="1"
        height="1"
        alt=""
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
      />

      {/* ── NAV ── */}
      <header className={`mfd-preview__nav ${navScrolled ? 'mfd-preview__nav--scrolled' : ''}`}>
        <div className="mfd-preview__shell mfd-preview__nav-inner">
          <a href="#top" className="mfd-preview__brand">
            <span className="mfd-preview__brand-icon"><Smile size={16} /></span>
            <span className="mfd-preview__brand-name">Midtown Family Dentistry</span>
          </a>
          <nav className="mfd-preview__nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={previewData.phoneHref} className="mfd-preview__nav-phone">
            <Phone size={13} /> {previewData.phoneDisplay}
          </a>
          <a href="#contact" className="mfd-preview__nav-cta">
            Book Now <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      {/* ── HERO — split-image ── */}
      <section className="mfd-preview__hero">
        {/* Left: dark content panel */}
        <div className="mfd-preview__hero-content">
          <Motion.span
            className="mfd-preview__eyebrow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.eyebrow}
          </Motion.span>

          <Motion.h1
            className="mfd-preview__hero-headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroHeadline} <em>{previewData.heroHeadlineEm}</em>
          </Motion.h1>

          <Motion.p
            className="mfd-preview__hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroSubheadline}
          </Motion.p>

          <Motion.div
            className="mfd-preview__hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="mfd-preview__btn mfd-preview__btn--accent">
              {previewData.heroCta}
            </a>
            <a href="#team" className="mfd-preview__btn mfd-preview__btn--outline-light">
              {previewData.secondaryCta}
            </a>
          </Motion.div>

          <Motion.div
            className="mfd-preview__hero-pills"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
          >
            {previewData.trustPills.map((pill) => (
              <span key={pill} className="mfd-preview__pill">
                <BadgeCheck size={11} /> {pill}
              </span>
            ))}
          </Motion.div>
        </div>

        {/* Right: image */}
        <Motion.div
          className="mfd-preview__hero-image"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={heroImage} alt="Midtown Family Dentistry team" />
          <div className="mfd-preview__hero-badge">
            <Star size={14} fill="currentColor" style={{ color: '#E8833A' }} />
            <div>
              <strong>5.0 Rating</strong>
              <span>Google Reviews</span>
            </div>
          </div>
        </Motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="mfd-preview__stats-bar">
        <div className="mfd-preview__shell">
          <Motion.div
            className="mfd-preview__stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {previewData.stats.map((s, i) => (
              <Motion.div key={s.label} className="mfd-preview__stat" variants={staggerChild}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                {i < previewData.stats.length - 1 && <div className="mfd-preview__stat-sep" />}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <Section className="mfd-preview__about" id="about">
        <div className="mfd-preview__shell mfd-preview__about-inner">
          <Motion.div
            className="mfd-preview__about-text"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="mfd-preview__kicker">{previewData.aboutKicker}</span>
            <h2 className="mfd-preview__section-heading">{previewData.aboutHeading}</h2>
            <p className="mfd-preview__section-body">{previewData.aboutBody}</p>
            <a href="#team" className="mfd-preview__btn mfd-preview__btn--primary mfd-preview__btn--sm">
              Meet Our Doctors <ArrowRight size={14} />
            </a>
          </Motion.div>

          <Motion.div
            className="mfd-preview__about-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={aboutImage} alt="Midtown Family Dentistry office" />
            <div className="mfd-preview__about-badge">
              <Users size={16} />
              <div>
                <strong>5 In-House Doctors</strong>
                <span>Specialists on-site, no referrals</span>
              </div>
            </div>
          </Motion.div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section className="mfd-preview__services" id="services">
        <div className="mfd-preview__shell">
          <div className="mfd-preview__services-header">
            <span className="mfd-preview__kicker">What We Offer</span>
            <h2 className="mfd-preview__section-heading">{previewData.servicesHeading}</h2>
            <p className="mfd-preview__section-body mfd-preview__section-body--centered">
              {previewData.servicesSub}
            </p>
          </div>

          <div className="mfd-preview__tabs">
            {previewData.serviceTabs.map((tab, i) => (
              <button
                key={tab.label}
                className={`mfd-preview__tab ${activeTab === i ? 'mfd-preview__tab--active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              className="mfd-preview__services-grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {previewData.serviceTabs[activeTab].items.map((item) => {
                const Icon = iconMap[item.icon] || ShieldCheck
                return (
                  <div key={item.title} className="mfd-preview__service-card">
                    <div className="mfd-preview__service-icon">
                      <Icon size={20} />
                    </div>
                    <h3 className="mfd-preview__service-title">{item.title}</h3>
                    <p className="mfd-preview__service-desc">{item.desc}</p>
                    <a href="#contact" className="mfd-preview__service-link">
                      Learn More <ArrowUpRight size={13} />
                    </a>
                  </div>
                )
              })}
            </Motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* ── DIFFERENTIATORS — dark panel ── */}
      <section className="mfd-preview__diff" id="why-us">
        <div className="mfd-preview__diff-inner">
          <Motion.div
            className="mfd-preview__diff-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={diffImage} alt="Dental care at Midtown Family Dentistry" />
          </Motion.div>

          <div className="mfd-preview__diff-content">
            <span className="mfd-preview__kicker mfd-preview__kicker--orange">{previewData.diffKicker}</span>
            <h2 className="mfd-preview__diff-heading">{previewData.diffHeading}</h2>
            <p className="mfd-preview__diff-sub">{previewData.diffSub}</p>
            <Motion.div
              className="mfd-preview__diff-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {previewData.differentiators.map((d) => {
                const Icon = iconMap[d.icon] || ShieldCheck
                return (
                  <Motion.div key={d.title} className="mfd-preview__diff-item" variants={staggerChild}>
                    <div className="mfd-preview__diff-icon-wrap">
                      <Icon size={17} />
                    </div>
                    <div>
                      <h4 className="mfd-preview__diff-title">{d.title}</h4>
                      <p className="mfd-preview__diff-desc">{d.desc}</p>
                    </div>
                  </Motion.div>
                )
              })}
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <Section className="mfd-preview__doctors" id="team">
        <div className="mfd-preview__shell">
          <div className="mfd-preview__doctors-header">
            <span className="mfd-preview__kicker">{previewData.doctorsKicker}</span>
            <h2 className="mfd-preview__section-heading">{previewData.doctorsHeading}</h2>
            <p className="mfd-preview__section-body mfd-preview__section-body--centered">
              {previewData.doctorsSub}
            </p>
          </div>
          <Motion.div
            className="mfd-preview__doctors-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {previewData.doctors.map((doc) => (
              <Motion.div key={doc.name} className="mfd-preview__doctor-card" variants={staggerChild}>
                <div className="mfd-preview__doctor-photo">
                  <img src={doc.image} alt={doc.name} />
                  <span className="mfd-preview__doctor-tag">{doc.tag}</span>
                </div>
                <div className="mfd-preview__doctor-info">
                  <p className="mfd-preview__doctor-role">{doc.title}</p>
                  <h3 className="mfd-preview__doctor-name">{doc.name}</h3>
                  <p className="mfd-preview__doctor-bio">{doc.bio}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="mfd-preview__testimonials" id="reviews">
        <div className="mfd-preview__shell">
          <div className="mfd-preview__testimonials-header">
            <span className="mfd-preview__kicker">Patient Stories</span>
            <h2 className="mfd-preview__section-heading">{previewData.testimonialsHeading}</h2>
            <p className="mfd-preview__section-body mfd-preview__section-body--centered">
              {previewData.testimonialsSub}
            </p>
          </div>
          <Motion.div
            className="mfd-preview__testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {previewData.testimonials.map((t) => (
              <Motion.div key={t.author} className="mfd-preview__testimonial-card" variants={staggerChild}>
                <StarRow count={t.rating} />
                <blockquote className="mfd-preview__testimonial-text">"{t.text}"</blockquote>
                <div className="mfd-preview__testimonial-author">
                  <span className="mfd-preview__testimonial-name">{t.author}</span>
                  <span className="mfd-preview__testimonial-role">{t.role}</span>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="mfd-preview__cta">
        <div className="mfd-preview__cta-inner">
          <Motion.div
            className="mfd-preview__cta-content"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="mfd-preview__kicker mfd-preview__kicker--light">Ready to start?</span>
            <h2 className="mfd-preview__cta-heading">{previewData.ctaHeading}</h2>
            <p className="mfd-preview__cta-sub">{previewData.ctaSub}</p>
            <div className="mfd-preview__cta-actions">
              <a href={previewData.phoneHref} className="mfd-preview__btn mfd-preview__btn--white">
                <Phone size={15} /> {previewData.phoneDisplay}
              </a>
              <a href="#contact" className="mfd-preview__btn mfd-preview__btn--outline-cta">
                Book Online
              </a>
            </div>
          </Motion.div>
          <div className="mfd-preview__cta-image">
            <img src={ctaImage} alt="Happy dental patient" />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="mfd-preview__contact" id="contact">
        <div className="mfd-preview__shell mfd-preview__contact-inner">
          <div className="mfd-preview__contact-info">
            <span className="mfd-preview__kicker mfd-preview__kicker--orange">Find Us</span>
            <h2 className="mfd-preview__section-heading mfd-preview__section-heading--light">
              Visit Us in Dallas
            </h2>
            <div className="mfd-preview__contact-details">
              <div className="mfd-preview__contact-item">
                <MapPin size={16} />
                <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                  {previewData.address}<br />{previewData.city}
                </a>
              </div>
              <div className="mfd-preview__contact-item">
                <Phone size={16} />
                <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              </div>
              <div className="mfd-preview__contact-item">
                <Clock size={16} />
                <div className="mfd-preview__hours">
                  {previewData.hours.map((h) => (
                    <p key={h.day}><strong>{h.day}:</strong> {h.time}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="mfd-preview__contact-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={15} />
              </a>
            </div>
          </div>

          <div className="mfd-preview__contact-card">
            <h3>Request an Appointment</h3>
            <p>Call us or fill this out — we'll confirm within 24 hours.</p>
            <div className="mfd-preview__form">
              <input type="text" placeholder="Your Name" aria-label="Name" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone" />
              <input type="text" placeholder="Service Interested In" aria-label="Service" />
              <a
                href={previewData.phoneHref}
                className="mfd-preview__btn mfd-preview__btn--primary mfd-preview__btn--full"
              >
                Request Appointment
              </a>
            </div>
            <p className="mfd-preview__contact-note">New patients always welcome · Same-day emergencies</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mfd-preview__footer">
        <div className="mfd-preview__shell mfd-preview__footer-inner">
          <div className="mfd-preview__footer-brand">
            <div className="mfd-preview__footer-logo">
              <Smile size={18} />
              <span>Midtown Family Dentistry</span>
            </div>
            <p className="mfd-preview__footer-tagline">{previewData.tagline}</p>
            <div className="mfd-preview__footer-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          <div className="mfd-preview__footer-cols">
            <div className="mfd-preview__footer-col">
              <h4>Practice</h4>
              <a href="#about">About Us</a>
              <a href="#team">Our Doctors</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="mfd-preview__footer-col">
              <h4>Services</h4>
              <a href="#services">Family Dentistry</a>
              <a href="#services">Dental Implants</a>
              <a href="#services">Invisalign</a>
              <a href="#services">Emergency Care</a>
            </div>
            <div className="mfd-preview__footer-col">
              <h4>Visit Us</h4>
              <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">{previewData.address}</a>
              <p>{previewData.city}</p>
            </div>
          </div>
        </div>
        <div className="mfd-preview__footer-bottom">
          <div className="mfd-preview__shell mfd-preview__footer-bottom-inner">
            <p>© 2025 Midtown Family Dentistry of Dallas. All rights reserved.</p>
            <div className="mfd-preview__footer-legal">
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
      <div className="mfd-preview__mobile-rail">
        <a href={previewData.phoneHref} className="mfd-preview__rail-btn mfd-preview__rail-btn--ghost">
          <Phone size={15} /> Call
        </a>
        <a href="#contact" className="mfd-preview__rail-btn mfd-preview__rail-btn--primary">
          Book Appointment
        </a>
      </div>
    </main>
  )
}

export default MidtownFamilyDentistryPreview
