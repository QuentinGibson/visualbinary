import { test } from 'vitest'
import { lowestCommonAncestorBinary } from './lowestCommonAncestorBinary' // adjust this according to your file structure

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

test('should find the lowest common ancestor in a binary tree', ({ expect }) => {
  let root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  let p = findNode(root, 5);
  let q = findNode(root, 1);
  let lca = lowestCommonAncestorBinary(root, p, q);
  expect(lca.val).toBe(3);
})

test('should return the node itself as the LCA if one node is the ancestor of the other', ({ expect }) => {
  let root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  let p = findNode(root, 5);
  let q = findNode(root, 4);
  let lca = lowestCommonAncestorBinary(root, p, q);
  expect(lca.val).toBe(5);
})

test('should find the LCA in a binary tree with only two nodes', ({ expect }) => {
  let root = createTree([1, 2]);
  let p = findNode(root, 1);
  let q = findNode(root, 2);
  let lca = lowestCommonAncestorBinary(root, p, q);
  expect(lca.val).toBe(1);
})