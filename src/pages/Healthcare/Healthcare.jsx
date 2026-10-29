import { useState } from 'react';
import {
  HeartPulse,
  Phone,
  CheckCircle2,
  Sparkles,
  Users,
  Hotel,
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
  Stethoscope,
  Activity,
  Pill,
  ShieldPlus
} from 'lucide-react';
import styles from './Healthcare.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const HEALTHCARE_ROLES = [
  {
    id: 'hc-1',
    icon: Stethoscope,
    title: 'Nursing Assistant',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-2',
    icon: Users,
    title: 'Patient Care Assistant',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-3',
    icon: Hotel,
    title: 'Hospital Housekeeping',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-4',
    icon: Activity,
    title: 'Medical Lab Assistant',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-5',
    icon: Truck,
    title: 'Ambulance Driver Helper',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-6',
    icon: Pill,
    title: 'Pharmacy Aider',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-7',
    icon: ShieldCheck,
    title: 'Hospital Security',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-8',
    icon: ShieldPlus,
    title: 'Medical Store Helper',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hc-9',
    icon: HeartPulse,
    title: 'Patient Care Attendant',
    location: 'India & UAE Opportunities',
  },
];

const BENEFITS = [
  { icon: Clock, text: 'Overtime Pay Available' },
  { icon: HeartPulse, text: 'Medical Insurance Included' },
  { icon: Calendar, text: 'Annual Leave 30 Days' },
  { icon: Hotel, text: 'Accommodation Provided' },
  { icon: Truck, text: 'Free Meals On Shift' },
  { icon: ShieldCheck, text: 'Safety Training Provided' },
];

const REQUIREMENTS = [
  'Minimum Education: 10th/12th/ANM Pass',
  'Age: 20-40 years',
  'Compassionate and patient nature',
  'Basic English communication',
  'Clean medical background',
  'Willing to work in shifts',
  'Attention to detail',
  'Teamwork attitude',
];

const DOMESTIC_DOCS = [
  'Aadhaar Card (Valid)',
  'PAN Card / Bank Account',
  'Education Certificate',
  'Medical / Nursing Cert (if any)',
  'Medical Fitness Certificate',
  'Police Clearance',
  'Passport Photos (4)',
  'Vaccination Certificate',
];

const UAE_DOCS = [
  'Passport (Min 8 months)',
  'Police Clearance',
  'Education Certificate',
  'Medical Certificate',
  'GAMCA Medical',
  'Age Proof (10th)',
  'Experience / Nursing Proof',
  'Attestation (if applicable)',
];

const PROCESS_STEPS = [
  {
    step: '1',
    days: 'Day 1-5',
    title: 'Application & Screening',
    desc: 'Submit documentation & initial healthcare screening',
  },
  {
    step: '2',
    days: 'Day 6-12',
    title: 'Medical Interview',
    desc: 'Interview with hospital HR & clinical lead',
  },
  {
    step: '3',
    days: 'Day 13-20',
    title: 'Job Offer',
    desc: 'Hospital employment contract & facility allocation',
  },
  {
    step: '4',
    days: 'Day 21-35',
    title: 'Visa Processing',
    desc: 'Medical visa stamping & healthcare pass clearance',
  },
  {
    step: '5',
    days: 'Day 36-45',
    title: 'Travel & Training',
    desc: 'Flight tickets, hospital arrival, and clinical orientation',
  },
];

const FAQS = [
  {
    q: 'Do I need previous hospital experience?',
    a: 'While clinical experience or nursing certificates (ANM/GNM) are advantageous, freshers with a 10th or 12th pass are actively recruited for patient attendant, hospital transport, and pharmacy helper roles. Full orientation is provided.',
  },
  {
    q: 'What safety measures are in place for healthcare workers?',
    a: 'All healthcare facilities strictly follow international infection control protocols. Staff are supplied with certified N95 masks, sanitizers, gloves, medical scrubs, and mandatory vaccinations.',
  },
  {
    q: 'Will I need to perform medical duties?',
    a: 'No. Support staff perform non-invasive assistance such as patient mobility support, sanitized bed preparation, hospital food delivery, and inventory movement under senior nurse supervision.',
  },
  {
    q: 'What kind of accommodation is provided in UAE?',
    a: 'Hospital partners provide dedicated staff residences with Wi-Fi, laundry facilities, air conditioning, and subsidized meals or food allowances.',
  },
  {
    q: 'Is there a career growth in the healthcare sector?',
    a: 'Yes. With hospital exposure and on-the-job training, assistants frequently transition to certified emergency medical technicians (EMTs), pharmacy technicians, and ward supervisors.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * Healthcare – Industry landing page for Health Care Jobs
 * Matches uploaded screenshot media_1793198537409_8613c025.png
 */
export default function Healthcare({ onNavigate }) {
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

  function handleOpenApply(roleName = 'Healthcare Role') {
    setApplyModalRole(roleName);
    setSubmitted(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className={styles.page} aria-label="Health Care Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <h1 className={styles.heroTitle}>
                Health Care Jobs in India & UAE
              </h1>

              <p className={styles.heroSubtitle}>
                Healthcare opportunities in <span className={styles.highlightText}>hospitals, clinics, and medical facilities</span>
              </p>

              <div className={styles.heroActions}>
                <button
                  type="button"
                  className={styles.btnApplyHero}
                  onClick={() => handleOpenApply('General Healthcare')}
                >
                  <Sparkles size={16} /> Apply Now - No Fee
                </button>

                <a href="tel:+918983656433" className={styles.btnCallHero}>
                  <Phone size={16} /> Call: +91 8983656433
                </a>
              </div>

              <div className={styles.heroPills}>
                <span className={styles.pillBadge}>✓ Immediate Opportunities</span>
                <span className={styles.pillBadge}>✓ Medical Sector Roles</span>
              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsHeader}>
                <HeartPulse size={20} />
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
                *Salary and benefits vary based on hospital/clinic accreditation and location (India vs UAE).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. AVAILABLE HEALTHCARE JOBS
          ──────────────────────────────────────────────────────── */}
      <section id="available-roles" className={styles.jobsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Available Healthcare Jobs
            </h2>
            <p className={styles.sectionSubtitle}>
              Opportunities in hospitals, clinics, and allied healthcare
            </p>
          </div>

          <div className={styles.jobsGrid}>
            {HEALTHCARE_ROLES.map((role) => {
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
                    <span className={styles.infoBullet}>•</span> 8-10 hour rotational shifts available
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Morning: 7 AM - 3 PM
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Evening: 3 PM - 11 PM
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Night: 11 PM - 7 AM
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> 6 days per week (rotational)
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
                    <span className={styles.infoBullet}>•</span> Medical uniform & protective gear (PPE)
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Healthcare insurance coverage
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Transportation allowance
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Regular vaccination check-ups
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Professional medical training programs
                  </li>
                </ul>
              </div>

              {/* Notice Banner */}
              <div className={styles.noticeBanner}>
                <Info size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  <strong>Note:</strong> Healthcare support roles involve patient interaction and clinical cleanliness. Compassion, hygiene awareness, and basic medical knowledge are preferred.
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
              Answers to common questions about healthcare jobs
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
            <h2 className={styles.sectionTitle}>Start Your Healthcare Career</h2>
            <p className={styles.sectionSubtitle}>
              Connect today for medical support opportunities in India and UAE
            </p>
          </div>

          <div className={styles.ctaGrid}>
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20am%20interested%20in%20Healthcare%20and%20Hospital%20jobs."
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
              onClick={() => handleOpenApply('Healthcare Candidate')}
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
                  Submit your details for hospital & clinic jobs in India & UAE.
                </p>

                <form onSubmit={handleSubmitForm} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hc-name">
                      Full Name *
                    </label>
                    <input
                      id="hc-name"
                      type="text"
                      required
                      placeholder="e.g. Meena Jadhav"
                      className={styles.formInput}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hc-phone">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      id="hc-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hc-exp">
                      Healthcare Background *
                    </label>
                    <select
                      id="hc-exp"
                      className={styles.formSelect}
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    >
                      <option value="Fresher / Trainee">Fresher / Trainee (Ready to Learn)</option>
                      <option value="1-2 Years Hospital Experience">1-2 Years Hospital Experience</option>
                      <option value="ANM / GNM Certified">ANM / GNM Nursing Certified</option>
                      <option value="Pharmacy / Lab Tech Assistant">Pharmacy / Lab Tech Assistant</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hc-passport">
                      Passport Status *
                    </label>
                    <select
                      id="hc-passport"
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
                  Thank you, <strong>{form.name}</strong>. Your profile for <strong>{applyModalRole}</strong> has been received by our healthcare placements desk. We will contact you at <strong>{form.phone}</strong>.
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
