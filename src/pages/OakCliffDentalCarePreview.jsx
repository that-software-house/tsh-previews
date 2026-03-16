import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Languages,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRound,
  Users,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './OakCliffDentalCarePreview.css'

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
  Stethoscope,
  ShieldCheck,
  Languages,
  Users,
  CheckCircle2,
  Clock3,
  Star,
  UserRound,
}

const previewData = {
  slug: 'oak-cliff-dental-care',
  businessName: 'Oak Cliff Dental Care',
  brandMark: 'OCDC',
  tagline: 'Your Friendly Neighborhood Dentist',
  phoneDisplay: '(214) 371-4763',
  phoneHref: 'tel:+12143714763',
  secondaryPhoneDisplay: 'Book Online',
  secondaryPhoneHref: 'https://app.nexhealth.com/appt/oak-cliff-dental-care-texas',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=3606+Marvin+D+Love+Fwy+Suite+B+Dallas+TX+75224',
  addressLines: ['3606 Marvin D. Love Fwy, Suite B', 'Dallas, TX 75224'],
  socialLinks: {
    facebook: 'https://www.oakcliffdentist.com/',
    instagram: 'https://www.oakcliffdentist.com/reviews',
    yelp: 'https://www.oakcliffdentist.com/reviews',
  },
  hero: {
    eyebrow: 'Best Dental Care in Town',
    headline: 'Best dental care in Oak Cliff for your whole family.',
    description:
      'From preventive visits to cosmetic smile improvements, our team provides attentive, family-friendly care with modern techniques and a neighborhood approach.',
    primaryCta: 'Book Appointment Now',
    secondaryCta: 'Call (214) 371-4763',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    meta: [
      { icon: 'MapPin', text: '3606 Marvin D. Love Fwy, Suite B, Dallas, TX 75224', href: '#contact' },
      { icon: 'CalendarDays', text: 'Monday to Thursday: 9:00 AM to 5:00 PM', href: '#contact' },
    ],
    overlayStart: 'rgba(234, 244, 255, 0.95)',
    overlayEnd: 'rgba(225, 242, 255, 0.45)',
  },
  stats: [
    { value: '$79', label: 'New Patient Special' },
    { value: '5-Star', label: 'Top Rated in Dallas' },
    { value: 'Mon-Thu', label: '9:00 AM to 5:00 PM' },
  ],
  trustSection: {
    kicker: 'Why Oak Cliff Families Choose Us',
    heading: 'Exceptional care in a family-friendly environment.',
    description:
      'Our team combines attentive support with modern equipment and practical guidance, so each visit feels clear, comfortable, and focused on long-term oral health.',
    items: [
      {
        title: 'Friendly Neighborhood Care',
        description:
          'We focus on warm, personal care for children, adults, and families across Oak Cliff and South Dallas.',
        icon: 'MapPin',
      },
      {
        title: 'Bilingual Team Support',
        description:
          'Our team works to make communication easy so you always feel informed and confident about next steps.',
        icon: 'Languages',
      },
      {
        title: 'Comprehensive Dentistry',
        description:
          'From preventive cleanings and fillings to implants and cosmetic services, your care plan can stay in one office.',
        icon: 'Stethoscope',
      },
    ],
  },
  services: [
    {
      title: 'General Dentistry',
      description: 'Exams, cleanings, and preventive care to protect your long-term oral health.',
      icon: 'Sparkles',
    },
    {
      title: 'Family Dentistry',
      description: 'Comfortable visits for kids, teens, and adults with care plans tailored by age and need.',
      icon: 'Sparkles',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Whitening, veneers, and smile improvements designed to help you feel confident in photos and in person.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Orthodontics',
      description: 'Alignment-focused options that support both healthier bite function and a straighter smile.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Dental Implants',
      description: 'Restore comfort and confidence with stable, long-term tooth replacement solutions.',
      icon: 'Users',
    },
    {
      title: 'Root Canal & Emergency Care',
      description: 'Fast relief for urgent pain and tooth infections with treatment plans built around comfort.',
      icon: 'Clock3',
    },
  ],
  doctors: {
    kicker: 'Meet Dr. Haider & Team',
    heading: 'Experienced care with a personal, neighborhood touch.',
    description:
      'Dr. Skeena Haider and the Oak Cliff Dental Care team focus on prevention, smile confidence, and patient-first communication at every visit.',
    image:
      'https://images.unsplash.com/photo-1588776814546-ec7e31c8b4b3?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist in white coat smiling in clinic',
    team: [
      {
        name: 'Dr. Skeena Haider',
        title: 'DDS',
        bio: 'Dr. Haider trained at Stony Brook School of Dental Medicine and continues advanced education across implants, orthodontics, and esthetic care.',
      },
      {
        name: 'Veronique Mitchell',
        title: 'Office Manager',
        bio: 'Veronique helps patients with scheduling and insurance details, keeping each appointment smooth from check-in to checkout.',
      },
      {
        name: 'Roger Waggoner',
        title: 'RDH',
        bio: 'Roger delivers preventive hygiene care and takes time to build personal relationships that help patients feel at ease.',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What patients are saying in Dallas',
    items: [
      {
        quote:
          '“Top Rated 5 Star Dentist in Dallas.”',
        author: 'Local Review Highlights',
      },
      {
        quote:
          '“Your Friendly Neighborhood Dentist.”',
        author: 'Oak Cliff Dental Care',
      },
      {
        quote:
          '“We understand the importance of exceptional care in a family friendly environment.”',
        author: 'Practice Promise',
      },
    ],
  },
  ctaBand: {
    heading: 'Ready for your next visit?',
    body: 'Book online or call today to schedule care with a trusted Oak Cliff dental team.',
    primaryCta: 'Book Appointment Now',
    secondaryCta: 'Call the Office',
  },
  contact: {
    neighborhoods: ['Oak Cliff', 'Wynnewood', 'Bishop Arts', 'Kiest Park', 'Dallas Families'],
    hours: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  },
  footer: {
    serviceLinks: [
      'General Dentistry',
      'Family Dentistry',
      'Cosmetic Dentistry',
      'Orthodontics',
      'Dental Implants',
      'Root Canal',
    ],
    patientLinks: ['New Patient Special', 'Special Offers', 'Patient Forms', 'Reviews'],
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`occare-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="occare-preview__shell">{children}</div>
    </Motion.section>
  )
}

function OakCliffDentalCarePreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: 'Oak Cliff Dental Care Preview | That Software House',
    description:
      'A modern preview redesign for Oak Cliff Dental Care in Dallas, Texas, focused on family-friendly and comprehensive care.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/oak-cliff-dental-care',
    openGraph: {
      title: 'Oak Cliff Dental Care Preview',
      description:
        'Modern single-page preview concept for Oak Cliff Dental Care in Dallas, Texas.',
      url: 'https://preview.thatsoftwarehouse.com/oak-cliff-dental-care',
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
    <main className="occare-preview" id="top">
      <header className={`occare-preview__nav ${navSolid ? 'occare-preview__nav--solid' : ''}`}>
        <div className="occare-preview__shell occare-preview__nav-inner">
          <a href="#top" className="occare-preview__brand" aria-label={previewData.businessName}>
            <span className="occare-preview__brand-mark">{previewData.brandMark}</span>
            <span className="occare-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>Dallas, TX</small>
            </span>
          </a>

          <nav className="occare-preview__nav-links" aria-label="Preview sections">
            <a href="#services">Services</a>
            <a href="#doctors">Meet the Team</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="occare-preview__nav-cta">
            {previewData.hero.primaryCta}
          </a>
        </div>
      </header>

      <section
        className="occare-preview__hero"
        style={{
          backgroundImage: `linear-gradient(118deg, ${previewData.hero.overlayStart} 0%, ${previewData.hero.overlayEnd} 64%), url(${previewData.hero.image})`,
        }}
      >
        <div className="occare-preview__shell occare-preview__hero-inner">
          <Motion.div
            className="occare-preview__hero-copy"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <Motion.p className="occare-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="occare-preview__hero-description" variants={staggerChild}>
              {previewData.hero.description}
            </Motion.p>
            <Motion.div className="occare-preview__hero-actions" variants={staggerChild}>
              <a href="#contact" className="occare-preview__btn occare-preview__btn--primary">
                {previewData.hero.primaryCta}
              </a>
              <a href={previewData.phoneHref} className="occare-preview__btn occare-preview__btn--ghost">
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>
            <Motion.div className="occare-preview__hero-meta" variants={staggerChild}>
              {previewData.hero.meta.map((item) => {
                const Icon = item.icon === 'MapPin' ? MapPin : CalendarDays
                return (
                  <a key={item.text} href={item.href}>
                    <Icon size={16} />
                    <span>{item.text}</span>
                  </a>
                )
              })}
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      <section className="occare-preview__section occare-preview__section--stats">
        <div className="occare-preview__shell">
          <div className="occare-preview__stats-grid">
            {previewData.stats.map((stat) => (
              <div key={stat.label} className="occare-preview__stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="trust" className="occare-preview__section--light">
        <div className="occare-preview__section-head">
          <p className="occare-preview__kicker">{previewData.trustSection.kicker}</p>
          <h2>{previewData.trustSection.heading}</h2>
          <p>{previewData.trustSection.description}</p>
        </div>
        <Motion.div
          className="occare-preview__trust-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.trustSection.items.map((item) => {
            const Icon = item.icon === 'MapPin' ? MapPin : iconMap[item.icon]
            return (
              <Motion.article key={item.title} className="occare-preview__trust-card" variants={staggerChild}>
                <div className="occare-preview__icon-wrap">
                  <Icon size={18} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="services">
        <div className="occare-preview__section-head occare-preview__section-head--center">
          <p className="occare-preview__kicker">Our Services</p>
          <h2>Comprehensive care for your whole smile.</h2>
        </div>
        <Motion.div
          className="occare-preview__services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles
            return (
              <Motion.article key={service.title} className="occare-preview__service-card" variants={staggerChild}>
                <div className="occare-preview__icon-wrap occare-preview__icon-wrap--service">
                  <Icon size={18} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="occare-preview__section--tinted">
        <div className="occare-preview__doctor-grid">
          <div className="occare-preview__doctor-copy">
            <p className="occare-preview__kicker">{previewData.doctors.kicker}</p>
            <h2>{previewData.doctors.heading}</h2>
            <p>{previewData.doctors.description}</p>
            <div className="occare-preview__doctor-list">
              {previewData.doctors.team.map((doctor) => (
                <article key={doctor.name} className="occare-preview__doctor-item">
                  <div className="occare-preview__doctor-icon">
                    <UserRound size={16} />
                  </div>
                  <div>
                    <h3>
                      {doctor.name} <span>{doctor.title}</span>
                    </h3>
                    <p>{doctor.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="occare-preview__doctor-image-wrap">
            <img src={previewData.doctors.image} alt={previewData.doctors.imageAlt} className="occare-preview__doctor-image" />
          </div>
        </div>
      </Section>

      <Section id="reviews">
        <div className="occare-preview__section-head occare-preview__section-head--center">
          <p className="occare-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </div>
        <Motion.div
          className="occare-preview__reviews-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.quote} className="occare-preview__review-card" variants={staggerChild}>
              <div className="occare-preview__stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${item.author}-${index}`} size={15} fill="currentColor" />
                ))}
              </div>
              <p>{item.quote}</p>
              <strong>{item.author}</strong>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section className="occare-preview__section--cta">
        <div className="occare-preview__cta-band">
          <div>
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
          </div>
          <div className="occare-preview__cta-actions">
            <a href="#contact" className="occare-preview__btn occare-preview__btn--primary">
              {previewData.ctaBand.primaryCta}
            </a>
            <a href={previewData.phoneHref} className="occare-preview__btn occare-preview__btn--ghost">
              {previewData.ctaBand.secondaryCta}
            </a>
          </div>
        </div>
      </Section>

      <Section id="contact" className="occare-preview__section--contact">
        <div className="occare-preview__contact-grid">
          <div>
            <p className="occare-preview__kicker">Contact & Location</p>
            <h2>Visit our Oak Cliff office.</h2>
            <div className="occare-preview__contact-list">
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} />
                <span>{previewData.addressLines.join(', ')}</span>
              </a>
              <a href={previewData.phoneHref}>
                <Phone size={18} />
                <span>{previewData.phoneDisplay}</span>
              </a>
              <a href={previewData.secondaryPhoneHref} target="_blank" rel="noreferrer">
                <CalendarDays size={18} />
                <span>{previewData.secondaryPhoneDisplay}</span>
              </a>
            </div>

            <div className="occare-preview__neighborhoods">
              <h3>Care for every stage of life</h3>
              <div className="occare-preview__pill-row">
                {previewData.contact.neighborhoods.map((item) => (
                  <span key={item} className="occare-preview__pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="occare-preview__hours-card">
            <h3>Business Hours</h3>
            {previewData.contact.hours.map((hour) => (
              <div key={hour.day} className="occare-preview__hours-row">
                <span>{hour.day}</span>
                <strong>{hour.hours}</strong>
              </div>
            ))}
            <a href="#top" className="occare-preview__btn occare-preview__btn--primary occare-preview__btn--full">
              Request Your Visit
            </a>
          </aside>
        </div>
      </Section>

      <footer className="occare-preview__footer">
        <div className="occare-preview__shell occare-preview__footer-grid">
          <div>
            <strong>{previewData.businessName}</strong>
            <p>{previewData.tagline}</p>
            <div className="occare-preview__footer-social">
              <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={previewData.socialLinks.yelp} target="_blank" rel="noreferrer">
                Yelp
              </a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {previewData.footer.serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Patient Resources</h4>
            <ul>
              {previewData.footer.patientLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Reach Us</h4>
            <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
            <a href={previewData.secondaryPhoneHref} target="_blank" rel="noreferrer">
              {previewData.secondaryPhoneDisplay}
            </a>
            <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.addressLines.join(', ')}
            </a>
          </div>
        </div>
        <div className="occare-preview__footer-bottom">
          <p>{`© ${new Date().getFullYear()} ${previewData.businessName}`}</p>
        </div>
      </footer>

      <div className="occare-preview__mobile-rail">
        <a href={previewData.phoneHref} className="occare-preview__rail-btn occare-preview__rail-btn--ghost">
          <Phone size={16} />
          Call
        </a>
        <a href={previewData.secondaryPhoneHref} target="_blank" rel="noreferrer" className="occare-preview__rail-btn occare-preview__rail-btn--primary">
          Book Online
        </a>
      </div>

      <img
        src={`https://thatsoftwarehouse.com/api/track/open/${previewData.slug}`}
        width="1"
        height="1"
        alt=""
        aria-hidden="true"
        className="occare-preview__tracking-pixel"
      />

      <FloatingCTA />
    </main>
  )
}

export default OakCliffDentalCarePreview
