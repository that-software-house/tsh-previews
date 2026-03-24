import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sprout,
  Star,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './RiversLawnGardeningPreview.css'

const previewData = {
  slug: 'rivers-lawn-gardening',
  businessName: "River's Lawn Gardening",
  brandMark: 'RLG',
  eyebrow: 'Austin + Fort Worth lawn care',
  tagline: 'Reliable mowing, clean edges, and greener curb appeal year-round.',
  description:
    "River's Lawn Gardening delivers full-service lawn care and landscape upkeep for homeowners who want their property to look sharp without chasing crews or inconsistent scheduling.",
  websiteUrl: 'https://www.riverslawngardening.com/',
  phones: [
    { label: 'Austin', display: '(512) 738-3782', href: 'tel:+15127383782' },
    { label: 'Fort Worth', display: '(713) 505-7213', href: 'tel:+17135057213' },
  ],
  serviceAreas: ['Austin, TX', 'Fort Worth, TX', 'Surrounding communities'],
  supportHours: 'Live support daily, 7:00 AM - 7:00 PM',
  heroImage:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80',
  storyImage:
    'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
  quoteImage:
    'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
  highlights: [
    {
      number: '01',
      title: 'Total satisfaction standard',
      body: 'Every visit ends with a finished-property mindset: crisp lines, cleaned surfaces, and no rushed exits.',
    },
    {
      number: '02',
      title: 'Reliable and trustworthy crews',
      body: 'Clients know when the team is coming, what work is being handled, and what the finished result should look like.',
    },
    {
      number: '03',
      title: 'Professional seasonal support',
      body: 'Routine maintenance, mulch, shrub work, and cleanups keep the property consistent beyond a basic mow.',
    },
  ],
  services: [
    {
      name: 'Mowing',
      description:
        'Scheduled mowing that keeps the lawn evenly cut, healthy-looking, and ready for weekly curb appeal.',
      image:
        'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Edging and blowing',
      description:
        'Sharp borders and cleaned hardscape surfaces give the property a finished, professional look.',
      image:
        'https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Grass installation',
      description:
        'Fresh turf installs for bare patches, lawn upgrades, and full-yard improvement projects.',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Shrub trimming',
      description:
        'Shape, scale, and cleanup work that keeps beds tidy and helps the home read as cared for from the street.',
      image:
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Weed control and cleanup',
      description:
        'Regular cleanup support prevents overgrowth from making the yard feel neglected between visits.',
      image:
        'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Spring and fall cleanups',
      description:
        'Seasonal resets remove buildup, refresh planting areas, and prepare the landscape for the next cycle.',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Mulch installation',
      description:
        'Mulch refreshes improve definition, conserve moisture, and make beds feel intentionally maintained.',
      image:
        'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Tree planting and removal',
      description:
        'Planting for long-term landscape value and removal when safety, sightlines, or cleanup require it.',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  metrics: [
    { value: '2', label: 'Core service markets' },
    { value: '7AM-7PM', label: 'Live support window' },
    { value: '100%', label: 'Satisfaction-first promise' },
  ],
  story: {
    eyebrow: 'A greener standard',
    heading: 'Lawn care that makes the entire property feel more put together.',
    body:
      "The current business already emphasizes reliability, professionalism, and satisfaction. This preview turns that into a clearer sales story: better first impressions, stronger service proof, and a more local, premium feel for homeowners comparing crews online.",
    points: [
      'Coverage built around Austin, Fort Worth, and nearby neighborhoods.',
      'A service mix that handles weekly upkeep and higher-value seasonal projects.',
      'Clear, direct phone-driven conversion for homeowners ready to book an estimate.',
    ],
  },
  testimonials: [
    {
      quote:
        'The lawn stays manicured, the edging is clean, and the crew leaves the whole property looking finished.',
      author: 'Long-term residential client',
    },
    {
      quote:
        'Pricing felt fair, communication was easy, and the attention to detail was obvious from the first visit.',
      author: 'Homeowner in the service area',
    },
    {
      quote:
        'They helped revive the yard and then kept it consistent instead of letting it slip after the first cleanup.',
      author: 'Repeat lawn care customer',
    },
  ],
}

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

function Section({ id, className, children }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </Motion.section>
  )
}

function RiversLawnGardeningPreview() {
  const [navSolid, setNavSolid] = useState(false)

  useSEO({
    title: "River's Lawn Gardening Preview | That Software House",
    description:
      "A modern website preview for River's Lawn Gardening featuring lawn care, landscape cleanup, and estimate-focused local service positioning for Austin and Fort Worth.",
    canonicalUrl: `https://preview.thatsoftwarehouse.com/${previewData.slug}`,
    openGraph: {
      title: "River's Lawn Gardening Preview | That Software House",
      description:
        "Preview concept for River's Lawn Gardening with a stronger local-service brand, clearer CTAs, and a premium landscape-led presentation.",
      url: `https://preview.thatsoftwarehouse.com/${previewData.slug}`,
      image: previewData.heroImage,
    },
  })

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 48)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="rivers-preview">
      <header className={`rivers-preview__nav${navSolid ? ' rivers-preview__nav--solid' : ''}`}>
        <div className="rivers-preview__shell rivers-preview__nav-inner">
          <a className="rivers-preview__brand" href="#hero">
            <span className="rivers-preview__brand-mark">{previewData.brandMark}</span>
            <span className="rivers-preview__brand-copy">
              <strong>{previewData.businessName}</strong>
              <small>{previewData.eyebrow}</small>
            </span>
          </a>

          <nav className="rivers-preview__nav-links" aria-label="Preview sections">
            <a href="#services">Services</a>
            <a href="#story">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="rivers-preview__nav-cta" href="#contact">
            Get estimate
          </a>
        </div>
      </header>

      <section
        id="hero"
        className="rivers-preview__hero"
        style={{ backgroundImage: `linear-gradient(120deg, rgba(12, 31, 17, 0.82), rgba(12, 31, 17, 0.34)), url(${previewData.heroImage})` }}
      >
        <div className="rivers-preview__hero-noise" aria-hidden="true" />
        <Motion.div
          className="rivers-preview__hero-orb rivers-preview__hero-orb--one"
          animate={{ y: [0, -16, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          className="rivers-preview__hero-orb rivers-preview__hero-orb--two"
          animate={{ y: [0, 18, 0], x: [0, -10, 0], scale: [1, 0.94, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="rivers-preview__shell rivers-preview__hero-inner">
          <Motion.div
            className="rivers-preview__hero-copy"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <Motion.p className="rivers-preview__eyebrow" variants={sectionReveal}>
              <Sprout size={16} />
              {previewData.eyebrow}
            </Motion.p>
            <Motion.h1 variants={sectionReveal}>
              Lawns that look sharper, cleaner, and professionally maintained.
            </Motion.h1>
            <Motion.p className="rivers-preview__hero-text" variants={sectionReveal}>
              {previewData.description}
            </Motion.p>

            <Motion.div className="rivers-preview__hero-actions" variants={sectionReveal}>
              <a className="rivers-preview__primary-cta" href="#contact">
                Get a free estimate
                <ArrowRight size={18} />
              </a>
              <a className="rivers-preview__secondary-cta" href="#services">
                Explore services
              </a>
            </Motion.div>

          <Motion.div className="rivers-preview__hero-meta" variants={sectionReveal}>
            <div>
              <MapPin size={16} />
              <span>{previewData.serviceAreas.join(' · ')}</span>
            </div>
              <div>
                <Clock3 size={16} />
              <span>{previewData.supportHours}</span>
            </div>
          </Motion.div>
        </Motion.div>
        </div>
      </section>

      <section className="rivers-preview__metrics">
        <div className="rivers-preview__shell">
          <Motion.div
            className="rivers-preview__hero-stats"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewData.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </Motion.div>
        </div>
      </section>

      <Section className="rivers-preview__highlights">
        <div className="rivers-preview__shell rivers-preview__highlights-grid">
          {previewData.highlights.map((item) => (
            <Motion.article key={item.number} className="rivers-preview__highlight" variants={sectionReveal}>
              <span className="rivers-preview__highlight-number">{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </Motion.article>
          ))}
        </div>
      </Section>

      <Section id="services" className="rivers-preview__services">
        <div className="rivers-preview__shell rivers-preview__services-grid">
          <div className="rivers-preview__services-copy">
            <p className="rivers-preview__section-label">Services</p>
            <h2>Full-service lawn care, not just a quick cut-and-go stop.</h2>
            <p>
              The live site lists a strong range of lawn and landscape services. This redesign
              turns them into a cleaner browsing experience with visual hierarchy and more obvious
              value for homeowners comparing providers.
            </p>
          </div>

          <Motion.div
            className="rivers-preview__service-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.14 }}
          >
            {previewData.services.map((service, index) => (
              <Motion.article className="rivers-preview__service-row" key={service.name} variants={sectionReveal}>
                <div className="rivers-preview__service-index">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="rivers-preview__service-body">
                  <div className="rivers-preview__service-copy">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="rivers-preview__service-image-wrap">
                    <img src={service.image} alt={service.name} className="rivers-preview__service-image" />
                  </div>
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </Section>

      <Section id="story" className="rivers-preview__story">
        <div className="rivers-preview__shell rivers-preview__story-grid">
          <div className="rivers-preview__story-media">
            <img src={previewData.storyImage} alt="Freshly maintained residential lawn" />
          </div>
          <div className="rivers-preview__story-copy">
            <p className="rivers-preview__section-label rivers-preview__section-label--light">
              {previewData.story.eyebrow}
            </p>
            <h2>{previewData.story.heading}</h2>
            <p>{previewData.story.body}</p>
            <ul className="rivers-preview__story-points">
              {previewData.story.points.map((point) => (
                <li key={point}>
                  <ShieldCheck size={16} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="reviews" className="rivers-preview__reviews">
        <div className="rivers-preview__shell">
          <div className="rivers-preview__reviews-head">
            <div>
              <p className="rivers-preview__section-label">Reviews</p>
              <h2>Proof that the work shows up in the yard, not just in the pitch.</h2>
            </div>
            <a href={previewData.websiteUrl} target="_blank" rel="noreferrer" className="rivers-preview__text-link">
              Visit current site
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="rivers-preview__reviews-grid">
            <div className="rivers-preview__reviews-image">
              <img src={previewData.quoteImage} alt="Landscaping team working in a front yard" />
            </div>
            <Motion.div
              className="rivers-preview__review-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
            >
              {previewData.testimonials.map((testimonial) => (
                <Motion.article className="rivers-preview__review" key={testimonial.quote} variants={sectionReveal}>
                  <div className="rivers-preview__review-stars" aria-hidden="true">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p>{testimonial.quote}</p>
                  <span>{testimonial.author}</span>
                </Motion.article>
              ))}
            </Motion.div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="rivers-preview__contact">
        <div className="rivers-preview__shell rivers-preview__contact-grid">
          <div className="rivers-preview__contact-copy">
            <p className="rivers-preview__section-label">Contact</p>
            <h2>Ready for a quote that turns into dependable ongoing care?</h2>
            <p>
              This concept keeps conversion simple: clear phone paths for both markets, a local
              coverage story, and one obvious estimate action instead of burying the request form.
            </p>
            <div className="rivers-preview__contact-meta">
              <div>
                <Award size={17} />
                <span>Quality lawn care with a satisfaction-first promise</span>
              </div>
              <div>
                <MapPin size={17} />
                <span>{previewData.serviceAreas.join(' · ')}</span>
              </div>
            </div>
          </div>

          <div className="rivers-preview__contact-panel">
            {previewData.phones.map((phone) => (
              <a key={phone.label} className="rivers-preview__contact-line" href={phone.href}>
                <span className="rivers-preview__contact-label">{phone.label}</span>
                <strong>{phone.display}</strong>
                <Phone size={17} />
              </a>
            ))}

            <a
              className="rivers-preview__contact-primary"
              href={previewData.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open live website
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </Section>

      <FloatingCTA />
    </main>
  )
}

export default RiversLawnGardeningPreview
