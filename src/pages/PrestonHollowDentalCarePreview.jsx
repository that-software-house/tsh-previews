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
import './PrestonHollowDentalCarePreview.css'

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
  slug: 'preston-hollow-dental-care',
  seoDescription:
    'Preston Hollow Dental Care & Orthodontics offers family dentistry, orthodontics, implants, and same-day emergency care in Dallas.',
  businessName: 'Preston Hollow Dental Care & Orthodontics',
  brandMark: 'PHDC',
  tagline: 'Friendly, Comprehensive Dentistry for Preston Hollow & Beyond',
  phoneDisplay: '(214) 647-3106',
  phoneHref: 'tel:+12146473106',
  address: ['11661 Preston Rd Suite 104', 'Dallas, TX 75230'],
  mapUrl:
    'https://www.google.com/maps/place/Preston+Hollow+Dental+Care+%26+Orthodontics/@32.9072428,-96.8094302,17z',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Families Choose Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Care Team', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Book Now',
  },
  hero: {
    eyebrow: 'Family Dentistry, Orthodontics & Emergency Care in Dallas',
    headline: 'Friendly, comprehensive care for every smile in Preston Hollow.',
    description:
      'From routine cleanings to orthodontics and dental implants, our team combines advanced technology with a welcoming, family-oriented approach for patients of every age.',
    primaryCta: 'Request Your Visit',
    secondaryCta: 'Call (214) 647-3106',
    image:
      'https://images.unsplash.com/photo-1629909615957-be2a5004948c?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(16, 42, 36, 0.86)',
    overlayEnd: 'rgba(22, 67, 58, 0.58)',
    metaLinks: [
      { icon: 'MapPin', text: 'Serving Preston Hollow, North Dallas & Addison', href: '#contact' },
      { icon: 'Award', text: 'Same-day emergency visits available', href: '#contact' },
    ],
  },
  stats: [
    { value: 'Same-Day', label: 'Emergency Appointments' },
    { value: 'Most Major', label: 'Insurance Plans Accepted' },
    { value: 'Mon-Thu', label: '8:00 AM - 5:00 PM' },
    { value: '4.4★', label: 'Patient Reputation' },
  ],
  trust: {
    kicker: 'Why Families Choose Us',
    heading: 'Personalized care with a calm, welcoming experience.',
    body:
      'Our office is built around clear communication, modern tools, and compassionate care. We focus on helping every patient feel comfortable, informed, and confident from first visit to follow-up.',
    image:
      'https://images.unsplash.com/photo-1588776814546-ec7e4f5f6d41?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Comfortable and modern dental treatment room',
    cards: [
      {
        title: 'Family-Oriented Visits',
        description:
          'We provide gentle, respectful care for adults, teens, and children in a warm and friendly setting.',
        icon: 'Sparkles',
      },
      {
        title: 'Personalized Treatment',
        description:
          'Your care plan is tailored to your needs, schedule, and long-term oral health goals.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Advanced Technology',
        description:
          'Digital tools support precise treatment planning and efficient visits with less stress.',
        icon: 'Microscope',
      },
      {
        title: 'Flexible Payment Support',
        description:
          'With most major insurance accepted and financing options available, care stays accessible.',
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'What We Do',
    heading: 'Comprehensive dentistry for every stage of life.',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental clinician reviewing treatment imaging',
    items: [
      {
        title: 'General Dentistry',
        description:
          'Checkups, cleanings, and everyday preventive care to keep your smile healthy year-round.',
        icon: 'Sparkles',
      },
      {
        title: 'Orthodontics',
        description:
          'Braces and clear aligners for teens and adults, tailored to your smile goals.',
        icon: 'Scan',
      },
      {
        title: 'Dental Implants',
        description:
          'Stable, long-lasting tooth replacement that looks and feels natural.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Same-Day Emergencies',
        description:
          'Urgent appointments for severe pain, broken teeth, and unexpected dental concerns.',
        icon: 'Smile',
      },
    ],
  },
  serviceTabs: [
    {
      label: 'General',
      cards: [
        {
          title: 'Routine Checkups',
          description:
            'Comprehensive exams and preventive visits to detect concerns early and protect oral health.',
          icon: 'Sparkles',
        },
        {
          title: 'Professional Cleanings',
          description:
            'Thorough cleanings to support healthy gums, fresher breath, and a brighter everyday smile.',
          icon: 'Star',
        },
        {
          title: 'Pediatric Dentistry',
          description:
            'Kid-friendly dental care focused on positive visits and healthy habits from an early age.',
          icon: 'Smile',
        },
        {
          title: 'Periodontal Care',
          description:
            'Gum-focused treatment plans to protect bone support and long-term oral health.',
          icon: 'Award',
        },
      ],
    },
    {
      label: 'Orthodontics',
      cards: [
        {
          title: 'Clear Aligners',
          description:
            'Discreet orthodontic treatment designed for comfortable, step-by-step smile alignment.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Traditional Braces',
          description:
            'Reliable orthodontic correction for complex alignment and bite concerns.',
          icon: 'Users',
        },
        {
          title: 'Bite Evaluation',
          description:
            'Detailed assessments to build the right treatment plan for function and comfort.',
          icon: 'Sparkles',
        },
        {
          title: 'Retention Support',
          description:
            'Long-term guidance after treatment to help protect your alignment results.',
          icon: 'Scan',
        },
      ],
    },
    {
      label: 'Restorative',
      cards: [
        {
          title: 'Dental Implants',
          description:
            'Permanent tooth replacement options designed for stable chewing and natural-looking results.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Root Canal Therapy',
          description:
            'Pain-relieving treatment that saves natural teeth whenever possible.',
          icon: 'Smile',
        },
        {
          title: 'Sedation Dentistry',
          description:
            'Comfort-focused options that help anxious patients feel calm during treatment.',
          icon: 'Award',
        },
        {
          title: 'Cosmetic Enhancements',
          description:
            'Whitening and smile refinement options to improve confidence and appearance.',
          icon: 'Users',
        },
      ],
    },
    {
      label: 'Specialty',
      cards: [
        {
          title: 'Emergency Dentistry',
          description:
            'Prompt care for dental injuries, broken teeth, or severe pain when urgency matters.',
          icon: 'Microscope',
        },
        {
          title: 'Treatment Planning',
          description:
            'Clear, guided planning so you understand your options before treatment begins.',
          icon: 'Scan',
        },
        {
          title: 'Insurance Guidance',
          description:
            'Support from our front desk team to help you use your plan benefits effectively.',
          icon: 'Sparkles',
        },
        {
          title: 'Online Scheduling',
          description:
            'Book appointments quickly online or by phone based on your schedule.',
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
    kicker: 'Your Care Team',
    heading: 'Experienced, compassionate professionals focused on your comfort.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Care team',
    items: [
      {
        name: 'Comprehensive Care Team',
        title: 'Family & Preventive Dentistry',
        bio: 'Our clinical team is known for clear communication, gentle treatment, and a patient-first approach that helps families feel at ease during every visit.',
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Friendly dentist speaking with a patient',
      },
      {
        name: 'Orthodontic & Restorative Team',
        title: 'Orthodontics, Implants, and Advanced Care',
        bio: 'From alignment planning to restorative treatment, we tailor each step to your goals so your care stays efficient, comfortable, and clear.',
        image:
          'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dental professional reviewing care options',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What Preston Hollow families say after their visits.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote:
          'This dental office has very helpful, caring and kind people who work there. They all listen to whatever you have to say. I am very happy to be their patient!',
        author: 'Cathleen G.',
      },
      {
        quote:
          'GREAT Customer Service.',
        author: 'Gina R.',
      },
      {
        quote:
          'Shelly has taken great care of my husband and I for many years.',
        author: 'Christine E.',
      },
    ],
  },
  insurance: {
    kicker: 'Flexible Options',
    heading: 'Care that fits your family, schedule, and budget.',
    body:
      'We accept most major insurance plans, offer financing support, and help you understand every treatment recommendation before you begin.',
    tags: ['Most Major Insurance Accepted', 'Flexible Payment Options', 'Same-Day Emergencies', 'Online Scheduling'],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to schedule your next visit?',
    description:
      'Call our office or book online today. We proudly serve Preston Hollow, North Dallas, and nearby neighborhoods with personalized dental care.',
    hours: [
      { day: 'Monday', value: '8:00 AM - 5:00 PM' },
      { day: 'Tuesday', value: '8:00 AM - 5:00 PM' },
      { day: 'Wednesday', value: '8:00 AM - 5:00 PM' },
      { day: 'Thursday', value: '8:00 AM - 5:00 PM' },
      { day: 'Friday - Sunday', value: 'Closed' },
    ],
    cardTitle: 'Book Your Appointment',
    cardBody:
      'Use our online scheduler or call us directly to plan your visit. We are happy to answer questions about treatment, insurance, and urgent care.',
    hoursLabel: 'Office Hours',
    primaryCta: 'Call Now',
    secondaryCta: 'Get Directions',
  },
  footer: {
    popularServicesHeading: 'Popular Services',
    quickLinksHeading: 'Quick Links',
    serviceLinks: ['General Dentistry', 'Orthodontics', 'Dental Implants', 'Emergency Care'],
    quickLinks: ['Why Families Choose Us', 'Our Services', 'Contact Us', 'Book Online'],
    copyright: '© 2026 Preston Hollow Dental Care & Orthodontics Preview',
  },
  mobileRail: {
    phoneLabel: 'Call',
    ctaLabel: 'Book Now',
  },
}

function Section({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      className={`phdc-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="phdc-preview__shell">{children}</div>
    </Motion.section>
  )
}

function PrestonHollowDentalCarePreview() {
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
    <div className="phdc-preview">
      <header className={`phdc-preview__nav ${navSolid ? 'phdc-preview__nav--solid' : ''}`}>
        <div className="phdc-preview__shell phdc-preview__nav-inner">
          <a className="phdc-preview__brand" href="#hero">
            <span className="phdc-preview__brand-mark">{previewData.brandMark}</span>
            <span className="phdc-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="phdc-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="phdc-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="phdc-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="phdc-preview__shell phdc-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="phdc-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="phdc-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="phdc-preview__hero-actions" variants={staggerChild}>
            <a className="phdc-preview__btn phdc-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="phdc-preview__btn phdc-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="phdc-preview__hero-meta" variants={staggerChild}>
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

      <Section className="phdc-preview__section--stats" id="stats">
        <Motion.div className="phdc-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="phdc-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="phdc-preview__section--light">
        <div className="phdc-preview__trust-grid">
          <Motion.div className="phdc-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="phdc-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="phdc-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="phdc-preview__trust-card">
                    <span className="phdc-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="phdc-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="phdc-preview__section--dark">
        <span className="phdc-preview__kicker phdc-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="phdc-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="phdc-preview__dark-grid">
          <div className="phdc-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="phdc-preview__dark-card">
                  <span className="phdc-preview__icon-wrap phdc-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="phdc-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="phdc-preview__section--light">
        <div className="phdc-preview__section-head phdc-preview__section-head--center">
          <span className="phdc-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="phdc-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`phdc-preview__tab ${activeTab === tab.label ? 'phdc-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="phdc-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="phdc-preview__service-card" variants={staggerChild}>
                <span className="phdc-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="phdc-preview__section--light">
        <div className="phdc-preview__section-head phdc-preview__section-head--center">
          <span className="phdc-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="phdc-preview__doctor-carousel">
          <button
            type="button"
            className="phdc-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="phdc-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="phdc-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="phdc-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="phdc-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`phdc-preview__dot ${doctorIndex === index ? 'phdc-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="phdc-preview__section--tinted">
        <div className="phdc-preview__section-head phdc-preview__section-head--center">
          <span className="phdc-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="phdc-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="phdc-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="phdc-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`phdc-preview__dot ${quoteIndex === index ? 'phdc-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="phdc-preview__section--light">
        <div className="phdc-preview__section-head phdc-preview__section-head--center">
          <span className="phdc-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="phdc-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="phdc-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="phdc-preview__section--light phdc-preview__section--contact">
        <div className="phdc-preview__contact-grid">
          <div>
            <span className="phdc-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="phdc-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="phdc-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="phdc-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="phdc-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="phdc-preview__btn phdc-preview__btn--primary phdc-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="phdc-preview__btn phdc-preview__btn--ghost phdc-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="phdc-preview__footer">
        <div className="phdc-preview__shell phdc-preview__footer-inner">
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
        <div className="phdc-preview__shell phdc-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="phdc-preview__mobile-rail">
        <a className="phdc-preview__rail-btn phdc-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="phdc-preview__rail-btn phdc-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default PrestonHollowDentalCarePreview
