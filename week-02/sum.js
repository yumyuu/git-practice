// ary: number array
function sum(ary) {
	// TODO: sum all elements in ary

    //reduce語法:
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue,
    //   initialValue,
    //);

    //reduce(callbackFn)
    //reduce(callbackFn, initialValue)
    return ary.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum([1, 5, 3, 2])); // 11

//(optional) 挑戰題: 有幾種寫法？
function sum(ary) {
    //Array.prototype.join 結合 eval
    //語法:
    //eval(string)
    //把ary轉換成+串接的字串 再用eval計算
    //但若陣列有空值或非數字則無法使用
    return eval(ary.join('+'));
}

//(optional) 挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
function sum(n) {
  return n * (n + 1) / 2;//公式解
}

