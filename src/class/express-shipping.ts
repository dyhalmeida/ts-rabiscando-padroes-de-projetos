import { IShipping } from "../interface/shipping.interface";

export class ExpressShipping implements IShipping {
  public calculate(value: number): number {
    return value * 0.1
  }
}