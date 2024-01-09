import { BinaryTreeNode, drawBinaryTree } from 'binary-tree-visualizer';

// Init a new root binary tree node
const root = new BinaryTreeNode("/");

// Setting the left child
root.setLeft(new BinaryTreeNode("Foo"));

// Setting the left > left child
root.left.setLeft(new BinaryTreeNode("Baz"));

// Setting the right child
root.setRight(new BinaryTreeNode("Bar"));

// Draw a binary tree with all default config
// Canvas will take up entire height and width of the screen
drawBinaryTree(root, document.querySelector('canvas'));

function dfsFileIndex(node, indent_level) {
  if (node === undefined) {
    return;
  }
  console.log("  ".repeat(indent_level) + node.value);
  dfsFileIndex(node.left, indent_level + 1);
  dfsFileIndex(node.right, indent_level + 1);
}

dfsFileIndex(root, 0);