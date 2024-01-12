import { test } from 'vitest'
import { insertIntoBST } from './insertIntoBST' // adjust this according to your file structure

// Helper function to create a binary tree from an array
function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  return {
    val: arr[index],
    left: createTree(arr, 2 * index + 1),
    right: createTree(arr, 2 * index + 2)
  };
}

// Helper function to convert a binary tree to an array
function treeToArray(root) {
  const arr = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      arr.push(node.val);
      queue.push(node.left, node.right);
    } else {
      arr.push(null);
    }
  }
  while (arr[arr.length - 1] === null) arr.pop();
  return arr;
}

test('should insert value into BST and return the root node', ({ expect }) => {
  let root = createTree([4, 2, 7, 1, 3]);
  root = insertIntoBST(root, 5);
  expect(treeToArray(root)).toEqual([4, 2, 7, 1, 3, 5]);

  root = createTree([40, 20, 60, 10, 30, 50, 70]);
  root = insertIntoBST(root, 25);
  expect(treeToArray(root)).toEqual([40, 20, 60, 10, 30, 50, 70, null, null, 25]);

  root = createTree([4, 2, 7, 1, 3, null, null, null, null, null, null]);
  root = insertIntoBST(root, 5);
  expect(treeToArray(root)).toEqual([4, 2, 7, 1, 3, 5]);
})