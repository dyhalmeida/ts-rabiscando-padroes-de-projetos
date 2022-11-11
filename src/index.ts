import { CreditPayment } from "./class/credit-payment"
import { DebitPayment } from "./class/debit-payment"
import { Gateway } from "./class/gateway"
import { MoneyPayment } from "./class/money-payment"

const value = 1000
const gateway = new Gateway()

const creditPayment = new CreditPayment(value, gateway)
console.log('Credit: ')
creditPayment.applyCollect()

const debitPayment = new DebitPayment(value, gateway)
console.log('Debit: ')
debitPayment.applyCollect()

const moneyPayment = new MoneyPayment(value, gateway)
console.log('Money: ')
moneyPayment.applyCollect()
