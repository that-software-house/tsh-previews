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
import './RossAvenueFamilyDentalPreview.css'

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
  slug: 'ross-avenue-family-dental',
  seoDescription:
    'Ross Avenue Family Dental of Dallas offers preventive, family, restorative, cosmetic, sedation, and same-day emergency dental care with Saturday availability.',
  businessName: 'Ross Avenue Family Dental of Dallas',
  brandMark: 'RAFD',
  tagline: 'Dentistry designed for modern life.',
  phoneDisplay: '(469) 210-7223',
  phoneHref: 'tel:+14692107223',
  address: ['4540 Ross Ave Ste 140', 'Dallas, TX 75204'],
  mapUrl: 'https://goo.gl/maps/LY4Vqf27UUVGK8HT8',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Families Choose Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Meet Dr. Liu', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Now',
  },
  hero: {
    eyebrow: 'Family, Preventive & Emergency Dentistry in Dallas',
    headline: 'We make it easy for Dallas families to smile.',
    description:
      "From checkups and kids' visits to same-day emergency care, our team keeps visits comfortable with Saturday hours, clear communication, and flexible payment options.",
    primaryCta: 'Call to Book',
    secondaryCta: 'Call (469) 210-7223',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(22, 50, 64, 0.88)',
    overlayEnd: 'rgba(13, 33, 43, 0.6)',
    metaLinks: [
      { icon: 'MapPin', text: '4540 Ross Ave Ste 140, Dallas, TX 75204', href: '#contact' },
      { icon: 'Award', text: 'Saturday appointments and same-day emergencies', href: '#contact' },
    ],
  },
  stats: [
    { value: 'Open Sat', label: 'Convenient Hours' },
    { value: 'Same-Day', label: 'Emergency Visits' },
    { value: '$80', label: 'New Patient Visit*' },
    { value: 'PPO + CHIP', label: 'Coverage Options' },
  ],
  trust: {
    kicker: 'Why Families Choose Us',
    heading: 'Comfortable visits, honest guidance, and dentistry that fits real schedules.',
    body:
      'Our team focuses on efficiency without rushing your care. You can expect transparent recommendations, clear costs, and a welcoming experience from check-in through follow-up.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist reviewing treatment options with a patient',
    cards: [
      {
        title: 'Saturday Appointments',
        description:
          'Busy during the week? Saturday hours make it easier to get care without disrupting work or school.',
        icon: 'Sparkles',
      },
      {
        title: 'Insurance, Medicaid & CHIP',
        description:
          'We help patients use PPO benefits and guide families through Medicaid and CHIP options.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Fast Emergency Relief',
        description:
          'If a toothache or injury happens, call us and we will work to see you as quickly as possible.',
        icon: 'Microscope',
      },
      {
        title: 'Honest, Upfront Pricing',
        description:
          'Treatment recommendations include clear cost information so you can plan with confidence.',
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'Complete Care',
    heading: 'One Dallas office for prevention, repair, confidence, and urgent pain relief.',
    image:
      'https://images.unsplash.com/photo-1609840112855-9a6d0bba4d06?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental team in treatment room preparing for patient care',
    items: [
      {
        title: 'Preventive Dentistry',
        description:
          'Routine checkups, cleanings, and fluoride care help stop small issues before they turn into big ones.',
        icon: 'Sparkles',
      },
      {
        title: 'Family & Kids Care',
        description:
          'From first visits to teen dental needs, we provide age-appropriate care in one convenient location.',
        icon: 'Scan',
      },
      {
        title: 'Restorative & Cosmetic',
        description:
          'Fillings, crowns, bridges, dentures, implants, and cosmetic bonding help restore comfort and confidence.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Emergency & Sedation Support',
        description:
          'Same-day emergency visits and nitrous oxide sedation support calmer care when stress or pain is high.',
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
            'Two preventive visits per year can help catch cavities and gum concerns early.',
          icon: 'Sparkles',
        },
        {
          title: 'Fluoride Treatments',
          description:
            'Fluoride strengthens enamel and adds extra protection against decay for both kids and adults.',
          icon: 'Star',
        },
        {
          title: 'Gum Disease Therapy',
          description:
            'Scaling and root planing treatments help control infection and protect long-term gum health.',
          icon: 'Smile',
        },
        {
          title: 'Routine Oral Exams',
          description:
            'Comprehensive exams and imaging help spot issues before they become painful or expensive.',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'Family & Kids',
      cards: [
        {
          title: "Children's Dentistry",
          description:
            'Kid-friendly visits support healthy development and help children build confidence at the dentist.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Emergency Kids Dentistry',
          description:
            'If your child has sudden pain or a dental injury, we provide prompt care and clear next steps.',
          icon: 'Users',
        },
        {
          title: 'Sealants & Fluoride for Kids',
          description:
            'Preventive pediatric options help protect cavity-prone areas during key growth years.',
          icon: 'Sparkles',
        },
        {
          title: 'Special Needs Dentistry',
          description:
            'We tailor care for patients who need extra time, sensory support, or additional accommodations.',
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
            'Composite fillings repair cavities while matching the natural look of your smile.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Dental Crowns',
          description:
            'Custom crowns strengthen damaged teeth and restore normal biting and chewing comfort.',
          icon: 'Smile',
        },
        {
          title: 'Bridges, Dentures & Implants',
          description:
            'Missing-tooth options are available to restore chewing, speech, and everyday confidence.',
          icon: 'Award',
        },
        {
          title: 'Cosmetic Bonding & Veneers',
          description:
            'Cosmetic treatments can improve chips, spacing, and worn edges to refresh your smile.',
          icon: 'Users',
        },
      ],
    },
    {
      label: 'Emergency & Comfort',
      cards: [
        {
          title: 'Emergency Dentistry',
          description:
            'Same-day visits are often available for toothaches, cracked teeth, and other urgent problems.',
          icon: 'Microscope',
        },
        {
          title: 'Root Canal Treatment',
          description:
            'Root canal therapy relieves deep tooth pain and helps preserve your natural tooth structure.',
          icon: 'Scan',
        },
        {
          title: 'Tooth Extractions',
          description:
            'When a tooth cannot be saved, gentle extraction and recovery guidance help you heal comfortably.',
          icon: 'Sparkles',
        },
        {
          title: 'Nitrous Oxide Sedation',
          description:
            'Nitrous sedation is available for patients who feel anxious during cleanings or procedures.',
          icon: 'Star',
        },
      ],
    },
  ],
  servicesSection: {
    kicker: 'Our Services',
    heading: 'Comprehensive care for every age, stage, and smile goal.',
    tabsAriaLabel: 'Service categories',
  },
  doctors: {
    kicker: 'Meet The Team',
    heading: 'Led by Dr. Xinxing Liu with a team focused on comfort, efficiency, and trust.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Care team',
    items: [
      {
        name: 'Dr. Xinxing Liu',
        title: 'Dentist, DMD',
        bio: 'Dr. Liu combines scientific precision and an artistic eye to help patients feel comfortable while restoring healthy, confident smiles.',
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Female dentist standing in a modern clinic',
      },
      {
        name: 'Patient Care Team',
        title: 'Front Office & Insurance Support',
        bio: 'Our friendly front-office team helps with scheduling, insurance verification, and financing guidance so treatment planning feels simple.',
        image:
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dental front desk team assisting a patient',
      },
      {
        name: 'Clinical Support Team',
        title: 'Dental Assistants & Hygienists',
        bio: 'Our clinical team keeps visits efficient and supportive while helping every patient understand each step of treatment.',
        image:
          'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dental assistant preparing treatment room equipment',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What Dallas patients share after visiting Ross Avenue Family Dental.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote:
          'Thank you, Dr. Liu, for your help keeping my teeth clean. The staff is very nice and friendly and worked me into a busy schedule.',
        author: 'Allison M., Dallas, TX',
      },
      {
        quote:
          'On a Friday afternoon after work, they were kind, efficient, and helpful to get my mishap taken care of quickly.',
        author: 'Rhonda H., Dallas, TX',
      },
      {
        quote:
          'Thank you, Dr. Liu... you guys are awesome. Thank you for taking care of me. Definitely will be back.',
        author: 'Aaron S., Dallas, TX',
      },
    ],
  },
  insurance: {
    kicker: 'Insurance & Payment',
    heading: 'Payment options that keep quality care within reach.',
    body:
      'We accept several PPO plans, Medicaid, and CHIP, and we also offer financing through Sunbit to help spread treatment costs over time.',
    tags: [
      'Most PPO Plans Accepted',
      'Medicaid & CHIP Welcome',
      'Sunbit Financing',
      'BlueCross BlueShield',
      'Aetna',
      'Cigna',
      'MetLife',
      'Guardian',
      'Delta Dental',
      'UnitedHealthcare',
    ],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to book your next visit?',
    description:
      'Call our Dallas office for checkups, kids dentistry, restorative treatment, cosmetic options, or same-day emergency care.',
    hours: [
      { day: 'Monday', value: '9:30 am - 5:00 pm' },
      { day: 'Tuesday', value: '9:30 am - 5:00 pm' },
      { day: 'Wednesday', value: '9:30 am - 5:00 pm' },
      { day: 'Thursday', value: '9:30 am - 5:00 pm' },
      { day: 'Friday', value: '9:30 am - 4:00 pm' },
      { day: 'Saturday', value: '9:00 am - 1:00 pm' },
      { day: 'Sunday', value: 'Closed' },
    ],
    cardTitle: 'Book By Phone',
    cardBody:
      'Our team can help with appointment scheduling, benefit checks, and immediate guidance for urgent dental pain.',
    hoursLabel: 'Office Hours',
    primaryCta: 'Call Now',
    secondaryCta: 'Get Directions',
  },
  footer: {
    popularServicesHeading: 'Popular Services',
    quickLinksHeading: 'Quick Links',
    serviceLinks: ['Checkups & Cleanings', "Children's Dentistry", 'Emergency Dentistry', 'Dental Implants'],
    quickLinks: ['Why Families Choose Us', 'Our Services', 'Meet Dr. Liu', 'Contact Us'],
    copyright: '© 2026 Ross Avenue Family Dental Preview',
  },
  mobileRail: {
    phoneLabel: 'Call',
    ctaLabel: 'Request',
  },
}

function Section({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      className={`rafd-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="rafd-preview__shell">{children}</div>
    </Motion.section>
  )
}

function RossAvenueFamilyDentalPreview() {
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
    <div className="rafd-preview">
      <header className={`rafd-preview__nav ${navSolid ? 'rafd-preview__nav--solid' : ''}`}>
        <div className="rafd-preview__shell rafd-preview__nav-inner">
          <a className="rafd-preview__brand" href="#hero">
            <span className="rafd-preview__brand-mark">{previewData.brandMark}</span>
            <span className="rafd-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="rafd-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="rafd-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="rafd-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="rafd-preview__shell rafd-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="rafd-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="rafd-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="rafd-preview__hero-actions" variants={staggerChild}>
            <a className="rafd-preview__btn rafd-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="rafd-preview__btn rafd-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="rafd-preview__hero-meta" variants={staggerChild}>
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

      <Section className="rafd-preview__section--stats" id="stats">
        <Motion.div className="rafd-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="rafd-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="rafd-preview__section--light">
        <div className="rafd-preview__trust-grid">
          <Motion.div className="rafd-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="rafd-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="rafd-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="rafd-preview__trust-card">
                    <span className="rafd-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="rafd-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="rafd-preview__section--dark">
        <span className="rafd-preview__kicker rafd-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="rafd-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="rafd-preview__dark-grid">
          <div className="rafd-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="rafd-preview__dark-card">
                  <span className="rafd-preview__icon-wrap rafd-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="rafd-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="rafd-preview__section--light">
        <div className="rafd-preview__section-head rafd-preview__section-head--center">
          <span className="rafd-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="rafd-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`rafd-preview__tab ${activeTab === tab.label ? 'rafd-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="rafd-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="rafd-preview__service-card" variants={staggerChild}>
                <span className="rafd-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="rafd-preview__section--light">
        <div className="rafd-preview__section-head rafd-preview__section-head--center">
          <span className="rafd-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="rafd-preview__doctor-carousel">
          <button
            type="button"
            className="rafd-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="rafd-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="rafd-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="rafd-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="rafd-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`rafd-preview__dot ${doctorIndex === index ? 'rafd-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="rafd-preview__section--tinted">
        <div className="rafd-preview__section-head rafd-preview__section-head--center">
          <span className="rafd-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="rafd-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rafd-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="rafd-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`rafd-preview__dot ${quoteIndex === index ? 'rafd-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="rafd-preview__section--light">
        <div className="rafd-preview__section-head rafd-preview__section-head--center">
          <span className="rafd-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="rafd-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="rafd-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="rafd-preview__section--light rafd-preview__section--contact">
        <div className="rafd-preview__contact-grid">
          <div>
            <span className="rafd-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="rafd-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="rafd-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="rafd-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="rafd-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="rafd-preview__btn rafd-preview__btn--primary rafd-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="rafd-preview__btn rafd-preview__btn--ghost rafd-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="rafd-preview__footer">
        <div className="rafd-preview__shell rafd-preview__footer-inner">
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
        <div className="rafd-preview__shell rafd-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="rafd-preview__mobile-rail">
        <a className="rafd-preview__rail-btn rafd-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="rafd-preview__rail-btn rafd-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default RossAvenueFamilyDentalPreview
