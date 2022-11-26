import { State } from '../interface/state'
import { Order } from './order'

export class Sent implements State {

  constructor(private order: Order){}

  successWhenPaying(): void {
    throw new Error('Operation not supported, the order has already been paid and sent')
  }
  cancelOrder(): void {
    throw new Error('Operation not supported, the order has already been sent')
  }
  dispatchOrder(): void {
    throw new Error('Operation not supported, the order has already been sent')
  }

}