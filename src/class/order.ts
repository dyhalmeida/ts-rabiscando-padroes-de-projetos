import { State } from '../interface/state'
import { AwaitingPayment } from './awaiting-payment'
import { Canceled } from './canceled'
import { Payment } from './payment'
import { Sent } from './sent'
export class Order {

  private awaitingPayment: State
  private payment: State
  private canceled: State
  private sent: State
  private state: State

  constructor() {
    this.awaitingPayment = new AwaitingPayment(this)
    this.payment = new Payment(this)
    this.canceled = new Canceled(this)
    this.sent = new Sent(this)

    this.state = this.awaitingPayment
  }

  successWhenPaying() {
    try {
      this.state.successWhenPaying()
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  cancelOrder() {
    try {
      this.state.cancelOrder()
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  dispatchOrder() {
    try {
      this.state.dispatchOrder()
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  getAwaitingPayment(): State {
    return this.awaitingPayment
  }

  getPayment(): State {
    return this.payment
  }

  getCanceled(): State {
    return this.canceled
  }

  getSent(): State {
    return this.sent
  }

  setState(state: State): void {
    this.state = state
  }

}
