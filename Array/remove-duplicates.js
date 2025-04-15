const arr1 = [0, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6 ]

const removeDuplicates = (arr) => {
  return Array.from(new Set(arr)).length
}

// console.log(removeDuplicates(arr1))


const removeDuplicatesOptimised= (arr) => {
  let count = 0
  for(let i = 0; i < arr.length; i++) {
    if (i === (arr.length - 1)) {
      if (arr[i] > arr[i-1]) {
        count++
      }
    }
    if(arr[i] < arr[i+1]) {
      count++
    }
  }
  return count
}
console.log(removeDuplicatesOptimised(arr1))