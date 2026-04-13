import type { TrainerProfile } from '../../data/portfolioData'
import heroImg from '../../assets/hero.png'

interface HeroSectionProps {
  profile: TrainerProfile
}

function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="hero-tag">⚡ Pokémon Themed Engineering Portfolio</p>
        <h1>{profile.trainerName}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-intro">
          Starter partner: <strong>{profile.starter}</strong> · Rank:{' '}
          <strong>{profile.currentRank}</strong>
        </p>
        <p className="hero-region">Active Regions: {profile.regionFocus}</p>
      </div>

      <aside className="hero-panel card" aria-label="Trainer Stats Explorer">
        <img 
          src={heroImg} 
          alt={`${profile.trainerName} Trainer Avatar`} 
          className="trainer-sprite"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <h3>Trainer Quick Dex</h3>
        <ul>
          {profile.quickStats.map((stat) => (
            <li key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default HeroSection