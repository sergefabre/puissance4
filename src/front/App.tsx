import { GameStates } from '../types'
import { useGame } from './hooks/useGame'
import { LobbyScreen } from './screens/LobbyScreen'

function App() {
  const { state } = useGame()
  return <div className="container">{state === GameStates.LOBBY && <LobbyScreen />}</div>
}

export default App
