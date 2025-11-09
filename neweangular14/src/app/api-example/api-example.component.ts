import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { User } from '../interfaces/user';

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
      console.log(this.users);
    })
  }

  ngOnInit(): void {
  }

}
