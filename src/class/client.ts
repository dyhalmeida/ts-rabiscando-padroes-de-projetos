import { IObserver } from '../interface/observer.intarfece'
import { ISubject } from '../interface/subject.interface'
import { Email } from "./email";

export class Client implements IObserver {

  constructor(private name: string, private email: string, private subject: ISubject) {
    this.name = name
    this.email = email
    this.subject = subject
    this.subject.registerObserver(this)
  }

  update(message: string): void {
    Email.sendMail(this, message)
  }
  getName(): string {
    return this.name
  }
  getEmail(): string {
    return this.email
  }

}