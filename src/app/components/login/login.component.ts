import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }



  /*if(this.loginScreen.valid){
    console.log(this.loginScreen.value);
    console.log(this.loginScreen.email);
    console.log(this.loginScreen.value.password);
  }*/

}
