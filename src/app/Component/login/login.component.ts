import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../../Services/Users/userservice.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UserserviceService
  ) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() { return this.login.controls; }

  loginForm() {
    this.userservice.Login(this.login.value).subscribe(data => {
      localStorage.setItem('token', data['token']);
      console.log(data);
      this.router.navigate(['dashboard'])
    })

  }
}
