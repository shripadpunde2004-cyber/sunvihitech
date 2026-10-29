import styles from './Hero.module.css';

/**
 * Hero – Full-width banner with headline, subtext, and CTA buttons.
 * Background uses a warm overlay with a worker silhouette effect.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
      aria-label="Hero banner"
    >
      {/* Background overlay layer */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Background worker image (decorative) */}
      <div className={styles.bgImage} aria-hidden="true" />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            Connecting Skilled Workers with<br />
            Global Opportunities
          </h1>

          <p className={styles.subtext}>
            Start your overseas career with verified job opportunities across industries.
          </p>

          <div className={styles.actions}>
            <a
              href="#jobs"
              className="btn-primary"
              id="hero-browse-jobs-btn"
            >
              Browse Jobs
            </a>
            <a
              href="#register"
              className="btn-outline"
              id="hero-register-btn"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
