* 安裝的 nodejs 版本
    > 安裝的nodejs版本為v20.17.0，使用的主要原因是因為有LTS，有更高的可靠性。

* nvm 與 npm 分別是什麼
    
    **nvm:**
    
    nvm (Node Version Manager)是 Node.js 版本管理工具，允許開發者在同一台電腦上安裝和切換多個版本的 Node.js

    > 1. 可以安裝不同版本的 Node.js

      2. 版本切換： 可以切換到不同的 Node.js 版本來匹配不同項目的需求，而不會影響到全局環境中的其他項目

      3. 版本管理： 可以方便地列出所有已安裝的 Node.js 版本，並輕鬆安裝、卸載或切換版本
        
    指令實作:

    ```nvm ls #列出可用的 Node.js 版本(原本我只有 v20.17.0的版本)```

    ```nvm install <version> #安裝指定版本的 Node.js(這裡多下載 v22.9.0實驗)```

    ```nvm use <version> #使用指定版本的 Node.js(切換到剛剛下載 v22.9.0版本)```

    ```nvm alias default <version> #設置預設版本```
    
    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw2-js/1.png)

    >結論: nvm 的主要用途是為了解決 Node.js 不同版本的兼容性問題 用來管理和切換

    **npm:**

    npm (Node Package Manager)是 Node.js 套件管理工具，用來管理 JavaScript 的套件（模組、依賴包）

    透過npm init 建立一個npm專案 會產生一個package.json的檔案會根據這個檔案紀錄 專案使用的套件
    > (優點: 當需要將專案上傳時,不需要上傳node_modules這肥大的資料夾,使用者可以透過package.json紀錄的資訊 來 install 套件)

    指令實作:

    ```npm -v #版本查看``` 

    ```npm install <package> #安裝一個依賴套件(ex: 安裝<package>(express當範例) )```

    ```npm install -g <package> #全局安裝一個工具 -g```

    ```npm uninstall <package> #卸載一個套件```

    ```npm list #列出已安裝的套件```

    ```npm init ls #初始化專案的 package.json文件```
        
    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw2-js/2.png) 
    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw2-js/3.png)     

    >結論: npm 用來管理和安裝 JavaScript套件 的工具，使得套件的依賴和管理變得簡單和可追蹤