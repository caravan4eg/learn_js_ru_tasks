// Найти в массиве индекс элемента по значению target
let array = [-1,0,3,5,7,9,12];

let search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right){
        mid = Math.round((right-left)/2) + left;
        if (target === nums[mid]) return mid;
        // если искомое значение меньге середины, то отбрасываем првую половину
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        // если искомое больше середины то отбрасываем правую половину
        else if (target >nums[mid]) {
            left = mid + 1;
        }

    }
    return -1;
}

console.log(search(array, 7));