import { Gateway } from "./gateway"

export class DebitPayment {

  constructor(private value: number,  private gateway: Gateway) {
    this.value = value
    this.gateway = gateway
  }

  calculateRate(): number {
    return 4
  }

  calculateDiscount(): number {
      return this.value * 0.05
  }

  applyCollect(): boolean {
    const value = this.value + this.calculateRate() - this.calculateDiscount()
    return this.gateway.collect(value)
  }

}