// 二分查找
let binarySearch = function(nums, target) {
    // 最小索引值
    let low = 0;

    // 最大索引值
    let high = nums.length - 1;

    while(low <= high) {
        // 获取中间索引值；
        const mid = Math.floor(( low + high) / 2);

        // 获得中间索引的值
        const element = nums[mid];

        if(element < target) {
            low = mid + 1;
        } else if(element > target) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}
