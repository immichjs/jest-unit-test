const Account = require('../account')
const { transferWithTax } = require('../transferWithTax')

describe('Transfer', () => {
  test('Deve tranferir 500 de uma conta que tem 1000 para uma conta que tem 0 e possui taxa de 100', () => {
    const payerAccount = new Account(1, 1000)
    const receiverAccount = new Account(2, 0)

    const updatedAccounts = transferWithTax(payerAccount, receiverAccount, 500)

    expect(updatedAccounts).toHaveLength(2)
    expect(updatedAccounts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, balance: 400 }),
        expect.objectContaining({ id: 2, balance: 500 }),
      ])
    )
  })

  test('Deve tranferir 100 de uma conta que tem 2000 para uma conta que tem 1000 e possui taxa de 100', () => {
    const payerAccount = new Account(1, 2000)
    const receiverAccount = new Account(2, 1000)

    const updatedAccounts = transferWithTax(payerAccount, receiverAccount, 100)

    expect(updatedAccounts).toHaveLength(2)
    expect(updatedAccounts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, balance: 1800 }),
        expect.objectContaining({ id: 2, balance: 1100 }),
      ])
    )
  })
})