import { IObserver } from './observer.intarfece'

export interface ISubject {
  registerObserver(observer: IObserver): void
  removeObserver(observer: IObserver): void
  notifyObservers(): void
}