export function lowestCommonAncestor(root, p, q) {
  if (!root) return
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)
  if ((p.val > root.val && q.val < root.val) || (p.val < root.val && q.val > root.val)) {
    return root
  }
  return root
}