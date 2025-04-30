let input = [{
  key: 'sample1',
  data: 'data1'
}, {
  key: 'sample2',
  data: 'data2'
}, {
  key: 'sample3',
  data: 'data3'
}, {
  key: 'sample1',
  data: 'data1'
}]

const output = {
  'sample1': [
    {
      key: 'sample1',
      data: 'data1'
    },
    {
      key: 'sample1',
      data: 'data1'
    }
  ],
  'sample2': [
    {
      key: 'sample2',
      data: 'data2'
    }
  ],
  'sample3': [
    {
      key: 'sample3',
      data: 'data3'
    }
  ]
}

const deStructureArray = (arr) => {
  const resultObject = arr.reduce((accumulator, current) => {
    if(!(current.key in accumulator)) {
      accumulator[current.key] = [current]
    } else {
      accumulator[current.key].push(current)
    }
    return accumulator
  }, {})
  return resultObject
}

console.log(deStructureArray(input))