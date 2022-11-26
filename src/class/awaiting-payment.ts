import { State } from '../interface/state'
import { Order } from './order'

export class AwaitingPayment implements State {


  constructor(private order: Order){}

  successWhenPaying(): void {
    this.order.setState(this.order.getPayment())
  }
  cancelOrder(): void {
    throw new Error('Operation not supported, the order has not yet been paid')
  }
  dispatchOrder(): void {
    throw new Error('Operation not supported, the order has not yet been paid')
  }

}