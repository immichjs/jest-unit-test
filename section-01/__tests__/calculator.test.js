const { sum, subtract } = require('../calculator')

describe('Calculate sum', () => {
  test('Deve somar 1 + 2 e resultar em 3', () => {
    const result = sum(1, 2)

    expect(result).toBe(3)
  })

  test('Deve somar 1 + (-2) e resultar em -1', () => {
    const result = sum(1, -2)

    expect(result).toBe(-1)
  })
})

describe('Calculate subtract', () => {
  test('Deve subtrair 5 - 2 e resultar em 3', () => {
    const result = subtract(5, 2)

    expect(result).toBe(3)
  })

  test('Deve subtrair 1 - (-2) e resultar em 3', () => {
    const result = subtract(1, -2)

    expect(result).toBe(3)
  })
})