import { test, expect } from 'vitest'
import { rootToLeafPaths } from './rootToLeaf'

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

test('rootToLeafPaths - single node tree', () => {
  const root = new Node(1)
  let path = []
  const paths = rootToLeafPaths(root, path)
  expect(paths).toEqual([[1]])
})

test('rootToLeafPaths - ternary tree with 2 levels', () => {
  const root = new Node(1, [new Node(2), new Node(3), new Node(4)])
  let path = []
  const paths = rootToLeafPaths(root, path)
  expect(paths).toEqual([[1, 2], [1, 3], [1, 4]])
})

test('rootToLeafPaths - ternary tree with 3 levels', () => {
  const root = new Node(1, [new Node(2, [new Node(5)]), new Node(3, [new Node(6)]), new Node(4, [new Node(7)])])
  let path = []
  const paths = rootToLeafPaths(root, path)
  expect(paths).toEqual([[1, 2, 5], [1, 3, 6], [1, 4, 7]])
})

test('rootToLeafPaths - empty tree', () => {
  const root = null
  let path = []
  const paths = rootToLeafPaths(root, path)
  expect(paths).toEqual([])
})

test('rootToLeafPaths - tree with one path having more nodes', () => {
  const root = new Node(1, [new Node(2, [new Node(5, [new Node(8)])]), new Node(3), new Node(4)])
  let path = []
  const paths = rootToLeafPaths(root, path)
  expect(paths).toEqual([[1, 2, 5, 8], [1, 3], [1, 4]])
})