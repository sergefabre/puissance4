import { Player, PlayerColor } from '../../types'

type colorSelectorProps = {
  onSelect: (color: PlayerColor) => void
  players: Player[]
  colors: PlayerColor[]
}

function discColor(color: PlayerColor) {
  return `disc disc-${color === PlayerColor.YELLOW ? 'yellow' : 'red'}`
}

export function ColorSelector({ onSelect, players, colors }: colorSelectorProps) {
  return (
    <>
      <div className="players">
        {players.map((player) => (
          <div key={player.id} className="player">
            {player.name}
            {player.color && <div className={discColor(player.color)} />}
          </div>
        ))}
      </div>
      <h3>Sélectionnez une couleur</h3>
      <div className="selector">
        {colors.map((color) => (
          <button className={discColor(color)} key={color} onClick={() => onSelect(color)}></button>
        ))}
      </div>
    </>
  )
}
