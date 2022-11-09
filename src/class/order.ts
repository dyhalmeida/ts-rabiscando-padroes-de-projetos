import { IShipping } from '../interface/shipping.interface'

export abstract class Order {
  protected _value: number
  protected _shipping: IShipping;

  public get value(): number {
    return this._value
  }

  public set value(value: number) {
    this._value = value
  }

  public set shipping(shipping: IShipping) {
    this._shipping = shipping
  }

  public calculateShipping(): number {
    return this._shipping.calculate(this.value)
  }
}