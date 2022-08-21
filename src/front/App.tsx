import { PlayerColor } from '../types'
import { ColorSelector } from './screen/ColorSelector'
import { NameSelector } from './screen/NameSelector'
import { Grid } from './screen/Grid'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Grid
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
        <NameSelector disabled onSelect={() => null} />
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
      </div>
    </div>
  )
}

export default App
