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
import './CasperFamilyDentistryPreview.css'

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
  slug: 'casper-family-dentistry',
  seoDescription:
    'Casper Family Dentistry of Dallas offers preventive, cosmetic, restorative, pediatric, and same-day emergency dental care with evening and Saturday hours.',
  businessName: 'Casper Family Dentistry of Dallas',
  brandMark: 'CFD',
  tagline: 'Convenient, comfortable, and affordable care for patients of all ages.',
  phoneDisplay: '(469) 333-2733',
  phoneHref: 'tel:+14693332733',
  address: ['10031 Marsh Ln Ste 110', 'Dallas, TX 75229'],
  mapUrl: 'https://maps.app.goo.gl/hggRGAGorTAHT6kc9',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Families Choose Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Doctors', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Schedule Today',
  },
  hero: {
    eyebrow: 'Family, Cosmetic & Emergency Dentistry in Dallas',
    headline: 'Exceptional dentistry for busy Dallas families.',
    description:
      "From checkups and kids' visits to same-day emergency care, our team makes treatment convenient with evening and Saturday hours, flexible payment options, and compassionate support.",
    primaryCta: 'Schedule Your Visit',
    secondaryCta: 'Call (469) 333-2733',
    image:
      'https://images.unsplash.com/photo-1629909615767-bca7c3a2f1d1?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(16, 56, 102, 0.87)',
    overlayEnd: 'rgba(7, 38, 74, 0.58)',
    metaLinks: [
      { icon: 'MapPin', text: '10031 Marsh Ln Ste 110, Dallas, TX 75229', href: '#contact' },
      { icon: 'Award', text: 'Same-day emergency dental treatment available', href: '#contact' },
    ],
  },
  stats: [
    { value: 'Same-Day', label: 'Emergency Visits' },
    { value: 'Mon-Sat', label: 'Evening & Weekend Hours' },
    { value: 'Most PPO', label: 'Plans Accepted' },
    { value: '5-Star', label: 'Patient Praise' },
  ],
  trust: {
    kicker: 'Why Families Choose Us',
    heading: 'Comfortable visits, clear guidance, and care that fits real life.',
    body:
      'Our Dallas office is built for real schedules and real concerns. We keep communication clear, reduce waiting, and help each patient feel supported from check-in to follow-up.',
    image:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist speaking with a patient in a modern treatment room',
    cards: [
      {
        title: 'Convenient Scheduling',
        description:
          'Evening and Saturday appointments make it easier to keep up with care around work and school.',
        icon: 'Sparkles',
      },
      {
        title: 'Friendly, Multilingual Team',
        description:
          'Our team includes Spanish-speaking support so families can feel informed and comfortable.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Shorter Waits, More In-House Care',
        description:
          'We provide many services in one place to help keep visits efficient and less stressful.',
        icon: 'Microscope',
      },
      {
        title: 'Flexible Payment Options',
        description:
          "Most PPO plans, children's Medicaid/CHIP options, and financing help keep care accessible.",
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'Comprehensive Care',
    heading: 'One Dallas office for preventive, restorative, cosmetic, and urgent dental needs.',
    image:
      'https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental clinician reviewing treatment imaging with patient',
    items: [
      {
        title: 'Preventive Dentistry',
        description:
          'Checkups, cleanings, fluoride care, and nightguards help protect long-term oral health.',
        icon: 'Sparkles',
      },
      {
        title: 'Family & Pediatric Care',
        description:
          'Kid-focused visits, sealants, and athletic mouthguards support healthy smiles at every age.',
        icon: 'Scan',
      },
      {
        title: 'Smile Repair & Aesthetics',
        description:
          'Tooth-colored fillings, crowns, veneers, whitening, and implants restore function and confidence.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Urgent & Comfort Options',
        description:
          'Same-day emergency treatment and nitrous sedation help when pain or anxiety gets in the way.',
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
            'Routine exams and cleanings help catch concerns early and keep your smile healthy year-round.',
          icon: 'Sparkles',
        },
        {
          title: 'Fluoride Treatments',
          description:
            'Quick fluoride applications strengthen enamel and lower cavity risk for kids and adults.',
          icon: 'Star',
        },
        {
          title: 'Nightguards for Bruxism',
          description:
            'Custom nightguards protect teeth from grinding and reduce jaw discomfort while you sleep.',
          icon: 'Smile',
        },
        {
          title: 'Gum Disease Therapy',
          description:
            'Scaling, root planing, and periodontal maintenance support healthier gums over time.',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'Family',
      cards: [
        {
          title: "Children's Dentistry",
          description:
            'Gentle visits, sealants, and preventive care support growing smiles and positive experiences.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Athletic Mouthguards',
          description:
            'Custom sports guards help protect against chips, cracks, and knocked-out teeth.',
          icon: 'Users',
        },
        {
          title: 'Orthodontics',
          description:
            'Traditional braces and clear aligner options help patients achieve straighter smiles.',
          icon: 'Sparkles',
        },
        {
          title: 'Dental Insurance Support',
          description:
            'Our team helps families understand benefits and use coverage effectively.',
          icon: 'Scan',
        },
      ],
    },
    {
      label: 'Restorative & Cosmetic',
      cards: [
        {
          title: 'Tooth-Colored Fillings',
          description:
            'Natural-looking composite fillings repair decay while blending with surrounding teeth.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Dental Crowns & Bridges',
          description:
            'Custom restorations reinforce damaged teeth and replace gaps with durable support.',
          icon: 'Smile',
        },
        {
          title: 'Veneers & Whitening',
          description:
            'Cosmetic options brighten and reshape your smile with personalized treatment planning.',
          icon: 'Award',
        },
        {
          title: 'Implants & Dentures',
          description:
            'Long-term tooth replacement solutions restore daily comfort and chewing function.',
          icon: 'Users',
        },
      ],
    },
    {
      label: 'Urgent & Comfort',
      cards: [
        {
          title: 'Emergency Dentistry',
          description:
            'Same-day visits are available for toothaches, chips, fractures, and dental injuries.',
          icon: 'Microscope',
        },
        {
          title: 'Root Canal Treatment',
          description:
            'Root canal care helps relieve pain and preserve teeth affected by deep infection.',
          icon: 'Scan',
        },
        {
          title: 'Sedation Dentistry',
          description:
            'Nitrous oxide sedation supports calmer treatment for patients with dental anxiety.',
          icon: 'Sparkles',
        },
        {
          title: 'Tooth Extractions',
          description:
            'When removal is necessary, we provide clear next steps for comfortable healing and replacement.',
          icon: 'Star',
        },
      ],
    },
  ],
  servicesSection: {
    kicker: 'Our Services',
    heading: 'Comprehensive dental care for every stage of your smile.',
    tabsAriaLabel: 'Service categories',
  },
  doctors: {
    kicker: 'Meet The Doctors',
    heading: 'Experienced clinicians focused on comfort, trust, and long-term oral health.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Care team',
    items: [
      {
        name: 'Dr. Tuan Nguyen',
        title: 'General Dentist',
        bio: 'Dr. Nguyen is passionate about helping patients achieve healthy, beautiful smiles while creating a comfortable and educational visit experience.',
        image:
          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Male dentist in clinical attire smiling in treatment room',
      },
      {
        name: 'Dr. Brian Hwangpo',
        title: 'Pediatric Dentist',
        bio: 'Dr. Hwangpo helps children build confidence at the dentist through calm, hands-on care and a welcoming approach for Spanish-speaking families.',
        image:
          'https://images.unsplash.com/photo-1643297653820-66f98f6b8f58?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dentist speaking with a child patient in a dental office',
      },
      {
        name: 'Dr. Zach Kingsberg',
        title: 'Lead Dentist',
        bio: 'Dr. Kingsberg supports full-scope family dentistry with a focus on same-day solutions and practical treatment plans that fit everyday life.',
        image:
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dentist consulting with patient in modern clinic',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What Dallas patients share after their visits.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote:
          'Between the amazing atmosphere and the visit itself, I was overwhelmed by the excellence shown for my three-year-old. The staff was fun, friendly, and patient.',
        author: 'Essie R., Dallas, TX',
      },
      {
        quote:
          'Everyone made it easy to understand my options, and the whole appointment felt smooth and comfortable from start to finish.',
        author: 'Casper Family Dentistry Patient',
      },
      {
        quote:
          'I appreciate how quickly they helped when I had pain. The same-day emergency visit gave me relief and a clear plan.',
        author: 'Emergency Care Patient',
      },
    ],
  },
  insurance: {
    kicker: 'Insurance & Payment',
    heading: 'Care options designed to keep treatment accessible.',
    body:
      "Casper Family Dentistry is in-network with most PPO plans, accepts children's Medicaid and CHIP options, and offers membership and financing support.",
    tags: [
      'Most PPO Plans Accepted',
      "Children's Medicaid / CHIP",
      'In-House Savings Plan',
      'CareCredit Financing'
    ],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to book your next visit?',
    description:
      'Call our Dallas office for checkups, cosmetic consultations, pediatric care, or same-day emergency treatment.',
    hours: [
      { day: 'Monday', value: '1:00 pm - 7:00 pm' },
      { day: 'Tuesday', value: '10:00 am - 7:00 pm' },
      { day: 'Wednesday', value: '10:00 am - 7:00 pm' },
      { day: 'Thursday', value: '10:00 am - 7:00 pm' },
      { day: 'Friday', value: '10:00 am - 7:00 pm' },
      { day: 'Saturday', value: '10:00 am - 2:00 pm' },
    ],
    cardTitle: 'Book By Phone',
    cardBody:
      'Our friendly team can help with appointments, insurance questions, and next-step treatment planning.',
    hoursLabel: 'Office Hours',
    primaryCta: 'Call Now',
    secondaryCta: 'Get Directions',
  },
  footer: {
    popularServicesHeading: 'Popular Services',
    quickLinksHeading: 'Quick Links',
    serviceLinks: ['Checkups & Cleanings', "Children's Dentistry", 'Emergency Dentistry', 'Cosmetic Dentistry'],
    quickLinks: ['Why Families Choose Us', 'Our Services', 'Meet The Doctors', 'Contact Us'],
    copyright: '© 2026 Casper Family Dentistry of Dallas Preview',
  },
  mobileRail: {
    phoneLabel: 'Call',
    ctaLabel: 'Schedule',
  },
}

function Section({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      className={`cfd-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="cfd-preview__shell">{children}</div>
    </Motion.section>
  )
}

function CasperFamilyDentistryPreview() {
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
    <div className="cfd-preview">
      <header className={`cfd-preview__nav ${navSolid ? 'cfd-preview__nav--solid' : ''}`}>
        <div className="cfd-preview__shell cfd-preview__nav-inner">
          <a className="cfd-preview__brand" href="#hero">
            <span className="cfd-preview__brand-mark">{previewData.brandMark}</span>
            <span className="cfd-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="cfd-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="cfd-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="cfd-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="cfd-preview__shell cfd-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="cfd-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="cfd-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="cfd-preview__hero-actions" variants={staggerChild}>
            <a className="cfd-preview__btn cfd-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="cfd-preview__btn cfd-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="cfd-preview__hero-meta" variants={staggerChild}>
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

      <Section className="cfd-preview__section--stats" id="stats">
        <Motion.div className="cfd-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="cfd-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="cfd-preview__section--light">
        <div className="cfd-preview__trust-grid">
          <Motion.div className="cfd-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="cfd-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="cfd-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="cfd-preview__trust-card">
                    <span className="cfd-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="cfd-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="cfd-preview__section--dark">
        <span className="cfd-preview__kicker cfd-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="cfd-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="cfd-preview__dark-grid">
          <div className="cfd-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="cfd-preview__dark-card">
                  <span className="cfd-preview__icon-wrap cfd-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="cfd-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="cfd-preview__section--light">
        <div className="cfd-preview__section-head cfd-preview__section-head--center">
          <span className="cfd-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="cfd-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`cfd-preview__tab ${activeTab === tab.label ? 'cfd-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="cfd-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="cfd-preview__service-card" variants={staggerChild}>
                <span className="cfd-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="cfd-preview__section--light">
        <div className="cfd-preview__section-head cfd-preview__section-head--center">
          <span className="cfd-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="cfd-preview__doctor-carousel">
          <button
            type="button"
            className="cfd-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="cfd-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="cfd-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="cfd-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="cfd-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`cfd-preview__dot ${doctorIndex === index ? 'cfd-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="cfd-preview__section--tinted">
        <div className="cfd-preview__section-head cfd-preview__section-head--center">
          <span className="cfd-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="cfd-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cfd-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="cfd-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`cfd-preview__dot ${quoteIndex === index ? 'cfd-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="cfd-preview__section--light">
        <div className="cfd-preview__section-head cfd-preview__section-head--center">
          <span className="cfd-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="cfd-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="cfd-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="cfd-preview__section--light cfd-preview__section--contact">
        <div className="cfd-preview__contact-grid">
          <div>
            <span className="cfd-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="cfd-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="cfd-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="cfd-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="cfd-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="cfd-preview__btn cfd-preview__btn--primary cfd-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="cfd-preview__btn cfd-preview__btn--ghost cfd-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="cfd-preview__footer">
        <div className="cfd-preview__shell cfd-preview__footer-inner">
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
        <div className="cfd-preview__shell cfd-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="cfd-preview__mobile-rail">
        <a className="cfd-preview__rail-btn cfd-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="cfd-preview__rail-btn cfd-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default CasperFamilyDentistryPreview
