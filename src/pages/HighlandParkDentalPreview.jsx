import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
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
import './HighlandParkDentalPreview.css'

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
  slug: 'highland-park-dental',
  businessName: 'Highland Park Dental',
  tagline: 'Over 20 Years of Excellence, Right Here in Dallas',
  brandMark: 'HPD',
  phoneDisplay: '(972) 362-2021',
  phoneHref: 'tel:+19723622021',
  email: 'HPD@HPDentist.com',
  emailHref: 'mailto:HPD@HPDentist.com',
  mapUrl: 'https://maps.google.com/?q=6725+Hillcrest+Ave+Ste.+B%26C+Dallas+TX+75205',
  addressLines: ['6725 Hillcrest Ave Ste. B&C', 'Dallas, TX 75205'],
  nav: {
    cta: 'Book Online',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Doctors', href: '#doctors' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    eyebrow: 'Highland Park + Dallas Family Dentistry',
    headline: 'Refined dental care in a setting that feels calm, warm, and personal.',
    description:
      'From preventive visits to cosmetic and restorative treatment, our team helps Park Cities families feel comfortable, informed, and cared for at every appointment.',
    primaryCta: 'Book Online',
    secondaryCta: 'Call (972) 362-2021',
    image:
      'https://images.unsplash.com/photo-1629909615767-458d6f4d17f4?auto=format&fit=crop&w=900&q=80',
    overlayStart: 'rgba(248, 246, 242, 0.94)',
    overlayEnd: 'rgba(248, 246, 242, 0.88)',
    trustChips: [
      { icon: 'MapPin', label: 'Snyder Plaza, Dallas' },
      { icon: 'CalendarDays', label: 'Open Monday to Friday' },
      { icon: 'Star', label: 'Award-winning local care' },
    ],
  },
  services: {
    kicker: 'Our Services',
    heading: 'Comprehensive care for every stage of your smile.',
    body:
      'We provide preventive, family, cosmetic, and restorative dentistry in one location, with treatment plans tailored to your goals and comfort level.',
    items: [
      {
        icon: 'Sparkles',
        title: 'General & Preventive',
        description: 'Cleanings, exams, and digital diagnostics that keep your smile healthy long term.',
      },
      {
        icon: 'Smile',
        title: 'Cosmetic Dentistry',
        description: 'Veneers, whitening, and smile refinements to help you feel confident every day.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Restorative Care',
        description: 'Crowns, implants, and repair-focused treatments that restore comfort and function.',
      },
      {
        icon: 'Users',
        title: 'Family & Pediatric',
        description: 'Thoughtful care for children, teens, and adults in one trusted neighborhood office.',
      },
    ],
  },
  doctors: {
    kicker: 'Meet the Doctors',
    heading: 'Experienced dentists focused on comfort and lasting relationships.',
    items: [
      {
        name: 'Aaron Jones, DDS',
        role: 'General, Pediatric & Cosmetic Dentist',
        image:
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
        bio:
          'A Texas native and longtime Park Cities dentist, Dr. Jones is known for personalized care and long-term patient relationships built on trust.',
      },
      {
        name: 'Elizabeth Warsop, DMD',
        role: 'General & Cosmetic Dentist',
        image:
          'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80',
        bio:
          'Dr. Warsop combines advanced training with a calm chairside approach to help each patient leave feeling more confident than when they arrived.',
      },
      {
        name: 'Justin Cortina, DDS, MS',
        role: 'Prosthodontics & Restorative Dentist',
        image:
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80',
        bio:
          'With restorative and implant-focused expertise, Dr. Cortina delivers conservative treatment plans tailored to each patient\'s long-term goals.',
      },
    ],
  },
  testimonials: {
    kicker: 'What Patients Say',
    heading: 'Kind words from families who trust Highland Park Dental.',
    items: [
      {
        quote:
          'Highland Park Dental is truly a gem. The team is thoughtful, friendly, professional, and delivers an incredible patient experience.',
        author: 'Verified Patient',
      },
      {
        quote:
          'My family has been coming here for almost 20 years. They make every visit comfortable, clear, and genuinely caring.',
        author: 'Longtime Family Patient',
      },
      {
        quote:
          'From check-in to treatment, every part of the visit feels organized and personal. I always feel listened to and well cared for.',
        author: 'Dallas Patient',
      },
    ],
  },
  ctaBand: {
    heading: 'Ready for a healthier, brighter smile?',
    body: 'Schedule your visit with a team that blends concierge service, modern dentistry, and genuine local care.',
    primaryCta: 'Book Online',
    secondaryCta: 'Call the Office',
  },
  contact: {
    hours: [
      'Monday: 8:00 AM - 7:00 PM',
      'Tuesday: 8:00 AM - 5:00 PM',
      'Wednesday: 8:00 AM - 5:00 PM',
      'Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 2:00 PM',
    ],
    links: [
      'Invisalign',
      'Dental Cleanings',
      'Cosmetic Dentistry',
      'Dental Implants',
      'Membership Plan',
    ],
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`hpd-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="hpd-preview__shell">{children}</div>
    </Motion.section>
  )
}

function HighlandParkDentalPreview() {
  const [navSolid, setNavSolid] = useState(false)
  const [doctorIndex, setDoctorIndex] = useState(0)

  useSEO({
    title: 'Highland Park Dental Preview | That Software House',
    description:
      'A modern website preview for Highland Park Dental focused on refined family care, cosmetic services, and trusted Dallas hospitality.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/highland-park-dental',
    openGraph: {
      title: 'Highland Park Dental Preview',
      description: previewData.hero.description,
      url: 'https://preview.thatsoftwarehouse.com/highland-park-dental',
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
    <main className="hpd-preview" id="top">
      <header className={`hpd-preview__nav ${navSolid ? 'hpd-preview__nav--solid' : ''}`}>
        <div className="hpd-preview__shell hpd-preview__nav-inner">
          <a href="#top" className="hpd-preview__brand" aria-label={previewData.businessName}>
            <span className="hpd-preview__brand-mark">{previewData.brandMark}</span>
            <span className="hpd-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="hpd-preview__nav-links" aria-label="Primary navigation">
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="hpd-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <Motion.section
        className="hpd-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `linear-gradient(148deg, ${previewData.hero.overlayStart} 0%, ${previewData.hero.overlayEnd} 100%)`,
        }}
      >
        <div className="hpd-preview__shell hpd-preview__hero-shell">
          <div className="hpd-preview__hero-copy">
            <Motion.p className="hpd-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="hpd-preview__hero-body" variants={staggerChild}>{previewData.hero.description}</Motion.p>

            <Motion.div className="hpd-preview__hero-actions" variants={staggerChild}>
              <a className="hpd-preview__btn hpd-preview__btn--primary" href={previewData.phoneHref}>{previewData.hero.primaryCta}</a>
              <a className="hpd-preview__btn hpd-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
            </Motion.div>

            <Motion.div className="hpd-preview__trust-chips" variants={staggerChild}>
              {previewData.hero.trustChips.map((chip) => {
                const Icon = chip.icon === 'MapPin' ? MapPin : chip.icon === 'CalendarDays' ? CalendarDays : Star
                return (
                  <span key={chip.label} className="hpd-preview__chip">
                    <Icon size={15} />
                    {chip.label}
                  </span>
                )
              })}
            </Motion.div>
          </div>

          <Motion.div className="hpd-preview__hero-image-wrap" variants={staggerChild}>
            <div className="hpd-preview__hero-blob" />
            <img src={previewData.hero.image} alt="Patient smiling during a dental visit" className="hpd-preview__hero-image" loading="eager" />
          </Motion.div>
        </div>
      </Motion.section>

      <Section id="services" className="hpd-preview__section--services">
        <Motion.div className="hpd-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <p className="hpd-preview__kicker">{previewData.services.kicker}</p>
          <h2>{previewData.services.heading}</h2>
          <p>{previewData.services.body}</p>
        </Motion.div>

        <Motion.div className="hpd-preview__service-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.services.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="hpd-preview__service-item" variants={staggerChild}>
                <span className="hpd-preview__service-icon"><Icon size={22} /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="hpd-preview__section--doctor">
        <div className="hpd-preview__doctor-grid">
          <Motion.div className="hpd-preview__doctor-copy" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <p className="hpd-preview__kicker">{previewData.doctors.kicker}</p>
            <h2>{previewData.doctors.heading}</h2>
            <h3>{doctor.name}</h3>
            <p className="hpd-preview__doctor-role">{doctor.role}</p>
            <p>{doctor.bio}</p>

            <div className="hpd-preview__doctor-nav" role="group" aria-label="Doctor carousel controls">
              <button
                className="hpd-preview__doctor-btn"
                onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
                aria-label="Previous doctor"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                className="hpd-preview__doctor-btn"
                onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
                aria-label="Next doctor"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Motion.div>

          <Motion.div className="hpd-preview__doctor-image-wrap" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={doctor.image} alt={doctor.name} className="hpd-preview__doctor-image" loading="lazy" />
          </Motion.div>
        </div>
      </Section>

      <Section id="testimonials" className="hpd-preview__section--testimonials">
        <Motion.div className="hpd-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          <p className="hpd-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </Motion.div>

        <Motion.div className="hpd-preview__testimonial-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.quote} className="hpd-preview__testimonial" variants={staggerChild}>
              <div className="hpd-preview__stars" aria-hidden>
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p>\"{item.quote}\"</p>
              <strong>{item.author}</strong>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section className="hpd-preview__section--cta">
        <div className="hpd-preview__cta-grid">
          <Motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <p className="hpd-preview__kicker">Book Your Visit</p>
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
          </Motion.div>
          <Motion.div className="hpd-preview__cta-actions" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <a className="hpd-preview__btn hpd-preview__btn--primary" href={previewData.phoneHref}>
              <Phone size={16} />
              {previewData.ctaBand.primaryCta}
            </a>
            <a className="hpd-preview__btn hpd-preview__btn--ghost" href={previewData.phoneHref}>{previewData.ctaBand.secondaryCta}</a>
          </Motion.div>
        </div>
      </Section>

      <Section id="contact" className="hpd-preview__section--contact">
        <div className="hpd-preview__contact-grid">
          <Motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3>Visit Highland Park Dental</h3>
            <a href={previewData.mapUrl} target="_blank" rel="noreferrer" className="hpd-preview__contact-link">
              <MapPin size={16} />
              <span>{previewData.addressLines[0]}, {previewData.addressLines[1]}</span>
            </a>
            <a href={previewData.phoneHref} className="hpd-preview__contact-link">
              <Phone size={16} />
              <span>{previewData.phoneDisplay}</span>
            </a>
            <a href={previewData.emailHref} className="hpd-preview__contact-link">
              <ArrowRight size={16} />
              <span>{previewData.email}</span>
            </a>
          </Motion.div>

          <Motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <h3>Office Hours</h3>
            <ul className="hpd-preview__hours-list">
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
            <ul className="hpd-preview__link-list">
              {previewData.contact.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </Motion.div>
        </div>

        <footer className="hpd-preview__footer">
          <strong>{previewData.businessName}</strong>
          <p>{previewData.tagline}</p>
        </footer>
      </Section>

      <div className="hpd-preview__mobile-rail" role="navigation" aria-label="Mobile quick actions">
        <a className="hpd-preview__rail-btn hpd-preview__rail-btn--ghost" href={previewData.phoneHref}>
          <Phone size={15} />
          Call
        </a>
        <a className="hpd-preview__rail-btn hpd-preview__rail-btn--primary" href={previewData.phoneHref}>
          Book Online
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default HighlandParkDentalPreview
