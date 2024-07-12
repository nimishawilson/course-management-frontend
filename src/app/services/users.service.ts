import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  endPoint = 'http://localhost:3000/users/';

  createUser(userDetails: User) {
    return this.http.post(this.endPoint, userDetails);
  }

  updateUser(id: string, userDetails: User) {
    return this.http.put(`${this.endPoint}${id}`, userDetails);
  }

  getUsers() {
    return this.http.get(this.endPoint);
  }

  getUserById(userId: string) {
    return this.http.get(`${this.endPoint}${userId}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.endPoint}${id}`);
  }
  
}
