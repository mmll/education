import { Injectable } from '@angular/core';
import {User} from '../entity/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http ,HttpModule} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`http://localhost:3000/users`, user);
  }
}
