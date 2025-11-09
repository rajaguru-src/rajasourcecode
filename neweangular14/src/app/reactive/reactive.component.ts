import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.sass']
})
export class ReactiveComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.loginForm = this.fb.group({
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.minLength(0)]]
    });
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.loginForm.value);
  }
}
