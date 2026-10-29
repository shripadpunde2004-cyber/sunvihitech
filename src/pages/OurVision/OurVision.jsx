import { Eye, Globe, Users, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './OurVision.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const VISION_PILLARS = [
  {
    icon: Globe,
    iconStyle: styles.iconGlobe,
    title: 'Trusted Recruitment Partner',
    isTitleHighlighted: true,
    desc: 'To become the most trusted name in UAE recruitment for skilled Indian workers, known for ethical practices and reliable placements.',
  },
  {
    icon: Users,
    iconStyle: styles.iconEmpowerment,
    title: 'Worker Empowerment',
    isTitleHighlighted: false,
    desc: 'Creating opportunities that transform lives, support families, and enable skilled workers to build better futures.',
  },
  {
    icon: Building2,
    iconStyle: styles.iconIndustry,
    title: 'Industry Standard Setter',
    isTitleHighlighted: false,
    desc: 'Setting new benchmarks in ethical overseas employment and becoming the preferred recruitment partner for UAE employers.',
  },
  {
    icon: TrendingUp,
    iconStyle: styles.iconGrowth,
    title: 'Sustainable Growth',
    isTitleHighlighted: false,
    desc: 'Building a sustainable recruitment ecosystem that benefits workers, employers, and communities in both India and UAE.',
  },
];

const IMPACT_METRICS = [
  {
    number: '1000+',
    label: 'Workers to be Placed',
    subtitle: 'Skilled professionals with fair employment',
  },
  {
    number: '20+',
    label: 'UAE Employer Partners',
    subtitle: 'Reputable companies providing good working conditions',
  },
  {
    number: '5+',
    label: 'Indian States',
    subtitle: 'Geographic reach for talent sourcing',
  },
  {
    number: '98%',
    label: 'Satisfaction Target',
    subtitle: 'Both worker and employer satisfaction rate',
  },
];

const WORKER_BENEFITS = [
  'Guaranteed fair wages and safe working conditions',
  'Complete support for visa and settlement',
  'Career growth opportunities in UAE',
  'Legal protection and grievance redressal',
];

const EMPLOYER_BENEFITS = [
  'Access to verified, skilled professionals',
  'Reduced hiring time and costs',
  'Higher retention rates with satisfied workers',
  '100% legal compliance and documentation',
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * OurVision – Full corporate "Our Vision" page for Sunvi Hi-Tech
 *
 * Sections:
 *   1. Hero Banner: Vision Statement with eye icon badge
 *   2. Our Aspiration: Two-column narrative with conference team photo
 *   3. Pillars of Our Vision: 4 strategic pillars (2x2 grid)
 *   4. Our Impact Vision: 4 measurable target metric cards
 *   5. The Future We're Building: Side-by-side comparison (Workers vs Employers)
 *   6. CTA Banner: Actions to browse jobs or contact us + deep link to leadership
 */
export default function OurVision({ onNavigate, onBackToHome }) {
  function handleLinkClick(href, e) {
    if (onNavigate) {
      e?.preventDefault();
      onNavigate(href);
    }
  }

  return (
    <article className={styles.page} aria-label="Our Vision - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO BANNER
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroBanner} aria-labelledby="vision-hero-title">
        <div className="container">
          <div className={styles.heroContent}>
            {/* Eye Icon Badge */}
            <div className={styles.heroIconBadge} aria-hidden="true">
              <Eye size={26} strokeWidth={2.4} />
            </div>

            <h1 id="vision-hero-title" className={styles.heroTitle}>
              Our Vision
            </h1>

            <p className={styles.heroSubtitle}>
              To become the most trusted recruitment partner connecting Indian talent with Middle Eastern opportunities, setting new standards in ethical overseas employment and transforming lives through meaningful work.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. OUR ASPIRATION SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.aspirationSection} aria-labelledby="aspiration-heading">
        <div className="container">
          <div className={styles.aspirationGrid}>
            {/* Left Column: Text */}
            <div className={styles.aspirationTextCol}>
              <div className={styles.aspirationBadge}>
                <span className={styles.aspirationDot} aria-hidden="true" />
                <span>Our Aspiration</span>
              </div>

              <h2 id="aspiration-heading" className={styles.aspirationHeading}>
                Building a Future of Opportunities
              </h2>

              <p className={styles.aspirationParagraph}>
                We envision a future where every skilled worker in India has access to legitimate overseas employment opportunities that respect their rights, reward their skills, and enable them to build better lives for their families.
              </p>

              <p className={styles.aspirationParagraph}>
                For UAE employers, we see a future where they can easily access a pool of verified, skilled professionals who are not just workers, but valuable contributors to their projects and long-term growth.
              </p>

              <p className={styles.aspirationParagraph}>
                Our vision extends beyond recruitment to creating sustainable ecosystems where workers thrive, employers succeed, and communities on both sides benefit from ethical, transparent employment relationships.
              </p>
            </div>

            {/* Right Column: Visual */}
            <div className={styles.aspirationImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80"
                alt="Sunvi Hi-Tech leadership discussing strategic vision in a boardroom"
                className={styles.aspirationImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. PILLARS OF OUR VISION SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.pillarsSection} aria-labelledby="pillars-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="pillars-heading" className={styles.sectionTitle}>
              Pillars of Our Vision
            </h2>
            <p className={styles.sectionSubtitle}>
              The foundation upon which we're building our future
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {VISION_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div key={idx} className={styles.pillarCard}>
                  <div className={`${styles.pillarIconWrap} ${pillar.iconStyle}`} aria-hidden="true">
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>
                  <h3
                    className={`${styles.pillarTitle} ${
                      pillar.isTitleHighlighted ? styles.pillarTitleHighlight : ''
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. OUR IMPACT VISION SECTION (METRICS)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.impactSection} aria-labelledby="impact-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="impact-heading" className={styles.sectionTitle}>
              Our Impact Vision
            </h2>
            <p className={styles.sectionSubtitle}>
              Measurable goals that define our vision's success
            </p>
          </div>

          <div className={styles.metricsGrid}>
            {IMPACT_METRICS.map((metric, idx) => (
              <div key={idx} className={styles.metricCard}>
                <div className={styles.metricNumber}>{metric.number}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
                <div className={styles.metricSubtitle}>{metric.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. THE FUTURE WE'RE BUILDING (DUAL BENEFIT CARDS)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.futureSection} aria-labelledby="future-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="future-heading" className={styles.sectionTitle}>
              The Future We're Building
            </h2>
            <p className={styles.sectionSubtitle}>
              How our vision benefits both workers and employers
            </p>
          </div>

          <div className={styles.futureGrid}>
            {/* Left Card: For Skilled Workers */}
            <div className={styles.futureCard}>
              <div className={styles.futureCardHeader}>
                <div className={`${styles.futureIconWrap} ${styles.iconWorkers}`} aria-hidden="true">
                  <Users size={24} strokeWidth={2.2} />
                </div>
                <h3 className={styles.futureCardTitle}>For Skilled Workers</h3>
              </div>

              <ul className={styles.bulletList} role="list">
                {WORKER_BENEFITS.map((item, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    <span className={styles.bulletDotPurple} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: For UAE Employers */}
            <div className={styles.futureCard}>
              <div className={styles.futureCardHeader}>
                <div className={`${styles.futureIconWrap} ${styles.iconEmployers}`} aria-hidden="true">
                  <Building2 size={24} strokeWidth={2.2} />
                </div>
                <h3 className={styles.futureCardTitle}>For UAE Employers</h3>
              </div>

              <ul className={styles.bulletList} role="list">
                {EMPLOYER_BENEFITS.map((item, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    <span className={styles.bulletDotPink} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. JOIN OUR MISSION (CTA BANNER)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.ctaBanner} aria-labelledby="vision-cta-heading">
        <div className="container">
          <div className={styles.ctaContent}>
            {/* Eye Icon Badge */}
            <div className={styles.ctaIconBadge} aria-hidden="true">
              <Eye size={24} strokeWidth={2.4} />
            </div>

            <h2 id="vision-cta-heading" className={styles.ctaTitle}>
              Join Our Vision
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
              href="#leaders"
              className={styles.ctaBottomLink}
              onClick={(e) => handleLinkClick('#leaders', e)}
            >
              Meet our aspirational leaders <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
