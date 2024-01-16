function strToValid(str) {
  let obj = {}
  for (let char of str) {
    obj[char] = false
  }
  return obj
}
export function allPermutations(str) {
  let ans = []
  let n = str.length
  let isValid = strToValid(str)
  function dfs(start, path, isValid) {
    if (start === n) {
      ans.push(path.join(""))
      return
    }

    for (let i = 0; i < n; i++) {
      let char = str[i]
      if (!isValid[char]) {
        path.push(char)
        isValid[char] = true
        dfs(start + 1, path, isValid)
        path.pop()
        isValid[char] = false
      }
    }
  }
  dfs(0, [], isValid)
  return ans
}