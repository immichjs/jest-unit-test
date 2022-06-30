function transferWithTax(payerAccount, receiverAccount, transferAmount) {
  if (transferAmount <= 0) throw new Error(`Transferência inválida: ${transferAmount}`)

  const tax = 100
  payerAccount.balance -= (transferAmount + tax)
  receiverAccount.balance += transferAmount

  return [payerAccount, receiverAccount]
}

module.exports = {
  transferWithTax
}