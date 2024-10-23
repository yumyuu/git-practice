* **1. 你的網址**

  [https://yumyuu.site](https://yumyuu.site)
  
* **2. 你在哪裡購買網域的**

  GoDaddy

* **3. DNS 的 A record 是什麼？**

  A record 指的是我們看到的網址，例如 www.google****.com.tw，直接針對這完整的網域指定一個 IP，好處是子網域不用架設任何的 DNS Server

* **4. DNS 的 NS record 是什麼？**

  NS record 是父網域(例如 idv.tw)指定一個 IP 完整授權給子網域，讓子網域可自行架設 DNS Server，優點是擴充性佳，如果申請了一個 host.idv.tw 的網域，則可自行架設 DNS Server 讓 host.idv.tw 新增多個子網域自行管理，例如 a.host.idv.tw、b.host.idv.tw 之類的子網域

* **5. Domain Name vs FQDN vs URL 這三者分別為何？**
    
  * **Domain Name**

    域名，是網站的名稱，例如 example.com。

  * **FQDN（Fully Qualified Domain Name )**
    
    FQDN（Fully Qualified Domain Name）：完全合格域名，是包含完整路徑的域名， 例如 www.example****.com

  * **URL**

    URL 是完整的網站地址，包括協議（如 https://）、域名、路徑等。

* **6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？**

  HTTP 是未加密的，容易被攻擊， SSL 憑證可以加密資料傳輸，保護用戶隱私，確保資料不被竄改或攔截。


參考資料:

[https://medium.com/@bambechen/%E4%BB%80%E9%BA%BC%E6%98%AF-a-%E7%B4%80%E9%8C%84-%E4%BB%80%E9%BA%BC%E6%98%AF-ns-%E7%B4%80%E9%8C%84-about-domain-name-server-a81006f0f725](https://medium.com/@bambechen/%E4%BB%80%E9%BA%BC%E6%98%AF-a-%E7%B4%80%E9%8C%84-%E4%BB%80%E9%BA%BC%E6%98%AF-ns-%E7%B4%80%E9%8C%84-about-domain-name-server-a81006f0f725)
