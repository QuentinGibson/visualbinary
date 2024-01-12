class Node {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}
export function insertIntoBST(root, key) {
  if (!root) return { val: key, left: null, right: null }
  if (key > root.val) {
    root.right = insertIntoBST(root.right, key)
  } else if (key < root.val) {
    root.left = insertIntoBST(root.left, key)
  }
  return root
}