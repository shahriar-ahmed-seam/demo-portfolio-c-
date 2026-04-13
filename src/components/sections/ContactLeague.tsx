import type { ContactCard } from '../../data/portfolioData'
import SectionShell from '../ui/SectionShell'

interface ContactLeagueProps {
  specialties: string[]
  contacts: ContactCard[]
}

function ContactLeague({ specialties, contacts }: ContactLeagueProps) {
  return (
    <SectionShell
      id="contact-league"
      title="Elite Contact League"
      subtitle="Connect and collaborate"
    >
      <div className="contact-layout">
        <article className="card">
          <h3>Specialty Moves</h3>
          <ul className="specialty-list">
            {specialties.map((specialty) => (
              <li key={specialty}>{specialty}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Trainer Links</h3>
          <ul className="contact-list">
            {contacts.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  )
}

export default ContactLeague