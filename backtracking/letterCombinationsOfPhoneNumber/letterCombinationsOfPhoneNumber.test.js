import { test, expect } from 'vitest'
import { letterCombinationsOfPhoneNumber } from './letterCombinationsOfPhoneNumber.js'

test('letter combinations of phone number', ({ is }) => {
  const testCases = [
    { input: '56', output: ['jm', 'jn', 'jo', 'km', 'kn', 'ko', 'lm', 'ln', 'lo'] },
    { input: '23', output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] },
    { input: '789', output: ['ptw', 'ptx', 'pty', 'ptz', 'puw', 'pux', 'puy', 'puz', 'pvw', 'pvx', 'pvy', 'pvz', 'qtw', 'qtx', 'qty', 'qtz', 'quw', 'qux', 'quy', 'quz', 'qvw', 'qvx', 'qvy', 'qvz', 'rtw', 'rtx', 'rty', 'rtz', 'ruw', 'rux', 'ruy', 'ruz', 'rvw', 'rvx', 'rvy', 'rvz', 'stw', 'stx', 'sty', 'stz', 'suw', 'sux', 'suy', 'suz', 'svw', 'svx', 'svy', 'svz'] },
    // Add more test cases as needed
  ]

  for (const { input, output } of testCases) {
    expect(letterCombinationsOfPhoneNumber(input), output)
  }
})