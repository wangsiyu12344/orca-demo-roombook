import { members } from '../data.js'

export default function Settings({ currentUser, onChangeUser }) {
  return (
    <section className="narrow">
      <div className="page-head">
        <h1>設定</h1>
        <p className="page-sub">この画面での操作はブラウザ内にだけ反映されます</p>
      </div>

      <div className="form">
        <label className="field">
          <span>利用者</span>
          <select value={currentUser} onChange={(e) => onChangeUser(e.target.value)}>
            {members.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  )
}
