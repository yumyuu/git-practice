### 說明 blob, tree, commit, branch, head 分別是什麼
* blob :

    Blob（Binary Large Object）是 Git 中用於儲存檔案內容的物件。每個 Blob 都表示一個檔案的原始數據（例如文字文件的內容），不包含檔名或其他元數據。Blob 是唯一的，基於內容的哈希值（SHA-1）來識別。

* tree : 

    Tree 是 Git 中用於表示目錄結構的物件。它包含了對多個 Blob 和其他 Tree 的引用，每個引用還包含檔名和檔案的模式（例如檔案或目錄）。Tree 使 Git 能夠建立整個專案的目錄和子目錄的結構。

* commit : 

    Commit 是 Git 中儲存項目狀態（snapshot）的物件。每個 Commit 包含了一個 Tree（表示專案的整個檔案系統快照）且包含本次提交的作者等相關附屬資訊和包含零個或多個指向該提交物件的父物件指標：首次提交是沒有直接祖先的，普通提交有一個祖先，由兩個或多個分支合併產生的提交則有多個祖先。

* branch : 

    Branch 是 Git 中對 Commit 的可變指針。它代表了開發歷史中的一個獨立線，指向特定的 Commit，可以創建和切換到其他分支來進行並行開發。

* head : 

    HEAD 是一個特殊的指標，指向目前檢出的分支或特定的 Commit。通常HEAD 指向當前分支的最新 Commit，也可以指向一個特定的 Commit（稱為 "detached HEAD" 狀態。

![image error](https://willh.gitbook.io/~gitbook/image?url=http%3A%2F%2Fgit-scm.com%2Ffigures%2F18333fig0301-tn.png&width=400&dpr=3&quality=100&sign=7b91bda7&sv=1)

![image error](https://willh.gitbook.io/~gitbook/image?url=http%3A%2F%2Fgit-scm.com%2Ffigures%2F18333fig0302-tn.png&width=400&dpr=3&quality=100&sign=54fa5b6e&sv=1)

[參考資料](https://willh.gitbook.io/gitpro/3b1652ba27b78115eac23a4bb00ea4fa/454151609d0dce25849055ce6b02c0bc)
---

### 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

* 初始化儲存庫 git init：
    
    建立 .git 目錄，其中包含一些子目錄如 objects、refs 和初始設定檔 HEAD。

* 添加檔案 git add：
    
    >新增 Blob 物件到 .git/objects 目錄，儲存檔案的內容。
    更新 .git/index（stage/index 文件），將檔案內容標記為準備提交狀態。

* 提交變更 git commit：

    >創建一個新的 Tree 物件，描述目錄結構和 Blob 之間的關係，並儲存到 .git/objects。

    創建一個新的 Commit 物件，引用新創建的 Tree，並包含提交訊息、作者等資訊。

    更新當前分支的指標（在 .git/refs/heads/ 中）指向新的 Commit。

    更新 .git/HEAD，指向當前分支的最新 Commit。

* 創建分支 git branch：

    在 .git/refs/heads/ 中創建一個新的檔案，這個檔案包含一個指向特定 Commit 的 SHA-1 值。

* 切換分支 git checkout：

    更新 .git/HEAD 指向新的分支，並且更新工作目錄和暫存區內容以匹配新的分支狀態。

---

### commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

    做了什麼(what)，為什麼做(why)，怎麼做的(how)。
    分類commit的類型(type)。
    commit影響的範圍(scope)。
    簡短的介紹(subject)。

    保險的話還是照公司的規範文件寫。

[參考資料](https://medium.com/@1chooo/git-commit-message-%E5%88%B0%E5%BA%95%E6%80%8E%E9%BA%BC%E5%AF%AB%E6%89%8D%E5%84%AA%E7%BE%8E-5b789157b549)
