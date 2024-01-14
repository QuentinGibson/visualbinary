import { test, expect } from 'vitest'
import { substringPalindromes } from './substringPalindromes.js'

test('substring palindromes', () => {
  const testCases = [
    { input: 'aba', output: [["a", "b", "a"], ["aba"]] },
    { input: 'aab', output: [["a", "a", "b"], ["aa", "b"]] },
    // Add more test cases as needed
  ]

  for (const { input, output } of testCases) {
    expect(substringPalindromes(input).sort()).toEqual(output.sort())
  }
})