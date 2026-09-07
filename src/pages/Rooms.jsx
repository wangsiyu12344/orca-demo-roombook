import { rooms } from '../data.js'

export default function Rooms({ reservations }) {
  const today = new Date().toISOString().slice(0, 10)

  return (
    <section>
      <div className="page-head">
        <h1>会議室</h1>
        <p className="page-sub">{rooms.length} 室</p>
      </div>

      <ul className="room-list">
        {rooms.map((room) => {
          const todayCount = reservations.filter((r) => r.roomId === room.id && r.date === today).length
          return (
            <li key={room.id} className="room">
              <div className="room-head">
                <h2>{room.name}</h2>
                <span className="room-floor">{room.floor}F</span>
              </div>
              <p className="room-meta">
                {room.equipment.length > 0 ? room.equipment.join('、') : '備品なし'}
              </p>
              <p className="room-today">本日の予約 {todayCount} 件</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
