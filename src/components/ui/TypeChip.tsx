import type { PokemonType } from '../../data/portfolioData'

interface TypeChipProps {
  type: PokemonType
}

function TypeChip({ type }: TypeChipProps) {
  return <span className="type-chip">{type}</span>
}

export default TypeChip