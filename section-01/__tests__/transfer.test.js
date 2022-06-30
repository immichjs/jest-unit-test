const Account = require('../account')
const { transfer } = require('../transfer')

describe('Transfer', () => {
  test('Deve tranferir 500 de uma conta que tem 1000 para uma conta que tem 0', () => {
    const payerAccount = new Account(1, 1000)
    const receiverAccount = new Account(2, 0)

    const updatedAccounts = transfer(payerAccount, receiverAccount, 500)

    expect(updatedAccounts).toHaveLength(2)

    expect(updatedAccounts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, balance: 500 }),
        expect.objectContaining({ id: 2, balance: 500 }),
      ])
    )
  })

  test('Deve lançar um erro caso o valor da transferência seja negativa', () => {
    const payerAccount = new Account(1, 1000)
    const receiverAccount = new Account(2, 0)

    const updatedAccounts = () => transfer(payerAccount, receiverAccount, -10)

    expect(updatedAccounts).toThrow(`Transferência inválida: -10`)
  })

  test('Deve lançar um erro caso o valor da transferência seja 0', () => {
    const payerAccount = new Account(1, 1000)
    const receiverAccount = new Account(2, 0)

    const updatedAccounts = () => transfer(payerAccount, receiverAccount, 0)

    expect(updatedAccounts).toThrow(`Transferência inválida: 0`)
  })
})