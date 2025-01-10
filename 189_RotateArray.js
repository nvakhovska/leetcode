/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Time Limit Exceeded
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    } 
};

function rotate2(nums, k) {
    const arrayLength = nums.length;
    k %= arrayLength;

    const reverse = (start, end) => {
        while (start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;

            start++;
            end--;
        }
    };

    reverse(0, arrayLength - 1);
    reverse(0, k - 1);
    reverse(k, arrayLength - 1);
}