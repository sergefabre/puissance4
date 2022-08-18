import { beforeEach, describe, expect, it } from 'vitest'
import { GameModel, makeGame } from '../../src/machine/GameMachine'
import { canDropGuard } from '../../src/machine/guards'
import { GameContext, PlayerColor, GameStates } from '../../src/types'

describe('machine/GameMachine', () => {
  // describe("join", () => {...})
  describe('dropToken', () => {
    const machine = makeGame(GameStates.PLAY, {
      players: [
        {
          id: '1',
          name: '1',
          color: PlayerColor.RED,
        },
        {
          id: '2',
          name: '2',
          color: PlayerColor.YELLOW,
        },
      ],
      currentPlayer: '1',
      grid: [
        ['E', 'E', 'E', 'E', 'E', 'E', 'R'],
        ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
        ['E', 'E', 'E', 'E', 'E', 'R', 'R'],
        ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
        ['E', 'E', 'E', 'E', 'E', 'Y', 'R'],
        ['E', 'E', 'E', 'E', 'E', 'Y', 'Y'],
      ],
    })

    it('sould let me drop a token', () => {
      expect(machine.send(GameModel.events.dropToken('1', 0)).changed).toBe(true)
      expect(machine.state.context.grid[5][0]).toBe(PlayerColor.RED)
      expect(machine.state.value).toBe(GameStates.PLAY)
      expect(machine.state.context.currentPlayer).toBe('2')
    })
    it('sould not let me drop the token n filled column', () => {
      expect(machine.send(GameModel.events.dropToken('1', 6)).changed).toBe(false)
    })
    it('sould make me win', () => {
      expect(machine.send(GameModel.events.dropToken('1', 5)).changed).toBe(true)
      expect(machine.state.value).toBe(GameStates.VICTORY)
    })
  })
})
