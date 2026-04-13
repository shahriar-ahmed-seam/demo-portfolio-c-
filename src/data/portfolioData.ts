export type PokemonType =
  | 'Electric'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Psychic'
  | 'Steel'
  | 'Dragon'
  | 'Ghost'
  | 'Dark'
  | 'Fairy'
  | 'Fighting'
  | 'Flying'
  | 'Normal'
  | 'Ground'
  | 'Ice'

export interface TrainerProfile {
  trainerName: string
  title: string
  starter: string
  currentRank: string
  regionFocus: string
  specialties: string[]
  quickStats: Array<{ label: string; value: string }>
}

export interface TimelineQuest {
  year: string
  badge: string
  city: string
  summary: string
  stack: string[]
  victoryMove: string
}

export interface GymChallenge {
  gym: string
  leader: string
  type: PokemonType
  challenge: string
  strategy: string
  outcome: string
}

export interface RegionArc {
  region: string
  mission: string
  keyProjects: string[]
  partners: string[]
  gyms: GymChallenge[]
}

export interface ProjectDexEntry {
  codename: string
  category: string
  status: 'Live' | 'Scaling' | 'In Research'
  objective: string
  capabilities: string[]
  architecture: {
    frontend: string[]
    backend: string[]
    infra: string[]
    analytics: string[]
  }
  battleImpact: {
    metric: string
    before: string
    after: string
  }[]
}

export interface LabExperiment {
  name: string
  hypothesis: string
  tools: string[]
  notes: string[]
}

export interface ContactCard {
  label: string
  value: string
  href: string
}

export interface PortfolioData {
  profile: TrainerProfile
  timeline: TimelineQuest[]
  regionArcs: RegionArc[]
  projectDex: ProjectDexEntry[]
  labExperiments: LabExperiment[]
  typeMastery: Array<{ type: PokemonType; score: number; focus: string }>
  contact: ContactCard[]
}

export const portfolioData: PortfolioData = {
  profile: {
    trainerName: 'Ashen Byte',
    title: 'Full-Stack Pokémon Systems Architect',
    starter: 'Pikachu',
    currentRank: 'Champion-tier Product Engineer',
    regionFocus: 'Kanto → Johto → Hoenn → Global Remote League',
    specialties: [
      'Frontend architecture',
      'Type-safe APIs',
      'Design systems',
      'Developer experience automation',
      'Performance tuning',
    ],
    quickStats: [
      { label: 'Badges Earned', value: '24' },
      { label: 'Production Launches', value: '41' },
      { label: 'Avg Lighthouse', value: '98/100' },
      { label: 'Open Source PRs', value: '280+' },
    ],
  },
  timeline: [
    {
      year: '2019',
      badge: 'Boulder Badge',
      city: 'Pallet Town Labs',
      summary: 'Built first Pokédex-style dashboard for internal analytics.',
      stack: ['React', 'TypeScript', 'CSS Modules', 'Node.js'],
      victoryMove: 'Cut report generation time by 67%.',
    },
    {
      year: '2021',
      badge: 'Rainbow Badge',
      city: 'Celadon Commerce',
      summary: 'Led modular checkout redesign with experiment-driven UX.',
      stack: ['Next.js', 'GraphQL', 'Playwright', 'Storybook'],
      victoryMove: 'Increased conversion by 22% and reduced cart drop-offs.',
    },
    {
      year: '2023',
      badge: 'Marsh Badge',
      city: 'Saffron Intelligence',
      summary: 'Shipped AI-assisted workflow orchestration for support teams.',
      stack: ['React', 'Python', 'Redis', 'PostgreSQL'],
      victoryMove: 'Resolved 38% of tickets with guided self-service flows.',
    },
    {
      year: '2025',
      badge: 'Earth Badge',
      city: 'Indigo Plateau Studio',
      summary: 'Architected cross-region portfolio platform and command center.',
      stack: ['Vite', 'TypeScript', 'FastAPI', 'Docker'],
      victoryMove: 'Unified 6 product lines under one consistent UI/UX.',
    },
  ],
  regionArcs: [
    {
      region: 'Kanto',
      mission: 'Build reliable foundations and reusable UI primitives.',
      keyProjects: ['PokéUI Core', 'Trainer Auth Portal'],
      partners: ['Design Gym', 'Platform Squad'],
      gyms: [
        {
          gym: 'Pewter Gym',
          leader: 'Brock',
          type: 'Ground',
          challenge: 'Stabilize flaky release pipelines.',
          strategy: 'Introduced release train automation and preview deploys.',
          outcome: 'Deployment confidence improved from 48% to 95%.',
        },
        {
          gym: 'Cerulean Gym',
          leader: 'Misty',
          type: 'Water',
          challenge: 'Fix cross-device navigation complexity.',
          strategy: 'Implemented adaptive information architecture.',
          outcome: 'Mobile task completion improved by 31%.',
        },
      ],
    },
    {
      region: 'Johto',
      mission: 'Scale product velocity while preserving quality.',
      keyProjects: ['Battle Metrics Lake', 'Evolution Experiments'],
      partners: ['Growth Guild', 'QA Elite Four'],
      gyms: [
        {
          gym: 'Goldenrod Gym',
          leader: 'Whitney',
          type: 'Normal',
          challenge: 'Handle sudden traffic spikes from events.',
          strategy: 'Added cache tiers and edge rendering strategy.',
          outcome: 'P95 latency reduced from 1.8s to 420ms.',
        },
        {
          gym: 'Blackthorn Gym',
          leader: 'Clair',
          type: 'Dragon',
          challenge: 'Unify fragmented data contracts across teams.',
          strategy: 'Shipped schema versioning and contract checks in CI.',
          outcome: 'Integration incidents dropped by 72%.',
        },
      ],
    },
  ],
  projectDex: [
    {
      codename: 'Project Thunderbolt',
      category: 'Realtime Collaboration',
      status: 'Live',
      objective: 'Enable trainers to co-edit plans and sync team strategy live.',
      capabilities: [
        'Presence and cursors',
        'Conflict-free updates',
        'Command palette workflows',
      ],
      architecture: {
        frontend: ['React', 'Zustand', 'TanStack Query'],
        backend: ['Node.js', 'WebSocket Gateway', 'PostgreSQL'],
        infra: ['GitHub Actions', 'Docker', 'Fly.io'],
        analytics: ['PostHog', 'Sentry', 'Custom event schema'],
      },
      battleImpact: [
        { metric: 'Planning cycle', before: '5 days', after: '2 days' },
        { metric: 'Team alignment score', before: '63%', after: '91%' },
      ],
    },
    {
      codename: 'Project Gardevoir',
      category: 'AI Support Copilot',
      status: 'Scaling',
      objective: 'Guide users through issue triage with context-aware actions.',
      capabilities: [
        'Intent classification',
        'Response drafting',
        'Escalation prediction',
      ],
      architecture: {
        frontend: ['React', 'TypeScript', 'Monaco Editor'],
        backend: ['FastAPI', 'Redis', 'Background workers'],
        infra: ['Kubernetes', 'Terraform', 'Argo CD'],
        analytics: ['OpenTelemetry', 'BigQuery', 'Alerting dashboards'],
      },
      battleImpact: [
        { metric: 'First response time', before: '34 min', after: '8 min' },
        { metric: 'Resolution quality', before: '3.7/5', after: '4.6/5' },
      ],
    },
    {
      codename: 'Project Lapras',
      category: 'Data Voyage Platform',
      status: 'In Research',
      objective: 'Centralize event intelligence for product and growth squads.',
      capabilities: [
        'Self-serve semantic events',
        'Data quality checks',
        'Insight notebooks',
      ],
      architecture: {
        frontend: ['React', 'D3', 'Vite'],
        backend: ['dbt', 'DuckDB', 'Serverless endpoints'],
        infra: ['GitHub Actions', 'Cloud Storage', 'IaC modules'],
        analytics: ['Metabase', 'Looker Studio', 'Anomaly jobs'],
      },
      battleImpact: [
        {
          metric: 'Experiment setup',
          before: '2 weeks',
          after: '3 days (target)',
        },
      ],
    },
  ],
  labExperiments: [
    {
      name: 'PokéMove Recommender',
      hypothesis: 'Contextual move suggestions reduce decision fatigue for users.',
      tools: ['Python', 'Feature Stores', 'A/B Testing'],
      notes: [
        'Cold-start segment needs better defaults.',
        'Recommendation confidence should be user-visible.',
      ],
    },
    {
      name: 'Evolution Prompt Engine',
      hypothesis: 'Prompt templates increase support consistency.',
      tools: ['LLM orchestration', 'Prompt versioning', 'Guardrails'],
      notes: [
        'Best results with role-specific prompts.',
        'Human-in-the-loop remains required on high-risk flows.',
      ],
    },
  ],
  typeMastery: [
    { type: 'Electric', score: 96, focus: 'Realtime UX and interactions' },
    { type: 'Steel', score: 92, focus: 'Reliable architecture and CI/CD' },
    { type: 'Psychic', score: 90, focus: 'Product intuition and UX systems' },
    { type: 'Dragon', score: 87, focus: 'Complex cross-team initiatives' },
    { type: 'Water', score: 84, focus: 'Adaptive responsive interfaces' },
  ],
  contact: [
    {
      label: 'GitHub',
      value: 'github.com/ashenbyte',
      href: 'https://github.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashenbyte',
      href: 'https://www.linkedin.com',
    },
    {
      label: 'Email',
      value: 'trainer@palletlabs.dev',
      href: 'mailto:trainer@palletlabs.dev',
    },
  ],
}