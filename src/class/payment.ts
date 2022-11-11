import { IGateway } from "../interface/gateway"

export abstract class Payment {

  constructor(protected value: number,  protected gateway: IGateway) {
    this.value = value
    this.gateway = gateway
  }

  calculateRate(): number {
    return 0
  }

  abstract calculateDiscount(): number

  applyCollect(): boolean {
    const value = this.value + this.calculateRate() - this.calculateDiscount()
    return this.gateway.collect(value)
  }

}