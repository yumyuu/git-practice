* 1. **在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中**

        [13.208.45.97](http://13.208.45.97)
        
* 2. **什麼是 instance type?**

        可以從下圖得知， Instance type 是 AWS EC2 中用來定義實例配置例如: CPU、記憶體、存儲、網路資源和不同的定價
        ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw4-ec2/1.png)

* 3. **什麼是 Nginx？有哪些用途與特性？**

        Nginx 是一個非同步框架的網頁伺服器。
        
        用途: 作為 Web 伺服器或反向代理，負責處理靜態內容（如 HTML, CSS, 圖片），或者代理將請求轉發到後端應用（如 Node.js）

        * **反向代理 ( Reverse Proxy )**

            第五題和 Forward Proxy 一起深入說明

        * **負載均衡 ( Load Balance )**

            為了因應大流量，一台 Application Server 是無法應付的，因此會需要同時開多個 Application Server 。
            而 Nginx 能夠自動的將 Client 的 Request 分送到不同 Application Server 上

        * **HTTP 快取**

            為了能夠提高效能，Nginx 會利用 http 快取的機制做優化。流程如下：

            Client 發出 Request ，Nginx 會將 Request 的資訊做 hash，並判斷此 hash key 是否存在於記憶體中：1 -> 2

            若 hash key 不存在於記憶體中：Nginx 會向 Application Server 索取檔案位置，再去索取檔案。 3 -> 4 -> 5

            若存在於記憶體中：Nginx 會直接索取檔案。 3 -> 5

            將檔案回傳給 Client( 網路查到的資料，解釋的很棒且非常清楚 )

            ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw4-ec2/2.png)
            圖片參考連結: [https://explainthis.s3-ap-northeast-1.amazonaws.com/9d832c7970954e99ab1bcc0335f0d629.png](https://explainthis.s3-ap-northeast-1.amazonaws.com/9d832c7970954e99ab1bcc0335f0d629.png)

* 4. **pm2 套件是什麼？有什麼用處？**

    PM2 是一個 Node.js 的進程管理器，專門用來管理和持續運行應用程式。

    用途:

    * 允許應用程式在背景持續運行

    * 自動重啟崩潰的應用

    * 支持負載均衡和記憶體監控

    * 啟動 Node.js cluster 並最大化使用我們的 CPU

    * Process 的日誌管理


* 5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?

    Proxy 是代理伺服器的概念，負責在客戶端和服務器之間轉發請求 (Nginx 可以作為 Reverse Proxy)。

    先比較看看 **Reverse proxy** 和 **Forward Proxy** 

    *  **Reverse proxy:** 客戶端不知道實際的後端伺服器，Nginx 負責轉發請求到後端，並將回應發送回客戶端 
    ( 可以隱藏後端服務器、負載均衡、預防 DDoS 攻擊等等 )

    * **Forward Proxy:** 客戶端通過代理伺服器來訪問外部網路，代理伺服器會將請求轉發到目標伺服器。
    ( 通常用於訪問控制或隱藏客戶端的 IP )

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw4-ec2/5.png)
    圖片參考連結: [https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F257642d6-9742-432b-9ca8-2a866dea04dd_1445x1536.jpeg]

    回到問題， 所以為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?

    因為可以提高安全性和性能( Nginx 負責處理靜態內容和負載均衡等，Express 專注於應用邏輯，並且可以限制對 Express 的直接訪問 )

* 6. 在 readme 中提供步驟 9 的 Nginx 設定檔

''' server {
    listen 80;
    server_name 13.208.45.97; # Server IP

    location / {
        proxy_pass http://localhost:3000; #將請求轉發到本地運行的 Express Server

    }
}'''

* 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

    * 可以限定某個特定的、某範圍的 IP、Port 的進出，是 AWS 中的一種虛擬防火牆。

    * 設定原則：
    
    安全組的設置應根據應用需求限制允許的 IP 和 Port， 其他不必要的端口就可以關閉以提高安全性

    例如: 任何地方-IPv4 — 在 0.0.0.0/0 塊 IPv4CIDR ( 允許來自所有IPv4位址的流量 )<br>
    任何地方 IPv6- 的:: /0 塊 IPv6CIDR ( 允許來自所有IPv6位址的流量 )

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw4-ec2/4.png)

    
* 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

    * sudo 是一個 Unix/Linux 系統中的命令 ( 其實就是「Super User DO」)，允許用戶以超級使用者權限執行命令，
      當需要進行系統級別的修改（例如安裝軟體、修改設定檔）時，通常需要使用 sudo 來授予必要的權限。

    * 為什麼需要使用 sudo ? 因為當操作系統的敏感資源或進行管理級操作 ( 如修改配置文件或安裝套件，就需要 sudo 提升權限，而讀取普通文件或運行應用程式就不需要使用 sudo )

* 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

    * Nginx 的 Log 檔案在 /var/log/nginx 分別有 access.log  error.log

    * 網路上找資料找到的 ( 之後才補 /var 存放那些在運行期間會變動的資料，所以 log 通常會放這)

    * ''' sudo tail -f /var/log/nginx/error.log ''' 也可以用 cat (顯示全部)、 head (看前幾個 log 和 tail 相反，但新的log在尾端，所以好像不怎麼實用?)

* 10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
        
        * 創立完instance後，雖然 instance state 上寫 running 但還是無法 connect( 但等個10分鐘後又可以了，要再等一下 )

        * 安裝 pm2 時權限不夠 無法 mkdir ( ```npm install pm2 -g``` 指令加上 sudo )

        ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw4-ec2/6.png)

        * security group 沒設定到3000 Port


11. 列出完成本作業時參考的資料

    [https://www.nextlink.cloud/php-on-aws-10/](https://www.nextlink.cloud/php-on-aws-10/)
    [https://www.inodeninja.net/what-is-reverse-proxy/](https://www.inodeninja.net/what-is-reverse-proxy/)
    [https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/working-with-security-group-rules.html](https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/working-with-security-group-rules.html)
    [https://www.explainthis.io/zh-hant/swe/why-nginx](https://www.explainthis.io/zh-hant/swe/why-nginx)
    [https://larrylu.blog/nodejs-pm2-cluster-455ffbd7671](https://larrylu.blog/nodejs-pm2-cluster-455ffbd7671)
    [https://ithelp.ithome.com.tw/m/articles/10214173](https://ithelp.ithome.com.tw/m/articles/10214173)
    [https://yhtechnote.com/linux-sudo/](https://yhtechnote.com/linux-sudo/)
    [https://hackmd.io/@CSL/H1Z_ikZOj](https://hackmd.io/@CSL/H1Z_ikZOj#3-%E8%A8%AD%E5%AE%9A-Nginx%EF%BC%9A)
    [https://medium.com/starbugs/web-server-nginx-2-bc41c6268646](https://medium.com/starbugs/web-server-nginx-2-bc41c6268646)
