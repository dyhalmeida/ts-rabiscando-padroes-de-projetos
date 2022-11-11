import { Payment } from "./payment"
export class DebitPayment extends Payment {

  calculateRate(): number {
    return 4
  }

  calculateDiscount(): number {
      return this.value * 0.05
  }

}