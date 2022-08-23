import { PlayerColor } from '../types'
import { ColorSelector } from './component/ColorSelector'
import { NameSelector } from './component/NameSelector'
import { Grid } from './component/Grid'
import { GameInfo } from './component/GameInfo'
import { Victory } from './component/Victory'

function App() {
  return (
    <div className="App">
      <div className="container">
        <NameSelector onSelect={() => null} />
        <hr />
        <ColorSelector
          onSelect={() => null}
          players={[
            {
              id: '1',
              name: 'Serge',
              color: PlayerColor.RED,
            },
            {
              id: '2',
              name: 'Aline',
              color: PlayerColor.YELLOW,
            },
          ]}
          colors={[PlayerColor.RED, PlayerColor.YELLOW]}
        />
        <hr />

        <GameInfo color={PlayerColor.RED} name="Serge" />
        <Victory color={PlayerColor.RED} name="Serge" />
        <Grid
          color={PlayerColor.RED}
          onDrop={() => null}
          grid={[
            ['E', 'E', 'E', 'E', 'E', 'E', 'R'],
            ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
            ['E', 'E', 'E', 'E', 'E', 'R', 'R'],
            ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
            ['E', 'E', 'E', 'E', 'E', 'Y', 'R'],
            ['E', 'E', 'E', 'E', 'E', 'Y', 'Y'],
          ]}
        />
        <hr />
      </div>
    </div>
  )
}

export default App
