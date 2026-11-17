import { CheckCircle } from '@/components/slab'

const AREAS = [
  { index: '01', title: 'Executive & Administrative Assistance', description: 'Scheduling, task coordination, follow-ups, documentation, and daily reporting.', tags: ['Calendar support', 'Task tracking', 'Documentation'] },
  { index: '02', title: 'Lead Generation & Appointment Setting', description: 'Prospect research, outbound calling, lead qualification, appointment setting, and consistent follow-up.', tags: ['100+ calls/day', 'Lead qualification', 'CRM updates'] },
  { index: '03', title: 'Customer Support & Scheduling', description: 'Customer inquiries, booking assistance, service appointment coordination, and issue resolution.', tags: ['Customer communication', '30+ HVAC appointments/week', 'Records'] },
  { index: '04', title: 'Research & Opportunity Screening', description: 'Researching and reviewing U.S. government opportunities, solicitations, and procurement forecasts.', tags: ['SAM.gov', 'GovTribe', 'Govly · HigherGov · Forecast'] },
  { index: '05', title: 'CRM & Operations Coordination', description: 'Maintaining accurate lead records, trackers, call notes, follow-up activities, and management updates.', tags: ['Salesforce', 'HubSpot', 'Reporting'] },
]

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">What I Can Support</span>
        <h1 className="pgrid__title" id="services-title">Reliable support for daily operations.</h1>
        <p className="pgrid__lede">Core responsibilities I have handled across executive assistance, sales development, and customer service roles.</p>
      </header>
      <div className="home__glass sgrid__glass">
        <div className="sgrid__method">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I Work</span>
            <h2 className="sgrid__method-title">Understand. Organize. Follow through.</h2>
            <p className="sgrid__method-sub">I focus on clear communication, accurate records, timely follow-ups, and keeping work moving.</p>
          </div>
          <ol className="sgrid__stages" role="list">
            {[
              ['01', 'Understand', 'Clarify priorities, gather details, and identify the next action.'],
              ['02', 'Organize', 'Keep schedules, records, trackers, and communication in order.'],
              ['03', 'Follow through', 'Complete follow-ups, flag blockers, and provide clear updates.'],
            ].map(([index, title, body]) => (
              <li key={index} className="sgrid__stage">
                <span className="sgrid__stage-ghost" aria-hidden="true">{index}</span>
                <h3 className="sgrid__stage-label">{title}</h3>
                <p className="sgrid__stage-body">{body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Experience & capabilities</h2>
            <p className="sgrid__offers-sub">Based on responsibilities in my professional experience.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {AREAS.map((item) => (
              <li key={item.index} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-index">{item.index} / 05</span>
                  <span className="bento__title">{item.title}</span>
                  <span className="bento__desc">{item.description}</span>
                </span>
                <ul className="sgrid__bullets" role="list">
                  {item.tags.map((tag) => (
                    <li key={tag} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
