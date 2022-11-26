export interface State {
  successWhenPaying(): void
  cancelOrder(): void
  dispatchOrder(): void
}