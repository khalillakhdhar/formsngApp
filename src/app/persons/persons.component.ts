import { Component } from '@angular/core';
import { Person } from '../shared/classes/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent {
  personne= {} as Person;

}
