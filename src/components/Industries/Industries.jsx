import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Building2, Ship, Flame, Hotel, Plane, Zap, HeartPulse } from 'lucide-react';
import styles from './Industries.module.css';

// ─── Data ────────────────────────────────────────────────────────────────────

/** All industry cards shown in the carousel */
const INDUSTRIES = [
  {
    id: 'construction',
    icon: Building2,
    title: 'Construction & Real Estate',
    description: 'Thousands of roles in construction projects across UAE.',
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'Powering global trade through efficient maritime operations.',
  },
  {
    id: 'oil-gas',
    icon: Flame,
    title: 'Oil & Gas',
    description: 'Opportunities in the energy sector with competitive packages.',
  },
  {
    id: 'tourism',
    icon: Hotel,
    title: 'Tourism & Hospitality',
    description: 'Exciting roles in hotels, resorts, and travel across the UAE.',
  },
  {
    id: 'aviation',
    icon: Plane,
    title: 'Aviation & Aerospace',
    description: 'Ground crew, maintenance, and operations roles at major airports.',
  },
  {
    id: 'energy',
    icon: Zap,
    title: 'Renewable Energy',
    description: 'Join the green energy revolution with solar and wind projects.',
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Health Care',
    description: 'Medical and allied health placements across UAE hospitals.',
  },
];

/** Number of cards visible at once (desktop) */
const VISIBLE_COUNT = 3;

// ─── Sub-components ──────────────────────────────────────────────────────────

/**
 * Single industry card
 */
function IndustryCard({ industry, onNavigate }) {
  const Icon = industry.icon;
  const isClickable = true;

  return (
    <article
      className={`${styles.card} ${isClickable ? styles.cardClickable : ''}`}
      aria-label={industry.title}
      onClick={() => {
        if (isClickable && onNavigate) {
          onNavigate('#' + industry.id);
        }
      }}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isClickable && onNavigate && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onNavigate('#' + industry.id);
        }
      }}
      style={{ cursor: isClickable ? 'pointer' : 'default' }}
    >
      <div className={styles.iconWrapper} aria-hidden="true">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className={styles.cardTitle}>{industry.title}</h3>
      <p className={styles.cardDesc}>{industry.description}</p>
      {isClickable && (
        <span
          style={{
            marginTop: 'auto',
            paddingTop: '8px',
            color: '#c026d3',
            fontSize: '0.85rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          Explore Roles →
        </span>
      )}
    </article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

/**
 * Industries – Horizontal card carousel with prev/next arrows and dot indicators
 */
export default function Industries({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = INDUSTRIES.length - VISIBLE_COUNT;

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, maxIndex));
  }, [maxIndex]);

  /** Total dot indicators = maxIndex + 1 */
  const dotCount = maxIndex + 1;

  return (
    <section
      id="industries"
      className={styles.section}
      aria-labelledby="industries-heading"
    >
      <div className="container">
        {/* Heading */}
        <h2 id="industries-heading" className="section-title">
          Industries We Serve
        </h2>
        <div className="section-title-underline" />
        <p className="section-subtitle">
          Explore career opportunities across various industries in India and UAE
        </p>

        {/* Carousel Wrapper */}
        <div className={styles.carouselWrapper}>
          {/* Prev Arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            disabled={currentIndex === 0}
            aria-label="Previous industries"
            id="industries-prev-btn"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Track */}
          <div className={styles.track} aria-live="polite">
            <div
              className={styles.slider}
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / ${VISIBLE_COUNT}) - ${currentIndex} * 20px))`,
              }}
            >
              {INDUSTRIES.map((industry) => (
                <div key={industry.id} className={styles.slide}>
                  <IndustryCard industry={industry} onNavigate={onNavigate} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="Next industries"
            id="industries-next-btn"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className={styles.dots} role="tablist" aria-label="Carousel position">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(i)}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to slide ${i + 1}`}
              id={`industries-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
