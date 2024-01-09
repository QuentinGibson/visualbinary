function dfs(root, max_sofar) {
  if (!root) return 0
  let total = 0
  if (root.val >= max_sofar) total++
  total += dfs(root.left, Math.max(max_sofar, root.val))
  total += dfs(root.right, Math.max(max_sofar, root.val))
  return total
}

function visibleTreeNode(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  return (root !== null) ? dfs(root, Number.NEGATIVE_INFINITY) : 0;
}