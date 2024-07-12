import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/models/course';
import { Roles } from 'src/app/models/roles';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  courses = Courses;
  roles = Roles;
  userForm!: FormGroup;
  userId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = decodeURIComponent(this.route.snapshot.queryParams['data']);

    if (this.userId) {
      this.usersService.getUserById(this.userId).subscribe((data: any) => {
        this.userForm.patchValue({
          regId: data?.registrationNo,
          firstName: data?.firstName,
          lastName: data?.lastName,
          role: data?.role,
          course: data?.course,
        });
      });
    } else {
    }
    this.userForm = this.formBuilder.group({
      regId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      course: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.userId);
    if (
      this.userId !== '' &&
      this.userId !== undefined &&
      this.userId !== 'undefined' &&
      this.userId !== null
    ) {
      this.usersService
        .updateUser(this.userId, {
          registrationNo: this.userForm.value.regId,
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          course: this.userForm.value.course,
          role: this.userForm.value.role,
        })
        .subscribe(
          (data) => {
            this.router.navigateByUrl('users-list');
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      this.usersService
        .createUser({
          registrationNo: this.userForm.value.regId,
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          course: this.userForm.value.course,
          role: this.userForm.value.role,
        })
        .subscribe(
          (data) => {
            this.router.navigateByUrl('users-list');
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
}
