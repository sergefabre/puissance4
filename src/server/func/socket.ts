import { InterpreterFrom } from 'xstate'
import { GameMachine } from '../../machine/GameMachine'
import { ConnectionRepository } from '../repositories/ConnectionRepository'
import { SocketStream } from '@fastify/websocket'

export function publishMachineToPlayers(
  machine: InterpreterFrom<typeof GameMachine>['state'],
  connections: ConnectionRepository,
  gameId: string
) {
  for (const player of machine.context.players) {
    const connection = connections.find(player.id, gameId)
    if (connection) {
      publishMachine(machine, connection)
    }
  }
}

export function publishMachine(machine: InterpreterFrom<typeof GameMachine>['state'], connection: SocketStream) {
  connection.socket.send(
    JSON.stringify({
      type: 'gameUpdate',
      state: machine.value,
      context: machine.context,
    })
  )
}
