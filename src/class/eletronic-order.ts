import { Order } from "./order"

export class EletronicOrder extends Order {
  private _sectorName: string

  constructor(){
    super()
    this._sectorName = 'Eletronic'
  }

  get sectorName(): string {
    return this._sectorName
  }

  set sectorName(value: string) {
    this._sectorName = value
  }
}