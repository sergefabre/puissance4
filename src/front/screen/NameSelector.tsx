import { FormEvent, useState } from 'react'

type NameSelectorPrpos = {
  onSelect: (name: string) => void
  disabled: boolean
}

export function NameSelector({ onSelect, disabled }: NameSelectorPrpos) {
  const [error, setError] = useState('')
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const name = new FormData(e.currentTarget as HTMLFormElement).get('name')
    if (!name || name.toString().trim().length === 0) {
      setError('Vous devez choisir un pseudo ...')
      return
    }
    onSelect(name.toString())
  }
  return (
    <>
      <h1>Selectionnez un pseudo</h1>
      {error && (
        <div className="alert">
          {error}
          <button onClick={() => setError('')} className="alert__close">
            &times;
          </button>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Votre Pseudo</label>
        <input disabled={disabled} type="text" id="name" name="name" required />

        <button disabled={disabled}>Choisir</button>
      </form>
    </>
  )
}
