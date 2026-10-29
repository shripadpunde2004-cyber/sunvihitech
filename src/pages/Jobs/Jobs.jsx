import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Building2, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  Send, 
  X, 
  ChevronDown, 
  DollarSign, 
  ShieldCheck, 
  MessageCircle,
  FileCheck2,
  Users
} from 'lucide-react';
import styles from './Jobs.module.css';

// ─── Verified Jobs Dataset ───────────────────────────────────────────────────

const AVAILABLE_JOBS = [
  {
    id: 'job-1',
    title: 'Senior Structural Steel Welder (3G/4G/6G)',
    location: 'Dubai, UAE',
    industry: 'Construction & Real Estate',
    salary: 'AED 3,800 - 4,800 / month',
    experience: '3-5 Years',
    vacancies: '15 Openings',
    employmentType: 'Full Time',
    badges: ['Immediate Mobilization', 'Free Food & Accommodation', 'Visa Provided'],
    skills: ['6G Welding', 'Structural Steel', 'SMAW / GMAW', 'Blueprint Reading'],
    desc: 'Seeking experienced structural steel welders for major high-rise engineering projects in Dubai Marina. Responsible for heavy structural assembly and certified X-ray quality joint welds.',
    responsibilities: [
      'Execute 3G, 4G, and 6G structural steel welds following ASME and AWS standards.',
      'Interpret engineering blueprints, weld symbols, and fabrication layouts accurately.',
      'Perform pre-weld preparation, joint beveling, and post-weld cleaning and inspection.',
      'Maintain strict compliance with site safety, scaffolding regulations, and PPE protocols.',
    ],
    benefits: [
      'Company-provided air-conditioned bachelor accommodation',
      'Free duty meals or monthly food allowance',
      'Comprehensive medical insurance coverage under UAE MOHRE',
      'Overtime allowance as per UAE labor law',
      'Biennial return flight ticket to home country',
    ],
  },
  {
    id: 'job-2',
    title: 'HVAC Chiller & Central Duct Technician',
    location: 'Abu Dhabi, UAE',
    industry: 'Construction & Real Estate',
    salary: 'AED 3,200 - 4,200 / month',
    experience: '2-4 Years',
    vacancies: '12 Openings',
    employmentType: 'Full Time',
    badges: ['Accommodation Provided', 'Overtime Available', 'Visa Provided'],
    skills: ['HVAC Chillers', 'VRF Systems', 'Duct Installation', 'Preventive Maintenance'],
    desc: 'Responsible for installation, routine servicing, and troubleshooting of commercial chilled water systems, VRF units, and air handling equipment across government facilities.',
    responsibilities: [
      'Perform preventive maintenance and breakdown repairs on centrifugal and screw chillers.',
      'Check refrigerant levels, diagnose compressor faults, and execute vacuum charging.',
      'Install and insulate sheet metal air ducting and secondary distribution fans.',
      'Log diagnostic checklists and submit daily maintenance work orders to site engineers.',
    ],
    benefits: [
      'Free accommodation with recreation facilities',
      'Transport to and from client work sites in Abu Dhabi',
      'Health insurance and accidental cover',
      'Paid annual vacation leave (30 days) with airfare',
    ],
  },
  {
    id: 'job-3',
    title: 'Heavy Equipment Tower Crane Operator',
    location: 'Dubai, UAE',
    industry: 'Construction & Real Estate',
    salary: 'AED 4,500 - 5,500 / month',
    experience: '5+ Years',
    vacancies: '8 Openings',
    employmentType: 'Full Time',
    badges: ['Certified Operator', 'High Demand', 'Flight Ticket Provided'],
    skills: ['Tower Crane', 'Rigging Safety', 'Heavy Lifting', 'Radio Signaling'],
    desc: 'Operate top-slewing tower cranes for major infrastructure development projects. Requires valid Gulf/Indian heavy machinery credential and strong depth perception.',
    responsibilities: [
      'Safely hoist and maneuver concrete buckets, precast elements, and steel cages at height.',
      'Conduct daily pre-operational equipment checks: ropes, limit switches, and brakes.',
      'Coordinate closely with banksmen and riggers using two-way radio communication.',
      'Adhere strictly to safe working load (SWL) charts and local wind speed restrictions.',
    ],
    benefits: [
      'High-tier compensation package with incentive bonuses',
      'Company bachelor accommodation & food allowances',
      'Comprehensive UAE medical policy',
      'Annual flight ticket and end-of-service gratuity',
    ],
  },
  {
    id: 'job-4',
    title: 'Industrial Pipeline Welder (6G TIG & ARC)',
    location: 'Ruwais, UAE',
    industry: 'Oil & Gas',
    salary: 'AED 4,200 - 5,600 / month',
    experience: '4+ Years',
    vacancies: '20 Openings',
    employmentType: 'Full Time',
    badges: ['Oil & Gas Certified', 'Overtime Pay', 'Full Camp Facility'],
    skills: ['TIG / ARC 6G', 'High Pressure Pipe', 'Stainless Steel', 'Petrochemical'],
    desc: 'High-precision pipeline welding for petrochemical refinery expansion in the Western Region of Abu Dhabi. Subject to strict radiographic (X-ray) joint testing.',
    responsibilities: [
      'Perform root pass TIG (GTAW) and filler cap ARC (SMAW) welds on high-pressure pipelines.',
      'Work on carbon steel, duplex, and stainless steel spools in 6G fixed positions.',
      'Maintain weld traceability logs and heat number records for quality inspection.',
      'Comply with strict ADNOC / oil-and-gas HSE standards in hazardous zones.',
    ],
    benefits: [
      'Full catering and camp accommodation in Ruwais',
      'Substantial overtime compensation',
      'Specialized site safety allowances',
      'Comprehensive medical insurance and visa sponsorships',
    ],
  },
  {
    id: 'job-5',
    title: 'Industrial Electrician & Control Panel Wireman',
    location: 'Sharjah, UAE',
    industry: 'Construction & Real Estate',
    salary: 'AED 3,000 - 3,900 / month',
    experience: '3+ Years',
    vacancies: '14 Openings',
    employmentType: 'Full Time',
    badges: ['Annual Paid Leave', 'Visa & Medicals Included', 'Accommodation Provided'],
    skills: ['Control Panels', 'Cable Termination', 'DB Dressing', 'Industrial Wiring'],
    desc: 'Industrial electrical wiring, cable tray installations, main distribution board (MDB) terminations, and motor control circuits for manufacturing plants.',
    responsibilities: [
      'Route and fix heavy armored cables on GI cable trays and containment systems.',
      'Dress and terminate sub-distribution boards (SMDB) and motor control centers (MCC).',
      'Conduct insulation resistance (megger) and continuity tests before power energization.',
      'Diagnose wiring faults in single-phase and 3-phase machinery circuits.',
    ],
    benefits: [
      'Furnished company accommodation and free transport',
      '30-day annual paid leave and return ticket',
      'Full medical coverage under UAE law',
    ],
  },
  {
    id: 'job-6',
    title: 'Warehouse & Logistics Forklift Operator',
    location: 'Dubai, UAE',
    industry: 'Shipping & Logistics',
    salary: 'AED 2,800 - 3,600 / month',
    experience: '2+ Years',
    vacancies: '18 Openings',
    employmentType: 'Full Time',
    badges: ['Free Accommodation', 'Transportation Provided', 'Medical Cover'],
    skills: ['Forklift Driving', 'Reach Truck', 'Warehouse Logistics', 'Barcode Scanning'],
    desc: 'Operate counterbalance and reach forklifts in Jebel Ali Free Zone (JAFZA) logistics hub. Responsible for high-density pallet racking, loading, and unloading containers.',
    responsibilities: [
      'Load, unload, and stage incoming palletized freight from shipping containers.',
      'Stack and retrieve cargo on heavy-duty vertical racking up to 9 meters safely.',
      'Inspect forklift daily: battery charge, hydraulics, steering, and emergency stops.',
      'Scan barcodes and update warehouse management system (WMS) pick lists.',
    ],
    benefits: [
      'Accommodation within JAFZA staff community',
      'Daily subsidized meals and transportation',
      'UAE employment visa and Emirates ID paid by employer',
    ],
  },
  {
    id: 'job-7',
    title: 'Commercial Solar PV Installation Technician',
    location: 'Dubai, UAE',
    industry: 'Renewable Energy',
    salary: 'AED 3,400 - 4,400 / month',
    experience: '2-5 Years',
    vacancies: '10 Openings',
    employmentType: 'Full Time',
    badges: ['Green Energy Project', 'Overtime Provided', 'Visa Included'],
    skills: ['Solar PV', 'Inverters', 'DC Cabling', 'Roof Mounting'],
    desc: 'Mounting commercial rooftop photovoltaic arrays, DC string cabling, combiner box connections, and inverter installation for clean energy initiatives.',
    responsibilities: [
      'Assemble aluminum racking structures and clamp solar modules on industrial roofs.',
      'Run solar DC cables, crimp MC4 connectors, and wire string monitoring boxes.',
      'Assist in testing open-circuit voltage (Voc) and short-circuit current (Isc).',
      'Enforce fall protection and working-at-height safety regulations strictly.',
    ],
    benefits: [
      'Free shared accommodation and travel allowances',
      'Overtime wages as per green infrastructure contract',
      'Complete health cover and safety certifications',
    ],
  },
  {
    id: 'job-8',
    title: 'Hotel Facility Maintenance Plumber & Mechanic',
    location: 'Dubai, UAE',
    industry: 'Hospitality & Tourism',
    salary: 'AED 2,600 - 3,400 / month',
    experience: '2+ Years',
    vacancies: '6 Openings',
    employmentType: 'Full Time',
    badges: ['Duty Meals Included', 'Service Charge / Tips', 'Accommodation Provided'],
    skills: ['Commercial Plumbing', 'Pump Maintenance', 'PPR / Copper Piping', 'Sanitation'],
    desc: 'Maintain plumbing infrastructure, booster pumps, swimming pool filtration, and guest room sanitary fixtures for a luxury 5-star beachfront resort in Dubai.',
    responsibilities: [
      'Repair water heaters, mixers, flushing systems, and drainage networks promptly.',
      'Maintain pressurized booster pump sets, pressure vessels, and filtration circuits.',
      'Perform preventative maintenance on greywater recycling and irrigation pumps.',
      'Ensure neat, professional guest-facing demeanor and clean work standards.',
    ],
    benefits: [
      'Accommodation with resort amenities',
      '3 complimentary duty meals daily in staff cafeteria',
      'Monthly service charge tip pooling share',
      'Full visa and medical insurance',
    ],
  },
];

const LOCATIONS = [
  'All Locations',
  'Dubai, UAE',
  'Abu Dhabi, UAE',
  'Sharjah, UAE',
  'Ruwais, UAE',
];

const INDUSTRIES = [
  'All Industries',
  'Construction & Real Estate',
  'Oil & Gas',
  'Shipping & Logistics',
  'Renewable Energy',
  'Hospitality & Tourism',
];

// ─── Main Component ──────────────────────────────────────────────────────────

/**
 * Jobs – Full functional jobs listing & recruitment portal for Sunvi Hi-Tech
 *
 * Matches exact UI from screenshot:
 *   - "Jobs Available & Global Opportunities" gradient heading
 *   - Search input + "All Locations" dropdown + "All Industries" dropdown
 *   - "X jobs found" counter
 *   - Clean verified job cards with apply modal and details drawer
 */
export default function Jobs({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  // Modals state
  const [applyJob, setApplyJob] = useState(null);
  const [detailsJob, setDetailsJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    experience: '3-5 Years',
    passportStatus: 'Valid Passport (6+ Months)',
    notes: '',
  });

  // Filter logic
  const filteredJobs = useMemo(() => {
    return AVAILABLE_JOBS.filter((job) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.desc.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q));

      const matchesLocation =
        selectedLocation === 'All Locations' || job.location.includes(selectedLocation.replace(', UAE', ''));

      const matchesIndustry =
        selectedIndustry === 'All Industries' || job.industry === selectedIndustry;

      return matchesQuery && matchesLocation && matchesIndustry;
    });
  }, [searchQuery, selectedLocation, selectedIndustry]);

  // Close modals on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setApplyJob(null);
        setDetailsJob(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleResetFilters() {
    setSearchQuery('');
    setSelectedLocation('All Locations');
    setSelectedIndustry('All Industries');
  }

  function handleOpenApply(job) {
    setDetailsJob(null);
    setApplyJob(job);
    setApplicationSubmitted(false);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitApplication(e) {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setApplicationSubmitted(true);
    }, 800);
  }

  return (
    <article className={styles.page} aria-label="Available Jobs - Sunvi Hi-Tech">
      {/* ────────────────────────────────────────────────────────
          1. HEADER SECTION
          ──────────────────────────────────────────────────────── */}
      <header className={styles.headerSection}>
        <div className="container">
          <div className={styles.headingWrapper}>
            <h1 className={styles.pageTitle}>
              Jobs Available & <span className={styles.gradientText}>Global Opportunities</span>
            </h1>
            <p className={styles.pageSubtitle}>
              Browse verified overseas vacancies for skilled trades across Dubai and the UAE with transparent employment contracts, ethical recruitment standards, and end-to-end relocation support.
            </p>
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────────────────
          2. FILTER & SEARCH BAR (Matches Screenshot UI)
          ──────────────────────────────────────────────────────── */}
      <section className={styles.filterBarSection} aria-label="Job Search and Filters">
        <div className="container">
          <div className={styles.filterCard}>
            {/* Search Input */}
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} size={18} aria-hidden="true" />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search by job title, skills, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search jobs by title, skills, or keywords"
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Location Dropdown */}
            <div className={styles.selectWrapper}>
              <select
                className={styles.filterSelect}
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                aria-label="Filter by Location"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <ChevronDown className={styles.selectChevron} size={16} aria-hidden="true" />
            </div>

            {/* Industry Dropdown */}
            <div className={styles.selectWrapper}>
              <select
                className={styles.filterSelect}
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                aria-label="Filter by Industry"
              >
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              <ChevronDown className={styles.selectChevron} size={16} aria-hidden="true" />
            </div>
          </div>

          {/* Result Count Meta Bar */}
          <div className={styles.resultMetaBar}>
            <span className={styles.jobCountText}>
              {filteredJobs.length} {filteredJobs.length === 1 ? 'job found' : 'jobs found'}
            </span>

            {(searchQuery || selectedLocation !== 'All Locations' || selectedIndustry !== 'All Industries') && (
              <button
                type="button"
                className={styles.resetFiltersLink}
                onClick={handleResetFilters}
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. JOBS LISTING SECTION
          ──────────────────────────────────────────────────────── */}
      <section className="container" aria-label="Job Openings">
        {filteredJobs.length > 0 ? (
          <div className={styles.jobsGrid}>
            {filteredJobs.map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <div>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>{job.title}</h2>
                    <span className={styles.verifiedBadge}>
                      <ShieldCheck size={13} /> Verified
                    </span>
                  </div>

                  {/* Metadata Row */}
                  <div className={styles.cardMetaRow}>
                    <span className={styles.metaItem}>
                      <MapPin size={14} color="#a855f7" /> {job.location}
                    </span>
                    <span className={styles.metaItem}>
                      <Building2 size={14} color="#64748b" /> {job.industry}
                    </span>
                    <span className={styles.metaItem}>
                      <Briefcase size={14} color="#64748b" /> {job.experience}
                    </span>
                  </div>

                  {/* Salary highlight */}
                  <div className={styles.salaryHighlight}>
                    <DollarSign size={16} color="#9333ea" />
                    <span>{job.salary}</span>
                  </div>

                  <p className={styles.cardDesc}>{job.desc}</p>

                  {/* Badges and Skills */}
                  <div className={styles.tagsRow}>
                    {job.badges.map((badge, idx) => (
                      <span key={idx} className={styles.benefitChip}>
                        ✓ {badge}
                      </span>
                    ))}
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillChip}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className={styles.cardActions}>
                  <button
                    type="button"
                    className={styles.viewDetailsBtn}
                    onClick={() => setDetailsJob(job)}
                  >
                    View Details →
                  </button>

                  <button
                    type="button"
                    className={styles.applyBtn}
                    onClick={() => handleOpenApply(job)}
                  >
                    Apply Now <Send size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State if no jobs match filters */
          <div className={styles.emptyState}>
            <div className={styles.emptyIconBox}>
              <Search size={28} />
            </div>
            <h3 className={styles.emptyTitle}>No matching jobs found</h3>
            <p className={styles.emptyText}>
              We couldn't find any positions matching your selected keywords or filters. Try adjusting your query or clear filters to see all available openings.
            </p>
            <button
              type="button"
              className={styles.resetBtn}
              onClick={handleResetFilters}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* ────────────────────────────────────────────────────────
          4. INTERACTIVE APPLICATION MODAL
          ──────────────────────────────────────────────────────── */}
      {applyJob && (
        <div
          className={styles.modalOverlay}
          onClick={() => setApplyJob(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setApplyJob(null)}
              aria-label="Close application form"
            >
              <X size={18} />
            </button>

            {!applicationSubmitted ? (
              <>
                <div className={styles.modalHeader}>
                  <span className={styles.modalBadge}>Job Application</span>
                  <h3 id="apply-modal-title" className={styles.modalJobTitle}>
                    {applyJob.title}
                  </h3>
                  <div className={styles.modalJobLocation}>
                    <MapPin size={14} color="#9333ea" />
                    <span>{applyJob.location} • {applyJob.salary}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmitApplication} className={styles.formGrid}>
                  {/* Full Name */}
                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>Full Name (as per Passport) *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className={styles.formInput}
                      value={formData.fullName}
                      onChange={handleFormChange}
                    />
                  </div>

                  {/* WhatsApp / Phone */}
                  <div>
                    <label className={styles.formLabel}>WhatsApp / Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={styles.formLabel}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </div>

                  {/* Current City / State */}
                  <div>
                    <label className={styles.formLabel}>Current City & State *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Pune, Maharashtra"
                      className={styles.formInput}
                      value={formData.city}
                      onChange={handleFormChange}
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className={styles.formLabel}>Relevant Experience *</label>
                    <select
                      name="experience"
                      className={styles.formSelect}
                      value={formData.experience}
                      onChange={handleFormChange}
                    >
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5-8 Years">5-8 Years</option>
                      <option value="8+ Years">8+ Years</option>
                    </select>
                  </div>

                  {/* Passport Status */}
                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>Indian Passport Status *</label>
                    <select
                      name="passportStatus"
                      className={styles.formSelect}
                      value={formData.passportStatus}
                      onChange={handleFormChange}
                    >
                      <option value="Valid Passport (6+ Months)">Valid Passport (6+ Months validity)</option>
                      <option value="Passport Under Renewal">Passport Under Renewal</option>
                      <option value="Need to Apply for New Passport">Applying for New Passport</option>
                    </select>
                  </div>

                  {/* Ethical Guarantee Disclaimer */}
                  <div className={styles.disclaimerBox}>
                    <ShieldCheck size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'text-bottom' }} />
                    <strong>Ethical Recruitment Guarantee:</strong> Sunvi Hi-Tech charges zero registration fees. Your application is reviewed directly by our verified overseas deployment team.
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className={styles.submitBtn} disabled={submitting}>
                    {submitting ? 'Submitting Application...' : 'Submit Application Now'}
                  </button>
                </form>
              </>
            ) : (
              /* Success confirmation state */
              <div className={styles.successCard}>
                <div className={styles.successIconWrap}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 className={styles.successTitle}>Application Submitted!</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.fullName}</strong>. Your profile for{' '}
                  <strong>{applyJob.title}</strong> has been registered with our overseas placement desk.
                  Our team will contact you on <strong>{formData.phone}</strong> for trade assessment and documentation.
                </p>

                <a
                  href={`https://wa.me/918983656433?text=Hello%20Sunvi%20Hi-Tech,%20I%20have%20applied%20for%20the%20position%20of%20${encodeURIComponent(
                    applyJob.title
                  )}.%20My%20name%20is%20${encodeURIComponent(formData.fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsAppBtn}
                >
                  <MessageCircle size={18} /> Chat on WhatsApp for Fast Track
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          5. INTERACTIVE JOB DETAILS MODAL
          ──────────────────────────────────────────────────────── */}
      {detailsJob && (
        <div
          className={styles.modalOverlay}
          onClick={() => setDetailsJob(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="details-modal-title"
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setDetailsJob(null)}
              aria-label="Close job details"
            >
              <X size={18} />
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalBadge}>{detailsJob.industry}</span>
              <h3 id="details-modal-title" className={styles.modalJobTitle}>
                {detailsJob.title}
              </h3>
              <div className={styles.modalJobLocation}>
                <MapPin size={14} color="#9333ea" />
                <span>{detailsJob.location} • {detailsJob.employmentType}</span>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div className={styles.salaryHighlight}>
                <DollarSign size={16} color="#9333ea" />
                <span>Salary: {detailsJob.salary}</span>
              </div>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {detailsJob.desc}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: 10 }}>
                Key Responsibilities:
              </h4>
              <ul style={{ paddingLeft: 18, color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {detailsJob.responsibilities.map((resp, idx) => (
                  <li key={idx} style={{ marginBottom: 6 }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Included Benefits */}
            <div style={{ marginBottom: 26 }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: 10 }}>
                Company Benefits Provided:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {detailsJob.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: '#166534' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button
                type="button"
                className={styles.applyBtn}
                style={{ width: '100%', justifyContent: 'center', padding: 14 }}
                onClick={() => handleOpenApply(detailsJob)}
              >
                Apply for this Position <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
