var twoSum = function(nums, target) {
   let a = new Map()
   for(let i=0; i<nums.length; i++){
     let sum = target - nums[i]
     if(a.has(sum)){
        return [i, a.get(sum)]
     }
     a.set(nums[i], i)
   }
   return []
};