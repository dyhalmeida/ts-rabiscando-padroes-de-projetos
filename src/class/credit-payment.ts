import { Payment } from "./payment"
export class CreditPayment extends Payment {

  calculateRate(): number {
    return this.value * 0.05
  }

  calculateDiscount(): number {
    if (this.value > 300) {
      return this.value * 0.02
    }
    return 0
  }

}