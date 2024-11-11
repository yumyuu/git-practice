# Troubleshooting Lab - Web Server

```curl localhost```
問題: 會導向至其他的網頁，而不是原本的index.html。 逐步排除原因

* **1.** 
  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/1.png)
  ```sudo nginx -t```
  發現 nginx.conf 內的第八行多了 ; 

  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/2.png)

* **2.** 
  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/3.png)
  發現 port80 被占用

  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/4.png)
  ```sudo lsof -i :80```

  可以看到，端口 80 正在被一個叫 srv 的 process 占用，導致 Nginx 無法正常監聽 80port，停止 srv

  ```sudo systemctl stop srv```

* **3.**
  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/5.png)
  port 80好像被防火牆阻擋，更改防火牆的權限

  * 檢查 fw 的權限
  ```ls -ld /etc/iptables```

  ```sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT```

  ```sudo iptables -D INPUT -p tcp --dport 80 -j REJECT```

  * 保存規則
  ```sudo iptables-save > /etc/iptables/rules.v4```

  得出 403 Forbidden 客戶端沒有存取資源的權限

  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/8.png)

* **4.** 
  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/6.png)
  檢查 index.html 的權限 發現沒有 r

* **5.**
  ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw9-troubleshooting/7.png)
  最後成功導向 index.html