function transferInternational (payer, receiver, amount) {
  const fixedTax = 100
  let percentTax = 0.05
  // if (amount < 1000) throw new Error('Transferência inválida: ' + amount)
  if (amount > 9999) throw new Error('Transferência inválida: ' + amount)

  if (amount >= 5000) {
    percentTax = 0.1
  }

  payer.balance -= (amount + fixedTax) * percentTax
  receiver.balance += amount
  return [payer, receiver]
}

module.exports = {
  transferInternational
}