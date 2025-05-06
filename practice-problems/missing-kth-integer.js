const findMissedInteger = (arr, k) => {
  let index=0, num=1, missedNumList = [];
  while (missedNumList.length <= k) {
    if (index < arr.length && arr[index] === num) {
      index = index + 1
    } else {
      missedNumList.push(num)
    }
    num = num + 1
  }
  return missedNumList[k -1]
}

console.log(findMissedInteger([1, 2, 3, 4], 2))