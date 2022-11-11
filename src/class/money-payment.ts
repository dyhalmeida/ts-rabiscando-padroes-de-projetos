import { Payment } from "./payment";
export class MoneyPayment extends Payment {

  calculateDiscount(): number {
      return this.value * 0.1
  }

}