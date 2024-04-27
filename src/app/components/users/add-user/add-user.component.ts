import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Courses } from 'src/app/models/course';
import { Roles } from 'src/app/models/roles';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  courses = Courses;
  roles = Roles;
  userForm: any;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {}

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({ 
      regId: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      role: ['',Validators.required],
      course: ['',Validators.required]
    });
  }

  onSubmit() {
    this.usersService.createUser(
      {
        registrationNo: this.userForm.value.regId,
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        course: this.userForm.value.course,
        role: this.userForm.value.role,
      }
    ).subscribe();
  }


}
