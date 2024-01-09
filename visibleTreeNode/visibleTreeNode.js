import { drawBinaryTree, BinaryTreeNode } from 'binary-tree-visualizer'
const root = new BinaryTreeNode(5)
const left = new BinaryTreeNode(4)
const right = new BinaryTreeNode(6)
root.left = left
root.right = right
left.left = new BinaryTreeNode(3)
left.right = new BinaryTreeNode(8)

drawBinaryTree(root, document.querySelector('canvas'))

function dfs(root, max_sofar) {
  if (!root) return 0
  let total = 0
  if (root.value >= max_sofar) total++
  total += dfs(root.left, Math.max(max_sofar, root.value))
  total += dfs(root.right, Math.max(max_sofar, root.value))
  return total
}

function visibleTreeNode(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  return (root !== undefined) ? dfs(root, Number.NEGATIVE_INFINITY) : 0;
}


const visibleTotalElement = document.querySelector("#js-visibleTotal")
visibleTotalElement.innerHTML = `Total visible nodes = ${visibleTreeNode(root)}`

