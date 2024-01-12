import { BinaryTreeNode, drawBinaryTree } from 'binary-tree-visualizer'

const root = new BinaryTreeNode(7)
root.left = new BinaryTreeNode(2)
root.left.right = new BinaryTreeNode(5)
root.left.right.left = new BinaryTreeNode(3)
root.left.right.right = new BinaryTreeNode(6)
root.right = new BinaryTreeNode(11)
root.right.left = new BinaryTreeNode(9)
root.right.left.right = new BinaryTreeNode(10)
root.right.right = new BinaryTreeNode(14)
root.right.right.left = new BinaryTreeNode(13)

// drawBinaryTree(root, document.getElementById("js-original"))
//Delete node example

export function deleteNode(root, target) {
  if (!root) return null
  if (target > root.value) {
    root.right = deleteNode(root.right, target)
  } else if (target < root.value) {
    root.left = deleteNode(root.left, target)
  } else {
    if (!root.left && !root.right) {
      return null

    } else if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    }
    let cur = root.right
    while (cur.left) {
      cur = cur.left
    }
    root.value = cur.value
    root.right = deleteNode(root.right, root.value)
  }
  return root
}