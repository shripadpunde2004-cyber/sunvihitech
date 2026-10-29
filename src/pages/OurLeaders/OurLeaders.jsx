import { useState } from 'react';
import { Shield, Users, MapPin, Star, Globe, Building2, Award, FileText, X } from 'lucide-react';
import styles from './OurLeaders.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const DIRECTORS = [
  {
    id: 'director-1',
    name: 'SUSHANT UTTARESHWAR PATALE',
    designation: 'Director',
    category: 'Board of Directors',
    bio: 'Director at Sunvi Hitech Services Private Limited. Provides strategic oversight, corporate governance, and executive guidance to expand ethical workforce solutions between India and the UAE.',
    focusAreas: ['Corporate Governance', 'Strategic Expansion', 'Compliance Oversight'],
  },
  {
    id: 'director-2',
    name: 'Kavita Satish Shinde',
    designation: 'Director',
    category: 'Board of Directors',
    bio: 'Director at Sunvi Hitech Services Private Limited. Directs organizational planning, executive administration, and oversees fair recruitment practices for skilled professionals.',
    focusAreas: ['Organizational Leadership', 'Ethical Standards', 'Executive Governance'],
  },
];

const MANAGEMENT_TEAM = [
  {
    id: 'mgmt-1',
    designation: 'Chief Executive Officer',
    tag: 'Executive Leadership',
    desc: 'Leads overall business strategy and drives organizational growth',
    chips: ['Business Strategy', 'Market Expansion'],
    bio: 'Steers Sunvi Hi-Tech’s enterprise vision, establishing bilateral partnerships with premier Middle Eastern infrastructure firms and spearheading ethical cross-border recruitment.',
  },
  {
    id: 'mgmt-2',
    designation: 'Chief Operating Officer',
    tag: 'Operations',
    desc: 'Manages daily operations and ensures service delivery excellence',
    chips: ['Process Optimization', 'Service Delivery'],
    bio: 'Oversees day-to-day candidate screening, trade assessment logistics, and end-to-end mobilization pipelines to ensure consistent on-time project staffing.',
  },
  {
    id: 'mgmt-3',
    designation: 'Head of Recruitment',
    tag: 'Talent Acquisition',
    desc: 'Oversees recruitment strategy and talent acquisition processes',
    chips: ['Talent Sourcing', 'Candidate Assessment'],
    bio: 'Leads pan-India talent sourcing drives, technical trade tests, and background verifications to match certified professionals with Gulf employer specifications.',
  },
  {
    id: 'mgmt-4',
    designation: 'Head of UAE Operations',
    tag: 'International Operations',
    desc: 'Manages and expands UAE operations across all Emirates',
    chips: ['UAE Market Operations', 'Cross-Cultural Management'],
    bio: 'Manages client accounts and candidate settlement across Dubai, Abu Dhabi, and Sharjah, ensuring smooth arrival, medical processing, and onboarding.',
  },
  {
    id: 'mgmt-5',
    designation: 'Head of Compliance',
    tag: 'Legal & Compliance',
    desc: 'Ensures legal compliance across all operations and locations',
    chips: ['Legal Compliance', 'Documentation'],
    bio: 'Ensures 100% adherence to Indian Emigration Act compliances and UAE MOHRE labor standards, guaranteeing zero-exploitation recruitment practices.',
  },
  {
    id: 'mgmt-6',
    designation: 'Head of Client Relations',
    tag: 'Client Services',
    desc: 'Manages client partnerships and ensures customer satisfaction',
    chips: ['Client Relationship Management', 'Service Delivery'],
    bio: 'Cultivates enduring partnerships with major GCC contractors, maintaining high client retention and responsive talent deployment.',
  },
];

const LEADERSHIP_HIGHLIGHTS = [
  {
    icon: Globe,
    title: 'Global Operations',
    subtitle: 'India & UAE',
  },
  {
    icon: Building2,
    title: 'Industry Expertise',
    subtitle: '7+ Sectors',
  },
  {
    icon: Award,
    title: 'Professional Team',
    subtitle: '100+ Years Combined Experience',
  },
  {
    icon: FileText,
    title: 'Compliant Operations',
    subtitle: 'International Standards',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * OurLeaders – Leadership & Governance page for Sunvi Hi-Tech
 *
 * Sections:
 *   1. Page Header: "Our Leadership" + subtitle
 *   2. Board of Directors: SUSHANT UTTARESHWAR PATALE & Kavita Satish Shinde
 *   3. Management Team: 6-card grid with tags, chips, and profile triggers
 *   4. Sunvi Hi-Tech Leadership Highlights: 4 core operational strengths
 *   5. Interactive Detail Modal: Displays full profile on card click
 */
export default function OurLeaders({ onNavigate, onBackToHome }) {
  const [activeProfile, setActiveProfile] = useState(null);

  function openProfile(profile) {
    setActiveProfile(profile);
  }

  function closeProfile() {
    setActiveProfile(null);
  }

  return (
    <article className={styles.page} aria-label="Our Leadership - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. PAGE HEADER
          ──────────────────────────────────────────────────────── */}
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Leadership</h1>
          <div className={styles.titleUnderline} aria-hidden="true" />
          <p className={styles.pageSubtitle}>
            The experienced professionals guiding Sunvi Hi-Tech's vision and operations
          </p>
        </div>
      </header>

      {/* ────────────────────────────────────────────────────────
          2. BOARD OF DIRECTORS SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.directorsSection} aria-labelledby="directors-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="directors-heading" className={styles.sectionTitleWithIcon}>
              <Shield className={styles.sectionIcon} size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Board of Directors</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Providing strategic oversight and governance
            </p>
          </div>

          <div className={styles.directorsGrid}>
            {DIRECTORS.map((director) => (
              <button
                key={director.id}
                type="button"
                className={styles.directorCard}
                onClick={() => openProfile(director)}
                aria-label={`View profile for ${director.name}, ${director.designation}`}
              >
                {/* Circular Avatar Placeholder */}
                <div className={styles.directorAvatarWrapper}>
                  <Users size={44} strokeWidth={1.8} className={styles.avatarIcon} aria-hidden="true" />
                  <span className={styles.photoPlaceholderText}>Photo Coming Soon</span>

                  {/* Gradient Director Badge */}
                  <div className={styles.directorBadge}>
                    <Shield size={12} strokeWidth={2.5} aria-hidden="true" />
                    <span>Director</span>
                  </div>
                </div>

                <h3 className={styles.directorName}>{director.name}</h3>
                <div className={styles.directorRole}>{director.designation}</div>
                <span className={styles.directorActionText}>Click to view details</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. MANAGEMENT TEAM SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.managementSection} aria-labelledby="management-heading">
        <div className="container">
          <div className={styles.sectionHeader} style={{ textAlign: 'center' }}>
            <h2 id="management-heading" className={styles.sectionTitleWithIcon}>
              <Users className={styles.sectionIcon} size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Management Team</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Leading day-to-day operations and strategic execution
            </p>
          </div>

          <div className={styles.managementGrid}>
            {MANAGEMENT_TEAM.map((member) => (
              <div
                key={member.id}
                className={styles.managementCard}
                onClick={() => openProfile(member)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProfile(member);
                  }
                }}
                aria-label={`View profile for ${member.designation}`}
              >
                {/* Top Row: Avatar Box + Role & Tag */}
                <div className={styles.cardTopRow}>
                  <div className={styles.cardAvatarBox} aria-hidden="true">
                    <Users size={28} strokeWidth={1.8} />
                  </div>

                  <div className={styles.cardTitleCol}>
                    <h3 className={styles.cardDesignation}>{member.designation}</h3>
                    <div className={styles.cardTagPill}>
                      <MapPin className={styles.pinIcon} aria-hidden="true" />
                      <span>{member.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={styles.cardDesc}>{member.desc}</p>

                {/* Skill Chips */}
                <div className={styles.cardChipRow}>
                  {member.chips.map((chip, idx) => (
                    <span key={idx} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <div className={styles.cardFooterLink}>
                  <Star size={14} aria-hidden="true" />
                  <span>Click for full profile</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. SUNVI HI-TECH LEADERSHIP HIGHLIGHTS
          ──────────────────────────────────────────────────────── */}
      <section className={styles.highlightsSection} aria-labelledby="highlights-heading">
        <div className="container">
          <h2 id="highlights-heading" className={styles.highlightsTitle}>
            Sunvi Hi-Tech Leadership
          </h2>

          <div className={styles.highlightsGrid}>
            {LEADERSHIP_HIGHLIGHTS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className={styles.highlightItem}>
                  <div className={styles.highlightIconBadge} aria-hidden="true">
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>
                  <h3 className={styles.highlightLabel}>{item.title}</h3>
                  <p className={styles.highlightSubtext}>{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. INTERACTIVE PROFILE MODAL
          ──────────────────────────────────────────────────────── */}
      {activeProfile && (
        <div
          className={styles.modalOverlay}
          onClick={closeProfile}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-profile-title"
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeProfile}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalAvatar} aria-hidden="true">
                <Users size={32} strokeWidth={2} />
              </div>

              <div>
                <h3 id="modal-profile-title" className={styles.modalName}>
                  {activeProfile.name || activeProfile.designation}
                </h3>
                <div className={styles.modalRole}>
                  {activeProfile.name ? activeProfile.designation : activeProfile.tag}
                </div>
              </div>
            </div>

            <p className={styles.modalBio}>{activeProfile.bio}</p>

            {activeProfile.chips && (
              <div className={styles.modalDetailSection}>
                <div className={styles.modalDetailHeading}>Core Competencies</div>
                <div className={styles.modalPills}>
                  {activeProfile.chips.map((chip, idx) => (
                    <span key={idx} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeProfile.focusAreas && (
              <div className={styles.modalDetailSection}>
                <div className={styles.modalDetailHeading}>Key Focus Areas</div>
                <div className={styles.modalPills}>
                  {activeProfile.focusAreas.map((area, idx) => (
                    <span key={idx} className={styles.chip}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
