function transfer (payer, receiver, transferAmount) {
  if (transferAmount <= 0) throw new Error(`Transferência inválida: ${transferAmount}`)

  payer.balance -= transferAmount
  receiver.balance += transferAmount
  return [payer, receiver]
}

module.exports = {
  transfer
}