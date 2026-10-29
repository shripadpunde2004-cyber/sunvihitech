import { Target, Users, Briefcase, Handshake, Shield, Home, Globe, ArrowRight } from 'lucide-react';
import styles from './OurMission.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const APPROACH_CARDS = [
  {
    icon: Users,
    iconStyle: styles.iconCandidate,
    title: 'Candidate-Centric Process',
    desc: 'Our transparent recruitment process ensures clear communication, complete cost transparency, and comprehensive support services for all candidates.',
  },
  {
    icon: Briefcase,
    iconStyle: styles.iconEmployer,
    title: 'Quality Employer Partners',
    desc: 'We carefully partner only with reputable UAE employers who provide safe working conditions, fair competitive wages, and proper accommodation facilities for workers.',
  },
  {
    icon: Handshake,
    iconStyle: styles.iconRelationship,
    title: 'Long-term Relationships',
    desc: 'We focus on building lasting professional relationships, not just temporary transactions. Our ongoing support continues even after successful placement completion.',
  },
];

const GUIDING_PRINCIPLES = [
  {
    icon: Shield,
    iconStyle: styles.iconEthicalPractices,
    title: 'Ethical Practices',
    desc: 'Zero-cost registration, no hidden charges, and complete transparency in all our dealings.',
  },
  {
    icon: Users,
    iconStyle: styles.iconWorkerWelfare,
    title: 'Worker Welfare',
    desc: 'Prioritizing fair wages, safe working conditions, and proper accommodation for workers.',
  },
  {
    icon: Briefcase,
    iconStyle: styles.iconQualityPlacements,
    title: 'Quality Placements',
    desc: 'Matching skilled workers with reputable employers who value their expertise and experience.',
  },
  {
    icon: Home,
    iconStyle: styles.iconSupportSettlement,
    title: 'Support & Settlement',
    desc: 'Assistance with visa processing, medical checks, and accommodation arrangements in UAE.',
  },
  {
    icon: Handshake,
    iconStyle: styles.iconPartnershipApproach,
    title: 'Partnership Approach',
    desc: 'Building long-term relationships with both workers and employers based on trust and reliability.',
  },
  {
    icon: Globe,
    iconStyle: styles.iconLegalCompliance,
    title: 'Legal Compliance',
    desc: '100% adherence to UAE labor laws and regulations for worker protection and rights.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * OurMission – Full corporate "Our Mission" page for Sunvi Hi-Tech
 *
 * Sections:
 *   1. Hero Banner: Mission Statement with background image & target badge
 *   2. Our Purpose: Two-column story with laptop visual
 *   3. Our Approach to Ethical Recruitment: 3-column process cards
 *   4. Our Guiding Principles: 6-card 2x3 value grid
 *   5. Join Our Mission: Full-width gradient CTA banner with dual buttons & vision link
 */
export default function OurMission({ onNavigate, onBackToHome }) {
  function handleLinkClick(href, e) {
    if (onNavigate) {
      e?.preventDefault();
      onNavigate(href);
    }
  }

  return (
    <article className={styles.page} aria-label="Our Mission - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO BANNER
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroBanner} aria-labelledby="mission-hero-title">
        <div className="container">
          <div className={styles.heroContent}>
            {/* Target Icon Badge */}
            <div className={styles.heroIconBadge} aria-hidden="true">
              <Target size={26} strokeWidth={2.4} />
            </div>

            <h1 id="mission-hero-title" className={styles.heroTitle}>
              Our Mission
            </h1>

            <p className={styles.heroSubtitle}>
              To empower skilled Indian workers with legitimate overseas employment opportunities in the UAE, ensuring fair treatment, proper compensation, and career growth while providing UAE employers with reliable, qualified workforce.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. OUR PURPOSE SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.purposeSection} aria-labelledby="purpose-heading">
        <div className="container">
          <div className={styles.purposeGrid}>
            {/* Left Column: Text */}
            <div className={styles.purposeTextCol}>
              <div className={styles.purposeBadge}>
                <span className={styles.purposeDot} aria-hidden="true" />
                <span>Our Purpose</span>
              </div>

              <h2 id="purpose-heading" className={styles.purposeHeading}>
                Building Bridges Between Talent and Opportunity
              </h2>

              <p className={styles.purposeParagraph}>
                At Sunvi Hi-Tech, our mission is deeply rooted in creating meaningful opportunities that transform lives. We believe every skilled worker deserves access to fair employment that respects their dignity and rewards their expertise.
              </p>

              <p className={styles.purposeParagraph}>
                Our commitment goes beyond just placement. We focus on the complete journey from initial screening and skill verification to visa processing, medical checks, and settlement support in the UAE. We ensure our workers are well-prepared and properly supported throughout their overseas employment journey.
              </p>

              <p className={styles.purposeParagraph}>
                For employers in the UAE, we provide access to verified, skilled professionals who are ready to contribute to their projects and businesses. We understand the specific needs of the UAE construction and infrastructure sectors and match accordingly.
              </p>
            </div>

            {/* Right Column: Visual */}
            <div className={styles.purposeImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1000&auto=format&fit=crop&q=80"
                alt="Collaborative technical talent and project screening on a modern laptop"
                className={styles.purposeImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. OUR APPROACH TO ETHICAL RECRUITMENT SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.approachSection} aria-labelledby="approach-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="approach-heading" className={styles.sectionTitle}>
              Our Approach to Ethical Recruitment
            </h2>
            <p className={styles.sectionSubtitle}>
              How we turn our mission into reality every single working day
            </p>
          </div>

          <div className={styles.approachGrid}>
            {APPROACH_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div key={idx} className={styles.approachCard}>
                  <div className={`${styles.cardIconWrap} ${card.iconStyle}`} aria-hidden="true">
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. OUR GUIDING PRINCIPLES SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.principlesSection} aria-labelledby="principles-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="principles-heading" className={styles.sectionTitle}>
              Our Guiding Principles
            </h2>
            <p className={styles.sectionSubtitle}>
              The values that shape every decision we make at Sunvi Hi-Tech
            </p>
          </div>

          <div className={styles.principlesGrid}>
            {GUIDING_PRINCIPLES.map((principle, idx) => {
              const IconComponent = principle.icon;
              return (
                <div key={idx} className={styles.principleCard}>
                  <div className={`${styles.principleIconWrap} ${principle.iconStyle}`} aria-hidden="true">
                    <IconComponent size={22} strokeWidth={2} />
                  </div>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDesc}>{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. JOIN OUR MISSION (CTA BANNER)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.ctaBanner} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaContent}>
            {/* Target Icon Badge */}
            <div className={styles.ctaIconBadge} aria-hidden="true">
              <Target size={24} strokeWidth={2.4} />
            </div>

            <h2 id="cta-heading" className={styles.ctaTitle}>
              Join Our Mission
            </h2>

            <p className={styles.ctaSubtitle}>
              Whether you're a skilled worker seeking opportunities or an employer looking for reliable talent, join us in creating meaningful employment connections.
            </p>

            <div className={styles.ctaActions}>
              <a
                href="#jobs"
                className={styles.btnPrimaryWhite}
                onClick={(e) => handleLinkClick('#jobs', e)}
              >
                Browse Job Opportunities <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className={styles.btnSecondaryOutline}
                onClick={(e) => handleLinkClick('#contact', e)}
              >
                Contact Us
              </a>
            </div>

            <div className={styles.ctaDivider} aria-hidden="true" />

            <a
              href="#vision"
              className={styles.ctaBottomLink}
              onClick={(e) => handleLinkClick('#vision', e)}
            >
              Explore our vision for the future <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
