import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crown,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  Phone,
  Quote,
  Scan,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Users,
  Zap,
  Microscope,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import './AustinFamilyDDSPreview.css'

const heroImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80'
const teamImage =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80'
const officeImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80'
const techImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80'

/* ── Lucide doesn't ship Tooth, so we use a simple inline SVG ── */
/* eslint-disable-next-line no-unused-vars */
function ToothIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8 2 5 5 5 8c0 2.5 1 4.5 1 7 0 2 1 5 3 5s3-3 3-3 1 3 3 3 3-3 3-5c0-2.5 1-4.5 1-7 0-3-3-6-7-6z" />
    </svg>
  )
}

const previewData = {
  businessName: 'Austin Family Dentistry',
  tagline: 'Stunning Transformations, Beautiful Smiles',
  phoneDisplay: '(512) 218-1130',
  phoneHref: 'tel:+15122181130',
  address: '13915 N Mopac Expy #110, Austin, TX 78728',
  mapsUrl: 'https://goo.gl/maps/qaHbu3gUGS1Us7DP9',
  heroHeadline: 'Stunning Transformations, Beautiful Smiles',
  heroSubheadline: 'Gentle, compassionate care — right here in North Austin.',
  heroDescription:
    'At Austin Family Dentistry, we believe your first visit should change how you feel about going to the dentist. Extended consultations, advanced technology, and a team that genuinely cares — because your smile deserves more than a routine cleaning.',
  heroCta: 'Request an Appointment',
  secondaryCta: 'Meet Our Doctors',
  stats: [
    { value: '20+', label: 'Years Serving Austin' },
    { value: '4.9★', label: 'Google Rating' },
    { value: '3', label: 'Dedicated Doctors' },
    { value: '1hr+', label: 'New Patient Visits' },
  ],
  trustPoints: [
    'Extended first-visit consultations — we take time to understand your smile goals.',
    'Customized treatment plans tailored to your health, budget, and comfort level.',
    'Advanced technology: iTero digital scanning, 3D printing, STA painless anesthesia.',
    'Serving families from Austin, Round Rock, and Pflugerville for over two decades.',
  ],
  techFeatures: [
    {
      label: 'iTero Digital Scanning',
      description:
        'No messy impressions. Our 3D intraoral scanner captures precise digital images of your teeth in minutes.',
      icon: Scan,
    },
    {
      label: 'In-Office 3D Printing',
      description:
        'Same-visit restorations and surgical guides printed on-site for faster, more accurate treatment.',
      icon: Microscope,
    },
    {
      label: 'STA Painless Anesthesia',
      description:
        'Computer-controlled anesthesia delivery that virtually eliminates the discomfort of injections.',
      icon: Heart,
    },
    {
      label: 'Invisalign Provider',
      description:
        'Clear aligner therapy to straighten your smile discreetly — no metal wires required.',
      icon: Smile,
    },
  ],
  serviceCategories: {
    Preventive: [
      {
        title: 'Comprehensive Exams & Cleanings',
        description:
          'Thorough dental exams with professional cleanings to keep your oral health in top shape.',
        icon: Shield,
      },
      {
        title: 'Dental Sealants',
        description:
          'Protective coatings applied to back teeth to prevent decay in hard-to-reach grooves.',
        icon: ShieldCheck,
      },
      {
        title: 'Oral Cancer Screenings',
        description:
          'Early-detection examinations to identify warning signs before they become serious.',
        icon: Scan,
      },
      {
        title: 'Periodontal (Gum) Therapy',
        description:
          'Deep cleaning and ongoing maintenance to treat and manage gum disease effectively.',
        icon: Heart,
      },
    ],
    Restorative: [
      {
        title: 'Dental Crowns & Bridges',
        description:
          'Custom-made crowns and bridges to restore damaged or missing teeth with natural-looking results.',
        icon: Crown,
      },
      {
        title: 'Dental Implants',
        description:
          'Permanent, life-like tooth replacements anchored directly into your jawbone.',
        icon: Syringe,
      },
      {
        title: 'Tooth-Colored Fillings',
        description:
          'Modern composite resin fillings that blend seamlessly with your natural tooth color.',
        icon: Sparkles,
      },
      {
        title: 'Full & Partial Dentures',
        description:
          'Comfortable, well-fitted removable tooth replacements for missing teeth.',
        icon: Smile,
      },
    ],
    Cosmetic: [
      {
        title: 'Porcelain Veneers',
        description:
          'Ultra-thin porcelain shells bonded to teeth for a stunning, camera-ready smile makeover.',
        icon: Sparkles,
      },
      {
        title: 'Invisalign Clear Aligners',
        description:
          'Virtually invisible aligners to straighten teeth comfortably and discreetly.',
        icon: Smile,
      },
      {
        title: 'Teeth Whitening',
        description:
          'Professional-grade whitening treatments that safely brighten your smile by several shades.',
        icon: Star,
      },
      {
        title: 'Smile Makeovers',
        description:
          'Comprehensive cosmetic treatment plans combining multiple services for a complete transformation.',
        icon: Zap,
      },
    ],
    Specialty: [
      {
        title: 'Sleep Apnea Appliances',
        description:
          'Custom oral appliances to treat obstructive sleep apnea and improve quality of sleep.',
        icon: Brain,
      },
      {
        title: 'TMJ/TMD Therapy',
        description:
          'Diagnosis and treatment for jaw joint pain, clicking, and related discomfort.',
        icon: Stethoscope,
      },
      {
        title: 'Emergency Dentistry',
        description:
          'Prompt care for toothaches, broken teeth, lost fillings, and other urgent dental needs.',
        icon: Zap,
      },
      {
        title: 'Orthodontics',
        description:
          'Teeth straightening solutions for teens and adults, including Invisalign and traditional braces.',
        icon: CalendarDays,
      },
    ],
  },
  doctors: [
    {
      name: 'Dr. Kara Diemer',
      title: 'Lead Dentist, DDS',
      bio: "Founder of Austin Family Dentistry's current vision. Dr. Diemer is known for her warmth, honesty, and commitment to personalized care that transforms smiles and builds lasting patient relationships.",
    },
    {
      name: 'Dr. Shweta',
      title: 'General Dentist, DDS',
      bio: 'Dedicated to creating a comfortable, stress-free experience for every patient. Skilled in a wide range of general and cosmetic procedures with a gentle, thorough approach.',
    },
    {
      name: 'Dr. Nerea Robles-Leyzaola',
      title: 'General Dentist, DDS',
      bio: 'Passionate about preventive care and patient education. Dr. Nerea brings a meticulous eye for detail and a caring chair-side manner to every appointment.',
    },
  ],
  reviews: [
    {
      text: 'Always the best experience! The entire staff is extremely friendly and professional. I genuinely look forward to my visits.',
      author: 'Nicole Hartje',
    },
    {
      text: 'All of the staff are professional, friendly, and take extra care to make sure you are comfortable throughout your visit.',
      author: 'Lucky Dukes',
    },
    {
      text: 'I have been a patient for about 20 years. The staff and the doctors have all been wonderful — I wouldn\'t go anywhere else.',
      author: 'Livia Ross',
    },
    {
      text: 'If you are looking for dentists that give excellent care, this is the place. They are thorough, kind, and genuinely invested in your health.',
      author: 'Karen Jennings',
    },
  ],
  hours: [
    { day: 'Monday – Thursday', time: '8:00 am – 5:00 pm' },
    { day: 'Friday', time: '8:00 am – 3:00 pm' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  insuranceNotes: [
    'Most major PPO dental plans accepted',
    'Flexible payment plans available',
    'CareCredit financing options',
    'Insurance verification before your visit',
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/austinfamilydentistry2022/',
    instagram: 'https://www.instagram.com/austinfamilydds/',
  },
}

/* ── Animation variants ── */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}

const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function Section({ children, className = '', id, stagger = false }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={stagger ? staggerContainer : fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      {children}
    </Motion.section>
  )
}

function StaggerItem({ children, className = '' }) {
  return (
    <Motion.div className={className} variants={staggerChild}>
      {children}
    </Motion.div>
  )
}

function AustinFamilyDDSPreview() {
  const [navSolid, setNavSolid] = useState(false)
  const [activeTab, setActiveTab] = useState('Preventive')
  const [currentReview, setCurrentReview] = useState(0)
  const [doctorIndex, setDoctorIndex] = useState(0)

  useSEO({
    title: 'Austin Family Dentistry Preview | That Software House',
    description:
      'A modern preview redesign for Austin Family Dentistry — gentle, compassionate care in North Austin, TX.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/austin-family-dds',
    openGraph: {
      title: 'Austin Family Dentistry Preview',
      description:
        'Preview concept for Austin Family Dentistry — stunning transformations, beautiful smiles.',
      url: 'https://preview.thatsoftwarehouse.com/austin-family-dds',
      image: heroImage,
    },
  })

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % previewData.reviews.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [])

  const tabKeys = Object.keys(previewData.serviceCategories)
  const activeServices = previewData.serviceCategories[activeTab]
  const canPrev = doctorIndex > 0
  const canNext = doctorIndex < previewData.doctors.length - 1

  return (
    <main className="afd-preview" id="top">
      {/* ── NAV ── */}
      <header className={`afd-preview__nav ${navSolid ? 'afd-preview__nav--solid' : ''}`}>
        <div className="afd-preview__nav-inner">
          <a href="#top" className="afd-preview__brand" aria-label={previewData.businessName}>
            <span className="afd-preview__brand-mark">AFD</span>
            <span className="afd-preview__brand-text">
              <strong>Austin Family Dentistry</strong>
              <small>North Austin, TX</small>
            </span>
          </a>

          <nav className="afd-preview__nav-links" aria-label="Preview sections">
            <a href="#technology">Technology</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="afd-preview__nav-cta">
            {previewData.heroCta}
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="afd-preview__hero"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(30,66,50,0.72) 0%, rgba(30,66,50,0.55) 60%, rgba(192,120,64,0.45) 100%), url(${heroImage})`,
        }}
      >
        <div className="afd-preview__hero-inner">
          <Motion.p
            className="afd-preview__hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroSubheadline}
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroHeadline}
          </Motion.h1>

          <Motion.p
            className="afd-preview__hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroDescription}
          </Motion.p>

          <Motion.div
            className="afd-preview__hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="afd-preview__button afd-preview__button--accent">
              {previewData.heroCta}
              <ArrowRight size={18} />
            </a>
            <a href="#doctors" className="afd-preview__button afd-preview__button--outline">
              {previewData.secondaryCta}
            </a>
          </Motion.div>

          <Motion.div
            className="afd-preview__hero-meta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href={previewData.phoneHref}>
              <Phone size={15} />
              {previewData.phoneDisplay}
            </a>
            <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={15} />
              N Mopac Expy, Austin TX
            </a>
          </Motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <Section className="afd-preview__stats-bar" stagger>
        {previewData.stats.map((stat) => (
          <StaggerItem key={stat.label} className="afd-preview__stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </StaggerItem>
        ))}
      </Section>

      <div className="afd-preview__shell">
        {/* ── TRUST POINTS ── */}
        <Section className="afd-preview__section afd-preview__trust" stagger>
          <Motion.div className="afd-preview__section-heading" variants={staggerChild}>
            <p className="afd-preview__kicker">Why Choose Us</p>
            <h2>Compassionate care built around your smile and your schedule.</h2>
          </Motion.div>
          <div className="afd-preview__trust-grid">
            {previewData.trustPoints.map((point) => (
              <StaggerItem key={point} className="afd-preview__trust-card">
                <ShieldCheck size={20} />
                <p>{point}</p>
              </StaggerItem>
            ))}
          </div>
          <Motion.div className="afd-preview__trust-image" variants={staggerChild}>
            <img src={officeImage} alt="Modern Austin Family Dentistry office" />
          </Motion.div>
        </Section>

        {/* ── TECHNOLOGY ── */}
        <Section className="afd-preview__section afd-preview__tech" id="technology" stagger>
          <Motion.div className="afd-preview__section-heading" variants={staggerChild}>
            <p className="afd-preview__kicker">Advanced Technology</p>
            <h2>Dentistry That Keeps Up With Your Expectations</h2>
          </Motion.div>
          <div className="afd-preview__tech-grid">
            {previewData.techFeatures.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.label} className="afd-preview__tech-card">
                  <div className="afd-preview__tech-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </StaggerItem>
              )
            })}
          </div>
          <Motion.div className="afd-preview__tech-image" variants={staggerChild}>
            <img src={techImage} alt="Advanced dental technology at Austin Family Dentistry" />
          </Motion.div>
        </Section>

        {/* ── SERVICES ── */}
        <Section className="afd-preview__section" id="services">
          <Motion.div className="afd-preview__section-heading" variants={fadeIn}>
            <p className="afd-preview__kicker">Services</p>
            <h2>Comprehensive Care for the Whole Family</h2>
          </Motion.div>
          <div className="afd-preview__tabs">
            {tabKeys.map((tab) => (
              <button
                key={tab}
                className={`afd-preview__tab ${activeTab === tab ? 'afd-preview__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <Motion.div
            className="afd-preview__services-grid"
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {activeServices.map((service) => {
              const Icon = service.icon
              return (
                <Motion.article
                  key={service.title}
                  className="afd-preview__service-card"
                  variants={staggerChild}
                >
                  <div className="afd-preview__service-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Motion.article>
              )
            })}
          </Motion.div>
        </Section>

        {/* ── DOCTORS ── */}
        <Section className="afd-preview__section afd-preview__doctors-section" id="doctors">
          <Motion.div className="afd-preview__section-heading" variants={fadeIn}>
            <p className="afd-preview__kicker">Our Team</p>
            <h2>Meet the Doctors Behind Your Smile</h2>
          </Motion.div>

          <div className="afd-preview__carousel-controls">
            <button
              className="afd-preview__carousel-btn"
              onClick={() => setDoctorIndex(Math.max(0, doctorIndex - 1))}
              disabled={!canPrev}
              aria-label="Previous doctor"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="afd-preview__carousel-btn"
              onClick={() => setDoctorIndex(Math.min(previewData.doctors.length - 1, doctorIndex + 1))}
              disabled={!canNext}
              aria-label="Next doctor"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="afd-preview__carousel-wrapper">
            <Motion.div
              className="afd-preview__carousel-track"
              animate={{ x: `calc(-${doctorIndex} * (min(320px, 80vw) + 1.25rem))` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.doctors.map((doctor) => (
                <article key={doctor.name} className="afd-preview__doctor-card">
                  <div className="afd-preview__doctor-photo">
                    <img src={teamImage} alt={`${doctor.name} portrait`} />
                  </div>
                  <div className="afd-preview__doctor-info">
                    <h3>{doctor.name}</h3>
                    <p className="afd-preview__doctor-title">{doctor.title}</p>
                    <p className="afd-preview__doctor-bio">{doctor.bio}</p>
                  </div>
                </article>
              ))}
            </Motion.div>
          </div>

          <div className="afd-preview__carousel-dots">
            {previewData.doctors.map((_, i) => (
              <button
                key={i}
                className={`afd-preview__carousel-dot ${doctorIndex === i ? 'afd-preview__carousel-dot--active' : ''}`}
                onClick={() => setDoctorIndex(i)}
                aria-label={`Doctor ${i + 1}`}
              />
            ))}
          </div>
        </Section>

        {/* ── TESTIMONIALS ── */}
        <Section className="afd-preview__section afd-preview__testimonials" id="reviews">
          <Motion.div className="afd-preview__section-heading" variants={fadeIn}>
            <p className="afd-preview__kicker">Patient Reviews</p>
            <h2>Trusted by Austin Families for Over 20 Years</h2>
          </Motion.div>
          <div className="afd-preview__quote-block">
            <Quote size={52} className="afd-preview__quote-mark" />
            <Motion.p
              key={currentReview}
              className="afd-preview__quote-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              {previewData.reviews[currentReview].text}
            </Motion.p>
            <div className="afd-preview__quote-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="currentColor" />
              ))}
            </div>
            <span className="afd-preview__quote-author">
              — {previewData.reviews[currentReview].author}
            </span>
            <div className="afd-preview__quote-dots">
              {previewData.reviews.map((_, i) => (
                <button
                  key={i}
                  className={`afd-preview__quote-dot ${currentReview === i ? 'afd-preview__quote-dot--active' : ''}`}
                  onClick={() => setCurrentReview(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* ── INSURANCE ── */}
        <Section className="afd-preview__section afd-preview__insurance" stagger>
          <Motion.div className="afd-preview__section-heading" variants={staggerChild}>
            <p className="afd-preview__kicker">Insurance & Financing</p>
            <h2>Quality Care Within Your Reach</h2>
          </Motion.div>
          <div className="afd-preview__tag-row">
            {previewData.insuranceNotes.map((note) => (
              <StaggerItem key={note} className="afd-preview__tag">
                <ShieldCheck size={16} />
                <span>{note}</span>
              </StaggerItem>
            ))}
          </div>
        </Section>

        {/* ── CONTACT ── */}
        <Section className="afd-preview__section afd-preview__contact" id="contact">
          <div className="afd-preview__contact-inner">
            <Motion.div className="afd-preview__contact-copy" variants={fadeIn}>
              <p className="afd-preview__kicker">Visit Us</p>
              <h2>Your New Smile Starts Here</h2>
              <div className="afd-preview__contact-list">
                <a href={previewData.phoneHref}>
                  <Phone size={18} />
                  <span>{previewData.phoneDisplay}</span>
                </a>
                <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin size={18} />
                  <span>{previewData.address}</span>
                </a>
                <div className="afd-preview__contact-item">
                  <Clock3 size={18} />
                  <div className="afd-preview__hours-list">
                    {previewData.hours.map((h) => (
                      <div key={h.day} className="afd-preview__hours-row">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Motion.div>

            <Motion.div className="afd-preview__contact-card" variants={fadeIn}>
              <span className="afd-preview__card-label">Preview Concept</span>
              <h3>Request an Appointment</h3>
              <p>
                This preview demonstrates how Austin Family Dentistry could present scheduling and new-patient information more clearly. No live backend is connected.
              </p>
              <div className="afd-preview__contact-actions">
                <a href="#top" className="afd-preview__button afd-preview__button--accent">
                  Get Started
                </a>
                <a href="/" className="afd-preview__button afd-preview__button--outline-dark">
                  Back to Preview Hub
                </a>
              </div>
            </Motion.div>
          </div>
        </Section>

        {/* ── FOOTER ── */}
        <footer className="afd-preview__footer">
          <div className="afd-preview__footer-top">
            <div className="afd-preview__footer-brand">
              <strong>{previewData.businessName}</strong>
              <p>{previewData.tagline}</p>
            </div>
            <div className="afd-preview__footer-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="afd-preview__footer-bottom">
            <p>
              <a href="https://thatsoftwarehouse.com" target="_blank" rel="noreferrer">
                Preview by That Software House
              </a>
            </p>
          </div>
        </footer>
      </div>

      {/* ── MOBILE BOTTOM RAIL ── */}
      <div className="afd-preview__mobile-rail">
        <a href={previewData.phoneHref} className="afd-preview__mobile-action afd-preview__mobile-action--ghost">
          <Phone size={18} />
          Call
        </a>
        <a href="#contact" className="afd-preview__mobile-action afd-preview__mobile-action--primary">
          {previewData.heroCta}
        </a>
      </div>
    </main>
  )
}

export default AustinFamilyDDSPreview
