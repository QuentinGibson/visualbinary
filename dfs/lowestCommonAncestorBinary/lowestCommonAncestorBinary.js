export function lowestCommonAncestorBinary(root, p, q) {
  if (!root) return null
  if (root.val === p.val || root.val === q.val) return root
  let left = lowestCommonAncestorBinary(root.right, p, q)
  let right = lowestCommonAncestorBinary(root.left, p, q)
  if (left && right) return root
  return right ? right : left
}