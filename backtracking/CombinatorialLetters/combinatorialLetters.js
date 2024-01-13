function dfs(length, cur_index, res, path) {
  const letters = ["a", "b"]
  if (cur_index === length) {
    res.push(path.join(""))
    return
  }

  letters.forEach((letter) => {
    path.push(letter)
    dfs(length, cur_index + 1, res, path)
    path.pop()
  })
}

export function generateWords(length) {
  let res = []
  dfs(length, 0, res, [])
  return res
}