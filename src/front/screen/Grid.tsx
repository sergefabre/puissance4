import { CSSProperties } from 'react'
import { CellState, GridState } from '../../types'

type GridPros = {
  grid: GridState
}
export function Grid({ grid }: GridPros) {
  return (
    <div className="grid" style={{ '--rows': grid.length, '--cols': grid[0].length } as CSSProperties}>
      {grid.map((row, y) => row.map((c, x) => <Cell x={x} y={y} color={c} key={`${x}-${y}`} />))}
    </div>
  )
}
type CellProps = {
  x: number
  y: number
  color: CellState
}

function Cell({ x, y, color }: CellProps) {
  return (
    <div>
      {x} - {y}
    </div>
  )
}
