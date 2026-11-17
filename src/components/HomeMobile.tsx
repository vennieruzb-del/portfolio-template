import { Link } from 'react-router-dom'
import { SealCheck, Stack, PhoneCall, MagnifyingGlass, User, FolderOpen } from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">{profile.handle} · {profile.role}</span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Experience', to: '/projects', title: 'My professional background', desc: 'Roles, responsibilities, and work highlights.', Icon: FolderOpen },
  { n: '02', label: 'Capabilities', to: '/services', title: 'How I can support your team', desc: 'Administrative, customer, and operations support.', Icon: Stack },
  { n: '03', label: 'Lead Generation', to: '/projects', title: 'Prospecting and follow-through', desc: 'Outbound calling, lead qualification, and appointments.', Icon: PhoneCall },
  { n: '04', label: 'Research', to: '/projects', title: 'Research and opportunity screening', desc: 'Government procurement platforms and solicitation review.', Icon: MagnifyingGlass },
  { n: '05', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'Education, experience, and working approach.', Icon: User },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec"><h2 className="hsec__title">Explore</h2></div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to + t.n}>
            <Link to={t.to} className="htile">
              <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
