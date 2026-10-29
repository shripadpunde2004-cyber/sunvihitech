import { Target, Eye, ArrowRight, Shield, Users, Briefcase, Globe, Clock, Lightbulb } from 'lucide-react';
import styles from './AboutUs.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    icon: Shield,
    iconStyle: styles.valIconEthical,
    title: 'Ethical Recruitment',
    desc: 'Zero-cost registration, no hidden charges, and complete transparency in all dealings',
  },
  {
    icon: Users,
    iconStyle: styles.valIconWorker,
    title: 'Worker-Centric',
    desc: 'Prioritizing fair wages, safe working conditions, and proper accommodation for workers',
  },
  {
    icon: Briefcase,
    iconStyle: styles.valIconQuality,
    title: 'Quality Placements',
    desc: 'Matching skilled workers with reputable employers in the UAE construction sector',
  },
  {
    icon: Globe,
    iconStyle: styles.valIconGlobal,
    title: 'Global Standards',
    desc: 'Compliance with UAE labor laws and international recruitment standards',
  },
];

const RECRUITMENT_STEPS = [
  {
    stepNumber: '1',
    title: 'Application',
    desc: 'Submit your application through our portal',
    duration: '1-2 days',
  },
  {
    stepNumber: '2',
    title: 'Screening',
    desc: 'Initial resume and profile screening',
    duration: '2-3 days',
  },
  {
    stepNumber: '3',
    title: 'Assessment',
    desc: 'Online skills and aptitude tests',
    duration: '3-4 days',
  },
  {
    stepNumber: '4',
    title: 'Interview',
    desc: 'Technical and HR interviews',
    duration: '5-7 days',
  },
  {
    stepNumber: '5',
    title: 'Offer',
    desc: 'Job offer and onboarding process',
    duration: '2-3 days',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * AboutUs – Full corporate "About Us" page for Sunvi Hi-Tech
 *
 * Sections:
 *   1. Hero Banner: "Connecting Skilled Workers with UAE Opportunities" + Mission & Vision Cards
 *   2. Our Story: "Building Careers, Building Futures" + Corporate Meeting Image
 *   3. Our Core Values: 4 foundational principles grid
 *   4. Our Recruitment Process: 5-step numbered timeline with durations & guidance callout
 */
export default function AboutUs({ onNavigate, onBackToHome }) {
  function handleLinkClick(href, e) {
    if (onNavigate) {
      e?.preventDefault();
      onNavigate(href);
    }
  }

  return (
    <article className={styles.page} aria-label="About Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection} aria-labelledby="hero-title">
        <div className="container">
          <div className={styles.heroContent}>
            <h1 id="hero-title" className={styles.heroHeading}>
              Connecting <span className={styles.highlightPink}>Skilled Workers</span> with
              <span className={styles.highlightPurple}>UAE Opportunities</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Sunvi Hi-Tech specializes in ethical recruitment of skilled blue-collar professionals from India for the booming construction and infrastructure sectors in the United Arab Emirates.
            </p>

            <div className={styles.missionVisionGrid}>
              {/* Our Mission Card */}
              <div className={styles.mvCard}>
                <div className={`${styles.mvIconWrap} ${styles.missionIcon}`} aria-hidden="true">
                  <Target size={26} strokeWidth={2.2} />
                </div>
                <h2 className={styles.mvTitle}>Our Mission</h2>
                <p className={styles.mvDesc}>
                  To empower skilled Indian workers with legitimate employment opportunities in the UAE, ensuring fair treatment, proper compensation, and career growth while providing UAE employers with reliable, qualified workforce.
                </p>
                <a
                  href="#mission"
                  className={styles.mvLink}
                  onClick={(e) => handleLinkClick('#mission', e)}
                >
                  Read Full Mission Statement <ArrowRight size={16} />
                </a>
              </div>

              {/* Our Vision Card */}
              <div className={styles.mvCard}>
                <div className={`${styles.mvIconWrap} ${styles.visionIcon}`} aria-hidden="true">
                  <Eye size={26} strokeWidth={2.2} />
                </div>
                <h2 className={styles.mvTitle}>Our Vision</h2>
                <p className={styles.mvDesc}>
                  To become the most trusted recruitment partner connecting Indian talent with Middle Eastern opportunities, setting new standards in ethical overseas employment and transforming lives through meaningful work.
                </p>
                <a
                  href="#vision"
                  className={styles.mvLink}
                  onClick={(e) => handleLinkClick('#vision', e)}
                >
                  Explore Our Vision <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. OUR STORY SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.storySection} aria-labelledby="story-title">
        <div className="container">
          <div className={styles.storyGrid}>
            {/* Story Text */}
            <div className={styles.storyTextCol}>
              <h2 id="story-title" className={styles.storyTitle}>
                Our Story: Building Careers, Building Futures
              </h2>

              <p className={styles.storyParagraph}>
                Founded by industry veterans with decades of experience in construction, Sunvi Hi-Tech was born from a simple but powerful vision: to create ethical, transparent pathways for skilled Indian workers seeking opportunities in the Gulf.
              </p>

              <p className={styles.storyParagraph}>
                Having worked on major infrastructure projects across Dubai, Abu Dhabi, and Sharjah, our founders witnessed firsthand the challenges faced by both workers and employers in the recruitment process. Too many agencies prioritized profits over people, leaving workers vulnerable and employers frustrated.
              </p>

              <p className={styles.storyParagraph}>
                That's why we built Sunvi Hi-Tech differently. We focus on long-term relationships, not just transactions. Every placement we make represents a life changed, a family supported, and a skilled worker matched with an employer who values their expertise.
              </p>
            </div>

            {/* Story Image */}
            <div className={styles.storyImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80"
                alt="Sunvi Hi-Tech founding team collaborating in a corporate conference room"
                className={styles.storyImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. OUR CORE VALUES SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.valuesSection} aria-labelledby="values-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="values-title" className={styles.sectionTitle}>
              Our Core Values
            </h2>
            <p className={styles.sectionSubtitle}>
              These principles guide every decision we make and every relationship we build
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {CORE_VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className={styles.valueCard}>
                  <div className={`${styles.valueIconWrap} ${val.iconStyle}`} aria-hidden="true">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. OUR RECRUITMENT PROCESS SECTION
          ──────────────────────────────────────────────────────── */}
      <section className={styles.processSection} aria-labelledby="process-title">
        {/* Background Decorative Accents */}
        <div className={styles.decorTopLeft} aria-hidden="true" />
        <div className={styles.decorBottomRight} aria-hidden="true" />

        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="process-title" className={styles.sectionTitle}>
              Our Recruitment Process
            </h2>
            <p className={styles.sectionSubtitle}>
              A transparent, step-by-step journey from application to placement in the UAE
            </p>
          </div>

          <div className={styles.processTimelineWrapper}>
            {/* Connecting Horizontal Line */}
            <div className={styles.timelineBar} aria-hidden="true" />

            <div className={styles.processGrid}>
              {RECRUITMENT_STEPS.map((step) => (
                <div key={step.stepNumber} className={styles.stepCard}>
                  {/* Step Number Circle */}
                  <div className={styles.stepBadge}>{step.stepNumber}</div>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>

                  <div className={styles.stepTime}>
                    <Clock className={styles.clockIcon} aria-hidden="true" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guidance Banner */}
          <div className={styles.guidanceBanner} role="note">
            <span className={styles.bulbIcon} aria-hidden="true">💡</span>
            <span>We guide candidates through visa processing, medical checks, and pre-departure orientation</span>
          </div>
        </div>
      </section>
    </article>
  );
}
