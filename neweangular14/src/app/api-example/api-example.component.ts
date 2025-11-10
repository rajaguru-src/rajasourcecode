import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { User } from '../interfaces/user';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-api-example',
  templateUrl: './api-example.component.html',
  styleUrls: ['./api-example.component.sass']
})
export class ApiExampleComponent implements OnInit {
  users: User[]=[];
  constructor(private apiService:ApiService) { 
    this.apiService.getUser().subscribe(data=>{
      this.users = data;
      console.log("obveration",this.users);
    });

    this.apiService.getUser().pipe(map((users)=>{
      return users.filter(data=>Number(data.id) > 1)
    })      
    ).subscribe(filterUser=>{
      console.log("filterUser",filterUser);
    }      
    );


    this.apiService.getUserPromise().then(data=>{
      this.users = data;
      console.log("promise user",this.users);
    });
  }

  ngOnInit(): void {
  }

}
