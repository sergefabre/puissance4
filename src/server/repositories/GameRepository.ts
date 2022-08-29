import { interpret, InterpreterFrom } from 'xstate'
import { GameMachine } from '../../machine/GameMachine'
import { publishMachineToPlayers } from '../func/socket'
import { ConnectionRepository } from './ConnectionRepository'

type Machine = InterpreterFrom<typeof GameMachine>

export class GameRepository {
  constructor(private connections: ConnectionRepository, private game = new Map<string, Machine>()) {}

  create(id: string) {
    const game = interpret(GameMachine)
      .onTransition((state) => {
        if (state.changed) {
          publishMachineToPlayers(state, this.connections, id)
        }
      })
      .start()
    this.game.set(id, game)
    return game
  }

  find(id: string): Machine | undefined {
    return this.game.get(id)
  }

  clean(id: string) {
    const game = this.game.get(id)
    if (game && game.state.context.players.filter((p) => this.connections.has(p.id, id)).length === 0) {
      this.game.delete(id)
    }
  }
}
