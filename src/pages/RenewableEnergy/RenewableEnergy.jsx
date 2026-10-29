import { useState } from 'react';
import {
  Zap,
  Phone,
  CheckCircle2,
  Sparkles,
  Sun,
  Wind,
  BatteryCharging,
  Clock,
  Calendar,
  Truck,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Info,
  X,
  MessageCircle,
  Send,
  MapPin,
  Check,
  Wrench,
  Layers,
  Users
} from 'lucide-react';
import styles from './RenewableEnergy.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const ENERGY_ROLES = [
  {
    id: 'ren-1',
    icon: Sun,
    title: 'Solar Panel Installer',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-2',
    icon: Wind,
    title: 'Wind Turbine Technician',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-3',
    icon: BatteryCharging,
    title: 'Battery Storage Technician',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-4',
    icon: Zap,
    title: 'Electrical Helper (Solar)',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-5',
    icon: Wrench,
    title: 'PV System Maintenance',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-6',
    icon: Zap,
    title: 'Renewable Energy Helper',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-7',
    icon: Layers,
    title: 'Solar Farm Operator',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-8',
    icon: Wrench,
    title: 'Inverter / Power Tech Helper',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'ren-9',
    icon: Users,
    title: 'Green Project Laborer',
    location: 'India & UAE Opportunities',
  },
];

const BENEFITS = [
  { icon: Clock, text: 'Overtime Pay Available' },
  { icon: ShieldCheck, text: 'Safety Equipment Provided' },
  { icon: Calendar, text: 'Annual Leave 30 Days' },
  { icon: Sun, text: 'Solar Field Allowances' },
  { icon: Truck, text: 'Free Food & Accommodation' },
  { icon: Zap, text: 'Career Growth in Green Energy' },
];

const REQUIREMENTS = [
  'Minimum Education: 10th/12th/ITI Pass',
  'Age: 21-40 years',
  'Physical fitness for outdoor work',
  'Height/Weight in normal range',
  'Basic technical understanding',
  'Safety-conscious attitude',
  'Willing to work at heights',
  'Teamwork and discipline',
];

const DOMESTIC_DOCS = [
  'Aadhaar Card (Valid)',
  'PAN Card / Bank Account',
  'Education Certificate',
  'Trade / Electrician Certificate',
  'Medical Fitness Form',
  'Police Clearance',
  'Passport Photos (4)',
  'Experience Certificate (if any)',
];

const UAE_DOCS = [
  'Passport (Min 8 months)',
  'Police Clearance',
  'Education Certificate',
  'Technical Certificate',
  'GAMCA Medical',
  'Age Proof (10th)',
  'Experience Proof (if any)',
  'Safety Training Certificate',
];

const PROCESS_STEPS = [
  {
    step: '1',
    days: 'Day 1-5',
    title: 'Application & Screening',
    desc: 'Submit documentation & initial trade screening',
  },
  {
    step: '2',
    days: 'Day 6-12',
    title: 'Technical Interview',
    desc: 'Practical trade verification & solar farm briefing',
  },
  {
    step: '3',
    days: 'Day 13-20',
    title: 'Job Offer',
    desc: 'Contract offer letter with project details',
  },
  {
    step: '4',
    days: 'Day 21-35',
    title: 'Visa Processing',
    desc: 'Emirates work permit and site accreditation',
  },
  {
    step: '5',
    days: 'Day 36-45',
    title: 'Travel & Training',
    desc: 'Flight tickets, desert transit, and safety drills',
  },
];

const FAQS = [
  {
    q: 'Do I need previous solar experience?',
    a: 'Prior solar or electrical installation experience is preferred for technician roles, but freshers with an ITI/10th pass are welcomed as trainee installers and general field helpers. On-the-job training is provided.',
  },
  {
    q: 'What safety measures are taken for heat & sun exposure?',
    a: 'Solar projects follow strict thermal safety protocols: mandated hydration intervals, UV-protective uniforms, sun shades across work stations, and on-site paramedics.',
  },
  {
    q: 'Is accommodation provided at remote solar sites?',
    a: 'Yes, fully serviced company accommodation with air conditioning, Wi-Fi, laundry, and three hot meals daily is provided near the renewable energy project sites.',
  },
  {
    q: 'What is the career growth in the green energy sector?',
    a: 'Renewable energy is one of the world’s fastest-growing sectors. Helpers routinely upgrade to certified installers, inverters technicians, and site supervisors within 12 to 24 months.',
  },
  {
    q: 'Will I work in extreme weather conditions?',
    a: 'Field work shifts are scheduled during early morning and late afternoon hours during hot summer months to protect workers from peak midday heat.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * RenewableEnergy – Industry landing page for Renewable Energy Jobs
 * Matches uploaded screenshot media_1793198476143_5e9b3efd.png
 */
export default function RenewableEnergy({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [applyModalRole, setApplyModalRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    experience: 'Fresher / Trainee',
    passport: 'Valid Passport (8+ Months)',
  });

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  function handleOpenApply(roleName = 'Renewable Energy Role') {
    setApplyModalRole(roleName);
    setSubmitted(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className={styles.page} aria-label="Renewable Energy Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <h1 className={styles.heroTitle}>
                Renewable Energy Jobs in India & UAE
              </h1>

              <p className={styles.heroSubtitle}>
                Building a <span className={styles.highlightText}>sustainable future</span> with solar, wind, and green energy projects
              </p>

              <div className={styles.heroActions}>
                <button
                  type="button"
                  className={styles.btnApplyHero}
                  onClick={() => handleOpenApply('General Renewable Energy')}
                >
                  <Sparkles size={16} /> Apply Now - No Fee
                </button>

                <a href="tel:+918983656433" className={styles.btnCallHero}>
                  <Phone size={16} /> Call: +91 8983656433
                </a>
              </div>

              <div className={styles.heroPills}>
                <span className={styles.pillBadge}>✓ Immediate Opportunities</span>
                <span className={styles.pillBadge}>✓ Clean Energy Roles</span>
              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsHeader}>
                <Zap size={20} />
                <h3 className={styles.benefitsHeaderTitle}>Benefits</h3>
              </div>

              <div className={styles.benefitsList}>
                {BENEFITS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className={styles.benefitItem}>
                      <div className={styles.benefitIconWrap} aria-hidden="true">
                        <Icon size={16} />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <p className={styles.benefitsNote}>
                *Salary and benefits vary based on project scale, solar farm location, and country (India vs UAE).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. AVAILABLE RENEWABLE ENERGY JOBS
          ──────────────────────────────────────────────────────── */}
      <section id="available-roles" className={styles.jobsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Available Renewable Energy Jobs
            </h2>
            <p className={styles.sectionSubtitle}>
              Opportunities in solar farms, wind parks, and green energy projects
            </p>
          </div>

          <div className={styles.jobsGrid}>
            {ENERGY_ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.id} className={styles.jobCard}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.cardTitle}>{role.title}</h3>
                      <span className={styles.cardLocation}>
                        <MapPin size={13} /> {role.location}
                      </span>
                    </div>
                    <div className={styles.cardIconWrap} aria-hidden="true">
                      <Icon size={20} />
                    </div>
                  </div>

                  <button
                    type="button"
                    className={styles.btnApplyCard}
                    onClick={() => handleOpenApply(role.title)}
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. DAILY WORK LIFE & REQUIREMENTS / DOCUMENTS
          ──────────────────────────────────────────────────────── */}
      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.detailsGrid}>
            {/* Left Column: Daily Work Life */}
            <div className={styles.dailyCol}>
              <h2 className={styles.colHeading}>Daily Work Life</h2>

              {/* Box 1: Work Schedule */}
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <Clock size={18} className={styles.infoBoxTitleIcon} /> Work Schedule
                </h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> 8-10 hour day shifts (solar tracking)
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Project-based rotation schedules
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Overtime available for project deadlines
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Rest periods with proper hydration
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Weekend work sometimes required
                  </li>
                </ul>
              </div>

              {/* Box 2: Safety & Facilities */}
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <ShieldCheck size={18} className={styles.infoBoxTitleIcon} /> Safety & Facilities
                </h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Full shading gear and PPE provided
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Regular safety briefing on-site
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Transportation to/from solar fields
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> On-site hydration & medical staff
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Modern installation tools
                  </li>
                </ul>
              </div>

              {/* Notice Banner */}
              <div className={styles.noticeBanner}>
                <Info size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  <strong>Note:</strong> Solar field projects involve working in open outdoor weather conditions. High physical stamina and heat tolerance are required.
                </span>
              </div>
            </div>

            {/* Right Column: Requirements & Documents */}
            <div className={styles.reqCol}>
              {/* Requirements Subsection */}
              <div>
                <h3 className={styles.reqBlockTitle}>Requirements</h3>
                <div className={styles.checklist}>
                  {REQUIREMENTS.map((req, i) => (
                    <div key={i} className={styles.checkItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required Subsection */}
              <div>
                <h3 className={styles.reqBlockTitle}>Documents Required</h3>

                {/* Domestic Docs */}
                <div className={styles.docGroup}>
                  <h4 className={styles.docGroupSubtitle}>For India Roles (Domestic):</h4>
                  <div className={styles.docPillGrid}>
                    {DOMESTIC_DOCS.map((doc, idx) => (
                      <div key={idx} className={styles.docPill}>
                        <Check size={13} className={styles.docPillIcon} />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UAE Docs */}
                <div className={styles.docGroup} style={{ marginTop: 18 }}>
                  <h4 className={styles.docGroupSubtitle}>For UAE Roles:</h4>
                  <div className={styles.docPillGrid}>
                    {UAE_DOCS.map((doc, idx) => (
                      <div key={idx} className={styles.docPill}>
                        <Check size={13} className={styles.docPillIcon} />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. OUR PROCESS TIMELINE (DAYS MILESTONES)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Process Timeline</h2>
            <p className={styles.sectionSubtitle}>
              Simple 45-day process from application to joining
            </p>
          </div>

          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className={styles.processCard}>
                <div className={styles.processNumber}>{item.step}</div>
                <span className={styles.processDays}>{item.days}</span>
                <h3 className={styles.processTitle}>{item.title}</h3>
                <p className={styles.processDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. FREQUENTLY ASKED QUESTIONS
          ──────────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Answers to common questions about renewable energy jobs
            </p>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}
                    />
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. BOTTOM CTA
          ──────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Join the Green Energy Revolution</h2>
            <p className={styles.sectionSubtitle}>
              Start a rewarding career in sustainable green energy jobs across India and UAE
            </p>
          </div>

          <div className={styles.ctaGrid}>
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20am%20interested%20in%20Renewable%20and%20Solar%20Energy%20jobs."
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaCard} ${styles.ctaCardGreen}`}
            >
              <div>
                <div className={styles.ctaIconWrap} aria-hidden="true">
                  <MessageCircle size={28} />
                </div>
                <h3 className={styles.ctaCardTitle}>WhatsApp Now</h3>
                <p className={styles.ctaCardSubtitle}>Send your documents on WhatsApp</p>
              </div>
              <span className={styles.ctaBadge}>+91 8983656433</span>
            </a>

            {/* Call Us Card */}
            <a
              href="tel:+918983656433"
              className={`${styles.ctaCard} ${styles.ctaCardMagenta}`}
            >
              <div>
                <div className={styles.ctaIconWrap} aria-hidden="true">
                  <Phone size={28} />
                </div>
                <h3 className={styles.ctaCardTitle}>Call Us</h3>
                <p className={styles.ctaCardSubtitle}>Have questions? Call</p>
              </div>
              <span className={styles.ctaBadge}>+91 8983656433</span>
            </a>

            {/* Online Application Card */}
            <button
              type="button"
              className={`${styles.ctaCard} ${styles.ctaCardPurple}`}
              onClick={() => handleOpenApply('Renewable Energy Candidate')}
            >
              <div>
                <div className={styles.ctaIconWrap} aria-hidden="true">
                  <Send size={26} />
                </div>
                <h3 className={styles.ctaCardTitle}>Online Application</h3>
                <p className={styles.ctaCardSubtitle}>Fill online application form</p>
              </div>
              <span className={styles.ctaBadge}>Apply Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          APPLICATION MODAL
          ──────────────────────────────────────────────────────── */}
      {applyModalRole && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setApplyModalRole(null);
          }}
        >
          <div className={styles.modalBox}>
            <button
              className={styles.modalCloseBtn}
              onClick={() => setApplyModalRole(null)}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <h3 id="modal-title" className={styles.modalTitle}>
                  Apply for {applyModalRole}
                </h3>
                <p className={styles.modalSubtitle}>
                  Submit your details for solar & clean energy jobs in India & UAE.
                </p>

                <form onSubmit={handleSubmitForm} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="ren-name">
                      Full Name *
                    </label>
                    <input
                      id="ren-name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Shinde"
                      className={styles.formInput}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="ren-phone">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      id="ren-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="ren-exp">
                      Solar / Technical Background *
                    </label>
                    <select
                      id="ren-exp"
                      className={styles.formSelect}
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    >
                      <option value="Fresher / Trainee">Fresher / Trainee (Ready for Outdoor Work)</option>
                      <option value="ITI Electrician">ITI Electrician / Wireman</option>
                      <option value="1-3 Years Solar Field Experience">1-3 Years Solar Field Experience</option>
                      <option value="3+ Years Foreman / Supervisor">3+ Years Foreman / Lead</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="ren-passport">
                      Passport Status *
                    </label>
                    <select
                      id="ren-passport"
                      className={styles.formSelect}
                      value={form.passport}
                      onChange={(e) => setForm({ ...form, passport: e.target.value })}
                    >
                      <option value="Valid Passport (8+ Months)">Valid Passport (8+ Months)</option>
                      <option value="Applied / Under Renewal">Applied / Under Renewal</option>
                      <option value="No Passport (India Roles Only)">No Passport (India Roles Only)</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.btnSubmitModal}>
                    Submit Application Now
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 8px' }}>
                <CheckCircle2 size={46} color="#16a34a" style={{ margin: '0 auto 14px' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', marginBottom: 6 }}>
                  Application Registered!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.5 }}>
                  Thank you, <strong>{form.name}</strong>. Your application for <strong>{applyModalRole}</strong> has been received by our clean energy team. We will call you on <strong>{form.phone}</strong> for document processing.
                </p>
                <a
                  href={`https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20have%20applied%20for%20${encodeURIComponent(
                    applyModalRole
                  )}.%20My%20name%20is%20${encodeURIComponent(form.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#22c55e',
                    color: '#ffffff',
                    padding: '11px 22px',
                    borderRadius: 8,
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  <MessageCircle size={16} /> Fast-Track on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
