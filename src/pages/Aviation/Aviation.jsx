import { useState } from 'react';
import {
  Plane,
  Phone,
  CheckCircle2,
  Sparkles,
  Luggage,
  Clock,
  Calendar,
  HeartPulse,
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
  Package,
  Wrench,
  Users
} from 'lucide-react';
import styles from './Aviation.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const AVIATION_ROLES = [
  {
    id: 'av-1',
    icon: Sparkles,
    title: 'Aircraft Cleaner',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'av-2',
    icon: Luggage,
    title: 'Baggage Handler / Loader',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'av-3',
    icon: Package,
    title: 'Cargo Handler',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'av-4',
    icon: Users,
    title: 'Ramp Agent Ground Staff',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'av-5',
    icon: Wrench,
    title: 'Aircraft Maintenance Helper',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'av-6',
    icon: ShieldCheck,
    title: 'Airside Security Guard',
    location: 'India & UAE Opportunities',
  },
];

const BENEFITS = [
  { icon: Clock, text: 'Overtime Pay Available' },
  { icon: HeartPulse, text: 'Medical Insurance Included' },
  { icon: Calendar, text: 'Annual Leave 30 Days' },
  { icon: Plane, text: 'Air Travel Concessions' },
  { icon: Truck, text: 'Airport Transport Provided' },
];

const REQUIREMENTS = [
  'Minimum Education: 10th/12th Pass',
  'Age: 21-40 years',
  'Physical fitness required',
  'Willing to work in shifts',
  'Teamwork attitude',
  'Clean background & police clearance',
];

const DOMESTIC_DOCS = [
  'Aadhaar Card (Valid)',
  'PAN Card / Bank Account Details',
  'Education Certificate',
  'Experience Certificate',
  'Passport Photos (4)',
  'Police Clearance Certificate',
];

const UAE_DOCS = [
  'Passport (Min 8 months)',
  'Police Clearance (PCC)',
  'Education Certificate',
  'Experience Certificate',
  'GAMCA Medical',
  'Airport Pass Clearance',
];

const PROCESS_STEPS = [
  {
    step: '1',
    days: 'Day 1-5',
    title: 'Application & Screening',
    desc: 'Submit documentation & initial aviation eligibility screening',
  },
  {
    step: '2',
    days: 'Day 6-12',
    title: 'Interview',
    desc: 'Face-to-face or video assessment with airport handler',
  },
  {
    step: '3',
    days: 'Day 13-20',
    title: 'Job Offer',
    desc: 'Offer letter confirmation & airport security documentation',
  },
  {
    step: '4',
    days: 'Day 21-35',
    title: 'Visa Processing',
    desc: 'Work permit clearance & airside pass issuance',
  },
  {
    step: '5',
    days: 'Day 36-45',
    title: 'Travel & Training',
    desc: 'Flight tickets, airport arrival, and on-site ramp training',
  },
];

const FAQS = [
  {
    q: 'What documents are needed for UAE aviation jobs?',
    a: 'For UAE roles, you need a valid passport (8+ months validity), educational certificates, police clearance certificate (PCC), GAMCA medical clearance, and background attestation for airside airport pass clearance.',
  },
  {
    q: 'What documents are needed for India airport jobs?',
    a: 'For Indian airport roles, you need a valid Aadhaar card, PAN card, original educational certificates, experience letters, bank account details, and local police verification.',
  },
  {
    q: 'Can I apply for both India and UAE?',
    a: 'Yes, you can specify your preference during the application. We have active placement drives for tier-1 Indian airports as well as international hubs across all 7 Emirates of the UAE.',
  },
  {
    q: 'Who pays for my flight tickets to UAE?',
    a: 'For all overseas UAE airport assignments, company-sponsored air tickets are provided as part of the overseas employment contract under standard international compliance.',
  },
  {
    q: 'What if I don’t have airport experience?',
    a: 'Previous aviation experience is a plus, but freshers are actively considered for ramp loaders, aircraft cabin cleaners, and cargo assistants. Mandatory airside safety and aviation etiquette training is provided.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * Aviation – Industry landing page for Aviation Jobs in India & UAE
 * Matches uploaded screenshot media_1793198410007_53d00fb6.png
 */
export default function Aviation({ onNavigate }) {
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

  function handleOpenApply(roleName = 'Aviation Role') {
    setApplyModalRole(roleName);
    setSubmitted(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className={styles.page} aria-label="Aviation Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <h1 className={styles.heroTitle}>
                Aviation Jobs in India & UAE
              </h1>

              <p className={styles.heroSubtitle}>
                Premium opportunities for <span className={styles.highlightText}>skilled workers</span> across India and all 7 Emirates
              </p>

              <div className={styles.heroActions}>
                <button
                  type="button"
                  className={styles.btnApplyHero}
                  onClick={() => handleOpenApply('General Aviation')}
                >
                  <Sparkles size={16} /> Apply Now - No Fee
                </button>

                <a href="tel:+918983656433" className={styles.btnCallHero}>
                  <Phone size={16} /> Call: +91 8983656433
                </a>
              </div>

              <div className={styles.heroPills}>
                <span className={styles.pillBadge}>✓ Immediate Opportunities</span>
                <span className={styles.pillBadge}>✓ Airport Contracts</span>
              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsHeader}>
                <Plane size={20} />
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
                *Salary and benefits vary based on airline/ground handler and location (India vs UAE). Full details provided during the interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. AVAILABLE AVIATION JOBS
          ──────────────────────────────────────────────────────── */}
      <section id="available-roles" className={styles.jobsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Available Aviation Jobs
            </h2>
            <p className={styles.sectionSubtitle}>
              Opportunities for skilled workers across India and UAE
            </p>
          </div>

          <div className={styles.jobsGrid}>
            {AVIATION_ROLES.map((role) => {
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

              {/* Box 1: Shift Timings */}
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <Clock size={18} className={styles.infoBoxTitleIcon} /> Shift Timings
                </h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Day Shift: 6:00 AM - 4:00 PM
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Night Shift: 8:00 PM - 6:00 AM
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> 24/7 airport operations roster
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> 5-6 days per week
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
                    <span className={styles.infoBullet}>•</span> Safety uniform & equipment (Airside PPE)
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Transportation to/from airport terminal
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> On-the-job aviation training
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Medical check-ups & security pass
                  </li>
                </ul>
              </div>

              {/* Notice Banner */}
              <div className={styles.noticeBanner}>
                <Info size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  <strong>Note:</strong> Airside security clearance requires a clean background verification (no police records or pending issues).
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
              Answers to common questions about aviation jobs
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
            <h2 className={styles.sectionTitle}>Ready to Apply?</h2>
            <p className={styles.sectionSubtitle}>
              Connect today for premium aviation opportunities across India and UAE
            </p>
          </div>

          <div className={styles.ctaGrid}>
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20am%20interested%20in%20Aviation%20and%20Airport%20jobs."
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
              onClick={() => handleOpenApply('Aviation Candidate')}
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
                  Submit your details for airport & ground handling jobs in India & UAE.
                </p>

                <form onSubmit={handleSubmitForm} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="av-name">
                      Full Name *
                    </label>
                    <input
                      id="av-name"
                      type="text"
                      required
                      placeholder="e.g. Anand Kulkarni"
                      className={styles.formInput}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="av-phone">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      id="av-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="av-exp">
                      Aviation / Airport Experience *
                    </label>
                    <select
                      id="av-exp"
                      className={styles.formSelect}
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    >
                      <option value="Fresher / Trainee">Fresher / Trainee</option>
                      <option value="1-2 Years Airport Ground Ops">1-2 Years Airport Ground Ops</option>
                      <option value="3+ Years Senior / Lead">3+ Years Senior / Ramp Lead</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="av-passport">
                      Passport Status *
                    </label>
                    <select
                      id="av-passport"
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
                  Aviation Application Registered!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.5 }}>
                  Thank you, <strong>{form.name}</strong>. Your profile for <strong>{applyModalRole}</strong> has been registered with our aviation recruitment team. We will call you on <strong>{form.phone}</strong> for document verification.
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
