import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {

  name: string = 'Isaac';
  gender: "male" | "female" = "male";
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };
  clients: string[] = ['Isaac', 'Melissa', 'Juan', 'Fernando', 'Maria', 'Jose', 'Luis'];
  clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    other: 'Tenemos # clientes esperando.'
  };
  person = {
    name: 'Isaac',
    age: 31,
    address: 'Calle 123'
  };

  changeClient() {
    this.name = 'Melissa';
    this.gender = "female";
  }

  deleteClient() {
    this.clients.shift();
  }

  myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('Timer', value))
  );

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa.');
    }, 300);
  });

}
