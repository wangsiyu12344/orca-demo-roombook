import { useState } from 'react'
import { rooms } from '../data.js'

export default function NewReservation({ onSubmit, currentUser }) {
  const [form, setForm] = useState({
    roomId: rooms[0].id,
    date: new Date().toISOString().slice(0, 10),
    start: '10:00',
    end: '11:00',
    title: '',
  })
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function submit() {
    if (!form.title.trim()) {
      setError('件名を入力してください。')
      return
    }
    setError('')
    onSubmit({ ...form, owner: currentUser })
  }

  return (
    <section className="narrow">
      <div className="page-head">
        <h1>新規予約</h1>
        <p className="page-sub">予約者: {currentUser}</p>
      </div>

      <div className="form">
        <label className="field">
          <span>会議室</span>
          <select value={form.roomId} onChange={(e) => update('roomId', e.target.value)}>
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}（{r.floor}F）
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>日付</span>
          <input type="date" value={form.date} onChange={(e) => update('date', e.target.value)} />
        </label>

        <div className="field-row">
          <label className="field">
            <span>開始</span>
            <input type="time" value={form.start} onChange={(e) => update('start', e.target.value)} />
          </label>
          <label className="field">
            <span>終了</span>
            <input type="time" value={form.end} onChange={(e) => update('end', e.target.value)} />
          </label>
        </div>

        <label className="field">
          <span>件名</span>
          <input
            type="text"
            value={form.title}
            placeholder="例: 週次定例"
            onChange={(e) => update('title', e.target.value)}
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button className="btn-primary" onClick={submit}>
          予約する
        </button>
      </div>
    </section>
  )
}
