# RoomBook — 会議室予約（Orca デモ用）

社内の会議室予約を管理する小さな Web アプリです。バックエンドはなく、ブラウザ内の state だけで動作します。
Orca（https://github.com/stablyai/orca）の使用場面を説明するためのデモ用リポジトリです。

## 起動

```bash
npm install
npm run dev
```

http://localhost:5173 で開きます。

## 画面

| 画面 | 内容 |
| --- | --- |
| 予約一覧 | 登録済み予約を日付順に表示。自分の予約は取り消せる |
| 新規予約 | 会議室・日付・時間・件名を入力して予約する |
| 会議室 | 会議室の一覧と本日の予約件数 |
| 設定 | 利用者の切り替え |

## 構成

```
src/
  App.jsx            画面切り替えと予約データの保持
  data.js            会議室・メンバー・初期予約データ
  pages/
    Reservations.jsx 予約一覧
    NewReservation.jsx 新規予約フォーム
    Rooms.jsx        会議室一覧
    Settings.jsx     設定
  index.css          全スタイル
```

ライブラリは React と Vite のみ。ルーターや状態管理ライブラリは使っていません。

## デモ用のチケット

`docs/tickets.md` に、各デモ場面で使う Jira チケットの文面をまとめています。
