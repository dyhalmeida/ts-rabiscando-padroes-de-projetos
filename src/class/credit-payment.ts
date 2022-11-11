import { Gateway } from "./gateway"

export class CreditPayment {

  constructor(private value: number,  private gateway: Gateway) {
    this.value = value
    this.gateway = gateway
  }

  calculateRate(): number {
    return this.value * 0.05
  }

  calculateDiscount(): number {
    if (this.value > 300) {
      return this.value * 0.02
    }
    return 0
  }

  applyCollect(): boolean {
    const value = this.value + this.calculateRate() - this.calculateDiscount()
    return this.gateway.collect(value)
  }

}