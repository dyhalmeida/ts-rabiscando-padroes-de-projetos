import { Gateway } from "./gateway"

export class MoneyPayment {

  constructor(private value: number,  private gateway: Gateway) {
    this.value = value
    this.gateway = gateway
  }

  calculateRate(): number {
    return 0
  }

  calculateDiscount(): number {
      return this.value * 0.1
  }

  applyCollect(): boolean {
    const value = this.value + this.calculateRate() - this.calculateDiscount()
    return this.gateway.collect(value)
  }

}