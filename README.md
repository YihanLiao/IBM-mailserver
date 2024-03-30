# Mock Mail Server

供 IBM CT UX Team 的 Prototype 頁面使用

## 前置作業
申請一組免洗 或是 公用的 gmail 帳號
(強烈不建議用私人的信箱)

## 正式作業

使用方法
```bash
$ cp .sample-env .env
```

編輯 .env 環境
將 申請來的免洗 gmail 帳密填到 env 設定檔裡
密碼不是拿來登入google服務的那組
要另外申請
https://israynotarray.com/nodejs/20230722/1626712457/
密碼設置方式請參考這篇

網址失效的話請再自行將各種關鍵字餵狗
"google mail secret" or "google mail pass" 之類的 
再自行過濾爬一下文章
預期會是一組長得像 "eigl iqyr ib8b iieq" 這樣子的字串

或是請教GPT大師
記得將corslist變更你要的開發環境
不然會被瀏覽器攔截
