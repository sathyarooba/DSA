const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  let mid = Math.floor(arr.length/2)
  let leftSorted = mergeSort(arr.slice(0, mid))
  let rightSorted = mergeSort(arr.slice(mid))
  return merge(leftSorted, rightSorted)
}

const merge = (left, right) => {
  let sortedArray = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }
  const resultArray = [...sortedArray, ...left, ...right]
  return resultArray
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]))