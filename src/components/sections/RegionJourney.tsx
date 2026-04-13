import type { RegionArc } from '../../data/portfolioData'
import SectionShell from '../ui/SectionShell'
import TypeChip from '../ui/TypeChip'

interface RegionJourneyProps {
  regionArcs: RegionArc[]
}

function RegionJourney({ regionArcs }: RegionJourneyProps) {
  return (
    <SectionShell
      id="region-journey"
      title="Region Journey"
      subtitle="Nested missions by region"
    >
      <div className="region-list">
        {regionArcs.map((arc) => (
          <article key={arc.region} className="card region-card">
            <header className="region-header">
              <h3>{arc.region}</h3>
              <p>{arc.mission}</p>
            </header>

            <div className="region-meta">
              <div>
                <h4>Key Projects</h4>
                <ul>
                  {arc.keyProjects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Partners</h4>
                <ul>
                  {arc.partners.map((partner) => (
                    <li key={partner}>{partner}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="gym-grid">
              {arc.gyms.map((gym) => (
                <section key={gym.gym} className="gym-card">
                  <div className="gym-head">
                    <h4>{gym.gym}</h4>
                    <TypeChip type={gym.type} />
                  </div>
                  <p className="gym-leader">Leader: {gym.leader}</p>
                  <p>
                    <strong>Challenge:</strong> {gym.challenge}
                  </p>
                  <p>
                    <strong>Strategy:</strong> {gym.strategy}
                  </p>
                  <p className="outcome">
                    <strong>Outcome:</strong> {gym.outcome}
                  </p>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default RegionJourney