/**
 * Personal profile content for Vennie Ruz Barola.
 * Keep claims tied to the experience and tools listed on her resume.
 */
import { Briefcase, PhoneCall, Clock, type Icon } from '@/components/slab'

export type SocialLink = { label: string; href: string; iconPath: string }
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: { body: string; portraitSrc: string; portraitAlt: string }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Vennie Ruz Barola',
  firstName: 'Vennie',
  handle: '@vennieruzb',
  role: 'Executive Assistant · Lead Generation · Customer Support',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Professional experience profile',
  email: 'vennieruzb@gmail.com',
  location: 'Taguig City, Philippines',
  stats: [
    { value: '4+ yrs', label: 'Customer-facing experience', Icon: Briefcase },
    { value: '100+', label: 'Outbound calls per day', Icon: PhoneCall },
    { value: '30+', label: 'HVAC appointments per week', Icon: Clock },
  ],
  displayName: { line1: 'Reliable support.', line2: 'Clear communication.' },
  hero: {
    body: 'I support teams through executive assistance, lead generation, customer service, scheduling, research, and organized follow-through.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Profile illustration',
  },
  socials: [],
}
