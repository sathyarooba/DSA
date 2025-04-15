const shiftRotation = (arr, count) => {
  let updatedArr = arr
  for(let i=0; i<count; i++) {
    let shiftedVar = updatedArr.shift()
    updatedArr.push(shiftedVar)
  }
  return updatedArr
}

const arr1 = [1, 2, 3, 4, 5, 6, 7]
// console.log(shiftRotation(arr1, 3))


const shiftRotationOptimised = (arr, count) => {
  let arr2 = []
  for(let i=count+1; i<arr.length; i++) {
    arr2[arr2.length] = arr[i]
  }
  for(let j=0; j<=count; j++) {
    arr2[arr2.length] = arr[j]
  }
  return arr2
}
const arrVal = [1, 2, 3, 4, 5, 6, 7]
console.log(shiftRotationOptimised(arrVal, 5))
