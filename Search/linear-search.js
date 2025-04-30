const linearSearch = (arr, target) => {
  for (let index=0; index<arr.length; index++) {
    if (arr[index] === target)
      return index
  }
  return -1
}

console.log(linearSearch([6, 7, 8, 9, 10], 10))
console.log(linearSearch([6, 7, 8, 9, 10], 0))


// If more than one index have the value
const globalLinearSearch = (arr, target) => {
  let result = []
  for (let index=0; index<arr.length; index++) {
    if (arr[index] === target)
      result.push(index)
  }
  return result
}

console.log(globalLinearSearch([6, 7, 8, 9, 10, 6], 6))
console.log(globalLinearSearch([6, 7, 8, 9, 10], 0))
