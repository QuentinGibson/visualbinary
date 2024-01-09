import { BinaryTreeNode, drawBinaryTree } from 'binary-tree-visualizer'

let root = new BinaryTreeNode(5)
root.left = new BinaryTreeNode(4)
root.left.left = new BinaryTreeNode(3)
root.left.right = new BinaryTreeNode(8)
root.right = new BinaryTreeNode(6)

drawBinaryTree(root, document.querySelector('canvas'))

function dfs(root) {
  if (root === undefined) return 0
  let leftRoute = dfs(root.left)
  let rightRoute = dfs(root.right)
  return Math.max(leftRoute, rightRoute) + 1
}

function maxDepth(root) {
  return (root === undefined) ? 0 : dfs(root) - 1
}

console.log("Max Depth: ", maxDepth(root))