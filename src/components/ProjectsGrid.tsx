const EXPERIENCE = [
  {
    period: '2026',
    role: 'Executive Assistant · AI Hub',
    details: 'Provided executive and administrative support, coordinated tasks and follow-ups, conducted B2B prospecting and 100+ outbound cold calls per day, screened U.S. government contracting opportunities, and maintained CRM records and opportunity trackers.',
    highlights: ['100+ outbound calls/day', 'Government opportunity research', 'CRM & executive reporting'],
  },
  {
    period: '2025',
    role: 'Customer Service Representative · HVAC',
    details: 'Scheduled more than 30 HVAC service appointments weekly, handled customer inquiries and appointment concerns, and maintained accurate CRM records while coordinating around technician availability.',
    highlights: ['30+ appointments/week', 'Scheduling', 'Customer support'],
  },
  {
    period: '2023–2024',
    role: 'Customer Service Representative · TForce Freight',
    details: 'Handled 80–100+ customer interactions daily, including shipment tracking, delivery updates, issue resolution, and customer record documentation.',
    highlights: ['80–100+ interactions/day', 'Shipment tracking', 'Issue resolution'],
  },
  {
    period: '2023',
    role: 'Customer Service Representative · Booking.com',
    details: 'Supported hotel reservations, booking requests, cancellations, guest inquiries, booking verification, and customer records.',
    highlights: ['Hospitality support', 'Reservations', 'Guest communication'],
  },
  {
    period: '2022',
    role: 'Customer Service Representative · Macy’s',
    details: 'Assisted customers with orders, account inquiries, service concerns, and documentation.',
    highlights: ['Order support', 'Account inquiries', 'Documentation'],
  },
  {
    period: '2021–2022',
    role: 'Customer Service Representative · Washington Gas',
    details: 'Handled billing, payment, account inquiries, billing concerns, and account record updates.',
    highlights: ['Billing inquiries', 'Payment support', 'Account records'],
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Professional Experience</span>
        <h1 className="pgrid__title" id="projects-title">A track record built around people and follow-through.</h1>
        <p className="pgrid__lede">Selected responsibilities and measurable workload from my previous roles. These are experience highlights, not client case studies.</p>
      </header>
      <div className="home__glass pgrid__glass">
        <div className="bento bento--projects">
          {EXPERIENCE.map((job, index) => (
            <article key={job.role} className="bento__card">
              <div className="bento__head">
                <span className="bento__title">{job.role}</span>
                <span className="bento__desc">{job.details}</span>
                <span className="pgrid__eyebrow">{job.period}</span>
              </div>
              <ul className="sgrid__bullets" role="list">
                {job.highlights.map((item) => (
                  <li key={item} className="sgrid__bullet"><span>{item}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
