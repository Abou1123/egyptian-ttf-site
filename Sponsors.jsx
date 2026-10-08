import Section from './Section.jsx'

export default function Sponsors({ t }) {
  return (
    <Section id="sponsor" label={t.sponsor.label} title={t.sponsor.title} desc={t.sponsor.desc}>
      <div className="tiers">
        {t.sponsor.tiers.map((tier) => (
          <div className={'tier' + (tier.featured ? ' featured' : '')} key={tier.name}>
            {tier.featured && <span className="t-badge">{t.sponsor.badge}</span>}
            <h3>{tier.name}</h3>
            <div className="t-price">
              {tier.price} {tier.period && <small>{tier.period}</small>}
            </div>
            <ul>
              {tier.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <a className="btn btn-dark" href="#contact">{t.sponsor.cta}</a>
          </div>
        ))}
      </div>
    </Section>
  )
}
