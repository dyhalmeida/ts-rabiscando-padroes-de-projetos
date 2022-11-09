import { IShipping } from "../interface/shipping.interface";

export class CommonShipping implements IShipping {
  public calculate(value: number): number {
    return value * 0.05
  }
}