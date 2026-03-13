import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Users,
  Youtube,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './IndependenceDentalPlanoPreview.css'

const heroImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80'
const consultationImage =
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80'
const doctorImage =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80'
const technologyImage =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80'
const comfortImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80'

const previewData = {
  businessName: 'Independence Dental',
  slug: 'independence-dental-plano',
  phoneDisplay: '(972) 915-0400',
  phoneHref: 'tel:+19729150400',
  email: 'info@independencedentalplano.com',
  emailHref: 'mailto:info@independencedentalplano.com',
  addressLines: ['3100 Independence Pkwy #204', 'Plano, TX 75075'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=3100+Independence+Pkwy+%23204+Plano+TX+75075',
  hours: [
    'Mon & Tue: 9am - 5pm',
    'Wed: Closed',
    'Thu & Fri: 9am - 5pm',
    'Sat & Sun: Closed',
  ],
  socialLinks: {
    facebook: 'https://www.facebook.com/IndependenceDentalPlano/',
    instagram: 'https://www.instagram.com/independence_dental',
    youtube: 'https://www.youtube.com/@independencedental',
  },
  hero: {
    eyebrow: 'Cosmetic and family dentistry in Plano',
    headline: 'Smile makeovers with a brighter, boutique feel.',
    description:
      'This preview reframes Independence Dental around smile makeovers first, while still keeping Dr. Simran Bhalla, same-day emergency care, advanced comforts, and family-friendly access visible from the start.',
    primaryCta: 'Book smile consultation',
    secondaryCta: 'Call the office',
    highlights: [
      'Smile makeover-first positioning',
      'Advanced technology comforts',
      'In-network PPO support',
    ],
  },
  stats: [
    {
      label: 'Smile design focus',
      value: 'Veneers, whitening, and alignment',
    },
    {
      label: 'Same-day support',
      value: 'Emergency appointments when needed',
    },
    {
      label: 'Plano convenience',
      value: 'One office for cosmetic and everyday care',
    },
  ],
  intro: {
    kicker: 'A More Premium First Impression',
    heading: 'Beautiful dentistry should still feel personal.',
    body:
      'The live site already signals cosmetic, restorative, and emergency breadth. This concept sharpens the story: a polished smile-makeover experience that still feels approachable, local, and practical for everyday patients in Plano.',
    points: [
      {
        title: 'Cosmetic-first hierarchy',
        description:
          'The most aspirational services lead the page, giving veneers, whitening, and straightening the prominence they deserve.',
      },
      {
        title: 'Trust without corporate stiffness',
        description:
          'Dr. Bhalla, same-day access, and insurance support stay visible, but the visual tone becomes lighter, softer, and more elevated.',
      },
      {
        title: 'Comfort as proof, not filler',
        description:
          'Advanced technology and appointment comfort become a designed centerpiece instead of a secondary utility page.',
      },
    ],
  },
  services: [
    {
      title: 'Smile makeovers',
      description:
        'A higher-end landing point for patients comparing veneers, whitening, alignment, and finishing refinements.',
      icon: Sparkles,
      image: heroImage,
    },
    {
      title: 'Cosmetic dentistry',
      description:
        'The live site already highlights cosmetic treatment. This concept gives it clearer visual prominence and stronger confidence language.',
      icon: BadgeCheck,
      image: consultationImage,
    },
    {
      title: 'Straighter, brighter smiles',
      description:
        'Independence Dental positions straightening and smile refreshes as part of the same transformation conversation.',
      icon: Smile,
      image: comfortImage,
    },
    {
      title: 'Restorative refinements',
      description:
        'Repair and replacement care stay in the story so cosmetic goals feel backed by function and long-term stability.',
      icon: Stethoscope,
      image: technologyImage,
    },
    {
      title: 'Emergency dentistry',
      description:
        'The homepage leads with emergency care in Plano, so this preview preserves same-day urgency as a practical trust signal.',
      icon: HeartHandshake,
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Family and preventive care',
      description:
        'Routine visits and family dentistry remain part of the promise, keeping the site broad enough for households, not just cosmetic cases.',
      icon: Users,
      image:
        'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80',
    },
  ],
  doctor: {
    kicker: 'Meet The Doctor',
    heading: 'Dr. Simran Bhalla at the center of a smaller, more personal care model.',
    body:
      'The current site frames Dr. Bhalla and a small, familiar team as a reason patients feel looked after every visit. This concept keeps that same human center while giving the brand a more elevated cosmetic voice.',
    credentials: [
      'Advanced training across cosmetic, restorative, and alignment-focused care',
      'A comprehensive menu designed to reduce referrals for local families',
      'One-on-one treatment planning with a calmer, more boutique tone',
      'A smaller-team feel that supports trust and repeat visits',
    ],
  },
  technology: {
    kicker: 'Advanced Technology Comforts',
    heading: 'Premium results deserve better tools and easier appointments.',
    description:
      'This section turns one of the site’s clearest differentiators into the visual centerpiece: modern diagnostics, more comfortable visits, and a patient experience that feels guided instead of rushed.',
    cards: [
      {
        title: 'Modern diagnostics',
        description:
          'Technology is positioned as the reason appointments feel more precise, more efficient, and easier to trust.',
      },
      {
        title: 'Clear treatment conversations',
        description:
          'The practice already emphasizes explaining findings and next steps. Here, that becomes part of the luxury feel rather than an afterthought.',
      },
      {
        title: 'Comfort-minded visits',
        description:
          'From smile consultations to restorative care, the tone stays reassuring for anxious or overdue patients.',
      },
    ],
  },
  proof: {
    kicker: 'Patient Confidence',
    heading: 'The review pages reinforce a warm, practical kind of trust.',
    themes: [
      {
        title: 'Welcoming team',
        text:
          'The review copy leans heavily on patients feeling cared for, welcomed, and remembered instead of processed.',
      },
      {
        title: 'Comfort and convenience',
        text:
          'Feedback themes point to flexible appointments, easier visits, and a smoother experience for both urgent and routine care.',
      },
      {
        title: 'Smile transformation potential',
        text:
          'The site repeatedly connects everyday dentistry with brighter, more confident smiles, which supports a makeover-first concept naturally.',
      },
    ],
  },
  access: {
    kicker: 'Insurance And First Visits',
    heading: 'Boutique presentation, practical access.',
    description:
      'Independence Dental already emphasizes PPO coverage help, payment flexibility, and a straightforward first-visit flow. This concept keeps those details concise and confidence-building.',
    carriers: [
      'Aetna',
      'Ameritas',
      'DenteMax',
      'GEHA',
      'Guardian',
      'Humana',
      'MetLife',
      'Principal',
      'United Concordia',
    ],
    steps: [
      {
        title: 'Diagnostic images first',
        description:
          'New-patient visits begin with images and X-rays so the visit feels informed from the start.',
      },
      {
        title: 'Exam with Dr. Bhalla',
        description:
          'The doctor conversation is part of the experience, helping patients feel seen before treatment decisions are made.',
      },
      {
        title: 'Plan and financial clarity',
        description:
          'Observations, treatment options, and financial arrangements are framed clearly before patients leave.',
      },
    ],
  },
  contact: {
    kicker: 'Ready To Book',
    heading: 'A clearer path from first impression to first appointment.',
    description:
      'The preview keeps the final conversion step simple: call, email, or get directions. That preserves the visual-only nature of the concept while still showing how the real site could convert more elegantly.',
  },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
    },
  },
}

const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      {children}
    </Motion.section>
  )
}

function StarRow() {
  return (
    <div className="idp-preview__stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  )
}

function IndependenceDentalPlanoPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: 'Independence Dental Preview | That Software House',
    description:
      'A bright boutique cosmetic preview for Independence Dental in Plano, Texas.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/independence-dental-plano',
    openGraph: {
      title: 'Independence Dental Preview',
      description:
        'A bright boutique cosmetic preview concept for Independence Dental in Plano, Texas.',
      url: 'https://preview.thatsoftwarehouse.com/independence-dental-plano',
      image: heroImage,
    },
  })

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="idp-preview" id="top">
      <header className={`idp-preview__nav ${navSolid ? 'idp-preview__nav--solid' : ''}`}>
        <div className="idp-preview__shell idp-preview__nav-shell">
          <a href="#top" className="idp-preview__brand" aria-label={previewData.businessName}>
            <span className="idp-preview__brand-mark">ID</span>
            <span className="idp-preview__brand-text">
              <strong>{previewData.businessName}</strong>
              <small>Plano, Texas</small>
            </span>
          </a>

          <nav className="idp-preview__nav-links" aria-label="Preview sections">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#doctor">Doctor</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="idp-preview__nav-actions">
            <a href={previewData.phoneHref} className="idp-preview__nav-phone">
              <Phone size={15} />
              {previewData.phoneDisplay}
            </a>
            <a href="#contact" className="idp-preview__button idp-preview__button--primary">
              {previewData.hero.primaryCta}
            </a>
          </div>
        </div>
      </header>

      <section
        className="idp-preview__hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(252, 248, 244, 0.98) 0%, rgba(252, 248, 244, 0.94) 44%, rgba(252, 248, 244, 0.52) 72%, rgba(252, 248, 244, 0.16) 100%), url(${heroImage})`,
        }}
      >
        <div className="idp-preview__shell idp-preview__hero-shell">
          <Motion.div
            className="idp-preview__hero-copy"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <Motion.span className="idp-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.span>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="idp-preview__hero-description" variants={staggerChild}>
              {previewData.hero.description}
            </Motion.p>

            <Motion.div className="idp-preview__hero-actions" variants={staggerChild}>
              <a href="#contact" className="idp-preview__button idp-preview__button--primary">
                {previewData.hero.primaryCta}
              </a>
              <a href={previewData.phoneHref} className="idp-preview__button idp-preview__button--ghost">
                <Phone size={15} />
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>

            <Motion.div className="idp-preview__hero-highlights" variants={staggerChild}>
              {previewData.hero.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </Motion.div>
          </Motion.div>

          <Motion.aside
            className="idp-preview__hero-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="idp-preview__card-kicker">Now welcoming new patients</span>
            <h2>Smile consultations with a more polished first impression.</h2>
            <div className="idp-preview__hero-card-list">
              <div>
                <MapPin size={16} />
                <span>
                  {previewData.addressLines[0]}
                  <br />
                  {previewData.addressLines[1]}
                </span>
              </div>
              <div>
                <Clock3 size={16} />
                <span>{previewData.hours[0]}</span>
              </div>
              <div>
                <CalendarDays size={16} />
                <span>Emergency and routine care under one roof</span>
              </div>
            </div>
            <a href="#services" className="idp-preview__inline-link">
              Explore the concept
              <ArrowRight size={15} />
            </a>
          </Motion.aside>
        </div>
      </section>

      <section className="idp-preview__stats">
        <div className="idp-preview__shell idp-preview__stats-shell">
          {previewData.stats.map((stat) => (
            <div key={stat.label} className="idp-preview__stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <Section className="idp-preview__section idp-preview__section--light" id="about">
        <div className="idp-preview__shell idp-preview__intro-grid">
          <Motion.div className="idp-preview__intro-copy" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <Motion.span className="idp-preview__section-kicker" variants={staggerChild}>
              {previewData.intro.kicker}
            </Motion.span>
            <Motion.h2 variants={staggerChild}>{previewData.intro.heading}</Motion.h2>
            <Motion.p variants={staggerChild}>{previewData.intro.body}</Motion.p>
          </Motion.div>

          <Motion.div className="idp-preview__intro-visual" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <Motion.img
              variants={staggerChild}
              src={consultationImage}
              alt="Dental consultation preview"
              className="idp-preview__intro-image"
            />
            <Motion.div className="idp-preview__intro-points" variants={staggerContainer}>
              {previewData.intro.points.map((point) => (
                <Motion.article key={point.title} className="idp-preview__intro-point" variants={staggerChild}>
                  <CheckCircle2 size={18} />
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </Motion.article>
              ))}
            </Motion.div>
          </Motion.div>
        </div>
      </Section>

      <Section className="idp-preview__section idp-preview__section--cream" id="services">
        <div className="idp-preview__shell">
          <div className="idp-preview__section-heading">
            <span className="idp-preview__section-kicker">Signature Services</span>
            <h2>Built around smile confidence, backed by full-scope care.</h2>
            <p>
              The concept leads with cosmetic appeal, then keeps restorative, emergency, and family
              care close enough to make the overall offer feel complete.
            </p>
          </div>

          <Motion.div
            className="idp-preview__services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.services.map((service) => {
              const Icon = service.icon
              return (
                <Motion.article key={service.title} className="idp-preview__service-card" variants={staggerChild}>
                  <img src={service.image} alt={service.title} className="idp-preview__service-image" />
                  <div className="idp-preview__service-body">
                    <div className="idp-preview__service-icon">
                      <Icon size={18} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </Motion.article>
              )
            })}
          </Motion.div>
        </div>
      </Section>

      <Section className="idp-preview__section idp-preview__section--white" id="doctor">
        <div className="idp-preview__shell idp-preview__doctor-grid">
          <Motion.div className="idp-preview__doctor-copy" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <Motion.span className="idp-preview__section-kicker" variants={staggerChild}>
              {previewData.doctor.kicker}
            </Motion.span>
            <Motion.h2 variants={staggerChild}>{previewData.doctor.heading}</Motion.h2>
            <Motion.p variants={staggerChild}>{previewData.doctor.body}</Motion.p>

            <Motion.ul className="idp-preview__credential-list" variants={staggerContainer}>
              {previewData.doctor.credentials.map((item) => (
                <Motion.li key={item} variants={staggerChild}>
                  <BadgeCheck size={17} />
                  <span>{item}</span>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.div>

          <Motion.div className="idp-preview__doctor-visual" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.13 }}>
            <img src={doctorImage} alt="Dental doctor portrait" className="idp-preview__doctor-image" />
            <div className="idp-preview__doctor-note">
              <span>Plano-based care</span>
              <strong>Small-team warmth with a more premium cosmetic lens.</strong>
            </div>
          </Motion.div>
        </div>
      </Section>

      <Section className="idp-preview__section idp-preview__section--feature">
        <div className="idp-preview__shell idp-preview__feature-grid">
          <div className="idp-preview__feature-copy">
            <span className="idp-preview__section-kicker idp-preview__section-kicker--light">
              {previewData.technology.kicker}
            </span>
            <h2>{previewData.technology.heading}</h2>
            <p>{previewData.technology.description}</p>
            <img src={technologyImage} alt="Modern dental technology" className="idp-preview__feature-image" />
          </div>

          <Motion.div
            className="idp-preview__feature-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.technology.cards.map((item) => (
              <Motion.article key={item.title} className="idp-preview__feature-card" variants={staggerChild}>
                <ShieldCheck size={18} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            ))}
            <Motion.article className="idp-preview__feature-card idp-preview__feature-card--image" variants={staggerChild}>
              <img src={comfortImage} alt="Comfort-first dental visit" />
            </Motion.article>
          </Motion.div>
        </div>
      </Section>

      <Section className="idp-preview__section idp-preview__section--white">
        <div className="idp-preview__shell">
          <div className="idp-preview__section-heading">
            <span className="idp-preview__section-kicker">{previewData.proof.kicker}</span>
            <h2>{previewData.proof.heading}</h2>
            <p>
              Instead of invented patient quotes, this concept uses the themes already reinforced by the
              live review pages and overall site messaging.
            </p>
          </div>

          <Motion.div
            className="idp-preview__proof-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.proof.themes.map((theme) => (
              <Motion.article key={theme.title} className="idp-preview__proof-card" variants={staggerChild}>
                <StarRow />
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
                <span>Common feedback theme</span>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </Section>

      <Section className="idp-preview__section idp-preview__section--cream">
        <div className="idp-preview__shell idp-preview__access-grid">
          <div className="idp-preview__access-copy">
            <span className="idp-preview__section-kicker">{previewData.access.kicker}</span>
            <h2>{previewData.access.heading}</h2>
            <p>{previewData.access.description}</p>

            <div className="idp-preview__carrier-pills">
              {previewData.access.carriers.map((carrier) => (
                <span key={carrier}>{carrier}</span>
              ))}
            </div>
          </div>

          <Motion.div
            className="idp-preview__steps"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.access.steps.map((step, index) => (
              <Motion.article key={step.title} className="idp-preview__step-card" variants={staggerChild}>
                <div className="idp-preview__step-index">0{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </Section>

      <Section className="idp-preview__section idp-preview__section--white" id="contact">
        <div className="idp-preview__shell idp-preview__contact-grid">
          <div className="idp-preview__contact-copy">
            <span className="idp-preview__section-kicker">{previewData.contact.kicker}</span>
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.description}</p>

            <div className="idp-preview__contact-items">
              <div className="idp-preview__contact-item">
                <Phone size={17} />
                <div>
                  <strong>Phone</strong>
                  <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
                </div>
              </div>
              <div className="idp-preview__contact-item">
                <MapPin size={17} />
                <div>
                  <strong>Address</strong>
                  <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                    {previewData.addressLines[0]}
                    <br />
                    {previewData.addressLines[1]}
                  </a>
                </div>
              </div>
              <div className="idp-preview__contact-item">
                <Clock3 size={17} />
                <div>
                  <strong>Hours</strong>
                  {previewData.hours.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="idp-preview__contact-card">
            <span className="idp-preview__card-kicker">Concept CTA</span>
            <h3>Show a more elegant conversion layer.</h3>
            <p>
              The preview keeps the actions simple and believable: call the office, email the team, or
              pull directions before a visit.
            </p>

            <div className="idp-preview__contact-actions">
              <a href={previewData.phoneHref} className="idp-preview__button idp-preview__button--primary">
                Call the office
              </a>
              <a href={previewData.emailHref} className="idp-preview__button idp-preview__button--secondary">
                Email the team
              </a>
            </div>

            <a
              href={previewData.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="idp-preview__map-card"
            >
              <div>
                <span>Get directions</span>
                <strong>
                  {previewData.addressLines[0]}, {previewData.addressLines[1]}
                </strong>
              </div>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Section>

      <footer className="idp-preview__footer">
        <div className="idp-preview__shell idp-preview__footer-shell">
          <div className="idp-preview__footer-brand">
            <span className="idp-preview__footer-mark">Independence Dental</span>
            <p>
              A bright boutique cosmetic concept for a Plano practice already trusted for emergency,
              restorative, family, and smile-focused care.
            </p>
          </div>

          <div className="idp-preview__footer-meta">
            <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
            <a href={previewData.emailHref}>{previewData.email}</a>
            <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
              Plano, Texas
            </a>
          </div>

          <div className="idp-preview__footer-social">
            <a href={previewData.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href={previewData.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href={previewData.socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </footer>

      <div className="idp-preview__mobile-rail">
        <a href={previewData.phoneHref} className="idp-preview__rail-button idp-preview__rail-button--ghost">
          <Phone size={15} />
          Call
        </a>
        <a href="#contact" className="idp-preview__rail-button idp-preview__rail-button--primary">
          Book
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default IndependenceDentalPlanoPreview
