import { IObserver } from '../interface/observer.intarfece';
import { ISubject } from '../interface/subject.interface'

export class Newsletter implements ISubject {

  private observers: IObserver[] = []
  private messages: string[] = []

  registerObserver(observer: IObserver): void {
    this.observers.push(observer)
  }
  removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer)
    this.observers.splice(index, 1)
  }

  /**
   * Notifica todos os observers sobre a nova mensagem
   */
  notifyObservers(): void {
    this.observers.forEach(observer => {
      observer.update(this.messages[this.messages.length - 1])
    })
  }

  addMessage(message: string): void {
    this.messages.push(message)
    this.notifyObservers()
  }

}