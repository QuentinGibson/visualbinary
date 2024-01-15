
export function generateParentheses(n) {
  let ans = []
  function dfs(start, path, start_count, end_count) {
    if (start === n * 2) {
      ans.push(path.join(""))
      return
    }

    if (start_count < n) {
      path.push("(")
      dfs(start + 1, path, start_count + 1, end_count)
      path.pop()
    }

    if (end_count < start_count) {
      path.push(")")
      dfs(start + 1, path, start_count, end_count + 1)
      path.pop()
    }
  }
  dfs(0, [], 0, 0)
  return ans
}