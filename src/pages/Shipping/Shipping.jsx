import { useState } from 'react';
import {
  Ship,
  Phone,
  CheckCircle2,
  Package,
  Truck,
  Layers,
  FileText,
  ShieldCheck,
  Users,
  Clock,
  Calendar,
  HeartPulse,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Info,
  X,
  MessageCircle,
  Send,
  MapPin,
  Check
} from 'lucide-react';
import styles from './Shipping.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const SHIPPING_ROLES = [
  {
    id: 'ship-1',
    icon: Ship,
    title: 'Port Laborer',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-2',
    icon: Package,
    title: 'Warehouse Packer',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-3',
    icon: Truck,
    title: 'Forklift Operator Helper',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-4',
    icon: Truck,
    title: 'Truck Loading Assistant',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-5',
    icon: Layers,
    title: 'Container Yard Worker',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-6',
    icon: FileText,
    title: 'Shipping Clerk Helper',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-7',
    icon: ShieldCheck,
    title: 'Port Security Guard',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-8',
    icon: Users,
    title: 'Logistics Assistant',
    location: 'India & UAE Ports',
  },
  {
    id: 'ship-9',
    icon: Package,
    title: 'Cargo Handler',
    location: 'India & UAE Ports',
  },
];

const BENEFITS = [
  { icon: Clock, text: 'Overtime Pay Available' },
  { icon: ShieldCheck, text: 'Safety Equipment Provided' },
  { icon: Calendar, text: 'Annual Leave 30 Days' },
  { icon: Truck, text: 'Free Food & Transport' },
  { icon: HeartPulse, text: 'Free Medical Insurance' },
  { icon: TrendingUp, text: 'Career Growth in Global Operations' },
];

const REQUIREMENTS = [
  'Minimum 10th pass or 12th/ITI preferred',
  'Age: 21-40 years',
  'Physical fitness required',
  'Height/Weight in normal range',
  'Willing to work in shifts',
  'No criminal record',
  'Basic English understanding',
  'No internal surgery',
];

const DOMESTIC_DOCS = [
  'Aadhaar Card (Valid)',
  'PAN Card',
  'Education Certificate',
  'Experience Certificate',
  'Medical Certificate',
  'Police Clearance',
  'Passport Photos (4)',
  'Bank Passbook/Cancelled Cheque',
];

const UAE_DOCS = [
  'Passport (Min 8 months)',
  'Police Clearance',
  'Education Certificate',
  'Experience Certificate',
  'White Background Photos',
  'GAMCA Medical',
  'Age Proof (10th/Birth)',
  'Medical Fitness Certificate',
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Application & Screening',
    desc: 'Submit your profile online or walk in. Initial verification of basic eligibility.',
  },
  {
    step: '02',
    title: 'Trade & Physical Test',
    desc: 'Practical skill evaluation and endurance test for port and warehouse roles.',
  },
  {
    step: '03',
    title: 'Medical & Background',
    desc: 'GAMCA approved medical test (for UAE) and comprehensive police verification.',
  },
  {
    step: '04',
    title: 'Visa & Documentation',
    desc: 'Employment visa stamping, contract signing, and government emigration clearance.',
  },
  {
    step: '05',
    title: 'Flight & Port Joining',
    desc: 'Employer-sponsored air tickets and full onboarding at ports/logistics hubs.',
  },
];

const FAQS = [
  {
    q: 'What are the typical working hours for shipping & logistics jobs?',
    a: 'Port and logistics operations run around the clock (24/7). Typical shifts are 10 to 12 hours with dedicated rest periods. Rotational day and night shifts are assigned with 1 mandatory weekly day off. Overtime hours are compensated per labor laws.',
  },
  {
    q: 'Are there any recruitment or processing fees charged to candidates?',
    a: 'No. Sunvi Hi-Tech adheres strictly to ethical international recruitment practices. We do not charge candidates any hidden placement fees or service fees. All terms are fully documented and transparent.',
  },
  {
    q: 'Do I need prior port or warehouse experience to apply?',
    a: 'Not necessarily. While experienced candidates receive preference for specialized helper and machine assistant roles, freshers with good physical fitness, dedication, and 10th/12th qualification are welcomed for trainee port laborer and packaging roles.',
  },
  {
    q: 'What facilities are provided for overseas roles in the UAE?',
    a: 'For UAE placements, employer packages typically include free air-conditioned company accommodation, subsidized or free duty meals / food allowance, daily shuttle transport between camp and port, complete PPE safety kits, and health insurance.',
  },
  {
    q: 'What is the GAMCA medical test, and is it mandatory?',
    a: 'Yes, for all UAE and GCC overseas work permits, candidates must pass a standard GAMCA (Gulf Agencies Program for Medical Examination) check verifying general physical fitness, chest X-ray, and infectious disease screening.',
  },
  {
    q: 'How quickly does the hiring and deployment process take?',
    a: 'From document submission and trade screening to visa stamping and flight booking, the process typically takes 3 to 5 weeks for overseas UAE roles, and 7 to 10 days for domestic port placements.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * Shipping – Industry landing page for Shipping & Logistics
 * Matches uploaded screenshot media_1793197544430_d62e0325.png
 */
export default function Shipping({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [applyModalRole, setApplyModalRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    experience: 'Fresher / 0-1 Year',
    passport: 'Valid Passport (8+ Months)',
  });

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  function handleOpenApply(roleName = 'Shipping & Logistics Role') {
    setApplyModalRole(roleName);
    setSubmitted(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className={styles.page} aria-label="Shipping and Logistics Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <h1 className={styles.heroTitle}>
                Shipping & Logistics Jobs in India & UAE
              </h1>

              <p className={styles.heroSubtitle}>
                Port, warehouse, and logistics opportunities in major trade hubs
              </p>

              <div className={styles.heroActions}>
                <button
                  type="button"
                  className={styles.btnApplyHero}
                  onClick={() => handleOpenApply('General Shipping & Logistics')}
                >
                  <Sparkles size={16} /> Apply Now - No Fee
                </button>

                <a href="tel:+918983656433" className={styles.btnCallHero}>
                  <Phone size={16} /> Call: +91 8983656433
                </a>
              </div>

              <div className={styles.heroPills}>
                <span className={styles.pillBadge}>✓ Direct Port Placement</span>
                <span className={styles.pillBadge}>✓ Global Trade Opportunities</span>
              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsHeader}>
                <Sparkles size={20} />
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
                *Benefits vary by role and country (India or UAE). Full details provided during the application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. AVAILABLE SHIPPING & LOGISTICS JOBS
          ──────────────────────────────────────────────────────── */}
      <section id="available-roles" className={styles.rolesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Available Shipping & Logistics Jobs
            </h2>
            <p className={styles.sectionSubtitle}>
              Opportunities in ports, warehouses, and logistics companies
            </p>
          </div>

          <div className={styles.rolesGrid}>
            {SHIPPING_ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.id} className={styles.roleCard}>
                  <div className={styles.roleCardTop}>
                    <div>
                      <h3 className={styles.roleCardTitle}>{role.title}</h3>
                      <span className={styles.roleLocation}>
                        <MapPin size={13} /> {role.location}
                      </span>
                    </div>
                    <div className={styles.roleIconWrap} aria-hidden="true">
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

              {/* Box 1: Shift Timings */}
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <Clock size={18} className={styles.infoBoxTitleIcon} /> Shift Timings
                </h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> 10-12 hour shifts typically
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Day: 8 AM - 8 PM
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Night: 8 PM - 8 AM
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> 6 days per week
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Port operations are 24/7
                  </li>
                </ul>
              </div>

              {/* Box 2: Provided by Employer */}
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <CheckCircle2 size={18} className={styles.infoBoxTitleIcon} /> Provided by Employer
                </h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Safety gear and uniform (PPE)
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Transportation from/to accommodation
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> On-site safety training
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Medical check-ups
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Water and shaded rest areas
                  </li>
                </ul>
              </div>

              {/* Notice Banner */}
              <div className={styles.noticeBanner}>
                <Info size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  <strong>Note:</strong> Shipping and logistics roles can involve physical labor and outdoor work in varying weather. Good physical fitness is required.
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
                <h3 className={styles.reqBlockTitle}>
                  <FileText size={18} style={{ color: '#c026d3' }} /> Documents Required
                </h3>

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
          4. PROCESS TIMELINE
          ──────────────────────────────────────────────────────── */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Process Timeline</h2>
            <p className={styles.sectionSubtitle}>
              Simple 5-step process from application to joining
            </p>
          </div>

          <div className={styles.timelineGrid}>
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className={styles.timelineCard}>
                <div className={styles.timelineNumber}>{item.step}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDesc}>{item.desc}</p>
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
              Answers to common questions about shipping & logistics jobs
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
          6. JOIN GLOBAL TRADE OPERATIONS (BOTTOM CTA)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Join Global Trade Operations</h2>
            <p className={styles.sectionSubtitle}>
              Start your career in shipping & logistics today with Sunvi Hi-Tech
            </p>
          </div>

          <div className={styles.ctaGrid}>
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20am%20interested%20in%20Shipping%20and%20Logistics%20jobs."
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
              onClick={() => handleOpenApply('Shipping & Logistics Applicant')}
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
                  Submit your details for port & warehouse opportunities in India & UAE.
                </p>

                <form onSubmit={handleSubmitForm} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="applicant-name">
                      Full Name *
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className={styles.formInput}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="applicant-phone">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="applicant-exp">
                      Experience in Logistics / Port *
                    </label>
                    <select
                      id="applicant-exp"
                      className={styles.formSelect}
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    >
                      <option value="Fresher / 0-1 Year">Fresher / 0-1 Year</option>
                      <option value="1-3 Years">1-3 Years Experience</option>
                      <option value="3-5 Years">3-5 Years Experience</option>
                      <option value="5+ Years">5+ Years (Senior / Foreman)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="applicant-passport">
                      Passport Status *
                    </label>
                    <select
                      id="applicant-passport"
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
                  Thank you, <strong>{form.name}</strong>. Your profile for <strong>{applyModalRole}</strong> has been registered with Sunvi Hi-Tech. Our logistics recruitment desk will contact you at <strong>{form.phone}</strong>.
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
