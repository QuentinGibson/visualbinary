import { findMin } from './playground';
import { test, expect } from 'vitest'

test('Example 1: Array rotated 3 times', () => {
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});

test('Example 2: Array rotated 4 times', () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

test('Example 3: Array rotated 4 times', () => {
  expect(findMin([11, 13, 15, 17])).toBe(11);
});

test('Example 4: Single elment array'), () => {
  expect(findMin([1]).toBe(1))
}