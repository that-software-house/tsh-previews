import React from 'react'
import { motion as Motion } from 'framer-motion'
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldPlus,
  Sparkles,
  Star,
  Stethoscope,
  SunMedium,
  Users,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import FloatingCTA from '../components/FloatingCTA'
import './DaybreakDentalPreview.css'

const heroImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80'
const familyImage =
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80'
const doctorImage =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80'

const previewData = {
  businessName: 'Daybreak Dental',
  domain: 'daybreakdentalcare.com',
  phoneDisplay: '(512) 440-5900',
  phoneHref: 'tel:+15124405900',
  address: '3801 South Congress, Suite 106, Austin, TX 78704',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=3801+South+Congress+Suite+106,+Austin,+TX+78704',
  hours: [
    'Monday: 10:00 am - 6:00 pm',
    'Tuesday - Friday: 8:00 am - 4:00 pm',
    'Saturday - Sunday: Closed',
  ],
  hero: {
    eyebrow: 'South Austin family dentistry with warmth, clarity, and modern care',
    headline: 'A brighter dental experience for families, first-timers, and anyone overdue for care.',
    description:
      'Daybreak Dental brings South Austin charm, modern technology, and a no-judgment approach together in one family-friendly office on South Congress.',
    primaryCta: 'Schedule appointment',
    secondaryCta: 'See services',
  },
  trustPoints: [
    'Family-owned, locally owned practice',
    'Same-day emergency support when possible',
    'Most major PPO insurance accepted',
    'Comfort touches like nitrous oxide, headphones, and blankets',
  ],
  featureStats: [
    { value: '409+', label: 'Google reviews highlighted on the current site' },
    { value: '78704', label: 'Convenient for South Austin neighborhoods' },
    { value: '$99', label: 'New-patient offer featured on the live site' },
  ],
  services: [
    {
      title: 'General dentistry',
      description:
        'Cleanings, exams, and long-term oral health support for adults and families who want dependable everyday care.',
      icon: ShieldPlus,
    },
    {
      title: 'Emergency care',
      description:
        'Fast support for pain, broken teeth, and unexpected issues with same-day urgency messaging throughout the current site.',
      icon: Stethoscope,
    },
    {
      title: 'Implant dentistry',
      description:
        'Long-term tooth replacement solutions designed to restore comfort, function, and confidence.',
      icon: Sparkles,
    },
    {
      title: 'Candid Pro aligners',
      description:
        'Clear-aligner options for patients who want straighter teeth without traditional metal braces.',
      icon: SunMedium,
    },
    {
      title: 'Cosmetic dentistry',
      description:
        'Smile-enhancing treatment options for brighter, more even, and more confident results.',
      icon: Star,
    },
    {
      title: 'Snap-on dentures',
      description:
        'Restorative options positioned for patients who want comfortable, practical solutions under one roof.',
      icon: HeartHandshake,
    },
  ],
  doctors: [
    {
      name: 'Dr. Chang, DDS',
      summary:
        'Presented as part of the Daybreak team delivering relationship-driven care in a modern South Austin office.',
    },
    {
      name: 'Dr. Rausch, DDS',
      summary:
        'Referenced repeatedly in patient reviews as a trusted long-term dentist with loyal returning patients.',
    },
    {
      name: 'Dr. Singh, DDS',
      summary:
        'Listed alongside the doctor team in the current site experience and framed within the same welcoming care model.',
    },
  ],
  comfortPoints: [
    'A no-judgment tone for patients returning after years away',
    'Comfort-first details including nitrous oxide, headphones, and blankets',
    'A team that explains treatment clearly instead of overwhelming patients',
    'Family care that works for toddlers, teens, parents, and grandparents',
  ],
  reviewThemes: [
    'Patients describe the staff as friendly, informative, and reassuring.',
    'Longtime patients mention following doctors to Daybreak because of trust and continuity.',
    'First-time visitors call out leaving appointments feeling surprisingly positive and at ease.',
  ],
  insuranceNotes: [
    'Most major PPO plans accepted',
    'Insurance verification before treatment',
    'CareCredit and payment flexibility highlighted',
    'Phased treatment planning when needed',
  ],
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Section({ children, className = '', id }) {
  return (
    <Motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Motion.section>
  )
}

function DaybreakDentalPreview() {
  useSEO({
    title: 'Daybreak Dental Preview | That Software House',
    description:
      'A modern preview redesign for Daybreak Dental in South Austin, Texas.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/daybreak-dental',
    openGraph: {
      title: 'Daybreak Dental Preview',
      description:
        'Standalone preview concept for a brighter, family-oriented Daybreak Dental website experience.',
      url: 'https://preview.thatsoftwarehouse.com/daybreak-dental',
      image: heroImage,
    },
  })

  return (
    <main className="daybreak-preview" id="top">
      <header className="daybreak-preview__nav">
        <div className="daybreak-preview__nav-inner">
          <a href="#top" className="daybreak-preview__brand" aria-label={previewData.businessName}>
            <span className="daybreak-preview__brand-mark">DD</span>
            <span>
              <strong>{previewData.businessName}</strong>
              <small>South Congress, Austin</small>
            </span>
          </a>

          <nav className="daybreak-preview__nav-links" aria-label="Preview sections">
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="daybreak-preview__nav-cta">
            {previewData.hero.primaryCta}
          </a>
        </div>
      </header>

      <div className="daybreak-preview__shell">
      </div>

      <section
        className="daybreak-preview__hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 250, 245, 0.97) 0%, rgba(255, 250, 245, 0.93) 42%, rgba(255, 250, 245, 0.58) 72%, rgba(255, 250, 245, 0.24) 100%), url(${heroImage})`,
        }}
      >
        <div className="daybreak-preview__hero-inner">
          <div className="daybreak-preview__hero-copy">
            <div className="daybreak-preview__eyebrow">
              <SunMedium size={15} />
              <span>{previewData.hero.eyebrow}</span>
            </div>

            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.hero.headline}
            </Motion.h1>

            <Motion.p
              className="daybreak-preview__hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.84, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {previewData.hero.description}
            </Motion.p>

            <Motion.div
              className="daybreak-preview__hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.84, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="#contact" className="daybreak-preview__button daybreak-preview__button--primary">
                {previewData.hero.primaryCta}
              </a>
              <a href="#services" className="daybreak-preview__button daybreak-preview__button--ghost">
                {previewData.hero.secondaryCta}
              </a>
            </Motion.div>

            <Motion.div
              className="daybreak-preview__hero-meta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.84, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href={previewData.phoneHref}>
                <Phone size={16} />
                {previewData.phoneDisplay}
              </a>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin size={16} />
                3801 South Congress
              </a>
            </Motion.div>
          </div>

          <Motion.div
            className="daybreak-preview__hero-aside"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="daybreak-preview__floating-card daybreak-preview__floating-card--offer">
              <span className="daybreak-preview__floating-label">New patient offer</span>
              <strong>$99 special</strong>
              <p>Exam and x-rays are called out on the live site as an onboarding incentive.</p>
            </div>
            <div className="daybreak-preview__floating-card daybreak-preview__floating-card--stats">
              {previewData.featureStats.map((item) => (
                <div key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      <div className="daybreak-preview__shell">

        <Section className="daybreak-preview__section daybreak-preview__trust">
          <div className="daybreak-preview__section-heading">
            <p className="daybreak-preview__kicker">Why this concept fits Daybreak</p>
            <h2>Friendly, local, and built around the welcoming energy already present in Daybreak&rsquo;s brand.</h2>
          </div>
          <div className="daybreak-preview__trust-grid">
            {previewData.trustPoints.map((point) => (
              <article key={point} className="daybreak-preview__trust-card">
                <CheckCircle2 size={18} />
                <p>{point}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section className="daybreak-preview__section" id="services">
          <div className="daybreak-preview__section-heading">
            <p className="daybreak-preview__kicker">Services</p>
            <h2>Comprehensive family care, organized around the way patients actually search.</h2>
          </div>
          <div className="daybreak-preview__services-grid">
            {previewData.services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="daybreak-preview__service-card">
                  <div className="daybreak-preview__service-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              )
            })}
          </div>
        </Section>

        <Section className="daybreak-preview__section daybreak-preview__showcase" id="doctors">
          <div className="daybreak-preview__showcase-copy">
            <p className="daybreak-preview__kicker">Doctors</p>
            <h2>A team presentation that feels more personal, local, and easy to trust.</h2>
            <div className="daybreak-preview__doctor-list">
              {previewData.doctors.map((doctor) => (
                <article key={doctor.name} className="daybreak-preview__doctor-card">
                  <Users size={18} />
                  <div>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="daybreak-preview__showcase-image">
            <img src={doctorImage} alt="Dentist smiling during a patient consultation" />
          </div>
        </Section>

        <Section className="daybreak-preview__section daybreak-preview__comfort">
          <div className="daybreak-preview__comfort-media">
            <img src={familyImage} alt="Family-friendly dental care environment" />
          </div>
          <div className="daybreak-preview__comfort-copy">
            <p className="daybreak-preview__kicker">Comfort-first care</p>
            <h2>Daybreak’s strongest differentiator is how it makes nervous patients feel safe.</h2>
            <ul>
              {previewData.comfortPoints.map((point) => (
                <li key={point}>
                  <HeartHandshake size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section className="daybreak-preview__section">
          <div className="daybreak-preview__section-heading">
            <p className="daybreak-preview__kicker">Patient feedback</p>
            <h2>Reviews framed around reassurance, friendliness, and long-term trust.</h2>
          </div>
          <div className="daybreak-preview__reviews-grid">
            {previewData.reviewThemes.map((theme, index) => (
              <article key={theme} className="daybreak-preview__review-card">
                <div className="daybreak-preview__stars">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p>{theme}</p>
                <span>Review theme 0{index + 1}</span>
              </article>
            ))}
          </div>
        </Section>

        <Section className="daybreak-preview__section daybreak-preview__support">
          <div className="daybreak-preview__support-copy">
            <p className="daybreak-preview__kicker">New patients + insurance</p>
            <h2>Important conversion details surfaced early instead of buried in forms.</h2>
            <div className="daybreak-preview__tag-row">
              {previewData.insuranceNotes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          </div>
          <div className="daybreak-preview__support-panel">
            <div className="daybreak-preview__hours-card">
              <div className="daybreak-preview__hours-heading">
                <Clock3 size={18} />
                <span>Office hours</span>
              </div>
              <ul>
                {previewData.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section className="daybreak-preview__section daybreak-preview__contact" id="contact">
          <div className="daybreak-preview__contact-copy">
            <p className="daybreak-preview__kicker">Contact</p>
            <h2>A modern conversion block that stays visual-only in preview mode.</h2>
            <div className="daybreak-preview__contact-list">
              <a href={previewData.phoneHref}>
                <Phone size={18} />
                <span>{previewData.phoneDisplay}</span>
              </a>
              <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} />
                <span>{previewData.address}</span>
              </a>
              <div>
                <CalendarDays size={18} />
                <span>Dummy scheduling links only in this preview</span>
              </div>
            </div>
          </div>
          <div className="daybreak-preview__contact-card">
            <span className="daybreak-preview__card-kicker">Preview concept</span>
            <h3>Schedule appointment</h3>
            <p>
              This concept shows how Daybreak could present scheduling and new-patient info more
              clearly, without wiring to a live backend.
            </p>
            <div className="daybreak-preview__contact-actions">
              <a href="#top" className="daybreak-preview__button daybreak-preview__button--primary">
                Start request
              </a>
              <a href="/" className="daybreak-preview__button daybreak-preview__button--ghost">
                Back to preview hub
              </a>
            </div>
          </div>
        </Section>

        <footer className="daybreak-preview__footer">
          <div>
            <strong>{previewData.businessName}</strong>
            <p>{previewData.address}</p>
          </div>
          <div>
            <p>{previewData.domain}</p>
            <a href="https://thatsoftwarehouse.com" target="_blank" rel="noreferrer">
              Preview by That Software House
            </a>
          </div>
        </footer>
      </div>

      <div className="daybreak-preview__mobile-rail">
        <a href={previewData.phoneHref} className="daybreak-preview__mobile-action daybreak-preview__mobile-action--ghost">
          <Phone size={18} />
          Call
        </a>
        <a href="#contact" className="daybreak-preview__mobile-action daybreak-preview__mobile-action--primary">
          {previewData.hero.primaryCta}
        </a>
      </div>
      <FloatingCTA />
    </main>
  )
}

export default DaybreakDentalPreview
