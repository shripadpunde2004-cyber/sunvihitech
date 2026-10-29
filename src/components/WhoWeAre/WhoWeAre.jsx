import styles from './WhoWeAre.module.css';

/**
 * WhoWeAre – Two-column layout with description text on left
 * and a construction worker image on right.
 */
export default function WhoWeAre({ onLearnMore }) {
  return (
    <section id="about" className={styles.section} aria-labelledby="who-we-are-heading">
      <div className={`container ${styles.inner}`}>
        {/* Left – Text Content */}
        <div className={styles.textCol}>
          <div className={styles.headingGroup}>
            <h2 id="who-we-are-heading" className={styles.heading}>
              Who We Are
            </h2>
            <div className={styles.underline} aria-hidden="true" />
          </div>

          <p className={styles.body}>
            <strong>Sunvi Hi-Tech</strong> is a leading manpower and overseas worker
            placement agency connecting skilled professionals to opportunities in Dubai
            and across the UAE. We ensure transparent hiring, fair practices, and
            end-to-end support for candidates seeking to build their careers abroad.
            Our team is committed to delivering reliable staffing solutions that empower
            both candidates and employers through trust, technology, and transparency.
          </p>

          <a
            href="#about"
            className="btn-primary"
            id="who-we-are-learn-more-btn"
            onClick={(e) => {
              if (onLearnMore) {
                e.preventDefault();
                onLearnMore();
              }
            }}
          >
            Learn More About Us
          </a>
        </div>

        {/* Right – Worker Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&fit=crop&crop=center"
              alt="Construction worker with clipboard and hard hat at a building site"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
