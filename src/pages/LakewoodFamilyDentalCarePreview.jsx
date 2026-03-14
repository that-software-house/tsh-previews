import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
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
import './LakewoodFamilyDentalCarePreview.css'

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
  UserRound,
}

const previewData = {
  slug: 'lakewood-family-dental-care',
  businessName: 'Lakewood Family Dental Care',
  brandMark: 'LFD',
  tagline: 'Trusted Dentist in Lakewood, Dallas, TX',
  phoneDisplay: '(214) 823-1638',
  phoneHref: 'tel:+12148231638',
  email: 'appointment@lakewoodfamilydental.com',
  emailHref: 'mailto:appointment@lakewoodfamilydental.com',
  mapUrl:
    'https://www.google.com/maps/place/Lakewood+Family+Dental+Care/@32.814086,-96.754019,15z/data=!4m5!3m4!1s0x0:0xa22c08094716c4c1!8m2!3d32.814086!4d-96.754019?coh=164777&entry=tt&shorturl=1',
  addressLines: ['6329 Oram St', 'Dallas, TX 75214'],
  socialLinks: {
    facebook: 'https://www.facebook.com/eastdallasdentist/',
    instagram: 'https://www.instagram.com/lakewoodfamilydentalcare/',
    yelp: 'https://www.yelp.com/biz/lakewood-family-dental-care-dallas',
  },
  hero: {
    eyebrow: 'Established in 1947, serving Lakewood and East Dallas',
    headline: 'Trusted family dentistry in Lakewood, with modern care for every age.',
    description:
      'From routine cleanings to Invisalign and urgent visits, our caring team helps you feel comfortable, informed, and supported at every appointment.',
    primaryCta: 'Book an Appointment',
    secondaryCta: 'Call (214) 823-1638',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
    meta: [
      { icon: 'MapPin', text: '6329 Oram St, Dallas, TX 75214', href: '#contact' },
      { icon: 'CalendarDays', text: 'Mon - Thu: 8:00 AM to 5:00 PM', href: '#contact' },
    ],
    overlayStart: 'rgba(234, 243, 251, 0.96)',
    overlayEnd: 'rgba(234, 243, 251, 0.44)',
  },
  stats: [
    { value: 'Since 1947', label: 'Lakewood Legacy' },
    { value: '3 Doctors', label: 'Comprehensive Team' },
    { value: 'In-House', label: 'Periodontics & Surgery' },
    { value: 'Mon-Thu', label: '8:00 AM - 5:00 PM' },
  ],
  trustSection: {
    kicker: 'Why Families Choose Us',
    heading: 'Neighborhood roots with modern dental care.',
    description:
      'Our team combines long-standing local trust with updated technology and clear communication, so every visit feels easier and more personalized.',
    items: [
      {
        title: 'Great Lakewood Location',
        description:
          'Near White Rock Lake with easy neighborhood access and convenient parking for busy family schedules.',
        icon: 'MapPin',
      },
      {
        title: 'In-House Specialty Support',
        description:
          'Periodontal and oral surgery services are available in-office to keep care coordinated and convenient.',
        icon: 'Stethoscope',
      },
      {
        title: 'Caring, Multilingual Team',
        description:
          'Friendly support in multiple languages helps patients feel heard and confident at every step.',
        icon: 'Languages',
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
      description: 'Comfortable care plans for children, parents, and multi-generational families.',
      icon: 'Users',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Whitening, veneers, and aesthetic treatments that help you smile with confidence.',
      icon: 'Star',
    },
    {
      title: 'Restorative Dentistry',
      description: 'Crowns, bridges, implants, and dentures to rebuild comfort, function, and appearance.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Invisalign',
      description: 'Clear aligner treatment for a straighter smile with a discreet, flexible approach.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Emergency Dentistry',
      description: 'Prompt support for tooth pain, injury, and urgent concerns when you need help quickly.',
      icon: 'Clock3',
    },
  ],
  doctors: {
    kicker: 'Meet the Doctors',
    heading: 'Experienced local dentists focused on comfort and clear care.',
    description:
      'Dr. Reid Slaughter, Dr. Austin Farmer, and Dr. Pope work together to deliver preventive, restorative, and specialty care in one familiar office.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist in white coat smiling in clinic',
    team: [
      {
        name: 'Dr. Reid Slaughter',
        title: 'DDS',
        bio: 'Comprehensive family dentist known for a friendly, trust-based approach and ongoing clinical education.',
      },
      {
        name: 'Dr. Austin Farmer',
        title: 'DDS',
        bio: 'Calm, detail-focused dentist who takes time to explain treatment clearly and support anxious patients.',
      },
      {
        name: 'Dr. Pope',
        title: 'DDS, MS',
        bio: 'Board-certified periodontist providing advanced periodontal, implant, and minimally invasive surgical care.',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What neighbors are saying',
    items: [
      {
        quote:
          'Iv been seeing Dr. Farmer for a few years now. He takes the time to explain everything so I understand the treatment plans.',
        author: 'Google Review',
      },
      {
        quote:
          'They really care about my comfort and never make me feel like a big baby. Lakewood Family Dental makes dental anxiety so much easier.',
        author: 'Google Review',
      },
      {
        quote:
          'Lakewood Family Dental has been my dentist since I was a kid. The level of care and attention they give is exceptional.',
        author: 'Google Review',
      },
    ],
  },
  ctaBand: {
    heading: 'Ready for your next visit?',
    body: 'Schedule with a local team that has cared for Lakewood families for generations.',
    primaryCta: 'Book an Appointment',
    secondaryCta: 'Call the Office',
  },
  contact: {
    neighborhoods: ['Lower Greenville', 'Swiss Avenue', 'Lakewood Hills', 'Junius Heights', 'Old East Dallas'],
    hours: [
      { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  },
  footer: {
    serviceLinks: ['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Invisalign', 'Emergency Care'],
    patientLinks: ['Reviews', 'Insurance & Financing', 'Patient Forms', 'Contact Us'],
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`lfdc-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="lfdc-preview__shell">{children}</div>
    </Motion.section>
  )
}

function LakewoodFamilyDentalCarePreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: 'Lakewood Family Dental Care Preview | That Software House',
    description:
      'A modern preview redesign for Lakewood Family Dental Care in Dallas, Texas, focused on family-friendly and comprehensive care.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/lakewood-family-dental-care',
    openGraph: {
      title: 'Lakewood Family Dental Care Preview',
      description:
        'Modern single-page preview concept for Lakewood Family Dental Care in Dallas, Texas.',
      url: 'https://preview.thatsoftwarehouse.com/lakewood-family-dental-care',
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
    <main className="lfdc-preview" id="top">
      <header className={`lfdc-preview__nav ${navSolid ? 'lfdc-preview__nav--solid' : ''}`}>
        <div className="lfdc-preview__shell lfdc-preview__nav-inner">
          <a href="#top" className="lfdc-preview__brand" aria-label={previewData.businessName}>
            <span className="lfdc-preview__brand-mark">{previewData.brandMark}</span>
            <span className="lfdc-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>Lakewood, Dallas</small>
            </span>
          </a>

          <nav className="lfdc-preview__nav-links" aria-label="Preview sections">
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="lfdc-preview__nav-cta">
            {previewData.hero.primaryCta}
          </a>
        </div>
      </header>

      <section
        className="lfdc-preview__hero"
        style={{
          backgroundImage: `linear-gradient(118deg, ${previewData.hero.overlayStart} 0%, ${previewData.hero.overlayEnd} 64%), url(${previewData.hero.image})`,
        }}
      >
        <div className="lfdc-preview__shell lfdc-preview__hero-inner">
          <Motion.div
            className="lfdc-preview__hero-copy"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <Motion.p className="lfdc-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="lfdc-preview__hero-description" variants={staggerChild}>
              {previewData.hero.description}
            </Motion.p>
            <Motion.div className="lfdc-preview__hero-actions" variants={staggerChild}>
              <a href="#contact" className="lfdc-preview__btn lfdc-preview__btn--primary">
                {previewData.hero.primaryCta}
              </a>
              <a href={previewData.phoneHref} className="lfdc-preview__btn lfdc-preview__btn--ghost">
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>
            <Motion.div className="lfdc-preview__hero-meta" variants={staggerChild}>
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

      <section className="lfdc-preview__section lfdc-preview__section--stats">
        <div className="lfdc-preview__shell">
          <div className="lfdc-preview__stats-grid">
            {previewData.stats.map((stat) => (
              <div key={stat.label} className="lfdc-preview__stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="trust" className="lfdc-preview__section--light">
        <div className="lfdc-preview__section-head">
          <p className="lfdc-preview__kicker">{previewData.trustSection.kicker}</p>
          <h2>{previewData.trustSection.heading}</h2>
          <p>{previewData.trustSection.description}</p>
        </div>
        <Motion.div
          className="lfdc-preview__trust-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.trustSection.items.map((item) => {
            const Icon = item.icon === 'MapPin' ? MapPin : iconMap[item.icon]
            return (
              <Motion.article key={item.title} className="lfdc-preview__trust-card" variants={staggerChild}>
                <div className="lfdc-preview__icon-wrap">
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
        <div className="lfdc-preview__section-head lfdc-preview__section-head--center">
          <p className="lfdc-preview__kicker">Our Services</p>
          <h2>Comprehensive care for your whole smile.</h2>
        </div>
        <Motion.div
          className="lfdc-preview__services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles
            return (
              <Motion.article key={service.title} className="lfdc-preview__service-card" variants={staggerChild}>
                <div className="lfdc-preview__icon-wrap lfdc-preview__icon-wrap--service">
                  <Icon size={18} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="lfdc-preview__section--tinted">
        <div className="lfdc-preview__doctor-grid">
          <div className="lfdc-preview__doctor-copy">
            <p className="lfdc-preview__kicker">{previewData.doctors.kicker}</p>
            <h2>{previewData.doctors.heading}</h2>
            <p>{previewData.doctors.description}</p>
            <div className="lfdc-preview__doctor-list">
              {previewData.doctors.team.map((doctor) => (
                <article key={doctor.name} className="lfdc-preview__doctor-item">
                  <div className="lfdc-preview__doctor-icon">
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
          <div className="lfdc-preview__doctor-image-wrap">
            <img src={previewData.doctors.image} alt={previewData.doctors.imageAlt} className="lfdc-preview__doctor-image" />
          </div>
        </div>
      </Section>

      <Section id="reviews">
        <div className="lfdc-preview__section-head lfdc-preview__section-head--center">
          <p className="lfdc-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </div>
        <Motion.div
          className="lfdc-preview__reviews-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.quote} className="lfdc-preview__review-card" variants={staggerChild}>
              <div className="lfdc-preview__stars" aria-hidden="true">
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

      <Section className="lfdc-preview__section--cta">
        <div className="lfdc-preview__cta-band">
          <div>
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
          </div>
          <div className="lfdc-preview__cta-actions">
            <a href="#contact" className="lfdc-preview__btn lfdc-preview__btn--primary">
              {previewData.ctaBand.primaryCta}
            </a>
            <a href={previewData.phoneHref} className="lfdc-preview__btn lfdc-preview__btn--ghost">
              {previewData.ctaBand.secondaryCta}
            </a>
          </div>
        </div>
      </Section>

      <Section id="contact" className="lfdc-preview__section--contact">
        <div className="lfdc-preview__contact-grid">
          <div>
            <p className="lfdc-preview__kicker">Contact & Location</p>
            <h2>Visit our Lakewood office.</h2>
            <div className="lfdc-preview__contact-list">
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} />
                <span>{previewData.addressLines.join(', ')}</span>
              </a>
              <a href={previewData.phoneHref}>
                <Phone size={18} />
                <span>{previewData.phoneDisplay}</span>
              </a>
              <a href={previewData.emailHref}>
                <ArrowRight size={18} />
                <span>{previewData.email}</span>
              </a>
            </div>

            <div className="lfdc-preview__neighborhoods">
              <h3>Nearby neighborhoods we serve</h3>
              <div className="lfdc-preview__pill-row">
                {previewData.contact.neighborhoods.map((item) => (
                  <span key={item} className="lfdc-preview__pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="lfdc-preview__hours-card">
            <h3>Business Hours</h3>
            {previewData.contact.hours.map((hour) => (
              <div key={hour.day} className="lfdc-preview__hours-row">
                <span>{hour.day}</span>
                <strong>{hour.hours}</strong>
              </div>
            ))}
            <a href="#top" className="lfdc-preview__btn lfdc-preview__btn--primary lfdc-preview__btn--full">
              Request Your Visit
            </a>
          </aside>
        </div>
      </Section>

      <footer className="lfdc-preview__footer">
        <div className="lfdc-preview__shell lfdc-preview__footer-grid">
          <div>
            <strong>{previewData.businessName}</strong>
            <p>{previewData.tagline}</p>
            <div className="lfdc-preview__footer-social">
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
            <a href={previewData.emailHref}>{previewData.email}</a>
            <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.addressLines.join(', ')}
            </a>
          </div>
        </div>
        <div className="lfdc-preview__footer-bottom">
          <p>{`© ${new Date().getFullYear()} ${previewData.businessName}`}</p>
        </div>
      </footer>

      <div className="lfdc-preview__mobile-rail">
        <a href={previewData.phoneHref} className="lfdc-preview__rail-btn lfdc-preview__rail-btn--ghost">
          <Phone size={16} />
          Call
        </a>
        <a href="#contact" className="lfdc-preview__rail-btn lfdc-preview__rail-btn--primary">
          Book Visit
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default LakewoodFamilyDentalCarePreview
