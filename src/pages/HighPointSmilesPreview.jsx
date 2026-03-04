import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  Baby,
  Brain,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Coffee,
  Crown,
  Droplets,
  Facebook,
  Flower2,
  Globe,
  Heart,
  Instagram,
  MapPin,
  Monitor,
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
  Youtube,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './HighPointSmilesPreview.css'

const heroImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'
const teamImage =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80'
const comfortImage =
  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80'
const founderImage =
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'

const previewData = {
  businessName: 'High Point Dentistry',
  tagline: 'Changing the Way You Feel About Dentistry',
  phoneDisplay: '(512) 394-6255',
  phoneHref: 'tel:+15123946255',
  heroHeadline: 'Changing the Way You Feel About Dentistry',
  heroSubheadline: '5 Austin-area locations. One family-driven standard of care.',
  heroDescription:
    'Founded by Dr. Vu Kong in 2009, High Point Dentistry brings warmth, honesty, and world-class comfort to every visit. From aromatherapy and heated towels to a team that speaks your language, this is dentistry built around you.',
  heroCta: 'Book Your Visit',
  secondaryCta: 'Take a Virtual Tour',
  stats: [
    { value: '2,500+', label: 'Five-Star Reviews' },
    { value: '5', label: 'Locations' },
    { value: '13+', label: 'Doctors' },
    { value: '2009', label: 'Founded' },
  ],
  trustPoints: [
    'Locally owned since 2009 \u2014 never corporate',
    '13+ doctors across five Central Texas locations',
    'Multilingual team: Spanish, Cantonese, Hindi & more',
    'In-house membership plans for patients without insurance',
  ],
  comfortPoints: [
    { label: 'Aromatherapy & Heated Towels', description: 'Calming scents and warm towels at every visit to ease tension before treatment begins.', icon: Flower2 },
    { label: 'Complimentary Beverages', description: 'Help yourself in our home-like lounge while you wait for your appointment.', icon: Coffee },
    { label: 'Stream Netflix or Hulu', description: 'Watch your favorite shows right from the dental chair to keep your mind at ease.', icon: Monitor },
    { label: 'Sedation Options', description: 'Nitrous oxide and oral conscious sedation available for complete comfort.', icon: Droplets },
  ],
  locations: [
    {
      name: 'Round Rock',
      address: '5290 N. AW Grimes, Unit 400, Round Rock, TX 78665',
      phone: '512-620-8355',
      phoneHref: 'tel:+15126208355',
      hours: 'Mon\u2013Thu 8am\u20135pm, Fri 9am\u20133pm',
      mapsUrl: 'https://goo.gl/maps/KAEwCLe2h7JLgEGR8',
      doctors: ['Dr. Victoria DeLeon', 'Dr. Josh Sok'],
    },
    {
      name: 'East Austin',
      address: '2719 E. 7th St., Austin, TX 78702',
      phone: '737-473-0200',
      phoneHref: 'tel:+17374730200',
      hours: 'Mon\u2013Thu 8am\u20135pm, Fri 8am\u20132pm',
      mapsUrl: 'https://goo.gl/maps/QLBomDovSFgG33pcA',
      doctors: ['Dr. Jerry Chiu', 'Dr. Reema Dhanani', 'Dr. Kim Kaiser', 'Dr. Aanchal Chandra'],
    },
    {
      name: 'South Congress',
      address: '515 S Congress Ave. Suite 107, Austin, TX 78704',
      phone: '737-227-3812',
      phoneHref: 'tel:+17372273812',
      hours: 'Mon 8am\u20135pm, Tue\u2013Fri 7am\u20133pm',
      mapsUrl: 'https://maps.app.goo.gl/gH9zTuY45SybXDuJ6',
      doctors: ['Dr. Aanchal Chandra'],
    },
    {
      name: 'South Austin',
      address: '6700 West Gate Blvd #101, Austin, TX 78745',
      phone: '512-447-0808',
      phoneHref: 'tel:+15124470808',
      hours: 'Mon 8am\u20135pm, Tue\u2013Thu 7am\u20133pm',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6700+West+Gate+Blvd+101,+Austin,+TX+78745',
      doctors: ['Dr. Steven L. Yarbrough', 'Dr. Jeffrey Lau'],
    },
    {
      name: 'Kids & Braces',
      address: '8901 Vertex Blvd, Suite 130, Austin, TX 78747',
      phone: '512-677-7443',
      phoneHref: 'tel:+15126777443',
      hours: 'Mon\u2013Thu 8am\u20135pm, Fri 8am\u20133pm',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=8901+Vertex+Blvd+Suite+130,+Austin,+TX+78747',
      doctors: ['Dr. Massiel Parra', 'Dr. Jessica Ferreira', 'Dr. Ashweti Joshi'],
    },
  ],
  serviceCategories: {
    Preventive: [
      { title: 'Routine Cleanings & Exams', description: 'Comprehensive routine dental exams, professional teeth cleanings, and X-rays to maintain optimal oral health.', icon: Shield },
      { title: 'Dental Sealants', description: 'Protective coatings applied to teeth to prevent tooth decay.', icon: ShieldCheck },
      { title: 'Fluoride Treatments', description: 'Applied to strengthen tooth enamel and help prevent cavities.', icon: Droplets },
      { title: 'Oral Cancer Screenings', description: 'Early detection examinations to identify signs of oral cancer.', icon: Scan },
      { title: 'Athletic Mouthguards', description: 'Custom protective devices for sports and physical activity.', icon: Shield },
      { title: 'Nightguards for Bruxism', description: 'Guards designed to protect against teeth grinding during sleep.', icon: Moon },
    ],
    Restorative: [
      { title: 'Tooth-Colored Fillings', description: 'Modern, natural-looking cavity treatments using composite resin materials.', icon: Sparkles },
      { title: 'Dental Crowns & Bridges', description: 'Restorative tooth replacement solutions for damaged or missing teeth.', icon: Crown },
      { title: 'Root Canal Therapy', description: 'Treatment for infected tooth pulp to save the natural tooth.', icon: Stethoscope },
      { title: 'Full & Partial Dentures', description: 'Complete or partial removable tooth replacements for missing teeth.', icon: Smile },
      { title: 'Dental Extractions', description: 'Professional tooth removal procedures when a tooth cannot be saved.', icon: Zap },
      { title: 'Dental Implants', description: 'Permanent tooth replacement using titanium posts surgically placed in the jawbone.', icon: Syringe },
    ],
    Cosmetic: [
      { title: 'Opalescence Boost Whitening', description: 'Professional in-office bleaching treatment for a brighter, whiter smile.', icon: Star },
      { title: 'Porcelain Veneers', description: 'Custom-made porcelain shells bonded to the front of teeth to enhance appearance.', icon: Sparkles },
      { title: 'Invisalign Clear Aligners', description: 'Thin, comfortable aligners that are virtually invisible for straightening teeth.', icon: Smile },
    ],
    Specialty: [
      { title: 'Orthodontics', description: 'Comprehensive teeth straightening solutions including traditional braces and clear aligners.', icon: Smile },
      { title: 'Oral Surgery', description: 'A range of surgical procedures, from extractions to implant placements.', icon: Stethoscope },
      { title: 'Sedation Dentistry', description: 'Anxiety-reducing options including nitrous oxide and oral conscious sedation.', icon: Heart },
      { title: 'Pediatric Dentistry', description: 'Specialized dental care for children in a fun, friendly environment.', icon: Baby },
      { title: 'Emergency Dentistry', description: 'Urgent care for unexpected dental emergencies including toothaches, broken teeth, and trauma.', icon: Zap },
      { title: 'TMJ/TMD Therapy', description: 'Treatment for temporomandibular jaw joint disorders and related pain.', icon: Brain },
      { title: 'Sleep Apnea Appliances', description: 'Treatment devices for sleep disorders including obstructive sleep apnea.', icon: Moon },
    ],
  },
  doctors: [
    {
      name: 'Dr. Vu Kong',
      title: 'Founder, DDS',
      location: 'Multiple Locations',
      bio: 'Third-generation dentist. Michigan State engineering grad turned DDS. Founded High Point in 2009.',
    },
    {
      name: 'Dr. Victoria DeLeon',
      title: 'Dentist, DDS',
      location: 'Round Rock',
      bio: 'Born and raised in Round Rock. Texas A&M College of Dentistry. Compassion-driven care.',
    },
    {
      name: 'Dr. Jerry Chiu',
      title: 'Oral Surgeon, DDS',
      location: 'East Austin',
      bio: 'Columbia University DDS. Chief Resident at Medstar Washington. International mission work.',
    },
    {
      name: 'Dr. Aanchal Chandra',
      title: 'Dentist, DDS',
      location: 'South Congress & East Austin',
      bio: 'UT Health San Antonio DDS. Fellow of the American Academy of Clear Aligners.',
    },
    {
      name: 'Dr. Steven L. Yarbrough',
      title: 'Dentist, DDS',
      location: 'South Austin',
      bio: 'Magna cum laude from St. Mary\u2019s. U.S. Air Force veteran. Fellow of the Academy of General Dentistry.',
    },
    {
      name: 'Dr. Massiel Parra',
      title: 'Pediatric Dentist, DDS',
      location: 'Kids & Braces',
      bio: 'Rutgers DDS. Mount Sinai pediatric residency. Fluent in Spanish. Loves working with kids.',
    },
  ],
  reviewThemes: [
    'Patients consistently praise the warm, family-like atmosphere that makes even anxious visitors feel at ease.',
    'The team\u2019s honesty and transparency about treatment options builds deep, lasting trust.',
    'From kids to adults, patients highlight the gentle touch and genuine compassion of every doctor on staff.',
  ],
  founderStory:
    'Dr. Vu Kong\u2019s family fled Cambodia during wartime, found refuge in a Thai refugee camp, and built a new life in the United States. That journey shaped everything about High Point Dentistry: the belief that every person deserves to be treated like family, the drive to create spaces that feel like home, and the commitment to a higher standard of care. What started as one practice in 2009 has grown to five Central Texas locations and more than 2,500 five-star reviews from patients who felt the difference.',
  insuranceNotes: [
    'In-house membership plans for uninsured patients',
    'Most major PPO plans accepted',
    'Flexible financing options available',
    'Insurance verification before treatment',
  ],
  socialLinks: {
    facebook: 'https://facebook.com/highpointsmiles',
    instagram: 'https://instagram.com/highpointdentistry/',
    youtube: 'https://youtube.com/@highpointdentistry791',
  },
}

/* eslint-disable-next-line no-unused-vars */
function Moon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
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
      viewport={{ once: true, amount: 0.15 }}
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

function HighPointSmilesPreview() {
  const [navSolid, setNavSolid] = useState(false)
  const [activeTab, setActiveTab] = useState('Preventive')
  const [currentReview, setCurrentReview] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)

  useSEO({
    title: 'High Point Dentistry Preview | That Software House',
    description:
      'A modern preview redesign for High Point Dentistry across five Central Texas locations.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/high-point-smiles',
    openGraph: {
      title: 'High Point Dentistry Preview',
      description:
        'Standalone preview concept for High Point Dentistry \u2014 five locations, one family-driven standard of care.',
      url: 'https://preview.thatsoftwarehouse.com/high-point-smiles',
      image: heroImage,
    },
  })

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % previewData.reviewThemes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const tabKeys = Object.keys(previewData.serviceCategories)
  const activeServices = previewData.serviceCategories[activeTab]

  const canScrollLeft = carouselIndex > 0
  const canScrollRight = carouselIndex < previewData.doctors.length - 1

  return (
    <main className="highpoint-preview" id="top">
      {/* ── NAV ── */}
      <header className={`highpoint-preview__nav ${navSolid ? 'highpoint-preview__nav--solid' : ''}`}>
        <div className="highpoint-preview__nav-inner">
          <a href="#top" className="highpoint-preview__brand" aria-label={previewData.businessName}>
            <span className="highpoint-preview__brand-mark">HP</span>
            <span className="highpoint-preview__brand-text">
              <strong>High Point Dentistry</strong>
              <small>Central Texas</small>
            </span>
          </a>

          <nav className="highpoint-preview__nav-links" aria-label="Preview sections">
            <a href="#locations">Locations</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="highpoint-preview__nav-cta">
            {previewData.heroCta}
          </a>
        </div>
      </header>

      {/* ── HERO (full-bleed centered) ── */}
      <section
        className="highpoint-preview__hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(11,123,121,0.62) 0%, rgba(11,123,121,0.78) 100%), url(${heroImage})`,
        }}
      >
        <div className="highpoint-preview__hero-inner">
          <Motion.p
            className="highpoint-preview__hero-eyebrow"
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
            className="highpoint-preview__hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroDescription}
          </Motion.p>

          <Motion.div
            className="highpoint-preview__hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="highpoint-preview__button highpoint-preview__button--accent">
              {previewData.heroCta}
              <ArrowRight size={18} />
            </a>
            <a href="#comfort" className="highpoint-preview__button highpoint-preview__button--outline">
              {previewData.secondaryCta}
            </a>
          </Motion.div>

          <Motion.div
            className="highpoint-preview__hero-meta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href={previewData.phoneHref}>
              <Phone size={16} />
              {previewData.phoneDisplay}
            </a>
            <a href="https://goo.gl/maps/KAEwCLe2h7JLgEGR8" target="_blank" rel="noreferrer">
              <MapPin size={16} />
              5 Central Texas Locations
            </a>
          </Motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <Section className="highpoint-preview__stats-bar" stagger>
        {previewData.stats.map((stat) => (
          <StaggerItem key={stat.label} className="highpoint-preview__stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </StaggerItem>
        ))}
      </Section>

      <div className="highpoint-preview__shell">
        {/* ── TRUST POINTS ── */}
        <Section className="highpoint-preview__section highpoint-preview__trust" stagger>
          <Motion.div className="highpoint-preview__section-heading" variants={staggerChild}>
            <p className="highpoint-preview__kicker">Why High Point</p>
            <h2>A locally owned practice that puts family, comfort, and transparency first.</h2>
          </Motion.div>
          <div className="highpoint-preview__trust-grid">
            {previewData.trustPoints.map((point) => (
              <StaggerItem key={point} className="highpoint-preview__trust-card">
                <ShieldCheck size={20} />
                <p>{point}</p>
              </StaggerItem>
            ))}
          </div>
        </Section>

        {/* ── COMFORT AMENITIES ── */}
        <Section className="highpoint-preview__section highpoint-preview__comfort" id="comfort" stagger>
          <Motion.div className="highpoint-preview__section-heading" variants={staggerChild}>
            <p className="highpoint-preview__kicker">Patient Comfort</p>
            <h2>A Dental Experience You Won't Believe</h2>
          </Motion.div>
          <div className="highpoint-preview__comfort-grid">
            {previewData.comfortPoints.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.label} className="highpoint-preview__comfort-card">
                  <div className="highpoint-preview__comfort-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </StaggerItem>
              )
            })}
          </div>
          <Motion.div className="highpoint-preview__comfort-image" variants={staggerChild}>
            <img src={comfortImage} alt="Modern dental office with comfort amenities" />
          </Motion.div>
        </Section>

        {/* ── LOCATIONS ── */}
        <Section className="highpoint-preview__section" id="locations" stagger>
          <Motion.div className="highpoint-preview__section-heading" variants={staggerChild}>
            <p className="highpoint-preview__kicker">Our Locations</p>
            <h2>Five Locations Across Central Texas</h2>
          </Motion.div>
          <div className="highpoint-preview__locations-grid">
            {previewData.locations.map((loc) => (
              <StaggerItem key={loc.name} className="highpoint-preview__location-card">
                <span className="highpoint-preview__location-watermark">{loc.name}</span>
                <div className="highpoint-preview__location-content">
                  <h3>{loc.name}</h3>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="highpoint-preview__location-address"
                  >
                    <MapPin size={14} />
                    {loc.address}
                  </a>
                  <a href={loc.phoneHref} className="highpoint-preview__location-phone">
                    <Phone size={14} />
                    {loc.phone}
                  </a>
                  <div className="highpoint-preview__location-hours">
                    <Clock3 size={14} />
                    {loc.hours}
                  </div>
                  <div className="highpoint-preview__location-doctors">
                    <Users size={14} />
                    <span>{loc.doctors.join(', ')}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Section>

        {/* ── SERVICES (tabbed) ── */}
        <Section className="highpoint-preview__section" id="services">
          <Motion.div className="highpoint-preview__section-heading" variants={fadeIn}>
            <p className="highpoint-preview__kicker">Services</p>
            <h2>Comprehensive Care Under One Roof</h2>
          </Motion.div>
          <div className="highpoint-preview__tabs">
            {tabKeys.map((tab) => (
              <button
                key={tab}
                className={`highpoint-preview__tab ${activeTab === tab ? 'highpoint-preview__tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <Motion.div
            className="highpoint-preview__services-grid"
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
                  className="highpoint-preview__service-card"
                  variants={staggerChild}
                >
                  <div className="highpoint-preview__service-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Motion.article>
              )
            })}
          </Motion.div>
        </Section>

        {/* ── DOCTORS (horizontal scroll carousel) ── */}
        <Section className="highpoint-preview__section highpoint-preview__doctors-section" id="doctors">
          <Motion.div className="highpoint-preview__section-heading" variants={fadeIn}>
            <p className="highpoint-preview__kicker">Our Team</p>
            <h2>Meet the Doctors Behind Your Smile</h2>
          </Motion.div>
          <div className="highpoint-preview__carousel-controls">
            <button
              className="highpoint-preview__carousel-btn"
              onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
              disabled={!canScrollLeft}
              aria-label="Previous doctor"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="highpoint-preview__carousel-btn"
              onClick={() => setCarouselIndex(Math.min(previewData.doctors.length - 1, carouselIndex + 1))}
              disabled={!canScrollRight}
              aria-label="Next doctor"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="highpoint-preview__carousel-wrapper">
            <Motion.div
              className="highpoint-preview__carousel-track"
              animate={{ x: `calc(-${carouselIndex} * (min(320px, 80vw) + 1.25rem))` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.doctors.map((doctor) => (
                <article key={doctor.name} className="highpoint-preview__doctor-card">
                  <div className="highpoint-preview__doctor-photo">
                    <img src={teamImage} alt={`${doctor.name} portrait`} />
                  </div>
                  <div className="highpoint-preview__doctor-info">
                    <span className="highpoint-preview__doctor-badge">{doctor.location}</span>
                    <h3>{doctor.name}</h3>
                    <p className="highpoint-preview__doctor-title">{doctor.title}</p>
                    <p className="highpoint-preview__doctor-bio">{doctor.bio}</p>
                  </div>
                </article>
              ))}
            </Motion.div>
          </div>
        </Section>

        {/* ── TESTIMONIALS (single large quote) ── */}
        <Section className="highpoint-preview__section highpoint-preview__testimonials" id="reviews">
          <Motion.div className="highpoint-preview__section-heading" variants={fadeIn}>
            <p className="highpoint-preview__kicker">Patient Feedback</p>
            <h2>Over 2,500 Five-Star Smiles</h2>
          </Motion.div>
          <div className="highpoint-preview__quote-block">
            <Quote size={56} className="highpoint-preview__quote-mark" />
            <Motion.p
              key={currentReview}
              className="highpoint-preview__quote-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              {previewData.reviewThemes[currentReview]}
            </Motion.p>
            <div className="highpoint-preview__quote-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="highpoint-preview__quote-label">
              Common theme from 2,500+ Google reviews
            </span>
            <div className="highpoint-preview__quote-dots">
              {previewData.reviewThemes.map((_, i) => (
                <button
                  key={i}
                  className={`highpoint-preview__quote-dot ${currentReview === i ? 'highpoint-preview__quote-dot--active' : ''}`}
                  onClick={() => setCurrentReview(i)}
                  aria-label={`Review theme ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* ── FOUNDER STORY ── */}
        <Section className="highpoint-preview__section highpoint-preview__founder" id="founder">
          <div className="highpoint-preview__founder-inner">
            <Motion.div className="highpoint-preview__founder-image" variants={fadeIn}>
              <img src={founderImage} alt="Dr. Vu Kong, Founder of High Point Dentistry" />
            </Motion.div>
            <Motion.div className="highpoint-preview__founder-copy" variants={fadeIn}>
              <p className="highpoint-preview__kicker">Our Story</p>
              <h2>From Refugee Camp to Five Thriving Practices</h2>
              <p className="highpoint-preview__founder-text">
                {previewData.founderStory}
              </p>
              <div className="highpoint-preview__founder-sig">
                <strong>Dr. Vu Kong</strong>
                <span>Founder, High Point Dentistry &bull; Est. 2009</span>
              </div>
            </Motion.div>
          </div>
        </Section>

        {/* ── INSURANCE / FINANCING ── */}
        <Section className="highpoint-preview__section highpoint-preview__insurance" stagger>
          <Motion.div className="highpoint-preview__section-heading" variants={staggerChild}>
            <p className="highpoint-preview__kicker">Insurance & Financing</p>
            <h2>Making Quality Dentistry Accessible</h2>
          </Motion.div>
          <div className="highpoint-preview__tag-row">
            {previewData.insuranceNotes.map((note) => (
              <StaggerItem key={note} className="highpoint-preview__tag">
                <ShieldCheck size={16} />
                <span>{note}</span>
              </StaggerItem>
            ))}
          </div>
        </Section>

        {/* ── CONTACT ── */}
        <Section className="highpoint-preview__section highpoint-preview__contact" id="contact">
          <div className="highpoint-preview__contact-inner">
            <Motion.div className="highpoint-preview__contact-copy" variants={fadeIn}>
              <p className="highpoint-preview__kicker">Get in Touch</p>
              <h2>Ready to Experience the Difference?</h2>
              <div className="highpoint-preview__contact-list">
                <a href={previewData.phoneHref}>
                  <Phone size={18} />
                  <span>{previewData.phoneDisplay}</span>
                </a>
                <a href="https://goo.gl/maps/KAEwCLe2h7JLgEGR8" target="_blank" rel="noreferrer">
                  <MapPin size={18} />
                  <span>5290 N. AW Grimes, Unit 400, Round Rock, TX 78665</span>
                </a>
                <div className="highpoint-preview__contact-item">
                  <Globe size={18} />
                  <span>Multilingual staff: Spanish, Cantonese, Hindi & more</span>
                </div>
              </div>
            </Motion.div>
            <Motion.div className="highpoint-preview__contact-card" variants={fadeIn}>
              <span className="highpoint-preview__card-label">Preview Concept</span>
              <h3>Book Your Visit</h3>
              <p>
                This preview demonstrates how High Point Dentistry could present scheduling and new-patient info more clearly. No live backend is connected.
              </p>
              <div className="highpoint-preview__contact-actions">
                <a href="#top" className="highpoint-preview__button highpoint-preview__button--accent">
                  Start Request
                </a>
                <a href="/" className="highpoint-preview__button highpoint-preview__button--outline-dark">
                  Back to Preview Hub
                </a>
              </div>
            </Motion.div>
          </div>
        </Section>

        {/* ── FOOTER ── */}
        <footer className="highpoint-preview__footer">
          <div className="highpoint-preview__footer-top">
            <div className="highpoint-preview__footer-brand">
              <strong>{previewData.businessName}</strong>
              <p>Changing the Way You Feel About Dentistry</p>
            </div>
            <div className="highpoint-preview__footer-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={previewData.socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div className="highpoint-preview__footer-bottom">
            <p>
              <a href="https://thatsoftwarehouse.com" target="_blank" rel="noreferrer">
                Preview by That Software House
              </a>
            </p>
          </div>
        </footer>
      </div>

      {/* ── MOBILE BOTTOM RAIL ── */}
      <div className="highpoint-preview__mobile-rail">
        <a href={previewData.phoneHref} className="highpoint-preview__mobile-action highpoint-preview__mobile-action--ghost">
          <Phone size={18} />
          Call
        </a>
        <a href="#contact" className="highpoint-preview__mobile-action highpoint-preview__mobile-action--primary">
          {previewData.heroCta}
        </a>
      </div>
      <FloatingCTA />
    </main>
  )
}

export default HighPointSmilesPreview
