import React from 'react'
import { motion as Motion } from 'framer-motion'
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './BlueSkyDentalPreview.css'

const heroImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80'
const serviceImageFamily =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80'
const serviceImageSmile =
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80'
const serviceImageTech =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80'

const previewData = {
  businessName: 'Blue Sky Family Dentistry',
  domain: 'blueskyfamilydentistry.com',
  phoneDisplay: '(512) 717-4786',
  phoneHref: 'tel:+15127174786',
  address: '5915 La Crosse Ave, Ste 105, Austin, TX 78739',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=5915+La+Crosse+Ave+Ste+105,+Austin,+TX+78739',
  doctor: 'Dr. Ben Corpron',
  hours: [
    'Monday - Thursday: 8:00 am - 5:00 pm',
    'Friday: By appointment / limited availability',
    'Saturday - Sunday: Closed',
  ],
  hero: {
    eyebrow: 'Circle C family dentistry with a whole-health perspective',
    headline: 'Dental care that feels clear, modern, and genuinely centered on your family.',
    description:
      'Blue Sky Family Dentistry blends advanced technology, preventive care, and a wellness-minded approach for South Austin families who want personalized treatment in a calm setting.',
    primaryCta: 'Request appointment',
    secondaryCta: 'Explore care',
  },
  trustItems: [
    'Integrative, whole-health oriented care',
    'South Austin / Circle C location convenience',
    'Modern diagnostics and imaging',
    'Family-focused care with personalized treatment plans',
  ],
  services: [
    {
      title: 'Family dentistry',
      description:
        'Exams, cleanings, preventive guidance, and consistent care for children, parents, and growing families.',
      image: serviceImageFamily,
    },
    {
      title: 'Smile and restorative care',
      description:
        'Cosmetic and restorative solutions built around comfort, clarity, and long-term confidence.',
      image: serviceImageSmile,
    },
    {
      title: 'Technology-driven diagnostics',
      description:
        'Digital tools and modern workflows that support more informed treatment and a smoother patient experience.',
      image: serviceImageTech,
    },
  ],
  pillars: [
    {
      title: 'Whole-health perspective',
      description:
        'The current site positions oral health as connected to long-term wellness, not just one-off treatment.',
      icon: HeartPulse,
    },
    {
      title: 'Advanced tools, explained clearly',
      description:
        'Technology is a trust builder here, but the message stays approachable instead of overly technical.',
      icon: MonitorSmartphone,
    },
    {
      title: 'Personalized family care',
      description:
        'The live site consistently frames care around relationships, prevention, and tailoring plans to each patient.',
      icon: ShieldCheck,
    },
  ],
  reviews: [
    {
      quote:
        'Patients describe the office as warm, thorough, and refreshingly clear about treatment options.',
      author: 'Patient feedback theme',
    },
    {
      quote:
        'Reviews emphasize trust in Dr. Ben Corpron and appreciation for the practice’s calm, personalized pace.',
      author: 'Practice trust theme',
    },
    {
      quote:
        'The current brand positions Blue Sky as modern and wellness-driven without losing the feel of a neighborhood family office.',
      author: 'Brand impression theme',
    },
  ],
}

const reviewLoop = [...previewData.reviews, ...previewData.reviews]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Motion.section>
  )
}

function BlueSkyDentalPreview() {
  useSEO({
    title: 'Blue Sky Family Dentistry Preview | That Software House',
    description:
      'A modern preview redesign for Blue Sky Family Dentistry in South Austin, Texas.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/blue-sky-dental',
    openGraph: {
      title: 'Blue Sky Family Dentistry Preview',
      description:
        'Standalone preview concept for a blue-led, family-focused dental website experience.',
      url: 'https://preview.thatsoftwarehouse.com/blue-sky-dental',
      image: heroImage,
    },
  })

  return (
    <main className="blue-sky-preview" id="top">
      <header className="blue-sky-preview__nav">
        <div className="blue-sky-preview__nav-inner">
          <a href="#top" className="blue-sky-preview__brand" aria-label={previewData.businessName}>
            <span className="blue-sky-preview__brand-mark">BS</span>
            <span>
              <strong>{previewData.businessName}</strong>
              <small>South Austin, Texas</small>
            </span>
          </a>

          <nav className="blue-sky-preview__nav-links" aria-label="Preview sections">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="blue-sky-preview__nav-actions">
            <a href="#contact" className="blue-sky-preview__button blue-sky-preview__button--light">
              {previewData.hero.primaryCta}
            </a>
            <a href={previewData.phoneHref} className="blue-sky-preview__button blue-sky-preview__button--outline">
              Call us now
            </a>
          </div>
        </div>
      </header>

      <section
        className="blue-sky-preview__hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(247, 251, 254, 0.97) 0%, rgba(247, 251, 254, 0.93) 38%, rgba(247, 251, 254, 0.78) 56%, rgba(247, 251, 254, 0.28) 100%), url(${heroImage})`,
        }}
      >
        <div className="blue-sky-preview__hero-inner">
          <div className="blue-sky-preview__hero-copy">
            <p className="blue-sky-preview__eyebrow">{previewData.hero.eyebrow}</p>

            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.hero.headline}
            </Motion.h1>

            <Motion.p
              className="blue-sky-preview__hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.hero.description}
            </Motion.p>

            <Motion.div
              className="blue-sky-preview__hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="#contact" className="blue-sky-preview__button blue-sky-preview__button--primary">
                {previewData.hero.primaryCta}
              </a>
              <a href="#services" className="blue-sky-preview__button blue-sky-preview__button--ghost">
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>
          </div>
        </div>
      </section>

      <div className="blue-sky-preview__shell">
        <Section className="blue-sky-preview__section blue-sky-preview__trust">
          <div className="blue-sky-preview__trust-strip">
            {previewData.trustItems.map((item) => (
              <div key={item} className="blue-sky-preview__trust-item">
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section className="blue-sky-preview__section" id="services">
          <div className="blue-sky-preview__section-heading">
            <p className="blue-sky-preview__kicker">Care highlights</p>
            <h2>Care categories presented with a cleaner, image-led rhythm.</h2>
          </div>
          <div className="blue-sky-preview__services-grid">
            {previewData.services.map((service) => (
              <article key={service.title} className="blue-sky-preview__service-card">
                <div className="blue-sky-preview__service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="blue-sky-preview__service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact">Learn more</a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section className="blue-sky-preview__section blue-sky-preview__pillars">
          <div className="blue-sky-preview__section-heading">
            <p className="blue-sky-preview__kicker">Why Blue Sky stands out</p>
            <h2>Wellness, technology, and family care all presented in a more modern framework.</h2>
          </div>
          <div className="blue-sky-preview__pillar-grid">
            {previewData.pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="blue-sky-preview__pillar-card">
                  <div className="blue-sky-preview__pillar-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              )
            })}
          </div>
        </Section>

      </div>

      <Section className="blue-sky-preview__section blue-sky-preview__reviews" id="reviews">
        <div className="blue-sky-preview__reviews-inner">
          <div className="blue-sky-preview__section-heading blue-sky-preview__section-heading--center">
            <p className="blue-sky-preview__kicker">Patient perspective</p>
            <h2>Review presentation inspired by the sample reference, adapted to Blue Sky’s tone.</h2>
          </div>
        </div>
        <div className="blue-sky-preview__reviews-marquee" aria-label="Patient review themes">
          <div className="blue-sky-preview__reviews-track">
            {reviewLoop.map((review, index) => (
              <article key={`${review.author}-${index}`} className="blue-sky-preview__review-card">
                <div className="blue-sky-preview__stars">
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                  <Star size={15} fill="currentColor" />
                </div>
                <p>{review.quote}</p>
                <strong>{review.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <footer className="blue-sky-preview__footer" id="contact">
        <div className="blue-sky-preview__footer-inner">
          <div className="blue-sky-preview__footer-copy">
            <p className="blue-sky-preview__footer-kicker">Visit Blue Sky Family Dentistry</p>
            <h2>Serving South Austin with family-focused, wellness-minded dental care.</h2>
            <p className="blue-sky-preview__footer-name">{previewData.doctor}</p>

            <div className="blue-sky-preview__contact-list">
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} />
                <span>{previewData.address}</span>
              </a>
              <a href={previewData.phoneHref}>
                <Phone size={18} />
                <span>{previewData.phoneDisplay}</span>
              </a>
              <div>
                <CalendarDays size={18} />
                <span>Preview CTA only, no live scheduling in this concept</span>
              </div>
            </div>

            <div className="blue-sky-preview__hours">
              <div className="blue-sky-preview__hours-title">
                <Clock3 size={18} />
                <span>Hours</span>
              </div>
              <ul>
                {previewData.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="blue-sky-preview__footer-map">
            <div className="blue-sky-preview__map-frame">
              <iframe
                title="Blue Sky Family Dentistry map"
                src="https://www.google.com/maps?q=5915%20La%20Crosse%20Ave%20Ste%20105%2C%20Austin%2C%20TX%2078739&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="blue-sky-preview__footer-note">
              Preview by <a href="https://thatsoftwarehouse.com" target="_blank" rel="noreferrer">That Software House</a>
            </p>
          </div>
        </div>
      </footer>
      <FloatingCTA />
    </main>
  )
}

export default BlueSkyDentalPreview
