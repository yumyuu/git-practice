const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
//增加 process.env.PORT 可額外透過環境變數的設定來修改要監聽的 port numbe。
//指令: set PORT=4000 && npm start
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})