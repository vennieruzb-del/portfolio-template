import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

type Capability = { index: string; title: string; detail: string }

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Executive & Administrative Support', detail: 'Scheduling, task coordination, follow-ups, documentation, and daily activity reporting.' },
  { index: '02', title: 'Lead Generation & Appointment Setting', detail: 'Prospect research, 100+ outbound calls per day, lead qualification, appointment setting, and follow-up.' },
  { index: '03', title: 'Customer Service & Scheduling', detail: 'Customer inquiries, booking support, service appointments, issue resolution, and accurate records.' },
  { index: '04', title: 'Research & CRM Coordination', detail: 'Government opportunity research, CRM updates, lead databases, trackers, and management reports.' },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">Hi, I’m {profile.firstName}.</h1>
        <p className="pgrid__lede">An organized, customer-focused professional who helps teams stay responsive and on track.</p>
      </header>
      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I bring together <span>administrative support, customer communication, and consistent follow-through.</span>
          </p>
          <p className="agrid__note">
            I hold a Bachelor of Science in Business Management, major in Marketing, from Cavite State University (2019–2023). My experience spans executive assistance, B2B lead generation, appointment setting, and customer service.
          </p>
          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
                <span className="agrid__cap-title">{c.title}<small>{c.detail}</small></span>
              </li>
            ))}
          </ul>
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Tools & platforms</span>
                <span className="agrid__cell-meta">Salesforce · HubSpot · Microsoft Office · Google Workspace</span>
              </span>
            </span>
            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Open to remote opportunities</span>
              </span>
            </span>
          </div>
        </div>
        <div className="agrid__portrait">
          <img src={profile.avatarSrc} alt={profile.name} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
