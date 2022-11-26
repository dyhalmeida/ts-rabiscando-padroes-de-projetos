import { State } from '../interface/state'
import { Order } from './order'

export class Payment implements State {

  constructor(private order: Order){}

  successWhenPaying(): void {
    throw new Error('Operation not supported, the order has already been paid')
  }
  cancelOrder(): void {
    this.order.setState(this.order.getCanceled())
  }
  dispatchOrder(): void {
    this.order.setState(this.order.getSent())
  }

}