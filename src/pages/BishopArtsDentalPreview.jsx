import React, { useEffect, useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Microscope,
  Phone,
  Scan,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './BishopArtsDentalPreview.css'

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
  Award,
  Sparkles,
  ShieldCheck,
  Scan,
  Smile,
  Star,
  Users,
  Microscope,
}

const previewData = {
  slug: 'bishop-arts-dental',
  seoDescription:
    'Bishop Arts Dental in Dallas offers comprehensive, preventive, cosmetic, and restorative dental care with a calm, relationship-focused approach.',
  businessName: 'Bishop Arts Dental',
  brandMark: 'BAD',
  tagline: "Smile! You're in GREAT hands.",
  phoneDisplay: '(214) 942-9205',
  phoneHref: 'tel:+12149429205',
  address: ['1218 N. Bishop Ave.', 'Dallas, TX 75208'],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=1218+N+Bishop+Ave+Dallas+TX+75208',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Patients Choose Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Meet the Team', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Our Office',
  },
  hero: {
    eyebrow: 'Comprehensive Dentistry in Bishop Arts, Dallas',
    headline: 'Calm, thorough dental care built around long-term patient trust.',
    description:
      'From regular cleanings and exams to implants, veneers, and urgent treatment, Bishop Arts Dental helps you protect your oral health with clear guidance at every step.',
    primaryCta: 'Request an Appointment',
    secondaryCta: 'Call (214) 942-9205',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(31, 106, 151, 0.86)',
    overlayEnd: 'rgba(15, 51, 76, 0.58)',
    metaLinks: [
      { icon: 'MapPin', text: '1218 N. Bishop Ave., Dallas, TX 75208', href: '#contact' },
      { icon: 'Award', text: 'Serving Dallas patients for decades', href: '#trust' },
    ],
  },
  stats: [
    { value: 'Mon-Wed', label: '7:00 AM - 6:00 PM' },
    { value: '35+ Years', label: 'Dr. Robinson in Dallas' },
    { value: 'Comprehensive', label: 'Preventive to Surgical Care' },
    { value: 'Most PPO', label: 'Insurance Assistance' },
  ],
  trust: {
    kicker: 'Why Patients Choose Us',
    heading: 'Experienced care with a calm, educational approach.',
    body:
      'The practice is devoted to comprehensive and preventive care, helping every patient understand treatment options and make informed decisions about long-term oral health.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist consulting with patient in a bright treatment room',
    cards: [
      {
        title: 'Comprehensive + Preventive',
        description:
          'From routine cleanings to advanced restorative options, care is coordinated in one office with long-term prevention in mind.',
        icon: 'Sparkles',
      },
      {
        title: 'Clear Education First',
        description:
          'Dr. Robinson emphasizes patient education so each person understands their oral condition and care plan.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Dallas Experience',
        description:
          'Dr. Robinson has practiced in Dallas for over 35 years with ongoing continuing education in modern techniques.',
        icon: 'Microscope',
      },
      {
        title: 'Insurance + Financing Support',
        description:
          'The team helps file PPO claims and offers payment guidance, including CareCredit for extended plans.',
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'Comprehensive Dental Services',
    heading: 'General, cosmetic, restorative, and emergency care in one Bishop Arts office.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental team reviewing digital imaging together',
    items: [
      {
        title: 'Routine Prevention',
        description:
          'Regular cleanings, exams, and oral cancer screenings help detect concerns early and keep your smile healthy.',
        icon: 'Sparkles',
      },
      {
        title: 'Restorative Options',
        description:
          'Crowns, bridges, fillings, dentures, and root canal treatment support comfort, function, and confidence.',
        icon: 'Scan',
      },
      {
        title: 'Cosmetic Dentistry',
        description:
          'Porcelain veneers and teeth whitening help brighten and reshape smiles with conservative planning.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Emergency Help',
        description:
          'For chipped, moved, or knocked-out teeth, call the office for rapid guidance and treatment support.',
        icon: 'Smile',
      },
    ],
  },
  serviceTabs: [
    {
      label: 'Preventive',
      cards: [
        {
          title: 'Dental Checkups & Cleanings',
          description:
            'Regular visits help catch tooth decay, gum concerns, and other oral health issues in a timely way.',
          icon: 'Sparkles',
        },
        {
          title: 'Oral Cancer Screenings',
          description:
            'Screenings are available as part of comprehensive care to detect disease at a more curable stage.',
          icon: 'Star',
        },
        {
          title: 'Periodontal Therapy',
          description:
            'Gum-focused treatment supports long-term tooth stability and helps prevent tooth loss.',
          icon: 'Smile',
        },
        {
          title: 'Patient Education',
          description:
            'The team explains findings and options clearly so you can make informed choices for your care.',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'Cosmetic & Restorative',
      cards: [
        {
          title: 'Cosmetic Dentistry',
          description:
            'Cosmetic planning focuses on natural-looking improvements that fit your goals and lifestyle.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Veneers & Teeth Whitening',
          description:
            'Veneers and professional whitening are available to brighten discolored smiles and refine tooth shape.',
          icon: 'Users',
        },
        {
          title: 'Crowns, Bridges & Dentures',
          description:
            'Restorative options rebuild chewing function and support replacement of damaged or missing teeth.',
          icon: 'Sparkles',
        },
        {
          title: 'Dental Implants',
          description:
            'Implant dentistry offers long-lasting replacement for missing teeth with stable function.',
          icon: 'Scan',
        },
      ],
    },
    {
      label: 'Specialty',
      cards: [
        {
          title: 'Root Canal Treatment',
          description:
            'Root canal therapy can relieve pain and preserve natural teeth affected by deeper infection.',
          icon: 'ShieldCheck',
        },
        {
          title: 'TMJ/TMD Care',
          description:
            'Treatment options are available for chronic jaw discomfort and bite-related strain.',
          icon: 'Smile',
        },
        {
          title: 'Orthodontic Treatment',
          description:
            'Orthodontic options help move teeth into healthier alignment for function and aesthetics.',
          icon: 'Award',
        },
        {
          title: 'Tooth Extractions',
          description:
            'When a tooth is severely damaged or decayed, extractions are available with clear follow-up guidance.',
          icon: 'Users',
        },
      ],
    },
    {
      label: 'Emergency',
      cards: [
        {
          title: 'Emergency Dentistry',
          description:
            'If you have severe dental pain or injury, call us for prompt guidance and next-step care.',
          icon: 'Microscope',
        },
        {
          title: 'Injury Evaluation',
          description:
            'We treat chipped, moved, and knocked-out teeth and help you stabilize urgent issues quickly.',
          icon: 'Scan',
        },
        {
          title: 'Hospital Guidance',
          description:
            'For life-threatening injuries, we direct patients to emergency services first, then provide dental follow-up.',
          icon: 'Sparkles',
        },
        {
          title: 'Appointment Support',
          description:
            'The office facilitates emergency calls and helps schedule appointments for urgent concerns.',
          icon: 'Star',
        },
      ],
    },
  ],
  servicesSection: {
    kicker: 'Our Services',
    heading: 'Complete services for long-term oral health and confident smiles.',
    tabsAriaLabel: 'Service categories',
  },
  doctors: {
    kicker: 'Meet the Team',
    heading: 'A Dallas team known for continuity, kindness, and clear communication.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Care team',
    items: [
      {
        name: 'Michael Robinson, D.D.S.',
        title: 'Lead Dentist',
        bio: 'Dr. Robinson earned his DDS in 1984 and has practiced in Dallas for more than 35 years, with ongoing continuing education and a patient-first, calming style.',
        image:
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dentist smiling in a modern dental clinic',
      },
      {
        name: 'Alicia B. + Care Team',
        title: 'Front Office, Hygiene, and Clinical Support',
        bio: 'Alicia has supported the practice since 1989, and the team includes Aida Q., R.D.H., and Prezli B., R.D.A., all focused on warm, attentive patient care.',
        image:
          'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dental team preparing treatment room for a patient visit',
      },
    ],
  },
  testimonials: {
    kicker: 'Practice Promise',
    heading: 'The values Bishop Arts Dental repeats across the site.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote: "Smile! You're in GREAT hands.",
        author: 'Bishop Arts Dental',
      },
      {
        quote:
          'Our practice is devoted to comprehensive and preventive patient care.',
        author: 'Bishop Arts Dental',
      },
      {
        quote:
          'Our patients are our most important asset, and we strive to build long-lasting, trusting relationships.',
        author: 'Bishop Arts Dental',
      },
    ],
  },
  insurance: {
    kicker: 'Insurance & Payment',
    heading: 'Clear guidance for insurance and treatment planning.',
    body:
      'The office assists with PPO claim filing and helps patients understand benefits. For extended payment plans, CareCredit support is available.',
    tags: [
      'Delta Dental, MetLife, Aetna, Cigna, and more',
      'PPO Claim Filing Assistance',
      'Benefit Explanation Support',
      'CareCredit Available',
    ],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to book your next visit?',
    description:
      'Call Bishop Arts Dental for preventive visits, cosmetic consultations, restorative care, or emergency guidance.',
    hours: [
      { day: 'Monday', value: '7:00 am - 6:00 pm' },
      { day: 'Tuesday', value: '7:00 am - 6:00 pm' },
      { day: 'Wednesday', value: '7:00 am - 6:00 pm' },
      { day: 'Thursday', value: 'Closed' },
      { day: 'Friday', value: 'Closed' },
      { day: 'Saturday', value: 'Closed' },
      { day: 'Sunday', value: 'Closed' },
    ],
    cardTitle: 'Book By Phone',
    cardBody:
      'Our team can help with appointments, emergency needs, insurance questions, and treatment planning.',
    hoursLabel: 'Office Hours',
    primaryCta: 'Call Now',
    secondaryCta: 'Get Directions',
  },
  footer: {
    popularServicesHeading: 'Popular Services',
    quickLinksHeading: 'Quick Links',
    serviceLinks: ['General Dentistry', 'Dental Implants', 'Teeth Whitening', 'Emergency Dental Care'],
    quickLinks: ['Why Patients Choose Us', 'Our Services', 'Meet the Team', 'Contact Us'],
    copyright: '© 2026 Bishop Arts Dental Preview',
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
      className={`bad-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="bad-preview__shell">{children}</div>
    </Motion.section>
  )
}

function BishopArtsDentalPreview() {
  const [navSolid, setNavSolid] = useState(false)
  const [activeTab, setActiveTab] = useState(previewData.serviceTabs[0].label)
  const [doctorIndex, setDoctorIndex] = useState(0)
  const [quoteIndex, setQuoteIndex] = useState(0)

  const activeServices = useMemo(
    () => previewData.serviceTabs.find((tab) => tab.label === activeTab)?.cards || [],
    [activeTab],
  )

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 34)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % previewData.testimonials.items.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  useSEO({
    title: `${previewData.businessName} | Dental Preview`,
    description: previewData.seoDescription,
    canonicalUrl: `https://preview.thatsoftwarehouse.com/${previewData.slug}`,
    openGraph: {
      title: `${previewData.businessName} Preview`,
      description: previewData.hero.description,
      url: `https://preview.thatsoftwarehouse.com/${previewData.slug}`,
    },
  })

  const activeDoctor = previewData.doctors.items[doctorIndex]
  const activeQuote = previewData.testimonials.items[quoteIndex]

  return (
    <div className="bad-preview">
      <header className={`bad-preview__nav ${navSolid ? 'bad-preview__nav--solid' : ''}`}>
        <div className="bad-preview__shell bad-preview__nav-inner">
          <a className="bad-preview__brand" href="#hero">
            <span className="bad-preview__brand-mark">{previewData.brandMark}</span>
            <span className="bad-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="bad-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="bad-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="bad-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="bad-preview__shell bad-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="bad-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="bad-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="bad-preview__hero-actions" variants={staggerChild}>
            <a className="bad-preview__btn bad-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="bad-preview__btn bad-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="bad-preview__hero-meta" variants={staggerChild}>
            {previewData.hero.metaLinks.map((item) => {
              const Icon = item.icon === 'MapPin' ? MapPin : Award
              return (
                <a key={item.text} href={item.href}>
                  <Icon size={16} aria-hidden="true" />
                  {item.text}
                </a>
              )
            })}
          </Motion.div>
        </Motion.div>
      </section>

      <Section className="bad-preview__section--stats" id="stats">
        <Motion.div className="bad-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="bad-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="bad-preview__section--light">
        <div className="bad-preview__trust-grid">
          <Motion.div className="bad-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="bad-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="bad-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="bad-preview__trust-card">
                    <span className="bad-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="bad-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="bad-preview__section--dark">
        <span className="bad-preview__kicker bad-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="bad-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="bad-preview__dark-grid">
          <div className="bad-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="bad-preview__dark-card">
                  <span className="bad-preview__icon-wrap bad-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="bad-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="bad-preview__section--light">
        <div className="bad-preview__section-head bad-preview__section-head--center">
          <span className="bad-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="bad-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`bad-preview__tab ${activeTab === tab.label ? 'bad-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="bad-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="bad-preview__service-card" variants={staggerChild}>
                <span className="bad-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="bad-preview__section--light">
        <div className="bad-preview__section-head bad-preview__section-head--center">
          <span className="bad-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="bad-preview__doctor-carousel">
          <button
            type="button"
            className="bad-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="bad-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="bad-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="bad-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="bad-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`bad-preview__dot ${doctorIndex === index ? 'bad-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="bad-preview__section--tinted">
        <div className="bad-preview__section-head bad-preview__section-head--center">
          <span className="bad-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="bad-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bad-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="bad-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`bad-preview__dot ${quoteIndex === index ? 'bad-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="bad-preview__section--light">
        <div className="bad-preview__section-head bad-preview__section-head--center">
          <span className="bad-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="bad-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="bad-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="bad-preview__section--light bad-preview__section--contact">
        <div className="bad-preview__contact-grid">
          <div>
            <span className="bad-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="bad-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="bad-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="bad-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="bad-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="bad-preview__btn bad-preview__btn--primary bad-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="bad-preview__btn bad-preview__btn--ghost bad-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="bad-preview__footer">
        <div className="bad-preview__shell bad-preview__footer-inner">
          <div>
            <strong>{previewData.businessName}</strong>
            <p>{previewData.tagline}</p>
            <p>{previewData.address.join(', ')}</p>
            <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
          </div>

          <div>
            <h4>{previewData.footer.popularServicesHeading}</h4>
            <ul>
              {previewData.footer.serviceLinks.map((item) => (
                <li key={item}><a href="#services">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{previewData.footer.quickLinksHeading}</h4>
            <ul>
              {previewData.footer.quickLinks.map((item) => (
                <li key={item}><a href="#hero">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bad-preview__shell bad-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="bad-preview__mobile-rail">
        <a className="bad-preview__rail-btn bad-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="bad-preview__rail-btn bad-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default BishopArtsDentalPreview
