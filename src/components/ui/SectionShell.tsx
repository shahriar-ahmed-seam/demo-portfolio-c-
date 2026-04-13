import type { ReactNode } from 'react'

interface SectionShellProps {
  id: string
  title: string
  subtitle: string
  children: ReactNode
}

function SectionShell({ id, title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className="section-shell">
      <header className="section-header">
        <p className="section-kicker">{subtitle}</p>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  )
}

export default SectionShell