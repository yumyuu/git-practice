- package.json 中的 dependencies 與 devDependencies 分別是什麼

    * **dependencies:**<br>
    > ```官方說法:  Packages required by your application in production. ```<br>
    
    指令實作: ``` npm i --save lodash ``` ( 用 lodash當作例子 )<br>
    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw3-express/3.png)

    使用在**已經發布**的環境下，是指發布後仍然需要依賴使用的 plug-in<br>
    * **devDependencies:**<br>
    > ```官方說法:  Packages that are only needed for local development and testing. ```<br>
    
    指令實作: ``` npm i --save--dev lodash ```
    
    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw3-express/4.png)

    使用在**開發中**的環境下，只單純會在開發時應用到的 plug-in
    
    <br>

- package.json 中的 scripts 這個區塊怎麼用? <br><br>
    scripts 區塊是用來定義在 npm 命令行中執行的腳本，可以在 package.json 中定義自動化任務，
    比如啟動應用、編譯代碼、運行測試等等。<br>
例如:
``` 
{
  "scripts": {
    "start": "node index.js",
    "test": "mocha",
    "build": "webpack"
    }
} 
```

``` 
    npm run start   # 執行 "start" 腳本
    npm run test    # 執行 "test" 腳本
    npm run build   # 執行 "build" 腳本
```

- Port number 要怎麼以環境變數來設定？
 app.js 宣告中加入 
```port = process.env.PORT || 3000;``` 
 且在 package.json 加入 
```"scripts": { "start": "node app.js" }```
        
 即可用命令列修改   ```set PORT=4000 && npm start``` (已在 app.js實作)<br>
 
 實作結果:

 ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw3-express/5.png)

- 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

    * 選擇不上傳的檔案: 
        * node_modules 資料夾 ( 因為可以根據 package.json 重新生成，上傳會浪費空間 )
        * 敏感資料 ( 包括密碼、API資料等等，不想帳號被盜的話就要多多注意 )
        * 編譯產物 ( 例如經過編譯的 JS/CSS 檔案，因為也是可以再生的 ) <br><br>
        
    * 選擇上傳的檔案:
        * 源碼和必要的配置文件
        
    決策的要素: 不上傳會增大 repo體積且能被其他環境重建的文件和敏感資料。
    
        
- 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

    * **require** 是 Node.js 中的 CommonJS (CJS) 模組系統，主要用於同步加載模組<br>
    (舊版 Node.js 及傳統 JavaScript 開發中常用)
    
    * **import/export** ES6 的模組語法 (ESM)，更現代化，支持靜態分析和 Tree Shaking<br>
    (現代瀏覽器及 Node.js >=12 支持)


進階題:
- [localhost](http://localhost) 是什麼？<br>
    是一個指向本機電腦的特殊域名，通常對應 IP 地址 127.0.0.1，
    開發者使用 localhost 來測試應用程式在本機環境中的運行，而不需要實際連接到外部網絡<br>

- curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？

    curl 是一個命令行工具，用來向網路上的伺服器發送 HTTP 請求並接收回應。
    它支持各種協議，如 HTTP、HTTPS、FTP 等。
 ```   
    # 發送 GET 請求
    curl http://example.com
    
    # 發送 POST 請求
    curl -X POST -d "name=test" http://example.com
    
    # 測試網路連接並顯示 HTTP 頭部信息
    curl -I http://example.com
```
