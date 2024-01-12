import { test } from 'vitest'
import { isBST } from './isBST' // adjust this according to your file structure

test('should return true for a valid BST', ({ expect }) => {
  const node = {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };
  expect(isBST(node)).toBe(true);
})

test('should return false for an invalid BST', ({ expect }) => {
  const node = {
    value: 2,
    left: { value: 3, left: null, right: null },
    right: { value: 1, left: null, right: null }
  };
  expect(isBST(node)).toBe(false);
})

test('should return true for an empty tree', ({ expect }) => {
  expect(isBST(null)).toBe(true);
})

test('should return true for a single node tree', ({ expect }) => {
  const node = { value: 1, left: null, right: null };
  expect(isBST(node)).toBe(true);
})

test('should return false if right subtree has a value less than the root', ({ expect }) => {
  const node = {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: { value: 1, left: null, right: null }
  };
  expect(isBST(node)).toBe(false);
})

test('should return false if left subtree has a value greater than the root', ({ expect }) => {
  const node = {
    value: 2,
    left: { value: 3, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };
  expect(isBST(node)).toBe(false);
})
