import { Component, OnInit } from '@angular/core';
import { DatabindService } from './databind.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.sass']
})
export class DatabindComponent implements OnInit {
  public title:any="welcome";message:any;
  public imageUrl:any="../assets/angular.png";
  public username:any;user:User[]=[];

  constructor(private dataBindService:DatabindService) { }

  ngOnInit(): void {
    this.dataBindService.getUser().subscribe(data=>{
      this.user = data;
      console.log("user",this.user);
    });
  }
  showMessage(){
    console.log("button clicked");
    this.message="newtext";
  }

}
