import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './DeepEllumAdvancedDentistryPreview.css'

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

const previewData = {
  slug: 'deep-ellum-advanced-dentistry',
  businessName: 'Deep Ellum Advanced Dentistry',
  brandMark: 'DEA',
  tagline: 'Crafting confident smiles in Dallas.',
  seoDescription:
    'Deep Ellum Advanced Dentistry in Dallas offers personalized preventive, cosmetic, restorative, and emergency dental care led by Michael Wing, DDS.',
  phoneDisplay: '(214) 466-6610',
  phoneHref: 'tel:+12144666610',
  mapUrl: 'https://maps.google.com/maps?cid=14284275390855889916',
  address: ['3112 Main Street', 'Dallas, TX 75226'],
  nav: {
    ariaLabel: 'Preview sections',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Why Patients Stay', href: '#why' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Now',
  },
  hero: {
    eyebrow: 'General, Cosmetic, Restorative & Emergency Dentistry',
    headline: 'Personalized care for a healthier, more confident smile.',
    description:
      'At Deep Ellum Advanced Dentistry, every visit is designed around clear communication, one-on-one attention, and treatment options that match your goals.',
    primaryCta: 'Call (214) 466-6610',
    secondaryCta: 'Request Appointment',
    secondaryHref: '#contact',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
    chips: [
      { value: '5.0', label: 'Patient Rating' },
      { value: '30+', label: 'Published Reviews' },
    ],
    trustLinks: [
      {
        icon: 'MapPin',
        label: '3112 Main Street, Dallas, TX 75226',
        href: '#contact',
      },
      {
        icon: 'ShieldCheck',
        label: 'English + Spanish patient support',
        href: '#why',
      },
    ],
  },
  stats: [
    { value: '15+ Years', label: 'Dallas-area clinical experience' },
    { value: 'One-on-One', label: 'Personalized appointment flow' },
    { value: 'Tue/Fri/Sat', label: 'Open 10:00 AM - 5:00 PM' },
    { value: 'Full Service', label: 'Preventive through smile makeovers' },
  ],
  services: {
    kicker: 'Our Services',
    heading: 'Treatment options that protect health and improve confidence.',
    cards: [
      {
        title: 'Preventive Dentistry',
        label: 'Cleanings and exams',
        description:
          'Routine checkups and proactive diagnostics help prevent cavities, gum issues, and surprise dental pain.',
        image:
          'https://images.unsplash.com/photo-1588776814546-ec7e31c8b4b3?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Cosmetic Smile Care',
        label: 'Whitening and veneers',
        description:
          'Teeth whitening, veneers, and smile makeover planning help you achieve a brighter, more balanced smile.',
        image:
          'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Implants and Restorative',
        label: 'Function and stability',
        description:
          'Dental implants, crowns, bridges, and dentures are available to restore comfort, chewing, and long-term confidence.',
        image:
          'https://images.unsplash.com/photo-1629909615957-be71fe74f556?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Emergency Dentistry',
        label: 'Fast relief',
        description:
          'When pain or injury happens, the team provides urgent evaluation and a clear treatment plan to help you feel better quickly.',
        image:
          'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  signature: {
    kicker: 'Why Patients Stay',
    heading: 'Modern treatment with a calm, personal experience.',
    body:
      'Dr. Michael Wing and the Deep Ellum team focus on transparent guidance and practical long-term plans so you always understand your next step.',
    image:
      'https://images.unsplash.com/photo-1609207825181-52d3214556ea?auto=format&fit=crop&w=900&q=80',
    bullets: [
      'Care plans built around your priorities, timeline, and comfort level',
      'Clear explanations for each procedure before treatment begins',
      'Focused expertise in Invisalign, implants, and cosmetic dentistry',
    ],
  },
  testimonial: {
    kicker: 'Patient Reviews',
    heading: 'What Dallas patients say after their visits.',
    quote:
      "Insane that I didn't know this was here. Mike was able to immediately find my issues, isolate them, and get me a plan going to not just fix a cavity, but to fix my smile.",
    author: 'Phoenix T.',
    photo:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    score: '4.9',
    scoreLabel: 'average review rating',
  },
  contact: {
    heading: 'Ready for your next dental visit in Deep Ellum?',
    description:
      'Call to schedule preventive care, cosmetic consultation, implant planning, or urgent treatment support.',
    hours: [
      { day: 'Monday', value: 'Closed' },
      { day: 'Tuesday', value: '10:00 am - 5:00 pm' },
      { day: 'Wednesday', value: 'Closed' },
      { day: 'Thursday', value: 'Closed' },
      { day: 'Friday', value: '10:00 am - 5:00 pm' },
      { day: 'Saturday', value: '10:00 am - 5:00 pm' },
      { day: 'Sunday', value: 'Closed' },
    ],
    primaryCta: 'Call to Book',
    secondaryCta: 'Open Map',
  },
  footer: {
    statement: 'Personalized dentistry in the heart of Deep Ellum.',
    servicesHeading: 'Popular Services',
    services: ['Teeth Whitening', 'Invisalign', 'Dental Implants', 'Emergency Care'],
    linksHeading: 'Quick Links',
    links: ['Our Services', 'Patient Reviews', 'Contact', 'Request Appointment'],
    copyright: '© 2026 Deep Ellum Advanced Dentistry Preview',
    brandArt: 'DeepEllum',
  },
  mobileRail: {
    phoneLabel: 'Call',
    ctaLabel: 'Book',
  },
}

function Section({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      className={`dea-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="dea-preview__shell">{children}</div>
    </Motion.section>
  )
}

function DeepEllumAdvancedDentistryPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: `${previewData.businessName} | Dental Preview`,
    description: previewData.seoDescription,
    canonicalUrl: `https://preview.thatsoftwarehouse.com/${previewData.slug}`,
    openGraph: {
      title: `${previewData.businessName} Preview`,
      description: previewData.hero.description,
      url: `https://preview.thatsoftwarehouse.com/${previewData.slug}`,
      image: previewData.hero.image,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 26)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="dea-preview" id="top">
      <header className={`dea-preview__nav ${navSolid ? 'dea-preview__nav--solid' : ''}`}>
        <div className="dea-preview__shell dea-preview__nav-inner">
          <a href="#top" className="dea-preview__brand" aria-label={previewData.businessName}>
            <span className="dea-preview__brand-mark">{previewData.brandMark}</span>
            <span className="dea-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="dea-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a href={previewData.phoneHref} className="dea-preview__nav-cta">{previewData.nav.cta}</a>
        </div>
      </header>

      <Motion.section
        id="hero"
        className="dea-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="dea-preview__shell dea-preview__hero-grid">
          <div className="dea-preview__hero-copy">
            <Motion.p className="dea-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="dea-preview__hero-body" variants={staggerChild}>{previewData.hero.description}</Motion.p>

            <Motion.div className="dea-preview__hero-actions" variants={staggerChild}>
              <a href={previewData.phoneHref} className="dea-preview__btn dea-preview__btn--primary">
                {previewData.hero.primaryCta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={previewData.hero.secondaryHref} className="dea-preview__btn dea-preview__btn--ghost">
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>

            <Motion.div className="dea-preview__hero-meta" variants={staggerChild}>
              {previewData.hero.trustLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.icon === 'MapPin' ? <MapPin size={15} aria-hidden="true" /> : <ShieldCheck size={15} aria-hidden="true" />}
                  {item.label}
                </a>
              ))}
            </Motion.div>
          </div>

          <Motion.figure className="dea-preview__hero-card" variants={staggerChild}>
            <img src={previewData.hero.image} alt="Patient smiling in dental clinic" loading="eager" />
            <div className="dea-preview__hero-chip dea-preview__hero-chip--top">
              <strong>{previewData.hero.chips[0].value}</strong>
              <span>{previewData.hero.chips[0].label}</span>
            </div>
            <div className="dea-preview__hero-chip dea-preview__hero-chip--bottom">
              <strong>{previewData.hero.chips[1].value}</strong>
              <span>{previewData.hero.chips[1].label}</span>
            </div>
          </Motion.figure>
        </div>
      </Motion.section>

      <Section id="stats" className="dea-preview__section--stats">
        <Motion.div className="dea-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((item) => (
            <Motion.article className="dea-preview__stat-chip" key={item.label} variants={staggerChild}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="services" className="dea-preview__section--services">
        <div className="dea-preview__section-head">
          <p className="dea-preview__kicker">{previewData.services.kicker}</p>
          <h2>{previewData.services.heading}</h2>
        </div>

        <Motion.div className="dea-preview__services-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.services.cards.map((card) => (
            <Motion.article key={card.title} className="dea-preview__service-card" variants={staggerChild}>
              <img src={card.image} alt={card.title} loading="lazy" />
              <div className="dea-preview__service-copy">
                <p className="dea-preview__service-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="why" className="dea-preview__section--signature">
        <div className="dea-preview__signature-grid">
          <Motion.figure className="dea-preview__signature-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.signature.image} alt="Dentist reviewing patient x-rays" loading="lazy" />
          </Motion.figure>

          <Motion.article className="dea-preview__signature-copy" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <Motion.p className="dea-preview__kicker" variants={staggerChild}>{previewData.signature.kicker}</Motion.p>
            <Motion.h2 variants={staggerChild}>{previewData.signature.heading}</Motion.h2>
            <Motion.p variants={staggerChild}>{previewData.signature.body}</Motion.p>
            <Motion.ul className="dea-preview__signature-list" variants={staggerContainer}>
              {previewData.signature.bullets.map((bullet) => (
                <Motion.li key={bullet} variants={staggerChild}>
                  <Sparkles size={16} aria-hidden="true" />
                  <span>{bullet}</span>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.article>
        </div>
      </Section>

      <Section id="reviews" className="dea-preview__section--reviews">
        <div className="dea-preview__section-head">
          <p className="dea-preview__kicker">{previewData.testimonial.kicker}</p>
          <h2>{previewData.testimonial.heading}</h2>
        </div>

        <Motion.article className="dea-preview__testimonial" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <img src={previewData.testimonial.photo} alt="Happy dental patient" loading="lazy" />
          <div className="dea-preview__testimonial-copy">
            <p>“{previewData.testimonial.quote}”</p>
            <strong>{previewData.testimonial.author}</strong>
            <div className="dea-preview__testimonial-score">
              <Star size={16} fill="currentColor" aria-hidden="true" />
              <span>{previewData.testimonial.score}</span>
              <small>{previewData.testimonial.scoreLabel}</small>
            </div>
          </div>
        </Motion.article>
      </Section>

      <Section id="contact" className="dea-preview__section--contact">
        <div className="dea-preview__contact-grid">
          <Motion.article className="dea-preview__contact-card" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>
            <a href={previewData.phoneHref} className="dea-preview__contact-link">
              <Phone size={16} aria-hidden="true" />
              {previewData.phoneDisplay}
            </a>
            <a href={previewData.mapUrl} target="_blank" rel="noreferrer" className="dea-preview__contact-link">
              <MapPin size={16} aria-hidden="true" />
              {previewData.address.join(', ')}
            </a>
            <div className="dea-preview__contact-actions">
              <a href={previewData.phoneHref} className="dea-preview__btn dea-preview__btn--primary">{previewData.contact.primaryCta}</a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer" className="dea-preview__btn dea-preview__btn--ghost">{previewData.contact.secondaryCta}</a>
            </div>
          </Motion.article>

          <Motion.article className="dea-preview__hours-card" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3>
              <Clock3 size={16} aria-hidden="true" />
              Office Hours
            </h3>
            <ul>
              {previewData.contact.hours.map((slot) => (
                <li key={slot.day}>
                  <span>{slot.day}</span>
                  <strong>{slot.value}</strong>
                </li>
              ))}
            </ul>
          </Motion.article>
        </div>
      </Section>

      <footer className="dea-preview__footer">
        <div className="dea-preview__shell dea-preview__footer-grid">
          <div>
            <p>{previewData.footer.statement}</p>
            <small>{previewData.footer.copyright}</small>
          </div>
          <div>
            <h3>{previewData.footer.servicesHeading}</h3>
            <ul>
              {previewData.footer.services.map((item) => (<li key={item}>{item}</li>))}
            </ul>
          </div>
          <div>
            <h3>{previewData.footer.linksHeading}</h3>
            <ul>
              {previewData.footer.links.map((item) => (<li key={item}>{item}</li>))}
            </ul>
          </div>
        </div>
        <p className="dea-preview__brand-art">{previewData.footer.brandArt}</p>
      </footer>

      <div className="dea-preview__mobile-rail">
        <a href={previewData.phoneHref} className="dea-preview__mobile-link dea-preview__mobile-link--ghost">
          <Phone size={16} aria-hidden="true" />
          {previewData.mobileRail.phoneLabel}
        </a>
        <a href="#contact" className="dea-preview__mobile-link dea-preview__mobile-link--solid">
          <Smile size={16} aria-hidden="true" />
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default DeepEllumAdvancedDentistryPreview
