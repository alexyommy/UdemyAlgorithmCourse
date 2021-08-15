// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const diffr = target - nums[i];
        const diffrIndex = nums.indexOf(diffr);
        if (diffrIndex !== -1 && diffrIndex !== i) {
            return[i, diffrIndex]
        }
    }
}

console.log(twoSum([3,3], 6))

// Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
function maxSubArray(self, nums: List[int]) -> int:
        return twoSum;
}