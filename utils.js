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

// let list = [
//     {
//         id: 0,
//         name: 'zhangsan',
//         parentId: null
//     },
//     {
//         id: 1,
//         name: '张三',
//         parentId: 0
//     },
//     {
//         id: 2,
//         name: '李四',
//         parentId: 0
//     },
//     {
//         id: 3,
//         name: '王五',
//         parentId: 1
//     },
//     {
//         id: 4,
//         name: '赵六',
//         parentId: 2
//     },
//     {
//         id: 5,
//         name: '孙七',
//         parentId: 2
//     },
//     {
//         id: 6,
//         name: '李华',
//         parentId: 3
//     },
//     {
//         id: 7,
//         name: '小明',
//         parentId: 3
//     },
//     {
//         id: 8,
//         name: '小红',
//         parentId: 3
//     },
//     {
//         id: 9,
//         name: '小华',
//         parentId: 4
//     },
// ]

// 平面结构转成树形结构
const listToTree = (list, parentId = null) => {
    let tree = []
    for (const item of list) {
        if(item.parentId === parentId) {
            const node = {
                id: item.id,
                name: item.name,
                children: listToTree(list, item.id)
            }

            tree.push(node)
        }
    }

    return tree;
}
