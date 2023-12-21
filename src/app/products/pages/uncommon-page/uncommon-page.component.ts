import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = "Nicolas";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    "male": "invitarlo",
    "female": "invitarla"
  }


  changeClient(): void {
    this.name = "Monki";
    this.gender = "female";
  }

  public clients: string[] = ["Maria", "Pedro", "fernando", "Hernando", "Eduardo", "Melissa", "Natalia"];
  public clientsMap = {
    "=0": "no tenemos ningun cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos 2 esperando",
    "other": "tenemos # clientes esperando"
  }

  deleteClient(): void {
    this.clients.pop();
  }

  public person = {
    name: "Nicolas",
    age: 28,
    address: "Maipu, Chile"
  }

  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa");
    }, 3500)
  });

}
