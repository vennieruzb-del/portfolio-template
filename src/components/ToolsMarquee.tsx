import { useMemo } from 'react'

type Tool = { name: string; iconPath?: string; color?: string }

// Platforms and tools listed in my resume and work history.
export const tools: Tool[] = [
  { name: 'Salesforce' },
  { name: 'HubSpot' },
  { name: 'Microsoft Office' },
  { name: 'Google Workspace' },
  { name: 'SAM.gov' },
  { name: 'GovTribe' },
  { name: 'Govly' },
  { name: 'HigherGov' },
  { name: 'Forecast' },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])
  return (
    <section className="tools-marquee" aria-label="Tools and platforms" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => (
          <div key={`${tool.name}-${i}`} className="tools-marquee__item">
            <span className="tools-marquee__tile" aria-hidden="true" />
            <span className="tools-marquee__label">{tool.name}</span>
          </div>
        ))}
      </div>
      <ul className="sr-only">
        {tools.map((tool) => <li key={tool.name}>{tool.name}</li>)}
      </ul>
    </section>
  )
}
