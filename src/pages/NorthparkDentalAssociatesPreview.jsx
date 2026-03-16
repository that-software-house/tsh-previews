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
import './NorthparkDentalAssociatesPreview.css'

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
  slug: 'northpark-dental-associates',
  businessName: 'Northpark Dental Associates',
  brandMark: 'NPA',
  tagline: 'Top Rated General & Cosmetic Dentistry in Dallas, TX',
  phoneDisplay: '(214) 696-8096',
  phoneHref: 'tel:+12146968096',
  secondaryPhoneDisplay: 'After Hours: (469) 437-8371',
  secondaryPhoneHref: 'tel:+14694378371',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=6500+Greenville+Ave+Suite+303+Dallas+TX+75206',
  addressLines: ['6500 Greenville Ave. Suite 303', 'Dallas, TX 75206'],
  socialLinks: {
    facebook: 'https://www.facebook.com/NorthparkDentalAssociates/',
    instagram: 'https://www.instagram.com/northparkdentalassociates',
    yelp: 'https://www.yelp.com/biz/thomas-jay-gibbons-dallas',
  },
  hero: {
    eyebrow: 'Welcome to Northpark Dental Associates',
    headline: 'Top-rated general and cosmetic dentistry in Dallas.',
    description:
      'Our friendly team creates a casual, comfortable atmosphere where every patient feels at home, from preventive visits to advanced restorative and cosmetic care.',
    primaryCta: 'Schedule Your Appointment',
    secondaryCta: 'Call (214) 696-8096',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
    meta: [
      { icon: 'MapPin', text: '6500 Greenville Ave. Suite 303, Dallas, TX 75206', href: '#contact' },
      { icon: 'CalendarDays', text: 'Mon 9-5 • Tue/Wed 8-5 • Thu 7-3', href: '#contact' },
    ],
    overlayStart: 'rgba(234, 243, 251, 0.96)',
    overlayEnd: 'rgba(234, 243, 251, 0.44)',
  },
  stats: [
    { value: '$75', label: 'New Patient Pass' },
    { value: '214-696-8096', label: 'Direct Office Line' },
    { value: 'Since 1986', label: 'Experienced Doctor-Led Care' },
    { value: 'Mon-Thu', label: 'Convenient Weekly Hours' },
  ],
  trustSection: {
    kicker: 'Why Families Choose Us',
    heading: 'Friendly care with clear guidance at every visit.',
    description:
      'Northpark Dental Associates focuses on personal relationships, preventive education, and high-quality treatment options tailored to each smile.',
    items: [
      {
        title: 'Comfort-First Experience',
        description:
          'Our office is built around a welcoming atmosphere so children, teens, and adults can feel relaxed and supported.',
        icon: 'MapPin',
      },
      {
        title: 'Comprehensive Services',
        description:
          'From guided biofilm therapy and aligners to implants, emergency care, and sleep apnea appliances, your care stays connected.',
        icon: 'Stethoscope',
      },
      {
        title: 'Transparent Insurance Support',
        description:
          'Our team helps out-of-network patients understand benefits, file claims, and make informed choices with confidence.',
        icon: 'Languages',
      },
    ],
  },
  services: [
    {
      title: 'Cosmetic Dentistry',
      description: 'Whitening, veneers, and smile enhancements designed to look natural and feel like you.',
      icon: 'Sparkles',
    },
    {
      title: 'Guided Biofilm Therapy',
      description: 'Efficient, gentle cleaning focused on removing biofilm to help prevent cavities and gum disease.',
      icon: 'ShieldCheck',
    },
    {
      title: 'ClearCorrect Invisible Aligners',
      description: 'Straighten your smile with a discreet aligner option that fits your daily routine.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Dental Implants',
      description: 'Restore comfort and confidence with stable, long-term tooth replacement solutions.',
      icon: 'Users',
    },
    {
      title: 'Emergency Care',
      description: 'Fast support for urgent pain, trauma, or unexpected dental issues that cannot wait.',
      icon: 'Clock3',
    },
    {
      title: 'Sleep Apnea Appliances',
      description: 'Custom oral appliances can reduce snoring and support better nightly breathing and rest.',
      icon: 'Star',
    },
  ],
  doctors: {
    kicker: 'Meet Dr. Gibbons & Team',
    heading: 'Experienced, compassionate care from a team that knows your name.',
    description:
      'Dr. Thomas J. Gibbons leads a caring team dedicated to prevention, restorative excellence, and long-term patient relationships built on trust.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist in white coat smiling in clinic',
    team: [
      {
        name: 'Dr. Thomas J. Gibbons',
        title: 'DDS',
        bio: 'Baylor College of Dentistry graduate focused on reconstructive dentistry, implant care, and helping patients make informed treatment decisions.',
      },
      {
        name: 'Shellie',
        title: 'Practice Administrator',
        bio: 'With 25+ years of dental-office experience, Shellie guides treatment planning, finances, and patient support from start to finish.',
      },
      {
        name: 'Beatriz',
        title: 'Registered Dental Hygienist',
        bio: 'Beatriz has served patients since 2008 with preventive education, gentle hygiene care, and bilingual support in Spanish and English.',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What patients are saying',
    items: [
      {
        quote:
          '“Dr Gibbons found the reason for a problem I have had for over a year that a previous dentist never discovered. I am very grateful to him.”',
        author: 'Paulette W.',
      },
      {
        quote:
          '“Dr. Gibbons and his team are a very friendly and professional group. I was referred by a friend and I’m so glad that I found them.”',
        author: 'Masako W.',
      },
      {
        quote:
          '“Tom, Bea, and the whole staff are always kind and compassionate while providing professional and excellent dental care!”',
        author: 'Judy D.',
      },
    ],
  },
  ctaBand: {
    heading: 'Ready for your next visit?',
    body: 'Call today to schedule personalized care with a Dallas team that treats you like family.',
    primaryCta: 'Schedule Your Appointment',
    secondaryCta: 'Call the Office',
  },
  contact: {
    neighborhoods: ['Children', 'Teens', 'Adults', 'Families', 'New Patients'],
    hours: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '7:00 AM - 3:00 PM' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  },
  footer: {
    serviceLinks: [
      'Cosmetic Dentistry',
      'Guided Biofilm Therapy',
      'ClearCorrect Aligners',
      'Dental Implants',
      'Emergency Care',
    ],
    patientLinks: ['New Patient Pass', 'Finance Options', 'Patient Forms', 'Contact Us'],
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`npda-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="npda-preview__shell">{children}</div>
    </Motion.section>
  )
}

function NorthparkDentalAssociatesPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: 'Northpark Dental Associates Preview | That Software House',
    description:
      'A modern preview redesign for Northpark Dental Associates in Dallas, Texas, focused on family-friendly and comprehensive care.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/northpark-dental-associates',
    openGraph: {
      title: 'Northpark Dental Associates Preview',
      description:
        'Modern single-page preview concept for Northpark Dental Associates in Dallas, Texas.',
      url: 'https://preview.thatsoftwarehouse.com/northpark-dental-associates',
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
    <main className="npda-preview" id="top">
      <header className={`npda-preview__nav ${navSolid ? 'npda-preview__nav--solid' : ''}`}>
        <div className="npda-preview__shell npda-preview__nav-inner">
          <a href="#top" className="npda-preview__brand" aria-label={previewData.businessName}>
            <span className="npda-preview__brand-mark">{previewData.brandMark}</span>
            <span className="npda-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>Dallas, TX</small>
            </span>
          </a>

          <nav className="npda-preview__nav-links" aria-label="Preview sections">
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="npda-preview__nav-cta">
            {previewData.hero.primaryCta}
          </a>
        </div>
      </header>

      <section
        className="npda-preview__hero"
        style={{
          backgroundImage: `linear-gradient(118deg, ${previewData.hero.overlayStart} 0%, ${previewData.hero.overlayEnd} 64%), url(${previewData.hero.image})`,
        }}
      >
        <div className="npda-preview__shell npda-preview__hero-inner">
          <Motion.div
            className="npda-preview__hero-copy"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <Motion.p className="npda-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="npda-preview__hero-description" variants={staggerChild}>
              {previewData.hero.description}
            </Motion.p>
            <Motion.div className="npda-preview__hero-actions" variants={staggerChild}>
              <a href="#contact" className="npda-preview__btn npda-preview__btn--primary">
                {previewData.hero.primaryCta}
              </a>
              <a href={previewData.phoneHref} className="npda-preview__btn npda-preview__btn--ghost">
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>
            <Motion.div className="npda-preview__hero-meta" variants={staggerChild}>
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

      <section className="npda-preview__section npda-preview__section--stats">
        <div className="npda-preview__shell">
          <div className="npda-preview__stats-grid">
            {previewData.stats.map((stat) => (
              <div key={stat.label} className="npda-preview__stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="trust" className="npda-preview__section--light">
        <div className="npda-preview__section-head">
          <p className="npda-preview__kicker">{previewData.trustSection.kicker}</p>
          <h2>{previewData.trustSection.heading}</h2>
          <p>{previewData.trustSection.description}</p>
        </div>
        <Motion.div
          className="npda-preview__trust-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.trustSection.items.map((item) => {
            const Icon = item.icon === 'MapPin' ? MapPin : iconMap[item.icon]
            return (
              <Motion.article key={item.title} className="npda-preview__trust-card" variants={staggerChild}>
                <div className="npda-preview__icon-wrap">
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
        <div className="npda-preview__section-head npda-preview__section-head--center">
          <p className="npda-preview__kicker">Our Services</p>
          <h2>Comprehensive care for your whole smile.</h2>
        </div>
        <Motion.div
          className="npda-preview__services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles
            return (
              <Motion.article key={service.title} className="npda-preview__service-card" variants={staggerChild}>
                <div className="npda-preview__icon-wrap npda-preview__icon-wrap--service">
                  <Icon size={18} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="npda-preview__section--tinted">
        <div className="npda-preview__doctor-grid">
          <div className="npda-preview__doctor-copy">
            <p className="npda-preview__kicker">{previewData.doctors.kicker}</p>
            <h2>{previewData.doctors.heading}</h2>
            <p>{previewData.doctors.description}</p>
            <div className="npda-preview__doctor-list">
              {previewData.doctors.team.map((doctor) => (
                <article key={doctor.name} className="npda-preview__doctor-item">
                  <div className="npda-preview__doctor-icon">
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
          <div className="npda-preview__doctor-image-wrap">
            <img src={previewData.doctors.image} alt={previewData.doctors.imageAlt} className="npda-preview__doctor-image" />
          </div>
        </div>
      </Section>

      <Section id="reviews">
        <div className="npda-preview__section-head npda-preview__section-head--center">
          <p className="npda-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </div>
        <Motion.div
          className="npda-preview__reviews-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.quote} className="npda-preview__review-card" variants={staggerChild}>
              <div className="npda-preview__stars" aria-hidden="true">
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

      <Section className="npda-preview__section--cta">
        <div className="npda-preview__cta-band">
          <div>
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
          </div>
          <div className="npda-preview__cta-actions">
            <a href="#contact" className="npda-preview__btn npda-preview__btn--primary">
              {previewData.ctaBand.primaryCta}
            </a>
            <a href={previewData.phoneHref} className="npda-preview__btn npda-preview__btn--ghost">
              {previewData.ctaBand.secondaryCta}
            </a>
          </div>
        </div>
      </Section>

      <Section id="contact" className="npda-preview__section--contact">
        <div className="npda-preview__contact-grid">
          <div>
            <p className="npda-preview__kicker">Contact & Location</p>
            <h2>Visit our Dallas office.</h2>
            <div className="npda-preview__contact-list">
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} />
                <span>{previewData.addressLines.join(', ')}</span>
              </a>
              <a href={previewData.phoneHref}>
                <Phone size={18} />
                <span>{previewData.phoneDisplay}</span>
              </a>
              <a href={previewData.secondaryPhoneHref}>
                <Phone size={18} />
                <span>{previewData.secondaryPhoneDisplay}</span>
              </a>
            </div>

            <div className="npda-preview__neighborhoods">
              <h3>Care for every stage of life</h3>
              <div className="npda-preview__pill-row">
                {previewData.contact.neighborhoods.map((item) => (
                  <span key={item} className="npda-preview__pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="npda-preview__hours-card">
            <h3>Business Hours</h3>
            {previewData.contact.hours.map((hour) => (
              <div key={hour.day} className="npda-preview__hours-row">
                <span>{hour.day}</span>
                <strong>{hour.hours}</strong>
              </div>
            ))}
            <a href="#top" className="npda-preview__btn npda-preview__btn--primary npda-preview__btn--full">
              Request Your Visit
            </a>
          </aside>
        </div>
      </Section>

      <footer className="npda-preview__footer">
        <div className="npda-preview__shell npda-preview__footer-grid">
          <div>
            <strong>{previewData.businessName}</strong>
            <p>{previewData.tagline}</p>
            <div className="npda-preview__footer-social">
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
            <a href={previewData.secondaryPhoneHref}>{previewData.secondaryPhoneDisplay}</a>
            <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.addressLines.join(', ')}
            </a>
          </div>
        </div>
        <div className="npda-preview__footer-bottom">
          <p>{`© ${new Date().getFullYear()} ${previewData.businessName}`}</p>
        </div>
      </footer>

      <div className="npda-preview__mobile-rail">
        <a href={previewData.phoneHref} className="npda-preview__rail-btn npda-preview__rail-btn--ghost">
          <Phone size={16} />
          Call
        </a>
        <a href="#contact" className="npda-preview__rail-btn npda-preview__rail-btn--primary">
          Book Visit
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default NorthparkDentalAssociatesPreview
