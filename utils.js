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

const result = recursionFn(value, list);

console.log("result", result);
