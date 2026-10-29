import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

// ─── Data ────────────────────────────────────────────────────────────────────

const COMPANY_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Our Vision', href: '#vision' },
  { label: 'Our Leaders', href: '#leaders' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Contact Us', href: '#contact' },
];

const INDUSTRY_LINKS = [
  { label: 'Construction & Real Estate', href: '#construction' },
  { label: 'Shipping & Logistics', href: '#shipping' },
  { label: 'Oil & Gas', href: '#oil-gas' },
  { label: 'Tourism & Hospitality', href: '#tourism' },
  { label: 'Aviation & Aerospace', href: '#aviation' },
  { label: 'Renewable Energy', href: '#energy' },
  { label: 'Health Care', href: '#healthcare' },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: Instagram, href: '#instagram', label: 'Instagram' },
  { icon: Youtube, href: '#youtube', label: 'YouTube' },
];

const BOTTOM_LINKS = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
];

// ─── Main Component ───────────────────────────────────────────────────────────

/**
 * Footer – Dark purple three-column layout with contact info, nav, and industry links
 */
export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  function handleClick(href, e) {
    if (onNavigate && href.startsWith('#')) {
      onNavigate(href);
    }
  }

  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1 – Corporate Office */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>Corporate Office</h3>
            <div className={styles.colUnderline} aria-hidden="true" />

            <div className={styles.contactList}>
              {/* Address */}
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
                <div>
                  <p>Flat No. 2, AMBEGAON VALLY</p>
                  <p>Pune, Maharashtra 411046</p>
                  <p className={styles.cin}>
                    <span aria-label="Corporate Identification Number">CIN:</span>{' '}
                    U74999MH2024PTC425123
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} aria-hidden="true" />
                <a href="tel:+918983656433" className={styles.contactLink}>
                  +91 8983656433
                </a>
              </div>

              {/* Email */}
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} aria-hidden="true" />
                <a href="mailto:info@sunvi.com" className={styles.contactLink}>
                  info@sunvi.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <p className={styles.followUs}>Follow Us</p>
              <div className={styles.socialList} role="list">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.socialLink}
                    aria-label={label}
                    id={`footer-social-${label.toLowerCase()}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 – Company Links */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>Company</h3>
            <div className={styles.colUnderline} aria-hidden="true" />
            <ul className={styles.linkList} role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                    onClick={(e) => handleClick(link.href, e)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Industry Links */}
          <div className={styles.col}>
            <h3 className={styles.colHeading}>Industries</h3>
            <div className={styles.colUnderline} aria-hidden="true" />
            <ul className={styles.linkList} role="list">
              {INDUSTRY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Sunvi Hi Tech. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            {BOTTOM_LINKS.map((link, index) => (
              <a key={link.label} href={link.href} className={styles.bottomLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
