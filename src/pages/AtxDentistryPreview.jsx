import React from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  WalletCards,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './AtxDentistryPreview.css'

const heroImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'
const careImage =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80'
const dentistImage =
  'assets/doctors/female1.png'

const previewData = {
  businessName: 'Austin Dental Specialty Group',
  domain: 'atxfamilydentistry.com',
  phoneDisplay: '(512) 717-0989',
  phoneHref: 'tel:+15127170989',
  email: 'info@atxfamilydentistry.com',
  address: '5000 Davis Ln Ste 101, Austin, TX 78749',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=5000+Davis+Ln+Ste+101,+Austin,+TX+78749',
  agencyContactUrl: 'https://thatsoftwarehouse.com/contact',
  hero: {
    eyebrow: 'South Austin family, cosmetic, implant, and specialty dentistry',
    headline: 'Modern dental care that feels calmer from the moment you walk in.',
    description:
      'Austin Dental Specialty Group pairs advanced treatment planning with a comfort-first experience for busy South Austin families, cosmetic cases, and complex restorative work.',
    primaryCta: 'Request appointment',
    secondaryCta: 'Explore services',
  },
  trustHighlights: [
    'Most major PPO plans accepted',
    'Same-day emergency availability',
    'Digital X-rays and 3D imaging',
    'Financing support for larger cases',
  ],
  metrics: [
    { value: '4.9★', label: '220+ Google Reviews' },
    { value: '4 doctors', label: 'Specialty-led care under one roof' },
    { value: 'South Austin', label: 'Davis Lane, off MoPac / 290' },
  ],
  services: [
    {
      title: 'Preventive + family care',
      description:
        'Routine exams, cleanings, and long-term oral health planning for children, adults, and multi-generational families.',
      icon: ShieldCheck,
    },
    {
      title: 'Cosmetic dentistry',
      description:
        'Whitening, smile design, and appearance-focused treatment plans that feel modern without looking overdone.',
      icon: Sparkles,
    },
    {
      title: 'Dental implants',
      description:
        'Implant planning and restoration for patients looking to rebuild function, confidence, and everyday comfort.',
      icon: Stethoscope,
    },
    {
      title: 'Oral surgery',
      description:
        'Wisdom teeth, extractions, and advanced specialty procedures with clear guidance before and after care.',
      icon: CheckCircle2,
    },
    {
      title: 'Restorative treatment',
      description:
        'Crowns, bridges, and repair work designed to restore bite strength and keep treatment understandable.',
      icon: HeartHandshake,
    },
    {
      title: 'Orthodontic support',
      description:
        'Alignment-focused care options for patients who want straighter smiles with a coordinated care plan.',
      icon: ArrowRight,
    },
  ],
  doctors: [
    {
      name: 'Dr. Sarah Behmanesh',
      role: 'Lead Dentist, DDS',
      bio:
        'A New York University College of Dentistry graduate, Dr. Behmanesh completed her General Practice Residency at UCLA. She brings a meticulous, patient-first approach to implants, cosmetic planning, and complex restorative care.',
      focus: ['Dental Implants', 'Cosmetic Planning', 'Complex Restorative'],
    },
    {
      name: 'Dr. Chelsea Brossart',
      role: 'Associate Dentist, DDS',
      bio:
        'An active member of the American Dental Association and Texas Dental Association, Dr. Brossart is dedicated to delivering the highest level of care in a warm, pressure-free environment for the whole family.',
      focus: ['Preventive Care', 'Family Dentistry', 'Anxiety-Free Visits'],
    },
  ],
  comfortPoints: [
    'No-shame communication for patients returning after a long gap in care',
    'Clear explanations before treatment starts',
    'A friendly, emotionally safe environment for anxious patients',
    'Flexible payment and financing conversations when treatment is larger',
  ],
  patientSignals: [
    {
      title: 'Comfort over pressure',
      description:
        'The live site consistently emphasizes feeling safe, heard, and respected instead of pushed through treatment.',
    },
    {
      title: 'Clear treatment plans',
      description:
        'Patients are guided through what is urgent, what can wait, and how costs are handled before larger procedures.',
    },
    {
      title: 'Warm team experience',
      description:
        'Copy throughout the current site leans on friendliness, patience, and a supportive office atmosphere.',
    },
  ],
  visitSteps: [
    {
      title: 'Reach out',
      description: 'Call, text, or use the appointment CTA to start a visit request.',
    },
    {
      title: 'Share your goals',
      description:
        'The team learns whether you need preventive, cosmetic, emergency, or specialty care.',
    },
    {
      title: 'Get a clear plan',
      description:
        'Diagnostics and recommendations are explained in plain language before treatment begins.',
    },
    {
      title: 'Move at your pace',
      description:
        'Scheduling, financing, and phased care can be coordinated around your comfort level.',
    },
  ],
  insurance: ['Aetna', 'Cigna', 'Delta Dental', 'Guardian', 'Humana', 'MetLife'],
  faq: [
    {
      question: 'Do you accept insurance?',
      answer:
        'The practice markets itself as accepting most major PPO plans and helps patients understand coverage before larger cases move forward.',
    },
    {
      question: 'Can I come in for emergency treatment?',
      answer:
        'Emergency availability is highlighted across the live site, especially for urgent pain, broken teeth, and time-sensitive issues.',
    },
    {
      question: 'What if I am nervous about going to the dentist?',
      answer:
        'Comfort and emotional safety are core themes in the existing messaging, making anxious-patient care a central part of the brand story.',
    },
  ],
}

const sectionMotion = {
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

function SectionReveal({ className = '', children, id }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={sectionMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Motion.section>
  )
}

function AtxDentistryPreview() {
  useSEO({
    title: 'Austin Dental Specialty Group Preview | That Software House',
    description:
      'A modern preview redesign for Austin Dental Specialty Group in South Austin, Texas.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/atx-dentistry',
    openGraph: {
      title: 'Austin Dental Specialty Group Preview',
      description:
        'Standalone preview concept for a modernized dental website experience in South Austin.',
      url: 'https://preview.thatsoftwarehouse.com/atx-dentistry',
      image: heroImage,
    },
  })

  return (
    <main className="atx-preview" id="top">
      <div className="atx-preview__hero-shell">
        <header className="atx-preview__nav">
          <a href="#top" className="atx-preview__brand" aria-label={previewData.businessName}>
            <span className="atx-preview__brand-mark">AD</span>
            <span>
              <strong>{previewData.businessName}</strong>
              <small>South Austin, Texas</small>
            </span>
          </a>

          <nav className="atx-preview__nav-links" aria-label="Preview sections">
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#visit">First visit</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="atx-preview__nav-cta">
            {previewData.hero.primaryCta}
          </a>
        </header>

        <section className="atx-preview__hero">
          <div className="atx-preview__hero-copy">
            <div className="atx-preview__eyebrow">
              <MapPin size={14} />
              <span>{previewData.hero.eyebrow}</span>
            </div>

            <Motion.h1
              className="atx-preview__hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.hero.headline}
            </Motion.h1>

            <Motion.p
              className="atx-preview__hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.hero.description}
            </Motion.p>

            <Motion.div
              className="atx-preview__hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="#contact" className="atx-preview__button atx-preview__button--primary">
                {previewData.hero.primaryCta}
              </a>
              <a href="#services" className="atx-preview__button atx-preview__button--ghost">
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>

            <Motion.div
              className="atx-preview__hero-meta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="atx-preview__rating-pill">
                <Star size={16} fill="currentColor" />
                <span>Comfort-first specialty care</span>
              </div>
              <a href={previewData.phoneHref} className="atx-preview__inline-link">
                <Phone size={16} />
                {previewData.phoneDisplay}
              </a>
            </Motion.div>
          </div>

          <Motion.div
            className="atx-preview__hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="atx-preview__hero-card atx-preview__hero-card--image">
              <img src={heroImage} alt="Modern dental office reception area" />
            </div>
            <div className="atx-preview__hero-card atx-preview__hero-card--floating">
              <span className="atx-preview__card-label">Why this concept is stronger</span>
              <ul>
                {previewData.trustHighlights.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="atx-preview__hero-card atx-preview__hero-card--metric">
              {previewData.metrics.map((metric) => (
                <div key={metric.value}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        </section>
      </div>

      <SectionReveal className="atx-preview__section atx-preview__trust">
        <div className="atx-preview__section-intro">
          <p className="atx-preview__kicker">Built around patient confidence</p>
          <h2>A clearer, calmer digital front door for the same practice facts.</h2>
        </div>
        <div className="atx-preview__trust-grid">
          {previewData.trustHighlights.map((item) => (
            <article key={item} className="atx-preview__trust-card">
              <Sparkles size={18} />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section" id="services">
        <div className="atx-preview__section-heading">
          <p className="atx-preview__kicker">Services</p>
          <h2>Organized around the care patients actually look for.</h2>
          <p>
            The current site covers a wide clinical range. This preview reframes that scope into a
            more modern, easier-to-scan service experience.
          </p>
        </div>
        <div className="atx-preview__services-grid">
          {previewData.services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="atx-preview__service-card">
                <div className="atx-preview__service-icon">
                  <Icon size={20} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">
                  Learn more
                  <ChevronRight size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section atx-preview__showcase" id="doctors">
        <div className="atx-preview__showcase-media">
          <img src={dentistImage} alt="Dentist consulting a patient" />
        </div>
        <div className="atx-preview__showcase-copy">
          <p className="atx-preview__kicker">Doctors</p>
          <h2>A specialty-led team presented with more clarity and warmth.</h2>
          <div className="atx-preview__doctor-list">
            {previewData.doctors.map((doctor) => (
              <article key={doctor.name} className="atx-preview__doctor-card">
                <h3>{doctor.name}</h3>
                <p className="atx-preview__doctor-role">{doctor.role}</p>
                <p>{doctor.bio}</p>
                <div className="atx-preview__tag-row">
                  {doctor.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section atx-preview__comfort">
        <div className="atx-preview__section-heading">
          <p className="atx-preview__kicker">Patient comfort</p>
          <h2>One of the strongest themes on the live site becomes the center of the story.</h2>
        </div>
        <div className="atx-preview__comfort-grid">
          <div className="atx-preview__comfort-copy">
            <p>
              Instead of burying comfort messaging in dense page copy, this concept treats
              reassurance as a primary conversion driver for families, nervous patients, and anyone
              putting off care.
            </p>
            <ul>
              {previewData.comfortPoints.map((item) => (
                <li key={item}>
                  <HeartHandshake size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="atx-preview__comfort-media">
            <img src={careImage} alt="Patient receiving gentle dental care" />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section">
        <div className="atx-preview__section-heading">
          <p className="atx-preview__kicker">Patient feedback themes</p>
          <h2>Social proof reframed as clear, editorial signals.</h2>
        </div>
        <div className="atx-preview__signals-grid">
          {previewData.patientSignals.map((signal) => (
            <article key={signal.title} className="atx-preview__signal-card">
              <div className="atx-preview__stars">
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
              </div>
              <h3>{signal.title}</h3>
              <p>{signal.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section" id="visit">
        <div className="atx-preview__section-heading">
          <p className="atx-preview__kicker">First visit</p>
          <h2>Reduce uncertainty with a simple, modern visit flow.</h2>
        </div>
        <div className="atx-preview__timeline">
          {previewData.visitSteps.map((step, index) => (
            <article key={step.title} className="atx-preview__timeline-step">
              <span className="atx-preview__timeline-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section atx-preview__finance">
        <div className="atx-preview__finance-copy">
          <p className="atx-preview__kicker">Insurance + financing</p>
          <h2>Coverage and payment details surfaced before they become a blocker.</h2>
          <p>
            The live practice site already highlights PPO acceptance and financing help. This
            preview makes that reassurance visible earlier in the patient journey.
          </p>
        </div>
        <div className="atx-preview__finance-card">
          <div className="atx-preview__finance-header">
            <WalletCards size={20} />
            <span>Accepted plan examples</span>
          </div>
          <div className="atx-preview__tag-row">
            {previewData.insurance.map((provider) => (
              <span key={provider}>{provider}</span>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section atx-preview__faq">
        <div className="atx-preview__section-heading">
          <p className="atx-preview__kicker">FAQ</p>
          <h2>Common concerns answered without sending people into a maze.</h2>
        </div>
        <div className="atx-preview__faq-list">
          {previewData.faq.map((item) => (
            <details key={item.question} className="atx-preview__faq-item">
              <summary>
                <span>{item.question}</span>
                <ChevronRight size={18} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="atx-preview__section atx-preview__contact" id="contact">
        <div className="atx-preview__contact-copy">
          <p className="atx-preview__kicker">Contact</p>
          <h2>Everything a patient needs to take the next step, without real submission logic.</h2>
          <p>
            This preview intentionally keeps CTAs non-functional while still showing how a modern
            conversion path would feel in production.
          </p>
          <div className="atx-preview__contact-links">
            <a href={previewData.phoneHref}>
              <Phone size={18} />
              <span>{previewData.phoneDisplay}</span>
            </a>
            <a href={`mailto:${previewData.email}`}>
              <CalendarDays size={18} />
              <span>{previewData.email}</span>
            </a>
            <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={18} />
              <span>{previewData.address}</span>
            </a>
            <div>
              <Clock3 size={18} />
              <span>Sample booking links only in this preview</span>
            </div>
          </div>
        </div>
        <div className="atx-preview__contact-panel">
          <div className="atx-preview__panel-badge">Preview concept</div>
          <h3>Request appointment</h3>
          <p>
            A production version would connect this panel to scheduling. In this preview, buttons
            keep the interaction visual-only.
          </p>
          <div className="atx-preview__panel-actions">
            <a href="#top" className="atx-preview__button atx-preview__button--primary">
              Start request
            </a>
            <a href="#services" className="atx-preview__button atx-preview__button--ghost">
              Review services
            </a>
          </div>
          <p className="atx-preview__panel-note">
            Preview by{' '}
            <a href={previewData.agencyContactUrl} target="_blank" rel="noreferrer">
              That Software House
            </a>
          </p>
        </div>
      </SectionReveal>

      <footer className="atx-preview__footer">
        <div>
          <strong>{previewData.businessName}</strong>
          <p>{previewData.address}</p>
        </div>
        <div>
          <p>{previewData.domain}</p>
          <a href={previewData.agencyContactUrl} target="_blank" rel="noreferrer">
            Preview by That Software House
          </a>
        </div>
      </footer>

      <div className="atx-preview__mobile-rail">
        <a href={previewData.phoneHref} className="atx-preview__mobile-call">
          <Phone size={18} />
          Call
        </a>
        <a href="#contact" className="atx-preview__mobile-book">
          {previewData.hero.primaryCta}
        </a>
      </div>
      <FloatingCTA />
    </main>
  )
}

export default AtxDentistryPreview

