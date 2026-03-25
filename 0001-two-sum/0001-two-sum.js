var twoSum = function(nums, target) {
    let a = new Map()
    for(i=0;i<nums.length;i++){
        let c = target- nums[i]
        if(a.has(c)){
            return [a.get(c),i]
        }
        a.set(nums[i],i)
    }
    return [];
};