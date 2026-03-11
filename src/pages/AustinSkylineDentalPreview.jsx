import React from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import './AustinSkylineDentalPreview.css'

const logoImage =
  'https://austinskylinedental.com/wp-content/uploads/2015/08/logo-austinskylinedental.png'
const doctorParkerImage =
  'https://austinskylinedental.com/wp-content/uploads/2013/04/drParker.jpg'
const doctorKimballImage =
  'https://austinskylinedental.com/wp-content/uploads/2012/03/drKimball.jpg'
const teamImage =
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80'
const consultationImage =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80'

const previewData = {
  businessName: 'Austin Skyline Dental',
  phoneDisplay: '(512) 452-9547',
  phoneHref: 'tel:+15124529547',
  email: 'info@austinskylinedental.com',
  emailHref: 'mailto:info@austinskylinedental.com',
  addressLines: [
    '314 Highland Mall Blvd, Suite 500',
    'One Highland Center',
    'Austin, TX 78752',
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=314+Highland+Mall+Blvd+Suite+500+Austin+TX+78752',
  hours: [
    'Monday, Tuesday, Thursday: 7:30am - 4:30pm',
    'Wednesday and Friday: 7:30am - 1:00pm',
    'Saturday - Sunday: Closed',
  ],
  hero: {
    eyebrow: 'Cosmetic and family dentistry in Austin',
    headline: 'Thoughtful dental care for Austin families.',
    description:
      'Austin Skyline Dental has served Austin families for decades with comprehensive diagnosis, thoughtful treatment planning, and cosmetic care that stays personal. From routine care to smile-focused treatment, the practice is built around comfort, conversation, and long-term trust.',
  },
  stats: [
    { value: '35+ years', label: 'of care led by Dr. Parker in Austin' },
    { value: '2 doctors', label: 'with deep local roots and clinical range' },
    { value: '4 steps', label: 'that guide every new-patient relationship' },
  ],
  fundamentals: [
    {
      title: 'Preclinical interview',
      description:
        'New patients begin with conversation first, giving the doctors space to hear concerns in the patient\'s own words before treatment starts.',
    },
    {
      title: 'Comprehensive exam',
      description:
        'Diagnosis is positioned as a meaningful part of care, with time set aside to understand needs thoroughly instead of rushing into procedures.',
    },
    {
      title: 'Treatment planning',
      description:
        'Each plan is built around health, sequencing, and realistic options so patients understand both the immediate need and the long-term path.',
    },
    {
      title: 'Consultation',
      description:
        'Findings, priorities, and next steps are explained clearly so patients stay informed and involved in their own care decisions.',
    },
  ],
  services: [
    {
      title: 'Smile design and cosmetic dentistry',
      description:
        'Smile design, porcelain veneers, whitening, and cosmetic planning are offered with a focus on natural-looking results and careful treatment planning.',
      icon: Sparkles,
    },
    {
      title: 'Family and preventive care',
      description:
        'Routine cleanings, hygiene support, exams, and long-term maintenance help patients and families stay connected to care over time.',
      icon: ShieldCheck,
    },
    {
      title: 'Restorative and functional care',
      description:
        'From crowns and root canals to bite harmony and TMJ-related support, restorative care is approached with comfort and long-term stability in mind.',
      icon: Stethoscope,
    },
    {
      title: 'Sleep and comfort-focused solutions',
      description:
        'Dental sleep medicine, emergency responsiveness, and sedation options help support patients who need a gentler path to treatment.',
      icon: CalendarDays,
    },
  ],
  differentiators: [
    {
      title: 'Above-and-beyond details',
      description:
        'Small human touches make treatment feel more accommodating, practical, and relationship-driven.',
      icon: Building2,
    },
    {
      title: 'Education-first process',
      description:
        'Patient understanding is treated as part of care itself, not something added after a decision has already been made.',
      icon: CheckCircle2,
    },
    {
      title: 'Relaxed, one-of-a-kind environment',
      description:
        'The office is positioned as relaxed and personal, helping patients feel more at ease from the first visit onward.',
      icon: Users,
    },
  ],
  doctors: [
    {
      name: 'C. Steve Parker, DDS',
      title: 'Cosmetic and family dentistry',
      image: doctorParkerImage,
      summary:
        'Dr. Parker studied biology at The University of Texas at Austin and earned his dental degree from UT Health Science Center at Houston before returning to Austin. He brings decades of experience to the practice, along with extensive continuing education in cosmetic and restorative care.',
    },
    {
      name: 'Christopher F. Kimball, DDS',
      title: 'Comprehensive and restorative care',
      image: doctorKimballImage,
      summary:
        'Dr. Kimball studied chemistry at St. Edward\'s University and earned his DDS at The University of Texas Health Science Center in Houston. His background in science and research supports a careful, patient-centered approach to treatment.',
    },
  ],
  testimonials: [
    {
      quote:
        'Patients often describe the office as calm, informative, and unusually thorough from the first conversation through the treatment plan.',
      author: 'Patient feedback theme',
    },
    {
      quote:
        'Many long-time patients point to the doctors\' attention to detail and the sense that questions are welcomed rather than rushed past.',
      author: 'Patient feedback theme',
    },
    {
      quote:
        'Families who stay with the practice tend to talk about consistency, trust, and a team that feels personal even after years of visits.',
      author: 'Patient feedback theme',
    },
  ],
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Motion.section>
  )
}

function StarRow() {
  return (
    <div className="skyline-preview__stars" aria-hidden="true">
      {[...Array(5)].map((_, index) => (
        <Star key={index} size={14} fill="currentColor" />
      ))}
    </div>
  )
}

function AustinSkylineDentalPreview() {
  useSEO({
    title: 'Austin Skyline Dental Preview | That Software House',
    description:
      'A website preview for Austin Skyline Dental in Austin, Texas.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/austin-skyline-dental',
    openGraph: {
      title: 'Austin Skyline Dental Preview',
      description:
        'A website preview for Austin Skyline Dental in Austin, Texas.',
      url: 'https://preview.thatsoftwarehouse.com/austin-skyline-dental',
      image: doctorParkerImage,
    },
  })

  return (
    <main className="skyline-preview" id="top">
      <header className="skyline-preview__nav">
        <div className="skyline-preview__shell skyline-preview__nav-inner">
          <a href="#top" className="skyline-preview__brand" aria-label={previewData.businessName}>
            <img src={logoImage} alt="Austin Skyline Dental" className="skyline-preview__brand-logo" />
          </a>

          <nav className="skyline-preview__nav-links" aria-label="Preview sections">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Doctors</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="skyline-preview__nav-actions">
            <a href="#contact" className="skyline-preview__button skyline-preview__button--primary">
              Request appointment
            </a>
            <a href={previewData.phoneHref} className="skyline-preview__button skyline-preview__button--ghost">
              <Phone size={15} />
              {previewData.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <section className="skyline-preview__hero">
        <div className="skyline-preview__hero-orb skyline-preview__hero-orb--one" aria-hidden="true" />
        <div className="skyline-preview__hero-orb skyline-preview__hero-orb--two" aria-hidden="true" />
        <div className="skyline-preview__shell skyline-preview__hero-grid">
          <Motion.div
            className="skyline-preview__hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="skyline-preview__eyebrow">{previewData.hero.eyebrow}</p>
            <h1>{previewData.hero.headline}</h1>
            <p className="skyline-preview__hero-description">{previewData.hero.description}</p>

            <div className="skyline-preview__hero-actions">
              <a href="#contact" className="skyline-preview__button skyline-preview__button--primary">
                Start with a consultation
              </a>
              <a href="#services" className="skyline-preview__button skyline-preview__button--secondary">
                Explore care <ArrowRight size={15} />
              </a>
            </div>

            <div className="skyline-preview__hero-proof">
              <div>
                <StarRow />
                <p>Cosmetic and family dentistry with time for conversation, diagnosis, and treatment planning.</p>
              </div>
              <div className="skyline-preview__hero-proof-meta">
                <span>Established Austin practice</span>
                <span>New-patient friendly</span>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            className="skyline-preview__hero-visual"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <article className="skyline-preview__hero-card skyline-preview__hero-card--portrait">
              <div className="skyline-preview__hero-card-image">
                <img src={doctorParkerImage} alt="Dr. Steve Parker" />
              </div>
              <div className="skyline-preview__hero-card-copy">
                <span>Lead doctor spotlight</span>
                <strong>C. Steve Parker, DDS</strong>
                <p>Serving Austin with cosmetic and family dentistry for more than 35 years.</p>
              </div>
            </article>

            <article className="skyline-preview__hero-card skyline-preview__hero-card--detail">
              <span className="skyline-preview__mini-kicker">The Skyline approach</span>
              <h2>Diagnosis before treatment, relationships before pressure.</h2>
              <ul>
                <li>One-to-one patient-doctor conversation</li>
                <li>Comprehensive exam and planning</li>
                <li>Clear consultation before care moves forward</li>
              </ul>
            </article>
          </Motion.div>
        </div>
      </section>

      <div className="skyline-preview__stats-bar">
        <div className="skyline-preview__shell skyline-preview__stats-grid">
          {previewData.stats.map((item) => (
            <div key={item.label} className="skyline-preview__stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Section className="skyline-preview__section skyline-preview__section--about" id="about">
        <div className="skyline-preview__shell skyline-preview__about-grid">
          <div className="skyline-preview__section-copy">
            <p className="skyline-preview__kicker">About the practice</p>
            <h2>A longstanding Austin practice built on comfort, clarity, and long-term care.</h2>
            <p>
              Austin Skyline Dental is built around comfort, clear communication, and a patient-doctor
              relationship that begins before treatment. The office serves families who value
              conversation, careful diagnosis, and a treatment plan that feels considered rather than rushed.
            </p>
            <p>
              The tone stays calm, assured, and personal. Long-time patients should still recognize the
              practice they trust, while newer visitors get a clearer sense of the quality and thoughtfulness
              behind the care.
            </p>
          </div>

          <div className="skyline-preview__about-panel">
            <div className="skyline-preview__about-image">
              <img src={teamImage} alt="Dental team consultation" />
            </div>
            <div className="skyline-preview__about-panel-grid">
              {previewData.differentiators.map((item) => (
                <div key={item.title} className="skyline-preview__info-card">
                  <item.icon size={18} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="skyline-preview__section skyline-preview__section--fundamentals">
        <div className="skyline-preview__shell">
          <div className="skyline-preview__section-heading skyline-preview__section-heading--center">
            <p className="skyline-preview__kicker">Four fundamentals</p>
            <h2>The process that sets Austin Skyline Dental apart from a faster, less personal dental experience.</h2>
            <p>
              Care here starts with conversation, diagnosis, planning, and consultation. That sequence gives
              patients more context, more clarity, and a stronger sense of partnership before treatment moves forward.
            </p>
          </div>

          <div className="skyline-preview__fundamentals-grid">
            {previewData.fundamentals.map((item, index) => (
              <article key={item.title} className="skyline-preview__fundamental-card">
                <span className="skyline-preview__fundamental-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="skyline-preview__section skyline-preview__section--services" id="services">
        <div className="skyline-preview__shell skyline-preview__services-grid">
          <div className="skyline-preview__services-side">
            <p className="skyline-preview__kicker">Services</p>
            <h2>Cosmetic, restorative, preventive, and comfort-focused care designed around long-term relationships.</h2>
            <p>
              Austin Skyline Dental pairs cosmetic dentistry with strong preventive and restorative care, giving
              patients a practice they can stay with through routine maintenance, smile improvements, and more involved treatment.
            </p>
            <div className="skyline-preview__consultation-card">
              <img src={consultationImage} alt="Dental consultation and treatment planning" />
              <div>
                <span className="skyline-preview__mini-kicker">Patient experience</span>
                <p>
                  Treatment planning and consultation are treated as part of the care itself, helping patients
                  feel informed before decisions are made.
                </p>
              </div>
            </div>
          </div>

          <div className="skyline-preview__services-list">
            {previewData.services.map((service) => (
              <article key={service.title} className="skyline-preview__service-card">
                <div className="skyline-preview__service-icon">
                  <service.icon size={18} />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="skyline-preview__section skyline-preview__section--team" id="team">
        <div className="skyline-preview__shell">
          <div className="skyline-preview__section-heading">
            <p className="skyline-preview__kicker">Doctors</p>
            <h2>Meet the doctors behind Austin Skyline Dental.</h2>
            <p>
              Experience matters here, but so does the way patients are treated. The doctors combine
              technical depth with a practice style that emphasizes listening, explanation, and long-term trust.
            </p>
          </div>

          <div className="skyline-preview__doctor-grid">
            {previewData.doctors.map((doctor) => (
              <article key={doctor.name} className="skyline-preview__doctor-card">
                <div className="skyline-preview__doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="skyline-preview__doctor-copy">
                  <p className="skyline-preview__doctor-role">{doctor.title}</p>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="skyline-preview__section skyline-preview__section--experience">
        <div className="skyline-preview__shell skyline-preview__experience-panel">
          <div className="skyline-preview__experience-copy">
            <p className="skyline-preview__kicker skyline-preview__kicker--light">Why patients choose Austin Skyline Dental</p>
            <h2>Why patients choose Austin Skyline Dental for both everyday care and more involved treatment.</h2>
            <p>
              The practice brings together decades of experience, patient education, and a more individualized
              planning process than many offices offer. That combination makes the experience feel more personal
              and more deliberate from the start.
            </p>
          </div>

          <div className="skyline-preview__experience-list">
            <div className="skyline-preview__experience-item">
              <Sparkles size={18} />
              <div>
                <h3>Cosmetic care with restraint and precision</h3>
                <p>Smile design and esthetic treatment are presented with the same calm, high-trust tone as the rest of the practice.</p>
              </div>
            </div>
            <div className="skyline-preview__experience-item">
              <ShieldCheck size={18} />
              <div>
                <h3>Thorough diagnosis before treatment</h3>
                <p>Patients are given more context, more planning, and more room to understand their options before care begins.</p>
              </div>
            </div>
            <div className="skyline-preview__experience-item">
              <CalendarDays size={18} />
              <div>
                <h3>Comfort that feels intentional</h3>
                <p>From consultation flow to office atmosphere, the experience is designed to feel welcoming rather than transactional.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="skyline-preview__section skyline-preview__section--reviews" id="reviews">
        <div className="skyline-preview__shell">
          <div className="skyline-preview__section-heading skyline-preview__section-heading--center">
            <p className="skyline-preview__kicker">Testimonials</p>
            <h2>What patients tend to value most about the experience here.</h2>
            <p>
              Representative patient sentiments center on comfort, communication, thorough care, and
              the kind of long-term trust that brings families back over the years.
            </p>
          </div>

          <div className="skyline-preview__review-grid">
            {previewData.testimonials.map((review) => (
              <article key={review.quote} className="skyline-preview__review-card">
                <StarRow />
                <p>{review.quote}</p>
                <strong>{review.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="skyline-preview__section skyline-preview__section--contact" id="contact">
        <div className="skyline-preview__shell skyline-preview__contact-grid">
          <div className="skyline-preview__contact-copy">
            <p className="skyline-preview__kicker">Contact</p>
            <h2>Start with a question, a phone call, or an appointment request.</h2>
            <p>
              Office details stay simple, visible, and easy to act on so patients can move from curiosity
              to scheduling without friction.
            </p>

            <div className="skyline-preview__contact-items">
              <div className="skyline-preview__contact-item">
                <MapPin size={18} />
                <div>
                  <strong>Visit the office</strong>
                  <span>{previewData.addressLines.join(', ')}</span>
                </div>
              </div>
              <div className="skyline-preview__contact-item">
                <Phone size={18} />
                <div>
                  <strong>Call the office</strong>
                  <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
                </div>
              </div>
              <div className="skyline-preview__contact-item">
                <Clock3 size={18} />
                <div>
                  <strong>Office hours</strong>
                  <span>{previewData.hours[0]}</span>
                  <span>{previewData.hours[1]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skyline-preview__contact-card">
            <span className="skyline-preview__mini-kicker">Ready to book?</span>
            <h3>Ready to plan your visit?</h3>
            <p>
              Call the office or send a quick note to start the conversation. The goal is a scheduling
              experience that feels straightforward, personal, and easy to trust.
            </p>

            <div className="skyline-preview__contact-actions">
              <a href={previewData.phoneHref} className="skyline-preview__button skyline-preview__button--primary">
                <Phone size={15} />
                Call now
              </a>
              <a href={previewData.emailHref} className="skyline-preview__button skyline-preview__button--secondary">
                Email the office
              </a>
            </div>

            <a href={previewData.mapsUrl} className="skyline-preview__map-card" target="_blank" rel="noreferrer">
              <div>
                <span className="skyline-preview__mini-kicker">Location</span>
                <strong>{previewData.addressLines[0]}</strong>
                <p>{previewData.addressLines[1]} | {previewData.addressLines[2]}</p>
              </div>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>

      <footer className="skyline-preview__footer">
        <div className="skyline-preview__shell skyline-preview__footer-inner">
          <div className="skyline-preview__footer-brand">
            <img src={logoImage} alt="Austin Skyline Dental" className="skyline-preview__footer-logo" />
            <p>
              Cosmetic and family dentistry in Austin with a focus on comfort, conversation, and long-term care.
            </p>
          </div>

          <div className="skyline-preview__footer-meta">
            <a href={previewData.phoneHref}>{previewData.phoneDisplay}</a>
            <a href={previewData.emailHref}>{previewData.email}</a>
            <a href={previewData.mapsUrl} target="_blank" rel="noreferrer">
              Austin, Texas
            </a>
          </div>
        </div>
      </footer>

      <div className="skyline-preview__mobile-rail">
        <a href={previewData.phoneHref} className="skyline-preview__rail-button skyline-preview__rail-button--ghost">
          <Phone size={15} />
          Call
        </a>
        <a href="#contact" className="skyline-preview__rail-button skyline-preview__rail-button--primary">
          Request Appointment
        </a>
      </div>
    </main>
  )
}

export default AustinSkylineDentalPreview
