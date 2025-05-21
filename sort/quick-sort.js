const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const pivot = arr[0]
  let leftArray = [], rightArray = []
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i])
    } else {
      rightArray.push(arr[i])
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}


console.log(quickSort([8, 3, 5, 4, 7, 6, 1, 2]))