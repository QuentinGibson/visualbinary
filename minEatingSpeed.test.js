import { minEatingSpeed } from './playground';
import { assert, test, describe, expect, beforeEach, it } from 'vitest'

test('Example 1: multiple piles, exact time', () => {
  expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
});

test('Example 2: multiple piles, less time than bananas', () => {
  expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
});

test('Example 3: multiple piles, more time than bananas', () => {
  expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
});