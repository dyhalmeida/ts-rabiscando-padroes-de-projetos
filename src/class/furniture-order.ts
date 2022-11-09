import { Order } from "./order"

export class FurnitureOrder extends Order {
  private _sectorName: string

  constructor(){
    super()
    this._sectorName = 'Furniture'
  }

  get sectorName(): string {
    return this._sectorName
  }

  set sectorName(value: string) {
    this._sectorName = value
  }
}