import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  Baby,
  BadgeCheck,
  Calendar,
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
import './CoolCreekFamilyDentalPreview.css'

const heroImage =
  'assets/hero/hero1.png'
const doctorImage =
  'assets/doctors/male1.png'
const officeImage =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80'
const smileImage =
  'assets/doctors/female1.png'

const previewData = {
  businessName: 'Cool Creek Family Dental',
  tagline: 'Comprehensive Dental Care for Austin Families',
  phoneDisplay: '(512) 501-6022',
  phoneHref: 'tel:+15125016022',
  address: '6414 River Place Blvd, Suite 101',
  city: 'Austin, TX 78730',
  mapsUrl: 'https://maps.google.com/?q=6414+River+Place+Blvd+Suite+101+Austin+TX+78730',
  heroHeadline: 'A Smile Worth Coming Back For.',
  heroSubheadline:
    "Comprehensive family dentistry for every age — gentle, modern care right here in Austin's River Place community.",
  heroCta: 'Book Your Visit',
  secondaryCta: 'Explore Services',
  rating: '5.0',
  reviewCount: '200+',
  features: [
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      desc: 'Flexible appointments Monday through Friday to fit your busy life.',
    },
    {
      icon: Shield,
      title: 'Comfort-First Care',
      desc: 'Sedation options available — even the most anxious patients feel at ease.',
    },
    {
      icon: Users,
      title: 'Whole Family Welcome',
      desc: 'From kids to seniors, we provide complete care under one roof.',
    },
  ],
  trustReasons: [
    {
      icon: BadgeCheck,
      title: '24+ Years of Experience',
      desc: 'Dr. Kristoff brings two decades of comprehensive dental expertise to every patient.',
    },
    {
      icon: Sparkles,
      title: 'Advanced Technology',
      desc: 'Digital X-rays and modern equipment for precise, comfortable care.',
    },
    {
      icon: Heart,
      title: 'Anxiety-Free Zone',
      desc: 'Gentle approach and sedation dentistry options for patients nervous about dental visits.',
    },
    {
      icon: ShieldCheck,
      title: 'All Insurances Welcome',
      desc: 'We work with most PPO plans and offer CareCredit financing options.',
    },
  ],
  serviceCategories: {
    Preventive: {
      headline: 'Prevention Keeps Your Smile Healthy for Life',
      body: 'Routine exams, cleanings, and early-detection screenings protect you and your family from costly issues down the road. We make prevention easy and completely stress-free.',
      services: [
        { title: 'Exams & Cleanings', icon: Shield },
        { title: 'Periodontal Therapy', icon: Heart },
        { title: 'Oral Cancer Screening', icon: BadgeCheck },
        { title: 'Dental Sealants', icon: ShieldCheck },
      ],
    },
    Restorative: {
      headline: 'Restore Your Confidence, One Tooth at a Time',
      body: 'From dental implants to same-day crowns, we use proven techniques to repair and replace teeth with results that look and feel completely natural.',
      services: [
        { title: 'Dental Implants', icon: Crown },
        { title: 'Crowns & Bridges', icon: Stethoscope },
        { title: 'Dentures', icon: Smile },
        { title: 'Emergency Dentistry', icon: Zap },
      ],
    },
    Cosmetic: {
      headline: 'Your Best Smile Is Closer Than You Think',
      body: 'Porcelain veneers, professional whitening, and Invisalign clear aligners — custom cosmetic care that enhances your natural beauty and boosts your confidence.',
      services: [
        { title: 'Porcelain Veneers', icon: Sparkles },
        { title: 'Invisalign Aligners', icon: Smile },
        { title: 'Teeth Whitening', icon: Star },
        { title: 'Smile Makeovers', icon: Zap },
      ],
    },
    Pediatric: {
      headline: 'Dental Care Kids Actually Enjoy',
      body: "A friendly, welcoming environment makes every child's first dental experience a positive one. We build lifelong healthy habits — one smile at a time.",
      services: [
        { title: 'Pediatric Dentistry', icon: Baby },
        { title: 'Orthodontics', icon: Smile },
        { title: 'Sedation Dentistry', icon: Heart },
        { title: 'Oral Surgery', icon: Stethoscope },
      ],
    },
  },
  doctors: [
    {
      name: 'Dr. Adam Kristoff, DDS',
      title: 'Founder & Lead Dentist',
      yearsExp: '24+ Years',
      image: doctorImage,
      bio: 'Dr. Kristoff founded Cool Creek Family Dental with a vision of delivering comprehensive, high-quality care to the Austin community. With over two decades of experience across every discipline of dentistry, he brings both skill and genuine warmth to every patient interaction.',
    },
    {
      name: 'Dr. Mistry',
      title: 'Associate Dentist',
      yearsExp: 'General & Cosmetic',
      image: smileImage,
      bio: 'Dr. Mistry specializes in general and cosmetic dentistry, bringing a patient-first philosophy to every appointment. Known for a gentle touch and a thorough approach, he helps patients of all ages feel comfortable and confident in their care.',
    },
  ],
  testimonials: [
    {
      text: "Dr. Kristoff is the most thorough dentist I've ever had. He takes time to explain everything, and the entire team is warm and welcoming. My whole family comes here now.",
      author: 'Sarah T.',
      role: 'River Place Patient',
      rating: 5,
    },
    {
      text: "I used to dread going to the dentist — until I found Cool Creek. The staff is so patient and kind, and they offer sedation which was a game-changer for me. Couldn't recommend more.",
      author: 'Mike R.',
      role: 'Steiner Ranch Patient',
      rating: 5,
    },
    {
      text: 'We moved from out of state and finding Dr. Kristoff was a true blessing. Excellent care, modern office, and they fit our entire family in seamlessly. This is dentistry done right.',
      author: 'Jennifer L.',
      role: 'Four Points Patient',
      rating: 5,
    },
  ],
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  socialLinks: {
    facebook: 'https://facebook.com/coolcreekfamilydental',
    instagram: 'https://instagram.com/coolcreekfamilydental',
  },
  insurances: [
    'Delta Dental',
    'Cigna',
    'Aetna',
    'United Healthcare',
    'BlueCross BlueShield',
    'MetLife',
    'CareCredit',
  ],
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
    <div className="ccfd-preview__stars">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  )
}

function CoolCreekFamilyDentalPreview() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Preventive')

  useSEO({
    title: 'Cool Creek Family Dental Preview | That Software House',
    description:
      'A modern redesign preview for Cool Creek Family Dental — comprehensive family dentistry in River Place, Austin TX.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/cool-creek-family-dental',
    openGraph: {
      title: 'Cool Creek Family Dental Preview',
      description:
        'Preview concept for Cool Creek Family Dental — gentle, modern dentistry for the whole family.',
      url: 'https://preview.thatsoftwarehouse.com/cool-creek-family-dental',
      image: heroImage,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tabData = previewData.serviceCategories[activeTab]

  return (
    <main className="ccfd-preview" id="top">

      {/* ── NAV ── */}
      <header className={`ccfd-preview__nav ${navScrolled ? 'ccfd-preview__nav--scrolled' : ''}`}>
        <div className="ccfd-preview__shell ccfd-preview__nav-inner">
          <a href="#top" className="ccfd-preview__brand">
            <span className="ccfd-preview__brand-icon">
              <Smile size={18} />
            </span>
            <div>
              <span className="ccfd-preview__brand-name">Cool Creek</span>
              <span className="ccfd-preview__brand-sub">Family Dental</span>
            </div>
          </a>
          <nav className="ccfd-preview__nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={previewData.phoneHref} className="ccfd-preview__nav-cta">
            <Phone size={13} />
            {previewData.phoneDisplay}
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="ccfd-preview__hero" id="hero">
        <div className="ccfd-preview__hero-left">
          <Motion.span
            className="ccfd-preview__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            River Place · Austin, TX
          </Motion.span>

          <Motion.h1
            className="ccfd-preview__hero-headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A Smile Worth<br />
            <em>Coming Back For.</em>
          </Motion.h1>

          <Motion.p
            className="ccfd-preview__hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroSubheadline}
          </Motion.p>

          <Motion.div
            className="ccfd-preview__hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="ccfd-preview__btn ccfd-preview__btn--primary">
              {previewData.heroCta}
            </a>
            <a href="#services" className="ccfd-preview__btn ccfd-preview__btn--ghost">
              {previewData.secondaryCta}
            </a>
          </Motion.div>

          <Motion.div
            className="ccfd-preview__hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <StarRow />
            <span>
              {previewData.rating} · {previewData.reviewCount} Google Reviews
            </span>
          </Motion.div>
        </div>

        <Motion.div
          className="ccfd-preview__hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={heroImage} alt="Happy dental patient at Cool Creek Family Dental" />
          <div className="ccfd-preview__hero-badge">
            <span className="ccfd-preview__hero-badge-num">24+</span>
            <span className="ccfd-preview__hero-badge-label">Years of Experience</span>
          </div>
        </Motion.div>
      </section>

      {/* ── FEATURE STRIP ── */}
      <div className="ccfd-preview__feature-strip">
        <div className="ccfd-preview__shell">
          <Motion.div
            className="ccfd-preview__features"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {previewData.features.map((f) => (
              <Motion.div key={f.title} className="ccfd-preview__feature-card" variants={staggerChild}>
                <div className="ccfd-preview__feature-icon">
                  <f.icon size={20} />
                </div>
                <div>
                  <h3 className="ccfd-preview__feature-title">{f.title}</h3>
                  <p className="ccfd-preview__feature-desc">{f.desc}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <Section className="ccfd-preview__trust" id="about">
        <div className="ccfd-preview__shell ccfd-preview__trust-inner">
          <div className="ccfd-preview__trust-image">
            <img src={officeImage} alt="Cool Creek Family Dental office" />
            <div className="ccfd-preview__trust-image-badge">
              <MapPin size={13} />
              <span>River Place, Austin TX</span>
            </div>
          </div>
          <div className="ccfd-preview__trust-content">
            <span className="ccfd-preview__kicker">Why Choose Us</span>
            <h2 className="ccfd-preview__section-heading">
              Dentistry Built Around You — and Your Family.
            </h2>
            <p className="ccfd-preview__section-body">
              From routine cleanings to complex restorations, Cool Creek Family Dental offers
              comprehensive care for patients of every age. Dr. Kristoff and his team prioritize
              your comfort, your time, and your long-term dental health.
            </p>
            <Motion.div
              className="ccfd-preview__trust-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {previewData.trustReasons.map((r) => (
                <Motion.div key={r.title} className="ccfd-preview__trust-card" variants={staggerChild}>
                  <div className="ccfd-preview__trust-card-icon">
                    <r.icon size={17} />
                  </div>
                  <div>
                    <h4 className="ccfd-preview__trust-card-title">{r.title}</h4>
                    <p className="ccfd-preview__trust-card-desc">{r.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section className="ccfd-preview__services" id="services">
        <div className="ccfd-preview__shell">
          <div className="ccfd-preview__services-header">
            <span className="ccfd-preview__kicker">Our Services</span>
            <h2 className="ccfd-preview__section-heading">
              Everything Your Family Needs, Under One Roof.
            </h2>
          </div>

          <div className="ccfd-preview__tabs">
            {Object.keys(previewData.serviceCategories).map((tab) => (
              <button
                key={tab}
                className={`ccfd-preview__tab ${activeTab === tab ? 'ccfd-preview__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <Motion.div
            className="ccfd-preview__tab-panel"
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ccfd-preview__tab-info">
              <h3 className="ccfd-preview__tab-headline">{tabData.headline}</h3>
              <p className="ccfd-preview__tab-body">{tabData.body}</p>
              <a href="#contact" className="ccfd-preview__btn ccfd-preview__btn--primary ccfd-preview__btn--sm">
                Book a Consultation
              </a>
            </div>
            <div className="ccfd-preview__tab-services">
              {tabData.services.map((s) => (
                <div key={s.title} className="ccfd-preview__service-card">
                  <div className="ccfd-preview__service-icon">
                    <s.icon size={18} />
                  </div>
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </Section>

      {/* ── TEAM ── */}
      <Section className="ccfd-preview__team" id="team">
        <div className="ccfd-preview__shell">
          <div className="ccfd-preview__team-header">
            <span className="ccfd-preview__kicker">Meet the Team</span>
            <h2 className="ccfd-preview__section-heading">Expert Dentists Who Actually Listen.</h2>
          </div>
          <Motion.div
            className="ccfd-preview__team-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {previewData.doctors.map((doc) => (
              <Motion.div key={doc.name} className="ccfd-preview__doctor-card" variants={staggerChild}>
                <div className="ccfd-preview__doctor-photo">
                  <img src={doc.image} alt={doc.name} />
                  <div className="ccfd-preview__doctor-exp">{doc.yearsExp}</div>
                </div>
                <div className="ccfd-preview__doctor-info">
                  <p className="ccfd-preview__doctor-role">{doc.title}</p>
                  <h3 className="ccfd-preview__doctor-name">{doc.name}</h3>
                  <p className="ccfd-preview__doctor-bio">{doc.bio}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="ccfd-preview__testimonials" id="reviews">
        <div className="ccfd-preview__shell">
          <div className="ccfd-preview__testimonials-header">
            <span className="ccfd-preview__kicker">Patient Stories</span>
            <h2 className="ccfd-preview__section-heading">What Our Patients Are Saying.</h2>
          </div>
          <Motion.div
            className="ccfd-preview__testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {previewData.testimonials.map((t) => (
              <Motion.div
                key={t.author}
                className="ccfd-preview__testimonial-card"
                variants={staggerChild}
              >
                <StarRow count={t.rating} />
                <blockquote className="ccfd-preview__testimonial-text">"{t.text}"</blockquote>
                <div className="ccfd-preview__testimonial-author">
                  <span className="ccfd-preview__testimonial-name">{t.author}</span>
                  <span className="ccfd-preview__testimonial-role">{t.role}</span>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section className="ccfd-preview__cta-banner">
        <div className="ccfd-preview__shell ccfd-preview__cta-banner-inner">
          <Motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="ccfd-preview__kicker ccfd-preview__kicker--light">
              Ready to Get Started?
            </span>
            <h2 className="ccfd-preview__cta-headline">
              Your Family Deserves a Dentist You Can Trust.
            </h2>
            <p className="ccfd-preview__cta-sub">
              Schedule your first visit with Cool Creek Family Dental — accepting new patients in
              River Place, Steiner Ranch, Four Points, Lakeway, and West Austin.
            </p>
            <div className="ccfd-preview__cta-actions">
              <a href={previewData.phoneHref} className="ccfd-preview__btn ccfd-preview__btn--white">
                <Phone size={15} />
                {previewData.phoneDisplay}
              </a>
              <a href="#contact" className="ccfd-preview__btn ccfd-preview__btn--accent">
                Book Your Visit
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="ccfd-preview__contact" id="contact">
        <div className="ccfd-preview__shell ccfd-preview__contact-inner">
          <div className="ccfd-preview__contact-info">
            <span className="ccfd-preview__kicker">Find Us</span>
            <h2 className="ccfd-preview__section-heading">Visit Us in River Place</h2>
            <div className="ccfd-preview__contact-details">
              <div className="ccfd-preview__contact-item">
                <MapPin size={16} />
                <div>
                  <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                    {previewData.address}
                    <br />
                    {previewData.city}
                  </a>
                </div>
              </div>
              <div className="ccfd-preview__contact-item">
                <Phone size={16} />
                <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              </div>
              <div className="ccfd-preview__contact-item">
                <Clock3 size={16} />
                <div>
                  {previewData.hours.map((h) => (
                    <p key={h.day}>
                      <strong>{h.day}</strong> · {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="ccfd-preview__insurance-pills">
              <p className="ccfd-preview__insurance-label">Accepted Insurance & Payment</p>
              <div className="ccfd-preview__pills">
                {previewData.insurances.map((ins) => (
                  <span key={ins} className="ccfd-preview__pill">
                    {ins}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="ccfd-preview__contact-card">
            <h3>Request an Appointment</h3>
            <p>Call us or fill out the form below — we'll reach out within 24 hours to confirm.</p>
            <div className="ccfd-preview__form">
              <input type="text" placeholder="Your Name" aria-label="Name" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone" />
              <input type="text" placeholder="Preferred Day & Time" aria-label="Preferred time" />
              <a
                href={previewData.phoneHref}
                className="ccfd-preview__btn ccfd-preview__btn--primary ccfd-preview__btn--full"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ccfd-preview__footer">
        <div className="ccfd-preview__shell ccfd-preview__footer-inner">
          <div className="ccfd-preview__footer-brand">
            <div className="ccfd-preview__footer-logo">
              <Smile size={20} />
              <div>
                <span className="ccfd-preview__footer-name">Cool Creek</span>
                <span className="ccfd-preview__footer-sub">Family Dental</span>
              </div>
            </div>
            <p className="ccfd-preview__footer-tagline">{previewData.tagline}</p>
            <div className="ccfd-preview__footer-social">
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
            </div>
          </div>

          <div className="ccfd-preview__footer-cols">
            <div className="ccfd-preview__footer-col">
              <h4>Practice</h4>
              <a href="#about">About Us</a>
              <a href="#team">Meet the Team</a>
              <a href="#reviews">Patient Stories</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="ccfd-preview__footer-col">
              <h4>Services</h4>
              <a href="#services">Preventive</a>
              <a href="#services">Restorative</a>
              <a href="#services">Cosmetic</a>
              <a href="#services">Pediatric</a>
            </div>
            <div className="ccfd-preview__footer-col">
              <h4>Contact</h4>
              <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                {previewData.address}
              </a>
              <p>{previewData.city}</p>
            </div>
          </div>
        </div>

        <div className="ccfd-preview__footer-bottom">
          <div className="ccfd-preview__shell ccfd-preview__footer-bottom-inner">
            <p>© 2025 Cool Creek Family Dental. All rights reserved.</p>
            <div className="ccfd-preview__footer-legal">
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
      <div className="ccfd-preview__mobile-rail">
        <a
          href={previewData.phoneHref}
          className="ccfd-preview__rail-btn ccfd-preview__rail-btn--ghost"
        >
          <Phone size={15} />
          Call Now
        </a>
        <a href="#contact" className="ccfd-preview__rail-btn ccfd-preview__rail-btn--primary">
          Book Visit
        </a>
      </div>

    </main>
  )
}

export default CoolCreekFamilyDentalPreview
