import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  ExternalLink,
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
import './NorthDallasDentalGroupPreview.css'

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
  slug: 'north-dallas-dental-group',
  businessName: 'North Dallas Dental Group',
  tagline: 'An Extraordinary Experience',
  brandMark: 'NDDG',
  phoneDisplay: '(972) 407-1333',
  phoneHref: 'tel:+19724071333',
  appointmentHref: 'https://www.flexbook.me/nddg/1',
  mapUrl: 'https://maps.app.goo.gl/7iQ4XT9HT6J5nG3Y6',
  addressLines: ['17120 Dallas Parkway Suite 150', 'Dallas, TX 75248'],
  nav: {
    cta: 'Schedule',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Doctors', href: '#doctors' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    eyebrow: 'General, Cosmetic & Restorative Dentistry in Dallas',
    headline: 'Dallas dental care with a true hospitality experience.',
    description:
      'North Dallas Dental Group combines advanced treatment with warm, personalized care, so every visit feels clear, calm, and comfortable from check-in through follow-up.',
    primaryCta: 'Schedule an Appointment',
    secondaryCta: 'Call (972) 407-1333',
    image:
      'https://assets.lummi.ai/assets/QmaLrspPF4EuwRwp5M8DN8td8vVj4p6MHv2icmEeufhnH8?auto=format&w=1500',
    overlayStart: 'rgba(244, 241, 236, 0.96)',
    overlayEnd: 'rgba(232, 240, 248, 0.9)',
    trustChips: [
      { icon: 'MapPin', label: 'North Dallas on Dallas Parkway' },
      { icon: 'CalendarDays', label: 'Weekday appointments available' },
      { icon: 'Star', label: '4.9 stars and 700+ Google reviews' },
    ],
  },
  services: {
    kicker: 'Our Services',
    heading: 'Handcrafted care for healthy, confident smiles.',
    body:
      'From preventive exams to cosmetic upgrades and restorative treatment, your care plan is built around long-term health, comfort, and your personal goals.',
    items: [
      {
        icon: 'Sparkles',
        title: 'Preventive Family Care',
        description: 'Dental exams, cleanings, digital x-rays, and periodontal support to keep your smile healthy year-round.',
      },
      {
        icon: 'Smile',
        title: 'Cosmetic Smile Options',
        description: 'Whitening, veneers, and Invisalign treatment designed to improve confidence while protecting natural tooth structure.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Restorative Dentistry',
        description: 'Implants, same-day crowns, bridges, and dentures that restore strength, comfort, and long-term function.',
      },
      {
        icon: 'Users',
        title: 'Comfort-First Experience',
        description: 'Fear-free visits, gentle technology, and clear treatment communication that help patients of all ages feel at ease.',
      },
    ],
  },
  doctors: {
    kicker: 'Meet the Doctors',
    heading: 'Experienced clinicians with a people-first approach.',
    items: [
      {
        name: 'Hunter Owen, DDS',
        role: 'Comprehensive and Cosmetic Dentistry',
        image:
          'assets/doctors/male1.png',
        bio:
          'Dr. Owen is known for detail-driven treatment and long-term patient relationships built on trust, comfort, and consistent clinical excellence.',
      },
      {
        name: 'Darren Crosbie, DDS',
        role: 'Implant and Invisalign-Focused Care',
        image:
          'assets/doctors/male1.png',
        bio:
          'Dr. Crosbie provides personalized restorative and cosmetic treatment with advanced training in implants, Invisalign, and same-day crown solutions.',
      },
      {
        name: 'North Dallas Dental Group Team',
        role: 'Guest Experience and Clinical Support',
        image:
          'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
        bio:
          'From your first call to your final treatment follow-up, the team focuses on warm hospitality, clear answers, and a consistently comfortable office experience.',
      },
    ],
  },
  ctaBand: {
    heading: 'Ready for dentistry that feels genuinely personal?',
    body: 'Call or book online to schedule your first visit with a team that puts comfort, transparency, and long-term smile health first.',
    primaryCta: 'Schedule Online',
    secondaryCta: 'Call the Office',
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What Dallas patients say about their experience.',
    items: [
      {
        quote:
          'The professionalism here is unmatched. The team is efficient, warm, and I always feel confident in the treatment I am getting.',
        author: 'Elizabeth M.',
      },
      {
        quote:
          'I loved that they gave me space to share my fears and wishes before treatment. They truly made sure I had the best experience.',
        author: 'Lindsie R.',
      },
      {
        quote:
          'I have been seeing Dr. Crosbie for over 10 years. The staff keeps everything on schedule and makes every visit comfortable.',
        author: 'Julie S.',
      },
    ],
  },
  contact: {
    hours: [
      'Monday: 8:00 AM - 5:00 PM',
      'Tuesday: 7:30 AM - 4:10 PM',
      'Wednesday: 7:30 AM - 4:10 PM',
      'Thursday: 7:30 AM - 4:10 PM',
      'Friday: Closed',
    ],
    links: [
      'Dental Exams & Cleanings',
      'Invisalign Orthodontics',
      'Porcelain Veneers',
      'Dental Implants',
      'Same Day Crowns',
    ],
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`nddg-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="nddg-preview__shell">{children}</div>
    </Motion.section>
  )
}

function NorthDallasDentalGroupPreview() {
  const [navSolid, setNavSolid] = useState(false)
  const [doctorIndex, setDoctorIndex] = useState(0)

  useSEO({
    title: 'North Dallas Dental Group Preview | That Software House',
    description:
      'A modern dental website preview for North Dallas Dental Group with patient-first messaging, premium visuals, and clear Dallas contact pathways.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/north-dallas-dental-group',
    openGraph: {
      title: 'North Dallas Dental Group Preview',
      description: previewData.hero.description,
      url: 'https://preview.thatsoftwarehouse.com/north-dallas-dental-group',
      image: previewData.hero.image,
    },
  })

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const doctor = previewData.doctors.items[doctorIndex]

  return (
    <main className="nddg-preview" id="top">
      <header className={`nddg-preview__nav ${navSolid ? 'nddg-preview__nav--solid' : ''}`}>
        <div className="nddg-preview__shell nddg-preview__nav-inner">
          <a href="#top" className="nddg-preview__brand" aria-label={previewData.businessName}>
            <span className="nddg-preview__brand-mark">{previewData.brandMark}</span>
            <span className="nddg-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="nddg-preview__nav-links" aria-label="Primary navigation">
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a
            className="nddg-preview__nav-cta"
            href={previewData.appointmentHref}
            target="_blank"
            rel="noreferrer"
          >
            {previewData.nav.cta}
          </a>
        </div>
      </header>

      <Motion.section
        className="nddg-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `linear-gradient(148deg, ${previewData.hero.overlayStart} 0%, ${previewData.hero.overlayEnd} 100%)`,
        }}
      >
        <div className="nddg-preview__shell nddg-preview__hero-shell">
          <div className="nddg-preview__hero-copy">
            <Motion.p className="nddg-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="nddg-preview__hero-body" variants={staggerChild}>{previewData.hero.description}</Motion.p>

            <Motion.div className="nddg-preview__hero-actions" variants={staggerChild}>
              <a
                className="nddg-preview__btn nddg-preview__btn--primary"
                href={previewData.appointmentHref}
                target="_blank"
                rel="noreferrer"
              >
                {previewData.hero.primaryCta}
              </a>
              <a className="nddg-preview__btn nddg-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
            </Motion.div>

            <Motion.div className="nddg-preview__trust-chips" variants={staggerChild}>
              {previewData.hero.trustChips.map((chip) => {
                const Icon = chip.icon === 'MapPin' ? MapPin : chip.icon === 'CalendarDays' ? CalendarDays : Star
                return (
                  <span key={chip.label} className="nddg-preview__chip">
                    <Icon size={15} />
                    {chip.label}
                  </span>
                )
              })}
            </Motion.div>
          </div>

          <Motion.div className="nddg-preview__hero-image-wrap" variants={staggerChild}>
            <div className="nddg-preview__hero-blob" />
            <img src={previewData.hero.image} alt="Patient smiling during a modern dental visit" className="nddg-preview__hero-image" loading="eager" />
          </Motion.div>
        </div>
      </Motion.section>

      <Section id="services" className="nddg-preview__section--services">
        <Motion.div className="nddg-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <p className="nddg-preview__kicker">{previewData.services.kicker}</p>
          <h2>{previewData.services.heading}</h2>
          <p>{previewData.services.body}</p>
        </Motion.div>

        <Motion.div className="nddg-preview__service-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.services.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="nddg-preview__service-item" variants={staggerChild}>
                <span className="nddg-preview__service-icon"><Icon size={22} /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="nddg-preview__section--doctor">
        <div className="nddg-preview__doctor-grid">
          <Motion.div className="nddg-preview__doctor-copy" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <p className="nddg-preview__kicker">{previewData.doctors.kicker}</p>
            <h2>{previewData.doctors.heading}</h2>
            <h3>{doctor.name}</h3>
            <p className="nddg-preview__doctor-role">{doctor.role}</p>
            <p>{doctor.bio}</p>

            <div className="nddg-preview__doctor-nav" role="group" aria-label="Doctor carousel controls">
              <button
                className="nddg-preview__doctor-btn"
                onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
                aria-label="Previous doctor"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                className="nddg-preview__doctor-btn"
                onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
                aria-label="Next doctor"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Motion.div>

          <Motion.div className="nddg-preview__doctor-image-wrap" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={doctor.image} alt={doctor.name} className="nddg-preview__doctor-image" loading="lazy" />
          </Motion.div>
        </div>
      </Section>

      <Section className="nddg-preview__section--cta">
        <div className="nddg-preview__cta-grid">
          <Motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <p className="nddg-preview__kicker">Book Your Visit</p>
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
          </Motion.div>
          <Motion.div className="nddg-preview__cta-actions" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <a
              className="nddg-preview__btn nddg-preview__btn--primary"
              href={previewData.appointmentHref}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} />
              {previewData.ctaBand.primaryCta}
            </a>
            <a className="nddg-preview__btn nddg-preview__btn--ghost" href={previewData.phoneHref}>{previewData.ctaBand.secondaryCta}</a>
          </Motion.div>
        </div>
      </Section>

      <Section id="testimonials" className="nddg-preview__section--testimonials">
        <Motion.div className="nddg-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <p className="nddg-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </Motion.div>

        <Motion.div className="nddg-preview__testimonial-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.quote} className="nddg-preview__testimonial" variants={staggerChild}>
              <div className="nddg-preview__stars" aria-hidden>
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p>"{item.quote}"</p>
              <strong>{item.author}</strong>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="contact" className="nddg-preview__section--contact">
        <div className="nddg-preview__contact-grid">
          <Motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3>Visit North Dallas Dental Group</h3>
            <a href={previewData.mapUrl} target="_blank" rel="noreferrer" className="nddg-preview__contact-link">
              <MapPin size={16} />
              <span>{previewData.addressLines[0]}, {previewData.addressLines[1]}</span>
            </a>
            <a href={previewData.phoneHref} className="nddg-preview__contact-link">
              <Phone size={16} />
              <span>{previewData.phoneDisplay}</span>
            </a>
            <a href={previewData.appointmentHref} target="_blank" rel="noreferrer" className="nddg-preview__contact-link">
              <ExternalLink size={16} />
              <span>Schedule an appointment online</span>
            </a>
          </Motion.div>

          <Motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3>Office Hours</h3>
            <ul className="nddg-preview__hours-list">
              {previewData.contact.hours.map((line) => (
                <li key={line}>
                  <Clock3 size={14} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Motion.div>

          <Motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3>Popular Services</h3>
            <ul className="nddg-preview__link-list">
              {previewData.contact.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </Motion.div>
        </div>

        <footer className="nddg-preview__footer">
          <strong>{previewData.businessName}</strong>
          <p>{previewData.tagline}</p>
        </footer>
      </Section>

      <div className="nddg-preview__mobile-rail" role="navigation" aria-label="Mobile quick actions">
        <a className="nddg-preview__rail-btn nddg-preview__rail-btn--ghost" href={previewData.phoneHref}>
          <Phone size={15} />
          Call
        </a>
        <a
          className="nddg-preview__rail-btn nddg-preview__rail-btn--primary"
          href={previewData.appointmentHref}
          target="_blank"
          rel="noreferrer"
        >
          Schedule
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default NorthDallasDentalGroupPreview
