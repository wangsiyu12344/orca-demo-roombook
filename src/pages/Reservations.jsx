import { rooms } from '../data.js'

function roomName(id) {
  return rooms.find((r) => r.id === id)?.name ?? '不明'
}

export default function Reservations({ reservations, onRemove, currentUser }) {
  const sorted = [...reservations].sort((a, b) =>
    a.date === b.date ? a.start.localeCompare(b.start) : a.date.localeCompare(b.date),
  )

  return (
    <section>
      <div className="page-head">
        <h1>予約一覧</h1>
        <p className="page-sub">{sorted.length} 件の予約</p>
      </div>

      {sorted.length === 0 ? (
        <p className="empty">予約はまだありません。「新規予約」から追加できます。</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>日付</th>
              <th>時間</th>
              <th>会議室</th>
              <th>件名</th>
              <th>予約者</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={r.id}>
                <td>{r.date}</td>
                <td>
                  {r.start}–{r.end}
                </td>
                <td>{roomName(r.roomId)}</td>
                <td>{r.title}</td>
                <td>{r.owner}</td>
                <td className="cell-action">
                  {r.owner === currentUser && (
                    <button className="btn-text" onClick={() => onRemove(r.id)}>
                      取り消す
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
