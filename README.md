# Access-Control-System-Web
- Using web service to control , instead of using NFC/RFID to open the gate.
- 作為學生會會辦門禁控制系統的實作，與原先實作的 RFID/NFC 刷卡不同的方式，改採用從網頁上輸入 ID 來開啟
- 目前實作的硬體環境在 orange pi PC plus[more details in appendix].

## 使用說明
- 系統使用者直接 download/clone 這份原始碼
- 主要的認證 key 位於 database directory 底下 (規格可見 key.json) 
- 不額外使用 sql database，直接使用 json 來做
- 目前還沒有加上 forever 的操作，若要增加 forever :
```
# 安裝全域環境的 forever 套件 (需要一段時間)
npm install -g forever
# 並把 `package.json` 裏頭 all 的 script 內容改成下列內容 (using `whereis` to locate forever)
"all": "npm run build && /path/to/forever start --minUptime 1000 --spinSleepTime 1000 server.js"
```

## Key.json 規格
- name : User ID
- email : 備用，目前沒有實作 mail server

## TODO
- 把硬體模組包裝
- 實作 admin 模組

## 開發紀錄
- [系統概觀](https://paper.dropbox.com/doc/Web-J9CnlCEv6lLmVtoiuzVey)

## Author
- Kevin Cyu(瞿旭民) : kevinbird61@gmail.com

## Maintainer (timeline)
- Kevin Cyu(瞿旭民) : 2016/9 ~ 2017/6 

## Appendix
### System info (Current - orange pi PC plus)
```
# cat /proc/cpuinfo
Processor       : ARMv7 Processor rev 5 (v7l)
processor       : 0
BogoMIPS        : 1920.00

processor       : 1
BogoMIPS        : 1920.00

processor       : 2
BogoMIPS        : 1920.00

processor       : 3
BogoMIPS        : 1920.00

Features        : swp half thumb fastmult vfp edsp thumbee neon vfpv3 tls vfpv4 idiva idivt 
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x0
CPU part        : 0xc07
CPU revision    : 5

Hardware        : sun8i
Revision        : 0000
Serial          : 14005035811c301f040e

# lscpu
Architecture:          armv7l
Byte Order:            Little Endian
CPU(s):                4
On-line CPU(s) list:   0-3
Thread(s) per core:    1
Core(s) per socket:    4
Socket(s):             1

# lshw
orangepi                  
    description: Computer
    width: 32 bits
  *-core
       description: Motherboard
       physical id: 0
     *-memory
          description: System memory
          physical id: 0
          size: 1002MiB
     *-cpu
          physical id: 1
          bus info: cpu@0
          size: 1200MHz
          capacity: 1200MHz
          capabilities: cpufreq
  *-network
       description: Ethernet interface
       physical id: 1
       logical name: eth0
       serial: 0e:c6:06:81:05:82
       size: 100Mbit/s
       capacity: 100Mbit/s
       capabilities: ethernet physical tp mii 10bt 10bt-fd 100bt 100bt-fd autonegotiation
       configuration: autonegotiation=on broadcast=yes driver=sunxi_geth driverversion=SUNXI Gbgit driver V1.1 duplex=full ip=192.168.1.213 link=yes multicast=yes port=MII speed=100Mbit/s
```
