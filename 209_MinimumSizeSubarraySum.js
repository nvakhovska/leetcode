/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let left = 0;
    let curSum = 0;

    for (let right = 0; right < nums.length; right++){
        curSum += nums[right];

        while (curSum >= target){
            if (right - left + 1 < minLen){
                minLen = right - left + 1;
            }
            curSum -= nums[left];
            left++
        }
    }
    return minLen !== Infinity ? minLen : 0;
};

// function minSubArrayLen(target: number, nums: number[]): number {
//     const n = nums.length;
//     const s: number[] = new Array(n + 1).fill(0);
//     for (let i = 0; i < n; ++i) {
//         s[i + 1] = s[i] + nums[i];
//     }
//     let ans = n + 1;
//     const search = (x: number) => {
//         let l = 0;
//         let r = n + 1;
//         while (l < r) {
//             const mid = (l + r) >>> 1;
//             if (s[mid] >= x) {
//                 r = mid;
//             } else {
//                 l = mid + 1;
//             }
//         }
//         return l;
//     };
//     for (let i = 0; i <= n; ++i) {
//         const j = search(s[i] + target);
//         if (j <= n) {
//             ans = Math.min(ans, j - i);
//         }
//     }
//     return ans === n + 1 ? 0 : ans;
// }