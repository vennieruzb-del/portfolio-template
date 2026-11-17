const HIGHLIGHTS = [
  { value: '100+', label: 'Outbound calls handled per day', detail: 'AI Hub · Lead generation' },
  { value: '30+', label: 'HVAC appointments scheduled weekly', detail: 'Customer service · Scheduling' },
  { value: '80–100+', label: 'Customer interactions per day', detail: 'TForce Freight · Customer support' },
]

export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Career Highlights</span>
          <h1 className="pgrid__title" id="showcase-title">Experience measured in consistent daily work.</h1>
          <p className="pgrid__lede">A few workload figures from my resume that show the pace and volume of work I have handled.</p>
        </div>
      </header>
      <div className="home__glass ktools__glass">
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Selected workload highlights</h2>
            <p className="sgrid__offers-sub">Figures reflect the responsibilities listed for the relevant roles.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="bento__title">{item.value}</span>
                  <span className="bento__desc">{item.label}</span>
                </span>
                <span className="sgrid__chip">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
