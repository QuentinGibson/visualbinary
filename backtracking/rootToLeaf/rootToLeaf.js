function dfs(root, path, res) {
  if (root.children.length === 0) {
    path.push(root.val)
    res.push(path)
    return
  }
  for (let children of root.children) {
    const path_copy = Array.from(path)
    path_copy.push(root.val)
    dfs(children, path_copy, res)
  }
}

export function rootToLeafPaths(root) {
  let res = []
  root ? dfs(root, [], res) : []
  return res
}
