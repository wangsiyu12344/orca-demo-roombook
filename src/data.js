// 初期データ。バックエンドは無く、ブラウザ内のstateだけで動作する。

export const rooms = [
  { id: 'r1', name: '富士', floor: 3, capacity: 12, equipment: ['プロジェクター', 'ホワイトボード'] },
  { id: 'r2', name: '浅間', floor: 3, capacity: 6, equipment: ['モニター'] },
  { id: 'r3', name: '高尾', floor: 5, capacity: 4, equipment: [] },
  { id: 'r4', name: '筑波', floor: 5, capacity: 20, equipment: ['プロジェクター', 'マイク', 'ホワイトボード'] },
]

export const members = ['佐藤', '鈴木', '高橋', '田中', '王']

function today(offsetDays = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return d.toISOString().slice(0, 10)
}

export const initialReservations = [
  { id: 1, roomId: 'r1', date: today(0), start: '10:00', end: '11:00', title: '週次定例', owner: '佐藤' },
  { id: 2, roomId: 'r2', date: today(0), start: '13:00', end: '14:30', title: '設計レビュー', owner: '王' },
  { id: 3, roomId: 'r4', date: today(1), start: '09:30', end: '12:00', title: '全体会', owner: '高橋' },
  { id: 4, roomId: 'r3', date: today(1), start: '15:00', end: '15:30', title: '1on1', owner: '田中' },
  { id: 5, roomId: 'r1', date: today(2), start: '14:00', end: '16:00', title: '顧客打合せ', owner: '鈴木' },
]
