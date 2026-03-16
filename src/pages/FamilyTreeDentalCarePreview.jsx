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
import './FamilyTreeDentalCarePreview.css'

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
  slug: 'family-tree-dental-care',
  seoDescription:
    'Family Tree Dental Care in Dallas offers family dentistry, cosmetic dentistry, dental implants, Invisalign, and Bioclear with personalized care led by Dr. Marry Hong, DDS.',
  businessName: 'Family Tree Dental Care',
  brandMark: 'FTDC',
  tagline: 'Personalized dental care for every stage of your smile.',
  phoneDisplay: '(945) 277-1701',
  phoneHref: 'tel:+19452771701',
  address: ['13901 Midway Road, Suite 106A', 'Dallas, TX 75244'],
  mapUrl: 'https://maps.google.com/?q=13901+Midway+Road+Dallas+TX+75244',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Families Choose Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Meet Dr. Hong', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Now',
  },
  hero: {
    eyebrow: 'Family, Cosmetic, Implant & Invisalign Dentistry in Dallas',
    headline: 'Modern, gentle dentistry rooted in Dallas family care.',
    description:
      'With over 15 years of experience and a comfort-first approach, Family Tree Dental Care helps kids, teens, and adults maintain healthy smiles with clear communication and thoughtful treatment plans.',
    primaryCta: 'Book a Visit',
    secondaryCta: 'Call (945) 277-1701',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(7, 63, 72, 0.86)',
    overlayEnd: 'rgba(3, 39, 48, 0.58)',
    metaLinks: [
      { icon: 'MapPin', text: '13901 Midway Road, Suite 106A, Dallas, TX 75244', href: '#contact' },
      { icon: 'Award', text: 'Membership plans and free consultations available', href: '#insurance' },
    ],
  },
  stats: [
    { value: '15+ Years', label: 'Serving Dallas Families' },
    { value: 'Since 2010', label: 'Community-Rooted Care' },
    { value: 'Mon-Fri', label: 'Consistent Weekly Hours' },
    { value: '5-Star', label: 'Comfort-First Experience' },
  ],
  trust: {
    kicker: 'Why Families Choose Us',
    heading: 'Thoughtful care, clear guidance, and treatment built around real families.',
    body:
      'Family Tree Dental Care combines modern treatment with a calm, relationship-driven experience. Every visit is designed to reduce stress, explain options clearly, and support long-term oral health.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist speaking with a patient in a modern treatment room',
    cards: [
      {
        title: 'Gentle, Detail-Oriented Dentistry',
        description:
          'Dr. Hong emphasizes comfort, precision, and pain-conscious care so every patient feels confident in treatment.',
        icon: 'Sparkles',
      },
      {
        title: 'One Practice For The Whole Family',
        description:
          'From pediatric visits to adult cosmetic upgrades, your family can stay with one trusted dental home.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Community-Connected Standards',
        description:
          'As active members of the Dallas dental community, the team maintains high clinical standards and continuing education.',
        icon: 'Microscope',
      },
      {
        title: 'Membership & Budget-Friendly Options',
        description:
          'Membership plans and free consultations make it easier to start care without unnecessary financial pressure.',
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'Comprehensive Care',
    heading: 'A complete Dallas dental practice for prevention, confidence, and restoration.',
    image:
      'https://images.unsplash.com/photo-1609207825181-52d3214556ea?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental clinician reviewing treatment imaging with patient',
    items: [
      {
        title: 'Family Dentistry',
        description:
          'Routine checkups, cleanings, and preventive treatment plans keep every age group on track for better oral health.',
        icon: 'Sparkles',
      },
      {
        title: 'Cosmetic Dentistry',
        description:
          'Whitening and smile enhancement options help patients improve confidence with natural-looking results.',
        icon: 'Scan',
      },
      {
        title: 'Dental Implants',
        description:
          'Implant planning and restorative options support long-term function, stability, and smile rehabilitation.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Invisalign & Bioclear',
        description:
          'Modern alignment and minimally invasive restorative techniques offer aesthetic improvements with practical timelines.',
        icon: 'Smile',
      },
    ],
  },
  serviceTabs: [
    {
      label: 'Family & Preventive',
      cards: [
        {
          title: 'Dental Checkups & Cleanings',
          description:
            'Routine preventive visits help detect issues early and keep care simple, predictable, and effective.',
          icon: 'Sparkles',
        },
        {
          title: 'Pediatric Dentistry',
          description:
            'Kid-focused appointments create positive early experiences and support healthy growth for developing smiles.',
          icon: 'Star',
        },
        {
          title: 'Oral Health Coaching',
          description:
            'The team explains treatment decisions clearly so patients understand what matters now and what can wait.',
          icon: 'Smile',
        },
        {
          title: 'Long-Term Preventive Planning',
          description:
            'Family-centered planning helps households stay aligned on timing, cleanings, and restorative priorities.',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'Cosmetic',
      cards: [
        {
          title: 'Smile Design Consultations',
          description:
            'Cosmetic consultations map practical options to improve aesthetics while respecting budget and lifestyle.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Professional Whitening',
          description:
            'Whitening options are tailored to brighten smiles while maintaining comfort and natural shade balance.',
          icon: 'Users',
        },
        {
          title: 'Bioclear Restorations',
          description:
            'Bioclear techniques improve shape and contour with minimally invasive treatment planning.',
          icon: 'Sparkles',
        },
        {
          title: 'Cosmetic Rehabilitation',
          description:
            'Comprehensive smile rehabilitation combines function and aesthetics for durable, confidence-building outcomes.',
          icon: 'Scan',
        },
      ],
    },
    {
      label: 'Restorative & Implant',
      cards: [
        {
          title: 'Tooth-Colored Fillings',
          description:
            'Natural-looking restorations repair decay while preserving the look and feel of your smile.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Crowns & Bridges',
          description:
            'Custom restorations reinforce damaged teeth and replace missing structure with long-term stability.',
          icon: 'Smile',
        },
        {
          title: 'Dental Implants',
          description:
            'Implant solutions help restore chewing strength, smile confidence, and durable daily function.',
          icon: 'Award',
        },
        {
          title: 'Root Canal Therapy',
          description:
            'Root canal treatment helps relieve discomfort and save natural teeth when infection reaches the pulp.',
          icon: 'Users',
        },
      ],
    },
    {
      label: 'Invisalign & Specialty',
      cards: [
        {
          title: 'Invisalign',
          description:
            'Clear aligner treatment offers a discreet path toward straighter smiles with guided progress checks.',
          icon: 'Microscope',
        },
        {
          title: 'Smile Rehab Planning',
          description:
            'Step-by-step treatment sequencing helps patients rebuild oral health and confidence over manageable phases.',
          icon: 'Scan',
        },
        {
          title: 'Pain-Conscious Care',
          description:
            'Comfort protocols are built into every visit so patients can move through care with less anxiety.',
          icon: 'Sparkles',
        },
        {
          title: 'Free Consultations',
          description:
            'Complimentary consultations make it easier to discuss goals and options before committing to treatment.',
          icon: 'Star',
        },
      ],
    },
  ],
  servicesSection: {
    kicker: 'Our Services',
    heading: 'Full-scope dentistry designed for comfort, confidence, and long-term oral health.',
    tabsAriaLabel: 'Service categories',
  },
  doctors: {
    kicker: 'Meet The Doctor',
    heading: 'Led by Dr. Marry Hong, DDS with a comfort-first and family-focused approach.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Provider profile',
    items: [
      {
        name: 'Dr. Marry Hong, DDS',
        title: 'Founder and Family Dentist',
        bio: 'Dr. Hong leads Family Tree Dental Care with a focus on gentle treatment, clear education, and cosmetic and restorative care tailored to each patient.',
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Female dentist in clinical setting smiling at camera',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What patients consistently highlight about their visits.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote:
          'The team is warm, clear, and never rushed. Visits feel organized and comfortable from check-in through follow-up.',
        author: 'Common patient feedback theme',
      },
      {
        quote:
          'Treatment options are explained in plain language, which makes it easier to make confident decisions about next steps.',
        author: 'Family dentistry patient theme',
      },
      {
        quote:
          'Patients appreciate a gentle approach and the way comfort is prioritized during both routine and cosmetic visits.',
        author: 'Comfort-focused care theme',
      },
    ],
  },
  insurance: {
    kicker: 'Insurance & Payment',
    heading: 'Care options designed to keep treatment accessible.',
    body:
      'Family Tree Dental Care offers free consultations and membership plans to make high-quality dentistry more accessible for Dallas families.',
    tags: [
      'Membership Plans Available',
      'Free Consultations',
      'Budget-Friendly Options',
      'Flexible Treatment Planning',
    ],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to book your next visit?',
    description:
      'Call Family Tree Dental Care to schedule family dentistry, cosmetic care, Invisalign consultations, and restorative treatment planning.',
    hours: [
      { day: 'Monday', value: '9:00 am - 4:00 pm' },
      { day: 'Tuesday', value: '9:00 am - 4:00 pm' },
      { day: 'Wednesday', value: '9:00 am - 4:00 pm' },
      { day: 'Thursday', value: '7:00 am - 2:00 pm' },
      { day: 'Friday', value: '7:00 am - 2:00 pm' },
      { day: 'Saturday', value: 'Closed' },
      { day: 'Sunday', value: 'Closed' },
    ],
    cardTitle: 'Book By Phone',
    cardBody:
      'The front desk can help with appointments, consultation requests, and membership plan questions.',
    hoursLabel: 'Office Hours',
    primaryCta: 'Call Now',
    secondaryCta: 'Get Directions',
  },
  footer: {
    popularServicesHeading: 'Popular Services',
    quickLinksHeading: 'Quick Links',
    serviceLinks: ['Family Dentistry', 'Cosmetic Dentistry', 'Dental Implants', 'Invisalign'],
    quickLinks: ['Why Families Choose Us', 'Our Services', 'Meet Dr. Hong', 'Contact Us'],
    copyright: '© 2026 Family Tree Dental Care Preview',
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
      className={`ftdc-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="ftdc-preview__shell">{children}</div>
    </Motion.section>
  )
}

function FamilyTreeDentalCarePreview() {
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
    <div className="ftdc-preview">
      <header className={`ftdc-preview__nav ${navSolid ? 'ftdc-preview__nav--solid' : ''}`}>
        <div className="ftdc-preview__shell ftdc-preview__nav-inner">
          <a className="ftdc-preview__brand" href="#hero">
            <span className="ftdc-preview__brand-mark">{previewData.brandMark}</span>
            <span className="ftdc-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="ftdc-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="ftdc-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="ftdc-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="ftdc-preview__shell ftdc-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="ftdc-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="ftdc-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="ftdc-preview__hero-actions" variants={staggerChild}>
            <a className="ftdc-preview__btn ftdc-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="ftdc-preview__btn ftdc-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="ftdc-preview__hero-meta" variants={staggerChild}>
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

      <Section className="ftdc-preview__section--stats" id="stats">
        <Motion.div className="ftdc-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="ftdc-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="ftdc-preview__section--light">
        <div className="ftdc-preview__trust-grid">
          <Motion.div className="ftdc-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="ftdc-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="ftdc-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="ftdc-preview__trust-card">
                    <span className="ftdc-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="ftdc-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="ftdc-preview__section--dark">
        <span className="ftdc-preview__kicker ftdc-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="ftdc-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="ftdc-preview__dark-grid">
          <div className="ftdc-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="ftdc-preview__dark-card">
                  <span className="ftdc-preview__icon-wrap ftdc-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="ftdc-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="ftdc-preview__section--light">
        <div className="ftdc-preview__section-head ftdc-preview__section-head--center">
          <span className="ftdc-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="ftdc-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`ftdc-preview__tab ${activeTab === tab.label ? 'ftdc-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="ftdc-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="ftdc-preview__service-card" variants={staggerChild}>
                <span className="ftdc-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="ftdc-preview__section--light">
        <div className="ftdc-preview__section-head ftdc-preview__section-head--center">
          <span className="ftdc-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="ftdc-preview__doctor-carousel">
          <button
            type="button"
            className="ftdc-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="ftdc-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="ftdc-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="ftdc-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="ftdc-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`ftdc-preview__dot ${doctorIndex === index ? 'ftdc-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="ftdc-preview__section--tinted">
        <div className="ftdc-preview__section-head ftdc-preview__section-head--center">
          <span className="ftdc-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="ftdc-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ftdc-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="ftdc-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`ftdc-preview__dot ${quoteIndex === index ? 'ftdc-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="ftdc-preview__section--light">
        <div className="ftdc-preview__section-head ftdc-preview__section-head--center">
          <span className="ftdc-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="ftdc-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="ftdc-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="ftdc-preview__section--light ftdc-preview__section--contact">
        <div className="ftdc-preview__contact-grid">
          <div>
            <span className="ftdc-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="ftdc-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="ftdc-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="ftdc-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="ftdc-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="ftdc-preview__btn ftdc-preview__btn--primary ftdc-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="ftdc-preview__btn ftdc-preview__btn--ghost ftdc-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="ftdc-preview__footer">
        <div className="ftdc-preview__shell ftdc-preview__footer-inner">
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
        <div className="ftdc-preview__shell ftdc-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="ftdc-preview__mobile-rail">
        <a className="ftdc-preview__rail-btn ftdc-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="ftdc-preview__rail-btn ftdc-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default FamilyTreeDentalCarePreview
