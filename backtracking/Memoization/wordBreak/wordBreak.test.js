// FILEPATH: /tests/wordBreak.test.js
import { test, expect } from 'vitest'
import { wordBreak } from './wordBreak'

test('wordBreak', () => {
  expect(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"])).toBe(false)
  expect(wordBreak("aab", ["a", "c"])).toBe(false)
  expect(wordBreak("algomonster", ["algo", "monster"])).toBe(true)
  expect(wordBreak("algomonster", ["go", "mons", "alter"])).toBe(false)
  expect(wordBreak("abcd", ["a", "abc", "b", "cd"])).toBe(true)
})