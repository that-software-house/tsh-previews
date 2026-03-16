import React, { useEffect, useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './DentalCenterOfLakewoodPreview.css'

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
  slug: 'dental-center-of-lakewood',
  businessName: 'Dental Center of Lakewood',
  brandMark: 'DCOL',
  tagline: 'Trusted Lakewood, Dallas, TX Dentists',
  seoDescription:
    'Dental Center of Lakewood offers comprehensive preventive, restorative, cosmetic, sedation, and emergency dentistry for Dallas families.',
  phoneDisplay: '(214) 823-5253',
  phoneHref: 'tel:+12148235253',
  email: 'frontdesk@dentalcenteroflakewood.com',
  emailHref: 'mailto:frontdesk@dentalcenteroflakewood.com',
  mapUrl:
    'https://www.google.com/maps/place/Dental+Center+of+Lakewood/@32.8128393,-96.7537324,15z/data=!4m5!3m4!1s0x0:0x47430abea408c1cc!8m2!3d32.8128393!4d-96.7537324',
  address: ['6316 Gaston Ave', 'Dallas, TX 75214'],
  nav: {
    ariaLabel: 'Preview sections',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Doctors', href: '#team' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Now',
  },
  hero: {
    eyebrow: 'Comprehensive Dental Care in Lakewood',
    headline: 'Personal, full-service dentistry for every stage of your smile.',
    description:
      'At Dental Center of Lakewood, Dr. Travis Spillman, Dr. Jacquelyn Green, and a long-tenured team deliver one-on-one care for checkups, implants, cosmetic goals, emergency needs, and more.',
    primaryCta: 'Call (214) 823-5253',
    secondaryCta: 'Explore Services',
    secondaryHref: '#services',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
    chips: [
      { value: 'Two Experienced Dentists', label: 'Decades of combined patient care' },
      { value: 'Comprehensive Services', label: 'From cleanings to full-mouth reconstruction' },
    ],
  },
  stats: [
    { value: '4.9/5 Feel', label: 'Known for caring, unhurried appointments' },
    { value: 'Mon-Fri', label: 'Weekday hours for family scheduling' },
    { value: 'All-in-One Office', label: 'Preventive, cosmetic, restorative, and emergency care' },
    { value: 'Local Team', label: 'Serving Lakewood and Dallas neighborhoods' },
  ],
  trust: {
    kicker: 'Why Patients Choose Us',
    heading: 'Friendly, comprehensive care with the attention your family deserves.',
    cards: [
      {
        title: 'One-on-One Attention',
        body: 'Visits are designed around your needs, questions, and comfort instead of a rushed checklist.',
        icon: 'users',
      },
      {
        title: 'Advanced Dentistry',
        body: 'Modern imaging and treatment planning support precise care for both simple and complex cases.',
        icon: 'shield',
      },
      {
        title: 'True Comprehensive Care',
        body: 'Cleanings, implants, cosmetic options, orthodontics, and emergency dentistry are all in one office.',
        icon: 'sparkles',
      },
      {
        title: 'Comfort Support',
        body: 'Sedation options are available for patients who feel anxious about dental treatment.',
        icon: 'check',
      },
    ],
  },
  services: [
    {
      id: 'preventive',
      tab: 'Preventive',
      title: 'Protect your smile with consistent preventive care.',
      description:
        'Routine checkups and cleanings help catch small issues early, support healthy gums, and keep your long-term oral health on track.',
      bullets: [
        'Dental checkups and cleanings',
        'Fluoride treatment and oral cancer screening',
        'Nightguards and TMJ support',
      ],
      image:
        'https://images.unsplash.com/photo-1629909615769-4e6dd1811f2d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'restorative',
      tab: 'Restorative',
      title: 'Rebuild function and comfort with durable treatment.',
      description:
        'From fillings and crowns to implants and full-mouth reconstruction, care is tailored to restore strength and confidence.',
      bullets: [
        'Tooth-colored fillings and dental crowns',
        'Dental implants, bridges, and dentures',
        'Root canal therapy and extractions',
      ],
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'cosmetic',
      tab: 'Cosmetic',
      title: 'Enhance your smile with natural-looking improvements.',
      description:
        'Cosmetic options are planned with your goals and facial features in mind, so results feel balanced, healthy, and true to you.',
      bullets: [
        'Veneers, cosmetic bonding, and whitening',
        'Smile makeover planning',
        'Invisalign and traditional braces',
      ],
      image:
        'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'urgent',
      tab: 'Emergency',
      title: 'Fast support when pain or damage cannot wait.',
      description:
        'If you wake up with a severe toothache or break a tooth, the team can evaluate the issue quickly and guide next steps right away.',
      bullets: [
        'Same-day urgent evaluations when available',
        'Clear treatment and cost guidance',
        'Sedation and comfort-focused treatment options',
      ],
      image:
        'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80',
    },
  ],
  team: {
    kicker: 'Meet The Doctors',
    heading: 'Dr. Travis Spillman and Dr. Jacquelyn Green lead a trusted Lakewood team.',
    body:
      'Both doctors were inspired early in life to pursue dentistry and now bring decades of experience, advanced continuing education, and a deeply personal style of care to every visit.',
    image:
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80',
    members: [
      'Dr. Travis Spillman, DDS - Baylor and UT Houston trained',
      'Dr. Jacquelyn Green, DDS - UT and UT Health San Antonio trained',
      'Kelli - Office Manager and patient care resource',
      'Rosy and Crystal - Hygiene team focused on prevention and education',
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'Patients consistently mention professionalism, kindness, and trust.',
    lead: {
      quote:
        "Another great appointment with professionals. I have been a patient of Dr. Spillman's for over ten years and never considered changing dentists.",
      author: 'Max B., Dallas',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    },
    cards: [
      {
        quote:
          'Unlike most dentists, they do not try to squeeze money out of you with unnecessary procedures. Highly recommend.',
        author: 'Tim V., Lakewood',
      },
      {
        quote:
          'They always see me on time and get me in and out. Always pleasant and friendly staff.',
        author: 'Rebecca M., Dallas',
      },
    ],
  },
  contact: {
    heading: 'Schedule your visit with Dental Center of Lakewood.',
    description:
      'Call or email to book your next cleaning, discuss a treatment plan, or request an emergency dental appointment.',
    primaryCta: 'Call The Office',
    secondaryCta: 'Open Directions',
    hours: [
      { day: 'Monday', value: '8:00 am - 3:00 pm' },
      { day: 'Tuesday', value: '8:00 am - 3:00 pm' },
      { day: 'Wednesday', value: '8:00 am - 3:00 pm' },
      { day: 'Thursday', value: '8:00 am - 3:00 pm' },
      { day: 'Friday', value: '8:00 am - 2:00 pm' },
      { day: 'Saturday', value: 'Closed' },
      { day: 'Sunday', value: 'Closed' },
    ],
  },
  footer: {
    statement: 'Comprehensive, relationship-first dentistry for Lakewood and Dallas families.',
    servicesHeading: 'Popular Services',
    services: ['Checkups and Cleanings', 'Dental Implants', 'Cosmetic Dentistry', 'Emergency Dentistry'],
    linksHeading: 'Quick Links',
    links: ['Services', 'Meet the Doctors', 'Patient Reviews', 'Contact'],
    copyright: '© 2026 Dental Center of Lakewood Preview',
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
      className={`dcol-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="dcol-preview__shell">{children}</div>
    </Motion.section>
  )
}

function TrustIcon({ type }) {
  if (type === 'users') return <Users size={18} aria-hidden="true" />
  if (type === 'shield') return <ShieldCheck size={18} aria-hidden="true" />
  if (type === 'sparkles') return <Sparkles size={18} aria-hidden="true" />
  return <CheckCircle2 size={18} aria-hidden="true" />
}

function DentalCenterOfLakewoodPreview() {
  const [navSolid, setNavSolid] = useState(false)
  const [activeService, setActiveService] = useState(previewData.services[0].id)

  const selectedService = useMemo(
    () => previewData.services.find((item) => item.id === activeService) ?? previewData.services[0],
    [activeService],
  )

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
    const onScroll = () => setNavSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="dcol-preview" id="top">
      <header className={`dcol-preview__nav ${navSolid ? 'dcol-preview__nav--solid' : ''}`}>
        <div className="dcol-preview__shell dcol-preview__nav-inner">
          <a href="#top" className="dcol-preview__brand" aria-label={previewData.businessName}>
            <span className="dcol-preview__brand-mark">{previewData.brandMark}</span>
            <span className="dcol-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="dcol-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href={previewData.phoneHref} className="dcol-preview__nav-cta">
            {previewData.nav.cta}
          </a>
        </div>
      </header>

      <Motion.section
        id="hero"
        className="dcol-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="dcol-preview__shell dcol-preview__hero-grid">
          <div className="dcol-preview__hero-copy">
            <Motion.p className="dcol-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="dcol-preview__hero-body" variants={staggerChild}>
              {previewData.hero.description}
            </Motion.p>

            <Motion.div className="dcol-preview__hero-actions" variants={staggerChild}>
              <a href={previewData.phoneHref} className="dcol-preview__btn dcol-preview__btn--primary">
                {previewData.hero.primaryCta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={previewData.hero.secondaryHref}
                className="dcol-preview__btn dcol-preview__btn--ghost"
              >
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>

            <Motion.div className="dcol-preview__hero-meta" variants={staggerChild}>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={15} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
              <a href={previewData.emailHref}>
                <ShieldCheck size={15} aria-hidden="true" />
                {previewData.email}
              </a>
            </Motion.div>
          </div>

          <Motion.figure className="dcol-preview__hero-card" variants={staggerChild}>
            <img src={previewData.hero.image} alt="Smiling patient in a dental clinic" loading="eager" />
            <div className="dcol-preview__hero-chip dcol-preview__hero-chip--top">
              <strong>{previewData.hero.chips[0].value}</strong>
              <span>{previewData.hero.chips[0].label}</span>
            </div>
            <div className="dcol-preview__hero-chip dcol-preview__hero-chip--bottom">
              <strong>{previewData.hero.chips[1].value}</strong>
              <span>{previewData.hero.chips[1].label}</span>
            </div>
          </Motion.figure>
        </div>
      </Motion.section>

      <Section id="stats" className="dcol-preview__section--stats">
        <Motion.div
          className="dcol-preview__stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.stats.map((item) => (
            <Motion.article className="dcol-preview__stat-chip" key={item.label} variants={staggerChild}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="dcol-preview__section--trust">
        <div className="dcol-preview__section-head">
          <p className="dcol-preview__kicker">{previewData.trust.kicker}</p>
          <h2>{previewData.trust.heading}</h2>
        </div>

        <Motion.div
          className="dcol-preview__trust-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.trust.cards.map((card) => (
            <Motion.article key={card.title} className="dcol-preview__trust-card" variants={staggerChild}>
              <span className="dcol-preview__trust-icon">
                <TrustIcon type={card.icon} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="services" className="dcol-preview__section--services">
        <div className="dcol-preview__section-head dcol-preview__section-head--left">
          <p className="dcol-preview__kicker">Our Services</p>
          <h2>Comprehensive care organized around what you need most.</h2>
        </div>

        <div className="dcol-preview__services-layout">
          <Motion.div
            className="dcol-preview__service-tabs"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.services.map((item) => (
              <Motion.button
                key={item.id}
                type="button"
                className={`dcol-preview__service-tab ${item.id === activeService ? 'is-active' : ''}`}
                onClick={() => setActiveService(item.id)}
                variants={staggerChild}
              >
                {item.tab}
              </Motion.button>
            ))}
          </Motion.div>

          <Motion.article
            key={selectedService.id}
            className="dcol-preview__service-detail"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={selectedService.image} alt={selectedService.tab} loading="lazy" />
            <div className="dcol-preview__service-detail-copy">
              <p className="dcol-preview__service-label">{selectedService.tab}</p>
              <h3>{selectedService.title}</h3>
              <p>{selectedService.description}</p>
              <ul>
                {selectedService.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion.article>
        </div>
      </Section>

      <Section id="team" className="dcol-preview__section--team">
        <div className="dcol-preview__team-grid">
          <Motion.article
            className="dcol-preview__team-copy"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <Motion.p className="dcol-preview__kicker" variants={staggerChild}>
              {previewData.team.kicker}
            </Motion.p>
            <Motion.h2 variants={staggerChild}>{previewData.team.heading}</Motion.h2>
            <Motion.p variants={staggerChild}>{previewData.team.body}</Motion.p>
            <Motion.ul className="dcol-preview__team-list" variants={staggerContainer}>
              {previewData.team.members.map((member) => (
                <Motion.li key={member} variants={staggerChild}>
                  <Users size={15} aria-hidden="true" />
                  <span>{member}</span>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.article>

          <Motion.figure
            className="dcol-preview__team-image"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={previewData.team.image} alt="Dental team discussing treatment" loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="reviews" className="dcol-preview__section--reviews">
        <div className="dcol-preview__section-head dcol-preview__section-head--left">
          <p className="dcol-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <div className="dcol-preview__reviews-grid">
          <Motion.article
            className="dcol-preview__review-lead"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={previewData.testimonials.lead.image} alt="Smiling dental patient" loading="lazy" />
            <div>
              <p>"{previewData.testimonials.lead.quote}"</p>
              <strong>{previewData.testimonials.lead.author}</strong>
              <div className="dcol-preview__rating">
                <Star size={15} fill="currentColor" aria-hidden="true" />
                <span>5.0 Patient Satisfaction Focus</span>
              </div>
            </div>
          </Motion.article>

          <Motion.div
            className="dcol-preview__review-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.testimonials.cards.map((item) => (
              <Motion.article key={item.quote} className="dcol-preview__review-card" variants={staggerChild}>
                <p>"{item.quote}"</p>
                <strong>{item.author}</strong>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </Section>

      <Section id="contact" className="dcol-preview__section--contact">
        <div className="dcol-preview__contact-grid">
          <Motion.article
            className="dcol-preview__contact-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <a href={previewData.phoneHref} className="dcol-preview__contact-link">
              <Phone size={16} aria-hidden="true" />
              {previewData.phoneDisplay}
            </a>
            <a href={previewData.emailHref} className="dcol-preview__contact-link">
              <ShieldCheck size={16} aria-hidden="true" />
              {previewData.email}
            </a>
            <a href={previewData.mapUrl} className="dcol-preview__contact-link" target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" />
              {previewData.address.join(', ')}
            </a>

            <div className="dcol-preview__contact-actions">
              <a href={previewData.phoneHref} className="dcol-preview__btn dcol-preview__btn--primary">
                {previewData.contact.primaryCta}
              </a>
              <a
                href={previewData.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="dcol-preview__btn dcol-preview__btn--ghost"
              >
                {previewData.contact.secondaryCta}
              </a>
            </div>
          </Motion.article>

          <Motion.article
            className="dcol-preview__hours-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
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

      <footer className="dcol-preview__footer">
        <div className="dcol-preview__shell dcol-preview__footer-grid">
          <div>
            <p>{previewData.footer.statement}</p>
            <small>{previewData.footer.copyright}</small>
          </div>
          <div>
            <h3>{previewData.footer.servicesHeading}</h3>
            <ul>
              {previewData.footer.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{previewData.footer.linksHeading}</h3>
            <ul>
              {previewData.footer.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="dcol-preview__mobile-rail" role="navigation" aria-label="Quick actions">
        <a href={previewData.phoneHref} className="dcol-preview__mobile-link dcol-preview__mobile-link--ghost">
          <Phone size={16} aria-hidden="true" />
          {previewData.mobileRail.phoneLabel}
        </a>
        <a href="#contact" className="dcol-preview__mobile-link dcol-preview__mobile-link--solid">
          <ArrowRight size={16} aria-hidden="true" />
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default DentalCenterOfLakewoodPreview
