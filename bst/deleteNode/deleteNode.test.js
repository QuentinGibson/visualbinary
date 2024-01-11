import { deleteNode } from './deleteNode';
import { assert, test, describe, expect, beforeEach, it } from 'vitest'

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe('deleteNode', () => {
  let root;

  beforeEach(() => {
    root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);
    root.left.left = new Node(3);
    root.left.right = new Node(7);
    root.right.left = new Node(13);
    root.right.right = new Node(17);
  });

  test('should delete a leaf node', () => {
    deleteNode(root, 3);
    expect(root.left.left).toBeNull();
  });

  test('should delete a node with only right child', () => {
    deleteNode(root, 5);
    expect(root.left.value).toBe(7);
  });

  test('should delete a node with only left child', () => {
    root.left.right = null; // Make 5 a node with only left child
    deleteNode(root, 5);
    expect(root.left.value).toBe(3);
  });

  test('should delete a node with two children', () => {
    deleteNode(root, 15);
    expect(root.right.value).toBe(17);
  });

  test('should not modify the tree if target is not found', () => {
    const treeBeforeDeletion = JSON.parse(JSON.stringify(root)); // Deep copy
    deleteNode(root, 100);
    expect(root).toEqual(treeBeforeDeletion);
  });
});