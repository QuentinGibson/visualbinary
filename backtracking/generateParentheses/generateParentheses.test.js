import { test, expect } from 'vitest'
import { generateParentheses } from './generateParentheses.js'

test('generate parentheses', () => {
  const testCases = [
    { input: 1, output: ["()"] },
    { input: 2, output: ["(())", "()()"] },
    { input: 3, output: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
    { input: 5, output: ["((((()))))", "(((()())))", "(((())()))", "(((()))())", "(((())))()", "((()(())))", "((()()()))", "((()())())", "((()()))()", "((())(()))", "((())()())", "((())())()", "((()))(())", "((()))()()", "(()((())))", "(()(()()))", "(()(())())", "(()(()))()", "(()()(()))", "(()()()())", "(()()())()", "(()())(())", "(()())()()", "(())((()))", "(())(()())", "(())(())()", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()((())())", "()((()))()", "()(()(()))", "()(()()())", "()(()())()", "()(())(())", "()(())()()", "()()((()))", "()()(()())", "()()(())()", "()()()(())", "()()()()()"] },
    // Add more test cases as needed
  ]

  for (const { input, output } of testCases) {
    expect(generateParentheses(input).sort()).toEqual(output.sort())
  }
})