import { IObserver } from "../interface/observer.intarfece";

export class Email {

  public static sendMail(observer: IObserver, message: string) {
    console.log(`Sending email to ${observer.getName()} - ${observer.getEmail()}`)
    console.log(`Message: ${message}`)
  }

}
