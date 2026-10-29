import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

// ─── Data ────────────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  {
    label: 'Company',
    href: '#company',
    dropdown: [
      {
        label: 'About Us',
        subtitle: 'Learn about our company and values',
        href: '#about',
      },
      {
        label: 'Our Mission',
        subtitle: 'Discover our purpose and objectives',
        href: '#mission',
      },
      {
        label: 'Our Vision',
        subtitle: 'Explore our future aspirations and goals',
        href: '#vision',
      },
      {
        label: 'Our Leaders',
        subtitle: 'Meet our aspirational leaders',
        href: '#leaders',
      },
    ],
  },
  { label: 'Jobs', href: '#jobs' },
  {
    label: 'Industries',
    href: '#industries',
    dropdown: [
      { label: 'Construction & Real Estate', href: '#construction' },
      { label: 'Shipping & Logistics', href: '#shipping' },
      { label: 'Oil & Gas', href: '#oil-gas' },
      { label: 'Tourism & Hospitality', href: '#tourism' },
      { label: 'Aviation & Aerospace', href: '#aviation' },
      { label: 'Renewable Energy', href: '#energy' },
      { label: 'Health Care', href: '#healthcare' },
    ],
  },
  { label: 'Contact Us', href: '#contact' },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

/**
 * SVG logo mark for SUNVI brand
 */
function SunviLogoMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16" fill="#fff" stroke="#E91E8C" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="5" fill="#E91E8C" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 18 + 7 * Math.cos(rad);
        const y1 = 18 + 7 * Math.sin(rad);
        const x2 = 18 + 13 * Math.cos(rad);
        const y2 = 18 + 13 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#E91E8C"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/**
 * Individual dropdown menu component
 */
function DropdownMenu({ items, isOpen, onSelect }) {
  const isRich = items.some((it) => it.subtitle);

  return (
    <div
      className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''} ${
        isRich ? styles.dropdownRich : ''
      }`}
      role="menu"
      aria-hidden={!isOpen}
    >
      {items.map((item) => {
        if (item.subtitle) {
          return (
            <a
              key={item.label}
              href={item.href}
              className={styles.dropdownItemRich}
              role="menuitem"
              onClick={(e) => {
                if (onSelect) onSelect(item.href, e);
              }}
            >
              <span className={styles.itemTitle}>{item.label}</span>
              <span className={styles.itemSubtitle}>{item.subtitle}</span>
            </a>
          );
        }

        return (
          <a
            key={item.label}
            href={item.href}
            className={styles.dropdownItem}
            role="menuitem"
            onClick={(e) => {
              if (onSelect) onSelect(item.href, e);
            }}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

/**
 * Desktop navigation item — supports rich dropdown
 */
function NavItem({ item, onSelect, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (item.dropdown) {
    return (
      <li ref={ref} className={styles.navItem}>
        <button
          className={`${styles.navLink} ${open ? styles.navLinkOpen : ''} ${
            isActive ? styles.navLinkActive : ''
          }`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="true"
        >
          {item.label}
          <ChevronDown
            size={14}
            className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          />
        </button>
        <DropdownMenu
          items={item.dropdown}
          isOpen={open}
          onSelect={(href, e) => {
            setOpen(false);
            if (onSelect) onSelect(href, e);
          }}
        />
      </li>
    );
  }

  return (
    <li className={styles.navItem}>
      <a
        href={item.href}
        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
        onClick={(e) => {
          if (onSelect) onSelect(item.href, e);
        }}
      >
        {item.label}
      </a>
    </li>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

/**
 * Navbar – sticky header with logo, desktop nav, rich dropdowns, and mobile menu
 */
export default function Navbar({ activeRoute, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  // Add shadow on scroll
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  function toggleMobileItem(label) {
    setMobileExpanded((prev) => (prev === label ? null : label));
  }

  function handleSelect(href, e) {
    if (onNavigate) {
      onNavigate(href);
    }
    setMobileOpen(false);
  }

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      role="banner"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a
          href="#home"
          className={styles.logo}
          aria-label="Sunvi Hi-Tech Home"
          onClick={(e) => handleSelect('#home', e)}
        >
          <SunviLogoMark />
          <span className={styles.logoText}>SUNVI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList} role="list">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '#' + activeRoute ||
                (item.href === '#home' && (activeRoute === 'home' || !activeRoute)) ||
                (item.href === '#contact' && activeRoute === 'contact') ||
                (item.href === '#jobs' && activeRoute === 'jobs') ||
                Boolean(item.dropdown && item.dropdown.some((d) => d.href === '#' + activeRoute));

              return (
                <NavItem
                  key={item.label}
                  item={item}
                  onSelect={handleSelect}
                  isActive={isActive}
                />
              );
            })}
          </ul>
        </nav>

        {/* Login Button */}
        <a
          href="#login"
          className={styles.loginBtn}
          id="nav-login-btn"
          onClick={(e) => handleSelect('#login', e)}
        >
          Login
        </a>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          id="hamburger-btn"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList} role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={styles.mobileNavItem}>
                {item.dropdown ? (
                  <>
                    <button
                      className={styles.mobileNavLink}
                      onClick={() => toggleMobileItem(item.label)}
                      aria-expanded={mobileExpanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`${styles.chevron} ${
                          mobileExpanded === item.label ? styles.chevronOpen : ''
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <ul className={styles.mobileDropdown} role="list">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              className={
                                sub.subtitle
                                  ? styles.mobileDropdownItemRich
                                  : styles.mobileDropdownItem
                              }
                              onClick={(e) => handleSelect(sub.href, e)}
                            >
                              <span className={styles.mobileItemTitle}>{sub.label}</span>
                              {sub.subtitle && (
                                <span className={styles.mobileItemSubtitle}>
                                  {sub.subtitle}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={(e) => handleSelect(item.href, e)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.mobileCta}>
            <a
              href="#login"
              className="btn-primary"
              onClick={(e) => handleSelect('#login', e)}
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
