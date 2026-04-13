import type { LabExperiment, PokemonType } from '../../data/portfolioData'
import SectionShell from '../ui/SectionShell'
import TypeChip from '../ui/TypeChip'

interface BattleLabProps {
  experiments: LabExperiment[]
  mastery: Array<{ type: PokemonType; score: number; focus: string }>
}

function BattleLab({ experiments, mastery }: BattleLabProps) {
  return (
    <SectionShell id="battle-lab" title="Battle Lab" subtitle="R&D and mastery matrix">
      <div className="lab-layout">
        <div className="card lab-card">
          <h3>Type Mastery Matrix</h3>
          <ul className="mastery-list">
            {mastery.map((item) => (
              <li key={item.type}>
                <div>
                  <TypeChip type={item.type} />
                  <p>{item.focus}</p>
                </div>
                <strong>{item.score}%</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="experiment-stack">
          {experiments.map((experiment) => (
            <article key={experiment.name} className="card experiment-card">
              <h3>{experiment.name}</h3>
              <p>
                <strong>Hypothesis:</strong> {experiment.hypothesis}
              </p>
              <div className="nested-block">
                <h4>Tools</h4>
                <ul>
                  {experiment.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div className="nested-block">
                <h4>Research Notes</h4>
                <ul>
                  {experiment.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export default BattleLab