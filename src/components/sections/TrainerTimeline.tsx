import type { TimelineQuest } from '../../data/portfolioData'
import SectionShell from '../ui/SectionShell'

interface TrainerTimelineProps {
  timeline: TimelineQuest[]
}

function TrainerTimeline({ timeline }: TrainerTimelineProps) {
  return (
    <SectionShell
      id="trainer-timeline"
      title="Trainer Timeline"
      subtitle="Career arc and badges"
    >
      <div className="timeline-grid">
        {timeline.map((quest) => (
          <article key={`${quest.year}-${quest.badge}`} className="card timeline-card">
            <header>
              <p>{quest.year}</p>
              <h3>{quest.badge}</h3>
            </header>
            <p className="timeline-city">{quest.city}</p>
            <p>{quest.summary}</p>
            <ul className="stack-list">
              {quest.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="victory-move">{quest.victoryMove}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default TrainerTimeline