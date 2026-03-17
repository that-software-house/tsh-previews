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
import './KnoxDentalPreview.css'

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
  slug: 'knox-dental',
  brandMark: 'KD',
  businessName: 'Knox Dental',
  tagline: 'Your Home for Quality Dentistry',
  phoneDisplay: '(214) 521-6261',
  phoneHref: 'tel:+12145216261',
  email: 'Request Appointment Form',
  emailHref: 'https://dentistoaklawndallas.com/contact-us/',
  address: '4514 Cole Ave, Ste 905, Dallas, TX 75205',
  mapsHref: 'https://maps.app.goo.gl/ZiZUKEUMGDiq8agY6',
  instagram: 'https://www.facebook.com/profile.php?id=61552286566257',
  seo: {
    title: 'Knox Dental | Dentist Oak Lawn Dallas',
    description:
      'Knox Dental in Oak Lawn offers personalized preventive, cosmetic, restorative, implant, and sleep-focused dental care led by Dr. Jonathan Vogel.',
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
      { label: 'Technology', href: '#feature' },
      { label: 'Why Patients Choose Us', href: '#clinic-features' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Request Appointment',
  },
  hero: {
    eyebrow: 'Dentist Oak Lawn Dallas',
    headline: 'Welcome to Knox Dental',
    body: 'Dr. Jonathan Vogel and the Knox Dental team provide personalized, comfort-first dentistry with a full range of services to support your oral and overall health.',
    primaryCta: 'Call (214) 521-6261',
    secondaryCta: 'See Services',
    secondaryHref: '#services',
    image:
      'https://images.unsplash.com/photo-1629909615957-be2a5004948c?auto=format&fit=crop&w=1400&q=80',
    gradientStart: 'rgba(244, 249, 248, 0.98)',
    gradientEnd: 'rgba(226, 245, 239, 0.84)',
    ratingCard: {
      rating: '5.0/5',
      label: '5-star patient reviews',
      detail: 'Trusted by Oak Lawn and Dallas families',
    },
    badgeCard: {
      title: 'Led by Dr. Jonathan Vogel',
      detail: 'Compassionate care with modern dental technology',
    },
    chips: [
      'Personalized treatment plans',
      'Sleep and snoring support',
      'General, cosmetic, and implant care',
    ],
  },
  services: {
    kicker: 'Our Services',
    heading: 'Comprehensive dental care for all your needs.',
    body: 'From routine preventive visits to advanced smile restoration, every treatment is tailored to your goals and built around long-term comfort.',
    items: [
      {
        icon: 'Sparkles',
        title: 'Preventive Dentistry',
        description: 'Comprehensive exams, professional cleanings, and digital X-rays help protect your smile before problems grow.',
      },
      {
        icon: 'Smile',
        title: 'Restorative and Cosmetic Care',
        description: 'Fillings, crowns, bridges, veneers, whitening, and clear aligner options restore both function and confidence.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Implant and Sleep Solutions',
        description: 'Dental implants, dentures, and sleep-focused dentistry support healthier breathing, better sleep, and lasting comfort.',
      },
    ],
  },
  feature: {
    kicker: 'Why Patients Choose Knox Dental',
    headline: 'Personalized dentistry for a lifetime of healthy smiles.',
    body: 'Every patient receives thoughtful, one-on-one care. Dr. Jonathan Vogel and the team take time to understand your goals and build treatment plans that fit your needs.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dentist reviewing treatment plan with a patient in a bright exam room',
    secondaryHeadline: 'Advanced technology to enhance comfort and care.',
    secondaryBody: 'Knox Dental uses modern tools such as digital imaging and less-invasive techniques to deliver precise treatment, faster answers, and a smoother in-chair experience.',
    secondaryImage:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    secondaryImageAlt: 'Modern dental clinic room with technology and natural lighting',
  },
  clinicFeatures: {
    kicker: 'In-Office Experience',
    items: [
      {
        icon: 'Stethoscope',
        title: 'Comprehensive Consultations',
        description: 'Clear explanations and custom treatment paths based on your priorities.',
      },
      {
        icon: 'Sparkles',
        title: 'Continuous Education',
        description: 'A team committed to ongoing training so your care reflects current best practices.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Comfort-First Care',
        description: 'A calm approach for patients with anxiety, including options to help visits feel easier.',
      },
      {
        icon: 'Smile',
        title: 'Community-Focused Team',
        description: 'A local Dallas practice dedicated to long-term patient relationships.',
      },
    ],
  },
  process: {
    kicker: 'What To Expect',
    heading: 'A supportive, step-by-step experience from first visit to final results.',
    body: 'Your care starts with listening, diagnosis, and practical options so you always know what comes next.',
    cards: [
      {
        title: 'Personalized First Visit',
        text: 'A comprehensive exam, digital diagnostics, and a conversation about your concerns and goals.',
        image:
          'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Tailored Treatment Plan',
        text: 'Your options are clearly explained so you can choose care that fits your health, timing, and budget.',
        image:
          'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  ctaBand: {
    heading: 'Looking for a new dentist in Oak Lawn?',
    body: 'We welcome you to Knox Dental. Reach out to schedule your appointment and take the first step toward a healthier, more confident smile.',
    primaryCta: 'Call (214) 521-6261',
    secondaryCta: 'Get Directions',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Smiling patient speaking with a dentist after a successful visit',
  },
  testimonials: {
    kicker: 'Patient Reviews',
    heading: 'Real feedback from Knox Dental patients.',
    items: [
      {
        author: 'david reed',
        quote: 'Excellent service, knowledgeable and friendly staff and doctor. Makes going to the dentist a pleasant experience.',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
      },
      {
        author: 'Mari J.',
        quote:
          'Everyone is so nice and attentive to your needs. Also best music in a dentist office ever. I love it here.',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
      },
      {
        author: 'Ricardo Lopez',
        quote:
          'Dr. Vogel is incredibly knowledgeable and friendly, and the whole staff is professional and welcoming from start to finish.',
        avatar:
          'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  contact: {
    heading: 'Visit Knox Dental in Oak Lawn',
    body: "You can find us at 4514 Cole Ave, Ste 905, across the street from Trader Joe's. New patients are always welcome.",
    hoursHeading: 'Office Hours',
    hoursCta: 'Request an Appointment',
    hours: [
      'Monday: 8:00 AM - 5:00 PM',
      'Tuesday: 8:00 AM - 5:00 PM',
      'Wednesday: 8:00 AM - 5:00 PM',
      'Thursday: 8:00 AM - 5:00 PM',
      'Friday: 8:00 AM - 1:00 PM',
      'Saturday: Closed',
      'Sunday: Closed',
    ],
    quickLinks: [
      { label: '(214) 521-6261', href: 'tel:+12145216261' },
      { label: 'Appointment Form', href: 'https://dentistoaklawndallas.com/contact-us/' },
      { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61552286566257' },
    ],
  },
  footer: {
    text: 'Knox Dental',
    subtext: 'Dentist Oak Lawn Dallas with modern, patient-first care.',
    socialCta: 'Follow on Facebook',
  },
  mobileRail: {
    callLabel: 'Call',
    primaryLabel: 'Request Appointment',
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={`kd-preview__section ${className}`.trim()}
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.13 }}
    >
      <div className="kd-preview__shell">{children}</div>
    </Motion.section>
  )
}

function KnoxDentalPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: previewData.seo.title,
    description: previewData.seo.description,
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/knox-dental',
    openGraph: {
      title: 'Knox Dental',
      description: previewData.hero.body,
      url: 'https://preview.thatsoftwarehouse.com/knox-dental',
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
    <main className="kd-preview" id="top">
      <header className={`kd-preview__nav ${navSolid ? 'kd-preview__nav--solid' : ''}`}>
        <div className="kd-preview__shell kd-preview__nav-inner">
          <a href="#top" className="kd-preview__brand" aria-label={previewData.businessName}>
            <span className="kd-preview__brand-mark">{previewData.brandMark}</span>
            <span className="kd-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.tagline}</small>
            </span>
          </a>

          <nav className="kd-preview__nav-links" aria-label={previewData.accessibility.navAriaLabel}>
            {previewData.nav.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="kd-preview__nav-cta" href={previewData.phoneHref}>
            {previewData.nav.cta}
          </a>
        </div>
      </header>

      <Motion.section
        id="hero"
        className="kd-preview__hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `linear-gradient(140deg, ${previewData.hero.gradientStart} 0%, ${previewData.hero.gradientEnd} 100%)`,
        }}
      >
        <div className="kd-preview__shell kd-preview__hero-shell">
          <div className="kd-preview__hero-copy">
            <Motion.p className="kd-preview__eyebrow" variants={staggerChild}>
              {previewData.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={staggerChild}>{previewData.hero.headline}</Motion.h1>
            <Motion.p className="kd-preview__hero-body" variants={staggerChild}>
              {previewData.hero.body}
            </Motion.p>

            <Motion.div className="kd-preview__hero-actions" variants={staggerChild}>
              <a className="kd-preview__btn kd-preview__btn--primary" href={previewData.phoneHref}>
                {previewData.hero.primaryCta}
              </a>
              <a className="kd-preview__btn kd-preview__btn--outline" href={previewData.hero.secondaryHref}>
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>
          </div>

          <Motion.div className="kd-preview__hero-media" variants={staggerChild}>
            <img
              src={previewData.hero.image}
              alt={previewData.accessibility.heroImageAlt}
              className="kd-preview__hero-image"
              loading="eager"
            />

            <article className="kd-preview__overlay-card kd-preview__overlay-card--rating" aria-label={previewData.accessibility.heroRatingAria}>
              <div className="kd-preview__stars" aria-hidden>
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

            <article className="kd-preview__overlay-card kd-preview__overlay-card--badge" aria-label={previewData.accessibility.heroBadgeAria}>
              <ShieldCheck size={18} />
              <div>
                <strong>{previewData.hero.badgeCard.title}</strong>
                <p>{previewData.hero.badgeCard.detail}</p>
              </div>
            </article>
          </Motion.div>
        </div>

        <div className="kd-preview__shell">
          <Motion.div
            className="kd-preview__transition-chips"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            {previewData.hero.chips.map((chip) => (
              <Motion.span key={chip} className="kd-preview__chip" variants={staggerChild}>
                <Sparkles size={14} />
                {chip}
              </Motion.span>
            ))}
          </Motion.div>
        </div>
      </Motion.section>

      <Section id="services" className="kd-preview__section--services">
        <Motion.div
          className="kd-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="kd-preview__kicker">{previewData.services.kicker}</p>
          <h2>{previewData.services.heading}</h2>
          <p>{previewData.services.body}</p>
        </Motion.div>

        <Motion.div
          className="kd-preview__services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.services.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="kd-preview__service-card" variants={staggerChild}>
                <span className="kd-preview__service-icon">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="feature" className="kd-preview__section--feature">
        <div className="kd-preview__feature-panel">
          <div className="kd-preview__feature-row kd-preview__feature-row--primary">
            <Motion.div
              className="kd-preview__feature-copy"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <p className="kd-preview__kicker">{previewData.feature.kicker}</p>
              <h2>{previewData.feature.headline}</h2>
              <p>{previewData.feature.body}</p>
            </Motion.div>
            <Motion.div
              className="kd-preview__feature-image-wrap"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <img src={previewData.feature.image} alt={previewData.feature.imageAlt} className="kd-preview__feature-image" loading="lazy" />
            </Motion.div>
          </div>

          <div className="kd-preview__feature-row kd-preview__feature-row--secondary">
            <Motion.div
              className="kd-preview__feature-image-wrap"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.13 }}
            >
              <img
                src={previewData.feature.secondaryImage}
                alt={previewData.feature.secondaryImageAlt}
                className="kd-preview__feature-image"
                loading="lazy"
              />
            </Motion.div>
            <Motion.div
              className="kd-preview__feature-copy"
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

      <Section id="clinic-features" className="kd-preview__section--clinic-features">
        <Motion.div
          className="kd-preview__section-head kd-preview__section-head--compact"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="kd-preview__kicker">{previewData.clinicFeatures.kicker}</p>
        </Motion.div>

        <Motion.div
          className="kd-preview__clinic-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.clinicFeatures.items.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <Motion.article key={item.title} className="kd-preview__clinic-item" variants={staggerChild}>
                <span className="kd-preview__clinic-icon">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Section>

      <Section id="video-process" className="kd-preview__section--process">
        <Motion.div
          className="kd-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="kd-preview__kicker">{previewData.process.kicker}</p>
          <h2>{previewData.process.heading}</h2>
          <p>{previewData.process.body}</p>
        </Motion.div>

        <Motion.div
          className="kd-preview__process-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.process.cards.map((card) => (
            <Motion.article key={card.title} className="kd-preview__process-card" variants={staggerChild}>
              <div className="kd-preview__process-image-wrap">
                <img src={card.image} alt={card.title} className="kd-preview__process-image" loading="lazy" />
                <span className="kd-preview__play-badge" aria-hidden>
                  <CirclePlay size={18} />
                </span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="cta-band" className="kd-preview__section--cta">
        <div className="kd-preview__cta-band">
          <Motion.div
            className="kd-preview__cta-copy"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.ctaBand.heading}</h2>
            <p>{previewData.ctaBand.body}</p>
            <div className="kd-preview__cta-actions">
              <a className="kd-preview__btn kd-preview__btn--primary" href={previewData.phoneHref}>
                {previewData.ctaBand.primaryCta}
              </a>
              <a className="kd-preview__btn kd-preview__btn--outline" href={previewData.mapsHref} target="_blank" rel="noreferrer">
                {previewData.ctaBand.secondaryCta}
              </a>
            </div>
          </Motion.div>

          <Motion.div
            className="kd-preview__cta-image-wrap"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <img src={previewData.ctaBand.image} alt={previewData.ctaBand.imageAlt} className="kd-preview__cta-image" loading="lazy" />
          </Motion.div>
        </div>
      </Section>

      <Section id="testimonials" className="kd-preview__section--testimonials">
        <Motion.div
          className="kd-preview__section-head"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          <p className="kd-preview__kicker">{previewData.testimonials.kicker}</p>
          <h2>{previewData.testimonials.heading}</h2>
        </Motion.div>

        <Motion.div
          className="kd-preview__testimonial-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.13 }}
        >
          {previewData.testimonials.items.map((item) => (
            <Motion.article key={item.author} className="kd-preview__testimonial-card" variants={staggerChild}>
              <div className="kd-preview__stars" aria-hidden>
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p>"{item.quote}"</p>
              <div className="kd-preview__testimonial-patient">
                <img src={item.avatar} alt={item.author} loading="lazy" />
                <strong>{item.author}</strong>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </Section>

      <Section id="contact" className="kd-preview__section--contact">
        <div className="kd-preview__contact-grid">
          <Motion.div
            className="kd-preview__contact-info"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.13 }}
          >
            <h2>{previewData.contact.heading}</h2>
            <p>{previewData.contact.body}</p>

            <a href={previewData.mapsHref} target="_blank" rel="noreferrer" className="kd-preview__contact-link">
              <MapPin size={16} />
              <span>{previewData.address}</span>
            </a>
            <a href={previewData.phoneHref} className="kd-preview__contact-link">
              <Phone size={16} />
              <span>{previewData.phoneDisplay}</span>
            </a>
            <a href={previewData.emailHref} className="kd-preview__contact-link">
              <ArrowRight size={16} />
              <span>{previewData.email}</span>
            </a>

            <div className="kd-preview__contact-quick-links">
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
            className="kd-preview__hours-card"
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
            <a href={previewData.phoneHref} className="kd-preview__hours-cta">
              <CalendarDays size={16} />
              {previewData.contact.hoursCta}
            </a>
          </Motion.aside>
        </div>
      </Section>

      <footer className="kd-preview__footer">
        <div className="kd-preview__shell kd-preview__footer-inner">
          <div>
            <strong>{previewData.footer.text}</strong>
            <p>{previewData.footer.subtext}</p>
          </div>
          <a href={previewData.instagram} target="_blank" rel="noreferrer" className="kd-preview__footer-link">
            {previewData.footer.socialCta}
          </a>
        </div>
      </footer>

      <div className="kd-preview__mobile-rail" role="navigation" aria-label={previewData.accessibility.mobileRailAria}>
        <a className="kd-preview__rail-btn kd-preview__rail-btn--ghost" href={previewData.phoneHref}>
          <Phone size={15} />
          {previewData.mobileRail.callLabel}
        </a>
        <a className="kd-preview__rail-btn kd-preview__rail-btn--primary" href="#contact">
          {previewData.mobileRail.primaryLabel}
        </a>
      </div>

      <FloatingCTA />
    </main>
  )
}

export default KnoxDentalPreview
