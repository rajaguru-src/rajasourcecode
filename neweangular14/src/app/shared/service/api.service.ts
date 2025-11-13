import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) {
   }
   getUser():Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users1');
   }
   getUserPromise():Promise<User[]> {
    const apiurl="https://jsonplaceholder.typicode.com/users";
    return lastValueFrom(this.http.get<User[]>(apiurl));
   }
}
