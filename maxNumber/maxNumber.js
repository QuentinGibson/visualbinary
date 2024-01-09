import { BinaryTreeNode, drawBinaryTree } from 'binary-tree-visualizer';

// Init a new root binary tree node
const root = new BinaryTreeNode(5);
root.left = new BinaryTreeNode(1);
root.left.left = new BinaryTreeNode(8);
root.left.right = new BinaryTreeNode(11);

drawBinaryTree(root, document.querySelector('canvas'));

// Divide and conquer method
function getMax(node, max) {
  if (node === undefined) {
    return Number.NEGATIVE_INFINITY;
  }
  const leftMax = getMax(node.left, max);
  const rightMax = getMax(node.right, max);
  return Math.max(node.value, leftMax, rightMax);
}

console.log("Divide and conquer method: ", getMax(root, Number.NEGATIVE_INFINITY));

// Global variable method
let max_value = Number.NEGATIVE_INFINITY;

function getMaxGlobal(node) {
  if (node === undefined) {
    return
  }
  if (max_value < node.value) {
    max_value = node.value
  }
  getMaxGlobal(node.left)
  getMaxGlobal(node.right)
}

function outputMax() {
  getMaxGlobal(root)
  return max_value
}

console.log("Global method: ", outputMax())