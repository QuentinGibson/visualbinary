function dfs(root, path, res) {
  if (root.children.length === 0) {
    path.push(root.val)
    res.push([...path])
    path.pop()
    return
  }
  for (let child of root.children) {
    if (child) {
      path.push(root.val)
      dfs(child, path, res)
      path.pop()
    }
  }
}

export function rootToLeafPaths(root) {
  let res = []
  root ? dfs(root, [], res) : []
  return res
}
