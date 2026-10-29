import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronDown,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import styles from './Contact.module.css';

// ─── Data Definitions ────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How do I apply for a job?',
    a: 'You can apply directly online through our website by browsing the Jobs or Industries section and clicking "Apply Now" on any open position. Alternatively, you can send your CV directly to our recruitment desk via WhatsApp at +91 8983656433 or email us at info@sunvi.com.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'For domestic placements across India, the process typically takes 7 to 10 days from interview to joining. For overseas roles in the UAE and Gulf region, the complete timeline—including trade test, GAMCA medical clearance, visa stamping, and flight mobilization—usually takes 3 to 5 weeks.',
  },
  {
    q: 'Can I update my profile after registration?',
    a: 'Yes. If you need to update your contact details, upload a renewed passport, or add newly acquired trade certificates and experience letters, you can contact our recruitment team via WhatsApp or re-submit the online application form with your updated details.',
  },
  {
    q: 'What industries do you serve?',
    a: 'Sunvi Hi-Tech recruits across 7 major sectors: Construction & Real Estate, Shipping & Logistics, Oil & Gas, Tourism & Hospitality, Aviation & Aerospace, Renewable Energy, and Healthcare.',
  },
  {
    q: 'Do you offer international placements?',
    a: 'Yes. We specialize in cross-border staffing for the UAE (Dubai, Abu Dhabi, Sharjah, and other Emirates) and the wider Gulf region, offering employer-sponsored work visas, flight tickets, medical insurance, and accommodation.',
  },
  {
    q: 'How can I track my application status?',
    a: 'Once you submit your application, our recruitment coordinator will assign you an application reference. You can track your progress at any time by messaging our dedicated WhatsApp helpline at +91 8983656433 or calling our corporate office during business hours.',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * Contact – Contact Us page matching screenshot media_1793267432223_123b0502.png
 */
export default function Contact({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: '', email: '', phone: '', message: '' });
    setSubmitted(false);
  }

  return (
    <article className={styles.page} aria-label="Contact Us - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HERO BANNER
          ──────────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Get In Touch</h1>
            <p className={styles.heroSubtitle}>
              We're here to help you find your dream career. Reach out to us for any queries about our services or recruitment process.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. CONTACT DETAILS & MESSAGE FORM
          ──────────────────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left Column: 4 Info Cards */}
            <div className={styles.infoStack}>
              {/* Card 1: Our Location */}
              <div className={styles.infoCard}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Our Location</h3>
                  <p className={styles.infoText}>
                    Flat No. 2, AMBEGAON VALLY<br />
                    S No 97/3, Ambegaon BK<br />
                    Pune, Maharashtra 411046
                  </p>
                </div>
              </div>

              {/* Card 2: Contact Number */}
              <div className={styles.infoCard}>
                <div className={`${styles.iconWrap} ${styles.iconWrapPink}`} aria-hidden="true">
                  <Phone size={22} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Contact Number</h3>
                  <a href="tel:+918983656433" className={styles.infoLink}>
                    +918983656433
                  </a>
                </div>
              </div>

              {/* Card 3: Email Address */}
              <div className={styles.infoCard}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <Mail size={22} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Email Address</h3>
                  <a href="mailto:info@sunvi.com" className={styles.infoLink}>
                    info@sunvi.com
                  </a>
                </div>
              </div>

              {/* Card 4: Working Hours */}
              <div className={styles.infoCard}>
                <div className={`${styles.iconWrap} ${styles.iconWrapPink}`} aria-hidden="true">
                  <Clock size={22} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Working Hours</h3>
                  <p className={styles.infoText}>
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Send us a Message Card */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send us a Message</h2>
                <p className={styles.formSubtitle}>We'll get back to you within 24 hours</p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="contact-name">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className={styles.input}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="contact-email">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className={styles.input}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className={styles.input}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contact-message">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      placeholder="Tell us about your inquiry..."
                      className={styles.textarea}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.btnSubmit}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              ) : (
                <div className={styles.successBox}>
                  <CheckCircle2 size={50} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
                  <p className={styles.successText}>
                    Thank you, <strong>{form.name}</strong>. We have received your inquiry. Our recruitment advisory team will contact you at <strong>{form.email || form.phone}</strong> within 24 hours.
                  </p>

                  <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20my%20name%20is%20${encodeURIComponent(
                        form.name
                      )}.%20I%20have%20an%20inquiry:%20${encodeURIComponent(form.message)}`}
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
                      <MessageCircle size={16} /> Chat on WhatsApp
                    </a>

                    <button type="button" onClick={handleReset} className={styles.btnReset}>
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. FREQUENTLY ASKED QUESTIONS
          ──────────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Find quick answers to common questions about our recruitment process and services.
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
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}
                    />
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
