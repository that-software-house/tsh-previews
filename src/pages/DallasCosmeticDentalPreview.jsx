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
  HeartPulse,
} from 'lucide-react'
import useSEO from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './DallasCosmeticDentalPreview.css'

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
  HeartPulse,
}

const previewData = {
  slug: 'dallas-cosmetic-dental',
  brandMark: 'DCD',
  businessName: 'Dallas Cosmetic Dental',
  tagline: 'A Calm Space for Healthier Smiles',
  phoneDisplay: '(214) 494-8325',
  phoneHref: 'tel:+12144948325',
  email: 'Request Appointment',
  emailHref: 'https://dallascosmeticdental.com/contact-us/',
  address: '8226 Douglas Avenue, Suite 753, Dallas, TX 75225',
  mapsHref: 'https://maps.app.goo.gl/ZiZUKEUMGDiq8agY6',
  instagram: 'https://dallascosmeticdental.com/',
  seo: {
    title: 'Dallas Cosmetic Dental | Dr. Gary Alhadef, DDS',
    description:
      'Dallas Cosmetic Dental offers personalized cosmetic, restorative, and whole-health dentistry led by Dr. Gary Alhadef. Experience same-day crowns and stress-free care.',
  },
  accessibility: {
    navAriaLabel: 'Primary navigation',
    heroImageAlt: 'Smiling woman after a cosmetic dental treatment',
    heroRatingAria: 'Patient ratings',
    heroBadgeAria: 'Practice trust badge',
    mobileRailAria: 'Quick actions',
  },
  nav: {
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Whole Health', href: '#feature' },
      { label: 'Technology', href: '#clinic-features' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Book Online',
  },
  hero: {
    eyebrow: 'Comprehensive Care in Dallas',
    headline: 'Your Home for Whole-Health Dentistry',
    body: 'Dr. Gary Alhadef and the Dallas Cosmetic Dental team provide unhurried, stress-free care focused on your long-term wellness and a lifetime of confident smiles.',
    primaryCta: 'Call (214) 494-8325',
    secondaryCta: 'Our Services',
    secondaryHref: '#services',
    image:
      'https://images.unsplash.com/photo-1590611380053-da6447021fbb?auto=format&fit=crop&w=1400&q=80',
    gradientStart: 'rgba(244, 249, 248, 0.98)',
    gradientEnd: 'rgba(226, 245, 239, 0.84)',
    ratingCard: {
      rating: '4.9/5',
      label: 'Patient satisfaction',
      detail: 'Trusted Dallas dental experts since the 1980s',
    },
    badgeCard: {
      title: 'Led by Dr. Gary Alhadef',
      detail: 'Expertise in cosmetic and systemic health',
    },
    chips: [
      'Same-day CEREC crowns',
      'Whole-health approach',
      'Advanced laser technology',
    ],
  },
  services: {
    kicker: 'Expert Care',
    heading: 'Modern dentistry tailored to your wellness.',
    body: 'From aesthetic enhancements to restorative repairs, we utilize advanced technology to ensure every visit is gentle, precise, and unhurried.',
    items: [
      {
        icon: 'Sparkles',
        title: 'Cosmetic Artistry',
        description: 'Smile makeovers, veneers, and aesthetic contouring designed to look natural and feel great.',
      },
      {
        icon: 'HeartPulse',
        title: 'Whole-Health Dentistry',
        description: 'Treatments that recognize the link between your oral health and overall systemic wellness.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Restorative Excellence',
        description: 'Strong, durable same-day crowns and advanced repairs to restore your smile in just one visit.',
      },
    ],
  },
  feature: {
    kicker: 'The DCD Difference',
    headline: 'Personalized relationships, not just patient numbers.',
    body: 'We believe in unhurried care. That is why we set aside 75 minutes for your first visit—to listen to your goals, understand your health history, and build a lasting relationship.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dr. Gary Alhadef discussing oral health with a patient',
    secondaryHeadline: 'Advanced technology for a gentler experience.',
    secondaryBody: 'From digital imaging to soft-tissue lasers and snoring cessation treatments, we use modern tools to provide faster results and a stress-free environment.',
    secondaryImage:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    secondaryImageAlt: 'Modern high-tech dental exam room at Dallas Cosmetic Dental',
  },
  clinicFeatures: {
    kicker: 'Our Technology',
    items: [
      {
        icon: 'Sparkles',
        title: 'Same-Day Crowns',
        description: 'CEREC technology allows us to create and place strong crowns in a single visit.',
      },
      {
        icon: 'Stethoscope',
        title: 'Laser Dentistry',
        description: 'Gentle laser treatments for gum health and snoring cessation.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Sleep Solutions',
        description: 'Specialized care for snoring and sleep apnea to improve your rest and health.',
      },
      {
        icon: 'Smile',
        title: 'Family Wellness',
        description: 'Comprehensive care for every generation, from children to seniors.',
      },
    ],
  },
  process: {
    kicker: 'Your Journey',
    heading: 'An unhurried approach to your dental health.',
    body: 'We prioritize your comfort and understanding at every step of your treatment plan.',
    cards: [
      {
        title: 'The 75-Minute First Visit',
        text: 'A comprehensive evaluation where we take the time to truly understand your systemic health and goals.',
        image:
          'https://images.unsplash.com/photo-1631051103633-24959376b92d?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Customized Wellness Path',
        text: 'We create a tailored treatment plan that supports both your smile and your long-term overall wellness.',
        image:
          'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  ctaBand: {
    heading: 'Ready for a unhurried dental experience?',
    body: 'Join the Dallas Cosmetic Dental family. We look forward to helping you achieve your healthiest, most confident smile.',
    primaryCta: 'Call (214) 494-8325',
    secondaryCta: 'Visit Us',
    image:
      'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Happy patient at Dallas Cosmetic Dental',
  },
  testimonials: {
    kicker: 'Patient Success',
    heading: 'Kind words from our valued patients.',
    items: [
      {
        author: 'Sarah M.',
        quote: 'Dr. Alhadef is a magician! I never thought my smile could look this natural. The team is so welcoming and gentle.',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
      },
      {
        author: 'Robert L.',
        quote:
          'The same-day crown was a lifesaver. No temporary, no second visit. Just professional, high-tech care that respects my time.',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
      },
      {
        author: 'Jennifer T.',
        quote:
          'I love the whole-health approach. It makes so much sense that my dental health affects the rest of my body. Highly recommend!',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  contact: {
    heading: 'Visit Us in Dallas',
    body: "We are located in Douglas Plaza, Suite 753. We provide a calm, welcoming environment for your entire family.",
    hoursHeading: 'Office Hours',
    hoursCta: 'Schedule Visit',
    hours: [
      'Monday: 8:30 AM - 5:00 PM',
      'Tuesday: 8:30 AM - 5:00 PM',
      'Wednesday: 8:30 AM - 5:00 PM',
      'Thursday: 8:30 AM - 5:00 PM',
      'Friday: Closed',
      'Saturday: Closed',
      'Sunday: Closed',
    ],
    quickLinks: [
      { label: '(214) 494-8325', href: 'tel:+12144948325' },
      { label: 'Visit Website', href: 'https://dallascosmeticdental.com/' },
      { label: 'Patient Forms', href: 'https://dallascosmeticdental.com/patient-information/' },
    ],
  },
  footer: {
    text: 'Dallas Cosmetic Dental',
    subtext: 'Dr. Gary Alhadef, DDS | Whole-Health Dentistry in Dallas.',
    socialCta: 'Visit our Website',
  },
  mobileRail: {
    callLabel: 'Call',
    primaryLabel: 'Book Online',
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`dcd-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="dcd-preview__shell">{children}</div>
    </Motion.section>
  )
}

function DallasCosmeticDentalPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: previewData.seo.title,
    description: previewData.seo.description,
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/dallas-cosmetic-dental',
    openGraph: {
      title: 'Dallas Cosmetic Dental',
      description: previewData.hero.body,
      url: 'https://preview.thatsoftwarehouse.com/dallas-cosmetic-dental',
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
    <main className="dcd-preview" id="top">
      <header className={`dcd-preview__nav ${navSolid ? 'dcd-preview__nav--solid' : ''}`}>
        <div className="dcd-preview__shell dcd-preview__nav-inner">
          <a href="#top" className="dcd-preview__brand" aria-label={previewData.businessName}>
            <span className="dcd-preview__brand-mark">{previewData.brandMark}</span>
            <span className="dcd-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="dcd-preview__nav-links" aria-label={previewData.accessibility.navAriaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="dcd-preview__nav-cta" href={previewData.phoneHref}>
            {previewData.nav.cta}
          </a>
        </div>
      </header>

      <Motion.section
        id="hero"
        className="dcd-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `linear-gradient(140deg, ${previewData.hero.gradientStart} 0%, ${previewData.hero.gradientEnd} 100%)`,
        }}
      >
        <div className="dcd-preview__shell dcd-preview__hero-shell">
          <div className="dcd-preview__hero-copy">
            <Motion.p className="dcd-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="dcd-preview__hero-body" variants={staggerChild}>
              {previewData.hero.body}
            </Motion.p>

            <Motion.div className="dcd-preview__hero-actions" variants={staggerChild}>
              <a className="dcd-preview__btn dcd-preview__btn--primary" href={previewData.phoneHref}>
                {previewData.hero.primaryCta}
              </a>
              <a className="dcd-preview__btn dcd-preview__btn--outline" href={previewData.hero.secondaryHref}>
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>
          </div>

          <Motion.div className="dcd-preview__hero-media" variants={staggerChild}>
            <img
              src={previewData.hero.image}
              alt={previewData.accessibility.heroImageAlt}
              className="dcd-preview__hero-image"
              loading="eager"
            />

            <article className="dcd-preview__overlay-card dcd-preview__overlay-card--rating" aria-label={previewData.accessibility.heroRatingAria}>
              <div className="dcd-preview__stars" aria-hidden>
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

            <article className="dcd-preview__overlay-card dcd-preview__overlay-card--badge" aria-label={previewData.accessibility.heroBadgeAria}>
              <ShieldCheck size={18} />
              <div>
                <strong>{previewData.hero.badgeCard.title}</strong>
                <p>{previewData.hero.badgeCard.detail}</p>
              </div>
            </article>
          </Motion.div>
        </div>

        <div className="dcd-preview__shell">
          <Motion.div
            className="dcd-preview__transition-chips"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.hero.chips.map((chip) => (
              <Motion.span key={chip} className="dcd-preview__chip" variants={staggerChild}>
                <Sparkles size={14} />
                {chip}
              </Motion.span>
            ))}
          </Motion.div>
        </div>
      </Motion.section>

      <Section id="services" className="dcd-preview__section--services">
        <Motion.div
          className="dcd-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="dcd-preview__kicker">{previewData.services.kicker}</p>
          <h2>{previewData.services.heading}</h2>
          <p>{previewData.services.body}</p>
        </Motion.div>

        <Motion.div
          className="dcd-preview__services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.services.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="dcd-preview__service-card" variants={staggerChild}>
                <span className="dcd-preview__service-icon">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="feature" className="dcd-preview__section--feature">
        <div className="dcd-preview__feature-panel">
          <div className="dcd-preview__feature-row dcd-preview__feature-row--primary">
            <Motion.div
              className="dcd-preview__feature-copy"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <p className="dcd-preview__kicker">{previewData.feature.kicker}</p>
              <h2>{previewData.feature.headline}</h2>
              <p>{previewData.feature.body}</p>
            </Motion.div>
            <Motion.div
              className="dcd-preview__feature-image-wrap"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <img src={previewData.feature.image} alt={previewData.feature.imageAlt} className="dcd-preview__feature-image" loading="lazy" />
            </Motion.div>
          </div>

          <div className="dcd-preview__feature-row dcd-preview__feature-row--secondary">
            <Motion.div
              className="dcd-preview__feature-image-wrap"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <img
                src={previewData.feature.secondaryImage}
                alt={previewData.feature.secondaryImageAlt}
                className="dcd-preview__feature-image"
                loading="lazy"
              />
            </Motion.div>
            <Motion.div
              className="dcd-preview__feature-copy"
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

      <Section id="clinic-features" className="dcd-preview__section--clinic-features">
        <Motion.div
          className="dcd-preview__section-head dcd-preview__section-head--compact"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="dcd-preview__kicker">{previewData.clinicFeatures.kicker}</p>
        </Motion.div>

        <Motion.div
          className="dcd-preview__clinic-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.clinicFeatures.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="dcd-preview__clinic-item" variants={staggerChild}>
                <span className="dcd-preview__clinic-icon">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="video-process" className="dcd-preview__section--process">
        <Motion.div
          className="dcd-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="dcd-preview__kicker">{previewData.process.kicker}</p>
          <h2>{previewData.process.heading}</h2>
          <p>{previewData.process.body}</p>
        </Motion.div>

        <Motion.div
          className="dcd-preview__process-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.process.cards.map((card) => (
            <Motion.article key={card.title} className="dcd-preview__process-card" variants={staggerChild}>
              <div className="dcd-preview__process-image-wrap">
                <img src={card.image} alt={card.title} className="dcd-preview__process-image" loading="lazy" />
                <span className="dcd-preview__play-badge" aria-hidden>
                  <CirclePlay size={18} />
                </span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="cta-band" className="dcd-preview__section--cta">
        <div className="dcd-preview__cta-band">
          <Motion.div
            className="dcd-preview__cta-copy"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
            <div className="dcd-preview__cta-actions">
              <a className="dcd-preview__btn dcd-preview__btn--primary" href={previewData.phoneHref}>
                {previewData.ctaBand.primaryCta}
              </a>
              <a className="dcd-preview__btn dcd-preview__btn--outline" href={previewData.mapsHref} target="_blank" rel="noreferrer">
                {previewData.ctaBand.secondaryCta}
              </a>
            </div>
          </Motion.div>

          <Motion.div
            className="dcd-preview__cta-image-wrap"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={previewData.ctaBand.image} alt={previewData.ctaBand.imageAlt} className="dcd-preview__cta-image" loading="lazy" />
          </Motion.div>
        </div>
      </Section>

      <Section id="testimonials" className="dcd-preview__section--testimonials">
        <Motion.div
          className="dcd-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="dcd-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </Motion.div>

        <Motion.div
          className="dcd-preview__testimonial-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.author} className="dcd-preview__testimonial-card" variants={staggerChild}>
              <div className="dcd-preview__stars" aria-hidden>
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p>"{item.quote}"</p>
              <div className="dcd-preview__testimonial-patient">
                <img src={item.avatar} alt={item.author} loading="lazy" />
                <strong>{item.author}</strong>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="contact" className="dcd-preview__section--contact">
        <div className="dcd-preview__contact-grid">
          <Motion.div
            className="dcd-preview__contact-info"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.body}</p>

            <a href={previewData.mapsHref} target="_blank" rel="noreferrer" className="dcd-preview__contact-link">
              <MapPin size={16} />
              <span>{previewData.address}</span>
            </a>
            <a href={previewData.phoneHref} className="dcd-preview__contact-link">
              <Phone size={16} />
              <span>{previewData.phoneDisplay}</span>
            </a>
            <a href={previewData.emailHref} className="dcd-preview__contact-link">
              <ArrowRight size={16} />
              <span>{previewData.email}</span>
            </a>

            <div className="dcd-preview__contact-quick-links">
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
            className="dcd-preview__hours-card"
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
            <a href={previewData.phoneHref} className="dcd-preview__hours-cta">
              <CalendarDays size={16} />
              {previewData.contact.hoursCta}
            </a>
          </Motion.aside>
        </div>
      </Section>

      <footer className="dcd-preview__footer">
        <div className="dcd-preview__shell dcd-preview__footer-inner">
          <div>
            <strong>{previewData.footer.text}</strong>
            <p>{previewData.footer.subtext}</p>
          </div>
          <a href={previewData.instagram} target="_blank" rel="noreferrer" className="dcd-preview__footer-link">
            {previewData.footer.socialCta}
          </a>
        </div>
      </footer>

      <div className="dcd-preview__mobile-rail" role="navigation" aria-label={previewData.accessibility.mobileRailAria}>
        <a className="dcd-preview__rail-btn dcd-preview__rail-btn--ghost" href={previewData.phoneHref}>
          <Phone size={15} />
          {previewData.mobileRail.callLabel}
        </a>
        <a className="dcd-preview__rail-btn dcd-preview__rail-btn--primary" href="#contact">
          {previewData.mobileRail.primaryLabel}
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default DallasCosmeticDentalPreview
