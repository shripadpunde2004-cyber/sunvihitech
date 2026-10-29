import styles from './FloatingButtons.module.css';

/**
 * WhatsApp SVG icon
 */
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.527 5.845L.057 23.882l6.214-1.632A11.957 11.957 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.959 0-3.792-.5-5.393-1.372l-.387-.229-4.015 1.054 1.07-3.908-.252-.402A9.937 9.937 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/**
 * FloatingButtons – Fixed WhatsApp button and "Apply Now" gradient button
 */
export default function FloatingButtons({ onNavigate }) {
  return (
    <div className={styles.container} aria-label="Quick action buttons">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918983656433"
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <WhatsAppIcon />
      </a>

      {/* Apply Now Button */}
      <a
        href="#jobs"
        className={styles.applyNow}
        aria-label="Apply Now"
        id="floating-apply-now-btn"
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate('#jobs');
          }
        }}
      >
        Apply Now
      </a>
    </div>
  );
}
