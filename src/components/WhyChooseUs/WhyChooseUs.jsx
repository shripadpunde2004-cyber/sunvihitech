import { CheckCircle, Users, Globe, Award, Network } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: 'verified',
    icon: CheckCircle,
    title: 'Verified Overseas Placements',
    description:
      'All our job opportunities are thoroughly verified for authenticity.',
  },
  {
    id: 'transparent',
    icon: Users,
    title: 'Transparent Hiring Process',
    description:
      'Clear communication and no hidden terms in our recruitment process.',
  },
  {
    id: 'support',
    icon: Globe,
    title: 'End-to-End Candidate Support',
    description:
      'From application to relocation, we\'re with you every step of the way.',
  },
  {
    id: 'expertise',
    icon: Award,
    title: 'Industry-Specific Expertise',
    description:
      'Deep knowledge of various sectors and their hiring requirements.',
  },
  {
    id: 'network',
    icon: Network,
    title: 'Strong Network in UAE & Beyond',
    description:
      'Established connections with top employers across the region.',
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

/**
 * Single feature card
 */
function FeatureCard({ feature }) {
  const Icon = feature.icon;
  return (
    <article className={styles.card} aria-label={feature.title}>
      <div className={styles.iconWrapper} aria-hidden="true">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <h3 className={styles.cardTitle}>{feature.title}</h3>
      <p className={styles.cardDesc}>{feature.description}</p>
    </article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

/**
 * WhyChooseUs – Five-column feature grid with icon cards
 */
export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className={styles.section}
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        {/* Heading */}
        <h2 id="why-choose-heading" className="section-title">
          Why Choose Sunvi Hi-Tech?
        </h2>
        <div className="section-title-underline" />

        {/* Feature Grid */}
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
