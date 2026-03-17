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
import './OakCliffDentalCenterPreview.css'

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
  slug: 'oak-cliff-dental-center',
  seoDescription:
    'Oak Cliff Dental Center in Dallas offers family, cosmetic, restorative, and same-day emergency dental care with trilingual support and a long community legacy.',
  businessName: 'Oak Cliff Dental Center',
  brandMark: 'OCDC',
  tagline: 'Modern care with deep Oak Cliff roots.',
  phoneDisplay: '(214) 948-3364',
  phoneHref: 'tel:+12149483364',
  address: ['820 North Zang Blvd., Suite 110', 'Dallas, TX 75208'],
  mapUrl: 'https://goo.gl/maps/i9B7Xa4Kymn',
  nav: {
    ariaLabel: 'Page sections',
    links: [
      { label: 'Why Oak Cliff Families Choose Us', href: '#trust' },
      { label: 'Services', href: '#services' },
      { label: 'Meet Dr. Munawar', href: '#doctors' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Call Today',
  },
  hero: {
    eyebrow: 'Family, Cosmetic & Emergency Dentistry in Oak Cliff',
    headline: 'Personalized care for every smile in Bishop Arts and Oak Cliff.',
    description:
      'From routine cleanings to urgent pain relief, our team delivers thoughtful care in a modern office while honoring a neighborhood legacy that began in 1959.',
    primaryCta: 'Book Your Visit',
    secondaryCta: 'Call (214) 948-3364',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80',
    overlayStart: 'rgba(20, 88, 79, 0.86)',
    overlayEnd: 'rgba(14, 54, 60, 0.58)',
    metaLinks: [
      { icon: 'MapPin', text: '820 North Zang Blvd., Suite 110, Dallas, TX 75208', href: '#contact' },
      { icon: 'Award', text: 'Serving Oak Cliff since 1959 with modern technology', href: '#trust' },
    ],
  },
  stats: [
    { value: 'Since 1959', label: 'Oak Cliff Legacy' },
    { value: 'Same-Day', label: 'Emergency Support' },
    { value: 'Trilingual', label: 'Patient Communication' },
    { value: 'Most PPO', label: 'Insurance Accepted' },
  ],
  trust: {
    kicker: 'Why Oak Cliff Families Choose Us',
    heading: 'Historic neighborhood trust, modern tools, and genuinely personal care.',
    body:
      'Our practice combines decades of local history with updated equipment and a calm experience. We explain your options clearly, keep visits efficient, and support your long-term oral health.',
    image:
      'https://assets.lummi.ai/assets/QmWVnpfXsgAXPC4K5V9JRiqacY9QLwkxsBfRmBtPH3QmLu?auto=format&w=1500',
    imageAlt: 'Dentist consulting with patient in a bright treatment room',
    cards: [
      {
        title: 'Legacy You Can Feel',
        description:
          'Originally established as the first dental office in Oak Cliff, our practice continues a long tradition of community-centered care.',
        icon: 'Sparkles',
      },
      {
        title: 'Trilingual Communication',
        description:
          'Our team supports patients in multiple languages, helping families feel informed and comfortable throughout treatment.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Comprehensive In-House Services',
        description:
          'General, cosmetic, restorative, and surgical services are available in one location to simplify your dental care journey.',
        icon: 'Microscope',
      },
      {
        title: 'Insurance-Friendly Guidance',
        description:
          'We accept most PPO plans and provide clear estimates so you can plan treatment with confidence.',
        icon: 'Users',
      },
    ],
  },
  differentiators: {
    kicker: 'Comprehensive Care',
    heading: 'One Oak Cliff office for preventive, cosmetic, restorative, and emergency dentistry.',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dental team reviewing digital imaging together',
    items: [
      {
        title: 'Preventive Dentistry',
        description:
          'Routine exams, cleanings, and oral health screenings help prevent small problems from becoming costly treatment.',
        icon: 'Sparkles',
      },
      {
        title: 'Family & Pediatric Care',
        description:
          'Kid-friendly visits and family-focused scheduling make dental care simpler for every age in your household.',
        icon: 'Scan',
      },
      {
        title: 'Smile Repair & Aesthetics',
        description:
          'From veneers and whitening to crowns and implants, we offer solutions that restore both function and confidence.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Urgent Relief',
        description:
          'When sudden pain appears, our team provides same-day emergency care and practical next steps to get you comfortable quickly.',
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
            'Regular exams and cleanings help catch concerns early and keep your smile healthy year-round.',
          icon: 'Sparkles',
        },
        {
          title: 'Comprehensive Oral Exams',
          description:
            'Detailed evaluations with imaging help us identify issues early and recommend the right treatment plan.',
          icon: 'Star',
        },
        {
          title: 'Gum Health Therapy',
          description:
            'Scaling and periodontal support protect gum tissue and long-term tooth stability.',
          icon: 'Smile',
        },
        {
          title: 'Preventive Family Visits',
          description:
            'Family-focused preventive visits help children and adults stay on track with oral health goals.',
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
            'Personalized cosmetic planning helps improve shape, color, and balance for a more confident smile.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Veneers & Teeth Whitening',
          description:
            'Minimal or no-prep veneers plus whitening options can brighten and refine your smile.',
          icon: 'Users',
        },
        {
          title: 'Crowns, Bridges & Dentures',
          description:
            'Custom restorations rebuild chewing comfort and support missing-tooth replacement needs.',
          icon: 'Sparkles',
        },
        {
          title: 'Dental Implants',
          description:
            'Implant treatment restores stability, function, and long-term confidence.',
          icon: 'Scan',
        },
      ],
    },
    {
      label: 'Surgical & Specialty',
      cards: [
        {
          title: 'Root Canal Therapy',
          description:
            'Root canal treatment relieves pain and preserves natural teeth affected by deep infection.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Oral Surgery',
          description:
            'When surgical care is needed, we provide a clear plan and supportive follow-up.',
          icon: 'Smile',
        },
        {
          title: "Children's Dentistry",
          description:
            'Gentle pediatric visits help younger patients build confidence and healthy habits early.',
          icon: 'Award',
        },
        {
          title: 'Orthodontic Options',
          description:
            'Orthodontic solutions are available to improve alignment and long-term bite health.',
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
            'For tooth pain, injury, or swelling, call us and we will work to see you as quickly as possible.',
          icon: 'Microscope',
        },
        {
          title: 'Toothache Relief',
          description:
            'Urgent diagnosis and treatment planning help relieve pain and prevent complications.',
          icon: 'Scan',
        },
        {
          title: 'Broken Tooth Repair',
          description:
            'Prompt restorative options can stabilize cracked or broken teeth and protect your smile.',
          icon: 'Sparkles',
        },
        {
          title: 'Same-Day Evaluations',
          description:
            'If needed, we provide same-day emergency evaluations and clear next-step guidance before you leave.',
          icon: 'Star',
        },
      ],
    },
  ],
  servicesSection: {
    kicker: 'Our Services',
    heading: 'Complete dental services designed for real life in Dallas.',
    tabsAriaLabel: 'Service categories',
  },
  doctors: {
    kicker: 'Meet The Team',
    heading: 'Skilled clinicians focused on ethical care, comfort, and long-term outcomes.',
    previousLabel: 'Previous doctor',
    nextLabel: 'Next doctor',
    dotsAriaLabel: 'Care team',
    items: [
      {
        name: 'Dr. Moniza Munawar',
        title: 'Primary Dentist, DDS, FAGD',
        bio: 'Dr. Moniza Munawar earned her DDS from NYU College of Dentistry and brings more than 20 years of experience. She is among the small percentage of dentists nationwide with Fellow of the Academy of General Dentistry distinction.',
        image:
          'assets/doctors/female2.png',
        imageAlt: 'Female dentist smiling in a modern dental clinic',
      },
      {
        name: 'Oak Cliff Care Team',
        title: 'Hygiene, Front Desk, and Clinical Support',
        bio: 'Our front desk, hygiene, and chairside teams work together to keep visits smooth, welcoming, and efficient from check-in through follow-up.',
        image:
          'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Dental team preparing treatment room for a patient visit',
      },
    ],
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'What neighbors in Oak Cliff and Dallas say about their experience.',
    dotsAriaLabel: 'Testimonials',
    items: [
      {
        quote:
          'I had a great experience with my visit. The staff and doctor made me feel comfortable, and the doctor was very gentle.',
        author: 'Heather Ramos',
      },
      {
        quote:
          'Had a great dental experience. I spent less time waiting than it took to get there, and the office felt fresh and comfortable.',
        author: 'Ash T',
      },
      {
        quote:
          'My experience was amazing. It was a quick in-and-out visit and the team helped me understand my paperwork and treatment clearly.',
        author: 'Ana Mendoza',
      },
    ],
  },
  insurance: {
    kicker: 'Insurance & Payment',
    heading: 'Clear guidance for insurance and treatment planning.',
    body:
      'We accept almost all PPO plans and provide detailed treatment estimates. Our team works hard to help patients understand benefits and expected out-of-pocket costs.',
    tags: [
      'Most PPO Plans Accepted',
      'Insurance Estimate Support',
      'Transparent Treatment Planning',
      'Flexible Payment Options',
    ],
  },
  contact: {
    kicker: 'Contact & Hours',
    heading: 'Ready to book your next visit?',
    description:
      'Call our Bishop Arts office for family checkups, cosmetic consultations, restorative dentistry, or same-day emergency support.',
    hours: [
      { day: 'Monday', value: '8:00 am - 5:00 pm' },
      { day: 'Tuesday', value: '8:00 am - 5:00 pm' },
      { day: 'Wednesday', value: '8:00 am - 5:00 pm' },
      { day: 'Thursday', value: '8:00 am - 5:00 pm' },
      { day: 'Friday', value: '8:00 am - 12:00 pm' },
      { day: 'Saturday', value: 'Closed' },
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
    serviceLinks: ['General Dentistry', 'Cosmetic Dentistry', 'Emergency Dentistry', 'Dental Implants'],
    quickLinks: ['Why Oak Cliff Families Choose Us', 'Our Services', 'Meet Dr. Munawar', 'Contact Us'],
    copyright: '© 2026 Oak Cliff Dental Center Preview',
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
      className={`ocdc-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="ocdc-preview__shell">{children}</div>
    </Motion.section>
  )
}

function OakCliffDentalCenterPreview() {
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
    <div className="ocdc-preview">
      <header className={`ocdc-preview__nav ${navSolid ? 'ocdc-preview__nav--solid' : ''}`}>
        <div className="ocdc-preview__shell ocdc-preview__nav-inner">
          <a className="ocdc-preview__brand" href="#hero">
            <span className="ocdc-preview__brand-mark">{previewData.brandMark}</span>
            <span className="ocdc-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="ocdc-preview__nav-links" aria-label={previewData.nav.ariaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="ocdc-preview__nav-cta" href={previewData.phoneHref}>{previewData.nav.cta}</a>
        </div>
      </header>

      <section
        id="hero"
        className="ocdc-preview__hero"
        style={{
          backgroundImage: `linear-gradient(${previewData.hero.overlayStart}, ${previewData.hero.overlayEnd}), url(${previewData.hero.image})`,
        }}
      >
        <Motion.div
          className="ocdc-preview__shell ocdc-preview__hero-inner"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <Motion.p className="ocdc-preview__eyebrow" variants={staggerChild}>{previewData.hero.eyebrow}</Motion.p>
          <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
          <Motion.p className="ocdc-preview__hero-description" variants={staggerChild}>{previewData.hero.description}</Motion.p>

          <Motion.div className="ocdc-preview__hero-actions" variants={staggerChild}>
            <a className="ocdc-preview__btn ocdc-preview__btn--primary" href={previewData.phoneHref}>
              {previewData.hero.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="ocdc-preview__btn ocdc-preview__btn--ghost" href={previewData.phoneHref}>{previewData.hero.secondaryCta}</a>
          </Motion.div>

          <Motion.div className="ocdc-preview__hero-meta" variants={staggerChild}>
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

      <Section className="ocdc-preview__section--stats" id="stats">
        <Motion.div className="ocdc-preview__stats-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
          {previewData.stats.map((stat) => (
            <Motion.div key={stat.label} className="ocdc-preview__stat-card" variants={staggerChild}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      <Section id="trust" className="ocdc-preview__section--light">
        <div className="ocdc-preview__trust-grid">
          <Motion.div className="ocdc-preview__section-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <span className="ocdc-preview__kicker">{previewData.trust.kicker}</span>
            <h2>{previewData.trust.heading}</h2>
            <p>{previewData.trust.body}</p>
            <div className="ocdc-preview__trust-cards">
              {previewData.trust.cards.map((card) => {
                const Icon = iconMap[card.icon]
                return (
                  <article key={card.title} className="ocdc-preview__trust-card">
                    <span className="ocdc-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                )
              })}
            </div>
          </Motion.div>

          <Motion.figure className="ocdc-preview__trust-image" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={previewData.trust.image} alt={previewData.trust.imageAlt} loading="lazy" />
          </Motion.figure>
        </div>
      </Section>

      <Section id="differentiators" className="ocdc-preview__section--dark">
        <span className="ocdc-preview__kicker ocdc-preview__kicker--light">{previewData.differentiators.kicker}</span>
        <h2 className="ocdc-preview__heading--light">{previewData.differentiators.heading}</h2>
        <div className="ocdc-preview__dark-grid">
          <div className="ocdc-preview__dark-cards">
            {previewData.differentiators.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <article key={item.title} className="ocdc-preview__dark-card">
                  <span className="ocdc-preview__icon-wrap ocdc-preview__icon-wrap--dark"><Icon size={18} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
          <figure className="ocdc-preview__dark-image">
            <img src={previewData.differentiators.image} alt={previewData.differentiators.imageAlt} loading="lazy" />
          </figure>
        </div>
      </Section>

      <Section id="services" className="ocdc-preview__section--light">
        <div className="ocdc-preview__section-head ocdc-preview__section-head--center">
          <span className="ocdc-preview__kicker">{previewData.servicesSection.kicker}</span>
          <h2>{previewData.servicesSection.heading}</h2>
        </div>

        <div className="ocdc-preview__tabs" role="tablist" aria-label={previewData.servicesSection.tabsAriaLabel}>
          {previewData.serviceTabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`ocdc-preview__tab ${activeTab === tab.label ? 'ocdc-preview__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Motion.div
          className="ocdc-preview__service-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
          key={activeTab}
        >
          {activeServices.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Motion.article key={card.title} className="ocdc-preview__service-card" variants={staggerChild}>
                <span className="ocdc-preview__icon-wrap"><Icon size={18} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="doctors" className="ocdc-preview__section--light">
        <div className="ocdc-preview__section-head ocdc-preview__section-head--center">
          <span className="ocdc-preview__kicker">{previewData.doctors.kicker}</span>
          <h2>{previewData.doctors.heading}</h2>
        </div>

        <div className="ocdc-preview__doctor-carousel">
          <button
            type="button"
            className="ocdc-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev === 0 ? previewData.doctors.items.length - 1 : prev - 1))}
            aria-label={previewData.doctors.previousLabel}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <Motion.article
            className="ocdc-preview__doctor-card"
            key={activeDoctor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={activeDoctor.image} alt={activeDoctor.imageAlt} loading="lazy" />
            <div>
              <h3>{activeDoctor.name}</h3>
              <p className="ocdc-preview__doctor-title">{activeDoctor.title}</p>
              <p>{activeDoctor.bio}</p>
            </div>
          </Motion.article>

          <button
            type="button"
            className="ocdc-preview__carousel-btn"
            onClick={() => setDoctorIndex((prev) => (prev + 1) % previewData.doctors.items.length)}
            aria-label={previewData.doctors.nextLabel}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="ocdc-preview__dots" role="tablist" aria-label={previewData.doctors.dotsAriaLabel}>
          {previewData.doctors.items.map((doctor, index) => (
            <button
              key={doctor.name}
              type="button"
              className={`ocdc-preview__dot ${doctorIndex === index ? 'ocdc-preview__dot--active' : ''}`}
              onClick={() => setDoctorIndex(index)}
              aria-label={doctor.name}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="ocdc-preview__section--tinted">
        <div className="ocdc-preview__section-head ocdc-preview__section-head--center">
          <span className="ocdc-preview__kicker">{previewData.testimonials.kicker}</span>
          <h2>{previewData.testimonials.heading}</h2>
        </div>

        <Motion.article
          className="ocdc-preview__quote-card"
          key={activeQuote.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ocdc-preview__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${activeQuote.author}-${index}`} size={16} fill="currentColor" />
            ))}
          </div>
          <p>“{activeQuote.quote}”</p>
          <strong>{activeQuote.author}</strong>
        </Motion.article>

        <div className="ocdc-preview__dots" role="tablist" aria-label={previewData.testimonials.dotsAriaLabel}>
          {previewData.testimonials.items.map((item, index) => (
            <button
              key={item.quote}
              type="button"
              className={`ocdc-preview__dot ${quoteIndex === index ? 'ocdc-preview__dot--active' : ''}`}
              onClick={() => setQuoteIndex(index)}
              aria-label={item.author}
            />
          ))}
        </div>
      </Section>

      <Section id="insurance" className="ocdc-preview__section--light">
        <div className="ocdc-preview__section-head ocdc-preview__section-head--center">
          <span className="ocdc-preview__kicker">{previewData.insurance.kicker}</span>
          <h2>{previewData.insurance.heading}</h2>
          <p>{previewData.insurance.body}</p>
        </div>

        <div className="ocdc-preview__pills">
          {previewData.insurance.tags.map((tag) => (
            <span key={tag} className="ocdc-preview__pill">{tag}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" className="ocdc-preview__section--light ocdc-preview__section--contact">
        <div className="ocdc-preview__contact-grid">
          <div>
            <span className="ocdc-preview__kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="ocdc-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {previewData.address.join(', ')}
              </a>
            </div>

            <div className="ocdc-preview__hours">
              <h3>
                <Clock3 size={16} aria-hidden="true" />
                {previewData.contact.hoursLabel}
              </h3>
              {previewData.contact.hours.map((item) => (
                <div key={item.day} className="ocdc-preview__hours-row">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="ocdc-preview__contact-card">
            <h3>{previewData.contact.cardTitle}</h3>
            <p>{previewData.contact.cardBody}</p>
            <a className="ocdc-preview__btn ocdc-preview__btn--primary ocdc-preview__btn--full" href={previewData.phoneHref}>
              {previewData.contact.primaryCta}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="ocdc-preview__btn ocdc-preview__btn--ghost ocdc-preview__btn--full" href={previewData.mapUrl} target="_blank" rel="noreferrer">
              {previewData.contact.secondaryCta}
            </a>
          </article>
        </div>
      </Section>

      <footer className="ocdc-preview__footer">
        <div className="ocdc-preview__shell ocdc-preview__footer-inner">
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
        <div className="ocdc-preview__shell ocdc-preview__footer-bottom">
          <p>{previewData.footer.copyright}</p>
        </div>
      </footer>

      <div className="ocdc-preview__mobile-rail">
        <a className="ocdc-preview__rail-btn ocdc-preview__rail-btn--ghost" href={previewData.phoneHref}>
          {previewData.mobileRail.phoneLabel}
        </a>
        <a className="ocdc-preview__rail-btn ocdc-preview__rail-btn--primary" href={previewData.phoneHref}>
          {previewData.mobileRail.ctaLabel}
        </a>
      </div>

      <FloatingCTA />
    </div>
  )
}

export default OakCliffDentalCenterPreview
