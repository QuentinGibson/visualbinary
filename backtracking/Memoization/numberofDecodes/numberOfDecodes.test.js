import { test, expect } from 'vitest'
import { numberOfDecodes } from './numberOfDecodes.js'

test('numDecodings with "12"', () => {
  const result = numberOfDecodes("12")
  expect(result).toBe(2)
})

test('numDecodings with "226"', () => {
  const result = numberOfDecodes("226")
  expect(result).toBe(3)
})

test('numDecodings with "06"', () => {
  const result = numberOfDecodes("06")
  expect(result).toBe(0)
})