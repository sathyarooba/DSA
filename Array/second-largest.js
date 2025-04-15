const secondLargestArray = (arr) => {
  const removeDuplicates = Array.from(new Set(arr))
  const sortedArray = removeDuplicates.sort((a, b) => b - a)
  if (sortedArray.length > 2) {
    return sortedArray[1]
  }
  return -1
}


const arr1 = [100, 105, 34, 5, 6, 10, 2, 200000, 10000]
console.log(secondLargestArray(arr1))


const secondLargestOptimised = (arr) => {
  let l1 = -1, l2 = -1
  arr.forEach(val => {
    if (val > l2 && val < l1) {
      l2 = val
    } else if (val > l1) {
      l2 = l1
      l1 = val
    }
  })
  return l2
}

console.log(secondLargestOptimised(arr1))