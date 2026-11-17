const PRINCIPLES = [
  { index: '01', title: 'Clear communication', detail: 'I keep updates concise, confirm important details, and communicate blockers early.' },
  { index: '02', title: 'Reliable follow-through', detail: 'I track next steps, maintain follow-up records, and work to keep commitments visible.' },
  { index: '03', title: 'Accuracy and organization', detail: 'I pay attention to records, schedules, customer details, and documentation.' },
  { index: '04', title: 'Adaptability', detail: 'My background spans sales development, hospitality, logistics, utilities, retail, and service scheduling.' },
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Working Style</span>
        <h1 className="pgrid__title" id="testimonials-title">What you can expect from me.</h1>
        <p className="pgrid__lede">I do not publish client testimonials here. Instead, this page outlines the work habits I bring to a team.</p>
      </header>
      <div className="home__glass tgrid__glass">
        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">How I approach the work</h2>
            <p className="tgrid__ledger-sub">Practical habits built through customer-facing and administrative roles.</p>
          </div>
          <ul className="tgrid__clients" role="list">
            {PRINCIPLES.map((item) => (
              <li key={item.index} className="tgrid__client">
                <span className="tgrid__client-ghost" aria-hidden="true">{item.index}</span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head">
                    <span className="tgrid__client-name">{item.title}</span>
                  </span>
                  <span className="tgrid__client-daily">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
