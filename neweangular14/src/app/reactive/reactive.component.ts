import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.sass']
})
export class ReactiveComponent implements OnInit {  
  loginForm:FormGroup;
  user:any;  
  constructor(private fb:FormBuilder) { 
    this.loginForm = this.fb.group({
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.minLength(0)]]
    });
    this.user ={
      email:'',
      password:''
    }
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.loginForm.value);
  }
  submit1(userForm:NgForm) {
    console.log(userForm.value);
  }
}
