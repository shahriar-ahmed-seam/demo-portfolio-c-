import BattleLab from './components/sections/BattleLab'
import ContactLeague from './components/sections/ContactLeague'
import HeroSection from './components/sections/HeroSection'
import ProjectDex from './components/sections/ProjectDex'
import RegionJourney from './components/sections/RegionJourney'
import TrainerTimeline from './components/sections/TrainerTimeline'
import { portfolioData } from './data/portfolioData'
import './App.css'

function App() {
  return (
    <main className="portfolio-shell">
      <HeroSection profile={portfolioData.profile} />
      <TrainerTimeline timeline={portfolioData.timeline} />
      <RegionJourney regionArcs={portfolioData.regionArcs} />
      <ProjectDex projectDex={portfolioData.projectDex} />
      <BattleLab
        experiments={portfolioData.labExperiments}
        mastery={portfolioData.typeMastery}
      />
      <ContactLeague
        specialties={portfolioData.profile.specialties}
        contacts={portfolioData.contact}
      />
    </main>
  )
}

export default App
