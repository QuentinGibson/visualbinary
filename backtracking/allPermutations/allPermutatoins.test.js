// FILEPATH: /tests/allPermutations.test.js
import { test, expect } from 'vitest'
import { allPermutations } from './allPermutations'

test('allPermutations', () => {
  expect(allPermutations('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])

  expect(allPermutations('a')).toEqual(['a'])

  // Add your test case here. For example:
  expect(allPermutations('ab')).toEqual(['ab', 'ba'])
})