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
import './DallasLaserDentistryPreview.css'

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
  slug: 'dallas-laser-dentistry',
  seoDescription: 'Preview website for Dallas Laser Dentistry by That Software House.',
  businessName: 'Dallas Laser Dentistry',
  brandMark: 'DLD',
  tagline: 'Our Smiles Are Contagious',
  phoneDisplay: '(214) 725-6250',
  phoneHref: 'tel:+12147256250',
  address: ['7557 Rambler Rd #1023', 'Dallas, TX 75231'],
  mapUrl: 'https://g.page/DallasLaserDentistry?share',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Doctors', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Book Online',
  },
  hero: {
    eyebrow: 'Award-Winning Cosmetic, Laser & General Dentistry',
    headline: 'Confidence Starts Here in North Dallas.',
    description:
      'From your first phone call to your final result, our team combines advanced technology with warm, spa-like comfort so you can feel relaxed, informed, and proud of your smile.',
    primaryCta: 'Request Your Visit',
    secondaryCta: 'Call Dallas Laser Dentistry',
    image:
      'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(13, 31, 47, 0.84)',
    overlayEnd: 'rgba(26, 47, 64, 0.56)',
    metaLinks: [
      { icon: 'MapPin', text: 'Serving Dallas & North Dallas', href: '#contact' },
      { icon: 'Award', text: 'Consumer\'s Choice 2011-2025', href: '#testimonials' },
    ],
  },
  stats: [
    { value: 'Since 1997', label: 'Serving Dallas Families' },
    { value: '30+ Years', label: 'Combined Doctor Experience' },
    { value: 'Gold', label: 'Invisalign Providers' },
    { value: 'Spa-Like', label: 'Relaxing Office Setting' },
  ],
  trust: {
    kicker: 'Why Patients Choose Us',
    heading: 'High-quality dentistry with comfort at the center.',
    body:
      'Patients often tell us they expected stress and left feeling genuinely cared for. Every visit is designed around clear communication, precise treatment, and a team that puts your comfort first.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Comfortable dental treatment room in Dallas',
    cards: [
      {
        title: 'Relaxed Experience',
        description:
          'Warm towels, calming views, and a welcoming team help reduce dental anxiety from the moment you arrive.',
        icon: 'Sparkles',
      },
      {
        title: 'Personalized Plans',
        description:
          'Your treatment plan is built around your goals, your timeline, and your long-term oral health.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Advanced Technology',
        description:
          'Digital tools and laser dentistry support precise, efficient care with less discomfort.',
        icon: 'Microscope',
      },
      {
        title: 'Trusted Local Team',
        description:
          'Our doctors and staff are known for professional, kind care that keeps patients coming back.',
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'Advanced Dentistry',
    heading: 'Technology, artistry, and thoughtful care in every appointment.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental technology used for precise treatment planning',
    items: [
      {
        title: 'Smile Design Expertise',
        description:
          'From subtle refinements to full smile makeovers, treatment is tailored to your features and goals.',
        icon: 'Sparkles',
      },
      {
        title: 'Laser & Digital Precision',
        description:
          'Modern diagnostics and laser tools improve accuracy, comfort, and long-term outcomes.',
        icon: 'Scan',
      },
      {
        title: 'Implant & Restorative Care',
        description:
          'Implants, crowns, and restorative options are planned for both function and natural-looking results.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Comfort-First Team',
        description:
          'Your questions are answered clearly so you feel informed and confident at every step.',
        icon: 'Smile',
      },
    ],
  },
  serviceTabs: [
    {
      label: 'Cosmetic',
      cards: [
        {
          title: 'Smile Makeovers',
          description:
            'Comprehensive plans that combine treatments to create a brighter, balanced, natural-looking smile.',
          icon: 'Sparkles',
        },
        {
          title: 'Porcelain Veneers',
          description:
            'Custom veneers designed to enhance shape, symmetry, and confidence while preserving a natural look.',
          icon: 'Star',
        },
        {
          title: 'Invisalign Aligners',
          description:
            'Discreet clear aligners to straighten your smile without metal braces.',
          icon: 'Smile',
        },
        {
          title: 'Laser Whitening',
          description:
            'Professional whitening designed for brighter results with comfort and safety in mind.',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'Restorative',
      cards: [
        {
          title: 'Dental Implants',
          description:
            'Long-lasting tooth replacement options, including single implants and All-On-4 solutions.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Crowns & Bridges',
          description:
            'Restore strength, function, and appearance with custom-fit restorative dentistry.',
          icon: 'Users',
        },
        {
          title: 'Dental Bonding',
          description:
            'Refine chips, gaps, or uneven areas with conservative cosmetic-restorative treatment.',
          icon: 'Sparkles',
        },
        {
          title: 'Root Canal Treatment',
          description:
            'Modern root canal care focused on relieving pain and preserving your natural tooth.',
          icon: 'Scan',
        },
      ],
    },
    {
      label: 'Preventive',
      cards: [
        {
          title: 'Comprehensive Exams',
          description:
            'Detailed evaluations to protect oral health and catch concerns early.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Professional Cleanings',
          description:
            'Thorough hygiene visits that keep teeth and gums healthy year-round.',
          icon: 'Smile',
        },
        {
          title: 'Oral Cancer Screening',
          description:
            'Preventive screening as part of your routine care for added peace of mind.',
          icon: 'Award',
        },
        {
          title: 'Family Dentistry',
          description:
            'Preventive care designed for adults, families, and long-term oral wellness.',
          icon: 'Users',
        },
      ],
    },
    {
      label: 'Specialty',
      cards: [
        {
          title: 'All-On-4 Implants',
          description:
            'A fixed, full-arch option designed for stability and confidence.',
          icon: 'Microscope',
        },
        {
          title: 'Full Mouth Reconstruction',
          description:
            'Comprehensive planning for patients who need complete restorative support.',
          icon: 'Scan',
        },
        {
          title: 'Laser Gum Procedures',
          description:
            'Laser-based soft tissue treatment for precision and comfortable healing.',
          icon: 'Sparkles',
        },
        {
          title: 'Advanced Digital Planning',
          description:
            'Digital diagnostics help you see options clearly before treatment begins.',
          icon: 'Star',
        },
      ],
    },
  ],
  servicesSection: {
    kicker: 'Our Services',
    heading: 'Comprehensive care for health, comfort, and confidence.',
    tabsAriaLabel: 'Service categories',
  },
  doctors: {
    kicker: 'Meet Your Doctors',
    heading: 'Experienced clinicians who treat you like family.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Doctors',
    items: [
      {
        name: 'Dr. Mary Swift, DDS',
        title: 'Founder & Cosmetic Dentist',
        bio: 'Founder of Dallas Laser Dentistry, Dr. Swift is known for personalized cosmetic dentistry and an educational, caring approach that helps patients feel confident in every decision.',
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Portrait of caring female dentist in clinic',
      },
      {
        name: 'Dr. Kelli Dummerth, DDS',
        title: 'General & Cosmetic Dentist',
        bio: 'Dr. Kelli blends aesthetic and restorative expertise to deliver high-quality, personalized care with precision, warmth, and attention to each patient\'s goals.',
        image:
          'https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dentist consulting with a patient about treatment options',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What Dallas patients say after their visits.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote:
          'I had never had a root canal and was feeling anxious. It turned out to be a non-event and there wasn\'t an ounce of pain.',
        author: 'Jeff H.',
      },
      {
        quote:
          'Dr. Swift and everyone on her team are awesome. They are professional, kind, and make you feel comfortable right away.',
        author: 'Verified Patient',
      },
      {
        quote:
          'This is a wonderful and relaxing environment with welcoming dentists and hygienists. The whole team truly cares.',
        author: 'Verified Patient',
      },
    ],
  },
  insurance: {
    kicker: 'Flexible Options',
    heading: 'Care designed to fit your goals and your budget.',
    body:
      'Our team helps you understand treatment options clearly and supports next-step planning, including membership and financing guidance when appropriate.',
    tags: ['Membership Plan', 'Insurance Support', 'Flexible Scheduling', 'Transparent Treatment Plans'],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to take the next step toward a healthier smile?',
    description:
      'Call our team or request your appointment online. We\'ll help you plan a comfortable visit and answer your questions before you come in.',
    hours: [
      { day: 'Monday', value: '7:30 AM - 4:00 PM' },
      { day: 'Tuesday', value: '7:30 AM - 4:00 PM' },
      { day: 'Wednesday', value: '7:30 AM - 4:00 PM' },
      { day: 'Thursday', value: '7:30 AM - 4:00 PM' },
      { day: 'Friday - Sunday', value: 'Closed' },
    ],
    cardTitle: 'Schedule Your Consultation',
    cardBody:
      'Start with a conversation about your smile goals. We\'ll guide you to the right treatment plan for lasting results.',
    hoursLabel: 'Office Hours',
    primaryCta: 'Call Now',
    secondaryCta: 'Get Directions',
  },
  footer: {
    popularServicesHeading: 'Popular Services',
    quickLinksHeading: 'Quick Links',
    serviceLinks: ['Smile Makeovers', 'Veneers', 'Invisalign', 'Dental Implants'],
    quickLinks: ['Why Patients Choose Us', 'Meet the Doctors', 'Contact Us', 'Book Online'],
    copyright: '© 2026 Dallas Laser Dentistry Preview',
  },
  mobileRail: {
    phoneLabel: 'Call',
    ctaLabel: 'Request Visit',
  },
}

function Section({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      className={`dld-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="dld-preview__shell">{children}</div>
    </Motion.section>
  )
}

function DallasLaserDentistryPreview() {
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
    <div className="dld-preview">
      <header className={`dld-preview__nav ${navSolid ? 'dld-preview__nav--solid' : ''}`}>
        <div className="dld-preview__shell dld-preview__nav-inner">
          <a className="dld-preview__brand" href="#hero">
            <span className="dld-preview__brand-mark">{previewData.brandMark}</span>
            <span className="dld-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="dld-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="dld-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="dld-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="dld-preview__shell dld-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="dld-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="dld-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="dld-preview__hero-actions" variants={staggerChild}>
            <a className="dld-preview__btn dld-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="dld-preview__btn dld-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="dld-preview__hero-meta" variants={staggerChild}>
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

      <Section className="dld-preview__section--stats" id="stats">
        <Motion.div className="dld-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="dld-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="dld-preview__section--light">
        <div className="dld-preview__trust-grid">
          <Motion.div className="dld-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="dld-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="dld-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="dld-preview__trust-card">
                    <span className="dld-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="dld-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="dld-preview__section--dark">
        <span className="dld-preview__kicker dld-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="dld-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="dld-preview__dark-grid">
          <div className="dld-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="dld-preview__dark-card">
                  <span className="dld-preview__icon-wrap dld-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="dld-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="dld-preview__section--light">
        <div className="dld-preview__section-head dld-preview__section-head--center">
          <span className="dld-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="dld-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`dld-preview__tab ${activeTab === tab.label ? 'dld-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="dld-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="dld-preview__service-card" variants={staggerChild}>
                <span className="dld-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="dld-preview__section--light">
        <div className="dld-preview__section-head dld-preview__section-head--center">
          <span className="dld-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="dld-preview__doctor-carousel">
          <button
            type="button"
            className="dld-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="dld-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="dld-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="dld-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="dld-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`dld-preview__dot ${doctorIndex === index ? 'dld-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="dld-preview__section--tinted">
        <div className="dld-preview__section-head dld-preview__section-head--center">
          <span className="dld-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="dld-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="dld-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="dld-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`dld-preview__dot ${quoteIndex === index ? 'dld-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="dld-preview__section--light">
        <div className="dld-preview__section-head dld-preview__section-head--center">
          <span className="dld-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="dld-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="dld-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="dld-preview__section--light dld-preview__section--contact">
        <div className="dld-preview__contact-grid">
          <div>
            <span className="dld-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="dld-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="dld-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="dld-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="dld-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="dld-preview__btn dld-preview__btn--primary dld-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="dld-preview__btn dld-preview__btn--ghost dld-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="dld-preview__footer">
        <div className="dld-preview__shell dld-preview__footer-inner">
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
        <div className="dld-preview__shell dld-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="dld-preview__mobile-rail">
        <a className="dld-preview__rail-btn dld-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="dld-preview__rail-btn dld-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default DallasLaserDentistryPreview
