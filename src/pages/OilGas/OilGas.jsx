import { useState } from 'react';
import {
  Flame,
  Phone,
  CheckCircle2,
  Wrench,
  Zap,
  ShieldCheck,
  Settings,
  HardHat,
  Factory,
  Clock,
  Calendar,
  Gift,
  Award,
  ChevronDown,
  ArrowRight,
  Info,
  X,
  MessageCircle,
  Send,
  MapPin,
  Check,
  Sparkles,
  Sliders
} from 'lucide-react';
import styles from './OilGas.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const OIL_GAS_ROLES = [
  {
    id: 'og-1',
    icon: HardHat,
    title: 'Rig Operator',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-2',
    icon: Flame,
    title: 'Welder (Pipeline)',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-3',
    icon: Wrench,
    title: 'Mechanical Fitter',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-4',
    icon: Sliders,
    title: 'Instrument Technician',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-5',
    icon: Zap,
    title: 'Electrician (Oil & Gas)',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-6',
    icon: ShieldCheck,
    title: 'Safety Officer',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-7',
    icon: Wrench,
    title: 'Pipe Fitter',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-8',
    icon: Settings,
    title: 'Rig Mechanic',
    location: 'India & Gulf Region',
  },
  {
    id: 'og-9',
    icon: Factory,
    title: 'Plant Operator',
    location: 'India & Gulf Region',
  },
];

const BENEFITS = [
  { icon: Award, text: 'Competitive Energy Wages' },
  { icon: ShieldCheck, text: 'Comprehensive Safety Training' },
  { icon: Calendar, text: 'Rotational Schedules' },
  { icon: Gift, text: 'Hazard Allowances' },
];

const REQUIREMENTS = [
  'Minimum Education: ITI/Diploma preferred',
  'Age: 21-45 years',
  'Relevant trade experience required',
  'Pass medical examination',
  'Willing to work rotational shifts',
  'Valid passport (for Gulf region roles)',
  'Technical certification preferred',
  'Prepared for high pressure environment',
];

const GULF_DOCS = [
  'Passport (Min 8 months)',
  'Police Clearance',
  'Education Certificate',
  'Experience Certificate',
  'Medical Certificate',
  'Safety Certificate',
];

const INDIA_DOCS = [
  'Aadhaar Card (Valid)',
  'PAN Card Copy',
  'Education Certificate',
  'Experience Certificate',
  'Medical Certificate',
  'Safety Training Records',
];

const RECRUITMENT_PROCESS = [
  {
    step: '1',
    days: 'Day 1-5',
    title: 'Application & Screening',
    desc: 'Submit documentation & initial screening',
  },
  {
    step: '2',
    days: 'Day 6-12',
    title: 'Technical Assessment',
    desc: 'Practical trade test & client interview',
  },
  {
    step: '3',
    days: 'Day 13-20',
    title: 'Safety & Medical Exam',
    desc: 'HSE safety training & official medical check (GAMCA for Gulf)',
  },
  {
    step: '4',
    days: 'Day 21-35',
    title: 'Visa & Offer Processing',
    desc: 'Work permit approval & contract signing',
  },
  {
    step: '5',
    days: 'Day 36-45',
    title: 'Deployment',
    desc: 'Flight tickets & site mobilization',
  },
];

const FAQS = [
  {
    q: 'What qualifications are required for oil & gas roles?',
    a: 'For technicians, fitters, and operators, an ITI, Polytechnic Diploma, or relevant vocational trade certification is typically preferred along with at least 1-2 years of hands-on site experience. Helper roles require physical endurance and basic technical orientation.',
  },
  {
    q: 'What are rotational schedules (28/28, 42/21) and how do they work?',
    a: 'Rotational shift patterns mean you work on-site for a fixed number of days followed by fully paid off-duty leave. For example, 28 days of duty followed by 28 days off, or 42 days on followed by 21 days off. Round-trip flights for leave periods are employer-sponsored.',
  },
  {
    q: 'Are there any recruitment or placement charges for candidates?',
    a: 'No. Sunvi Hi-Tech operates strictly under ethical recruitment compliance. We never charge candidates any hidden fees. Client companies sponsor the recruitment, visa stamping, and flights.',
  },
  {
    q: 'What safety certifications are needed before going offshore/onshore?',
    a: 'Depending on the role and project, certifications such as BOSIET (Basic Offshore Safety Induction and Emergency Training), OPITO, or standard HSE certifications may be required. Sunvi Hi-Tech assists selected candidates in completing necessary accreditations.',
  },
  {
    q: 'Is accommodation, food, and transport provided at site camps?',
    a: 'Yes. All offshore platforms and remote desert camps provide free air-conditioned accommodation, three meals daily with diverse catering, recreational facilities, and fully sponsored logistics between the airport and work sites.',
  },
  {
    q: 'What is the timeline for deployment to Gulf countries?',
    a: 'From trade test clearance to GAMCA medical certification, work permit issuance, and flight booking, the process typically takes 30 to 45 days.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * OilGas – Industry landing page for Oil & Gas Industry Jobs
 * Matches uploaded screenshot media_1793197952181_c0d07d7b.png
 */
export default function OilGas({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [applyModalRole, setApplyModalRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    qualification: 'ITI / Diploma',
    passport: 'Valid Passport (8+ Months)',
  });

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  function handleOpenApply(roleName = 'Oil & Gas Role') {
    setApplyModalRole(roleName);
    setSubmitted(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className={styles.page} aria-label="Oil and Gas Industry Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <h1 className={styles.heroTitle}>
                Oil & Gas Industry Jobs
              </h1>

              <p className={styles.heroSubtitle}>
                Powering energy careers for <span className={styles.highlightText}>skilled technicians</span> across India and Gulf region
              </p>

              <div className={styles.heroActions}>
                <button
                  type="button"
                  className={styles.btnApplyHero}
                  onClick={() => handleOpenApply('General Oil & Gas')}
                >
                  <Sparkles size={16} /> Apply Now - No Fee
                </button>

                <a href="tel:+918983656433" className={styles.btnCallHero}>
                  <Phone size={16} /> Call: +91 8983656433
                </a>
              </div>

              <div className={styles.heroPills}>
                <span className={styles.pillBadge}>✓ Immediate Opportunities</span>
                <span className={styles.pillBadge}>✓ Gulf Region Roles</span>
              </div>
            </div>

            {/* Right: Industry Benefits Card */}
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsHeader}>
                <Flame size={20} />
                <h3 className={styles.benefitsHeaderTitle}>Industry Benefits</h3>
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
                *Benefits vary after technical evaluation (e.g. 28/28, 42/21 days rotation). Full details provided during the interview process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. OIL & GAS INDUSTRY POSITIONS
          ──────────────────────────────────────────────────────── */}
      <section id="available-roles" className={styles.positionsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Oil & Gas Industry Positions
            </h2>
            <p className={styles.sectionSubtitle}>
              Technical & operational roles in upstream and downstream operations
            </p>
          </div>

          <div className={styles.positionsGrid}>
            {OIL_GAS_ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.id} className={styles.positionCard}>
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
          3. WORK ENVIRONMENT & REQUIREMENTS / DOCUMENTS
          ──────────────────────────────────────────────────────── */}
      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.detailsGrid}>
            {/* Left Column: Work Environment */}
            <div className={styles.envCol}>
              <h2 className={styles.colHeading}>Oil & Gas Work Environment</h2>

              {/* Box 1: Work Schedule */}
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <Clock size={18} className={styles.infoBoxTitleIcon} /> Work Schedule
                </h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Rotational patterns typically (28/28, 42/21 days)
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> 12-hour shifts typically
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Off-duty travel time provided
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Camp accommodation & food covered
                  </li>
                </ul>
              </div>

              {/* Box 2: Safety Protocols */}
              <div className={styles.infoBox}>
                <h3 className={styles.infoBoxTitle}>
                  <ShieldCheck size={18} className={styles.infoBoxTitleIcon} /> Safety Protocols
                </h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> HSE safety certification required
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Mandatory training on arrival
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> PPE kit provided at no cost
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Regular safety drills
                  </li>
                </ul>
              </div>

              {/* Notice Banner */}
              <div className={styles.noticeBanner}>
                <Info size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  <strong>Note:</strong> Oil & gas positions require candidate safety certifications. Training provided for selected candidates.
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

                {/* Gulf Docs */}
                <div className={styles.docGroup}>
                  <h4 className={styles.docGroupSubtitle}>For Gulf Region Roles:</h4>
                  <div className={styles.docPillGrid}>
                    {GULF_DOCS.map((doc, idx) => (
                      <div key={idx} className={styles.docPill}>
                        <Check size={13} className={styles.docPillIcon} />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* India Docs */}
                <div className={styles.docGroup} style={{ marginTop: 18 }}>
                  <h4 className={styles.docGroupSubtitle}>For India Roles:</h4>
                  <div className={styles.docPillGrid}>
                    {INDIA_DOCS.map((doc, idx) => (
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
          4. RECRUITMENT PROCESS (WITH DAYS MILESTONES)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recruitment Process</h2>
            <p className={styles.sectionSubtitle}>
              Fast & transparent hiring timeline for qualified candidates
            </p>
          </div>

          <div className={styles.processGrid}>
            {RECRUITMENT_PROCESS.map((item) => (
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
          5. OIL & GAS INDUSTRY FAQS
          ──────────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Oil & Gas Industry FAQs</h2>
            <p className={styles.sectionSubtitle}>
              Common questions about energy sector jobs
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
          6. START YOUR ENERGY CAREER (BOTTOM CTA)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Start Your Energy Career</h2>
            <p className={styles.sectionSubtitle}>
              Advancing your energy sector with premium opportunities
            </p>
          </div>

          <div className={styles.ctaGrid}>
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20am%20interested%20in%20Oil%20and%20Gas%20industry%20jobs.%20Here%20is%20my%20technical%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.ctaCard} ${styles.ctaCardGreen}`}
            >
              <div>
                <div className={styles.ctaIconWrap} aria-hidden="true">
                  <MessageCircle size={28} />
                </div>
                <h3 className={styles.ctaCardTitle}>WhatsApp Technical CV</h3>
                <p className={styles.ctaCardSubtitle}>Send technical certificates</p>
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
                <h3 className={styles.ctaCardTitle}>Call for Opportunities</h3>
                <p className={styles.ctaCardSubtitle}>Speak with our technical team</p>
              </div>
              <span className={styles.ctaBadge}>+91 8983656433</span>
            </a>

            {/* Online Application Card */}
            <button
              type="button"
              className={`${styles.ctaCard} ${styles.ctaCardPurple}`}
              onClick={() => handleOpenApply('Oil & Gas Candidate')}
            >
              <div>
                <div className={styles.ctaIconWrap} aria-hidden="true">
                  <Send size={26} />
                </div>
                <h3 className={styles.ctaCardTitle}>Online Application</h3>
                <p className={styles.ctaCardSubtitle}>Apply for energy sector jobs</p>
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
                  Submit your technical profile for oil & gas projects across India & Gulf.
                </p>

                <form onSubmit={handleSubmitForm} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="og-name">
                      Full Name *
                    </label>
                    <input
                      id="og-name"
                      type="text"
                      required
                      placeholder="e.g. Suresh Patil"
                      className={styles.formInput}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="og-phone">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      id="og-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="og-qual">
                      Technical Qualification *
                    </label>
                    <select
                      id="og-qual"
                      className={styles.formSelect}
                      value={form.qualification}
                      onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                    >
                      <option value="ITI Certified">ITI Certified (Fitter/Welder/Electrician)</option>
                      <option value="Polytechnic Diploma">Polytechnic Diploma (Mechanical/Electrical)</option>
                      <option value="B.Tech / B.E.">B.Tech / B.E. (Engineering)</option>
                      <option value="Experienced Site Technician">Experienced Site Technician (3+ Years)</option>
                      <option value="Fresher / Helper">General Helper / Trainee</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="og-passport">
                      Passport Status *
                    </label>
                    <select
                      id="og-passport"
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
                  Technical Profile Received!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.5 }}>
                  Thank you, <strong>{form.name}</strong>. Your profile for <strong>{applyModalRole}</strong> has been forwarded to our energy recruitment division. We will connect with you on <strong>{form.phone}</strong> for technical screening.
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
