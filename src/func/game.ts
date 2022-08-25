import { GameContext, GridState, Player, PlayerColor } from '../types'
export function freePositionY(grid: GridState, x: number): number {
  for (let y = grid.length - 1; y >= 0; y--) {
    if (grid[y][x] === 'E') return y
  }
  return -1
}

export function winingPositions(grid: GridState, color: PlayerColor, x: number, size: number) {
  const directions = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1],
  ]
  const position = {
    y: freePositionY(grid, x),
    x: x,
  }
  for (let direction of directions) {
    let items = [position]
    for (let foward of [1, -1]) {
      for (let i = 1; i < size; i++) {
        const x = position.x + i * direction[0] * foward
        const y = position.y + i * direction[1] * foward
        if (grid?.[y]?.[x] !== color) break
        items.push({ x, y })
      }
    }
    if (items.length >= size) return items
  }
  return []
}

export function currentPlayer(context: GameContext): Player {
  const player = context.players.find((p) => p.id === context.currentPlayer)
  if (!player) throw new Error('Impossible de trouver le joueur courant')
  return player
}

export function countEmptyCells(grid: GridState): number {
  let count = 0
  for (let row of grid) {
    for (let cell of row) {
      if (cell === 'E') count++
    }
  }
  return count
}
