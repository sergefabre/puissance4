import { CellState, PlayerColor } from '../types'

export function discColorClass(color: CellState) {
  return color === 'E' ? 'disc' : `disc disc-${color === PlayerColor.YELLOW ? 'yellow' : 'red'}`
}
