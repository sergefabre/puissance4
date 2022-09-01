import { connect } from 'http2'
import { v4 } from 'uuid'
import { prevent } from '../../func/dom'
import { PlayerSession, QueryParam } from '../../types'
import { NameSelector } from '../component/NameSelector'
import { saveSession } from '../func/session'
import { updateQueryParams, urlSearchParam } from '../func/url'
import { useGame } from '../hooks/useGame'

type LoginScreenProps = {}

export function LoginScreen({}: LoginScreenProps) {
  const { connect } = useGame()
  const handleLogin = async (name: string) => {
    const response: PlayerSession = await fetch('/api/players', { method: 'POST' }).then((r) => r.json())
    const playeur = saveSession({
      ...response,
      name,
    })
    const gameId = urlSearchParam().get(QueryParam.GAMEID) ?? v4()
    connect(playeur, gameId)
    updateQueryParams({ [QueryParam.GAMEID]: gameId })
  }

  return (
    <div>
      <NameSelector onSelect={handleLogin} />
    </div>
  )
}
