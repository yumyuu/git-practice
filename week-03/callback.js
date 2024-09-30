function doJob(job, time, cb) {
    setTimeout(() => {
      // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
      let now = new Date();
      cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  }

  // 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
  // 方法一 : 用nested functions的方式呼叫doJob。 缺點: 可讀性降低且維護困難。
  let now = new Date();
  console.log(`開始工作 at ${now.toISOString()}`);
  doJob('刷牙', 1000, function (data) {
    console.log(data);
    doJob('吃早餐', 3000, function (data) {
        console.log(data);
        doJob('寫功課', 1000, function (data) {
            console.log(data);
            doJob('吃午餐', 2000, function (data) {
                console.log(data);
              });
          });
      });
  });
