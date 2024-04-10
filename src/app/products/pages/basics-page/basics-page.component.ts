import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  nameLower: string = 'isaac';
  nameUpper: string = 'ISAAC';
  fullName: string = 'IsAaC';
  customDate: Date = new Date();

}
