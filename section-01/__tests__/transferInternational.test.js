const { transferInternational } = require('../transferInternational')
const Account = require('../account')

describe('Tranferência internacional', () => {
  test('Não deve ser possível transferir menos que 1000', () => {
    const payerAccount = new Account(1, 2000)
    const receiverAccount = new Account(2, 0)

    const updatedAccounts = transferInternational(payerAccount, receiverAccount, 999)
    expect(updatedAccounts).toThrow('Transferência inválida: 999')
  })

  // test('Não deve ser possível transferir mais que 9999', () => {
  //   const payerAccount = new Account(1, 2000)
  //   const receiverAccount = new Account(2, 0)

  //   const updatedAccounts = transferInternational(payerAccount, receiverAccount, 10000)
  //   expect(updatedAccounts).toThrow('Transferência inválida: 10000')
  // })
})