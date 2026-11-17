import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, User, Stack, PhoneCall, Search, CalendarCheck } from '@/components/slab'

const ITEMS = [
  { to: '/projects', title: 'Professional Experience', desc: 'Roles, responsibilities, and measurable workloads.', Icon: FolderOpen },
  { to: '/services', title: 'Core Capabilities', desc: 'Administrative support, customer service, and operations.', Icon: Stack },
  { to: '/about', title: 'About Me', desc: 'Background, education, and working approach.', Icon: User },
  { to: '/projects', title: 'Lead Generation', desc: 'Prospecting, outbound calls, qualification, and follow-up.', Icon: PhoneCall },
  { to: '/projects', title: 'Research & Screening', desc: 'Government opportunity research and solicitation review.', Icon: Search },
  { to: '/contact', title: 'Get in Touch', desc: 'Contact me about remote opportunities and support roles.', Icon: CalendarCheck },
]

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {ITEMS.map(({ to, title, desc, Icon }) => (
        <Link key={title} to={to} className="bento__card">
          <header className="bento__head">
            <span className="bento__icon"><Icon size={22} weight="duotone" aria-hidden="true" /></span>
            <h3 className="bento__title">{title}</h3>
            <p className="bento__desc">{desc}</p>
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
          </header>
        </Link>
      ))}
    </nav>
  )
}
