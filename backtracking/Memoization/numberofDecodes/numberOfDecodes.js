function dfs(start, digits) {
  if (start === digits.length) {
    return 1
  }

  let ways = 0

  if (digits[start] === "0") {
    return ways
  }

  ways += dfs(start + 1, digits)

  if (start + 2 <= digits.length && parseInt(digits.substring(start, start + 2)) <= 26) {
    ways += dfs(start + 2, digits)
  }

  return ways

}
export function numberOfDecodes(num) {
  return dfs(0, num)
}