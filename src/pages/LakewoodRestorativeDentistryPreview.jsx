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
import './LakewoodRestorativeDentistryPreview.css'

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
  slug: 'lakewood-restorative-dentistry',
  businessName: 'Lakewood Restorative Dentistry',
  brandMark: 'LRD',
  tagline: 'Dentist - Lakewood, White Rock & Lake Highlands',
  seoDescription:
    'Lakewood Restorative Dentistry in East Dallas provides restorative, cosmetic, preventive, and comfort-focused care led by Dr. Ben Alexander and team.',
  phoneDisplay: '(214) 821-8639',
  phoneHref: 'tel:+12148218639',
  email: 'reception@dentistinlakewood.com',
  emailHref: 'mailto:reception@dentistinlakewood.com',
  mapUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJyUDIn1afToYRcTGmdDURjlc',
  address: ['6342 La Vista Dr, Ste C', 'Dallas, TX 75214'],
  nav: {
    ariaLabel: 'Preview sections',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Team', href: '#team' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Now',
  },
  hero: {
    eyebrow: 'Dental Excellence in the Heart of Lakewood',
    headline: 'Restorative dentistry with a calm, patient-first experience.',
    description:
      'From preventive care and smile enhancements to complex restorative treatment, Dr. Ben Alexander and the Lakewood team focus on clear guidance, comfort, and long-term oral health.',
    primaryCta: 'Call (214) 821-8639',
    secondaryCta: 'View Services',
    secondaryHref: '#services',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    chips: [
      { value: 'Kois Trained', label: 'Advanced restorative planning' },
      { value: 'Patient-Centered', label: 'Comfort-first appointment flow' },
    ],
  },
  stats: [
    { value: 'East Dallas', label: 'Serving Lakewood and nearby neighborhoods' },
    { value: 'Mon-Thu', label: 'Open with morning and afternoon blocks' },
    { value: 'Full Spectrum', label: 'Preventive, cosmetic, restorative, and TMJ care' },
    { value: 'Comfort Focused', label: 'Sedation options for anxious patients' },
  ],
  trust: {
    kicker: 'Why Patients Choose Us',
    heading: 'Modern restorative care with personal attention at every visit.',
    cards: [
      {
        title: 'Relationship-Based Care',
        body: 'Your treatment plan is built around your goals, timeline, and comfort level.',
        icon: 'users',
      },
      {
        title: 'Advanced Diagnostics',
        body: 'Digital x-rays and 3D intra-oral scanning help guide accurate, conservative treatment.',
        icon: 'shield',
      },
      {
        title: 'Whole-Health Mindset',
        body: 'The practice emphasizes oral health as a key part of overall wellness.',
        icon: 'sparkles',
      },
      {
        title: 'Comfort Options',
        body: 'Nitrous and oral conscious sedation are available when extra reassurance is needed.',
        icon: 'check',
      },
    ],
  },
  services: [
    {
      id: 'restorative',
      tab: 'Restorative',
      title: 'Restore comfort, function, and confidence.',
      description:
        'Crowns, bridges, fillings, implant restorations, and full-mouth rehabilitation are tailored to your bite, goals, and long-term health.',
      bullets: [
        'Tooth-colored composite fillings',
        'All-ceramic crowns and bridge options',
        'Implant crowns, bridges, and denture support',
      ],
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'cosmetic',
      tab: 'Cosmetic',
      title: 'Conservative smile improvements that still look like you.',
      description:
        'Whitening, veneers, and Invisalign planning are designed to improve appearance while protecting natural tooth structure whenever possible.',
      bullets: [
        'Custom whitening options',
        'Feldspathic and all-ceramic veneers',
        'Invisalign with function-first planning',
      ],
      image:
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'preventive',
      tab: 'Preventive',
      title: 'Prevention-first care for lifelong oral health.',
      description:
        'Routine exams, hygiene care, oral cancer screenings, and biofilm-focused cleanings help reduce disease risk and support healthier outcomes.',
      bullets: [
        'Comprehensive exams and cleanings',
        'Airstream Biofilm Clearance technology',
        'Oral cancer screenings and fluoride support',
      ],
      image:
        'https://images.unsplash.com/photo-1629909615957-be71fe74f556?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'comfort',
      tab: 'TMJ & Comfort Care',
      title: 'Relief-focused options for pain, grinding, and anxiety.',
      description:
        'TMJ therapy, night guards, and laser photobiomodulation are offered alongside sedation options to help patients feel more at ease.',
      bullets: [
        'TMJ evaluation and appliance therapy',
        'Laser support for soreness and inflammation',
        'Nitrous oxide and oral conscious sedation',
      ],
      image:
        'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=900&q=80',
    },
  ],
  team: {
    kicker: 'Meet The Team',
    heading: 'Led by Dr. Ben Alexander with a trusted Lakewood support team.',
    body:
      'Dr. Alexander combines advanced restorative training with a clear, honest communication style. Lorraine, Martha, and Sonia help every visit feel organized, respectful, and comfortable from start to finish.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    members: [
      'Dr. Ben Alexander, DDS - Restorative and comprehensive care',
      'Lorraine - Reception and patient coordination',
      'Martha - Registered Dental Assistant',
      'Sonia - Registered Dental Hygienist',
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'Kindness, clarity, and comfort are mentioned again and again.',
    lead: {
      quote:
        "I'll start off by saying I have extreme dental phobia... Dr. Alexander and his team are so kind, welcoming, and informative.",
      author: 'Patient Review',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    },
    cards: [
      {
        quote:
          "I always have a good experience with Dr Alexander. He's an excellent dentist and I'm never nervous there.",
        author: 'Patient Review',
      },
      {
        quote:
          'Excellent experience from beginning to end. Cleaning and exam was thorough and quick. Everyone is friendly.',
        author: 'Patient Review',
      },
    ],
  },
  contact: {
    heading: 'Schedule your visit with Lakewood Restorative Dentistry.',
    description:
      'Call or email to book preventive care, restorative treatment, cosmetic consultation, or a same-day emergency visit request.',
    primaryCta: 'Call The Office',
    secondaryCta: 'Open Directions',
    hours: [
      { day: 'Monday', value: '8:00 am - 1:00 pm, 2:00 pm - 5:00 pm' },
      { day: 'Tuesday', value: '8:00 am - 1:00 pm, 2:00 pm - 5:00 pm' },
      { day: 'Wednesday', value: '7:00 am - 12:00 pm, 1:00 pm - 4:00 pm' },
      { day: 'Thursday', value: '7:00 am - 12:00 pm, 1:00 pm - 4:00 pm' },
      { day: 'Friday', value: 'Closed' },
      { day: 'Saturday', value: 'Closed' },
      { day: 'Sunday', value: 'Closed' },
    ],
  },
  footer: {
    statement: 'Patient-centered restorative dentistry in Lakewood, East Dallas.',
    servicesHeading: 'Popular Services',
    services: ['Restorative Dentistry', 'TMJ Treatment', 'Invisalign', 'Cosmetic Dentistry'],
    linksHeading: 'Quick Links',
    links: ['Services', 'Dental Team', 'Patient Reviews', 'Contact'],
    copyright: '© 2026 Lakewood Restorative Dentistry Preview',
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
      className={`lrd-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="lrd-preview__shell">{children}</div>
    </Motion.section>
  )
}

function TrustIcon({ type }) {
  if (type === 'users') return <Users size={18} aria-hidden="true" />
  if (type === 'shield') return <ShieldCheck size={18} aria-hidden="true" />
  if (type === 'sparkles') return <Sparkles size={18} aria-hidden="true" />
  return <CheckCircle2 size={18} aria-hidden="true" />
}

function LakewoodRestorativeDentistryPreview() {
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
    <main className="lrd-preview" id="top">
      <header className={`lrd-preview__nav ${navSolid ? 'lrd-preview__nav--solid' : ''}`}>
        <div className="lrd-preview__shell lrd-preview__nav-inner">
          <a href="#top" className="lrd-preview__brand" aria-label={previewData.businessName}>
            <span className="lrd-preview__brand-mark">{previewData.brandMark}</span>
            <span className="lrd-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="lrd-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href={previewData.phoneHref} className="lrd-preview__nav-cta">
            {previewData.nav.cta}
          </a>
        </div>
      </header>

      <Motion.section
        id="hero"
        className="lrd-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="lrd-preview__shell lrd-preview__hero-grid">
          <div className="lrd-preview__hero-copy">
            <Motion.p className="lrd-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="lrd-preview__hero-body" variants={staggerChild}>
              {previewData.hero.description}
            </Motion.p>

            <Motion.div className="lrd-preview__hero-actions" variants={staggerChild}>
              <a href={previewData.phoneHref} className="lrd-preview__btn lrd-preview__btn--primary">
                {previewData.hero.primaryCta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={previewData.hero.secondaryHref}
                className="lrd-preview__btn lrd-preview__btn--ghost"
              >
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>

            <Motion.div className="lrd-preview__hero-meta" variants={staggerChild}>
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

          <Motion.figure className="lrd-preview__hero-card" variants={staggerChild}>
            <img src={previewData.hero.image} alt="Smiling patient in a dental clinic" loading="eager" />
            <div className="lrd-preview__hero-chip lrd-preview__hero-chip--top">
              <strong>{previewData.hero.chips[0].value}</strong>
              <span>{previewData.hero.chips[0].label}</span>
            </div>
            <div className="lrd-preview__hero-chip lrd-preview__hero-chip--bottom">
              <strong>{previewData.hero.chips[1].value}</strong>
              <span>{previewData.hero.chips[1].label}</span>
            </div>
          </Motion.figure>
        </div>
      </Motion.section>

      <Section id="stats" className="lrd-preview__section--stats">
        <Motion.div
          className="lrd-preview__stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.stats.map((item) => (
            <Motion.article className="lrd-preview__stat-chip" key={item.label} variants={staggerChild}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="lrd-preview__section--trust">
        <div className="lrd-preview__section-head">
          <p className="lrd-preview__kicker">{previewData.trust.kicker}</p>
          <h2>{previewData.trust.heading}</h2>
        </div>

        <Motion.div
          className="lrd-preview__trust-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.trust.cards.map((card) => (
            <Motion.article key={card.title} className="lrd-preview__trust-card" variants={staggerChild}>
              <span className="lrd-preview__trust-icon">
                <TrustIcon type={card.icon} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="services" className="lrd-preview__section--services">
        <div className="lrd-preview__section-head lrd-preview__section-head--left">
          <p className="lrd-preview__kicker">Our Services</p>
          <h2>Comprehensive care organized around what you need most.</h2>
        </div>

        <div className="lrd-preview__services-layout">
          <Motion.div
            className="lrd-preview__service-tabs"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.services.map((item) => (
              <Motion.button
                key={item.id}
                type="button"
                className={`lrd-preview__service-tab ${item.id === activeService ? 'is-active' : ''}`}
                onClick={() => setActiveService(item.id)}
                variants={staggerChild}
              >
                {item.tab}
              </Motion.button>
            ))}
          </Motion.div>

          <Motion.article
            key={selectedService.id}
            className="lrd-preview__service-detail"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={selectedService.image} alt={selectedService.tab} loading="lazy" />
            <div className="lrd-preview__service-detail-copy">
              <p className="lrd-preview__service-label">{selectedService.tab}</p>
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

      <Section id="team" className="lrd-preview__section--team">
        <div className="lrd-preview__team-grid">
          <Motion.article
            className="lrd-preview__team-copy"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <Motion.p className="lrd-preview__kicker" variants={staggerChild}>
              {previewData.team.kicker}
            </Motion.p>
            <Motion.h2 variants={staggerChild}>{previewData.team.heading}</Motion.h2>
            <Motion.p variants={staggerChild}>{previewData.team.body}</Motion.p>
            <Motion.ul className="lrd-preview__team-list" variants={staggerContainer}>
              {previewData.team.members.map((member) => (
                <Motion.li key={member} variants={staggerChild}>
                  <Users size={15} aria-hidden="true" />
                  <span>{member}</span>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.article>

          <Motion.figure
            className="lrd-preview__team-image"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={previewData.team.image} alt="Dental team discussing treatment" loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="reviews" className="lrd-preview__section--reviews">
        <div className="lrd-preview__section-head lrd-preview__section-head--left">
          <p className="lrd-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <div className="lrd-preview__reviews-grid">
          <Motion.article
            className="lrd-preview__review-lead"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={previewData.testimonials.lead.image} alt="Smiling dental patient" loading="lazy" />
            <div>
              <p>"{previewData.testimonials.lead.quote}"</p>
              <strong>{previewData.testimonials.lead.author}</strong>
              <div className="lrd-preview__rating">
                <Star size={15} fill="currentColor" aria-hidden="true" />
                <span>5.0 Patient Satisfaction Focus</span>
              </div>
            </div>
          </Motion.article>

          <Motion.div
            className="lrd-preview__review-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.testimonials.cards.map((item) => (
              <Motion.article key={item.quote} className="lrd-preview__review-card" variants={staggerChild}>
                <p>"{item.quote}"</p>
                <strong>{item.author}</strong>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </Section>

      <Section id="contact" className="lrd-preview__section--contact">
        <div className="lrd-preview__contact-grid">
          <Motion.article
            className="lrd-preview__contact-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <a href={previewData.phoneHref} className="lrd-preview__contact-link">
              <Phone size={16} aria-hidden="true" />
              {previewData.phoneDisplay}
            </a>
            <a href={previewData.emailHref} className="lrd-preview__contact-link">
              <ShieldCheck size={16} aria-hidden="true" />
              {previewData.email}
            </a>
            <a href={previewData.mapUrl} className="lrd-preview__contact-link" target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" />
              {previewData.address.join(', ')}
            </a>

            <div className="lrd-preview__contact-actions">
              <a href={previewData.phoneHref} className="lrd-preview__btn lrd-preview__btn--primary">
                {previewData.contact.primaryCta}
              </a>
              <a
                href={previewData.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="lrd-preview__btn lrd-preview__btn--ghost"
              >
                {previewData.contact.secondaryCta}
              </a>
            </div>
          </Motion.article>

          <Motion.article
            className="lrd-preview__hours-card"
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

      <footer className="lrd-preview__footer">
        <div className="lrd-preview__shell lrd-preview__footer-grid">
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

      <div className="lrd-preview__mobile-rail" role="navigation" aria-label="Quick actions">
        <a href={previewData.phoneHref} className="lrd-preview__mobile-link lrd-preview__mobile-link--ghost">
          <Phone size={16} aria-hidden="true" />
          {previewData.mobileRail.phoneLabel}
        </a>
        <a href="#contact" className="lrd-preview__mobile-link lrd-preview__mobile-link--solid">
          <ArrowRight size={16} aria-hidden="true" />
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default LakewoodRestorativeDentistryPreview
