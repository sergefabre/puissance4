import { PlayerColor } from '../types'

export function discColorClass(color: PlayerColor) {
  return color === 'E' ? 'disc' : `disc disc-${color === PlayerColor.YELLOW ? 'yellow' : 'red'}`
}
