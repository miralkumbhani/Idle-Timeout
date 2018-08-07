import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group({
  		email: ['', [Validators.required, Validators.email]],
  		password: ['', Validators.required]
  	});
  }

  onSubmit() {
  	let formValue = this.loginForm.value;
  	if(formValue.email === "admin@zymr.com" && formValue.password === "admin@123") {
  		this.router.navigate(['dashboard']);
  	} else {
  		this.router.navigate(['login']);
  	}
  }

}
