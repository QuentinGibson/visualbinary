function isPalindrome(substring) {
  let l = 0, r = substring.length - 1
  while (l < r) {
    if (substring.charAt(l) !== substring.charAt(r)) return false
    l++
    r--
  }
  return true
}

export function substringPalindromes(s) {
  let ans = []
  let n = s.length
  function dfs(start_index, part) {
    if (start_index === n) {
      ans.push([...part])
      return
    }
    for (let end = start_index + 1; end < n + 1; end++) {
      let sub = s.substring(start_index, end)
      if (isPalindrome(sub)) {
        part.push(sub)
        dfs(end, part)
        part.pop()
      }
    }
  }
  dfs(0, [])
  return ans
}