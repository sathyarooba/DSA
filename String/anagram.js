const isAnagram = (s, t) => {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

const isAnagramOptimised = (s, t) => {
  if (s.length !== t.length) return false
  let obj1 = {}, obj2 = {}
  for (let index = 0; index < s.length; index++) {
    obj1[s[index]] = (obj1[s[index]] || 0) + 1
    obj2[t[index]] = (obj2[t[index]] || 0) + 1
  }
}

console.log(isAnagram('nagaram', 'anagram'))