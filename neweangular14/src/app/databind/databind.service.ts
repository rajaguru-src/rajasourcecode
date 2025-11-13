import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class DatabindService {

  constructor(private http:HttpClient) { }
   getUser():Observable<User[]> {
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
     }
}
