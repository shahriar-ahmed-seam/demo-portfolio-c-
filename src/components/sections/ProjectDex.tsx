import type { ProjectDexEntry } from '../../data/portfolioData'
import SectionShell from '../ui/SectionShell'

interface ProjectDexProps {
  projectDex: ProjectDexEntry[]
}

function ProjectDex({ projectDex }: ProjectDexProps) {
  return (
    <SectionShell id="project-dex" title="Project Dex" subtitle="Flagship builds">
      <div className="project-grid">
        {projectDex.map((project) => (
          <article key={project.codename} className="card project-card">
            <header>
              <h3>{project.codename}</h3>
              <span className={`status-pill status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </header>
            <p className="project-category">{project.category}</p>
            <p>{project.objective}</p>

            <div className="nested-block">
              <h4>Capabilities</h4>
              <ul>
                {project.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>

            <div className="nested-block">
              <h4>Architecture</h4>
              <div className="architecture-grid">
                <div>
                  <h5>Frontend</h5>
                  <ul>
                    {project.architecture.frontend.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Backend</h5>
                  <ul>
                    {project.architecture.backend.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Infrastructure</h5>
                  <ul>
                    {project.architecture.infra.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>Analytics</h5>
                  <ul>
                    {project.architecture.analytics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="nested-block">
              <h4>Battle Impact</h4>
              <ul className="impact-list">
                {project.battleImpact.map((impact) => (
                  <li key={impact.metric}>
                    <strong>{impact.metric}</strong>
                    <span>
                      {impact.before} → {impact.after}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default ProjectDex