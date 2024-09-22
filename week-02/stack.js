// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
    // # 解釋: #在javascript是私有屬性的意思，在類別外部無法訪問或修改，只有在stack.js內部可以。
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
		// TODO
        //index[this.#items.length]剛好是最後一個位置 且js的陣列是動態調整大小
        this.#items[this.#items.length] = element;
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
		// TODO
        let pop_val = this.#items[this.#items.length-1];
        this.#items.length = this.#items.length-1; 
        return pop_val;
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // TODO
    if( this.#items.length != 0)
        return false

    return true
  }

  // 回傳 stack 中元素的個數
  size() {
    // TODO
    //用array.lenth回傳元素個數
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    // TODO
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    // TODO
    console.log(this.#items.toString())
  }
}