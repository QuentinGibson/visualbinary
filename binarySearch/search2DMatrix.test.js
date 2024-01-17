// FILEPATH: /tests/search2DMatrix.test.js
import { test, expect } from 'vitest'
import { searchMatrix } from './search2DMatrix'

test('search2DMatrix', () => {
  expect(searchMatrix([[1], [3]], 3)).toBe(true)
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)).toBe(true)
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)).toBe(false)
  expect(searchMatrix([[1, 3]], 3)).toBe(true)
  // Add more test cases as needed
})