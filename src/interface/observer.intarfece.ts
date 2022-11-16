export interface IObserver {
  update(message: string): void
  getName(): string
  getEmail(): string
}