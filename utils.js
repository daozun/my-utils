// 通过一个子节点寻找所有父节点，形成数组
function recursionFn(list, value) {
  let res = [];

  function recursion(arr, ids = []) {
    for (const item of arr) {
      if (item.id === value) {
        res = [...ids, ...[item.id]];
        return;
      } else {
        if (item.children) {
          recursion(item.children, ids.concat([item.id]));
        }
      }
    }
  }

  recursion(list);

  return res;
}

// 去重 json 数组中重复的 item (字段必须完全相同)
function dropDuplicate(arr) {
  jsonObject = arr.map(JSON.stringify);

  uniqueSet = new Set(jsonObject);
  uniqueArray = Array.from(uniqueSet).map(JSON.parse);

  return uniqueArray;
}
