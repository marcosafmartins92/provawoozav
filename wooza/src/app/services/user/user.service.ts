import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://127.0.0.1:3000/users/';

  constructor(private http: HttpClient) { }

  getUsers(){      
    return this.http.get<any[]>(this.url);
  }

}
