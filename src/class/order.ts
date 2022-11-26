export class Order {

  private awaitingPayment = 1
  private payment = 2
  private canceled = 3
  private sent = 4

  private state: number 

  constructor() {
    this.state = this.awaitingPayment
  }

  successWhenPaying() {
    if (this.state === this.awaitingPayment) {
      this.state = this.payment
      return
    }
    throw new Error('The order is awaiting payment');
  }

  cancelOrder() {
    if (this.state === this.awaitingPayment) {
      this.state = this.canceled
      return
    }
    if (this.state === this.payment) {
      this.state = this.canceled
      return
    }
    throw new Error('The order cannot be canceled')
  }

  dispatchOrder() {
    if(this.state === this.payment) {
      this.state = this.sent
      return
    }

    throw new Error('The order is canceled')
  }

}