// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
// 1. 確認每一個Stack的function都能正常運作
//push
stack.push(10);
stack.print();//5,8,10
//pop
stack.pop();
stack.print();//5,8
//peak
console.log(stack.peek());//8
//isEmpty
console.log(stack.isEmpty());//false
//size
console.log(stack.size());//2
//clear
stack.clear();
stack.print();//null

//2. 確認一些例外狀況
//例如 clear後再pop 會輸出甚麼
stack.pop();
stack.print();
//有問題 要再Stack 多做判斷處理

//push null值 會怎麼樣
stack.push(null)
stack.print();

//大量數據測試 先用10000(雖然不夠大)但試試看...
for(let i=0; i<10000; i++){
    stack.push(i);
}
stack.print();