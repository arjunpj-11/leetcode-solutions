var twoSum = function(nums, target) {
   let a = new Map()
   for(let i=0; i<nums.length; i++){
     let sum = target - nums[i]

     console.log(a.get(2))
     if(a.has(sum)){
        return [i, a.get(sum)]
     }
     a.set(nums[i], i)
   }
   return []
};