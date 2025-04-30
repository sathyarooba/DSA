let globalMemoize = {}

const Add = (a, b) => {
  const makeKeyString = `${a}${b}`
  if(globalMemoize[makeKeyString]) {
    return globalMemoize[makeKeyString]
  }
  else {
    const sum = a + b
    globalMemoize[makeKeyString] = sum
    return sum
  }
}

// console.log(Add(5, 6))
// console.log(Add(5, 6))
// console.log(Add(11, 6))
// console.log(Add(11, 6))



const add = (a, b) => a + b
const memoizeOne = (fn) => {
  let map = new Map()
  return (a, b) => {
    const keyConstruct = `${a}-${b}`
    if (map.has(keyConstruct)) {
      console.log('memoized')
      return map.get(keyConstruct)
    }
    else {
      const result = fn(a, b)
      map.set(keyConstruct, result)
      return result
    }
  }
}
const memoizeAdd = memoizeOne(add)
console.log(memoizeAdd(5, 6))
console.log(memoizeAdd(5, 6))
console.log(memoizeAdd(11, 16))
console.log(memoizeAdd(11, 16))


