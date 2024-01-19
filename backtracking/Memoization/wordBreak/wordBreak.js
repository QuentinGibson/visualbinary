export function wordBreak(str, edges) {
  const memo = {}
  function dfs(start) {
    if (start === str.length) return true

    if (start in memo) return memo[start]

    let ans = false

    for (const edge of edges) {
      const node = str.slice(start)
      if (node.startsWith(edge)) {
        if (dfs(start + edge.length)) {
          ans = true
          break
        }
      }

    }
    memo[start] = ans
    return ans
  }

  return dfs(0)
}