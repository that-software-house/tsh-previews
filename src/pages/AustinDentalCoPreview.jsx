import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  CreditCard,
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
  Syringe,
  Users,
  Video,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './AustinDentalCoPreview.css'

const heroImage = '/assets/home/hero-1.png'
const teamImage =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80'
const officeImage =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80'
const smileImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80'

const previewData = {
  businessName: 'Austin Dental Company',
  tagline: 'Quality Dentistry, Honestly Delivered',
  phoneDisplay: '(512) 710-4783',
  phoneHref: 'tel:+15127104783',
  address: '3810 N. Quinlan Park Rd, Suite 140, Austin, TX 78732',
  mapsUrl: 'https://maps.google.com/?q=3810+N+Quinlan+Park+Rd+Suite+140+Austin+TX+78732',
  heroHeadline: 'Caring for Your Smile, One Visit at a Time.',
  heroDescription:
    'Judgment-free care for the whole family — right here in Austin. Honest, compassionate dentistry with no surprises.',
  heroCta: 'Get Appointment',
  stats: [
    { value: '918+', label: 'Satisfied Patients' },
    { value: '5,000+', label: 'Treatments Delivered' },
    { value: '5.0★', label: 'Star Rating' },
  ],
  trustSignals: [
    'Google 5.0★',
    'ADA Member',
    'All PPO Accepted',
    'Fear-Free Practice',
    'Virtual Consults Free',
  ],
  serviceCategories: {
    Preventive: {
      headline: 'Prevention is the Foundation of Great Oral Health',
      body: 'Regular exams, cleanings, and early-detection screenings keep small issues from becoming costly problems. We make prevention convenient and completely stress-free.',
      services: [
        { title: 'Exams & Cleanings', icon: Shield },
        { title: 'Dental Sealants', icon: ShieldCheck },
        { title: 'Oral Cancer Screening', icon: BadgeCheck },
        { title: 'Periodontal Therapy', icon: Heart },
      ],
    },
    Restorative: {
      headline: 'Restore Your Smile to Its Full Potential',
      body: 'From tooth-colored fillings to dental implants, we use the latest techniques to repair and replace teeth with results that look and feel completely natural.',
      services: [
        { title: 'Crowns & Bridges', icon: Crown },
        { title: 'Dental Implants', icon: Syringe },
        { title: 'Tooth-Colored Fillings', icon: Sparkles },
        { title: 'Emergency Dentistry', icon: Zap },
      ],
    },
    Cosmetic: {
      headline: 'A Confident Smile Changes Everything',
      body: 'Our Cosmetic Dentistry enhances your teeth\'s beauty while preserving their natural health and function. Veneers, whitening, Invisalign — your transformation starts here.',
      services: [
        { title: 'Porcelain Veneers', icon: Sparkles },
        { title: 'Invisalign Aligners', icon: Smile },
        { title: 'Teeth Whitening', icon: Star },
        { title: 'Smile Makeovers', icon: Zap },
      ],
    },
    Specialty: {
      headline: 'Specialized Care for Every Patient\'s Unique Needs',
      body: 'From sedation options for anxious patients to virtual consultations and in-house membership plans, we go beyond the standard to serve every situation.',
      services: [
        { title: 'Sedation Dentistry', icon: Heart },
        { title: 'Oral Surgery', icon: Stethoscope },
        { title: 'Membership Plan', icon: CreditCard },
        { title: 'Virtual Consultations', icon: Video },
      ],
    },
  },
  doctors: [
    {
      name: 'Dr. Bonner Morren',
      title: 'Co-Founder, DDS',
      image: 'assets/doctors/male2.png',
      bio: 'A native Texan who knew dentistry was his calling since 6th grade. Known for his warmth, humor, and gift for putting nervous patients at ease.',
    },
    {
      name: 'Dr. Rachel Morren',
      title: 'Co-Founder, DDS',
      image: 'assets/doctors/female1.png',
      bio: 'An Austin native whose passion for dentistry was sparked by mission trips to Central America. Brings deep compassion and commitment to patient-centered care.',
    },
    {
      name: 'Dr. Jennifer Mink',
      title: 'Associate Dentist, DDS',
      image: 'assets/doctors/female1.png',
      bio: 'A Cum Laude Biology graduate whose love of dentistry grew through humanitarian work in Nicaragua. Meticulous, warm, and genuinely invested in every patient.',
    },
  ],
  reviews: [
    {
      text: 'Not only funny and charming — he makes all his patients feel at home. I commute to his new location because his quality of care is beyond exceeding my standards.',
      author: 'Angela H.',
      rating: 5,
    },
    {
      text: 'The new office is very nice, very clean, and quite modern. The work he performs is outstanding — I couldn\'t be happier with my results.',
      author: 'Joshua M.',
      rating: 5,
    },
    {
      text: 'The ENTIRE STAFF is phenomenal! They\'re so kind and welcoming. This is exactly what a dental office should feel like.',
      author: 'Sierra M.',
      rating: 5,
    },
    {
      text: 'A truly judgment-free zone. I hadn\'t been to a dentist in years and was embarrassed, but they made me feel comfortable and cared for from the moment I walked in.',
      author: 'Verified Patient',
      rating: 5,
    },
  ],
  hours: [
    { day: 'Monday', time: '7:30 am – 4:30 pm' },
    { day: 'Tuesday', time: '9:30 am – 4:30 pm' },
    { day: 'Wednesday', time: '7:30 am – 4:30 pm' },
    { day: 'Thursday', time: '7:30 am – 4:30 pm' },
    { day: 'Friday', time: '7:30 am – 2:00 pm' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/austindentalco',
    instagram: 'https://www.instagram.com/austindentalco',
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function SectionLabel({ text, num }) {
  return (
    <div className="adc-preview__section-label">
      <span>{text}</span>
      {num && <span className="adc-preview__section-num">{num}</span>}
    </div>
  )
}

function AustinDentalCoPreview() {
  const [navSolid, setNavSolid] = useState(false)
  const [activeService, setActiveService] = useState('Cosmetic')
  const [currentReview, setCurrentReview] = useState(0)

  useSEO({
    title: 'Austin Dental Company Preview | That Software House',
    description:
      'A modern preview redesign for Austin Dental Company — quality dentistry, honestly delivered in Austin, TX.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/austin-dental-co',
    openGraph: {
      title: 'Austin Dental Company Preview',
      description: 'Preview concept for Austin Dental Company — quality dentistry, honestly delivered.',
      url: 'https://preview.thatsoftwarehouse.com/austin-dental-co',
      image: heroImage,
    },
  })

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const serviceKeys = Object.keys(previewData.serviceCategories)
  const activeServiceData = previewData.serviceCategories[activeService]
  const review = previewData.reviews[currentReview]
  const totalReviews = previewData.reviews.length

  return (
    <main className="adc-preview" id="top">

      {/* ── NAV ── */}
      <header className={`adc-preview__nav ${navSolid ? 'adc-preview__nav--solid' : ''}`}>
        <div className="adc-preview__nav-inner">
          <a href="#top" className="adc-preview__brand">
            <span className="adc-preview__brand-mark">ADC</span>
            <span className="adc-preview__brand-name">Austin Dental Co.</span>
          </a>
          <nav className="adc-preview__nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="adc-preview__nav-cta">
            Contact <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="adc-preview__hero">
        <div className="adc-preview__hero-left">
          <Motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="adc-preview__hero-headline">
              Caring for Your <em>Smile</em>,<br />One Visit at a Time.
            </h1>
          </Motion.div>

          <Motion.p
            className="adc-preview__hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.heroDescription}
          </Motion.p>

          <Motion.div
            className="adc-preview__hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="adc-preview__btn-pill">
              {previewData.heroCta}
            </a>
          </Motion.div>

          <Motion.div
            className="adc-preview__hero-rating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
          >
            <div className="adc-preview__stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
            </div>
            <span>5.0 · 918+ Google Reviews</span>
          </Motion.div>
        </div>

        <Motion.div
          className="adc-preview__hero-right"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={heroImage} alt="Austin Dental Company" />
        </Motion.div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="adc-preview__trust-bar">
        <span className="adc-preview__trust-label">Trusted by Austin families</span>
        <div className="adc-preview__trust-badges">
          {previewData.trustSignals.map((t) => (
            <span key={t} className="adc-preview__trust-badge">{t}</span>
          ))}
        </div>
      </div>

      {/* ── ABOUT / EDITORIAL ── */}
      <section className="adc-preview__about" id="about">
        <div className="adc-preview__container">
          <SectionLabel text="About Us" num="01" />

          <div className="adc-preview__about-body">
            <div className="adc-preview__about-main">
              <Motion.p
                className="adc-preview__editorial"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                We create lasting relationships — built on{' '}
                <em>honesty and care</em>. Our team is committed to making every visit{' '}
                <em>comfortable</em>, and judgment-free for you.
              </Motion.p>

              <Motion.a
                href="#doctors"
                className="adc-preview__arrow-link"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <ArrowUpRight size={20} />
              </Motion.a>
            </div>

            <div className="adc-preview__about-images">
              <div className="adc-preview__about-circle">
                <img src={teamImage} alt="Our dental team" />
              </div>
              <div className="adc-preview__about-circle adc-preview__about-circle--offset">
                <img src={officeImage} alt="Our modern office" />
              </div>
            </div>
          </div>

          <div className="adc-preview__about-divider" />

          <Motion.div
            className="adc-preview__stats-row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {previewData.stats.map((stat, i) => (
              <Motion.div key={stat.label} className="adc-preview__stat" variants={staggerChild}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                {i < previewData.stats.length - 1 && <div className="adc-preview__stat-divider" />}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="adc-preview__services" id="services">
        <div className="adc-preview__container">
          <SectionLabel text="Our Services" num="02" />

          <div className="adc-preview__services-body">
            <Motion.div
              className="adc-preview__service-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {serviceKeys.map((key) => {
                const isActive = activeService === key
                return (
                  <Motion.button
                    key={key}
                    className={`adc-preview__service-item ${isActive ? 'adc-preview__service-item--active' : ''}`}
                    onClick={() => setActiveService(key)}
                    variants={staggerChild}
                  >
                    <div className="adc-preview__service-item-inner">
                      <span className="adc-preview__service-name">{key}</span>
                      <ArrowUpRight size={16} className="adc-preview__service-arrow" />
                    </div>
                    <p className="adc-preview__service-sub">
                      {previewData.serviceCategories[key].services
                        .map((s) => s.title)
                        .join(' · ')}
                    </p>
                  </Motion.button>
                )
              })}
            </Motion.div>

            <Motion.div
              className="adc-preview__service-feature"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="adc-preview__service-img">
                <img src={smileImage} alt="Dental care" />
              </div>
              <Motion.div
                className="adc-preview__service-card"
                key={activeService}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="adc-preview__service-card-headline">
                  {activeServiceData.headline}
                </p>
                <p className="adc-preview__service-card-body">{activeServiceData.body}</p>
                <div className="adc-preview__service-card-footer">
                  <div className="adc-preview__doctor-avatars">
                    <div className="adc-preview__doctor-avatar">
                      <img src={teamImage} alt="Doctor" />
                    </div>
                    <div className="adc-preview__doctor-avatar adc-preview__doctor-avatar--offset">
                      <img src={teamImage} alt="Doctor" />
                    </div>
                  </div>
                  <a href="#contact" className="adc-preview__btn-pill adc-preview__btn-pill--sm">
                    Book Now
                  </a>
                </div>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="adc-preview__testimonials" id="reviews">
        <div className="adc-preview__container">
          <SectionLabel text="Testimonials" num="03" />

          <div className="adc-preview__testimonials-body">
            <Motion.div
              className="adc-preview__testimonial-img"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={smileImage} alt="Happy patient" />
            </Motion.div>

            <div className="adc-preview__testimonial-content">
              <Motion.blockquote
                key={currentReview}
                className="adc-preview__quote"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                — {review.text}
              </Motion.blockquote>

              <Motion.div
                key={`meta-${currentReview}`}
                className="adc-preview__quote-meta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="adc-preview__quote-author">{review.author}</span>
                <span className="adc-preview__quote-separator">·</span>
                <span className="adc-preview__quote-label">Patient</span>
              </Motion.div>

              <div className="adc-preview__quote-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <span>{review.rating}.0</span>
              </div>

              <div className="adc-preview__testimonial-nav">
                <button
                  className="adc-preview__nav-btn"
                  onClick={() => setCurrentReview((currentReview - 1 + totalReviews) % totalReviews)}
                  aria-label="Previous review"
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>
                <span className="adc-preview__nav-count">
                  {String(currentReview + 1).padStart(2, '0')} / {String(totalReviews).padStart(2, '0')}
                </span>
                <button
                  className="adc-preview__nav-btn"
                  onClick={() => setCurrentReview((currentReview + 1) % totalReviews)}
                  aria-label="Next review"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <section className="adc-preview__doctors" id="doctors">
        <div className="adc-preview__container">
          <SectionLabel text="Our Doctors" num="04" />

          <Motion.div
            className="adc-preview__doctors-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {previewData.doctors.map((doc) => (
              <Motion.div key={doc.name} className="adc-preview__doctor" variants={staggerChild}>
                <div className="adc-preview__doctor-photo">
                  <img src={doc.image} alt={doc.name} />
                </div>
                <div className="adc-preview__doctor-info">
                  <p className="adc-preview__doctor-title">{doc.title}</p>
                  <h3 className="adc-preview__doctor-name">{doc.name}</h3>
                  <p className="adc-preview__doctor-bio">{doc.bio}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* ── CTA / EMAIL ── */}
      <section className="adc-preview__cta-section">
        <div className="adc-preview__container">
          <Motion.div
            className="adc-preview__cta-inner"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="adc-preview__cta-headline">
              Illuminate Your Smile with <em>Confidence</em> & Care
            </h2>
            <p className="adc-preview__cta-sub">Book a free virtual consultation — no commitment required.</p>
            <div className="adc-preview__cta-form">
              <input
                type="email"
                placeholder="Your email address"
                className="adc-preview__cta-input"
                aria-label="Email address"
              />
              <a href="#contact" className="adc-preview__btn-pill">
                Get Started <ArrowUpRight size={15} />
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── CONTACT ROW ── */}
      <section className="adc-preview__contact-row" id="contact">
        <div className="adc-preview__container">
          <div className="adc-preview__contact-cols">
            <div className="adc-preview__contact-col">
              <p className="adc-preview__contact-label">Address</p>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                {previewData.address}
              </a>
            </div>
            <div className="adc-preview__contact-col">
              <p className="adc-preview__contact-label">Phone</p>
              <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
            </div>
            <div className="adc-preview__contact-col">
              <p className="adc-preview__contact-label">Email</p>
              <a href="mailto:hello@austindentalco.com">hello@austindentalco.com</a>
            </div>
            <div className="adc-preview__contact-col">
              <p className="adc-preview__contact-label">Hours</p>
              {previewData.hours.slice(0, 3).map((h) => (
                <p key={h.day} className="adc-preview__hours-line">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </p>
              ))}
              <p className="adc-preview__hours-line">
                <span>Sat – Sun</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="adc-preview__footer">
        <div className="adc-preview__container">
          <div className="adc-preview__footer-top">
            <div className="adc-preview__footer-brand">
              <span className="adc-preview__footer-logo">ADC</span>
              <p className="adc-preview__footer-tagline">{previewData.tagline}</p>
              <div className="adc-preview__footer-social">
                <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            <div className="adc-preview__footer-cols">
              <div className="adc-preview__footer-col">
                <h4>Home</h4>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#doctors">Our Doctors</a>
                <a href="#reviews">Testimonials</a>
              </div>
              <div className="adc-preview__footer-col">
                <h4>Services</h4>
                <a href="#services">Preventive</a>
                <a href="#services">Restorative</a>
                <a href="#services">Cosmetic</a>
                <a href="#services">Specialty</a>
              </div>
              <div className="adc-preview__footer-col">
                <h4>Contact</h4>
                <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
                <a href="mailto:hello@austindentalco.com">hello@austindentalco.com</a>
                <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                  Quinlan Park Rd, Austin TX
                </a>
              </div>
            </div>
          </div>

          <div className="adc-preview__footer-bottom">
            <p>© 2025 Austin Dental Company. All rights reserved.</p>
            <div className="adc-preview__footer-legal">
              <a href="/">Terms & Conditions</a>
              <a href="/">Privacy Policy</a>
              <a href="https://thatsoftwarehouse.com" target="_blank" rel="noreferrer">
                Preview by That Software House
              </a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCTA />

      {/* ── MOBILE BOTTOM RAIL ── */}
      <div className="adc-preview__mobile-rail">
        <a href={previewData.phoneHref} className="adc-preview__mobile-action adc-preview__mobile-action--ghost">
          <Phone size={18} />
          Call
        </a>
        <a href="#contact" className="adc-preview__mobile-action adc-preview__mobile-action--primary">
          {previewData.heroCta}
        </a>
      </div>

    </main>
  )
}

export default AustinDentalCoPreview
