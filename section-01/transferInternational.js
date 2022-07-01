function transferInternational (payer, receiver, amount) {
  const fixedTax = 100
  let percentageTax = 10 / 100
  
  if (amount < 1000 || amount > 9999)
    throw new Error(`Transferência inválida: ${amount}`)
  if (amount >= 1000 && amount <= 5000)
    percentageTax = 5 / 100
  
  const amountWithTaxes = amount + (amount * percentageTax) + fixedTax

  if (payer.balance < amountWithTaxes)
    throw new Error(`Transferência inválida: ${amountWithTaxes}`)

  payer.balance -= amountWithTaxes
  receiver.balance += amount

  return [payer, receiver]
}

module.exports = {
  transferInternational
}