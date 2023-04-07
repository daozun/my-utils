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

// 把 json 数据转成 FormData 格式
function convertToFormData(data) {
  let formData = new FormData();

  // 递归处理对象属性
  function appendFormData(formData, data, parentKey) {
    if (Array.isArray(data)) {
      // 如果是数组，处理数组元素
      for (let i = 0; i < data.length; i++) {
        appendFormData(formData, data[i], parentKey + "[" + i + "]");
      }
    } else if (typeof data === "object" && data !== null) {
      // 如果是对象，递归处理对象属性
      for (let key in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key)) {
          if (parentKey) {
            appendFormData(formData, data[key], parentKey + "." + key);
          } else {
            appendFormData(formData, data[key], key);
          }
        }
      }
    } else {
      // 否则，直接添加属性到 FormData
      formData.append(parentKey, data);
    }
  }

  appendFormData(formData, data, "");

  return formData;
}
