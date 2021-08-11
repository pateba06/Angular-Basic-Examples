import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableExampleServiceService {

  // A Subject is a special type of Observable that allows values to be multicasted to many Observers.
  // Subjects are like EventEmitters.
  // Every Subject is an Observable and an Observer. 
  // You can subscribe to a Subject, and you can call next to feed values as well as error and complet
  private subject = new Subject <any>()

  /*
  /setting what we will send as message.
  */
  sendMesasage(message : string){
    this.subject.next({text: message})
  }

  /*
  / get message
  /asObservable() Creates a new Observable with this Subject as the source.
  /You can do this to create customize Observer-side logic of the Subject and conceal it from code that uses the Observable.
  */
    getMessage(){
    return this.subject.asObservable()
    }

  /*
  /clear message
  */  
    clearMessage(){
    this.subject.next();
  }



}
