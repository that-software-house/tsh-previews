import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarDays,
  CirclePlay,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './NorthDallasSmilesPreview.css'

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
  Smile,
  ShieldCheck,
  Stethoscope,
}

const previewData = {
  slug: 'north-dallas-smiles',
  brandMark: 'NDS',
  businessName: 'North Dallas Smiles',
  tagline: 'Your Dream Dental Experience Awaits',
  phoneDisplay: '(972) 233-9399',
  phoneHref: 'tel:+19722339399',
  email: 'info@northdallassmiles.com',
  emailHref: 'mailto:info@northdallassmiles.com',
  address: '17194 Preston Rd., Ste 224, Dallas, TX 75248',
  mapsHref:
    'https://maps.google.com/maps?q=17194%20Preston%20Rd.%2C%20Ste%20224%20Dallas%2C%20TX%2075248&t=m&z=15&output=embed&iwloc=near',
  instagram: 'https://www.instagram.com/northdallassmiles/',
  seo: {
    title: 'North Dallas Smiles | Dallas Dental Care',
    description:
      'North Dallas Smiles offers gentle, modern general and cosmetic dentistry in Dallas, including cleanings, Invisalign, and emergency visits.',
  },
  accessibility: {
    navAriaLabel: 'Primary navigation',
    heroImageAlt: 'Doctor in a modern dental office',
    heroRatingAria: 'Patient ratings',
    heroBadgeAria: 'Practice trust badge',
    mobileRailAria: 'Quick actions',
  },
  nav: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Why Patients Choose Us', href: '#feature' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Book Your Visit',
  },
  hero: {
    eyebrow: 'General and Cosmetic Dentistry in Dallas',
    headline: 'Your Dream Dental Experience Awaits',
    body: 'Top-rated dentist in Dallas offering gentle, modern care for the whole family, from cleanings and exams to smile makeovers and emergency visits.',
    primaryCta: 'Book Your Visit',
    secondaryCta: 'Explore Services',
    secondaryHref: '#services',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80',
    gradientStart: 'rgba(247, 250, 248, 0.98)',
    gradientEnd: 'rgba(230, 244, 239, 0.84)',
    ratingCard: {
      rating: '4.9/5',
      label: 'Google-rated care',
      detail: 'Hundreds of happy Dallas patients',
    },
    badgeCard: {
      title: 'Compassionate, Modern Care',
      detail: 'Honors-trained doctor with a comfort-first approach',
    },
    chips: [
      'Same-day emergency support',
      'Invisalign and smile makeovers',
      'Family-friendly appointments',
    ],
  },
  services: {
    kicker: 'Our Services',
    heading: 'Complete dental care in one welcoming office.',
    body: 'Whether you need a routine cleaning or a full smile makeover, your care plan is built around your comfort and your long-term oral health.',
    items: [
      {
        icon: 'Sparkles',
        title: 'Preventive and General Care',
        description: 'Exams, cleanings, digital imaging, and gentle treatment that keeps your smile healthy all year long.',
      },
      {
        icon: 'Smile',
        title: 'Cosmetic Dentistry',
        description: 'Veneers, whitening, and personalized smile improvements designed to look natural and feel like you.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Urgent and Restorative Visits',
        description: 'Fast help for dental emergencies plus fillings, crowns, and repairs that restore strength and comfort.',
      },
    ],
  },
  feature: {
    kicker: 'Why Patients Choose North Dallas Smiles',
    headline: 'Care that feels calm, clear, and personal from day one.',
    body: 'Dr. Ezinwanne Ejesieme and the team take time to listen, explain your options, and make every step of care stress-free in a modern setting.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist reviewing treatment plan with a patient in a bright exam room',
    secondaryHeadline: 'Modern treatment options for healthier smiles and more confidence.',
    secondaryBody: 'From Invisalign to cosmetic enhancements and emergency treatment, your visits are centered on comfort, clear communication, and results you can feel good about.',
    secondaryImage:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    secondaryImageAlt: 'Modern dental clinic room with technology and natural lighting',
  },
  clinicFeatures: {
    kicker: 'In-Office Experience',
    items: [
      {
        icon: 'Stethoscope',
        title: 'Comprehensive Consults',
        description: 'You get clear answers and a plan tailored to your goals.',
      },
      {
        icon: 'Sparkles',
        title: 'Modern Techniques',
        description: 'Comfortable appointments with up-to-date dental technology.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Gentle Approach',
        description: 'Every visit is designed to reduce stress and build confidence.',
      },
      {
        icon: 'Smile',
        title: 'Smile-Focused Results',
        description: 'Treatments that protect health while improving appearance.',
      },
    ],
  },
  process: {
    kicker: 'See The Process',
    heading: 'A friendly step-by-step experience at every appointment.',
    body: 'From your first exam to your treatment plan, each step is clearly explained so you can feel comfortable and informed.',
    cards: [
      {
        title: 'Your First Visit',
        text: 'A complete exam, digital records, and a conversation about your goals.',
        image:
          'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Personalized Care Plan',
        text: 'Thoughtful treatment options with timing and cost explained in plain language.',
        image:
          'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  ctaBand: {
    heading: 'Ready to enjoy a more comfortable dental visit?',
    body: 'Call North Dallas Smiles to schedule your appointment and get the friendly, high-quality care your smile deserves.',
    primaryCta: 'Call (972) 233-9399',
    secondaryCta: 'Get Directions',
    image:
      'https://images.unsplash.com/photo-1629909615957-be2a5004948c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Smiling patient speaking with a dentist after a successful visit',
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'Dallas patients love their care at North Dallas Smiles.',
    items: [
      {
        author: 'Cynthia Boro',
        quote: 'I had such a great experience! Definitely coming back!!!!',
        avatar:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
      },
      {
        author: 'Michael Dukes',
        quote: 'North Dallas Smiles provides great service and excellent care during cleanings. Fast, efficient, and highly professional!',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
      },
      {
        author: 'Jewell Whitlowe',
        quote: 'Absolutely, one of the best experiences I have ever had at a dentist office.',
        avatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  contact: {
    heading: 'Visit North Dallas Smiles',
    body: 'We are conveniently located on Preston Road in North Dallas and welcome new patients of all ages.',
    hoursHeading: 'Office Hours',
    hoursCta: 'Confirm Appointment Times',
    hours: [
      'Monday: Call for available times',
      'Tuesday: Call for available times',
      'Wednesday: Call for available times',
      'Thursday: Call for available times',
      'Friday: Call for available times',
    ],
    quickLinks: [
      { label: '(972) 233-9399', href: 'tel:+19722339399' },
      { label: 'info@northdallassmiles.com', href: 'mailto:info@northdallassmiles.com' },
      { label: 'Instagram', href: 'https://www.instagram.com/northdallassmiles/' },
    ],
  },
  footer: {
    text: 'North Dallas Smiles',
    subtext: 'Warm, modern dental care for Dallas families.',
    socialCta: 'Follow on Instagram',
  },
  mobileRail: {
    callLabel: 'Call',
    primaryLabel: 'Call (972) 233-9399',
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`nds-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="nds-preview__shell">{children}</div>
    </Motion.section>
  )
}

function NorthDallasSmilesPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: previewData.seo.title,
    description: previewData.seo.description,
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/north-dallas-smiles',
    openGraph: {
      title: 'North Dallas Smiles',
      description: previewData.hero.body,
      url: 'https://preview.thatsoftwarehouse.com/north-dallas-smiles',
      image: previewData.hero.image,
    },
  })

  useEffect(() => {
    const onScroll = () => {
      setNavSolid(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="nds-preview" id="top">
      <header className={`nds-preview__nav ${navSolid ? 'nds-preview__nav--solid' : ''}`}>
        <div className="nds-preview__shell nds-preview__nav-inner">
          <a href="#top" className="nds-preview__brand" aria-label={previewData.businessName}>
            <span className="nds-preview__brand-mark">{previewData.brandMark}</span>
            <span className="nds-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="nds-preview__nav-links" aria-label={previewData.accessibility.navAriaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nds-preview__nav-cta" href={previewData.phoneHref}>
            {previewData.nav.cta}
          </a>
        </div>
      </header>

      <Motion.section
        id="hero"
        className="nds-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `linear-gradient(140deg, ${previewData.hero.gradientStart} 0%, ${previewData.hero.gradientEnd} 100%)`,
        }}
      >
        <div className="nds-preview__shell nds-preview__hero-shell">
          <div className="nds-preview__hero-copy">
            <Motion.p className="nds-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="nds-preview__hero-body" variants={staggerChild}>
              {previewData.hero.body}
            </Motion.p>

            <Motion.div className="nds-preview__hero-actions" variants={staggerChild}>
              <a className="nds-preview__btn nds-preview__btn--primary" href={previewData.phoneHref}>
                {previewData.hero.primaryCta}
              </a>
              <a className="nds-preview__btn nds-preview__btn--outline" href={previewData.hero.secondaryHref}>
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>
          </div>

          <Motion.div className="nds-preview__hero-media" variants={staggerChild}>
            <img
              src={previewData.hero.image}
              alt={previewData.accessibility.heroImageAlt}
              className="nds-preview__hero-image"
              loading="eager"
            />

            <article className="nds-preview__overlay-card nds-preview__overlay-card--rating" aria-label={previewData.accessibility.heroRatingAria}>
              <div className="nds-preview__stars" aria-hidden>
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <strong>{previewData.hero.ratingCard.rating}</strong>
              <p>{previewData.hero.ratingCard.label}</p>
              <small>{previewData.hero.ratingCard.detail}</small>
            </article>

            <article className="nds-preview__overlay-card nds-preview__overlay-card--badge" aria-label={previewData.accessibility.heroBadgeAria}>
              <ShieldCheck size={18} />
              <div>
                <strong>{previewData.hero.badgeCard.title}</strong>
                <p>{previewData.hero.badgeCard.detail}</p>
              </div>
            </article>
          </Motion.div>
        </div>

        <div className="nds-preview__shell">
          <Motion.div
            className="nds-preview__transition-chips"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.hero.chips.map((chip) => (
              <Motion.span key={chip} className="nds-preview__chip" variants={staggerChild}>
                <Sparkles size={14} />
                {chip}
              </Motion.span>
            ))}
          </Motion.div>
        </div>
      </Motion.section>

      <Section id="services" className="nds-preview__section--services">
        <Motion.div
          className="nds-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="nds-preview__kicker">{previewData.services.kicker}</p>
          <h2>{previewData.services.heading}</h2>
          <p>{previewData.services.body}</p>
        </Motion.div>

        <Motion.div
          className="nds-preview__services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.services.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="nds-preview__service-card" variants={staggerChild}>
                <span className="nds-preview__service-icon">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="feature" className="nds-preview__section--feature">
        <div className="nds-preview__feature-panel">
          <div className="nds-preview__feature-row nds-preview__feature-row--primary">
            <Motion.div
              className="nds-preview__feature-copy"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <p className="nds-preview__kicker">{previewData.feature.kicker}</p>
              <h2>{previewData.feature.headline}</h2>
              <p>{previewData.feature.body}</p>
            </Motion.div>
            <Motion.div
              className="nds-preview__feature-image-wrap"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <img src={previewData.feature.image} alt={previewData.feature.imageAlt} className="nds-preview__feature-image" loading="lazy" />
            </Motion.div>
          </div>

          <div className="nds-preview__feature-row nds-preview__feature-row--secondary">
            <Motion.div
              className="nds-preview__feature-image-wrap"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <img
                src={previewData.feature.secondaryImage}
                alt={previewData.feature.secondaryImageAlt}
                className="nds-preview__feature-image"
                loading="lazy"
              />
            </Motion.div>
            <Motion.div
              className="nds-preview__feature-copy"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <h3>{previewData.feature.secondaryHeadline}</h3>
              <p>{previewData.feature.secondaryBody}</p>
            </Motion.div>
          </div>
        </div>
      </Section>

      <Section id="clinic-features" className="nds-preview__section--clinic-features">
        <Motion.div
          className="nds-preview__section-head nds-preview__section-head--compact"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="nds-preview__kicker">{previewData.clinicFeatures.kicker}</p>
        </Motion.div>

        <Motion.div
          className="nds-preview__clinic-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.clinicFeatures.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="nds-preview__clinic-item" variants={staggerChild}>
                <span className="nds-preview__clinic-icon">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="video-process" className="nds-preview__section--process">
        <Motion.div
          className="nds-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="nds-preview__kicker">{previewData.process.kicker}</p>
          <h2>{previewData.process.heading}</h2>
          <p>{previewData.process.body}</p>
        </Motion.div>

        <Motion.div
          className="nds-preview__process-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.process.cards.map((card) => (
            <Motion.article key={card.title} className="nds-preview__process-card" variants={staggerChild}>
              <div className="nds-preview__process-image-wrap">
                <img src={card.image} alt={card.title} className="nds-preview__process-image" loading="lazy" />
                <span className="nds-preview__play-badge" aria-hidden>
                  <CirclePlay size={18} />
                </span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="cta-band" className="nds-preview__section--cta">
        <div className="nds-preview__cta-band">
          <Motion.div
            className="nds-preview__cta-copy"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
            <div className="nds-preview__cta-actions">
              <a className="nds-preview__btn nds-preview__btn--primary" href={previewData.phoneHref}>
                {previewData.ctaBand.primaryCta}
              </a>
              <a className="nds-preview__btn nds-preview__btn--outline" href={previewData.mapsHref} target="_blank" rel="noreferrer">
                {previewData.ctaBand.secondaryCta}
              </a>
            </div>
          </Motion.div>

          <Motion.div
            className="nds-preview__cta-image-wrap"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={previewData.ctaBand.image} alt={previewData.ctaBand.imageAlt} className="nds-preview__cta-image" loading="lazy" />
          </Motion.div>
        </div>
      </Section>

      <Section id="testimonials" className="nds-preview__section--testimonials">
        <Motion.div
          className="nds-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="nds-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </Motion.div>

        <Motion.div
          className="nds-preview__testimonial-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.author} className="nds-preview__testimonial-card" variants={staggerChild}>
              <div className="nds-preview__stars" aria-hidden>
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p>"{item.quote}"</p>
              <div className="nds-preview__testimonial-patient">
                <img src={item.avatar} alt={item.author} loading="lazy" />
                <strong>{item.author}</strong>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="contact" className="nds-preview__section--contact">
        <div className="nds-preview__contact-grid">
          <Motion.div
            className="nds-preview__contact-info"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.body}</p>

            <a href={previewData.mapsHref} target="_blank" rel="noreferrer" className="nds-preview__contact-link">
              <MapPin size={16} />
              <span>{previewData.address}</span>
            </a>
            <a href={previewData.phoneHref} className="nds-preview__contact-link">
              <Phone size={16} />
              <span>{previewData.phoneDisplay}</span>
            </a>
            <a href={previewData.emailHref} className="nds-preview__contact-link">
              <ArrowRight size={16} />
              <span>{previewData.email}</span>
            </a>

            <div className="nds-preview__contact-quick-links">
              {previewData.contact.quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Motion.div>

          <Motion.aside
            className="nds-preview__hours-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h3>{previewData.contact.hoursHeading}</h3>
            <ul>
              {previewData.contact.hours.map((item) => (
                <li key={item}>
                  <Clock3 size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={previewData.phoneHref} className="nds-preview__hours-cta">
              <CalendarDays size={16} />
              {previewData.contact.hoursCta}
            </a>
          </Motion.aside>
        </div>
      </Section>

      <footer className="nds-preview__footer">
        <div className="nds-preview__shell nds-preview__footer-inner">
          <div>
            <strong>{previewData.footer.text}</strong>
            <p>{previewData.footer.subtext}</p>
          </div>
          <a href={previewData.instagram} target="_blank" rel="noreferrer" className="nds-preview__footer-link">
            {previewData.footer.socialCta}
          </a>
        </div>
      </footer>

      <div className="nds-preview__mobile-rail" role="navigation" aria-label={previewData.accessibility.mobileRailAria}>
        <a className="nds-preview__rail-btn nds-preview__rail-btn--ghost" href={previewData.phoneHref}>
          <Phone size={15} />
          {previewData.mobileRail.callLabel}
        </a>
        <a className="nds-preview__rail-btn nds-preview__rail-btn--primary" href="#contact">
          {previewData.mobileRail.primaryLabel}
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default NorthDallasSmilesPreview
