import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  Brain,
  Clock3,
  Ear,
  Facebook,
  HeartPulse,
  Instagram,
  Linkedin,
  MapPin,
  Moon,
  Phone,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  Wind,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './ENTSAustinPreview.css'

const heroImage = 'assets/hero/hero2.png'
const doctorImage1 =
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80'
const doctorImage2 =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80'
const officeImage =
  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80'
const patientImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80'

const previewData = {
  businessName: 'ENT Specialists of Austin',
  tagline: 'Expert Ear, Nose & Throat Care in Austin & Cedar Park',
  phoneDisplay: '(512) xxx-xxxx',
  phoneHref: 'tel:+1512',
  address: 'Austin & Cedar Park, TX',
  mapsUrl: 'https://maps.google.com/?q=ENT+Specialists+of+Austin+TX',
  heroHeadline: 'Expert ENT Care, Personalized for You.',
  heroSubheadline:
    'Board-certified ear, nose, and throat specialists serving Austin and Cedar Park — compassionate care with 25+ years of trusted experience.',
  heroCta: 'Request an Appointment',
  secondaryCta: 'Our Services',
  stats: [
    { value: '25+', label: 'Years of Experience' },
    { value: '2', label: 'Austin-Area Locations' },
    { value: '5.0★', label: 'Patient Rating' },
    { value: '10K+', label: 'Patients Served' },
  ],
  features: [
    {
      icon: Award,
      title: 'Board-Certified Specialists',
      desc: 'Our ENT physicians are fellowship-trained and board-certified in otolaryngology and head & neck surgery.',
    },
    {
      icon: HeartPulse,
      title: 'Personalized Treatment Plans',
      desc: 'Every patient receives a customized care plan tailored to their specific condition and lifestyle.',
    },
    {
      icon: Stethoscope,
      title: 'Comprehensive Diagnostics',
      desc: 'Advanced in-office diagnostics including audiometry, allergy testing, endoscopy, and sleep studies.',
    },
    {
      icon: ShieldCheck,
      title: 'Both Medical & Surgical Care',
      desc: 'We offer complete ENT care from conservative medical management to minimally invasive surgery.',
    },
  ],
  serviceCategories: {
    Ear: {
      headline: 'Complete Ear & Hearing Care',
      body: 'From chronic ear infections to advanced hearing loss, our specialists diagnose and treat the full spectrum of ear disorders with the latest technology and proven therapies.',
      image: officeImage,
      services: [
        { title: 'Hearing Loss & Hearing Aids', icon: Ear },
        { title: 'Ear Infections (Otitis)', icon: Shield },
        { title: 'Tinnitus Management', icon: Activity },
        { title: 'Vertigo & Balance Disorders', icon: Brain },
      ],
    },
    Nose: {
      headline: 'Sinus & Nasal Expertise',
      body: 'Chronic sinus issues, nasal polyps, deviated septum, or recurring allergies — our nasal and sinus specialists get to the root of your symptoms and provide lasting relief.',
      image: patientImage,
      services: [
        { title: 'Sinusitis & Sinus Surgery', icon: Wind },
        { title: 'Allergy Testing & Treatment', icon: Sparkles },
        { title: 'Deviated Septum', icon: Zap },
        { title: 'Nasal Polyps', icon: BadgeCheck },
      ],
    },
    Throat: {
      headline: 'Throat, Voice & Swallowing',
      body: 'Hoarseness, chronic sore throat, swallowing difficulties, and tonsil disorders — our throat specialists offer effective diagnosis and minimally invasive treatment options.',
      image: doctorImage2,
      services: [
        { title: 'Tonsillitis & Adenoids', icon: HeartPulse },
        { title: 'Voice & Larynx Disorders', icon: Activity },
        { title: 'Swallowing Difficulties', icon: Stethoscope },
        { title: 'Acid Reflux (LPR)', icon: Shield },
      ],
    },
    Sleep: {
      headline: 'Sleep Apnea & Snoring Solutions',
      body: 'Poor sleep affects every aspect of your health. Our sleep specialists evaluate and treat obstructive sleep apnea and snoring with both surgical and non-surgical options.',
      image: officeImage,
      services: [
        { title: 'Sleep Apnea Evaluation', icon: Moon },
        { title: 'Snoring Treatment', icon: Wind },
        { title: 'CPAP Alternatives', icon: BadgeCheck },
        { title: 'In-Office Sleep Testing', icon: Activity },
      ],
    },
  },
  doctors: [
    {
      name: 'Our ENT Team',
      title: 'Board-Certified Otolaryngologists',
      yearsExp: '25+ Yrs',
      image: doctorImage1,
      bio: 'Our team of board-certified ENT specialists brings decades of combined experience in otolaryngology and head & neck surgery. Patients across Austin and Cedar Park trust us for accurate diagnoses, compassionate communication, and lasting results.',
    },
    {
      name: 'Austin & Cedar Park Locations',
      title: 'Two Convenient Locations',
      yearsExp: '2 Offices',
      image: doctorImage2,
      bio: 'With offices in Austin and Cedar Park, we make expert ENT care convenient for patients throughout the greater Austin metro area. Both locations offer full diagnostic capabilities, in-office procedures, and flexible scheduling.',
    },
  ],
  testimonials: [
    {
      text: "After years of chronic sinus infections, I finally found lasting relief here. The doctor took time to explain every option, and my balloon sinuplasty procedure was a total game-changer. I can't recommend them enough.",
      author: 'Karen M.',
      role: 'Austin Patient',
      rating: 5,
    },
    {
      text: "I was suffering from severe vertigo and didn't know where to turn. The team here diagnosed the issue quickly and had me back on my feet within weeks. Incredibly knowledgeable and caring staff.",
      author: 'David R.',
      role: 'Cedar Park Patient',
      rating: 5,
    },
    {
      text: "My son has had ear infections his whole life. The ENT specialists here were incredible with him — patient, kind, and genuinely thorough. The ear tubes were the best decision we ever made.",
      author: 'Ashley T.',
      role: 'Austin Patient',
      rating: 5,
    },
  ],
  conditions: [
    'Chronic Sinusitis',
    'Hearing Loss',
    'Tinnitus',
    'Sleep Apnea',
    'Vertigo',
    'Allergies',
    'Tonsillitis',
    'Nasal Polyps',
    'Voice Disorders',
    'Deviated Septum',
    'Ear Infections',
    'Acid Reflux (LPR)',
  ],
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  locations: ['Austin, TX', 'Cedar Park, TX'],
  socialLinks: {
    facebook: 'https://facebook.com/entsaustin',
    instagram: 'https://instagram.com/entsaustin',
    linkedin: 'https://linkedin.com/company/entsaustin',
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
    <div className="entsa-preview__stars">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  )
}

function ENTSAustinPreview() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Ear')

  useSEO({
    title: 'ENT Specialists of Austin Preview | That Software House',
    description:
      'A modern redesign preview for ENT Specialists of Austin — expert ear, nose & throat care in Austin and Cedar Park, TX.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/ents-austin',
    openGraph: {
      title: 'ENT Specialists of Austin Preview',
      description:
        'Preview concept for ENT Specialists of Austin — personalized ENT care with 25+ years of trusted experience.',
      url: 'https://preview.thatsoftwarehouse.com/ents-austin',
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
    <main className="entsa-preview" id="top">

      {/* ── NAV ── */}
      <header className={`entsa-preview__nav ${navScrolled ? 'entsa-preview__nav--scrolled' : ''}`}>
        <div className="entsa-preview__shell entsa-preview__nav-inner">
          <a href="#top" className="entsa-preview__brand">
            <div className="entsa-preview__brand-mark">
              <Stethoscope size={16} />
            </div>
            <div>
              <span className="entsa-preview__brand-name">ENT Specialists</span>
              <span className="entsa-preview__brand-sub">of Austin</span>
            </div>
          </a>
          <nav className="entsa-preview__nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Locations</a>
          </nav>
          <a href="#contact" className="entsa-preview__nav-cta">
            Request Appointment <ArrowRight size={13} />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="entsa-preview__hero">
        <div className="entsa-preview__hero-left">
          <Motion.span
            className="entsa-preview__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Austin · Cedar Park, TX
          </Motion.span>

          <Motion.h1
            className="entsa-preview__hero-headline"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Expert ENT Care,<br />
            <em>Personalized for You.</em>
          </Motion.h1>

          <Motion.p
            className="entsa-preview__hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroSubheadline}
          </Motion.p>

          <Motion.div
            className="entsa-preview__hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="entsa-preview__btn entsa-preview__btn--primary">
              {previewData.heroCta}
            </a>
            <a href="#services" className="entsa-preview__btn entsa-preview__btn--ghost">
              {previewData.secondaryCta}
            </a>
          </Motion.div>

          <Motion.div
            className="entsa-preview__hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="entsa-preview__hero-trust-item">
              <StarRow />
              <span>5.0 Patient Rating</span>
            </div>
            <div className="entsa-preview__hero-trust-sep" />
            <div className="entsa-preview__hero-trust-item">
              <BadgeCheck size={15} />
              <span>Board-Certified Specialists</span>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          className="entsa-preview__hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={heroImage} alt="ENT Specialist consultation in Austin" />
          <div className="entsa-preview__hero-badge">
            <span className="entsa-preview__hero-badge-num">25+</span>
            <span className="entsa-preview__hero-badge-label">Years Serving<br />Austin</span>
          </div>
        </Motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="entsa-preview__stats-bar">
        <div className="entsa-preview__shell">
          <Motion.div
            className="entsa-preview__stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {previewData.stats.map((s, i) => (
              <Motion.div key={s.label} className="entsa-preview__stat" variants={staggerChild}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                {i < previewData.stats.length - 1 && (
                  <div className="entsa-preview__stat-divider" />
                )}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* ── FEATURES / WHY US ── */}
      <Section className="entsa-preview__features" id="about">
        <div className="entsa-preview__shell entsa-preview__features-inner">
          <div className="entsa-preview__features-left">
            <span className="entsa-preview__kicker">Why Choose Us</span>
            <h2 className="entsa-preview__section-heading">
              Advanced ENT Care In a Compassionate, Patient-First Environment.
            </h2>
            <p className="entsa-preview__section-body">
              Our board-certified otolaryngologists bring decades of combined experience to every
              visit — from complex surgical cases to straightforward sinus relief. Two convenient
              Austin-area locations make expert care accessible when you need it most.
            </p>
            <a href="#contact" className="entsa-preview__btn entsa-preview__btn--primary entsa-preview__btn--sm">
              Schedule a Visit <ArrowRight size={14} />
            </a>
          </div>

          <Motion.div
            className="entsa-preview__features-right"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {previewData.features.map((f) => (
              <Motion.div key={f.title} className="entsa-preview__feature-card" variants={staggerChild}>
                <div className="entsa-preview__feature-icon">
                  <f.icon size={20} />
                </div>
                <div>
                  <h4 className="entsa-preview__feature-title">{f.title}</h4>
                  <p className="entsa-preview__feature-desc">{f.desc}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section className="entsa-preview__services" id="services">
        <div className="entsa-preview__shell">
          <div className="entsa-preview__services-header">
            <span className="entsa-preview__kicker">Our Services</span>
            <h2 className="entsa-preview__section-heading">
              Comprehensive ENT Care for Every Condition.
            </h2>
            <p className="entsa-preview__section-body entsa-preview__section-body--center">
              From hearing health to sinus surgery, our specialists offer the full spectrum of
              ear, nose, and throat care using the latest proven techniques.
            </p>
          </div>

          <div className="entsa-preview__tabs">
            {Object.keys(previewData.serviceCategories).map((tab) => (
              <button
                key={tab}
                className={`entsa-preview__tab ${activeTab === tab ? 'entsa-preview__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <Motion.div
            className="entsa-preview__tab-panel"
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="entsa-preview__tab-image">
              <img src={tabData.image} alt={activeTab} />
            </div>
            <div className="entsa-preview__tab-content">
              <h3 className="entsa-preview__tab-headline">{tabData.headline}</h3>
              <p className="entsa-preview__tab-body">{tabData.body}</p>
              <div className="entsa-preview__tab-services">
                {tabData.services.map((s) => (
                  <div key={s.title} className="entsa-preview__service-item">
                    <div className="entsa-preview__service-icon">
                      <s.icon size={16} />
                    </div>
                    <span>{s.title}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="entsa-preview__btn entsa-preview__btn--primary entsa-preview__btn--sm">
                Book a Consultation
              </a>
            </div>
          </Motion.div>
        </div>
      </Section>

      {/* ── CONDITIONS WE TREAT ── */}
      <div className="entsa-preview__conditions-bar">
        <div className="entsa-preview__shell">
          <p className="entsa-preview__conditions-label">Conditions We Treat</p>
          <div className="entsa-preview__conditions-pills">
            {previewData.conditions.map((c) => (
              <span key={c} className="entsa-preview__condition-pill">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── TEAM / LOCATIONS ── */}
      <Section className="entsa-preview__team" id="team">
        <div className="entsa-preview__shell">
          <div className="entsa-preview__team-header">
            <span className="entsa-preview__kicker">Our Practice</span>
            <h2 className="entsa-preview__section-heading">
              Trusted ENT Specialists. Two Austin-Area Locations.
            </h2>
          </div>
          <Motion.div
            className="entsa-preview__team-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {previewData.doctors.map((doc) => (
              <Motion.div key={doc.name} className="entsa-preview__team-card" variants={staggerChild}>
                <div className="entsa-preview__team-photo">
                  <img src={doc.image} alt={doc.name} />
                  <div className="entsa-preview__team-badge">{doc.yearsExp}</div>
                </div>
                <div className="entsa-preview__team-info">
                  <p className="entsa-preview__team-role">{doc.title}</p>
                  <h3 className="entsa-preview__team-name">{doc.name}</h3>
                  <p className="entsa-preview__team-bio">{doc.bio}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="entsa-preview__testimonials" id="reviews">
        <div className="entsa-preview__shell">
          <div className="entsa-preview__testimonials-header">
            <span className="entsa-preview__kicker">Patient Stories</span>
            <h2 className="entsa-preview__section-heading">
              What Our Patients Are Saying.
            </h2>
          </div>
          <Motion.div
            className="entsa-preview__testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {previewData.testimonials.map((t) => (
              <Motion.div
                key={t.author}
                className="entsa-preview__testimonial-card"
                variants={staggerChild}
              >
                <StarRow count={t.rating} />
                <blockquote className="entsa-preview__testimonial-text">"{t.text}"</blockquote>
                <div className="entsa-preview__testimonial-author">
                  <span className="entsa-preview__testimonial-name">{t.author}</span>
                  <span className="entsa-preview__testimonial-role">{t.role}</span>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section className="entsa-preview__cta-banner">
        <div className="entsa-preview__shell entsa-preview__cta-inner">
          <Motion.div
            className="entsa-preview__cta-content"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="entsa-preview__kicker entsa-preview__kicker--light">
              Accepting New Patients
            </span>
            <h2 className="entsa-preview__cta-headline">
              Ready to Breathe Easier, Hear Better, Feel Well?
            </h2>
            <p className="entsa-preview__cta-sub">
              Schedule your consultation at our Austin or Cedar Park location — same-week
              appointments often available for new patients.
            </p>
            <div className="entsa-preview__cta-actions">
              <a href="#contact" className="entsa-preview__btn entsa-preview__btn--white">
                Request Appointment
              </a>
              <a href="#services" className="entsa-preview__btn entsa-preview__btn--accent">
                View All Services
              </a>
            </div>
          </Motion.div>
          <div className="entsa-preview__cta-image">
            <img src={patientImage} alt="ENT patient consultation" />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="entsa-preview__contact" id="contact">
        <div className="entsa-preview__shell entsa-preview__contact-inner">
          <div className="entsa-preview__contact-info">
            <span className="entsa-preview__kicker">Find Us</span>
            <h2 className="entsa-preview__section-heading">Two Convenient Locations</h2>

            <div className="entsa-preview__location-cards">
              {previewData.locations.map((loc) => (
                <div key={loc} className="entsa-preview__location-card">
                  <div className="entsa-preview__location-icon">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="entsa-preview__location-city">{loc}</p>
                    <a href={previewData.mapsUrl} target="_blank" rel="noreferrer" className="entsa-preview__location-link">
                      Get Directions →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="entsa-preview__contact-details">
              <div className="entsa-preview__contact-item">
                <Phone size={15} />
                <a href={previewData.phoneHref}>Call to Schedule</a>
              </div>
              <div className="entsa-preview__contact-item">
                <Clock3 size={15} />
                <div>
                  {previewData.hours.map((h) => (
                    <p key={h.day}>
                      <strong>{h.day}</strong> · {h.time}
                    </p>
                  ))}
                </div>
              </div>
              <div className="entsa-preview__contact-item">
                <Users size={15} />
                <span>Accepting new patients — most insurance plans welcomed</span>
              </div>
            </div>
          </div>

          <div className="entsa-preview__contact-card">
            <h3>Request an Appointment</h3>
            <p>Fill out the form below and our team will reach out within one business day to confirm.</p>
            <div className="entsa-preview__form">
              <input type="text" placeholder="Your Full Name" aria-label="Name" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone" />
              <select aria-label="Reason for visit" className="entsa-preview__select">
                <option value="">Reason for Visit</option>
                <option>Ear / Hearing Issue</option>
                <option>Sinus / Nasal Problem</option>
                <option>Throat / Voice Concern</option>
                <option>Sleep Apnea / Snoring</option>
                <option>Allergies</option>
                <option>Other ENT Issue</option>
              </select>
              <select aria-label="Preferred location" className="entsa-preview__select">
                <option value="">Preferred Location</option>
                <option>Austin, TX</option>
                <option>Cedar Park, TX</option>
              </select>
              <a
                href={previewData.phoneHref}
                className="entsa-preview__btn entsa-preview__btn--primary entsa-preview__btn--full"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="entsa-preview__footer">
        <div className="entsa-preview__shell entsa-preview__footer-inner">
          <div className="entsa-preview__footer-brand">
            <div className="entsa-preview__footer-logo">
              <Stethoscope size={18} />
              <div>
                <span className="entsa-preview__footer-name">ENT Specialists</span>
                <span className="entsa-preview__footer-sub">of Austin</span>
              </div>
            </div>
            <p className="entsa-preview__footer-tagline">{previewData.tagline}</p>
            <div className="entsa-preview__footer-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href={previewData.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          <div className="entsa-preview__footer-cols">
            <div className="entsa-preview__footer-col">
              <h4>Practice</h4>
              <a href="#about">About Us</a>
              <a href="#team">Our Specialists</a>
              <a href="#reviews">Patient Reviews</a>
              <a href="#contact">Locations</a>
            </div>
            <div className="entsa-preview__footer-col">
              <h4>Services</h4>
              <a href="#services">Ear & Hearing</a>
              <a href="#services">Sinus & Nose</a>
              <a href="#services">Throat & Voice</a>
              <a href="#services">Sleep Apnea</a>
            </div>
            <div className="entsa-preview__footer-col">
              <h4>Locations</h4>
              {previewData.locations.map((loc) => (
                <a key={loc} href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                  {loc}
                </a>
              ))}
              <a href="#contact">Request Appointment</a>
            </div>
          </div>
        </div>

        <div className="entsa-preview__footer-bottom">
          <div className="entsa-preview__shell entsa-preview__footer-bottom-inner">
            <p>© 2025 ENT Specialists of Austin. All rights reserved.</p>
            <div className="entsa-preview__footer-legal">
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
      <div className="entsa-preview__mobile-rail">
        <a
          href={previewData.phoneHref}
          className="entsa-preview__rail-btn entsa-preview__rail-btn--ghost"
        >
          <Phone size={15} />
          Call
        </a>
        <a href="#contact" className="entsa-preview__rail-btn entsa-preview__rail-btn--primary">
          Book Appointment
        </a>
      </div>

    </main>
  )
}

export default ENTSAustinPreview
