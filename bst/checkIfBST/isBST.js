export function isBST(root) {
  function dfs(root, min_sofar, max_sofar) {
    if (!root) return true;

    if (!(min_sofar < root.value && root.value < max_sofar)) return false;

    // see notes below
    return dfs(root.left, min_sofar, root.value) && dfs(root.right, root.value, max_sofar);
  }

  return root ? dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) : true

}