import { test, expect } from 'vitest'
import { generateWords } from './combinatorialLetters'

test('generateWords - 2 letter words', () => {
  const words = generateWords(2)
  expect(words).toEqual(["aa", "ab", "ba", "bb"])
})

test('generateWords - 4 letter words', () => {
  const words = generateWords(4)
  expect(words).toEqual(["aaaa", "aaab", "aaba", "aabb", "abaa", "abab", "abba", "abbb", "baaa", "baab", "baba", "babb", "bbaa", "bbab", "bbba", "bbbb"])
})

test('generateWords - 0 letter words', () => {
  const words = generateWords(0)
  expect(words).toEqual([""])
})

test('generateWords - 1 letter words', () => {
  const words = generateWords(1)
  expect(words).toEqual(["a", "b"])
})