### 說明 blob, tree, commit, branch, head 分別是什麼
* Blob :

    Blob（Binary Large Object）是 Git 中用於儲存檔案內容的物件。
    每當git add檔案的時候，就會產生一個blob物件，這個物件會紀錄檔案的內容，但不會紀錄檔名或其他元數據且Blob 是唯一的，基於內容的哈希值（SHA-1）來識別。

    ``` $ git cat-file -t <sha-1 value>  #顯示該sha1 value是屬於那一種物件 ```
    ```   $ git cat-file -p <sha-1 value>  #顯示該sha1 value物件的內容 ```
    
* Tree : 

    Tree 是 Git 中用於表示目錄結構的物件，包含了對多個 Blob 和其他 Tree 的引用，每個引用還包含檔名和檔案的模式（例如檔案或目錄）。
    Tree 使 Git 能夠建立整個專案的目錄和子目錄的結構。
    拿自己下面的範例(紀錄在 git repo 操作過程中的範例)測試的結果:
    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/8.png)

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/9.png)

    補充: 100644 代表普通檔案

* Commit : 

    Commit 是 Git 中儲存項目狀態（snapshot）的物件。
    每個 Commit 包含了一個 Tree（表示專案的整個檔案系統快照）且包含本次提交的作者等相關附屬資訊和包含零個或多個指向該提交物件的父物件指標：首次提交是沒有直接祖先的，普通提交有一個祖先，由兩個或多個分支合併產生的提交則有多個祖先。
    一樣拿自己下面的範例(紀錄在 git repo 操作過程中的範例)測試的結果:

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/10.png)

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/11.png)

Blob、Tree、Commit三者結構圖如下:

![image error](https://willh.gitbook.io/~gitbook/image?url=http%3A%2F%2Fgit-scm.com%2Ffigures%2F18333fig0301-tn.png&width=400&dpr=3&quality=100&sign=7b91bda7&sv=1)

[圖片參考連結:https://willh.gitbook.io/gitpro/3b1652ba27b78115eac23a4bb00ea4fa/454151609d0dce25849055ce6b02c0bc](https://willh.gitbook.io/gitpro/3b1652ba27b78115eac23a4bb00ea4fa/454151609d0dce25849055ce6b02c0bc)

* Branch : 

    Branch 是 Git 中對 Commit 的可變指針。它代表了開發歷史中的一個獨立線，指向特定的 Commit，可以創建和切換到其他分支來進行並行開發。

* HEAD : 

    HEAD 是一個特殊的指標，指向目前檢出的分支或特定的 Commit。通常HEAD 指向當前分支的最新 Commit，也可以指向一個特定的 Commit (稱為 "detached HEAD" 狀態)

---

### 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

* 初始化儲存庫 git init：

    執行 ```git init ``` 初始化repo

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/1.png)

    建立 .git 目錄，其中包含一些子目錄如 objects、refs 和初始設定檔 HEAD。
    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/2.png)

    其中objects 目錄裡面有 pack 和 info 子層的空目錄
    ```
    .git/objects
    ├── info
    └── pack
    ```

* 添加檔案 git add：

    執行 ```git add test.txt ``` 創建並加入一個test.txt至暫存區

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/3.png)

    觀察到objects內多了一個資料夾e6，內容如下:
    
    ```.git/objects
    ├── e6
    │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391 
    ```
    使用 ```git hash-object test.txt```確認內容

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/4.png)

    使用 ```git cat-file -t e69de2``` -t會輸出該物件的type

    確認了剛剛建立的 e69de2 就是 Git 的 blob 物件

    說明: 這是個 SHA-1 hash (SHA-1)，是由儲存的內容和 header 資訊所計算出來的 checksum
    結論: Git的儲存方式是一份內容就存成一個檔案，都放在 .git/objects 目錄內，子目錄為 SHA-1 的前 2 個字元，檔名為剩餘的 38 個字元

* 提交變更 git commit：

    執行 ```git commit -m "Add test.txt" ```

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/5.png)

    目錄下多了logs、refs、COMMIT_EDITMSG、index

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/7.png)
    ```
        .git/
    ├── HEAD  # 如果是第一次提交,內容會變為具體的 commit hash
    ├── logs/
    │   └── refs/
    │       └── heads/
    │           └── master  # 更新
    ├── objects/
    │   ├── 5e/
    │   │   └── fb9b...  # blob 對象 (之前的文件內容)
    │   ├── dc/
    │   │   └── 770b...  # 新的 tree 對象
    │   └── e6/
    │       └── 9de2...  # 新的 commit 對象
    └── refs/
        └── heads/
            └── master  # 更新,指向新的 commit 對象
    ```
    logs裡HEAD內容:

    ```0000000000000000000000000000000000000000 dc770bb4ff63f059d7fca4add8c63b0d741d89f6 KuanYanChu <ianchu723@gmail.com> 1726986599 +0800	commit (initial): Add test.txt```

    refs裡也有heads、tags內容:

        heads裡面master內容:

        ```dc770bb4ff63f059d7fca4add8c63b0d741d89f6```

        tags內容:目前是空的

    COMMIT_EDITMSG內容:

    ```Add test.txt``` 可得知為剛剛的commit message

    且觀察到objects內又多兩個資料夾5e和dc

    ![image error](https://github.com/yumyuu/git-practice/blob/main/image/hw1-git/6.png)

    結論:

    根據上面測試的結果得知會創建一個新的 Tree 物件，描述目錄結構和 Blob 之間的關係，並儲存到 .git/objects。
    且有一個新的 Commit 物件，引用新創建的 Tree，並包含提交訊息、作者等資訊。
    並更新當前分支的指標（在 .git/refs/heads/ 中）指向新的 Commit。
    會更新 .git/HEAD，指向當前分支的最新 Commit。

* 創建分支 git branch：

    ```git branch feature```

    創建了一個分支feature

    觀察:
    在 .git/refs/heads/ 中多了一個新的檔案feature
    這個檔案包含一個指向特定 Commit 的 SHA-1 值。

* 切換分支 git checkout：

    ```git checkout feature```

    觀察:

    ```.git/HEAD  # 內容變為: ref: refs/heads/feature```

    更新.git/HEAD 指向新的分支，並且更新工作目錄和暫存區內容以匹配新的分支狀態。

---

### commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

    做了什麼(what)，為什麼做(why)，怎麼做的(how)。
    分類commit的類型(type)。
    commit影響的範圍(scope)。
    簡短的介紹(subject)。

    保險起見的話還是照公司的規範文件寫。

---

### 參考資料連結
[https://medium.com/@flyotlin/%E4%BB%80%E9%BA%BC%E6%98%AFgit%E7%89%A9%E4%BB%B6-ebbeb3b22f9c](https://medium.com/@flyotlin/%E4%BB%80%E9%BA%BC%E6%98%AFgit%E7%89%A9%E4%BB%B6-ebbeb3b22f9c)
[https://medium.com/@1chooo/git-commit-message-%E5%88%B0%E5%BA%95%E6%80%8E%E9%BA%BC%E5%AF%AB%E6%89%8D%E5%84%AA%E7%BE%8E-5b789157b549](https://medium.com/@1chooo/git-commit-message-%E5%88%B0%E5%BA%95%E6%80%8E%E9%BA%BC%E5%AF%AB%E6%89%8D%E5%84%AA%E7%BE%8E-5b789157b549)
[https://titangene.github.io/article/git--blob-object.html](https://titangene.github.io/article/git--blob-object.html)
