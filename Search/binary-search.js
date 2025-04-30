//works for sorted array ascending or desending
const binarySearch = (arr, target) => {
  let start = 0, end = arr.length - 1
  while (start<=end) {
    let middle = Math.floor((start + end)/2)
    if (arr[middle] === target) {
      return middle
    } else if (arr[middle] < target) {
      start = middle + 1
    } else {
      end = middle -1
    }
  }
  return -1
}

console.log(binarySearch([6, 7, 8, 9, 10], 10))
console.log(binarySearch([6, 7, 8, 9, 10], 0))
