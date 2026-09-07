import { useState } from 'react'
import { initialReservations } from './data.js'
import Reservations from './pages/Reservations.jsx'
import NewReservation from './pages/NewReservation.jsx'
import Rooms from './pages/Rooms.jsx'
import Settings from './pages/Settings.jsx'

const pages = [
  { key: 'list', label: '予約一覧' },
  { key: 'new', label: '新規予約' },
  { key: 'rooms', label: '会議室' },
  { key: 'settings', label: '設定' },
]

export default function App() {
  const [page, setPage] = useState('list')
  const [reservations, setReservations] = useState(initialReservations)
  const [currentUser, setCurrentUser] = useState('王')

  function addReservation(r) {
    setReservations((prev) => [...prev, { ...r, id: prev.length + 1 }])
    setPage('list')
  }

  function removeReservation(id) {
    setReservations((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">RoomBook</span>
        </div>
        <nav className="nav" aria-label="主要ナビゲーション">
          {pages.map((p) => (
            <button
              key={p.key}
              className={page === p.key ? 'nav-item is-active' : 'nav-item'}
              onClick={() => setPage(p.key)}
            >
              {p.label}
            </button>
          ))}
        </nav>
        <div className="user">{currentUser}</div>
      </header>

      <main className="content">
        {page === 'list' && (
          <Reservations reservations={reservations} onRemove={removeReservation} currentUser={currentUser} />
        )}
        {page === 'new' && <NewReservation onSubmit={addReservation} currentUser={currentUser} />}
        {page === 'rooms' && <Rooms reservations={reservations} />}
        {page === 'settings' && <Settings currentUser={currentUser} onChangeUser={setCurrentUser} />}
      </main>
    </div>
  )
}
