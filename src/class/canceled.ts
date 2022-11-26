import { State } from '../interface/state'
import { Order } from './order'

export class Canceled implements State {

  constructor(private order: Order){}

  successWhenPaying(): void {
    throw new Error('Operation not supported, the order is canceled')
  }
  cancelOrder(): void {
    throw new Error('Operation not supported, order already canceled')
  }
  dispatchOrder(): void {
    throw new Error('Operation not supported, the order is canceled')
  }

}