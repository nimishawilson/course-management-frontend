import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

export interface UsersTable {
  registrationId: string;
  firstName: string;
  lastName: string;
  role: string;
  course: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['registrationId', 'firstName', 'lastName', 'role', 'course'];
  dataSource: UsersTable[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: any) => {
      this.dataSource = data.map((item: any) => ({
        registrationId: item.registrationNo,
        firstName: item.firstName,
        lastName: item.lastName,
        course: item.course,
        role: item.role
      }))
    })
  }

}
