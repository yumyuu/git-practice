* 1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中

        [13.208.45.97](http://13.208.45.97)
        
* 2. 什麼是 instance type?

        可以從下圖得知， Instance type 是 AWS EC2 中用來定義實例配置例如: CPU、記憶體、存儲、網路資源和不同的定價
        ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw4-ec2/1.png)

* 3. 什麼是 Nginx？有哪些用途與特性？

        Nginx 是一個非同步框架的網頁伺服器。
        
        用途: 作為 Web 伺服器或反向代理，負責處理靜態內容（如 HTML, CSS, 圖片），或者代理將請求轉發到後端應用（如 Node.js）

        * 反向代理 ( Reverse Proxy )

            第五題再和 Forward Proxy 做深入說明

        * 負載均衡 ( Load Balance )

            為了因應大流量，一台 Application Server 是無法應付的，因此會需要同時開多個 Application Server 。
            而 Nginx 能夠自動的將 Client 的 Request 分送到不同 Application Server 上

        * HTTP 快取

            為了能夠提高效能，Nginx 會利用 http 快取的機制做優化。流程如下：

            Client 發出 Request ，Nginx 會將 Request 的資訊做 hash，並判斷此 hash key 是否存在於記憶體中：1 -> 2
            若 hash key 不存在於記憶體中：Nginx 會向 Application Server 索取檔案位置，再去索取檔案。 3 -> 4 -> 5
            若存在於記憶體中：Nginx 會直接索取檔案。 3 -> 5
            將檔案回傳給 Client

            ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw4-ec2/2.png)
            圖片參考連結: [https://explainthis.s3-ap-northeast-1.amazonaws.com/9d832c7970954e99ab1bcc0335f0d629.png](https://explainthis.s3-ap-northeast-1.amazonaws.com/9d832c7970954e99ab1bcc0335f0d629.png)

* 4. pm2 套件是什麼？有什麼用處？

    PM2 是一個 Node.js 的進程管理器，專門用來管理和持續運行應用程式。


* 5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?

    Proxy 是代理伺服器的概念，負責在客戶端和服務器之間轉發請求 (Nginx 可以作為 Reverse Proxy)。

    

* 6. 在 readme 中提供步驟 9 的 Nginx 設定檔



* 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

    * 可以限定某個特定的、某範圍的 IP、Port 的進出，是 AWS 中的一種虛擬防火牆。

    

* 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

    * sudo 是一個 Unix/Linux 系統中的命令 ( 其實就是「Super User DO」)，允許用戶以超級使用者權限執行命令，
      當需要進行系統級別的修改（例如安裝軟體、修改設定檔）時，通常需要使用 sudo 來授予必要的權限。

    * 為什麼需要使用 sudo ? 因為當操作系統的敏感資源或進行管理級操作 ( 如修改配置文件或安裝套件，就需要 sudo 提升權限，而讀取普通文件或運行應用程式就不需要使用 sudo )

* 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？



* 10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
        
        * 創立完instance後，雖然 instance state 上寫 running 但還是無法 connect( 但等個10分鐘後又可以了，要再等一下 )


11. 列出完成本作業時參考的資料

    [https://www.nextlink.cloud/php-on-aws-10/](https://www.nextlink.cloud/php-on-aws-10/)
    [https://www.inodeninja.net/what-is-reverse-proxy/](https://www.inodeninja.net/what-is-reverse-proxy/)
    [https://www.explainthis.io/zh-hant/swe/why-nginx](https://www.explainthis.io/zh-hant/swe/why-nginx)
    [https://yhtechnote.com/linux-sudo/](https://yhtechnote.com/linux-sudo/)
