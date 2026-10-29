import { useState } from 'react';
import {
  Hotel,
  Phone,
  CheckCircle2,
  Sparkles,
  Utensils,
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
  Coffee,
  Compass,
  Users,
  ConciergeBell
} from 'lucide-react';
import styles from './Tourism.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const HOSPITALITY_ROLES = [
  {
    id: 'hosp-1',
    icon: Hotel,
    title: 'Housekeeping Staff',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-2',
    icon: ConciergeBell,
    title: 'Hotel Front Desk',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-3',
    icon: Utensils,
    title: 'Waiter / Waitress',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-4',
    icon: Coffee,
    title: 'Kitchen Helper',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-5',
    icon: Hotel,
    title: 'Bell Boy / Porter',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-6',
    icon: Coffee,
    title: 'Room Service Staff',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-7',
    icon: ShieldCheck,
    title: 'Hotel Security',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-8',
    icon: Users,
    title: 'Cleaning Staff',
    location: 'India & UAE Opportunities',
  },
  {
    id: 'hosp-9',
    icon: Compass,
    title: 'Tour Guide Assistant',
    location: 'India & UAE Opportunities',
  },
];

const BENEFITS = [
  { icon: Clock, text: 'Overtime Pay Available' },
  { icon: HeartPulse, text: 'Medical Insurance Included' },
  { icon: Calendar, text: 'Annual Leave 30 Days' },
  { icon: Hotel, text: 'Accommodation Provided' },
  { icon: Utensils, text: 'Free Meals On Duty' },
  { icon: Truck, text: 'Transportation Provided' },
];

const REQUIREMENTS = [
  'Minimum Education: 10th/12th Pass',
  'Age: 20-35 years',
  'Good communication skills',
  'Pleasing personality',
  'Willing to work in shifts',
  'No criminal record',
  'Neat and clean appearance',
  'Customer service oriented',
];

const DOMESTIC_DOCS = [
  'Aadhaar Card (Valid)',
  'PAN Card / Bank Details',
  'Education Certificate',
  'Experience Certificate',
  'Medical Fitness Form',
  'Police Clearance',
  'Passport Photos (4)',
  'Vaccination Certificate',
];

const UAE_DOCS = [
  'Passport (Min 8 months)',
  'Police Clearance',
  'Education Certificate',
  'Experience Certificate',
  'White Background Photos',
  'GAMCA Medical',
  'Age Proof (10th)',
  'Attestation (if applicable)',
];

const PROCESS_STEPS = [
  {
    step: '1',
    days: 'Day 1-5',
    title: 'Application & Screening',
    desc: 'Submit documentation & initial hospitality screening',
  },
  {
    step: '2',
    days: 'Day 6-12',
    title: 'Client Interview',
    desc: 'Face-to-face or video interview with hotel managers',
  },
  {
    step: '3',
    days: 'Day 13-20',
    title: 'Job Offer',
    desc: 'Review and sign employment offer letter',
  },
  {
    step: '4',
    days: 'Day 21-35',
    title: 'Visa Processing',
    desc: 'Work permit and UAE employment visa stamping',
  },
  {
    step: '5',
    days: 'Day 36-45',
    title: 'Travel & Joining',
    desc: 'Flight ticket issued & hotel staff onboarding',
  },
];

const FAQS = [
  {
    q: 'What kind of hotels will I work in?',
    a: 'We place candidates in leading 3-star, 4-star, and luxury 5-star international hotel chains and beach resorts across Dubai, Abu Dhabi, Sharjah, and top hospitality hubs in India.',
  },
  {
    q: 'Do tips form an addition to salary?',
    a: 'Yes, in most front-of-house positions (waiters, bell boys, front desk, and room attendants), monthly guest tips and service charge distributions form a substantial boost to base earnings.',
  },
  {
    q: 'Is accommodation provided in UAE?',
    a: 'Yes. Full hotel staff accommodation equipped with air conditioning, high-speed Wi-Fi, laundry facilities, and gym amenities is provided at zero cost to the candidate.',
  },
  {
    q: 'What if I don’t have hotel experience?',
    a: 'Freshers are warmly welcomed for roles such as kitchen stewards, housekeeping assistants, and cleaning staff. Selected candidates receive professional grooming and customer service training.',
  },
  {
    q: 'How much can I earn in tips?',
    a: 'During peak tourist seasons in the UAE, tips typically add 30% to 60% on top of regular monthly compensation.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * Tourism – Industry landing page for Tourism & Hospitality Jobs
 * Matches uploaded screenshot media_1793198361421_cba00f8e.png
 */
export default function Tourism({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [applyModalRole, setApplyModalRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    experience: 'Fresher (Grooming Ready)',
    passport: 'Valid Passport (8+ Months)',
  });

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  function handleOpenApply(roleName = 'Hospitality Role') {
    setApplyModalRole(roleName);
    setSubmitted(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className={styles.page} aria-label="Tourism and Hospitality Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <h1 className={styles.heroTitle}>
                Tourism & Hospitality Jobs in India & UAE
              </h1>

              <p className={styles.heroSubtitle}>
                Premium opportunities in <span className={styles.highlightText}>hotels, resorts, and tourism</span> across India and all 7 Emirates
              </p>

              <div className={styles.heroActions}>
                <button
                  type="button"
                  className={styles.btnApplyHero}
                  onClick={() => handleOpenApply('General Hospitality')}
                >
                  <Sparkles size={16} /> Apply Now - No Fee
                </button>

                <a href="tel:+918983656433" className={styles.btnCallHero}>
                  <Phone size={16} /> Call: +91 8983656433
                </a>
              </div>

              <div className={styles.heroPills}>
                <span className={styles.pillBadge}>✓ Immediate Opportunities</span>
                <span className={styles.pillBadge}>✓ Luxury Hospitality Roles</span>
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
                *Salary and benefits vary based on hotel star rating and location (India vs UAE). Full details provided during the interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. AVAILABLE HOSPITALITY JOBS
          ──────────────────────────────────────────────────────── */}
      <section id="available-roles" className={styles.jobsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Available Hospitality Jobs
            </h2>
            <p className={styles.sectionSubtitle}>
              Opportunities in luxury hotels, resorts, and culinary services
            </p>
          </div>

          <div className={styles.jobsGrid}>
            {HOSPITALITY_ROLES.map((role) => {
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
                    <span className={styles.infoBullet}>•</span> 6 days per week
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
                    <span className={styles.infoBullet}>•</span> Professional uniform and laundry
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Staff accommodation with Wi-Fi
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Duty meals during shifts
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Transportation to/from hotel
                  </li>
                  <li className={styles.infoListItem}>
                    <span className={styles.infoBullet}>•</span> Customer service training
                  </li>
                </ul>
              </div>

              {/* Notice Banner */}
              <div className={styles.noticeBanner}>
                <Info size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>
                  <strong>Note:</strong> Active customer service roles require polite communication skills. Experience in 3-star or 5-star properties is an advantage.
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
              Simple 5-day process from application to joining
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
              Answers to common questions about hospitality jobs
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
            <h2 className={styles.sectionTitle}>Ready for a Hospitality Career?</h2>
            <p className={styles.sectionSubtitle}>
              Connect directly for premium hotel jobs in India and UAE
            </p>
          </div>

          <div className={styles.ctaGrid}>
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20am%20interested%20in%20Hotel%20and%20Hospitality%20jobs."
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
              onClick={() => handleOpenApply('Hospitality Candidate')}
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
                  Submit your profile for hotel & resort roles in India & UAE.
                </p>

                <form onSubmit={handleSubmitForm} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hosp-name">
                      Full Name *
                    </label>
                    <input
                      id="hosp-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className={styles.formInput}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hosp-phone">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      id="hosp-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hosp-exp">
                      Hospitality Experience *
                    </label>
                    <select
                      id="hosp-exp"
                      className={styles.formSelect}
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                    >
                      <option value="Fresher (Grooming Ready)">Fresher / Trainee</option>
                      <option value="1-2 Years in Hotel/Restaurant">1-2 Years in Hotel/Restaurant</option>
                      <option value="3-5 Years in 3-5 Star Property">3-5 Years in 3-5 Star Property</option>
                      <option value="Supervisor / Captain">Supervisor / Captain / Lead</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="hosp-passport">
                      Passport Status *
                    </label>
                    <select
                      id="hosp-passport"
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
                  Application Received!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.5 }}>
                  Thank you, <strong>{form.name}</strong>. Your profile for <strong>{applyModalRole}</strong> has been received by our hospitality division. We will call you on <strong>{form.phone}</strong> for screening.
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
