const { transferInternational } = require('../transferInternational')
const Account = require('../account')

describe('Tranferência internacional', () => {
  test('Não deve ser possível transferir menos que 1000', () => {
    const payerAccount = new Account(1, 2000)
    const receiverAccount = new Account(2, 0)
    const transferAmount = 999

    const updatedAccounts = () => transferInternational(payerAccount, receiverAccount, transferAmount)
    expect(updatedAccounts).toThrow(`Transferência inválida: ${transferAmount}`)
  })

  test('Não deve ser possível transferir mais que 9999', () => {
    const payerAccount = new Account(1, 2000)
    const receiverAccount = new Account(2, 0)
    const transferAmount = 10000

    const updatedAccounts = () => transferInternational(payerAccount, receiverAccount, transferAmount)
    expect(updatedAccounts).toThrow(`Transferência inválida: ${transferAmount}`)
  })

  test('Se o valor da tranferência for entre 1000 e 5000 deve haver 5% de taxa sobre o valor a ser tranferido, alem da taxa fixa de 100', () => {
    const payerAccount = new Account(1, 5000)
    const receiverAccount = new Account(2, 0)
    const transferAmount = 2000

    const updatedAccounts = transferInternational(payerAccount, receiverAccount, transferAmount)
    expect(updatedAccounts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, balance: 2800 }),
        expect.objectContaining({ id: 2, balance: 2000 }),
      ])
    )
  })

  test('Se o valor da tranferência for acima de 5000 deve haver 10% de taxa sobre o valor a ser tranferido, alem da taxa fixa de 100', () => {
    const payerAccount = new Account(1, 7000)
    const receiverAccount = new Account(2, 0)
    const transferAmount = 5500

    const updatedAccounts = transferInternational(payerAccount, receiverAccount, transferAmount)
    expect(updatedAccounts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, balance: 850 }),
        expect.objectContaining({ id: 2, balance: 5500 }),
      ])
    )
  })

  test('Não é possível transferir uma quantidade (dinheiro a ser transferido + taxas) maior do que o saldo atual do pagador', () => {
    const payerAccount = new Account(1, 5000)
    const receiverAccount = new Account(2, 0)
    const transferAmount = 4900
    const fixedTax = 100
    const percentageTax = 5 / 100
    const calculateTransferAmount = transferAmount + (transferAmount * percentageTax) + fixedTax

    const updatedAccounts = () => transferInternational(payerAccount, receiverAccount, transferAmount)
    expect(updatedAccounts).toThrow(`Transferência inválida: ${calculateTransferAmount}`)
  })
})