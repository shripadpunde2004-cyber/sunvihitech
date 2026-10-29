import { useState } from 'react';
import { 
  Building2, 
  Phone, 
  CheckCircle2, 
  Hammer, 
  Wrench, 
  Zap, 
  Flame, 
  Paintbrush, 
  HardHat, 
  Layers, 
  FileText, 
  Users, 
  ChevronDown, 
  ArrowDown, 
  ArrowRight, 
  Send, 
  X, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  Lightbulb 
} from 'lucide-react';
import styles from './Construction.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const CONSTRUCTION_ROLES = [
  {
    id: 'role-1',
    icon: Hammer,
    title: 'Mason & Bricklayer',
    desc: 'Block laying, plastering, tiling, and structural brickwork',
    location: 'India & UAE',
  },
  {
    id: 'role-2',
    icon: Wrench,
    title: 'Construction Carpenter',
    desc: 'Shuttering, formwork, scaffolding, and interior woodwork',
    location: 'India & UAE',
  },
  {
    id: 'role-3',
    icon: Zap,
    title: 'Site Electrician',
    desc: 'Conduit piping, DB dressing, cable pulling, and electrical testing',
    location: 'India & UAE',
  },
  {
    id: 'role-4',
    icon: Wrench,
    title: 'Plumber & Pipe Fitter',
    desc: 'PPR/GI pipe laying, sanitary fittings, drainage networks, and pressure testing',
    location: 'India & UAE',
  },
  {
    id: 'role-5',
    icon: HardHat,
    title: 'Construction Supervisor',
    desc: 'Site team management, daily scheduling, quality control, and safety compliance',
    location: 'India & UAE',
  },
  {
    id: 'role-6',
    icon: Flame,
    title: 'Welder & Fabricator',
    desc: 'ARC, TIG, MIG welding, structural steel fabrication, and cut-and-grind work',
    location: 'India & UAE',
  },
  {
    id: 'role-7',
    icon: Layers,
    title: 'Tile & Marble Worker',
    desc: 'Floor and wall tiling, marble fixing, granite cutting, and joint grouting',
    location: 'India & UAE',
  },
  {
    id: 'role-8',
    icon: Paintbrush,
    title: 'Painter',
    desc: 'Spray painting, putty work, wall texturing, and protective coating',
    location: 'India & UAE',
  },
  {
    id: 'role-9',
    icon: Users,
    title: 'Construction Helper',
    desc: 'Site clearance, material transport, assisting specialized tradesmen, and general utility work',
    location: 'India & UAE',
  },
];

const WHO_CAN_APPLY = [
  'Age: 20 to 45 years',
  'Physical fitness and medically fit certificate',
  'Experience: Minimum 1 to 2 years (freshers also considered)',
  'Prior site experience in home state preferred',
  'Willingness to relocate to UAE or other Indian states',
];

const DOCS_UAE = [
  'Valid Indian Passport (minimum 8 months validity)',
  'Updated Resume / Bio-Data with passport size photo',
  'Trade Test Certificate (ITI / Vocational if available)',
  'Age and identity proof (Aadhaar Card / Voter ID)',
  'GAMCA / UAE Approved Medical Fitness Certificate',
  'Police Clearance Certificate (PCC) if required',
];

const DOCS_DOMESTIC = [
  'Aadhaar Card and PAN Card for payroll registration',
  'Updated Bio-Data / Resume with permanent address proof',
  'Bank Account passbook / cancelled cheque for direct salary deposit',
  'Trade qualification certificate or prior site supervisor reference',
  '4 passport-size color photographs',
];

const STEPS = [
  {
    step: '01',
    title: 'Apply & Trade Test',
    desc: 'Submit your profile and appear for a practical trade evaluation',
  },
  {
    step: '02',
    title: 'Interview',
    desc: 'Direct HR and technical interview with the employer hiring team',
  },
  {
    step: '03',
    title: 'Job Offer',
    desc: 'Receive transparent offer letter with salary and benefits breakdown',
  },
  {
    step: '04',
    title: 'Visa & Medical',
    desc: 'Medical checkup and employment visa processing guided by Sunvi',
  },
  {
    step: '05',
    title: 'Join the Site',
    desc: 'Travel and join the construction project with on-ground orientation',
  },
];

const FAQS = [
  {
    q: 'Are there any placement fees for candidates?',
    a: 'No. Sunvi Hi-Tech operates strictly under ethical recruitment guidelines. We do not charge predatory recruitment fees from candidates. All hiring agreements are transparent.',
  },
  {
    q: 'What qualifications are needed for construction jobs?',
    a: 'Requirements depend on the trade. Skilled roles (welders, electricians, operators) require hands-on experience or ITI certifications. General helper roles require good physical health and readiness to learn on site.',
  },
  {
    q: 'How long does the recruitment process take for UAE jobs?',
    a: 'Typically, the end-to-end timeline from trade test clearance and offer letter issuance to medical tests and UAE visa stamping takes 3 to 5 weeks.',
  },
  {
    q: 'Are food and safety equipment provided at the site?',
    a: 'Yes. Overseas contracts guarantee employer-provided bachelor accommodation, duty meals or monthly food allowances, and all mandated Personal Protective Equipment (PPE) including helmets, safety shoes, and harnesses.',
  },
  {
    q: 'How can I apply for a job today?',
    a: 'You can click "Apply Now" on any position on this page, connect directly with our recruitment desk via WhatsApp at +91 8983656433, or visit our office in Pune.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * Construction – Industry landing page for Construction & Real Estate
 *
 * Exact sections from screenshot:
 *   1. Hero Banner: Direct Placement with Top Companies + Glass Job Overview Card
 *   2. Available Construction Jobs: 9 role cards with gradient apply buttons
 *   3. Who Can Apply & Documents Needed: Dual checklist cards with domestic/UAE tabs
 *   4. 5 Steps to Get Hired: Visual step-by-step pipeline
 *   5. Frequently Asked Questions: Interactive accordion
 *   6. Ready to Apply: WhatsApp, Call, and Online Apply action cards
 */
export default function Construction({ onNavigate }) {
  const [docTab, setDocTab] = useState('uae');
  const [openFaq, setOpenFaq] = useState(null);
  const [applyModalRole, setApplyModalRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [form, setForm] = useState({
    name: '',
    phone: '',
    experience: '2-4 Years',
    passport: 'Valid Passport (8+ Months)',
  });

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  function handleOpenApply(roleName) {
    setApplyModalRole(roleName);
    setSubmitted(false);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className={styles.page} aria-label="Construction and Real Estate Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div>
              <h1 className={styles.heroTitle}>
                Construction Jobs in India & UAE.
                <span className={styles.highlightPink}>
                  Direct Placement with Top Companies.
                </span>
              </h1>

              <p className={styles.heroSubtitle}>
                Apply for skilled and general worker roles in top construction and real estate projects across India and UAE. 100% direct placement by Sunvi Hi-Tech.
              </p>

              <div className={styles.heroActions}>
                <a href="#available-roles" className={styles.btnViewRoles}>
                  View Open Roles <ArrowDown size={16} />
                </a>

                <a href="tel:+918983656433" className={styles.btnCallUs}>
                  <Phone size={16} /> Call Us: +91 8983656433
                </a>
              </div>

              <div className={styles.heroPills}>
                <span className={styles.pillBadge}>✓ 100% Direct Placement</span>
                <span className={styles.pillBadge}>✓ Free Food & Accommodation</span>
                <span className={styles.pillBadge}>✓ Government Reg. Agency</span>
              </div>
            </div>

            {/* Right: Glass Job Overview Card */}
            <div className={styles.overviewCard}>
              <div className={styles.overviewHeader}>
                <div className={styles.overviewTitleGroup}>
                  <div className={styles.overviewIconWrap} aria-hidden="true">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className={styles.overviewCardTitle}>Job Overview</h3>
                    <span className={styles.overviewCardSubtitle}>Live Hiring Drive</span>
                  </div>
                </div>
                <span className={styles.activeTag}>● Active</span>
              </div>

              <div className={styles.metricsList}>
                <div className={styles.metricRow}>
                  <div>
                    <div className={styles.metricLabel}>Open Positions</div>
                    <div className={styles.metricDesc}>Roles in India, Dubai & UAE</div>
                  </div>
                  <div className={styles.metricVal}>5,000+</div>
                </div>

                <div className={styles.metricRow}>
                  <div>
                    <div className={styles.metricLabel}>Partner Companies</div>
                    <div className={styles.metricDesc}>Top construction giants in UAE</div>
                  </div>
                  <div className={styles.metricVal}>150+</div>
                </div>

                <div className={styles.metricRow}>
                  <div>
                    <div className={styles.metricLabel}>Salary Range</div>
                    <div className={styles.metricDesc}>Based on skill & trade testing</div>
                  </div>
                  <div className={`${styles.metricVal} ${styles.metricValHighlight}`}>
                    ₹25,000 - ₹85,000
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20am%20interested%20in%20Construction%20and%20Real%20Estate%20jobs%20in%20India%20and%20UAE."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSendResume}
              >
                <MessageCircle size={18} /> Send Resume on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. AVAILABLE CONSTRUCTION JOBS SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="available-roles" className={styles.jobsSection} aria-labelledby="jobs-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="jobs-heading" className={styles.sectionTitle}>
              Available Construction Jobs
            </h2>
            <p className={styles.sectionSubtitle}>
              Select a role and apply directly for job placement in India and UAE
            </p>
          </div>

          <div className={styles.jobsGrid}>
            {CONSTRUCTION_ROLES.map((role) => {
              const IconComp = role.icon;
              return (
                <div key={role.id} className={styles.jobCard}>
                  <div>
                    <div className={styles.jobIconBox} aria-hidden="true">
                      <IconComp size={24} />
                    </div>

                    <h3 className={styles.jobCardTitle}>{role.title}</h3>
                    <p className={styles.jobCardDesc}>{role.desc}</p>

                    <div className={styles.jobCardLocation}>
                      <MapPin size={14} />
                      <span>{role.location}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={styles.cardApplyBtn}
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
          3. WHO CAN APPLY & DOCUMENTS NEEDED
          ──────────────────────────────────────────────────────── */}
      <section className={styles.eligibilitySection} aria-labelledby="eligibility-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="eligibility-heading" className={styles.sectionTitle}>
              Who Can Apply & Documents Needed
            </h2>
            <p className={styles.sectionSubtitle}>
              Check your eligibility and documents before submitting your application
            </p>
          </div>

          <div className={styles.eligibilityGrid}>
            {/* Card 1: Who Can Apply */}
            <div className={styles.eligibilityCard}>
              <div className={styles.cardTopHeader}>
                <div className={`${styles.cardHeaderIcon} ${styles.iconWhoCanApply}`} aria-hidden="true">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTopTitle}>Who Can Apply</h3>
                  <span className={styles.cardTopSub}>Basic requirements to qualify for jobs</span>
                </div>
              </div>

              <div className={styles.checkList}>
                {WHO_CAN_APPLY.map((item, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.calloutNote}>
                <Lightbulb size={18} color="#a855f7" />
                <span>Freshers with certified vocational/ITI training are encouraged to apply.</span>
              </div>
            </div>

            {/* Card 2: Documents Needed */}
            <div className={styles.eligibilityCard}>
              <div className={styles.cardTopHeader}>
                <div className={`${styles.cardHeaderIcon} ${styles.iconDocuments}`} aria-hidden="true">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTopTitle}>Documents Needed</h3>
                  <span className={styles.cardTopSub}>Keep these documents ready for verification</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className={styles.tabSwitchRow} role="tablist">
                <button
                  type="button"
                  className={`${styles.tabBtn} ${docTab === 'uae' ? styles.tabBtnActive : ''}`}
                  onClick={() => setDocTab('uae')}
                  role="tab"
                  aria-selected={docTab === 'uae'}
                >
                  FOR UAE ROLES (MANDATORY)
                </button>
                <button
                  type="button"
                  className={`${styles.tabBtn} ${docTab === 'domestic' ? styles.tabBtnActive : ''}`}
                  onClick={() => setDocTab('domestic')}
                  role="tab"
                  aria-selected={docTab === 'domestic'}
                >
                  FOR INDIAN ROLES (DOMESTIC)
                </button>
              </div>

              <div className={styles.checkList}>
                {(docTab === 'uae' ? DOCS_UAE : DOCS_DOMESTIC).map((item, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.calloutNote}>
                <ShieldCheck size={18} color="#a855f7" />
                <span>All visa processing and work permits are handled 100% transparently by Sunvi Hi-Tech.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. 5 STEPS TO GET HIRED
          ──────────────────────────────────────────────────────── */}
      <section className={styles.stepsSection} aria-labelledby="steps-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="steps-heading" className={styles.sectionTitle}>
              5 Steps to Get Hired
            </h2>
            <p className={styles.sectionSubtitle}>
              Our transparent, guided journey from profile registration to construction site deployment
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((st) => (
              <div key={st.step} className={styles.stepCard}>
                <div className={styles.stepNumberBadge}>{st.step}</div>
                <h3 className={styles.stepTitle}>{st.title}</h3>
                <p className={styles.stepDesc}>{st.desc}</p>
                <a href="#available-roles" className={styles.stepLink}>
                  Step details <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. FREQUENTLY ASKED QUESTIONS (FAQ)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.faqBadge}>Got Questions? We Have Answers</span>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
            <p className={styles.sectionSubtitle}>
              Common queries about our construction placement services
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
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
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
          6. READY TO APPLY (BOTTOM CTA CARDS)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.bottomCtaSection} aria-labelledby="cta-bottom-heading">
        <div className="container">
          <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
            <h2 id="cta-bottom-heading" className={styles.sectionTitle}>
              Ready to Apply for Construction Jobs?
            </h2>
            <p className={styles.sectionSubtitle}>
              Connect with our team today and get placed in top construction companies in India and UAE.
            </p>
          </div>

          <div className={styles.ctaCardGrid}>
            {/* Card 1: WhatsApp */}
            <div className={styles.ctaActionCard}>
              <div className={styles.ctaIconBadge} style={{ background: '#dcfce7', color: '#16a34a' }}>
                <MessageCircle size={24} />
              </div>
              <h3 className={styles.ctaTitle}>WhatsApp Us</h3>
              <p className={styles.ctaDesc}>Send your CV directly on WhatsApp for quick reply</p>
              <a
                href="https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20want%20to%20apply%20for%20construction%20jobs."
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaBtn} ${styles.ctaBtnGreen}`}
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            {/* Card 2: Call Us */}
            <div className={styles.ctaActionCard}>
              <div className={styles.ctaIconBadge} style={{ background: '#f3e8ff', color: '#7c3aed' }}>
                <Phone size={24} />
              </div>
              <h3 className={styles.ctaTitle}>Call Us</h3>
              <p className={styles.ctaDesc}>Call our recruitment helpline directly</p>
              <a
                href="tel:+918983656433"
                className={`${styles.ctaBtn} ${styles.ctaBtnPurple}`}
              >
                <Phone size={16} /> +91 8983656433
              </a>
            </div>

            {/* Card 3: Apply Online */}
            <div className={styles.ctaActionCard}>
              <div className={styles.ctaIconBadge} style={{ background: '#fdf2f8', color: '#ec4899' }}>
                <Send size={24} />
              </div>
              <h3 className={styles.ctaTitle}>Apply Online</h3>
              <p className={styles.ctaDesc}>Fill out the online application in 2 minutes</p>
              <button
                type="button"
                className={`${styles.ctaBtn} ${styles.ctaBtnPink}`}
                onClick={() => handleOpenApply('General Construction Role')}
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. INTERACTIVE ROLE APPLICATION MODAL
          ──────────────────────────────────────────────────────── */}
      {applyModalRole && (
        <div
          className={styles.modalOverlay}
          onClick={() => setApplyModalRole(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setApplyModalRole(null)}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase' }}>
                    Direct Role Application
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginTop: 4 }}>
                    {applyModalRole}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    Location: India & UAE • Free Placement & Accommodation
                  </p>
                </div>

                <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: 4 }}>
                      Full Name (as per Passport/Aadhaar) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anil Kumar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: 4 }}>
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: 4 }}>
                      Years of Site Experience *
                    </label>
                    <select
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                    >
                      <option value="Fresher / ITI Passout">Fresher / ITI Passout</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: 4 }}>
                      Passport Status *
                    </label>
                    <select
                      value={form.passport}
                      onChange={(e) => setForm({ ...form, passport: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                    >
                      <option value="Valid Passport (8+ Months)">Valid Passport (8+ Months)</option>
                      <option value="Passport Under Renewal">Passport Under Renewal</option>
                      <option value="Applying for New Passport">Applying for New Passport</option>
                      <option value="No Passport (Domestic Role Only)">No Passport (Domestic Role Only)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(90deg, #ec4899 0%, #c026d3 100%)',
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: 13,
                      borderRadius: 10,
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: 8,
                      fontSize: '0.95rem',
                    }}
                  >
                    Submit Application Now
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 8px' }}>
                <CheckCircle2 size={44} color="#16a34a" style={{ margin: '0 auto 14px' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#111827', marginBottom: 6 }}>
                  Application Received!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.5 }}>
                  Thank you, <strong>{form.name}</strong>. Your profile for <strong>{applyModalRole}</strong> has been registered. Our recruitment officer will call you on <strong>{form.phone}</strong> for trade test booking.
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
                    padding: '10px 20px',
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
