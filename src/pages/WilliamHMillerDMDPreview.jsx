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
import './WilliamHMillerDMDPreview.css'

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
  slug: 'william-h-miller-dmd',
  seoDescription:
    'William H. Miller, D.M.D., P.A. provides personalized one-on-one general and cosmetic dentistry in North Dallas on Walnut Hill Lane.',
  businessName: 'William H. Miller, D.M.D., P.A.',
  brandMark: 'WHM',
  tagline: "With a Smile, We're Changing Lives",
  phoneDisplay: '(214) 692-1050',
  phoneHref: 'tel:+12146921050',
  address: ['8305 Walnut Hill Ln #235', 'Dallas, TX 75231'],
  mapUrl:
    'https://www.google.com/maps/place/8305+Walnut+Hill+Ln,+Dallas,+TX+75231/@32.8841744,-96.7641163,17z/data=!3m1!4b1!4m5!3m4!1s0x864e9feff2b96407:0x167e1ab0400381c9!8m2!3d32.8841699!4d-96.7619276',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Choose Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Doctor', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Today',
  },
  hero: {
    eyebrow: 'North Dallas General & Cosmetic Dentistry',
    headline: 'Personal, one-on-one dental care right here in North Dallas.',
    description:
      'Dr. William H. Miller has served Dallas-area patients since 1985 with a small, attentive office focused on comfort, clear communication, and quality care.',
    primaryCta: 'Call (214) 692-1050',
    secondaryCta: 'Get Directions',
    image:
      'https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(18, 31, 54, 0.86)',
    overlayEnd: 'rgba(30, 54, 92, 0.6)',
    metaLinks: [
      { icon: 'MapPin', text: 'Walnut Hill Lane across from Presbyterian Hospital', href: '#contact' },
      {
        icon: 'Award',
        text: 'Serving North Dallas, Preston Hollow, University Park & Highland Park',
        href: '#contact',
      },
    ],
  },
  stats: [
    { value: 'Since 1985', label: 'Practicing In DFW' },
    { value: 'One Patient', label: 'At A Time Focus' },
    { value: 'Full Range', label: 'General Dental Services' },
    { value: '5.0★', label: 'Featured Patient Quote' },
  ],
  trust: {
    kicker: 'Why Patients Choose Us',
    heading: 'A small office built around comfort and personal attention.',
    body:
      'Every visit is designed to feel respectful and unhurried. From the moment you walk in, our team focuses on your questions, your comfort, and your care goals.',
    image:
      'https://images.unsplash.com/photo-1643297654416-0576ae5fba15?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental office team helping a patient feel comfortable',
    cards: [
      {
        title: 'One-On-One Care',
        description:
          'Dr. Miller works with one patient at a time so your appointment gets focused attention.',
        icon: 'Sparkles',
      },
      {
        title: 'Friendly, Attentive Team',
        description:
          'Our small staff greets you by name and helps each visit feel smooth and welcoming.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Comfort Amenities',
        description:
          'The office offers comfort touches like bottled water and hot towel service after treatment.',
        icon: 'Microscope',
      },
      {
        title: 'Patient-Focused Philosophy',
        description:
          'Treatment planning starts with your needs and preferences, with clear and honest discussions.',
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'Complete Care',
    heading: 'General, preventive, and cosmetic dentistry in one trusted office.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist consulting with patient about treatment options',
    items: [
      {
        title: 'Preventive Visits',
        description:
          'Exams, oral cancer screenings, x-rays, and cleanings help keep small issues from becoming big ones.',
        icon: 'Sparkles',
      },
      {
        title: 'Restorative Dentistry',
        description:
          'Fillings, crowns, bridges, root canals, dentures, and extractions are provided with careful planning.',
        icon: 'Scan',
      },
      {
        title: 'Dental Implants',
        description:
          'Implant consultations, placement coordination, and final restorations are tailored to your smile goals.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Cosmetic Services',
        description:
          'Whitening, bonding, veneers, and esthetic improvements help you feel confident in your smile.',
        icon: 'Smile',
      },
    ],
  },
  serviceTabs: [
    {
      label: 'Preventive',
      cards: [
        {
          title: 'Consultations',
          description:
            'Discuss your concerns and goals so your treatment plan starts with what matters most to you.',
          icon: 'Sparkles',
        },
        {
          title: 'Dental Examinations',
          description:
            'Comprehensive exams with clear explanations and practical next steps for your oral health.',
          icon: 'Star',
        },
        {
          title: 'Oral Cancer Screening',
          description:
            'Routine screenings are included to help identify concerns early and give you peace of mind.',
          icon: 'Smile',
        },
        {
          title: 'Cleanings & Gum Therapy',
          description:
            'Professional cleanings and gum-focused care help protect the foundation of your smile.',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'General',
      cards: [
        {
          title: 'Tooth-Colored Fillings',
          description:
            'Natural-looking fillings restore strength while blending with your existing teeth.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Crowns & Bridges',
          description:
            'Durable restorations improve function and appearance for damaged or missing teeth.',
          icon: 'Users',
        },
        {
          title: 'Root Canals',
          description:
            'Targeted treatment helps relieve pain while preserving your natural tooth structure.',
          icon: 'Sparkles',
        },
        {
          title: 'Extractions & Dentures',
          description:
            'When needed, extraction and denture options are discussed carefully and compassionately.',
          icon: 'Scan',
        },
      ],
    },
    {
      label: 'Cosmetic',
      cards: [
        {
          title: 'Teeth Whitening',
          description:
            'Professional whitening helps brighten your smile for everyday confidence.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Bonding',
          description:
            'Conservative cosmetic bonding smooths chips and refines shape in a natural way.',
          icon: 'Smile',
        },
        {
          title: 'Veneers',
          description:
            'Veneers can improve color, shape, and symmetry for a refreshed smile appearance.',
          icon: 'Award',
        },
        {
          title: 'Smile Makeovers',
          description:
            'Comprehensive cosmetic planning combines treatments to match your goals and lifestyle.',
          icon: 'Users',
        },
      ],
    },
    {
      label: 'Implant & Restorative',
      cards: [
        {
          title: 'Implant Consultations',
          description:
            'Detailed evaluations help determine if implants are the right fit for long-term replacement.',
          icon: 'Microscope',
        },
        {
          title: 'Implant Restorations',
          description:
            'Custom crowns, bridges, or removable restorations are designed for comfort and stability.',
          icon: 'Scan',
        },
        {
          title: 'Nightguards & Biteguards',
          description:
            'Protective guards can reduce grinding stress and help preserve your teeth and restorations.',
          icon: 'Sparkles',
        },
        {
          title: 'Emergency Care',
          description:
            'If sudden pain or damage occurs, the office prioritizes care and clear next-step guidance.',
          icon: 'Star',
        },
      ],
    },
  ],
  servicesSection: {
    kicker: 'Our Services',
    heading: 'Comprehensive care with a personal, patient-first touch.',
    tabsAriaLabel: 'Service categories',
  },
  doctors: {
    kicker: 'Meet The Team',
    heading: 'Experienced care led by Dr. William H. Miller.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Care team',
    items: [
      {
        name: 'Dr. William H. Miller',
        title: 'General Dentist',
        bio: 'Dr. Miller has practiced in Texas since 1985, with decades of continuing education and a strong focus on one-on-one, quality-driven general dentistry.',
        image:
          'https://images.unsplash.com/photo-1643297653762-9e6ec55ff9e0?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dentist in a clinical office setting',
      },
      {
        name: 'Kathy',
        title: 'Patient Care Advocate',
        bio: 'Kathy welcomes patients, supports appointments chairside, and helps each visit feel warm, organized, and comfortable from start to finish.',
        image:
          'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dental assistant helping a patient in a treatment room',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What patients say about their experience with Dr. Miller.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote:
          'After finding Dr. Miller, I never want to go anywhere else. He is the Best and so is his staff!',
        author: 'Kim, Arlington, TX',
      },
      {
        quote:
          'The office is always friendly, organized, and focused on making each visit comfortable.',
        author: 'North Dallas Patient',
      },
    ],
  },
  insurance: {
    kicker: 'Insurance & Payment',
    heading: 'Clear insurance guidance and patient-focused decisions.',
    body:
      'The office can file claims for you and explain options clearly, while keeping treatment recommendations centered on your care needs.',
    tags: ['Claims Filing Available', 'PPO Patients Welcome', 'Credit Cards Accepted', 'Patient-Focused Planning'],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to plan your visit?',
    description:
      'Call today to schedule your appointment. The office is on Walnut Hill Lane and serves North Dallas, Preston Hollow, University Park, and Highland Park.',
    hours: [
      { day: 'Monday', value: 'Call For Availability' },
      { day: 'Tuesday', value: 'Call For Availability' },
      { day: 'Wednesday', value: 'Call For Availability' },
      { day: 'Thursday', value: 'Call For Availability' },
      { day: 'Friday', value: 'Call For Availability' },
      { day: 'Saturday - Sunday', value: 'Closed' },
    ],
    cardTitle: 'Schedule By Phone',
    cardBody:
      'Our team is happy to help with appointment requests, treatment questions, and insurance details when you call the office.',
    hoursLabel: 'Office Hours',
    primaryCta: 'Call Now',
    secondaryCta: 'Get Directions',
  },
  footer: {
    popularServicesHeading: 'Dental Services',
    quickLinksHeading: 'Quick Links',
    serviceLinks: ['Dental Cleanings', 'Crowns & Bridges', 'Dental Implants', 'Teeth Whitening'],
    quickLinks: ['Why Patients Choose Us', 'Our Services', 'Meet Dr. Miller', 'Contact Us'],
    copyright: '© 2026 William H. Miller, D.M.D., P.A. Preview',
  },
  mobileRail: {
    phoneLabel: 'Call',
    ctaLabel: 'Call Today',
  },
}

function Section({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      className={`whm-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="whm-preview__shell">{children}</div>
    </Motion.section>
  )
}

function WilliamHMillerDMDPreview() {
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
    <div className="whm-preview">
      <header className={`whm-preview__nav ${navSolid ? 'whm-preview__nav--solid' : ''}`}>
        <div className="whm-preview__shell whm-preview__nav-inner">
          <a className="whm-preview__brand" href="#hero">
            <span className="whm-preview__brand-mark">{previewData.brandMark}</span>
            <span className="whm-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="whm-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="whm-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="whm-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="whm-preview__shell whm-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="whm-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="whm-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="whm-preview__hero-actions" variants={staggerChild}>
            <a className="whm-preview__btn whm-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="whm-preview__btn whm-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="whm-preview__hero-meta" variants={staggerChild}>
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

      <Section className="whm-preview__section--stats" id="stats">
        <Motion.div className="whm-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="whm-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="whm-preview__section--light">
        <div className="whm-preview__trust-grid">
          <Motion.div className="whm-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="whm-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="whm-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="whm-preview__trust-card">
                    <span className="whm-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="whm-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="whm-preview__section--dark">
        <span className="whm-preview__kicker whm-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="whm-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="whm-preview__dark-grid">
          <div className="whm-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="whm-preview__dark-card">
                  <span className="whm-preview__icon-wrap whm-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="whm-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="whm-preview__section--light">
        <div className="whm-preview__section-head whm-preview__section-head--center">
          <span className="whm-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="whm-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`whm-preview__tab ${activeTab === tab.label ? 'whm-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="whm-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="whm-preview__service-card" variants={staggerChild}>
                <span className="whm-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="whm-preview__section--light">
        <div className="whm-preview__section-head whm-preview__section-head--center">
          <span className="whm-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="whm-preview__doctor-carousel">
          <button
            type="button"
            className="whm-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="whm-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="whm-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="whm-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="whm-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`whm-preview__dot ${doctorIndex === index ? 'whm-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="whm-preview__section--tinted">
        <div className="whm-preview__section-head whm-preview__section-head--center">
          <span className="whm-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="whm-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="whm-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="whm-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`whm-preview__dot ${quoteIndex === index ? 'whm-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="whm-preview__section--light">
        <div className="whm-preview__section-head whm-preview__section-head--center">
          <span className="whm-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="whm-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="whm-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="whm-preview__section--light whm-preview__section--contact">
        <div className="whm-preview__contact-grid">
          <div>
            <span className="whm-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="whm-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="whm-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="whm-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="whm-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="whm-preview__btn whm-preview__btn--primary whm-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="whm-preview__btn whm-preview__btn--ghost whm-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="whm-preview__footer">
        <div className="whm-preview__shell whm-preview__footer-inner">
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
        <div className="whm-preview__shell whm-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="whm-preview__mobile-rail">
        <a className="whm-preview__rail-btn whm-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="whm-preview__rail-btn whm-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default WilliamHMillerDMDPreview
