const getMaximumValue = (nums, k) => {
  const arraySize = nums.length
  let maxArray = []
  let resultArray = []
  for (let i = 0; i < arraySize; i++) {
    while(maxArray.length && nums[i] > maxArray[maxArray.length - 1]) {
      maxArray.pop()
    }
    maxArray.push(nums[i])
    if(i >= k-1) {
      resultArray.push(maxArray[0])
    }
  }
  return resultArray
}

console.log(getMaximumValue([1, 3, -1, -3, 5, 3, 6, 7], 3))