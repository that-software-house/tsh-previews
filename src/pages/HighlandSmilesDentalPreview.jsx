import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './HighlandSmilesDentalPreview.css'

const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } }
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

const iconMap = {
  Sparkles,
  ShieldCheck,
  Smile,
  Users,
}

const previewData = {
  slug: 'highland-smiles-dental',
  businessName: 'Highland Smiles Dental',
  tag: 'Dallas, TX',
  tagline: 'Complete Dentistry in a Warm & Welcoming Atmosphere',
  phoneDisplay: '(214) 528-9990',
  phoneHref: 'tel:+12145289990',
  appointmentHref: 'request-an-appointment.html',
  mapUrl: 'https://goo.gl/maps/CxTD11B8G8R2',
  address: ['4925 McKinney Ave', 'Dallas, TX 75205'],
  nav: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Meet Dr. Sandadi', href: '#doctor' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Request Visit',
  },
  hero: {
    eyebrow: 'Family, Preventive, Cosmetic & Emergency Dental Care',
    headline: 'Feel at ease from the moment you walk in.',
    description:
      'Highland Smiles Dental provides complete care for Dallas families with a calm, welcoming office, modern treatment options, and a team that treats patients like family.',
    primaryCta: 'Request an Appointment',
    secondaryCta: 'Call (214) 528-9990',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(253, 249, 246, 0.95)',
    overlayEnd: 'rgba(239, 248, 253, 0.9)',
    trustChips: [
      { icon: 'MapPin', label: 'Near N Central Expressway' },
      { icon: 'CalendarDays', label: 'Mon-Thu 7:00 AM - 4:00 PM' },
      { icon: 'Star', label: 'Warm, anxiety-friendly visits' },
    ],
    badges: ['Same-day emergency support', 'Most major insurance accepted'],
  },
  services: {
    kicker: 'Our Services',
    heading: 'Comprehensive dentistry for every age and every stage.',
    body:
      'From preventive checkups to smile makeovers and urgent visits, we design each treatment plan around comfort, clarity, and long-term oral health.',
    image:
      'https://images.unsplash.com/photo-1588776814546-ec7e31c8b4b3?auto=format&fit=crop&w=900&q=80',
    items: [
      {
        icon: 'Sparkles',
        title: 'Preventive Dentistry',
        description: 'Checkups, cleanings, and periodontal care that help stop problems before they grow.',
      },
      {
        icon: 'Smile',
        title: 'Cosmetic Dentistry',
        description: 'Veneers and whitening solutions that brighten and refine your smile naturally.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Restorative Dentistry',
        description: 'Crowns, bridges, dentures, and implant options that restore comfort and confidence.',
      },
      {
        icon: 'Users',
        title: 'Family & Emergency Care',
        description: 'Kid-friendly care and same-day emergency appointments when you need support quickly.',
      },
    ],
  },
  doctor: {
    kicker: 'Meet the Dentist',
    heading: 'Personalized care led by Dr. Girish Sandadi.',
    body:
      'Dr. Sandadi is known for combining modern dentistry with a human touch. Every visit focuses on understanding your goals, easing anxiety, and helping you make informed decisions with confidence.',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80',
    bullets: [
      'Personalized treatment plans for your goals and timeline',
      'Clear financial guidance, including insurance and financing support',
      'Trusted by Dallas families for preventive, cosmetic, and restorative care',
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'Kind words from Dallas patients.',
    featured: {
      quote:
        'The office is warm and welcoming, the team is professional and kind, and every step is clearly explained. It is the first dental office where I truly feel comfortable.',
      author: 'Lindsay D., Dallas',
    },
    cards: [
      {
        quote:
          'Their warm inviting office and staff are there to welcome me every visit. I cannot imagine going anywhere else.',
        author: 'Michelle T.',
      },
      {
        quote:
          'Professional care with a human touch. I recommend Highland Smiles Dental to anyone and everyone.',
        author: 'Rose S.',
      },
    ],
  },
  contact: {
    hours: [
      'Monday: 7:00 AM - 4:00 PM',
      'Tuesday: 7:00 AM - 4:00 PM',
      'Wednesday: 7:00 AM - 4:00 PM',
      'Thursday: 7:00 AM - 4:00 PM',
      'Friday: 7:00 AM - 1:00 PM',
    ],
    quickLinks: [
      'Request an Appointment',
      'Patient Forms',
      'Dental Insurance',
      'Emergency Dentistry',
      'Cosmetic Dentistry',
    ],
  },
}

function Section({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      className={`hsd-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="hsd-preview__shell">{children}</div>
    </Motion.section>
  )
}

function HighlandSmilesDentalPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: 'Highland Smiles Dental Preview | That Software House',
    description:
      'A modern preview for Highland Smiles Dental featuring warm patient-first messaging, complete services, and a calming Dallas-focused experience.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/highland-smiles-dental',
    openGraph: {
      title: 'Highland Smiles Dental Preview',
      description: previewData.hero.description,
      url: 'https://preview.thatsoftwarehouse.com/highland-smiles-dental',
      image: previewData.hero.image,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="hsd-preview" id="top">
      <header className={`hsd-preview__nav ${navSolid ? 'hsd-preview__nav--solid' : ''}`}>
        <div className="hsd-preview__shell hsd-preview__nav-inner">
          <a className="hsd-preview__brand" href="#top" aria-label={previewData.businessName}>
            <span className="hsd-preview__brand-mark">HSD</span>
            <span className="hsd-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="hsd-preview__nav-links" aria-label="Primary navigation">
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="hsd-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <Motion.section
        className="hsd-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `linear-gradient(150deg, ${previewData.hero.overlayStart} 0%, ${previewData.hero.overlayEnd} 100%)`,
        }}
      >
        <div className="hsd-preview__shell hsd-preview__hero-grid">
          <div className="hsd-preview__hero-copy">
            <Motion.p className="hsd-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="hsd-preview__hero-body" variants={staggerChild}>{previewData.hero.description}</Motion.p>

            <Motion.div className="hsd-preview__hero-actions" variants={staggerChild}>
              <a className="hsd-preview__btn hsd-preview__btn--primary" href={previewData.appointmentHref}>{previewData.hero.primaryCta}</a>
              <a className="hsd-preview__btn hsd-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
            </Motion.div>

            <Motion.div className="hsd-preview__trust-chips" variants={staggerChild}>
              {previewData.hero.trustChips.map((chip) => {
                const Icon = chip.icon === 'MapPin' ? MapPin : chip.icon === 'CalendarDays' ? CalendarDays : Star
                return (
                  <span key={chip.label} className="hsd-preview__chip">
                    <Icon size={15} />
                    {chip.label}
                  </span>
                )
              })}
            </Motion.div>
          </div>

          <Motion.div className="hsd-preview__hero-visual" variants={staggerChild}>
            <img
              src={previewData.hero.image}
              alt="Patient smiling with dental professional in bright clinic"
              className="hsd-preview__hero-image"
              loading="eager"
            />
            <div className="hsd-preview__hero-badge hsd-preview__hero-badge--top">{previewData.hero.badges[0]}</div>
            <div className="hsd-preview__hero-badge hsd-preview__hero-badge--bottom">{previewData.hero.badges[1]}</div>
          </Motion.div>
        </div>
      </Motion.section>

      <Section id="services" className="hsd-preview__section--services">
        <Motion.div className="hsd-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <p className="hsd-preview__kicker">{previewData.services.kicker}</p>
          <h2>{previewData.services.heading}</h2>
          <p>{previewData.services.body}</p>
        </Motion.div>

        <div className="hsd-preview__service-mosaic">
          <Motion.figure className="hsd-preview__service-image-wrap" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.services.image} alt="Dentist and patient discussing treatment options" className="hsd-preview__service-image" loading="lazy" />
          </Motion.figure>

          <Motion.div className="hsd-preview__service-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            {previewData.services.items.map((item) => {
              const Icon = iconMap[item.icon] || Sparkles
              return (
                <Motion.article key={item.title} className="hsd-preview__service-card" variants={staggerChild}>
                  <span className="hsd-preview__service-icon"><Icon size={20} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Motion.article>
              )
            })}
          </Motion.div>
        </div>
      </Section>

      <Section id="doctor" className="hsd-preview__section--doctor">
        <div className="hsd-preview__doctor-panel">
          <Motion.figure className="hsd-preview__doctor-image-wrap" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.doctor.image} alt="Dr. Girish Sandadi" className="hsd-preview__doctor-image" loading="lazy" />
          </Motion.figure>

          <Motion.article className="hsd-preview__doctor-copy" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <Motion.p className="hsd-preview__kicker" variants={staggerChild}>{previewData.doctor.kicker}</Motion.p>
            <Motion.h2 variants={staggerChild}>{previewData.doctor.heading}</Motion.h2>
            <Motion.p variants={staggerChild}>{previewData.doctor.body}</Motion.p>

            <Motion.ul className="hsd-preview__doctor-list" variants={staggerContainer}>
              {previewData.doctor.bullets.map((bullet) => (
                <Motion.li key={bullet} variants={staggerChild}>
                  <ShieldCheck size={17} />
                  <span>{bullet}</span>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.article>
        </div>
      </Section>

      <Section id="reviews" className="hsd-preview__section--reviews">
        <Motion.div className="hsd-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <p className="hsd-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </Motion.div>

        <Motion.article className="hsd-preview__featured-quote" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <p>“{previewData.testimonials.featured.quote}”</p>
          <strong>{previewData.testimonials.featured.author}</strong>
        </Motion.article>

        <Motion.div className="hsd-preview__review-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.testimonials.cards.map((card) => (
            <Motion.article key={card.author} className="hsd-preview__review-card" variants={staggerChild}>
              <p>“{card.quote}”</p>
              <strong>{card.author}</strong>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="contact" className="hsd-preview__section--contact">
        <div className="hsd-preview__contact-grid">
          <Motion.article className="hsd-preview__contact-card" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <p className="hsd-preview__kicker">Contact</p>
            <h2>Plan your next dental visit with confidence.</h2>
            <a href={previewData.phoneHref} className="hsd-preview__contact-link"><Phone size={17} /> {previewData.phoneDisplay}</a>
            <a href={previewData.mapUrl} target="_blank" rel="noreferrer" className="hsd-preview__contact-link"><MapPin size={17} /> {previewData.address.join(', ')}</a>
          </Motion.article>

          <Motion.article className="hsd-preview__contact-card" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3><Clock3 size={18} /> Office Hours</h3>
            <ul className="hsd-preview__hours-list">
              {previewData.contact.hours.map((hours) => (
                <li key={hours}>{hours}</li>
              ))}
            </ul>
          </Motion.article>

          <Motion.article className="hsd-preview__contact-card" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3><Sparkles size={18} /> Quick Links</h3>
            <ul className="hsd-preview__link-list">
              {previewData.contact.quickLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Motion.article>
        </div>
      </Section>

      <footer className="hsd-preview__footer">
        <div className="hsd-preview__shell">
          <p>
            {previewData.businessName} | {previewData.tag} | {previewData.phoneDisplay}
          </p>
        </div>
      </footer>

      <div className="hsd-preview__mobile-rail" role="region" aria-label="Quick actions">
        <a className="hsd-preview__rail-btn hsd-preview__rail-btn--ghost" href={previewData.phoneHref}>Call</a>
        <a className="hsd-preview__rail-btn hsd-preview__rail-btn--primary" href={previewData.appointmentHref}>Request Visit</a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default HighlandSmilesDentalPreview
