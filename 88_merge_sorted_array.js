//https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //const new1 = [...nums1, ...nums2];
    //const new2 = nums1.concat(nums2);
    //nums1.push(...nums2);

    // Time complexity: O((m+n)log(m+n))
    nums1.splice(m, n, ...nums2);
    nums1.sort((a,b) => a - b);

    // Time complexity: O(m+n)
    let i = m - 1;
    let j = n - 1;
    let k = m + n -1;

    while (j >= 0){
        if (i >= 0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};