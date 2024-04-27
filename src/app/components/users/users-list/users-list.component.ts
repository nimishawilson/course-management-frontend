import { Component } from '@angular/core';

export interface UsersTable {
  registrationId: string;
  firstName: string;
  lastName: string;
  role: string;
}

const ELEMENT_DATA: UsersTable[] = [
  {registrationId: 'HS783MS', firstName: 'Nimisha', lastName: 'Wilson', role: 'Admin'},
  {registrationId: 'NSKD97K', firstName: 'Thomas', lastName: 'S', role: 'Student'},
  {registrationId: 'HSISGDF', firstName: 'Roy', lastName: 'P', role: 'Student'},

];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = ['registrationId', 'firstName', 'lastName', 'role'];
  dataSource = ELEMENT_DATA;

}
