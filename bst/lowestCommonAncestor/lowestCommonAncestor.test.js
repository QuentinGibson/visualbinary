import { test } from 'vitest'
import { lowestCommonAncestor } from './lowestCommonAncestor' // adjust this according to your file structure

// Helper function to create a binary tree from an array
function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  return {
    val: arr[index],
    left: createTree(arr, 2 * index + 1),
    right: createTree(arr, 2 * index + 2)
  };
}

// Helper function to find a node in a tree
function findNode(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return findNode(root.left, val) || findNode(root.right, val);
}

test('should find the lowest common ancestor in a BST', ({ expect }) => {
  let root = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  let p = findNode(root, 2);
  let q = findNode(root, 8);
  let lca = lowestCommonAncestor(root, p, q);
  expect(lca.val).toBe(6);

  root = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  p = findNode(root, 2);
  q = findNode(root, 4);
  lca = lowestCommonAncestor(root, p, q);
  expect(lca.val).toBe(2);

  root = createTree([2, 1]);
  p = findNode(root, 2);
  q = findNode(root, 1);
  lca = lowestCommonAncestor(root, p, q);
  expect(lca.val).toBe(2);
})