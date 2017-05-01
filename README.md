# Access-Control-System-Web
- Using web service to control , instead of using NFC/RFID to open the gate.
- 作為學生會會辦門禁控制系統的實作，與原先實作的 RFID/NFC 刷卡不同的方式，改採用從網頁上輸入 ID 來開啟
- 目前實作的硬體環境在 orange pi PC.

## 使用說明
- 系統使用者直接 download/clone 這份原始碼
- 主要的認證 key 位於 database directory 底下 (規格可見 key.json) 
- 不額外使用 sql database，直接使用 json 來做
- 目前還沒有加上 forever 的操作
```
# 安裝全域環境的 forever 套件 (需要一段時間)
npm install -g forever
# 並把 `package.json` 裏頭 all 的 script 內容改成下列內容
"all": "npm run build && /usr/local/bin/forever start --minUptime 1000 --spinSleepTime 1000 server.js"
```

## Key.json 規格
- name : User ID
- email : 備用，目前沒有實作 mail server

## TODO
- 把硬體模組包裝
- 實作 admin 模組

## Author
- Kevin Cyu(瞿旭民) : kevinbird61@gmail.com
